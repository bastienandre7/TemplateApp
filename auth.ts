// auth.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Session, User } from "next-auth";
import NextAuth, { AuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY!);

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      from: "BloomTPL <hello@bloomtpl.com>",
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        await resend.emails.send({
          from: provider.from,
          to: identifier,
          subject: "Sign in to BloomTPL",
          html: `
            <div style="font-family: 'Inter', Arial, sans-serif; padding: 32px; background-color: #f4f6fb; color: #111;">
              <div style="max-width: 520px; margin: auto; background: #fff; padding: 32px 28px; border-radius: 12px; box-shadow: 0 4px 24px 0 #0001;">
                <h2 style="margin-bottom: 18px; font-size: 1.5rem; color: #111;">Sign in to <span style="color:#6366f1;">BloomTPL</span></h2>
                <p style="margin-bottom: 28px; color: #444;">Click the button below to securely log into your account:</p>
                <a href="${url}" style="display:inline-block; padding: 14px 32px; background: linear-gradient(90deg,#6366f1,#0ea5e9); color: #fff; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; letter-spacing: 0.01em;">Sign In</a>
                <p style="margin-top: 36px; font-size: 13px; color: #888;">If you didn't request this, you can safely ignore this email.<br><br>
                <span style="color:#bbb;">&copy; ${new Date().getFullYear()} BloomTPL</span></p>
              </div>
            </div>
          `,
        });
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      if (session?.user && user) {
        session.user.id = user.id;

        // Récupérer le rôle depuis la DB
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        });

        session.user.role = dbUser?.role || "USER";
      }
      return session;
    },

    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        // Le rôle sera récupéré dans le callback session
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.AUTH_SECRET,
};

const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
export { auth, handlers, signIn, signOut };

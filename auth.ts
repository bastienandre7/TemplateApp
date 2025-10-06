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
  <div style="max-width: 520px; margin: auto; background: #fff; padding: 36px 32px; border-radius: 16px; box-shadow: 0 4px 24px 0 #0001;">
    <div style="text-align: center; margin-bottom: 24px;">
      <img src="https://bloomtpl.com/icons/favicon.ico" alt="BloomTPL Logo" width="48" height="48" style="margin-bottom: 12px;" />
      <h2 style="margin: 0 0 10px 0; font-size: 2rem; color: #111; font-weight: 700;">
        Welcome to <span style="color:#6366f1;">BloomTPL</span>
      </h2>
      <p style="margin: 0; color: #6366f1; font-size: 1.1rem; font-weight: 500;">
        Your Next.js Template Hub
      </p>
    </div>
    <p style="margin-bottom: 28px; color: #444; font-size: 1rem; text-align: center;">
      Hello,<br>
      To securely log into your BloomTPL account, simply click the button below:
    </p>
    <div style="text-align: center; margin-bottom: 32px;">
      <a href="${url}" style="display:inline-block; padding: 16px 40px; background: #6366f1; color: #fff; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 1.1rem; letter-spacing: 0.01em; box-shadow: 0 2px 8px #6366f133;">
        Sign In to BloomTPL
      </a>
    </div>
    <p style="margin-top: 0; font-size: 13px; color: #888; text-align: center;">
      If you did not request this email, you can safely ignore it.<br><br>
      <span style="color:#bbb;">&copy; ${new Date().getFullYear()} BloomTPL</span>
    </p>
  </div>
</div>
          `,
        });
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      if (session?.user && user) {
        session.user.id = user.id;

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
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.AUTH_SECRET,
};

const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
export { auth, handlers, signIn, signOut };

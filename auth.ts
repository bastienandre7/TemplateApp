// auth.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY!);

export const authOptions = {
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
            <div style="font-family: sans-serif; padding: 32px; background-color: #f9f9f9; color: #111;">
              <div style="max-width: 520px; margin: auto; background: #fff; padding: 32px; border-radius: 8px;">
                <h2 style="margin-bottom: 16px;">Sign in to <span style="color:#000;">BloomTPL</span> </h2>
                <p style="margin-bottom: 24px;">Click the button below to log into your account:</p>
                <a href="${url}" style="display:inline-block; padding: 12px 24px; background-color: #000; color: #fff; border-radius: 6px; text-decoration: none;">Sign In</a>
                <p style="margin-top: 32px; font-size: 12px; color: #888;">If you didn’t request this, you can ignore this email.</p>
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

    TwitterProvider({
      clientId: process.env.TWITTER_ID!,
      clientSecret: process.env.TWITTER_SECRET!,
      version: "2.0",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.AUTH_SECRET,
};

const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
export { auth, handlers, signIn, signOut };

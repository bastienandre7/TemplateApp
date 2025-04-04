// auth.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT || "465"),
        secure: true,
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail email
          pass: process.env.EMAIL_PASS, // Your Google App Password
        },
      },
      from: process.env.EMAIL_FROM, // The email address that sends the emails
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  }, 
  secret: process.env.AUTH_SECRET,
};

// Export handlers, signIn, signOut, and auth
const { handlers, signIn, signOut, auth } = NextAuth(authOptions); // Debugging line
export { auth, handlers, signIn, signOut };

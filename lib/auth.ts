import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role?: string;
        } & DefaultSession["user"]
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST || "localhost",
                port: Number(process.env.EMAIL_SERVER_PORT) || 587,
                auth: {
                    user: process.env.EMAIL_SERVER_USER || "",
                    pass: process.env.EMAIL_SERVER_PASSWORD || "",
                },
            },
            from: process.env.EMAIL_FROM || "noreply@example.com",
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            if (session?.user) {
                session.user.id = user.id;
                // Include any custom fields you added to the User model here:
                // @ts-ignore
                session.user.role = user.role;
            }
            return session;
        },
    },
    session: {
        strategy: "database",
    },
    pages: {
        signIn: "/auth/signin",
        // verifyRequest: '/auth/verify-request', 
    },
    debug: true,
};

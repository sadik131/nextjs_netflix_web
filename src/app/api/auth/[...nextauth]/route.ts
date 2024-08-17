import NextAuth, { Session } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/utils/prisma';
import { JWT } from 'next-auth/jwt';

interface Credentials {
    email: string;
    password: string;
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                console.log(credentials)

                // if (!credentials.email && !credentials?.password) {
                //     throw new Error("put all noticifation")
                // }

                const user = await prisma.user.findFirst({
                    where: { email: credentials?.email }
                })
                if (!user) {
                    return null;
                }

                if (user.password !== credentials?.password) {
                    throw new Error("invalid credentials")
                }
                return user;
            },

        }),
    ],
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/',
    },
    session: {
        strategy: "jwt" as const,
        maxAge: 2 * 60 * 60,
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

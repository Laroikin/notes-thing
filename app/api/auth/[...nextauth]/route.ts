import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { env } from '@/env.mjs';

export const authOptions = {
  useSecureCookies: process.env.NODE_ENV === 'production',
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

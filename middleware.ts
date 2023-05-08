import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(req => {}, {
  pages: {
    signIn: '/login',
    signOut: '/logout'
  }
});

export const config = {
  matcher: ['/protected']
};

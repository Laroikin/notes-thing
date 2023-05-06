import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  req => {
    console.log(req.nextauth, '1');
    // if(req.nextUrl.pathname)
  },
  {
    pages: {
      signIn: '/login',
      signOut: '/logout'
    }
  }
);

export const config = {
  matcher: ['/protected']
};

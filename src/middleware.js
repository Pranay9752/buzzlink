// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(request) {
//   const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

//   if (!token) {
//     return NextResponse.redirect(new URL("/auth/signin", request.url));
//   }

//   // Check the role and redirect based on the role
//   switch (token.role) {
//     case "influencer":
//       if (!request.nextUrl.pathname.startsWith("/influencer")) {
//         return NextResponse.redirect(new URL("/influencer/home", request.url));
//       }
//       break;
//     case "brand":
//       if (!request.nextUrl.pathname.startsWith("/dashboard/brand")) {
//         return NextResponse.redirect(new URL("/dashboard/brand", request.url));
//       }
//       break;
//     default:
//       return NextResponse.redirect(new URL("/auth/signin", request.url));
//   }
// }

// export const config = {
//   matcher: [
//     // Match all routes except the ones that start with /auth, /api, and static assets
//     "/((?!auth|api|_next/static|_next/image|favicon.ico|/).*)",
//   ],
// };

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // Check the role and redirect based on the role
  switch (token.role) {
    case "influencer":
      if (!request.nextUrl.pathname.startsWith("/influencer")) {
        return NextResponse.redirect(new URL("/influencer/home", request.url));
      }
      break;
    case "brand":
      if (!request.nextUrl.pathname.startsWith("/dashboard/brand")) {
        return NextResponse.redirect(new URL("/dashboard/brand", request.url));
      }
      break;
    default:
      return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return res;
}

export const config = {
  matcher: [
    // Match all routes except the ones that start with /auth, /api, and static assets
    // "/((?!auth|api|_next/static|_next/image|favicon.ico|/).*)",
  ],
};

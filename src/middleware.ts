import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function checks if there is a token and redirects accordingly
export function middleware(request: NextRequest) {

    const token = request.cookies.get('token')?.value; // Adjust this if your token is stored elsewhere (like localStorage)

    const loginPath = '/dashboard/login';
    const homePath = '/';

    // If the user has a token, redirect to the home page
    if (token) {
        if (request.nextUrl.pathname === loginPath) {
            return NextResponse.redirect(new URL(homePath, request.url));
        }
    } else {
        // If no token, redirect to login page
        if (request.nextUrl.pathname !== loginPath) {
            return NextResponse.redirect(new URL(loginPath, request.url));
        }
    }

    return NextResponse.next();
}

// Define the paths where the middleware will be active
export const config = {
    matcher: ['/', '/dashboard/login', '/dashboard/:path*'], // Apply to specific routes
};
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/options";

export async function middleware(request: NextRequest){
    const session = await getServerSession(authOptions);
    const token = false;

    if(token){
        return NextResponse.redirect(new URL('/users', request.url));
    }

    return NextResponse.redirect(new URL('/not-allowed', request.url));
}

export const config = {
    matcher : ['/test/:path*']
}
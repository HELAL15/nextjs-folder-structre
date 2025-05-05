import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const res = NextResponse.next();
    // const token = request.cookies.get('token')?.value;
    // if (token) {
    //     console.log(token);
    // }

    return res;
}

export const config = {
    matcher: []
};

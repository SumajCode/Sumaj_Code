import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

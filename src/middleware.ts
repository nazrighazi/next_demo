import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  if (device.type !== "mobile") {
    return NextResponse.rewrite(new URL("/mobile", request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

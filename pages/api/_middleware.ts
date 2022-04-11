import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import {
  BACKEND_ROUTES,
  FRONTEND_ROUTES,
  PUBLIC_API,
  PUBLIC_PAGES,
} from "./routes";
import { verifyJWT } from "../../utils/_auth/_jwt";
import { getTokens } from "../../utils/_auth/_tokens";
import { NextApiRequest } from "next";

export async function middleware(request: NextApiRequest) {
  const { url } = request;
  const access: string = request.headers["x-access-token"]?.toString()!;
  const refresh: string = request.headers["x-refresh-token"]?.toString()!;

  // Skip allowed urls without authentication
  //@ts-ignore
  if (PUBLIC_API.includes(url)) {
    return NextResponse.next();
  }

  // Check if accessToken is active
  if (verifyJWT(access)) {
    console.log("Access");
    // Keep same token cookies and forward request
    return NextResponse.next();
  }

  // Both tokens are expired, redirect to unauthorized page
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_APP}/${FRONTEND_ROUTES.LOGIN}`
  );
}

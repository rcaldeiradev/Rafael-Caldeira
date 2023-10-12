import { match as matchLocale } from '@formatjs/intl-localematcher';
import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';

const availableLocales = ['en', 'pt'];
const defaultLocale = 'en';

function headersToObject(request: NextRequest) {
  const headersObject: Record<string, string> = {};
  request.headers.forEach((value, key) => (headersObject[key] = value));

  return headersObject;
}

function getLocale(request: NextRequest) {
  const requestedLocales = new Negotiator({
    headers: headersToObject(request),
  }).languages();

  return matchLocale(requestedLocales, availableLocales, defaultLocale);
}
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = availableLocales.some((locale) => {
    return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
  });

  if (pathnameHasLocale) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
};

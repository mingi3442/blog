import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request
  // Cloned url to work with
  const url = nextUrl.clone()
  // Client language, defaults to en
  const language =
    headers.get('accept-language')?.split(',')?.[0].split('-')?.[0].toLowerCase() || 'en'

  try {
    if (nextUrl.pathname.startsWith('/_next/image')) {
      const imageUrl = nextUrl.searchParams.get('url')
      if (imageUrl) {
        const newImageUrl = imageUrl.replace(/^\/(en|ko)\//, '/')
        nextUrl.searchParams.set('url', newImageUrl)
        return NextResponse.rewrite(nextUrl.toString())
      }
    }
    // Early return if it is a public file such as an image or an api call
    if (PUBLIC_FILE.test(nextUrl.pathname) || nextUrl.pathname.includes('/api')) {
      return undefined
    }

    // Proceed without redirection if on a localized path
    if (nextUrl.pathname.startsWith('/en') || nextUrl.pathname.startsWith('/ko')) {
      return undefined
    }

    if (language === 'ko') {
      url.pathname = `/ko${nextUrl.pathname}`
      return NextResponse.redirect(url)
    }
    if (language === 'en') {
      url.pathname = `/en${nextUrl.pathname}`
      return NextResponse.redirect(url)
    }

    if (!['ko'].includes(language)) {
      url.pathname = `/en${nextUrl.pathname}`
      return NextResponse.redirect(url)
    }

    return undefined
  } catch (error) {
    console.log(error)
  }
}

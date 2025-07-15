import siteMetadata from '@/data/siteMetadata'
import { MetadataRoute } from 'next'

// 정적 생성 강제 및 재검증 비활성화
export const dynamic = 'force-static'
export const revalidate = false

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/search'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/private/'],
        crawlDelay: 0, // Google 크롤러에 대한 제한 없음
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Yeti', // 네이버 검색엔진
        allow: '/',
        disallow: ['/api/', '/private/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Daum', // 다음 검색엔진
        allow: '/',
        disallow: ['/api/', '/private/'],
        crawlDelay: 0,
      },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  }
}

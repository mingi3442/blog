import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date,
  }))

  const routes = ['', 'posts', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const allRoutes = [...routes, ...blogRoutes]

  // Sitemap 객체를 생성
  const sitemapEntries = allRoutes.map((route) => ({
    url: route.url,
    lastModified: route.lastModified,
  }))

  // XML 문자열 생성
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries
    .map(
      (entry) => `
    <url>
      <loc>${entry.url}</loc>
      <lastmod>${entry.lastModified}</lastmod>
    </url>
  `
    )
    .join('')}
</urlset>
  `

  return xml.trim() as unknown as MetadataRoute.Sitemap // XML 문자열을 Sitemap 타입으로 변환
}

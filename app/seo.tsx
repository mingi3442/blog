import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  slug?: string
  tags?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

function generateKeywords(tags?: string[], title?: string): string[] {
  const baseKeywords = ['Blog', 'Development', 'Programming', 'Web Development', 'Software Engineering', 'Tech Blog']
  const tagKeywords = tags || []
  const titleKeywords = title ? title.split(' ').filter(word => word.length > 2) : []
  
  return [...baseKeywords, ...tagKeywords, ...titleKeywords].slice(0, 10)
}

function optimizeDescription(description: string, maxLength: number = 155): string {
  if (description.length <= maxLength) return description
  
  const truncated = description.substring(0, maxLength - 3)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
}

export function genPageMetadata({
  title,
  description,
  image,
  slug,
  tags,
  ...rest
}: PageSEOProps): Metadata {
  const pageUrl = slug ? `${siteMetadata.siteUrl}/${slug}` : siteMetadata.siteUrl
  const optimizedDescription = description ? optimizeDescription(description) : siteMetadata.description
  const keywords = generateKeywords(tags, title)
  
  return {
    title: {
      absolute: title,
    },
    description: optimizedDescription,
    keywords: keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description: optimizedDescription,
      url: pageUrl,
      images: image ? [image] : undefined,
      locale: 'ko_KR',
      type: 'article',
    },
    twitter: {
      title,
      card: 'summary_large_image',
      images: image ? [image] : undefined,
    },
    ...rest,
  }
}

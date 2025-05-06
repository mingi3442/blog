import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  slug?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  slug,
  ...rest
}: PageSEOProps): Metadata {
  const pageUrl = slug ? `${siteMetadata.siteUrl}/${slug}` : siteMetadata.siteUrl
  return {
    title: {
      absolute: title,
    },
    description: description || siteMetadata.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description: description || siteMetadata.description,
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

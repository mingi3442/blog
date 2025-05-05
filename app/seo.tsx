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
  // 페이지 전체 URL 생성
  const pageUrl = slug ? `${siteMetadata.siteUrl}/${slug}` : siteMetadata.siteUrl

  return {
    // 제목만 설정하고 template 형식은 layout.tsx에서 처리
    title,
    // 설명 설정
    description: description || siteMetadata.description,
    // 각 페이지마다 고유한 canonical URL 설정
    alternates: {
      canonical: pageUrl,
    },
    // OpenGraph 설정
    openGraph: {
      // layout.tsx의 template 형식과 일치시킴
      title,
      description: description || siteMetadata.description,
      // 페이지별 고유한 URL 사용
      url: pageUrl,
      // siteName은 layout.tsx에서 이미 설정됨
      images: image ? [image] : undefined, // undefined로 설정하면 layout.tsx의 기본값 사용
      locale: 'ko_KR', // en_US에서 ko_KR로 변경
      type: 'article', // 블로그 포스트는 주로 article 타입
    },
    // Twitter 카드 설정
    twitter: {
      title, // 이중 제목 방지
      card: 'summary_large_image',
      images: image ? [image] : undefined, // undefined로 설정하면 layout.tsx의 기본값 사용
    },
    // 추가 설정
    ...rest,
  }
}

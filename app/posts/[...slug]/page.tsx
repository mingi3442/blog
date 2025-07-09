import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/common/atoms/PageTitle'
import { components } from '@/components/posts/atoms/MDXComponents'
import siteMetadata from '@/data/siteMetadata'
import PostBanner from '@/layouts/PostBanner'
import PostLayout from '@/layouts/PostLayout'
import PostSimple from '@/layouts/PostSimple'
import type { Authors, Blog } from 'contentlayer/generated'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import { Metadata } from 'next'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer.js'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)

  if (!post) {
    throw new Error('Post not found')
  }

  const authorList = post.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  let featuredImage = siteMetadata.socialBanner

  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
    featuredImage = imageList[0]
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${siteMetadata.siteUrl}/${post.slug}`,
      images: [featuredImage],
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
      type: 'article',
    },
    twitter: {
      title: post.title,
      card: 'summary_large_image',
      images: [featuredImage],
    },
  }
}
export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[]; locale: string } }) {
  const slug = decodeURI(params.slug.join('/'))

  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug) as Blog
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData

  // JSON-LD 구조화된 데이터 개선
  jsonLd['@context'] = 'https://schema.org'
  jsonLd['@type'] = 'BlogPosting'
  jsonLd['mainEntityOfPage'] = {
    '@type': 'WebPage',
    '@id': `${siteMetadata.siteUrl}/${post.slug}`,
  }
  jsonLd['headline'] = post.title
  jsonLd['description'] = post.summary
  jsonLd['image'] = post.images || siteMetadata.socialBanner
  jsonLd['datePublished'] = new Date(post.date).toISOString()
  jsonLd['dateModified'] = new Date(post.lastmod || post.date).toISOString()
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })
  jsonLd['publisher'] = {
    '@type': 'Organization',
    name: siteMetadata.author,
    logo: {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}/static/images/logo.png`,
    },
  }
  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}

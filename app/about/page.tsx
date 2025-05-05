import AboutContainer from '@/components/about/organisms/AboutContainer'
import siteMetadata from '@/data/siteMetadata'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

export const metadata = genPageMetadata({
  title: 'About',
  description: '소개',
  url: siteMetadata.siteUrl + '/about',
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <AboutContainer />
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}

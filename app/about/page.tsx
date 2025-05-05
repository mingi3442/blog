import AboutContainer from '@/components/about/organisms/AboutContainer'
import AuthorLayout from '@/layouts/AuthorLayout'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({
  title: 'About',
  description: 'About me',
  slug: 'about',
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

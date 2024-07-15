import SEO from '@/components/SEO'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Fragment } from 'react'
import IntroduceContainer from '../templates/IntroduceContainer'
import LatesPostContainer from '../templates/LatesPostContainer'

export default function MainPage({
  posts,
  author,
}: {
  posts: CoreContent<Blog>[]
  author: Authors
}) {
  return (
    <>
      <SEO />
      <Fragment>
        <IntroduceContainer />
        <LatesPostContainer posts={posts} author={author} />
      </Fragment>

      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

import Tag from '@/components/tags/Tag'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { PostSummaryTextElement } from '../../common/atoms/PostTextElement'
import NavigationButton from '../../common/molecules/NavigationButton'
import PostThumbnailWrapper from '../../common/molecules/PostThumbnailWrapper'
import PostAuthorSection from '../../common/organisms/PostAuthorSection'
import { PostTitleTextElement } from '../atoms/PostTextElement'

export default function PostContainer({
  post,
  author,
}: {
  post: Blog | CoreContent<Blog>
  author: Authors
}) {
  const { slug, date, title, summary, tags, images } = post

  return (
    <div className="container">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <PostThumbnailWrapper
          title={title}
          slug={slug}
          image={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
          className="lg:mx-6 lg:w-1/2 rounded-xl h-72 border-gray-300/40 border-[0.5px]"
          imageObjectFit="cover"
        />

        <div className="mt-2 lg:w-1/2 lg:mt-0 lg:h-72 flex flex-col items-start justify-start min-h-full">
          <div className="flex-1">
            <PostTitleTextElement title={title} />

            <div className="mt-4 flex flex-wrap">
              {tags.map((tag) => (
                <Tag className="mr-2 my-1" key={tag} text={tag} />
              ))}
            </div>

            <PostSummaryTextElement summary={summary ?? ''} />
            <div className="mt-3">
              <NavigationButton
                color="primary"
                href={`/posts/${slug}`}
                title={'Read more'}
                isArrow={true}
              />
            </div>
          </div>
          <PostAuthorSection author={author} date={date} />
        </div>
      </div>
    </div>
  )
}

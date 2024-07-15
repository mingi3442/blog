import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

import { PostSummaryTextElement } from '@/components/common/atoms/PostTextElement'
import PostThumbnailWrapper from '@/components/common/molecules/PostThumbnailWrapper'
import NavigationButton from '../../common/molecules/NavigationButton'
import PostAuthorSection from '../../common/organisms/PostAuthorSection'
import Tag from '../../tags/Tag'
import { MainPostTitleTextElement } from '../atoms/MainTextElement'

interface MainPostCardProps {
  post: CoreContent<Blog>
  author: Authors
}

const MainPostCard = ({ post, author }: MainPostCardProps) => {
  const { slug, date, title, summary, tags, images } = post
  return (
    <div className="container rounded-xl shadow-md bg-slate-200 dark:bg-slate-700 flex flex-col justify-center items-center p-4">
      <PostThumbnailWrapper
        title={title}
        slug={slug}
        image={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
        className="mb-4 rounded-xl h-72 shadow-md bg-white"
        imageObjectFit="contain"
      />

      <div className="mt-2 w-full lg:mt-0 lg:h-72 flex flex-col items-start justify-start min-h-full">
        <div className="flex-1">
          <MainPostTitleTextElement title={title} />

          <div className="mt-4 flex flex-wrap">
            {tags.map((tag) => (
              <Tag className="mr-2 my-1" key={tag} text={tag} />
            ))}
          </div>

          <PostSummaryTextElement summary={summary ?? ''} />
        </div>
        <NavigationButton
          title="Read more"
          href={`/posts/${slug}`}
          isArrow={true}
          color="primary"
          className="mt-3"
        />
        <PostAuthorSection author={author} date={date} />
      </div>
    </div>
  )
}

export default MainPostCard

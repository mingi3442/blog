import NavigationButton from '@/components/common/molecules/NavigationButton'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer.js'
import { Fragment } from 'react'
import MainPostCard from '../organisms/MainPostCard'
const MAX_DISPLAY = 4
const LatestPostContainer = ({
  posts,
  author,
}: {
  posts: CoreContent<Blog>[]
  author: Authors
}) => {
  return (
    <Fragment>
      <div className="space-y-2 pb-2 pt-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest Posts
        </h1>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-6">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post, index) => {
          const { slug } = post
          const isLastElement = index === MAX_DISPLAY - 1
          return (
            <li
              key={slug}
              className={`${isLastElement ? 'hidden sm:block lg:block xl:hidden' : ''}`}
            >
              <MainPostCard post={post} author={author} />
            </li>
          )
        })}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <NavigationButton
            title="All Posts"
            href="/posts"
            color="primary"
            isArrow={true}
            buttonClassName="mt-4"
          />
        </div>
      )}
    </Fragment>
  )
}

export default LatestPostContainer

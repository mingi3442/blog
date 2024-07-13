import siteMetadata from '@/data/siteMetadata'
import { Authors, Blog } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import NavigationButton from '../common/NavigationButton'
import Tag from '../tags/Tag'

interface MainBlogCardProps {
  post: CoreContent<Blog>
  author: Authors
}

const MainBlogCard = ({ post, author }: MainBlogCardProps) => {
  const { slug, date, title, summary, tags, images } = post
  return (
    <div className="container rounded-xl shadow-md bg-slate-200 dark:bg-slate-700 flex flex-col justify-center items-center p-4">
      <div className="relative overflow-hidden bg-clip-border w-full mb-4 rounded-xl h-72 shadow-md bg-white">
        {Array.isArray(images) && (
          <Link
            className="block relative overflow-hidden bg-clip-border w-auto rounded-xl h-72"
            href={`/blog/${slug}`}
            aria-label={`Read "${title}"`}
          >
            <Image
              className="w-full h-auto"
              sizes="auto"
              src={Array.isArray(images) ? images[0] : ''}
              alt={slug}
              fill
              style={{ objectFit: 'contain' }}
            />
          </Link>
        )}
      </div>

      <div className="mt-2 w-full lg:mt-0 lg:h-72 flex flex-col items-start justify-start min-h-full">
        <div className="flex-1">
          <p className="block text-xl font-semibold text-gray-800 dark:text-white md:text-xl">
            {title}
          </p>
          <div className="mt-4 flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <p className=" prose max-w-none mt-3 line-clamp-1 lg:line-clamp-none text-sm text-gray-500 dark:text-gray-400 ">
            {summary}
          </p>
        </div>
        <div className="mt-3">
          <NavigationButton
            title="Read more"
            href={`/blog/${slug}`}
            isArrow={true}
            color="primary"
          />
        </div>
        <div className="w-full flex items-center justify-between mt-4 my-2">
          <div className="flex items-center ">
            <div className="relative w-10 h-10 rounded-full bg-slate-600">
              <Image
                sizes="auto"
                src={author.avatar as string}
                width={38}
                height={38}
                alt="avatar"
                className="h-10 w-10 rounded-full"
              />
            </div>
            <dl className="ml-2 whitespace-nowrap text-sm font-medium leading-5">
              <dt className="sr-only">Name</dt>
              <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
              <dt className="sr-only">Github</dt>
              <dd>
                {author.github && (
                  <Link
                    href={author.github as string}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {author?.github?.replace('https://github.com/', '@')}
                  </Link>
                )}
              </dd>
            </dl>
          </div>

          <div className="h-full flex items-end">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlogCard

import Link from '@/components/common/atoms/Link'
import Tag from '@/components/tags/Tag'
import siteMetadata from '@/data/siteMetadata'
import { Authors, Blog } from 'contentlayer/generated'
import Image from 'next/image'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import NavigationButton from '../common/molecules/NavigationButton'

export default function BlogCard({
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
        <div className="relative overflow-hidden bg-clip-border w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 border-gray-300/40 border-[0.5px]">
          <Link
            className="block relative overflow-hidden bg-clip-border w-full rounded-xl h-72 bg-white"
            href={`/blog/${slug}`}
            aria-label={`Read "${title}"`}
          >
            <Image
              className="w-full h-72"
              sizes="auto"
              src={Array.isArray(images) ? images[0] : '/static/images/banner.jpeg'}
              alt={slug}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>

        <div className="mt-2 lg:w-1/2 lg:mt-0 lg:h-72 flex flex-col items-start justify-start min-h-full">
          <div className="flex-1">
            <p className="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              {title}
            </p>
            <div className="mt-4 flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>

            <p className=" prose max-w-none mt-3 text-sm text-gray-500 dark:text-gray-400 ">
              {summary}
            </p>
            <div className="mt-3">
              <NavigationButton
                color="primary"
                href={`/blog/${slug}`}
                title={'Read more'}
                isArrow={true}
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-4 my-2">
            <div className="flex items-center ">
              <div className="relative w-10 h-10 rounded-full bg-slate-600">
                <Image
                  className="w-10 h-10 rounded-full static"
                  sizes="auto"
                  src={author.avatar as string}
                  alt={author.name}
                  fill
                  style={{ objectFit: 'cover' }}
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
    </div>
  )
}

import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Tag from '@/components/Tag'
import Image from 'next/image'

import { Authors } from 'contentlayer/generated'
export default function BlogCard({
  post,
  author,
}: {
  post: {
    slug: string
    date: string
    title: string
    summary: string
    tags: Array<string>
    images: Array<string>
  }
  author: Authors
}) {
  const { slug, date, title, summary, tags, images } = post

  return (
    <div className="container">
      <div className="lg:-mx-6 lg:flex lg:items-center">
        <div className="relative  overflow-hidden bg-clip-border w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-92 ">
          <Image
            className="w-full lg:w-1/2 rounded-xl h-72 lg:h-96"
            sizes="100vw"
            src={Array.isArray(images) ? images[0] : ''}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="mt-2 lg:w-1/2 lg:mt-0 flex flex-col items-start justify-start min-h-full">
          <p className="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {title}
          </p>
          <div className="mt-4 flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">{summary}</p>
          <button className="mt-2 btn group flex items-center bg-transparent tracking-widest text-base font-medium leading-6">
            <span className="relative pb-1 pr-2 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                Read more
              </Link>{' '}
            </span>
            <svg
              viewBox="0 0 46 16"
              height="8"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
              className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
          <div className="flex items-center mt-6">
            <div className="relative w-10 h-10 rounded-full bg-slate-600">
              <Image
                className="w-10 h-10 rounded-full"
                sizes="100vw"
                src={author.avatar as string}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">{author.name}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{author.occupation}</p>
            </div>
          </div>

          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import Image from 'next/image'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

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
          {Array.isArray(images) && (
            <Link
              className="block relative overflow-hidden bg-clip-border w-full rounded-xl h-72 border-gray-300/40 border"
              href={`/blog/${slug}`}
              aria-label={`Read "${title}"`}
            >
              <Image
                className="w-full h-72"
                sizes="auto"
                src={Array.isArray(images) ? images[0] : ''}
                alt={slug}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          )}
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
            <button className="mt-3 btn group flex items-center bg-transparent tracking-widest text-base font-medium leading-6">
              <span className="relative pb-1 pr-2 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
                <Link
                  href={`/blog/${slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Read "${title}"`}
                >
                  Read more
                </Link>
              </span>
              <svg
                viewBox="0 0 46 16"
                height="8"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
                className="-translate-x-2 ml-1 mb-1 fill-primary-500 dark:fill-primary-400 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-primary-5000"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>
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
              {/* <div className="mx-4">
                <h1 className="text-sm text-gray-500 dark:text-gray-200">{author.name}</h1>
                <p className="text-sm text-gray-300 dark:text-gray-400">{author.occupation}</p>
              </div> */}
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

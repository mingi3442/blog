import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'
import { TypedIntroduce } from '@/components/TypedIntroduce'
import { RoughNotation } from 'react-rough-notation'

import SEO from '@/components/SEO'

const MAX_DISPLAY = 4

const INTERESTED_TECH_TAGS = ['cosmos-network', 'Cryptography']

export default function Home({ posts, author }) {
  return (
    <>
      <SEO />
      <div className="">
        <div className="flex p-0 md:p-8 w-auto items-center justify-between h-auto">
          <div className="flex flex-col items-start justify-start h-auto flex-1">
            <div className="flex text-3xl font-extrabold leading-9 tracking-tight sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 mb-4 ">
              <h1 className="bg-gradient-to-r from-slate-500 to-slate-800 text-transparent bg-clip-text dark:from-gray-200 dark:to-slate-300 mb-2">
                Hi There
              </h1>
              <p>&nbsp;👋🏻</p>
            </div>
            <div className="h-auto flex flex-col">
              <div className="flex text-lg bg-gradient-to-r from-slate-500 to-slate-800 text-transparent bg-clip-text dark:from-gray-200 dark:to-slate-300 mb-2">
                <div className="pr-1">Interested Tech&nbsp;</div>
                <RoughNotation type="box" show color="#1d4ed8">
                  Tags
                </RoughNotation>
              </div>
              <div className="pt-4 flex flex-col xl:flex-row gap- w-full">
                {INTERESTED_TECH_TAGS.map((tag, index) => {
                  return (
                    <div key={index} className="mx-1">
                      <Tag text={tag} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="min-h-42 py-4">
              <TypedIntroduce />
            </div>
            <div className="p-2">{/* <MyInformation /> */}</div>
          </div>
        </div>
        <div className="space-y-2 pb-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Posts
          </h1>
        </div>

        <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-6">
          {/* <ul className="flex-col md:flex-row gap-6"> */}
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post, index) => {
            const { slug, date, title, summary, tags, images } = post
            const isLastElement = index === MAX_DISPLAY - 1

            return (
              <li
                key={slug}
                className={`${isLastElement ? 'hidden md:block lg:block xl:hidden' : ''}`}
              >
                <div className="container rounded-xl shadow-md bg-slate-200  dark:bg-slate-700 flex flex-col justify-center items-center p-4">
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

                      <p className=" prose max-w-none mt-3 text-sm text-gray-500 dark:text-gray-400 ">
                        {summary}
                      </p>
                    </div>
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
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <button className="mt-3 btn group flex items-center bg-transparent tracking-widest text-base font-medium leading-6">
            <span className="relative pb-1 pr-2 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 ">
              <Link
                href={`/blog`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`All Post`}
              >
                All Posts
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
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

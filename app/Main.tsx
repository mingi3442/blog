import { TypedIntroduce } from '@/components/main/TypedIntroduce'
import Tag from '@/components/tags/Tag'
import { RoughNotation } from 'react-rough-notation'

import SEO from '@/components/SEO'
import NavigationButton from '@/components/common/NavigationButton'
import MainBlogCard from '@/components/main/MainBlogCard'
import { Authors, Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

const MAX_DISPLAY = 4

const INTERESTED_TECH_TAGS = ['cosmos-network', 'Cryptography']

export default function Home({ posts, author }: { posts: CoreContent<Blog>[]; author: Authors }) {
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
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post, index) => {
            const { slug } = post
            const isLastElement = index === MAX_DISPLAY - 1
            return (
              <li
                key={slug}
                className={`${isLastElement ? 'hidden md:block lg:block xl:hidden' : ''}`}
              >
                <div className="h-25">
                  <MainBlogCard post={post} author={author} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <NavigationButton title="All Posts" href="/blog" color="primary" isArrow={true} />
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

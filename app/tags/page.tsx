import Tag from '@/components/tags/Tag'
import { genPageMetadata } from '../seo'
import tagData from '../tag-data.json'

import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Tags',
  description: '블로그 태그 모음',
  slug: 'tags',
})

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagKeys.length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="flex flex-row mb-2 mr-5 mt-2">
                <Tag text={t} count={tagCounts[t]} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

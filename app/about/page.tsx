import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { RoughNotation } from 'react-rough-notation'
export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="flex flex-col flex-1">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            여기는 저의 &nbsp;
            <RoughNotation type="circle" show color="#1d4ed8">
              개인 블로그
            </RoughNotation>
            &nbsp;입니다.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            저는 &nbsp;
            <RoughNotation type="underline" show color="#1d4ed8">
              2년자 Web Developer
            </RoughNotation>
            &nbsp;입니다.
          </p>
        </div>
        {/* <MDXLayoutRenderer code={author.body.code} /> */}
      </AuthorLayout>
    </>
  )
}

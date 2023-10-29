import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  count?: number
}

const Tag = ({ text, count }: Props) => {
  return (
    <Link href={`/tags/${slug(text)}`} className="mr-2 my-1 text-sm font-medium uppercase">
      <div>
        <div className="inline-block relative py-1 text-xs">
          <div className="absolute inset-0 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex">
            <svg height="100%" viewBox="0 0 50 100">
              <path
                d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                fill="currentColor"
              />
            </svg>
            <div className="flex-grow h-full -ml-px bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400  rounded-md rounded-l-none"></div>
          </div>
          <span className="relative text-white uppercase font-semibold pr-px">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {text.split(' ').join('-')}
            <span>&nbsp;</span>
            {count && `[ ${count} ]`}
            <span>&nbsp;</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Tag

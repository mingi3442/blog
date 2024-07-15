import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const PostDateContainer = ({ date }: { date: string }) => {
  return (
    <div className="h-full flex items-end">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
        </dd>
      </dl>
    </div>
  )
}

export default PostDateContainer

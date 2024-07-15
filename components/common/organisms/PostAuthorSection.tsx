import { Authors } from 'contentlayer/generated'
import PostAuthorContainer from '../molecules/PostAuthorContainer'
import PostDateContainer from '../molecules/PostDateContainer'

interface PostAuthorSectionProps {
  author: Authors
  date: string
}

const PostAuthorSection = ({ author, date }: PostAuthorSectionProps) => {
  return (
    <div className="w-full flex items-center justify-between mt-4 my-2 ">
      <PostAuthorContainer author={author} />

      <PostDateContainer date={date} />
    </div>
  )
}

export default PostAuthorSection

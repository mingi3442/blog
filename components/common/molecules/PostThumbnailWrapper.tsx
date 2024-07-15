import { ctm } from 'app/utils/style'
import Link from 'next/link'
import Image from '../atoms/Image'

interface PostThumbnailWrapper {
  slug: string
  title: string
  image: string
  className?: string
  imageObjectFit: 'cover' | 'contain'
}

const PostThumbnailWrapper = ({
  slug,
  title,
  image,
  className,
  imageObjectFit,
}: PostThumbnailWrapper) => {
  return (
    <div className={ctm('relative overflow-hidden bg-clip-border w-full ', className)}>
      <Link
        className="block relative overflow-hidden bg-clip-border w-auto rounded-xl h-72 bg-white "
        href={`/blog/${slug}`}
        aria-label={`Read "${title}"`}
      >
        <Image
          className="w-full h-auto"
          sizes="auto"
          src={image}
          alt={slug}
          fill
          style={{ objectFit: imageObjectFit }}
        />
      </Link>
    </div>
  )
}

export default PostThumbnailWrapper

import { ctm } from 'app/utils/style'
import Link from 'next/link'
import Image from '../atoms/Image'

interface PostThumbnailWrapper {
  slug: string
  title: string
  image: string
  className?: string
  imageObjectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
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
        className="block relative overflow-hidden bg-clip-border w-auto rounded-xl h-72 bg-white"
        href={`/posts/${slug}`}
        aria-label={`Read "${title}"`}
      >
        <Image
          src={image}
          alt={slug}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          style={{ objectFit: imageObjectFit }}
        />
      </Link>
    </div>
  )
}

export default PostThumbnailWrapper

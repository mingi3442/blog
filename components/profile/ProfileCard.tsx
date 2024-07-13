import { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import SocialIcon from '../social-icons'

export default function ProfileCard({ author }: { author: Authors }) {
  return (
    <div className="relative md:flex w-72 flex-col rounded-xl bg-slate-200/20 dark:bg-primary-100/20 bg-clip-border text-gray-700 shadow-md hidden">
      <div className="flex items-center justify-center">
        <div className="relative mx-6 mt-6 w-48 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <Image
            className=" static"
            sizes="auto"
            src={author.avatar as string}
            alt={author.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal bg-gradient-to-r from-slate-500 to-slate-800 dark:from-gray-200 dark:to-slate-300  text-transparent bg-clip-text antialiased">
          {author.name}
        </h4>
        <p className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          Web Developer
        </p>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-0">
        <div className="flex space-x-3 pt-6 text-primary-600">
          <SocialIcon kind="mail" href={`mailto:${author.email}`} />
          <SocialIcon kind="github" href={author.github} />
          {/* <SocialIcon kind="linkedin" href={author.linkedin} /> */}
          {/* <SocialIcon kind="twitter" href={twitter} /> */}
        </div>
      </div>
    </div>
  )
}

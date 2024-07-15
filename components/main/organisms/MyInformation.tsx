import Link from 'next/link'
import InformationCheckIcon from '../atoms/InformationCheckIcon'
import { InformationText } from '../atoms/MainTextElement'

export default function MyInformation() {
  return (
    <div className="flex flex-col h-max">
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4">
        <InformationText>
          <InformationCheckIcon /> Read My Writing 📝
        </InformationText>
      </Link>
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4 ">
        <InformationText>
          <InformationCheckIcon />
          Who am I? 🧐
        </InformationText>
      </Link>
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4 ">
        <InformationText className="link link-underline link-underline-black p-1">
          <InformationCheckIcon />
          Is My Resume 👤
        </InformationText>
      </Link>
    </div>
  )
}

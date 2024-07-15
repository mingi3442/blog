import Link from 'next/link'
import InformationCheckIcon from '../atoms/InformationCheckIcon'
import { MainInformationText } from '../atoms/MainTextElement'

export default function MyInformation() {
  return (
    <div className="flex flex-col h-max">
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4">
        <MainInformationText>
          <InformationCheckIcon /> Read My Writing 📝
        </MainInformationText>
      </Link>
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4 ">
        <MainInformationText>
          <InformationCheckIcon />
          Who am I? 🧐
        </MainInformationText>
      </Link>
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4 ">
        <MainInformationText className="link link-underline link-underline-black p-1">
          <InformationCheckIcon />
          Is My Resume 👤
        </MainInformationText>
      </Link>
    </div>
  )
}

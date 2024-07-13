import Link from 'next/link'

export default function MyInformation() {
  return (
    <div className="flex flex-col h-max">
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4">
        <span className="link link-underline link-underline-black text-gray-500 dark:text-gray-300 p-1">
          <span className="text-primary-500">✓&nbsp;</span> Read My Writing 📝
        </span>
      </Link>
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4 ">
        <span className="link link-underline link-underline-black text-gray-500 dark:text-gray-300 p-1">
          <span className="text-primary-500">✓&nbsp;</span> Who am I? 🧐
        </span>
      </Link>
      <Link href="/" className="font-display max-w-sm text-xl font-semibold leading-tight p-4 ">
        <span className="link link-underline link-underline-black text-gray-500 dark:text-gray-300 p-1">
          <span className="text-primary-500">✓&nbsp;</span> Is My Resume 👤
        </span>
      </Link>
    </div>
  )
}

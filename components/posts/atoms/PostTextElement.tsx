export const PostTitleTextElement = ({ title }: { title: string }) => {
  return (
    <p className="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
      {title}
    </p>
  )
}

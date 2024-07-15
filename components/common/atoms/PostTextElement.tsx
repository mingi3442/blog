export const PostSummaryTextElement = ({ summary }: { summary: string }) => {
  return (
    <p className=" prose max-w-none mt-3 line-clamp-1 lg:line-clamp-none text-sm text-gray-500 dark:text-gray-400 ">
      {summary}
    </p>
  )
}

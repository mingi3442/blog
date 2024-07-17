export const PostSummaryTextElement = ({ summary }: { summary: string }) => {
  return (
    <p className="prose max-w-none mt-3 line-clamp-2 lg:line-clamp-none text-base text-slate-800 dark:text-slate-300 ">
      {summary}
    </p>
  )
}

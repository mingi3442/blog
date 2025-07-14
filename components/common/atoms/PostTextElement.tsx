export const PostSummaryTextElement = ({ summary }: { summary: string }) => {
  return (
    <p className="prose max-w-none mt-3 line-clamp-3 text-base text-slate-800 dark:text-slate-300 overflow-hidden text-ellipsis">
      {summary}
    </p>
  )
}

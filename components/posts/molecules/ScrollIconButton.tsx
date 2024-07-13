const ScrollIconButton = ({ onClick, children }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      aria-label="Scroll To Comment"
      onClick={onClick}
      className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
    >
      {children}
    </button>
  )
}

export default ScrollIconButton

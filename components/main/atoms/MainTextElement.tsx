import { ctm } from 'app/utils/style'
import React from 'react'

export const MainInformationText = ({
  children,
  className,
}: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  return <span className={ctm(`text-gray-500 dark:text-gray-300`, className)}>{children}</span>
}

export const MainPostTitleTextElement = ({ title }: { title: string }) => {
  return (
    <p className="block text-sm font-semibold text-gray-800 dark:text-white md:text-xl">{title}</p>
  )
}

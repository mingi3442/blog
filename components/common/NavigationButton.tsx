import Link from 'next/link'
import ArrowIcon from './atoms/ArrowIcon'

interface NavigationButtonProps {
  href: string
  title: string
  color: 'primary' | 'slate'
  isArrow?: boolean
}

const NavigationButton = ({ href, title, color, isArrow }: NavigationButtonProps) => {
  return (
    <button className="btn group flex items-center bg-transparent tracking-widest text-base font-medium leading-6">
      <span
        className={`relative pb-1 pr-2 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-${color}-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100`}
      >
        <Link
          href={href}
          className={`text-${color}-500 hover:text-${color}-600 dark:hover:text-${color}-400`}
          aria-label={`Read "${title}"`}
        >
          {title}
        </Link>
      </span>
      {isArrow && <ArrowIcon color={color} />}
    </button>
  )
}

export default NavigationButton

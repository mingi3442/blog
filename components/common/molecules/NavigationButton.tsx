import { ctm } from 'app/utils/style'
import Link from 'next/link'
import ArrowIcon from '../atoms/ArrowIcon'

interface NavigationButtonProps {
  href: string
  title: string
  color: 'primary' | 'slate'
  isArrow?: boolean
  children?: React.ReactNode
  className?: string
}

const NavigationButton = ({
  href,
  title,
  color,
  isArrow,
  children,
  className,
}: NavigationButtonProps) => {
  return (
    <button
      className={ctm(
        'btn group flex items-center bg-transparent tracking-widest text-base font-medium leading-6',
        className
      )}
    >
      <span
        className={ctm(
          `relative pb-1  text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0  after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100`,

          color === 'primary' ? `after:bg-primary-500 pr-2` : `after:bg-slate-500`
        )}
      >
        <Link
          href={href}
          className={`text-${color}-500 hover:text-${color}-600 dark:hover:text-${color}-400`}
          aria-label={`Read "${title}"`}
        >
          {children ? children : title}
        </Link>
      </span>
      {isArrow && <ArrowIcon color={color} />}
    </button>
  )
}

export default NavigationButton

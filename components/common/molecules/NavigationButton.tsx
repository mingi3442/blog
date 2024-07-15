import { ctm } from 'app/utils/style'
import Link from 'next/link'
import ArrowIcon from '../atoms/ArrowIcon'

interface NavigationButtonProps {
  href: string
  title?: string
  color: 'primary' | 'slate'
  isArrow?: boolean
  children?: React.ReactNode
  buttonClassName?: string
  spanClassName?: string
}

const NavigationButton = ({
  href,
  title,
  color,
  isArrow,
  children,
  buttonClassName,
  spanClassName,
}: NavigationButtonProps) => {
  return (
    <button
      className={ctm(
        'btn group flex items-center bg-transparent tracking-widest text-base font-medium leading-6 justify-start',
        buttonClassName
      )}
    >
      <span
        className={ctm(
          `relative pb-1text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0  after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100`,
          isArrow ? 'pr-2' : 'pr-0',
          color === 'primary' ? `after:bg-primary-500` : `after:bg-slate-500`,
          spanClassName
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

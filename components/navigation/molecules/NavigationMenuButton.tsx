import { HeaderNavLink } from '@/data/nav'
import Link from 'next/link'

const NavigationMenuButton = ({
  link,
  onToggleNav,
}: {
  link: HeaderNavLink
  onToggleNav: () => void
}) => {
  return (
    <div key={link.title} className="px-12 py-4">
      <Link
        href={link.href}
        className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
        onClick={onToggleNav}
      >
        {link.title}
      </Link>
    </div>
  )
}

export default NavigationMenuButton

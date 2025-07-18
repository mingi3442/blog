'use client'
/* eslint-disable @next/next/no-img-element */

import { headerNavLinks } from '@/data/nav'
import siteMetadata from '@/data/siteMetadata'
import { usePathname } from 'next/navigation'
import Link from '../../common/atoms/Link'
import NavigationButton from '../../common/molecules/NavigationButton'
import MobileNav from '../../navigation/organisms/MobileNav'
import LogoIcon from '../atoms/LogoIcon'
import SearchButton from '../molecules/SearchButton'
import ThemeSwitchWrapper from '../molecules/ThemeSwitchWrapper'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <LogoIcon />
            <span className="ml-2 ">{siteMetadata.headerTitle}</span>
          </div>
        </Link>
      </div>
      <nav
        className="flex items-center leading-5 gap-x-8"
        role="navigation"
        aria-label="main-navigation"
      >
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <div key={link.title} className="hidden sm:flex font-medium items-start">
              <NavigationButton
                href={link.href}
                title={link.title}
                color="slate"
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                <p className="font-medium text-gray-900 dark:text-gray-100">{link.title}</p>
              </NavigationButton>
            </div>
          ))}
        <div className="flex items-center space-x-4" role="group" aria-label="사이트 유틸리티">
          <SearchButton />
          <ThemeSwitchWrapper />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Header

'use client'
/* eslint-disable @next/next/no-img-element */
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from '../common/atoms/Link'
import MobileNav from '../navigation/MobileNav'
import SearchButton from '../navigation/SearchButton'
import ThemeSwitch from '../navigation/ThemeSwitch'

import NavigationButton from '../common/NavigationButton'
import Hits from '../common/atoms/Hits'
import HeaderMainIcon from './HeaderMainIcon'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <HeaderMainIcon />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden sm:flex flex-col">
                <div className="hidden h-6 text-xl font-semibold sm:block ">
                  {siteMetadata.headerTitle}
                </div>
                <Hits />
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <div key={link.title} className="hidden sm:flex font-medium items-start">
              <NavigationButton
                href={link.href}
                title={link.title}
                color="slate"
              ></NavigationButton>
            </div>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

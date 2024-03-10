'use client'
/* eslint-disable @next/next/no-img-element */
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'

import HeaderMainIcon from './HeaderMainIcon'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <HeaderMainIcon />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden sm:flex flex-col ">
                <div className="hidden h-6 text-xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
                <img
                  alt="Hits"
                  src="https://hits.sh/min71.dev.svg?view=today-total&style=flat-square&label=Visitors&extraCount=1671&color=3b82f6"
                  style={{ width: '80px', height: 'auto' }}
                  width={100}
                  height={25}
                />
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
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />

        {/* <a href="https://hits.sh/min71.dev/"> */}
        {/* <Link
          className="block relative overflow-hidden bg-clip-border w-full rounded-xl h-fit bg-white"
          href="https://hits.sh/min71.dev/"
        > */}

        {/* </Link> */}
        {/* </a> */}
        {/* <LanguageSwitcher /> */}
        {/* <select
          onChange={(e) => {
            const value = e.target.value
            const correctPathname = pathname.replace(`/${lang}`, `/${value}`)
            router.push(correctPathname)
          }}
          defaultValue={lang}
        >
          {i18n.locales
            .filter((x) => x !== 'default')
            .map((res) => (
              <option key={res} value={res}>
                {res}
              </option>
            ))}
        </select> */}
      </div>
    </header>
  )
}

export default Header

import { usePushStateListener } from 'hooks/usePushStateListener'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const [lang, setLang] = useState(pathname.replace('/', ''))

  const handleLanguageChange = (newLanguage) => {
    document.cookie = `selectedLanguage=${newLanguage}; path=/; samesite=None; secure`
    const regex = /(\/en\/|\/ko\/)/
    const newPath = pathname.replace(regex, (match) => {
      if (match === '/en/') {
        return '/ko/'
      } else {
        return '/en/'
      }
    })
    if (pathname === '/en') {
      // setLang('ko')
      return router.push('/ko')
    } else if (pathname === '/ko') {
      return router.push('/en')
    } else {
      return router.push(newPath)
    }
  }

  usePushStateListener((url) => {
    setLang(url.startsWith('/en') ? 'en' : 'ko')
  })

  return (
    <div>
      {lang === 'ko' ? (
        <button onClick={() => handleLanguageChange('en')}>English</button>
      ) : (
        <button onClick={() => handleLanguageChange('ko')}>한국어</button>
      )}
    </div>
  )
}

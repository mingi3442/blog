'use client'
import * as React from 'react'
import { TranslateButton } from '../../common/atoms/TranslateButton'
import AboutContentSection from '../molecules/AboutContentSection'

export default function AboutContainer() {
  const [language, setLanguage] = React.useState<'ko' | 'en'>('ko')

  React.useEffect(() => {
    setLanguage(localStorage.getItem('lang') === 'en' ? 'en' : 'ko')
  }, [])

  React.useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as 'ko' | 'en'
    setLanguage(newLanguage)
  }

  return (
    <div>
      <div className="flex items-center justify-end">
        <TranslateButton value={language} onChange={handleLanguageChange} />
      </div>
      <AboutContentSection lang={language} />
    </div>
  )
}

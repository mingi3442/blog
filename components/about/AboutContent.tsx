'use client'
import { ENGLISH_CONTENT, KOREAN_CONTENT } from '@/data/about'
import * as React from 'react'
import { TranslateButton } from '../common/atoms/TranslateButton'

export default function AboutContent() {
  const [language, setLanguage] = React.useState<'ko' | 'en'>(() => {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'ko'
  })

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
      <div className="p-4">
        <Content contents={language === 'ko' ? KOREAN_CONTENT : ENGLISH_CONTENT} />
      </div>
    </div>
  )
}

const Content = ({ contents }: { contents: string[] }) => {
  return (
    <React.Fragment>
      {contents.map((ele) => {
        return (
          <React.Fragment>
            {ele}
            <br />
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

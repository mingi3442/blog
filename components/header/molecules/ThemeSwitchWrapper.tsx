'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import DarkThemeIcon from '../atoms/DarkThemeIcon'
import LightThemeIcon from '../atoms/LightThemeIcon'

const ThemeSwitchWrapper = () => {
  // const [mounted, setMounted] = useState(false)
  const [_, setIsDarkMode] = useState<boolean>(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  useEffect(() => {
    setIsDarkMode(theme === 'dark' || resolvedTheme === 'dark')
  }, [theme, resolvedTheme])

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <DarkThemeIcon />
      <LightThemeIcon />
    </button>
  )
}

export default ThemeSwitchWrapper

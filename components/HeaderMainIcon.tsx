'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Logo from '@/data/logo.png'
import DarkModeLogo from '@/data/logo-dark.png'
import { useEffect, useState } from 'react'

const HeaderMainIcon = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className="mr-3">
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <Image src={DarkModeLogo} alt="Logo" width={30} height={30} />
      ) : (
        <Image src={Logo} alt="Logo" width={30} height={30} />
      )}
    </div>
  )
}

export default HeaderMainIcon

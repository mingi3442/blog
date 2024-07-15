'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedIntroduceWrapper() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Hello, Here is my personal blog! 📝',
        `I've been working as a Web developer for 2 years 💻`,
        'I am interested in blockchain network and web3.0 🔗',
        'I am interested in Web Service and Web Application 🌐',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="min-h-42 py-4">
      <span className="text-xl leading-7 text-gray-500 dark:text-gray-300" ref={typedRef}></span>
    </div>
  )
}

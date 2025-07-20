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
        'Getting better every day. Consistency over perfection, process over results.',
        'Sharing insights from real-world projects and continuous learning.',
        'Building scalable web and blockchain solutions, one step at a time.',
        'Exploring clean architecture, DDD, and modern design patterns.',
        'From React & Next.js to Node.js and Cosmos blockchain.',
        'Documenting growth, challenges, and practical solutions.',
        'Believing in open knowledge, effective communication, and team synergy.',
        'Striving to add real value to every project and team.',
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 3000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="min-h-42 py-10">
      <span
        className="text-lg leading-7 italic text-gray-700 dark:text-gray-100"
        ref={typedRef}
      ></span>
    </div>
  )
}

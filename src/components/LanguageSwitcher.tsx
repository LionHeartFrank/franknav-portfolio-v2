'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter()

  const switchLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000` // 1 year
    router.refresh()
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => switchLanguage('en')} className="p-2 hover:underline">
        English
      </button>
      <span>/</span>
      <button onClick={() => switchLanguage('es')} className="p-2 hover:underline">
        Español
      </button>
    </div>
  )
}

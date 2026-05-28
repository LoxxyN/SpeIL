'use client'

import { copyToClipboard } from '@shared/lib'
import { useState } from 'react'

export const useCopyCode = () => {
  const [isCopying, setIsCopying] = useState(false)

  const copyFunction = async (code: string) => {
    setIsCopying(true)
    copyToClipboard(code)

    setTimeout(() => {
      setIsCopying(false)
    }, 3000)
  }

  return {
    isCopying,
    copyFunction,
  }
}

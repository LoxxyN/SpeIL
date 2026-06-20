'use client'

import { useToast } from '@shared/lib/hooks'
import type { IReviewData } from '@shared/types'
import { useCallback, useState } from 'react'

export const useCopyReview = ({ review }: IReviewData) => {
  const [isCopying, setIsCopying] = useState(false)
  const { callToast } = useToast()

  const copyToClipboard = useCallback(
    async (value: string) => {
      setIsCopying(true)
      await navigator.clipboard
        .writeText(value)
        .then(() => callToast('success', 'copySuccessTitle', 'copySuccessDescription'))

      setTimeout(() => {
        setIsCopying(false)
      }, 1500)
    },
    [callToast]
  )

  const copyInJson = useCallback(async () => {
    const json = JSON.stringify(review, null, 2)

    await copyToClipboard(json)
  }, [review, copyToClipboard])

  const copyInMarkdown = useCallback(async () => {
    const markdown =
      typeof review === 'string' ? review : `\`\`\`json\n${JSON.stringify(review, null, 2)}\n\`\`\``

    await copyToClipboard(markdown)
  }, [review, copyToClipboard])

  return { copyInJson, copyInMarkdown, isCopying }
}

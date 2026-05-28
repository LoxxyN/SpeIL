'use client'

import type { IReviewData } from '@shared/types'
import { useCallback, useState } from 'react'
import { useSuccessToast } from './useSuccessToast'

export const useCopyReview = ({ review }: IReviewData) => {
  const [isCopying, setIsCopying] = useState(false)
  const { callSuccessToast } = useSuccessToast()

  const copyToClipboard = useCallback(
    async (value: string) => {
      setIsCopying(true)
      await navigator.clipboard.writeText(value).then(() => callSuccessToast())

      setTimeout(() => {
        setIsCopying(false)
      }, 1500)
    },
    [callSuccessToast]
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

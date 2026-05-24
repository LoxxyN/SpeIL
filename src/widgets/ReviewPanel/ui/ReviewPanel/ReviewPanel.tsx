'use client'

import { themeStore } from '@/app/store'
import { ReviewResult } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import { toast } from '@heroui/react'
import { baseHistoryStore } from '@shared/lib'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { reviewStore } from '../../model/reviewStore'
import { EditorActionButtons } from '../EditorActionButtons'
import './ReviewPanel.css'

export const ReviewPanel = observer(() => {
  const { theme } = themeStore
  useEffect(() => {
    baseHistoryStore.loadStorage()
  }, [])

  const callDangerToast = () => {
    if (!document.hidden) {
      toast.danger('Ой, что то пошло не так', { description: 'Пожалуйста повторите попытку' })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast.danger('Ой, что то пошло не так', { description: 'Пожалуйста повторите попытку' })
          document.removeEventListener('visibilitychange', onVisibilityChange)
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  }

  const getReview = () => {
    reviewStore.postReviewAction(reviewStore.code).catch((error) => error && callDangerToast())
  }

  const setCode = (value: string) => {
    reviewStore.setCode(value)
  }

  return (
    <section className={`review-panel ${theme === 'dark' ? 'review-panel--dark' : ''} `}>
      <div className="flex w-2/5 flex-col gap-6">
        <div className="editor-container">
          <CodeEditor value={reviewStore.code} onValueChange={setCode} />
          <CopyCodeButton code={reviewStore.code} />
        </div>
        <EditorActionButtons
          isLoading={reviewStore.isLoading}
          handleClear={reviewStore.clearEditor}
          handleGetReview={getReview}
        />
      </div>
      <ReviewResult review={reviewStore.lastReview} isLoading={reviewStore.isLoading} />
    </section>
  )
})

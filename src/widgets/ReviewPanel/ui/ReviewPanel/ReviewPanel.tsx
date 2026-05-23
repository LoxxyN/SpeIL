'use client'

import { ReviewResult } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import { toast } from '@heroui/react'
import { observer } from 'mobx-react-lite'
import { reviewStore } from '../../model/reviewStore'
import { EditorActionButtons } from '../EditorActionButtons'
import './ReviewPanel.css'

export const ReviewPanel = observer(() => {
  const callDangerToast = () => {
    if (!document.hidden) {
      toast.danger('Что то пошло не так', { description: 'Повторите попытку' })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast.danger('Что то пошло не так', { description: 'Повторите попытку' })
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
    <section className="review-panel">
      <div className="flex w-1/2 flex-col gap-6">
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

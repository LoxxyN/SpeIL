'use client'

import { ReviewResult } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import { toast } from '@heroui/react'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { reviewStore } from '../../model/reviewStore'
import { EditorActionButtons } from '../EditorActionButtons'
import './ReviewPanel.css'

export const ReviewPanel = observer(() => {
  const { postReviewAction, setCode, clearEditor, code, isLoading, lastReview, loadStorage } =
    reviewStore

  useEffect(() => {
    loadStorage()
  }, [loadStorage])

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
    postReviewAction(code).catch((error) => error && callDangerToast())
  }

  return (
    <section className="review-panel">
      <div className="flex w-1/2 flex-col gap-6">
        <div className="editor-container">
          <CodeEditor value={code} onValueChange={setCode} />
          <CopyCodeButton code={code} />
        </div>
        <EditorActionButtons
          isLoading={isLoading}
          handleClear={clearEditor}
          handleGetReview={getReview}
        />
      </div>
      <ReviewResult review={lastReview} isLoading={isLoading} />
    </section>
  )
})

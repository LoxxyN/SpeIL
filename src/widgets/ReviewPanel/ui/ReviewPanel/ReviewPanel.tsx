'use client'

import { ReviewResult } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { reviewStore } from '../../model/reviewStore'
import { EditorActionButtons } from '../EditorActionButtons'
import './ReviewPanel.css'

export const ReviewPanel = observer(() => {
  const { postReviewAction, setCode, clearEditor, code, lastReview, loadStorage } = reviewStore

  useEffect(() => {
    loadStorage()
  }, [loadStorage])

  return (
    <section className="review-panel">
      <div className="flex w-1/2 flex-col gap-6">
        <div className="editor-container">
          <CodeEditor value={code} onValueChange={setCode} />
          <CopyCodeButton code={code} />
        </div>
        <EditorActionButtons
          handleClear={clearEditor}
          handleGetReview={() => postReviewAction(code)}
        />
      </div>

      <ReviewResult review={lastReview} />
    </section>
  )
})

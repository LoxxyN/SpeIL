'use client'

import { ReviewResult } from '@entities/index'
import { ClearEditor, CodeEditor, CopyCodeButton, GetReviewButton } from '@features/index'
import { useState } from 'react'
import { postReview } from '../api'
import './ReviewPanel.css'

export const ReviewPanel = () => {
  const [code, setCode] = useState(`export const App = () => {
  return <div>Hello</div>
}`)
  const [reviewData, setReviewData] = useState(null)

  const onValueChange = (value: string) => {
    setCode(value)
  }

  const handleClearEditor = () => {
    setCode('')
  }

  const handleGetReview = async () => {
    if (code === '' || typeof code === 'undefined' || code === null) {
      console.error('Код не был передан')
    } else {
      await postReview(code).then((data) => {
        const REVIEW_DATA = data
        setReviewData(REVIEW_DATA)
      })
    }
  }

  return (
    <section className="rewiew-panel">
      <div className="flex w-1/2 flex-col gap-6">
        <div className="editor-container">
          <CodeEditor value={code} onValueChange={onValueChange} />
          <CopyCodeButton code={code} />
        </div>
        <div className="editor-action-buttons flex justify-evenly">
          <ClearEditor handleClear={handleClearEditor} />
          <GetReviewButton handleGetReview={handleGetReview} />
        </div>
      </div>

      <ReviewResult reviewDataMap={reviewData} />
    </section>
  )
}

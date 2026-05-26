import { themeStore } from '@/app/store'
import { ReviewResult } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import type { TReviewData } from '@shared/types'
import { EditorActionButtons } from '../EditorActionButtons'
import './ReviewPanelWrapper.css'

type TReviewPanel = {
  showActions: boolean
  isLoading: boolean
  isReadonly: boolean
  code: string
  review: TReviewData
  setCode: (value: string) => void
  clearEditor: () => void
  getReview: () => void
}

export const ReviewPanelWrapper = ({
  showActions,
  isLoading,
  isReadonly,
  code,
  review,
  setCode,
  clearEditor,
  getReview,
}: TReviewPanel) => {
  const { theme } = themeStore
  const renderActionButtons = () => {
    if (!showActions) {
      return null
    }
    return (
      <EditorActionButtons
        isLoading={isLoading}
        handleClear={clearEditor}
        handleGetReview={getReview}
      />
    )
  }

  const renderCodeEditor = () => {
    if (isReadonly) {
      return <CodeEditor value={code} isReadonly />
    } else {
      return <CodeEditor value={code} onValueChange={setCode} />
    }
  }

  return (
    <section className={`review-panel ${theme === 'dark' ? 'review-panel--dark' : ''} `}>
      <div className="flex w-2/5 flex-col gap-6">
        <div className="editor-container">
          {renderCodeEditor()}
          <CopyCodeButton code={code} />
        </div>
        {renderActionButtons()}
      </div>
      <ReviewResult review={review} isLoading={isLoading} />
    </section>
  )
}

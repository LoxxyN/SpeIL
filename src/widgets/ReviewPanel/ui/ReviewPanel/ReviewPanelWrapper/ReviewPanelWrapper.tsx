import { ReviewResult, ReviewResultEmpty } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import type { TReviewPanelWrapper } from '../../../model'
import { EditorActionButtons } from '../EditorActionButtons'
import './ReviewPanelWrapper.css'

export const ReviewPanelWrapper = ({
  showActions = true,
  isLoading,
  isReadonly = true,
  code,
  review,
  setCode,
  clearEditor,
  getReview,
}: TReviewPanelWrapper) => {
  if (typeof code === 'undefined') return
  if (typeof review === 'undefined') return

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
    <section className="review-panel">
      <div className="review-panel__code-editor w-2/5">
        <div className="editor-container">
          {renderCodeEditor()}
          <CopyCodeButton code={code} />
        </div>
        {renderActionButtons()}
      </div>
      <ReviewResult review={review} isLoading={isLoading} emptyResultSlot={<ReviewResultEmpty />} />
    </section>
  )
}

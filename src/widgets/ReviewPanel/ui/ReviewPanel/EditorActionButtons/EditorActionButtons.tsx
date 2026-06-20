import { ClearEditor, GetReviewButton } from '@features/index'
import type { TEditorActionButtons } from '../../../model'

export const EditorActionButtons = ({
  handleClear,
  handleGetReview,
  isLoading,
}: TEditorActionButtons) => {
  return (
    <div className="flex justify-evenly">
      <ClearEditor handleClear={handleClear} />
      <GetReviewButton isLoading={isLoading} handleGetReview={handleGetReview} />
    </div>
  )
}

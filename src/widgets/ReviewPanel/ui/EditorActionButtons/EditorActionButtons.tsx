import { ClearEditor, GetReviewButton } from '@features/index'

type TEditorActionButton = {
  handleClear: () => void
  handleGetReview: () => void
}

export const EditorActionButtons = ({ handleClear, handleGetReview }: TEditorActionButton) => {
  return (
    <div className="flex justify-evenly">
      <ClearEditor handleClear={handleClear} />
      <GetReviewButton handleGetReview={handleGetReview} />
    </div>
  )
}

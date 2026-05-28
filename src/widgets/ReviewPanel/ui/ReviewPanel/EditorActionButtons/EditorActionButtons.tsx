import { ClearEditor, GetReviewButton } from '@features/index'

export type TEditorActionButtons = {
  handleClear: () => void
  handleGetReview: () => void
  isLoading: boolean
}

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

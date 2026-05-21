import { ClearEditor, GetReviewButton } from '@features/index'

type TEditorActionButton = {
  handleClear: () => void
  handleGetReview: () => void
  isLoading: boolean
}

export const EditorActionButtons = ({
  handleClear,
  handleGetReview,
  isLoading,
}: TEditorActionButton) => {
  return (
    <div className="flex justify-evenly">
      <ClearEditor handleClear={handleClear} />
      <GetReviewButton isLoading={isLoading} handleGetReview={handleGetReview} />
    </div>
  )
}

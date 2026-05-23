import { DeleteButton } from '@shared/ui'

export const RemoveReviewButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  return <DeleteButton onRemoveReview={onRemoveReview} label='Удалить' hasTrashIcon />
}

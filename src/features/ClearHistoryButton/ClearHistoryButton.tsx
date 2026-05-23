import { DeleteButton } from '@shared/ui'

export const ClearHistoryButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  return <DeleteButton onRemoveReview={onRemoveReview} label="Очистить" hasTrashIcon />
}

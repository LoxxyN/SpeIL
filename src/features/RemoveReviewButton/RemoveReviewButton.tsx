import { TrashBin } from '@gravity-ui/icons'
import { Button } from '@heroui/react'

export const RemoveReviewButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  return (
    <Button size="lg" variant="danger" onClick={onRemoveReview}>
      Удалить
      <TrashBin />
    </Button>
  )
}

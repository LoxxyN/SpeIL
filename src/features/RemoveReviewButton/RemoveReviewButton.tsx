import { AlertDialog, Button } from '@heroui/react'
import { DeleteButton } from '@shared/ui'

export const RemoveReviewButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  return (
    <AlertDialog>
      <DeleteButton label="Удалить" hasTrashIcon />
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container size="sm">
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Вы действительно <strong>хотите</strong> удалить это ревью?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>Это удалит ревью безвозвратно, без возможности восстановления</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Отмена
              </Button>
              <DeleteButton
                size="md"
                slot="close"
                onClick={onRemoveReview}
                hasTrashIcon={false}
                label="Подтвердить"
              />
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}

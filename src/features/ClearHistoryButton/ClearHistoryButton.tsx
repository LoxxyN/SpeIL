import { AlertDialog, Button } from '@heroui/react'
import { DeleteButton } from '@shared/ui'

export const ClearHistoryButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  return (
    <AlertDialog>
      <DeleteButton label="Очистить все" hasTrashIcon />
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container size="md">
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Вы действительно <strong>хотите</strong> очистить историю?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Это удалит историю безвозвратно. После удаления нельзя будет вернуть удаленные
                ревью, делайте это решение осознанно
              </p>
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

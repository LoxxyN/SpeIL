import { AlertDialog, Button } from '@heroui/react'
import { DeleteButton } from '@shared/ui'
import { useTranslations } from 'next-intl'

export const RemoveReviewButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  const t = useTranslations('ActionInfoPanel')
  const tModal = useTranslations('Modals')
  const stopEvent = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <AlertDialog>
      <DeleteButton label={t('buttonRemoveReview')} hasTrashIcon onClick={stopEvent} />
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container size="sm">
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>{tModal('removeReviewTitle')}</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>{tModal('removeReviewDescription')}</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                {tModal('cancelButton')}
              </Button>
              <DeleteButton
                size="md"
                slot="close"
                onClick={(e) => {
                  stopEvent(e)
                  onRemoveReview()
                }}
                hasTrashIcon={false}
                label={tModal('confirmButton')}
              />
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}

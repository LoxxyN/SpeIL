import { AlertDialog, Button } from '@heroui/react'
import { DeleteButton } from '@shared/ui'
import { useTranslations } from 'next-intl'

export const ClearHistoryButton = ({ onRemoveReview }: { onRemoveReview: () => void }) => {
  const t = useTranslations('ActionInfoPanel')
  const tModal = useTranslations('Modals')

  return (
    <AlertDialog>
      <DeleteButton label={t('buttonRemoveAll')} hasTrashIcon />
      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container size="md">
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>{tModal('clearAllTitle')}</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>{tModal('clearAllDescription')}</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                {tModal('cancelButton')}
              </Button>
              <DeleteButton
                size="md"
                slot="close"
                onClick={onRemoveReview}
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

import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'

export const ClearEditor = ({ handleClear }: { handleClear: () => void }) => {
  const t = useTranslations('ReviewActionButtons')

  return (
    <Button onClick={handleClear} size="lg" variant="tertiary">
      {t('clear')}
    </Button>
  )
}

import { Button, Spinner } from '@heroui/react'
import { useTranslations } from 'next-intl'

export const GetReviewButton = ({
  handleGetReview,
  isLoading,
}: {
  handleGetReview: () => void
  isLoading: boolean
}) => {
  const t = useTranslations('ReviewActionButtons')

  return (
    <Button onClick={handleGetReview} isPending={isLoading} size="lg" variant="tertiary">
      <span className="flex items-center justify-between gap-3">
        {isLoading && <Spinner size="md" color="current" />}
        {isLoading ? t('loading') : t('getReview')}
      </span>
    </Button>
  )
}

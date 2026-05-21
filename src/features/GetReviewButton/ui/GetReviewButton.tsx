import { Button, Spinner } from '@heroui/react'

export const GetReviewButton = ({
  handleGetReview,
  isLoading,
}: {
  handleGetReview: () => void
  isLoading: boolean
}) => {
  return (
    <Button onClick={handleGetReview} isPending={isLoading} size="lg" variant="tertiary">
      <span className="flex items-center justify-between gap-3">
        {isLoading && <Spinner size="md" color="current" />}
        {isLoading ? 'Ожидаем...' : 'Получить ревью'}
      </span>
    </Button>
  )
}

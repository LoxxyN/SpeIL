'use client'

import { Button } from '@heroui/react'

export const GetReviewButton = ({ handleGetReview }: { handleGetReview: () => void }) => {
  return (
    <Button onClick={handleGetReview} size="lg" variant="tertiary">
      Получить ревью
    </Button>
  )
}

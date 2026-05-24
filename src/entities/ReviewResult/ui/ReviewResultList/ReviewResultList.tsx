import { ScrollShadow } from '@heroui/react'
import type { TReviewData } from '@shared/types'
import { RatingCard } from '@shared/ui'

export const ReviewResultList = ({ review }: { review: TReviewData }) => {
  if (review === null) return
  return (
    <ScrollShadow className="review-list__scroll h-full" hideScrollBar>
      <div className="review-list flex flex-col gap-4">
        {review.map((item) => (
          <RatingCard key={item.id} reviewType={item.reviewType} description={item.description} />
        ))}
      </div>
    </ScrollShadow>
  )
}

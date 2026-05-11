import { RatingCard } from '@shared/ui'
import { ReviewResultEmpty } from './ReviewResultEmpty'
import { REVIEW_DATA_EXAMPLE } from './model'

import { ScrollShadow } from '@heroui/react'
import './ReviewResult.css'

export const ReviewResult = () => {
  const isHistoryClear = REVIEW_DATA_EXAMPLE.length > 0

  return isHistoryClear ? (
    <div className="review-result">
      <h2>Результаты ревью</h2>
      <ScrollShadow className="max-h-100" hideScrollBar>
        <div className="review-list">
          {REVIEW_DATA_EXAMPLE.map((item) => (
            <RatingCard
              key={item.id}
              ratingChipType={item.reviewType}
              ratingText={item.reviewText}
            />
          ))}
        </div>
      </ScrollShadow>
    </div>
  ) : (
    <ReviewResultEmpty />
  )
}

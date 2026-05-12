import type { IReviewResult } from '@entities/ReviewResult/model'

import { ScrollShadow } from '@heroui/react'
import { RatingCard } from '@shared/ui'
import { memo } from 'react'
import { ReviewResultEmpty } from '../ReviewResultEmpty'
import './ReviewResult.css'

const ReviewResult = ({ reviewData }: { reviewData: IReviewResult[] }) => {
  const isHistoryClear = reviewData.length > 0

  return isHistoryClear ? (
    <div className="review-result">
      <h2>Результаты ревью</h2>
      <ScrollShadow className="max-h-100" hideScrollBar>
        <div className="review-list">
          {reviewData.map((item) => (
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

export default memo(ReviewResult)

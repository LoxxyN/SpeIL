import { ScrollShadow } from '@heroui/react'
import { RatingCard } from '@shared/ui'
import { memo } from 'react'
import type { IReviewResponse } from '../../model'
import { ReviewResultEmpty } from '../ReviewResultEmpty'
import './ReviewResult.css'

const ReviewResult = ({ reviewDataMap }: { reviewDataMap: IReviewResponse | null }) => {
  return reviewDataMap !== null ? (
    <div className="review-result">
      <h2>Результаты ревью</h2>
      <ScrollShadow className="max-h-100" hideScrollBar>
        <div className="review-list">
          {reviewDataMap.review?.map((item) => (
            <RatingCard key={item.id} reviewType={item.reviewType} description={item.description} />
          ))}
        </div>
      </ScrollShadow>
    </div>
  ) : (
    <ReviewResultEmpty />
  )
}

export default memo(ReviewResult)

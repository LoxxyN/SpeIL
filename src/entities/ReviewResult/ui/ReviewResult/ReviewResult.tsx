'use client'

import { ScrollShadow } from '@heroui/react'
import type { TReviewData } from '@shared/types'
import { RatingCard } from '@shared/ui'
import { observer } from 'mobx-react-lite'
import { memo } from 'react'
import { ReviewResultEmpty } from '../ReviewResultEmpty'
import './ReviewResult.css'

const ReviewResult = observer(({ review }: { review: TReviewData }) => {
  if (!review) return <ReviewResultEmpty />

  return (
    <div className="review-result">
      <h2>Результаты ревью</h2>
      <ScrollShadow className="max-h-100" hideScrollBar>
        <div className="review-list">
          {review.map((item) => (
            <RatingCard key={item.id} reviewType={item.reviewType} description={item.description} />
          ))}
        </div>
      </ScrollShadow>
    </div>
  )
})

export default memo(ReviewResult)

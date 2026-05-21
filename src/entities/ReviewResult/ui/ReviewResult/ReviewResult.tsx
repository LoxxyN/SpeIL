'use client'

import { ScrollShadow, Spinner } from '@heroui/react'
import type { TReviewData } from '@shared/types'
import { RatingCard } from '@shared/ui'
import { observer } from 'mobx-react-lite'
import { memo } from 'react'
import { ReviewResultEmpty } from '../ReviewResultEmpty'
import './ReviewResult.css'

type TReviewResult = { review: TReviewData; isLoading: boolean }

const ReviewResult = observer(({ review, isLoading }: TReviewResult) => {
  if (!review) return <ReviewResultEmpty />

  return (
    <div className="review-result">
      <h2>Результаты последнего ревью</h2>
      {isLoading ? (
        <Spinner color="current" size="xl" />
      ) : (
        <ScrollShadow className="max-h-100" hideScrollBar>
          <div className="review-list">
            {review.map((item) => (
              <RatingCard
                key={item.id}
                reviewType={item.reviewType}
                description={item.description}
              />
            ))}
          </div>
        </ScrollShadow>
      )}
    </div>
  )
})

export default memo(ReviewResult)

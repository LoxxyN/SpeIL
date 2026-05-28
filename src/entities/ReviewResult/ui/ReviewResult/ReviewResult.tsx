'use client'

import { Spinner } from '@heroui/react'
import type { TReviewData } from '@shared/types'
import { observer } from 'mobx-react-lite'
import { memo } from 'react'
import { ReviewResultEmpty } from '../ReviewResultEmpty'
import { ReviewResultList } from '../ReviewResultList'
import './ReviewResult.css'

type TReviewResult = { review: TReviewData; isLoading: boolean }

const ReviewResult = observer(({ review, isLoading }: TReviewResult) => {
  if (!review) return <ReviewResultEmpty />

  return (
    <div className="review-result">
      <h2>Результаты последнего ревью</h2>
      {isLoading ? <Spinner color="current" size="xl" /> : <ReviewResultList review={review} />}
    </div>
  )
})

export default memo(ReviewResult)

'use client'

import { Spinner } from '@heroui/react'
import type { TReviewData } from '@shared/types'
import { observer } from 'mobx-react-lite'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { ReviewResultEmpty } from '../ReviewResultEmpty'
import { ReviewResultList } from '../ReviewResultList'
import './ReviewResult.css'

type TReviewResult = { review: TReviewData; isLoading: boolean }

const ReviewResult = observer(({ review, isLoading }: TReviewResult) => {
  const t = useTranslations('ReviewResult')

  if (!review) return <ReviewResultEmpty />

  return (
    <div className="review-result">
      <h2>{t('ReviewResultTitle')}</h2>
      {isLoading ? <Spinner color="current" size="xl" /> : <ReviewResultList review={review} />}
    </div>
  )
})

export default memo(ReviewResult)

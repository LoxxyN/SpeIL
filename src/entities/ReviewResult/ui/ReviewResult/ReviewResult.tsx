import { Spinner } from '@heroui/react'
import type { TReviewData } from '@shared/types'
import { observer } from 'mobx-react-lite'
import { useTranslations } from 'next-intl'
import { ReviewResultList } from '../ReviewResultList'
import './ReviewResult.css'

type TReviewResult = { review: TReviewData; isLoading: boolean; emptyResultSlot: React.ReactNode }

export const ReviewResult = observer(({ review, isLoading, emptyResultSlot }: TReviewResult) => {
  const t = useTranslations('ReviewResult')

  if (!review) return emptyResultSlot

  return (
    <div className="review-result">
      <h2>{t('ReviewResultTitle')}</h2>
      {isLoading ? <Spinner color="current" size="xl" /> : <ReviewResultList review={review} />}
    </div>
  )
})

import { ReviewResultList } from '@entities/index'
import { CodeEditor, RemoveReviewButton } from '@features/index'
import { Card } from '@heroui/react'
import type { IReviewHistoryItem } from '@shared/types'
import './ReviewHistoryCard.css'

interface IReviewHistoryCard extends IReviewHistoryItem {
  createDateTime: string
  removeReview: () => void
}

export const ReviewHistoryCard = ({
  code,
  review,
  createDateTime,
  removeReview,
}: IReviewHistoryCard) => {
  return (
    <Card className="review-history-card">
      <div className="review-card">
        <div className="review-card__code-wrapper">
          <CodeEditor value={code} isReadonly={true} />
        </div>

        <div className="review-card__content">
          <div className="review-card__header">
            <h2 className="review-card__header-title">Создано: {createDateTime}</h2>
            <RemoveReviewButton onRemoveReview={removeReview} />
          </div>

          <div className="review-card__description">
            <ReviewResultList review={review} />
          </div>
        </div>
      </div>
    </Card>
  )
}

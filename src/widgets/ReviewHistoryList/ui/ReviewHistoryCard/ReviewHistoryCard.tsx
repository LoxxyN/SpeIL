import './ReviewHistoryCard.css'
import { Card, ScrollShadow } from '@heroui/react'
import { CodeEditor, RemoveReviewButton } from '@features/index'
import { RatingCard } from '@shared/ui'
import type { IReviewHistoryItem } from '@shared/types'

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
            <ScrollShadow hideScrollBar className="h-60">
              {review === null ? (
                <div>Тут пусто</div>
              ) : (
                review.map((item) => (
                  <RatingCard
                    key={item.id}
                    reviewType={item.reviewType}
                    description={item.description}
                  />
                ))
              )}
            </ScrollShadow>
          </div>
        </div>
      </div>
    </Card>
  )
}

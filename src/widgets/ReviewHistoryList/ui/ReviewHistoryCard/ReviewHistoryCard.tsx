import './ReviewHistoryCard.css'
import { Button, Card, ScrollShadow } from '@heroui/react'
import { CodeEditor } from '@features/index'
import { TrashBin } from '@gravity-ui/icons'
import { RatingCard } from '@shared/ui'
import type { IReviewHistoryItem } from '@shared/types'

interface IReviewHistoryCard extends IReviewHistoryItem {
  createDateTime: string
}

export const ReviewHistoryCard = ({ code, review, createDateTime }: IReviewHistoryCard) => {
  return (
    <Card className="review-history-card">
      <div className="review-card">
        <div className="review-card__code-wrapper">
          <CodeEditor value={code} isReadonly={true} />
        </div>

        <div className="review-card__content">
          <div className="review-card__header">
            <h2 className="review-card__header-title">Создано: {createDateTime}</h2>
            <Button size="lg" variant="danger">
              Удалить
              <TrashBin />
            </Button>
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

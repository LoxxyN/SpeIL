import { ReviewResultList } from '@entities/index'
import { CodeEditor, RemoveReviewButton } from '@features/index'
import { Card } from '@heroui/react'
import type { IReviewHistoryItem } from '@shared/types'
import Link from 'next/link'
import type { MouseEvent } from 'react'
import './ReviewHistoryCard.css'

interface IReviewHistoryCard extends IReviewHistoryItem {
  createDateTime: string
  removeReview: () => void
  href: string
}

export const ReviewHistoryCard = ({
  href,
  code,
  review,
  createDateTime,
  removeReview,
}: IReviewHistoryCard) => {
  const stopEvent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <Card className="review-history-card">
      <div className="review-card">
        <div className="review-card__code-wrapper" onMouseDown={stopEvent} onClick={stopEvent}>
          <CodeEditor value={code} isReadonly={true} />
        </div>

        <div className="review-card__content">
          <Link href={href} className="flex h-full flex-col justify-between">
            <div className="review-card__header">
              <h2 className="review-card__header-title">Создано: {createDateTime}</h2>
              <RemoveReviewButton onRemoveReview={removeReview} />
            </div>

            <div className="review-card__description">
              <ReviewResultList review={review} />
            </div>
          </Link>
        </div>
      </div>
    </Card>
  )
}

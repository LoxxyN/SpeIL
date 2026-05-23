'use client'

import { historyStore } from '../../model'
import { ReviewHistoryCard } from '../ReviewHistoryCard'
import { Fragment, useEffect } from 'react'
import { formatDateTime } from '@shared/lib'
import { Separator } from '@heroui/react'
import { BackLink } from '@shared/ui'
import { ClearHistoryButton } from '@features/index'
import { ReviewHistoryListEmpty } from '../ReviewHistoryListEmpty'

export const ReviewHistoryList = () => {
  const { allReviews, removeReviewById, clearHistory } = historyStore

  useEffect(() => {
    historyStore.loadStorage()
  }, [])

  return (
    <>
      {allReviews.length <= 0 ? (
        <ReviewHistoryListEmpty />
      ) : (
        <section className="review-history">
          <div className="flex items-center justify-between">
            <BackLink href="/" title="На главную" />
            <ClearHistoryButton onRemoveReview={clearHistory} />
          </div>

          <div className="review-list">
            {allReviews.map((item, index) => {
              if (typeof item.createdAt === 'undefined') return

              return (
                <Fragment key={item.reviewId}>
                  <ReviewHistoryCard
                    code={item.code}
                    review={item.review}
                    createDateTime={formatDateTime(item.createdAt)}
                    removeReview={() => removeReviewById(item.reviewId)}
                  />
                  {index !== allReviews.length - 1 && (
                    <Separator className="my-9" variant="secondary" />
                  )}
                </Fragment>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

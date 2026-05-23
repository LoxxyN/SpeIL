'use client'

import { ClearHistoryButton } from '@features/index'
import { Separator } from '@heroui/react'
import { formatDateTime } from '@shared/lib'
import { BackLink } from '@shared/ui'
import { observer } from 'mobx-react-lite'
import { Fragment } from 'react'
import { historyStore } from '../../model'
import { ReviewHistoryCard } from '../ReviewHistoryCard'
import { ReviewHistoryListEmpty } from '../ReviewHistoryListEmpty'

export const ReviewHistoryList = observer(() => {
  return (
    <>
      {historyStore.reviewData.length <= 0 ? (
        <ReviewHistoryListEmpty />
      ) : (
        <section className="review-history">
          <div className="flex items-center justify-between">
            <BackLink href="/" title="На главную" />
            <ClearHistoryButton onRemoveReview={historyStore.clearHistory} />
          </div>

          <div className="review-list">
            {historyStore.reviewData.map((item, index) => {
              if (typeof item.createdAt === 'undefined') return

              return (
                <Fragment key={item.reviewId}>
                  <ReviewHistoryCard
                    code={item.code}
                    review={item.review}
                    createDateTime={formatDateTime(item.createdAt)}
                    removeReview={() => historyStore.removeReviewById(item.reviewId)}
                  />
                  {index !== historyStore.reviewData.length - 1 && (
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
})

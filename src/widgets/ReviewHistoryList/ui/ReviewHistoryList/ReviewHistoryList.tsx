import { historyStore } from '../../model'
import { ReviewHistoryCard } from '../ReviewHistoryCard'
import { Fragment } from 'react'
import { Separator } from '@heroui/react'

export const ReviewHistoryList = () => {
  const { allReviews } = historyStore
  const isLast = true

  const formatDateTime = (timestamp: number) => {
    const formattedDate = new Date(timestamp).toLocaleDateString('ru-RU').replaceAll('/', '.')
    return formattedDate
  }

  return (
    <section className="review-history">
      {allReviews.map((item) => {
        if (typeof item.createdAt === 'undefined') return

        return (
          <Fragment key={item.reviewId}>
            <ReviewHistoryCard
              code={item.code}
              review={item.review}
              createDateTime={formatDateTime(item.createdAt)}
            />
            {isLast && <Separator className="my-9" variant="secondary" />}
          </Fragment>
        )
      })}
    </section>
  )
}

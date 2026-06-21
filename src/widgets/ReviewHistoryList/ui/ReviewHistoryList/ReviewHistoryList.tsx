'use client'

import { ActionInfoPanel } from '@entities/index'
import { ClearHistoryButton } from '@features/index'
import { Separator, Spinner } from '@heroui/react'
import { formatDateTime } from '@shared/lib'
import { baseHistoryStore, historyStore } from '@shared/lib/stores'
import { observer } from 'mobx-react-lite'
import { useLocale, useTranslations } from 'next-intl'
import { Fragment, useEffect } from 'react'
import { ReviewHistoryCard } from '../ReviewHistoryCard'
import { ReviewHistoryListEmpty } from '../ReviewHistoryListEmpty'

export const ReviewHistoryList = observer(() => {
  const t = useTranslations('ActionInfoPanel')
  const locale = useLocale()

  useEffect(() => {
    baseHistoryStore.loadStorage()
  }, [])

  if (!baseHistoryStore.isLoaded)
    return (
      <div className="flex size-full items-center justify-center">
        <Spinner className="size-12" />
      </div>
    )
  if (baseHistoryStore.reviewDataHistory.length <= 0) return <ReviewHistoryListEmpty />

  return (
    <section className="review-history">
      <ActionInfoPanel
        href="/"
        title={t('backToMain')}
        renderButton={<ClearHistoryButton onRemoveReview={historyStore.clearHistory} />}
      />

      <div className="review-list">
        {historyStore.reviewData.map((item, index) => {
          if (typeof item.createdAt === 'undefined') return

          return (
            <Fragment key={item.reviewId}>
              <ReviewHistoryCard
                href={`/review/${item.reviewId}`}
                code={item.code}
                review={item.review}
                dateTimeOfCreate={formatDateTime(item.createdAt, locale)}
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
  )
})

'use client'

import { ActionInfoPanel } from '@entities/index'
import { CopyReviewButton, RemoveReviewButton } from '@features/index'
import { baseHistoryStore, historyStore } from '@shared/lib/stores'
import { observer } from 'mobx-react-lite'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { reviewStore, useDangerToast } from '../../model'
import type { TReviewPanel } from '../../model/types'
import { ReviewPanelWrapper } from './ReviewPanelWrapper'

export const ReviewPanel = observer(
  ({ showActions, isReadonly, notFoundSlot, reviewId }: TReviewPanel) => {
    const { callDangerToast } = useDangerToast()
    const t = useTranslations('ActionInfoPanel')
    const router = useRouter()
    const locale = useLocale()

    useEffect(() => {
      baseHistoryStore.loadStorage()
    }, [])

    if (!baseHistoryStore.isLoaded) {
      return null
    }

    const getReview = () => {
      reviewStore
        .postReviewAction(reviewStore.code, locale)
        .catch((error) => error && callDangerToast())
    }

    const setCode = (value: string) => {
      reviewStore.setCode(value)
    }

    const removeReview = () => {
      if (typeof review === 'undefined') return
      historyStore.removeReviewById(review.reviewId)
      router.back()
    }

    const baseReviewPanelProps = {
      isLoading: reviewStore.isLoading,
      isReadonly: isReadonly,
      showActions: showActions,
      getReview: getReview,
      setCode: setCode,
      clearEditor: () => reviewStore.clearEditor(),
    }

    if (typeof reviewId === 'undefined') {
      return (
        <ReviewPanelWrapper
          {...baseReviewPanelProps}
          code={reviewStore.code}
          review={reviewStore.lastReview}
        />
      )
    }

    const review = reviewStore.getReviewById(reviewId)

    if (!review) {
      return notFoundSlot || null
    }

    return (
      <section>
        <ActionInfoPanel
          href="/history"
          title={t('backToHistory')}
          renderButton={
            <div className="flex gap-5">
              <CopyReviewButton review={review.review} />
              <RemoveReviewButton onRemoveReview={removeReview} />
            </div>
          }
        />
        <ReviewPanelWrapper {...baseReviewPanelProps} code={review.code} review={review.review} />
      </section>
    )
  }
)

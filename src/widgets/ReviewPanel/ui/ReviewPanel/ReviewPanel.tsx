'use client'

import { ActionInfoPanel } from '@entities/index'
import { RemoveReviewButton } from '@features/index'
import { baseHistoryStore, historyStore } from '@shared/lib/stores'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { reviewStore, useDangerToast } from '../../model'
import { ReviewPanelWrapper } from './ReviewPanelWrapper'

type TReviewPanel = {
  showActions: boolean
  isReadonly: boolean
  children?: React.ReactNode
  reviewId?: string
}

export const ReviewPanel = observer(
  ({ showActions, isReadonly, children, reviewId }: TReviewPanel) => {
    const { callDangerToast } = useDangerToast()
    const router = useRouter()

    useEffect(() => {
      baseHistoryStore.loadStorage()
    }, [])

    const getReview = () => {
      reviewStore.postReviewAction(reviewStore.code).catch((error) => error && callDangerToast())
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

    if (!baseHistoryStore.isLoaded) {
      return null
    }

    const review = reviewStore.getReviewById(reviewId)

    if (!review) {
      return children
    }

    return (
      <section>
        <ActionInfoPanel
          href="/history"
          title="К истории"
          renderButton={<RemoveReviewButton onRemoveReview={removeReview} />}
        />
        <ReviewPanelWrapper {...baseReviewPanelProps} code={review.code} review={review.review} />
      </section>
    )
  }
)

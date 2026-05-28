'use client'

import { baseHistoryStore } from '@shared/lib'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { reviewStore, useDangerToast } from '../../model'
import { ReviewPanelWrapper } from './ReviewPanelWrapper'

type TReviewPanel = {
  showActions: boolean
  isReadonly: boolean
  children: React.ReactNode
  reviewId?: string
}

export const ReviewPanel = observer(
  ({ showActions, isReadonly, children, reviewId }: TReviewPanel) => {
    const { callDangerToast } = useDangerToast()

    useEffect(() => {
      baseHistoryStore.loadStorage()
    }, [])

    const getReview = () => {
      reviewStore.postReviewAction(reviewStore.code).catch((error) => error && callDangerToast())
    }

    const setCode = (value: string) => {
      reviewStore.setCode(value)
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
      <ReviewPanelWrapper {...baseReviewPanelProps} code={review.code} review={review.review} />
    )
  }
)

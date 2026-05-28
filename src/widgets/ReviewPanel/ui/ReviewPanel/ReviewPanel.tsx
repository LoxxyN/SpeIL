'use client'

import { baseHistoryStore } from '@shared/lib'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { reviewStore, useDangerToast } from '../../model'
import { ReviewPanelWrapper } from './ReviewPanelWrapper'

export const ReviewPanel = observer(
  ({
    showActions,
    isReadonly,
    reviewId,
  }: {
    showActions: boolean
    isReadonly: boolean
    reviewId?: string
  }) => {
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

    return (
      <ReviewPanelWrapper
        {...baseReviewPanelProps}
        code={reviewStore.getReviewById(reviewId)?.code}
        review={reviewStore.getReviewById(reviewId)?.review}
      />
    )
  }
)

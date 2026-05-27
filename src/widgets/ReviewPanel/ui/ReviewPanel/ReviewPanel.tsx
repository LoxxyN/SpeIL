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

    if (typeof reviewId === 'undefined') {
      return (
        <ReviewPanelWrapper
          isReadonly={false}
          showActions={showActions}
          isLoading={reviewStore.isLoading}
          code={reviewStore.code}
          review={reviewStore.lastReview}
          clearEditor={() => reviewStore.clearEditor()}
          getReview={getReview}
          setCode={setCode}
        />
      )
    } else {
      return (
        <ReviewPanelWrapper
          isReadonly={isReadonly}
          showActions={showActions}
          isLoading={reviewStore.isLoading}
          code={reviewStore.getReviewById(reviewId)?.code}
          review={reviewStore.getReviewById(reviewId)?.review}
          clearEditor={() => reviewStore.clearEditor()}
          getReview={getReview}
          setCode={setCode}
        />
      )
    }
  }
)

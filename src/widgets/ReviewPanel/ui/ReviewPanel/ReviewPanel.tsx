'use client'

import { baseHistoryStore } from '@/src/shared/lib'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { reviewStore, useDangerToast } from '../../model'
import { ReviewPanelWrapper } from './ReviewPanelWrapper'

export const ReviewPanel = observer(
  ({ showActions, isReadonly }: { showActions: boolean; isReadonly: boolean }) => {
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

    return (
      <ReviewPanelWrapper
        isReadonly={isReadonly}
        showActions={showActions}
        isLoading={reviewStore.isLoading}
        code={reviewStore.code}
        review={reviewStore.lastReview}
        clearEditor={() => reviewStore.clearEditor()}
        getReview={getReview}
        setCode={setCode}
      />
    )
  }
)

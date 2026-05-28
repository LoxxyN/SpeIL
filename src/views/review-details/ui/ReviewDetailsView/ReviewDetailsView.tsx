'use client'

import { CopyReviewButton } from '@features/index'
import { BackLink } from '@shared/ui'
import { ReviewDetailsNotFound } from '@views/index'
import { ReviewPanel } from '@widgets/index'
import { reviewStore } from '@widgets/ReviewPanel/model'

export const ReviewDetailsView = ({ id }: { id: string }) => {
  const review = reviewStore.getReviewById(id)?.review
  if (typeof review === 'undefined') return

  return (
    <div className="wrapper flex h-full flex-col justify-between">
      <div className="mb-10 flex items-center justify-between">
        <BackLink href="/history" title="История" />
        <CopyReviewButton review={review} />
      </div>

      <ReviewPanel showActions={false} isReadonly reviewId={id}>
        <ReviewDetailsNotFound />
      </ReviewPanel>
    </div>
  )
}

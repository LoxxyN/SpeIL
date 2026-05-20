import type { IRatingCard } from '@shared/ui/RatingCard/types'

export type TReviewData = IRatingCard[] | null

export interface IReviewData {
  review: IRatingCard[] | null
}

export interface IReviewHistoryItem {
  review: TReviewData
  createdAt?: number
  reviewId?: number | string
}

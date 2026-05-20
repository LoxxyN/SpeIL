import type { TReviewData } from '@shared/types'

export interface IReviewHistoryItem {
  review: TReviewData
  createdAt?: number
  reviewId?: number | string
}

export type TReviewHistory = IReviewHistoryItem[]

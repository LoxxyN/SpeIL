import type { TReviewData } from '@shared/types'

export interface IReviewHistoryItem {
  code: string
  review: TReviewData
  createdAt: number
  reviewId: number | string
}

export type TReviewHistory = IReviewHistoryItem[]

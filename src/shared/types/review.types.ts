import type { IRatingCard } from '../ui/RatingCard'

export type TReviewData = IRatingCard[] | null
export interface IReviewData {
  review: TReviewData
}

export interface IReviewHistoryItem {
  code: string
  review: TReviewData
  createdAt?: number
  reviewId?: number | string
}

export type TReviewHistory = IReviewHistoryItem[]

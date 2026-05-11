import type { TRatingChipType } from '@shared/ui/RatingCard'

export interface IReviewResult {
  id: number
  reviewType: TRatingChipType
  reviewText: string
}

export type TRatingChipType = 'danger' | 'warning' | 'default'
export type TRatingChipLabel = 'Bad' | 'Medium' | 'NIT'
export interface IRatingCard {
  ratingChipType: TRatingChipType
  ratingText: string
}

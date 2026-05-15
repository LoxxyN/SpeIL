export type TRatingChipType = 'danger' | 'warning' | 'default'
export type TRatingChipLabel = 'Bad' | 'Suggestion' | 'NIT'
export interface IRatingCard {
  ratingChipType: TRatingChipType
  ratingText: string
}

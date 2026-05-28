export type TRatingChipType = 'danger' | 'warning' | 'default'
export interface IRatingCard {
  id: number
  reviewType: TRatingChipType
  description: string
}

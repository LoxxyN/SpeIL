import { Chip } from '@heroui/react'
import type { IRatingCard, TRatingChipLabel, TRatingChipType } from './rating-card.types'

const ratingChipLabelMap: Record<TRatingChipType, TRatingChipLabel> = {
  danger: 'Bad',
  warning: 'Medium',
  default: 'NIT',
}

export const RatingCard = ({ ratingChipType, ratingText }: IRatingCard) => {
  const ratingChipLabel = ratingChipLabelMap[ratingChipType]

  return (
    <div className="flex flex-col gap-2.5">
      <div>
        <Chip size="lg" variant="soft" color={ratingChipType}>
          <>{ratingChipLabel}</>
        </Chip>
      </div>

      <p className="pl-3">{ratingText}</p>
    </div>
  )
}

import { Chip } from '@heroui/react'
import type { IRatingCard, TRatingChipType } from './types'

const labelMap: Record<TRatingChipType, string> = {
  danger: 'Bad',
  warning: 'Suggestion',
  default: 'NIT',
}

export const RatingCard = ({ reviewType, description }: Omit<IRatingCard, 'id'>) => {
  const ratingChipLabel = labelMap[reviewType]

  return (
    <div className="flex flex-col gap-2.5">
      <div>
        <Chip size="lg" variant="soft" color={reviewType}>
          <>{ratingChipLabel}</>
        </Chip>
      </div>

      <p className="pl-3">{description}</p>
    </div>
  )
}

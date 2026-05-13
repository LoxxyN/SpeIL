import { Button, Card, ScrollShadow, TextArea } from '@heroui/react'
import { TrashBin } from '@gravity-ui/icons'
import './ReviewHistoryCard.css'
import { RatingCard } from '@shared/ui'

export const ReviewHistoryCard = () => {
  const mockText =
    'export const Header = () => {\n' +
    '  return (\n' +
    '    <>\n' +
    '      <h2>Hello World!</h2>\n' +
    '    </>\n' +
    ')}'

  return (
    <Card className="review-history-card">
      <div className="review-card">
        <div className="review-card__code-wrapper">
          <TextArea className="review-card__code-window" readOnly value={mockText} />
        </div>

        <div className="review-card__content">
          <div className="review-card__header">
            <h2 className="review-card__header-title">Создано: 12:48</h2>
            <Button size="lg" variant="danger">
              Удалить
              <TrashBin />
            </Button>
          </div>

          <div className="review-card__description">
            <ScrollShadow hideScrollBar className="h-[240px]">
              <RatingCard
                ratingChipType={'danger'}
                ratingText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                ratingChipType={'warning'}
                ratingText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                ratingChipType={'default'}
                ratingText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                ratingChipType={'danger'}
                ratingText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                ratingChipType={'warning'}
                ratingText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                ratingChipType={'default'}
                ratingText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
            </ScrollShadow>
          </div>
        </div>
      </div>
    </Card>
  )
}

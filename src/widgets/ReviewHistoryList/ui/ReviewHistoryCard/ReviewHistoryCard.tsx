import './ReviewHistoryCard.css'
import { Button, Card, ScrollShadow } from '@heroui/react'
import { CodeEditor } from '@features/index'
import { TrashBin } from '@gravity-ui/icons'
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
          <CodeEditor value={mockText} isReadonly={true} />
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
            <ScrollShadow hideScrollBar className="h-60">
              <RatingCard
                reviewType={'danger'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                reviewType={'warning'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
              <RatingCard
                reviewType={'default'}
                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
              />
            </ScrollShadow>
          </div>
        </div>
      </div>
    </Card>
  )
}

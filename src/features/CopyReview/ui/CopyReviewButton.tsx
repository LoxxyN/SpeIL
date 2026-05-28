import type { IReviewData } from '@/src/shared/types'
import { ChevronDown, CurlyBrackets, LogoMarkdown } from '@gravity-ui/icons'
import { Button, Dropdown, Label } from '@heroui/react'
import { useCopyReview } from '../../CopyReview/model'

export const CopyReviewButton = ({ review }: IReviewData) => {
  const { copyInJson, copyInMarkdown } = useCopyReview({ review })

  const handleAction = (key: React.Key) => {
    if (key === 'json') copyInJson()
    else copyInMarkdown()
  }

  return (
    <Dropdown>
      <Button variant="tertiary" size="lg">
        <span className="flex items-center gap-2">
          Копировать в
          <ChevronDown className="size-5" />
        </span>
      </Button>

      <Dropdown.Popover>
        <Dropdown.Menu onAction={handleAction}>
          <Dropdown.Item id="markdown" textValue="Markdown">
            <LogoMarkdown className="text-muted size-5" />
            <Label>Markdown</Label>
          </Dropdown.Item>
          <Dropdown.Item id="json" textValue="JSON">
            <CurlyBrackets className="text-muted size-5" />
            <Label>JSON</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  )
}

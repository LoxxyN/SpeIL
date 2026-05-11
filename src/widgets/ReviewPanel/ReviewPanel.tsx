import { ReviewResult } from '@entities/index'
import { CodeEditor } from '@features/index'
import { Button } from '@heroui/react'
import './ReviewPanel.css'

export const ReviewPanel = () => {
  return (
    <section className="rewiew-panel">
      <div className="flex w-1/2 flex-col gap-6">
        <CodeEditor />
        <div className="editor-action-buttons flex justify-evenly">
          <Button size="lg">Очистить поле</Button>
          <Button size="lg">Получить ревью</Button>
        </div>
      </div>

      <ReviewResult />
    </section>
  )
}

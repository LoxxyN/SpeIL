'use client'

import { ReviewResult } from '@entities/index'
import { ClearEditor, CodeEditor, CopyCodeButton } from '@features/index'
import { Button } from '@heroui/react'
import { useState } from 'react'
import './ReviewPanel.css'

export const ReviewPanel = () => {
  const [code, setCode] = useState(`export const App = () => {
  return <div>Hello</div>
}`)

  const onValueChange = (value: string) => {
    setCode(value)
  }

  const handleClearEditor = () => {
    setCode('')
  }

  return (
    <section className="rewiew-panel">
      <div className="flex w-1/2 flex-col gap-6">
        <div className="editor-container">
          <CodeEditor value={code} onValueChange={onValueChange} />
          <CopyCodeButton code={code} />
        </div>
        <div className="editor-action-buttons flex justify-evenly">
          <ClearEditor handleClear={handleClearEditor} />
          <Button size="lg">Получить ревью</Button>
        </div>
      </div>

      <ReviewResult />
    </section>
  )
}

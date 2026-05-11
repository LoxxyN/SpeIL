'use client'

import { ReviewResult } from '@entities/index'
import { CodeEditor, CopyCodeButton } from '@features/index'
import { Button } from '@heroui/react'
import { useRef, useState } from 'react'
import './ReviewPanel.css'

export const ReviewPanel = () => {
  const [code, setCode] = useState('')
  const codeRef = useRef('')

  const onChange = (value: string) => {
    setCode(value)
  }

  const onValueChange = (value: string) => {
    codeRef.current = value
  }

  return (
    <section className="rewiew-panel">
      <div className="flex w-1/2 flex-col gap-6">
        <div className="editor-container">
          <CodeEditor value={code} onChange={onChange} onValueChange={onValueChange} />
          <CopyCodeButton codeRef={codeRef} />
        </div>
        <div className="editor-action-buttons flex justify-evenly">
          <Button size="lg">Очистить поле</Button>
          <Button size="lg">Получить ревью</Button>
        </div>
      </div>

      <ReviewResult />
    </section>
  )
}

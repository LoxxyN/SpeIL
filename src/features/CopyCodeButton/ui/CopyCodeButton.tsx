'use client'

import { Copy } from '@gravity-ui/icons'
import { Button } from '@heroui/react'
import { RefObject } from 'react'
import { useCopyCode } from '../model'
import './CopyCodeButton.css'

export const CopyCodeButton = ({ codeRef }: { codeRef: RefObject<string> }) => {
  const { copyFunction } = useCopyCode()

  const handleCopyCode = () => copyFunction(codeRef.current)

  return (
    <Button
      className="editor-panel__copy-button"
      onPress={handleCopyCode}
      size="lg"
      variant="tertiary"
    >
      <span className="flex items-center gap-3">
        <Copy />
        Копировать
      </span>
    </Button>
  )
}

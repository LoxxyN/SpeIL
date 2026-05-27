import { Check, Copy } from '@gravity-ui/icons'
import { Button } from '@heroui/react'
import { useCopyCode } from '../model'
import './CopyCodeButton.css'

export const CopyCodeButton = ({ code }: { code: string }) => {
  const { copyFunction, isCopying } = useCopyCode()

  const handleCopyCode = () => copyFunction(code)

  return (
    <Button
      className="editor-panel__copy-button"
      onPress={handleCopyCode}
      size="lg"
      variant="tertiary"
    >
      {isCopying ? (
        <span className="flex items-center gap-3">
          <Check />
          Скопировано
        </span>
      ) : (
        <span className="flex items-center gap-3">
          <Copy />
          Копировать
        </span>
      )}
    </Button>
  )
}

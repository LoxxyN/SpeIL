import { Check, Copy } from '@gravity-ui/icons'
import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useCopyCode } from '../model'
import './CopyCodeButton.css'

export const CopyCodeButton = ({ code }: { code: string }) => {
  const { copyFunction, isCopying } = useCopyCode()
  const t = useTranslations('ReviewActionButtons')

  const handleCopyCode = () => copyFunction(code)

  return (
    <Button
      className="editor-panel__copy-button"
      onPress={handleCopyCode}
      size="lg"
      variant="tertiary"
    >
      {isCopying ? (
        <span className="flex items-center gap-2">
          <Check className="h-4.5 w-4.5 text-green-400" />
          {t('copied')}
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Copy className="h-4.5 w-4.5" />
          {t('copy')}
        </span>
      )}
    </Button>
  )
}

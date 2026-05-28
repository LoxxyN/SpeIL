import { Button } from '@heroui/react'

export const ClearEditor = ({ handleClear }: { handleClear: () => void }) => {
  return (
    <Button onClick={handleClear} size="lg" variant="tertiary">
      Очистить поле
    </Button>
  )
}

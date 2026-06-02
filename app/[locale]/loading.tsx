import { Spinner } from '@heroui/react'

export default function Loading() {
  return (
    <div className="flex w-full items-center justify-center">
      <Spinner size="xl" />
    </div>
  )
}

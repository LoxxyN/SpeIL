import { toast } from '@heroui/react'

export const useSuccessToast = () => {
  const callSuccessToast = () => {
    if (!document.hidden) {
      toast.success('Ревью успешно скопировано', {
        timeout: 1500,
      })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast.success('Ревью успешно скопировано', {
            timeout: 1500,
          })
          document.removeEventListener('visibilitychange', onVisibilityChange)
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  }

  return { callSuccessToast }
}

import { toast } from '@heroui/react'
import { useTranslations } from 'next-intl'

export const useSuccessToast = () => {
  const t = useTranslations('Toasts')

  const callSuccessToast = () => {
    if (!document.hidden) {
      toast.success(t('copySuccess'), {
        timeout: 1500,
      })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast.success(t('copySuccess'), {
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

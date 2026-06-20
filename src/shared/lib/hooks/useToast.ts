import { toast } from '@heroui/react'
import { useTranslations } from 'next-intl'

type TToastType = 'success' | 'danger'
const TOAST_TIMEOUT = 1500

export const useToast = () => {
  const t = useTranslations('Toasts')

  const callToast = (toastType: TToastType, toastTitle: string, toastDescription: string) => {
    if (!document.hidden) {
      toast[toastType](t(toastTitle), {
        description: t(toastDescription),
        timeout: TOAST_TIMEOUT,
      })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast[toastType](t(toastTitle), {
            description: t(toastDescription),
            timeout: TOAST_TIMEOUT,
          })
          document.removeEventListener('visibilitychange', onVisibilityChange)
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  }

  return { callToast }
}

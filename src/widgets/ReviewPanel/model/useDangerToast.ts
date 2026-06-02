import { toast } from '@heroui/react'
import { useTranslations } from 'next-intl'

export const useDangerToast = () => {
  const t = useTranslations('Toasts')

  const callDangerToast = () => {
    if (!document.hidden) {
      toast.danger(t('getReivewFailedTitle'), {
        description: t('getReivewFailedDescription'),
        timeout: 1500,
      })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast.danger(t('getReivewFailedTitle'), {
            description: t('getReivewFailedDescription'),
            timeout: 1500,
          })
          document.removeEventListener('visibilitychange', onVisibilityChange)
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  }

  return { callDangerToast }
}

import { toast } from '@heroui/react'

export const useDangerToast = () => {
  const callDangerToast = () => {
    if (!document.hidden) {
      toast.danger('Ой, что то пошло не так', { description: 'Пожалуйста повторите попытку' })
    } else {
      const onVisibilityChange = () => {
        if (!document.hidden) {
          toast.danger('Ой, что то пошло не так', { description: 'Пожалуйста повторите попытку' })
          document.removeEventListener('visibilitychange', onVisibilityChange)
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)
    }
  }

  return { callDangerToast }
}

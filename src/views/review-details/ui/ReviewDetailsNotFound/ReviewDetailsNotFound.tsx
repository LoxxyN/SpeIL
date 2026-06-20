import { Link } from '@i18n/navigation'
import { useTranslations } from 'next-intl'

export const ReviewDetailsNotFound = () => {
  const t = useTranslations('ReviewDetails')

  return (
    <div className="wrapper flex flex-col items-center gap-4 py-24">
      <h2 className="text-2xl font-semibold">{t('notFoundTitle')}</h2>

      <Link href="/history" className="link not-hover:text-muted text-base transition">
        {t('backLink')}
      </Link>
    </div>
  )
}

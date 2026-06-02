import { Link } from '@src/i18n/navigation'
import { useTranslations } from 'next-intl'

export const ReviewHistoryListEmpty = () => {
  const t = useTranslations('ReviewHistory')

  return (
    <section className="review-history">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-semibold">{t('notFoundTitle')}</h2>
        <p className="text-muted">
          <Link href="/" className="link not-hover:text-muted text-base transition">
            {t('backLink')}
          </Link>
        </p>
      </div>
    </section>
  )
}

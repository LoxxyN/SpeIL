import { useTranslations } from 'next-intl'
import './ReviewResultEmpty.css'

export const ReviewResultEmpty = () => {
  const t = useTranslations('ReviewResult')

  return (
    <div className="review-result--empty">
      <h2>{t('ReviewResultEmptyTitle')}</h2>

      <div className="review-result--empty__description">
        <div className="review-result--empty__faq review-result--empty__list">
          <h3>{t('whatsCheckTitle')}</h3>
          <ul>
            <li>{t('checkStep1')}</li>
            <li>{t('checkStep2')}</li>
            <li>{t('checkStep3')}</li>
          </ul>
        </div>

        <div className="review-result--empty__guide review-result--empty__list">
          <h3>{t('howItWorkTitle')}</h3>
          <ol>
            <li>{t('workStep1')}</li>
            <li>{t('workStep2')}</li>
            <li>{t('workStep3')}</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

import { makeAutoObservable } from 'mobx'
import type { TReviewHistory } from '@shared/types'

const STORAGE_KEY = 'reviews_history'

class HistoryStore {
  reviewDataHistory: TReviewHistory = [
    {
      code: '123213\n123213\n123213\n123213\n123213\n123213\n123213\n123213\n123213\n',
      reviewId: crypto.randomUUID(),
      createdAt: Date.now(),
      review: [
        {
          id: 1,
          reviewType: 'default',
          description:
            'Экспорт компонента Hello выполнен корректно, однако рекомендуется добавить типизацию (если используется TypeScript) и PropTypes для улучшения поддержки и документирования пропсов в будущем.',
        },
        {
          id: 2,
          reviewType: 'warning',
          description:
            "Обеспечение защиты от prompt injection для LLM требует многоуровневого подхода. Во-первых, никогда не доверяйте вводу пользователя: используйте системные промпты для строгого ограничения ролей модели. Во-вторых, внедрите 'delimiter separation' (разделители), чтобы отделить системные инструкции от пользовательского ввода. В-третьих, обязательно используйте Content Security Policy (CSP) и валидацию на стороне сервера, чтобы предотвратить выполнение вредоносного контента, который модель может вернуть в ответе (XSS).",
        },
        {
          id: 3,
          reviewType: 'danger',
          description:
            'Критически важно реализовать фильтрацию выходных данных (Output Filtering). Даже если вы защитили промпт, модель может вернуть код или скрипты, которые при отрисовке в браузере (например, через dangerouslySetInnerHTML в React) приведут к XSS. Всегда экранируйте вывод модели перед отображением в UI.',
        },
        {
          id: 4,
          reviewType: 'warning',
          description:
            'Рассмотрите возможность использования специализированных инструментов для мониторинга и безопасности промптов, таких как LlamaGuard или аналогичные API для детекции попыток инъекций, так как простые эвристики на основе черных списков слов легко обходятся современными методами состязательных атак.',
        },
      ],
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  get allReviews(): TReviewHistory {
    return this.reviewDataHistory
  }

  removeReviewById(reviewId: number | string | undefined): TReviewHistory {
    if (typeof reviewId === 'undefined') return []
    return this.reviewDataHistory.filter((item) => item.reviewId !== reviewId)
  }

  private _updateStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.reviewDataHistory))
    } catch (error) {
      console.error('Failed to save a review history from localstorage:', error)
    }
  }

  loadStorage = () => {
    try {
      const isStored = localStorage.getItem(STORAGE_KEY)
      if (isStored) {
        this.reviewDataHistory = JSON.parse(isStored)
      } else {
        this._updateStorage()
      }
    } catch (error) {
      console.error('Failed to load a review history from localstorage:', error)
    }
  }
}

export const historyStore = new HistoryStore()

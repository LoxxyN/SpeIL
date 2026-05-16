import type { IReviewResponse } from '@/src/shared/ui/RatingCard/types'

export const REVIEW_DATA_EXAMPLE: IReviewResponse = {
  review: [
    {
      id: 1,
      reviewType: 'danger',
      description:
        "Код содержит синтаксические ошибки (мусорные символы 'asd', 'asdas', 'debuggersadasda' вне структуры React-компонента), из-за которых приложение не будет скомпилировано.",
    },
    {
      id: 2,
      reviewType: 'warning',
      description:
        'В React-компонентах рекомендуется использовать именованный экспорт (export function App) вместо экспорта стрелочной функции по умолчанию, так как это упрощает отладку (имя функции отображается в React DevTools) и улучшает поддержку tree-shaking.',
    },
    {
      id: 3,
      reviewType: 'default',
      description:
        'Отсутствует явная типизация (если используется TypeScript) или проверка пропсов (PropTypes), что затрудняет масштабирование и использование компонента в других частях системы.',
    },
  ],
}

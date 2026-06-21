import { RatingCard } from '@shared/ui'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('RatingCard', () => {
  describe('отображение label по reviewType', () => {
    it('показывает Bad для danger', () => {
      render(<RatingCard reviewType="danger" description="Описание ошибки" />)

      expect(screen.getByText('Bad')).toBeInTheDocument()
    })

    it('показывает Suggestion для warning', () => {
      render(<RatingCard reviewType="warning" description="Предупреждение" />)

      expect(screen.getByText('Suggestion')).toBeInTheDocument()
    })

    it('показывает NIT для default', () => {
      render(<RatingCard reviewType="default" description="Мелкое замечание" />)

      expect(screen.getByText('NIT')).toBeInTheDocument()
    })
  })

  describe('отображение description', () => {
    it('рендерит переданный текст описания', () => {
      render(<RatingCard reviewType="danger" description="Критическая уязвимость XSS" />)

      expect(screen.getByText('Критическая уязвимость XSS')).toBeInTheDocument()
    })

    it('рендерит длинный текст без обрезки', () => {
      const longText = 'А'.repeat(500)
      render(<RatingCard reviewType="default" description={longText} />)

      expect(screen.getByText(longText)).toBeInTheDocument()
    })
  })

  describe('одновременный рендер нескольких карточек', () => {
    it('каждая карточка показывает свой label и description', () => {
      const { rerender } = render(<RatingCard reviewType="danger" description="Первая" />)
      expect(screen.getByText('Bad')).toBeInTheDocument()
      expect(screen.getByText('Первая')).toBeInTheDocument()

      rerender(<RatingCard reviewType="warning" description="Вторая" />)
      expect(screen.getByText('Suggestion')).toBeInTheDocument()
      expect(screen.getByText('Вторая')).toBeInTheDocument()
    })
  })
})

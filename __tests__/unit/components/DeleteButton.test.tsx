import { DeleteButton } from '@shared/ui/DeleteButton'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('DeleteButton', () => {
  describe('отображение', () => {
    it('рендерит переданный label', () => {
      render(<DeleteButton label="Удалить" hasTrashIcon={false} />)

      expect(screen.getByText('Удалить')).toBeInTheDocument()
    })

    it('рендерит иконку корзины если hasTrashIcon = true', () => {
      const { container } = render(<DeleteButton label="Удалить" hasTrashIcon={true} />)

      // Иконка рендерится как svg
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('не рендерит иконку если hasTrashIcon = false', () => {
      const { container } = render(<DeleteButton label="Удалить" hasTrashIcon={false} />)

      expect(container.querySelector('svg')).not.toBeInTheDocument()
    })
  })

  describe('размеры', () => {
    it('рендерит кнопку любого переданного размера без ошибок', () => {
      expect(() =>
        render(<DeleteButton label="Удалить" hasTrashIcon={false} size="lg" />)
      ).not.toThrow()

      expect(() =>
        render(<DeleteButton label="Удалить" hasTrashIcon={false} size="md" />)
      ).not.toThrow()

      expect(() =>
        render(<DeleteButton label="Удалить" hasTrashIcon={false} size="sm" />)
      ).not.toThrow()
    })
  })

  describe('взаимодействие', () => {
    it('вызывает onClick при клике', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<DeleteButton label="Удалить" hasTrashIcon={false} onClick={handleClick} />)
      await user.click(screen.getByText('Удалить'))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('не падает если onClick не передан', async () => {
      const user = userEvent.setup()

      render(<DeleteButton label="Удалить" hasTrashIcon={false} />)

      await expect(user.click(screen.getByText('Удалить'))).resolves.not.toThrow()
    })
  })
})

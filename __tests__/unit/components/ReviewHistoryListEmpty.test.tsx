import { render, screen } from '@testing-library/react'
import { ReviewHistoryListEmpty } from '@widgets/ReviewHistoryList/ui/ReviewHistoryListEmpty/ReviewHistoryListEmpty'
import { describe, expect, it } from 'vitest'

describe('ReviewHistoryListEmpty', () => {
  it('показывает заголовок что история пуста', () => {
    render(<ReviewHistoryListEmpty />)
    expect(screen.getByText('notFoundTitle')).toBeInTheDocument()
  })

  it('показывает ссылку на главную', () => {
    render(<ReviewHistoryListEmpty />)
    expect(screen.getByText('backLink')).toBeInTheDocument()
  })

  it('ссылка ведёт на главную страницу', () => {
    render(<ReviewHistoryListEmpty />)
    const link = screen.getByRole('link', { name: 'backLink' })
    expect(link).toHaveAttribute('href', '/')
  })
})

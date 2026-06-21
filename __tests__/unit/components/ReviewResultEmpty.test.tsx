import { ReviewResultEmpty } from '@entities/ReviewResult/ui/ReviewResultEmpty/ReviewResultEmpty'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('ReviewResultEmpty', () => {
  it('показывает заголовок пустого состояния', () => {
    render(<ReviewResultEmpty />)
    expect(screen.getByText('ReviewResultEmptyTitle')).toBeInTheDocument()
  })

  it('показывает заголовок секции что проверит агент', () => {
    render(<ReviewResultEmpty />)
    expect(screen.getByText('whatsCheckTitle')).toBeInTheDocument()
  })

  it('показывает заголовок как это работает', () => {
    render(<ReviewResultEmpty />)
    expect(screen.getByText('howItWorkTitle')).toBeInTheDocument()
  })

  it('показывает все три шага проверки', () => {
    render(<ReviewResultEmpty />)
    expect(screen.getByText('checkStep1')).toBeInTheDocument()
    expect(screen.getByText('checkStep2')).toBeInTheDocument()
    expect(screen.getByText('checkStep3')).toBeInTheDocument()
  })

  it('показывает все три шага как это работает', () => {
    render(<ReviewResultEmpty />)
    expect(screen.getByText('workStep1')).toBeInTheDocument()
    expect(screen.getByText('workStep2')).toBeInTheDocument()
    expect(screen.getByText('workStep3')).toBeInTheDocument()
  })
})

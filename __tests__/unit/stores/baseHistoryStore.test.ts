import { baseHistoryStore } from '@/src/shared/lib'
import type { IReviewHistoryItem } from '@shared/types'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mockReview: IReviewHistoryItem = {
  code: 'const x = 1',
  review: [{ id: 1, reviewType: 'danger', description: 'test' }],
  reviewId: 'test-id-1',
  createdAt: 1234567890,
}

describe('baseHistoryStore', () => {
  beforeEach(() => {
    baseHistoryStore.reviewDataHistory = []
    baseHistoryStore.isLoaded = false
    localStorage.clear()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('loadStorage', () => {
    it('загружает данные из localStorage если они есть', () => {
      localStorage.setItem('reviews_history', JSON.stringify([mockReview]))

      baseHistoryStore.loadStorage()

      expect(baseHistoryStore.reviewDataHistory).toEqual([mockReview])
    })

    it('оставляет пустой массив если localStorage пуст', () => {
      baseHistoryStore.loadStorage()

      expect(baseHistoryStore.reviewDataHistory).toEqual([])
    })

    it('устанавливает isLoaded = true после загрузки', () => {
      baseHistoryStore.loadStorage()

      expect(baseHistoryStore.isLoaded).toBe(true)
    })

    it('устанавливает isLoaded = true даже если localStorage сломан', () => {
      // Мокаем getItem чтобы он бросил ошибку
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('localStorage недоступен')
      })

      baseHistoryStore.loadStorage()

      expect(baseHistoryStore.isLoaded).toBe(true)
    })

    it('не падает если в localStorage невалидный JSON', () => {
      localStorage.setItem('reviews_history', 'это не json {{{')

      expect(() => baseHistoryStore.loadStorage()).not.toThrow()
      expect(baseHistoryStore.isLoaded).toBe(true)
    })
  })

  describe('updateStorage', () => {
    it('сохраняет текущий массив в localStorage', () => {
      baseHistoryStore.reviewDataHistory = [mockReview]

      baseHistoryStore.updateStorage()

      const saved = JSON.parse(localStorage.getItem('reviews_history') ?? '[]')
      expect(saved).toEqual([mockReview])
    })

    it('сохраняет пустой массив если история пуста', () => {
      baseHistoryStore.updateStorage()

      const saved = JSON.parse(localStorage.getItem('reviews_history') ?? 'null')
      expect(saved).toEqual([])
    })
  })
})

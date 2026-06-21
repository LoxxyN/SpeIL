import { baseHistoryStore } from '@shared/lib/stores/createBaseHistoryStore'
import { historyStore } from '@shared/lib/stores/historyStore'
import type { IReviewHistoryItem } from '@shared/types'
import { beforeEach, describe, expect, it } from 'vitest'

const makeReview = (id: string): IReviewHistoryItem => ({
  code: `const x = "${id}"`,
  review: [{ id: 1, reviewType: 'default', description: 'Тест' }],
  reviewId: id,
  createdAt: Date.now(),
})

describe('historyStore', () => {
  beforeEach(() => {
    baseHistoryStore.reviewDataHistory = []
    localStorage.clear()
  })

  describe('reviewData', () => {
    it('возвращает текущую историю из baseHistoryStore', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1')]

      expect(historyStore.reviewData).toHaveLength(1)
    })
  })

  describe('clearHistory', () => {
    it('очищает весь массив', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1'), makeReview('2')]

      historyStore.clearHistory()

      expect(historyStore.reviewData).toHaveLength(0)
    })

    it('обновляет localStorage после очистки', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1')]

      historyStore.clearHistory()

      const saved = JSON.parse(localStorage.getItem('reviews_history') ?? 'null')
      expect(saved).toEqual([])
    })
  })

  describe('removeReviewById', () => {
    it('удаляет элемент с нужным id', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1'), makeReview('2'), makeReview('3')]

      historyStore.removeReviewById('2')

      expect(historyStore.reviewData).toHaveLength(2)
      expect(historyStore.reviewData.find((r) => r.reviewId === '2')).toBeUndefined()
    })

    it('не трогает остальные элементы', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1'), makeReview('2')]

      historyStore.removeReviewById('1')

      expect(historyStore.reviewData[0].reviewId).toBe('2')
    })

    it('ничего не делает если id не найден', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1')]

      historyStore.removeReviewById('несуществующий-id')

      expect(historyStore.reviewData).toHaveLength(1)
    })

    it('ничего не делает если id = undefined', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1')]

      historyStore.removeReviewById(undefined)

      expect(historyStore.reviewData).toHaveLength(1)
    })

    it('обновляет localStorage после удаления', () => {
      baseHistoryStore.reviewDataHistory = [makeReview('1'), makeReview('2')]

      historyStore.removeReviewById('1')

      const saved = JSON.parse(localStorage.getItem('reviews_history') ?? '[]')
      expect(saved).toHaveLength(1)
      expect(saved[0].reviewId).toBe('2')
    })
  })
})

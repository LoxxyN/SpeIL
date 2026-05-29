import { baseHistoryStore } from '@shared/lib'
import { makeAutoObservable } from 'mobx'

export const historyStore = makeAutoObservable({
  get reviewData() {
    return baseHistoryStore.reviewDataHistory
  },

  clearHistory() {
    baseHistoryStore.reviewDataHistory = []
    baseHistoryStore.updateStorage()
  },

  removeReviewById(reviewId: number | string | undefined) {
    if (typeof reviewId === 'undefined') return []

    baseHistoryStore.reviewDataHistory = baseHistoryStore.reviewDataHistory.filter(
      (item) => item.reviewId !== reviewId
    )
    baseHistoryStore.updateStorage()
  },
})

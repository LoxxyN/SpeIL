import type { IReviewHistoryItem } from '@shared/types'
import { makeAutoObservable } from 'mobx'

const STORAGE_KEY = 'reviews_history' as const

function createBaseHistoryStore() {
  const store = {
    reviewDataHistory: [] as IReviewHistoryItem[],

    loadStorage() {
      try {
        const isStored = localStorage.getItem(STORAGE_KEY)
        if (isStored) {
          store.reviewDataHistory = JSON.parse(isStored) as IReviewHistoryItem[]
        } else {
          store.updateStorage()
        }
      } catch (error) {
        console.error('Failed to load a review history from localstorage:', error)
      }
    },

    updateStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store.reviewDataHistory))
      } catch (error) {
        console.error('Failed to save a review history from localstorage:', error)
      }
    },
  }

  makeAutoObservable(store)
  store.loadStorage()

  return store
}

export const baseHistoryStore = createBaseHistoryStore()

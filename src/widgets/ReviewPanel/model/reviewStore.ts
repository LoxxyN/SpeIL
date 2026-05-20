import type { IReviewData, IReviewHistoryItem } from '@entities/ReviewResult/model'
import { action, makeAutoObservable } from 'mobx'
import { postReview } from '../api'

type TReviewHistory = IReviewHistoryItem[]
const STORAGE_KEY = 'reviews_history'
const codeTemplate = `export function Hello() {
  return (<h1>Hello World!</h1>)
}`

class ReviewStore {
  isLoading: boolean = false
  reviewDataHistory: TReviewHistory = []
  code: string = codeTemplate

  constructor() {
    makeAutoObservable(this)
  }

  get lastReview() {
    return this.reviewDataHistory[0]?.review ?? null
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

  postReviewAction = action(async (code: string) => {
    try {
      this.isLoading = true
      const newReview = await postReview(code)

      this.addReviewToHistory(newReview)
    } catch (error) {
      throw new Error(`postReviewAction error: ${error}`)
    } finally {
      this.isLoading = false
    }
  })

  addReviewToHistory = (newReviewData: IReviewData) => {
    const newReview: IReviewHistoryItem = {
      review: newReviewData.review,
      reviewId: crypto.randomUUID(),
      createdAt: Date.now(),
    }

    this.reviewDataHistory = [newReview, ...this.reviewDataHistory]
    this._updateStorage()
  }

  clearEditor = () => {
    this.code = ''
  }

  setCode = (value: string) => {
    this.code = value
  }
}

export const reviewStore = new ReviewStore()

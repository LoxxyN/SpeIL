import { baseHistoryStore } from '@shared/lib'
import type { IReviewData, IReviewHistoryItem } from '@shared/types'
import { action, makeAutoObservable, runInAction } from 'mobx'
import { postReview } from '../api'

const codeTemplate = `export function Hello() {
  return (<h1>Hello World!</h1>)
}`

export const reviewStore = makeAutoObservable(
  {
    isLoading: false,
    code: codeTemplate,
    reviewCode: '',

    get lastReview() {
      return baseHistoryStore.reviewDataHistory[0]?.review ?? null
    },

    get reviewData() {
      return baseHistoryStore.reviewDataHistory
    },

    async postReviewAction(code: string) {
      try {
        this.isLoading = true
        const newReview = await postReview(code)

        runInAction(() => {
          this.reviewCode = code
          this.addReviewToHistory(newReview)
        })
      } catch (error) {
        throw new Error(`postReviewAction error: ${error}`)
      } finally {
        runInAction(() => (this.isLoading = false))
      }
    },

    addReviewToHistory(newReviewData: IReviewData) {
      const newReview: IReviewHistoryItem = {
        code: this.reviewCode,
        review: newReviewData.review,
        reviewId: crypto.randomUUID(),
        createdAt: Date.now(),
      }

      baseHistoryStore.reviewDataHistory = [newReview, ...baseHistoryStore.reviewDataHistory]
      baseHistoryStore.updateStorage()
    },

    clearEditor() {
      this.code = ''
    },

    setCode(value: string) {
      this.code = value
    },
  },
  {
    postReviewAction: action,
  }
)

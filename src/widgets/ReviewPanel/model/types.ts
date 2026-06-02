import type { TReviewData } from '@shared/types'

export type TReviewPanel = {
  showActions: boolean
  isReadonly: boolean
  children?: React.ReactNode
  reviewId?: string
}

export type TReviewPanelWrapper = {
  isLoading: boolean
  showActions?: boolean
  isReadonly?: boolean
  code?: string
  review?: TReviewData
  setCode: (value: string) => void
  clearEditor: () => void
  getReview: () => void
}

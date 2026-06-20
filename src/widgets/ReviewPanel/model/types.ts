import type { TReviewData } from '@shared/types'

export type TReviewPanel = {
  showActions: boolean
  isReadonly: boolean
  notFoundSlot?: React.ReactNode
  reviewId?: string
}

export type TEditorActionButtons = {
  handleClear: () => void
  handleGetReview: () => void
  isLoading: boolean
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

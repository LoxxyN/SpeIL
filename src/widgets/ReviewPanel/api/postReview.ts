import { parseNestedJSON } from '@shared/lib'
import type { IReviewData } from '@shared/types'

export const postReview = async (code: string, locale: string): Promise<IReviewData> => {
  try {
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, locale }),
    })

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`)
    }

    const { data } = await res.json()
    const reviewData = parseNestedJSON(data)

    return { review: reviewData }
  } catch (error) {
    throw new Error(`postReview api error: ${error}`)
  }
}

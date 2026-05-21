import { parseNestedJSON } from '@shared/lib'
import type { IReviewData } from '@shared/types'

export const postReview = async (code: string): Promise<IReviewData> => {
  try {
    const res = await fetch('http://localhost:3000/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code }),
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

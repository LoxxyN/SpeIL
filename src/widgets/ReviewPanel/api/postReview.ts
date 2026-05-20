import type { IReviewData } from '@/src/entities/ReviewResult/model'
import { parseNestedJSON } from '@shared/lib'

export const postReview = async (code: string): Promise<IReviewData> => {
  try {
    const res = await fetch('http://localhost:3000/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code }),
    })

    const { data } = await res.json()
    const reviewData = parseNestedJSON(data)

    return { review: reviewData }
  } catch (error) {
    throw new Error(`postReview api error: ${error}`)
  }
}

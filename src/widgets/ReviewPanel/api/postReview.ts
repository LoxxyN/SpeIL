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

    let review

    try {
      const parsed = JSON.parse(data)
      review = Array.isArray(parsed) ? parsed : [parsed]
    } catch {
      review = data
      review = data
        .split(/\n(?=\{)/) // сплитим перед каждым {
        .filter(Boolean)
        .map((chunk: string) => JSON.parse(chunk.trim()))
    }

    return { review }
  } catch (error) {
    throw new Error(`postReview api error: ${error}`)
  }
}

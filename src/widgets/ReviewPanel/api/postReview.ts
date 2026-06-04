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

    const parsed = data
      .split('\n\n') // Нужно для того чтобы убрать \n\n из ответа от ИИ агента при парсинге
      .filter(Boolean)
      .map((chunk: string) => JSON.parse(chunk.trim()))

    // Приводим к массиву в любом случае
    const review = Array.isArray(parsed) ? parsed : [parsed]

    return { review }
  } catch (error) {
    throw new Error(`postReview api error: ${error}`)
  }
}

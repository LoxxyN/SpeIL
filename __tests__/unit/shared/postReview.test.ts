import { postReview } from '@widgets/ReviewPanel/api/postReview'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockReviewCards = [
  { id: 1, reviewType: 'danger', description: 'Критическая ошибка' },
  { id: 2, reviewType: 'warning', description: 'Предупреждение' },
]

// Хелпер чтобы не писать одно и то же в каждом тесте
const mockFetch = (data: unknown, ok = true) => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok,
      status: ok ? 200 : 500,
      json: () => Promise.resolve(data),
    })
  )
}

describe('postReview', () => {
  beforeEach(() => {
    vi.unstubAllGlobals()
  })

  describe('успешный ответ', () => {
    it('возвращает review из распарсенного JSON', async () => {
      mockFetch({ data: JSON.stringify(mockReviewCards) })

      const result = await postReview('const x = 1', 'ru')

      expect(result.review).toEqual(mockReviewCards)
    })

    it('корректно обрабатывает double-encoded JSON от LLM', async () => {
      // LLM иногда возвращает JSON строкой внутри JSON
      const doubleEncoded = JSON.stringify(JSON.stringify(mockReviewCards))
      mockFetch({ data: doubleEncoded })

      const result = await postReview('const x = 1', 'ru')

      expect(result.review).toEqual(mockReviewCards)
    })

    it('передаёт код и локаль в теле запроса', async () => {
      mockFetch({ data: JSON.stringify(mockReviewCards) })

      await postReview('const x = 1', 'en')

      const fetchCall = vi.mocked(fetch).mock.calls[0]
      const body = JSON.parse(fetchCall[1]?.body as string)

      expect(body.code).toBe('const x = 1')
      expect(body.locale).toBe('en')
    })

    it('делает POST запрос на /api/review', async () => {
      mockFetch({ data: JSON.stringify(mockReviewCards) })

      await postReview('const x = 1', 'ru')

      expect(fetch).toHaveBeenCalledWith('/api/review', expect.objectContaining({ method: 'POST' }))
    })
  })

  describe('ошибки', () => {
    it('бросает ошибку если сервер вернул !ok', async () => {
      mockFetch({ error: 'Failed' }, false)

      await expect(postReview('const x = 1', 'ru')).rejects.toThrow()
    })

    it('бросает ошибку если fetch упал совсем', async () => {
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

      await expect(postReview('const x = 1', 'ru')).rejects.toThrow()
    })
  })
})

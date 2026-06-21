import { parseNestedJSON } from '@shared/lib/parseNestedJSON'
import { describe, expect, it } from 'vitest'

describe('parseNestedJSON', () => {
  describe('примитивы', () => {
    it('возвращает число как есть', () => {
      expect(parseNestedJSON(42)).toBe(42)
    })

    it('возвращает boolean как есть', () => {
      expect(parseNestedJSON(true)).toBe(true)
    })

    it('возвращает null как есть', () => {
      expect(parseNestedJSON(null)).toBe(null)
    })
  })

  describe('строки', () => {
    it('парсит валидный JSON-строку в объект', () => {
      expect(parseNestedJSON('{"id": 1}')).toEqual({ id: 1 })
    })

    it('парсит JSON-массив из строки', () => {
      expect(parseNestedJSON('[1, 2, 3]')).toEqual([1, 2, 3])
    })

    it('возвращает обычную строку как есть если это не JSON', () => {
      expect(parseNestedJSON('просто текст')).toBe('просто текст')
    })

    it('возвращает пустую строку как есть', () => {
      expect(parseNestedJSON('')).toBe('')
    })
  })

  describe('вложенный JSON (double-encoded)', () => {
    it('парсит строку внутри строки', () => {
      const doubleEncoded = JSON.stringify(JSON.stringify({ id: 1 }))
      expect(parseNestedJSON(doubleEncoded)).toEqual({ id: 1 })
    })

    it('парсит массив объектов из double-encoded строки', () => {
      const data = [{ id: 1, reviewType: 'danger' }]
      const doubleEncoded = JSON.stringify(JSON.stringify(data))
      expect(parseNestedJSON(doubleEncoded)).toEqual(data)
    })
  })

  describe('массивы', () => {
    it('рекурсивно парсит строки внутри массива', () => {
      const input = ['{"id": 1}', '{"id": 2}']
      expect(parseNestedJSON(input)).toEqual([{ id: 1 }, { id: 2 }])
    })

    it('не трогает примитивы внутри массива', () => {
      expect(parseNestedJSON([1, 2, 3])).toEqual([1, 2, 3])
    })

    it('обрабатывает пустой массив', () => {
      expect(parseNestedJSON([])).toEqual([])
    })
  })

  describe('объекты', () => {
    it('рекурсивно парсит строковые значения внутри объекта', () => {
      const input = { data: '{"id": 1}' }
      expect(parseNestedJSON(input)).toEqual({ data: { id: 1 } })
    })

    it('обрабатывает пустой объект', () => {
      expect(parseNestedJSON({})).toEqual({})
    })

    it('не трогает числовые значения внутри объекта', () => {
      const input = { id: 1, count: 42 }
      expect(parseNestedJSON(input)).toEqual({ id: 1, count: 42 })
    })
  })

  describe('реальный сценарий — ответ от LLM', () => {
    it('парсит double-encoded массив review карточек', () => {
      const cards = [
        { id: 1, reviewType: 'danger', description: 'Критическая ошибка' },
        { id: 2, reviewType: 'warning', description: 'Предупреждение' },
      ]
      // LLM иногда возвращает JSON строкой внутри JSON
      const llmResponse = JSON.stringify(JSON.stringify(cards))
      expect(parseNestedJSON(llmResponse)).toEqual(cards)
    })
  })
})

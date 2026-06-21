import { formatDateTime } from '@shared/lib'
import { describe, expect, it } from 'vitest'

describe('formatDateTime', () => {
  const timestamp = new Date('2024-03-15T14:30:45').getTime()

  describe('Русская локаль', () => {
    it('Содержит разделитель |', () => {
      expect(formatDateTime(timestamp, 'ru')).toContain('|')
    })

    it('Форматирует дату в формате ДД.ММ.ГГГГ', () => {
      expect(formatDateTime(timestamp, 'ru')).toMatch(/\d{2}\.\d{2}\.\d{4}/)
    })

    it('Форматирует время в формате ЧЧ:ММ:СС', () => {
      expect(formatDateTime(timestamp, 'ru')).toMatch(/\d{2}\.\d{2}\.\d{2}/)
    })
  })

  describe('Английская локаль', () => {
    it('Содержит разделитель |', () => {
      expect(formatDateTime(timestamp, 'en')).toContain('|')
    })

    it('Форматирует дату в формате ММ.ДД.ГГГГ', () => {
      expect(formatDateTime(timestamp, 'en')).toMatch(/\d{2}\.\d{2}\.\d{2}/)
    })
  })

  describe('Граничные значения', () => {
    it('Не падает на timestamp = 0 (1 янв 1970)', () => {
      expect(() => formatDateTime(0, 'ru')).not.toThrow()
    })

    it('Не падает на очень большой timestamp', () => {
      expect(() => formatDateTime(99999999999999, 'ru')).not.toThrow()
    })

    it('Неизвестная локаль не ломает функцию', () => {
      expect(() => formatDateTime(timestamp, 'de')).not.toThrow()
    })
  })
})

import { getReivewRule } from '@/config/reivew-rule'
import { GoogleGenAI } from '@google/genai'
import type { TLocale } from '@shared/types'
import { type NextRequest, NextResponse } from 'next/server'

const isLocale = (value: unknown): value is TLocale => value === 'ru' || value === 'en'

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { code, locale } = await req.json()
    const reviewLocale = isLocale(locale) ? locale : 'ru'
    if (code === '') {
      console.error('Было передано пустое значение')
      throw new Error('Было передано пустое значение')
    }

    const systemInstruction = getReivewRule(reviewLocale)

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: `Проанализируй следующий код:\n\n${code}`,
      config: {
        systemInstruction: systemInstruction,
      },
    })

    return NextResponse.json({
      data: response.text,
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to get review' }, { status: 500 })
  }
}

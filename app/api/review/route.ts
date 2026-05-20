import { RULE } from '@/config/reivew-rule'
import { GoogleGenAI } from '@google/genai'
import { type NextRequest, NextResponse } from 'next/server'

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json()
    if (code === '') {
      console.error('Было передано пустое значение')
      throw new Error('Было передано пустое значение')
    }

    const systemInstruction = RULE

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

import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delayMs: number = 350) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delayMs)

    return () => clearTimeout(timer)
  }, [value, delayMs])

  return debounceValue
}

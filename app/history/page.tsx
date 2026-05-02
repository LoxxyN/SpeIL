'use client'

import { useState } from 'react'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <header>
      <button onClick={onClick}>Change active</button>
      <p>is active: {isActive}</p>
    </header>
  )
}

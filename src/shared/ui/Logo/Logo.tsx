'use client'

import { themeStore } from '@/app/store'
import { observer } from 'mobx-react-lite'
import { LogoWrapper } from './LogoWrapper'

export const Logo = observer(() => {
  return <LogoWrapper themeVariant={themeStore.theme} />
})

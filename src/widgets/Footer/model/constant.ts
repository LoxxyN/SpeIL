interface ISocialLink {
  id: number
  href: string
  label: string
}

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    id: 1,
    href: 'https://t.me/L0xxyN',
    label: 'Telegram',
  },
  {
    id: 2,
    href: 'mailto:feed@speil.dev',
    label: 'feed@speil.dev',
  },
  {
    id: 3,
    href: 'https://github.com/LoxxyN',
    label: 'GitHub',
  },
]

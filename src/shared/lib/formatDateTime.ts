export const formatDateTime = (timestamp: number, locale: string) => {
  const localeMap: Record<string, string> = {
    ru: 'ru-RU',
    en: 'en-US',
  }

  const dateTimestamp = new Date(timestamp)
  const selectedLocale = localeMap[locale]

  const dateFormatter = new Intl.DateTimeFormat(selectedLocale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const timeFormatter = new Intl.DateTimeFormat(selectedLocale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const date = dateFormatter.format(dateTimestamp).replaceAll('/', '.')
  const time = timeFormatter.format(dateTimestamp)

  return `${date} | ${time}`
}

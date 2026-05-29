export const formatDateTime = (timestamp: number) => {
  const dateTimestamp = new Date(timestamp)
  const date = dateTimestamp.toLocaleDateString('ru-RU').replaceAll('/', '.')
  const time = dateTimestamp.toLocaleTimeString('ru-RU').replaceAll('/', '.').slice(0, 5)

  const formatedDateTime = `${date} | ${time}`
  return formatedDateTime
}

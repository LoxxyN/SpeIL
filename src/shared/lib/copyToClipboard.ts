export const copyToClipboard = (code: string) => {
  try {
    navigator.clipboard.writeText(code)
  } catch (error) {
    console.error(`Copy to clipboard error: ${error}`)
    throw new Error(`Copy to clipboard error: ${error}`)
  }
}

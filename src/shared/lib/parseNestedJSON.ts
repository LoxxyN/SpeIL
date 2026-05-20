export const parseNestedJSON = (obj) => {
  if (typeof obj === 'string') {
    try {
      return JSON.parse(obj)
    } catch (e) {
      console.error(e)
    }
  }

  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      obj[key] = parseNestedJSON(obj[key])
    }
  }

  return obj
}

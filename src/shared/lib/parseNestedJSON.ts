export const parseNestedJSON = <T = unknown>(value: unknown): T => {
  if (typeof value === 'string') {
    try {
      return parseNestedJSON<T>(JSON.parse(value) as unknown)
    } catch (error) {
      console.error(error)
      return value as T
    }
  }

  if (Array.isArray(value)) {
    return value.map((item) => parseNestedJSON(item)) as T
  }

  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, parseNestedJSON(nestedValue)])
    ) as T
  }

  return value as T
}

async function fetcher<T>(input: string, init?: RequestInit): Promise<T> {
  const url = new URL(input, "http://localhost:3001").toString()
  const res = await fetch(url, init)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export { fetcher }

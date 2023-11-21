class Fetcher {
  basePath: string

  constructor() {
    this.basePath = "http://localhost:3001"
  }

  private makeURL(path: string) {
    return new URL(path, this.basePath).toString()
  }

  private async call(input: string, init?: RequestInit) {
    const url = this.makeURL(input)
    const res = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
      }
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json()
  }

  get<T>(url: string): Promise<T> {
    return this.call(url, {
      method: "GET"
    })
  }

  post(url: string, data?: {
    body: Record<string, any>
  }) {
    return this.call(url, {
      method: "POST",
      body: JSON.stringify(data?.body || {})
    })
  }
}

const fetcher = new Fetcher()

export default fetcher

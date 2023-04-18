export async function fetchPosts() {
    try {
      const response = await fetch(`https://news-api.lublot.dev/api/posts`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

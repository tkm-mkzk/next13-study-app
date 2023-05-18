import { Article } from '@/types/article'
import { HotelSearchResult } from '@/types/hotel.d'

export const getHotels = async (query: string): Promise<HotelSearchResult> => {
  const appId = process.env.NEXT_PUBLIC_RAKUTEN_ID
  if (!appId) {
    throw new Error('Environment variable NEXT_PUBLIC_RAKUTEN_ID is not defined')
  }
  try {
    const response = await fetch(
      `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${query}&applicationId=${appId}`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = (await response.json()) as HotelSearchResult
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getArticles = async () => {
  const res = await fetch('http://localhost:3000/api/articles', {
    cache: 'no-store',
  })

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }

  const data = await res.json()
  return data.articles as Article[]
}

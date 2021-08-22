export interface IDrawerProps {
  drawerWidth: number
}

export type IComment = {
  id: string
  commentedAt: Date
  body: string
  likes: number
  retweets: number
}

export type ITweet = Omit<IComment, 'commentedAt'> & {
  tweetedAt: Date
  userId: string
  userName: string
  userHandle: string
  userAvatar: string
  comments: IComment[]
}

export type INewsItem = {
  source: { id: null | string; name: string }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
}

export type INews = {
  status: string
  totalResults: number
  articles: INewsItem[]
}

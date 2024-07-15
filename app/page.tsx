import MainPage from '@/components/main/pages/MainPage'
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const author = allAuthors.find((p) => p.slug === 'default') as Authors

  return <MainPage posts={posts} author={author} />
}

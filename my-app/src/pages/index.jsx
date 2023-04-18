import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Hero from '@/components/Hero/Hero';
import NewsList from '@/components/NewsList/NewsList';
import { fetchPosts } from '@/api/newsApi';


export default function Home() {

  const [posts, setPosts] = useState([])
  const [heroPost, setHeroPost] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPosts()
      setPosts(data)
      setHeroPost(data[Math.floor(Math.random() * data.length)])
    }
    fetchData()
  }, [])

  console.log(posts[1])

  return (
    <div className={styles.home}>
      <Hero post={heroPost} />
      <NewsList posts={posts} />
    </div>
  )
}

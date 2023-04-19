import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Hero from '@/components/Hero/Hero';
import NewsList from '@/components/NewsList/NewsList';
import axios from 'axios';


export default function Home() {

  const [posts, setPosts] = useState([])
  const [heroPost, setHeroPost] = useState(null)


  useEffect(() => {
    axios.get(`https://news-api.lublot.dev/api/posts`)
      .then((response) => {
        setPosts(response.data)
        setHeroPost(response.data[Math.floor(Math.random() * response.data.length)])
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  console.log(posts);

  return (
    <div className={styles.home}>
      <Hero post={heroPost} />
      <NewsList posts={posts} />
    </div>
  )
}

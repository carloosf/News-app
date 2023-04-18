import styles from '@/styles/Home.module.css'

import { useEffect, useState } from 'react'


export default function Home() {

  const [posts, setPosts] = useState([])
  const [HeroPost, setHeroPost] = useState(null)

  useEffect(() => {
    fetch(`https://news-api.lublot.dev/api/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10))
        setHeroPost(data[Math.floor(Math.random() * data.length)])
      })
      .catch(error => console.error(error))
  }, [])

  console.log(posts[1])

  return (
    <div>
      <hero>

        <h1>Indicação: </h1>
        {HeroPost && (
          <div className={styles.infoHero}>
            <div className={styles.heroImage}>
              <img src={HeroPost.coverImage} alt="" />
              <h2>{HeroPost.title}</h2>
              
            </div>
            <p>{HeroPost.description}</p>
            <p>{HeroPost.content.substring(0, 255)}
            </p>
          </div>
        )}
      </hero>

      <main className={styles.main}>
        <h1>Ultimas Noticias</h1>
        <ul className={styles.listNews}>
          {posts.map(post => (
            <li key={post.id} className={styles.cardNews}>
              <img src={post.coverImage} alt="" />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Escrito por: {post.author}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

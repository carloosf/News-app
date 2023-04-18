import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'


export default function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`https://news-api.lublot.dev/api/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, [])


  return (
    <div>
      <main className={styles.main}>
        <ol>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  )
}

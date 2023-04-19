import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero/Hero';
import NewsList from '@/components/NewsList/NewsList';
import axios from 'axios';
import Aside from '@/components/Aside/Aside';

export default function Home({ posts, heroPost, tags }) {

  return (
    <div className={styles.home}>
      <Hero post={heroPost} />
      <main className={styles.homeContent}>
        <NewsList posts={posts} tags={tags} />
        <Aside tags={tags} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://news-api.lublot.dev/api/posts');
  const post = response.data;
  const posts = post.slice(0, 20);
  const heroPost = posts[Math.floor(Math.random() * posts.length)];
  const tags = post.map((tag) => {
    return tag.tags;
  });



  return {
    props: {
      posts,
      heroPost,
      tags,
    },
    revalidate: 60 * 60 * 1,
  };
}

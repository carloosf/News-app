import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero/Hero';
import NewsList from '@/components/NewsList/NewsList';
import axios from 'axios';

export default function Home({ posts, heroPost }) {

  return (
    <div className={styles.home}>
      <Hero post={heroPost} />
      <NewsList posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://news-api.lublot.dev/api/posts');
  const posts = response.data;
  const heroPost = posts[Math.floor(Math.random() * posts.length)];

  return {
    props: {
      posts,
      heroPost,
    },
    revalidate: 60 * 60 * 1,
  };
}

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticleContent from '@/components/ArticleContent/ArticleContent'


export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`https://news-api.lublot.dev/api/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }

    fetchPost();
  }, [router.query.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ArticleContent article={post} />
    </div>
  );
}

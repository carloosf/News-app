import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticleContent from '@/components/ArticleContent/ArticleContent'

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`https://news-api.lublot.dev/api/posts/${router.query.id}`);
      const data = await res.json();
      const contentArr = data.content ? data.content.split('\n') : [];
      setContent(contentArr);
      setPost(data);
    }

    fetchPost();
  }, [router.query.id]);

  if (Object.keys(post).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ArticleContent article={post} content={content} />
    </div>
  );
}

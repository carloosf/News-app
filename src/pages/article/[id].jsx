import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticleContent from '@/components/ArticleContent/ArticleContent'
import axios from 'axios';


export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get(`https://news-api.lublot.dev/api/posts/${router.query.id}`)
      .then((response) => {
        setPost(response.data)
        const contentArr = response.data.content ? response.data.content.split('\n') : []
        setContent(contentArr)
      })
      .catch(error => {
        console.log(error);
      })
  }, [router.query.id])

  return (
    <div>
      <ArticleContent article={post} content={content} />
    </div>
  );
}

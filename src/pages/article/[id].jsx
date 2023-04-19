import ArticleContent from '@/components/ArticleContent/ArticleContent';
import axios from 'axios';

export default function Post({ post, content }) {
  return (
    <div>
      <ArticleContent article={post} content={content} />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch('https://news-api.lublot.dev/api/posts');
  const posts = await response.json();
  const paths = posts.map(post => ({ params: { id: post.id.toString() } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const response = await axios.get(`https://news-api.lublot.dev/api/posts/${id}`);
  const post = response.data;
  const content = post.content ? post.content.split('\n') : [];

  return {
    props: { post, content },
    revalidate: 3600,
  };
}

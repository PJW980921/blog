import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function List() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/post');
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  }, []);

  return (
    <div className="list-bg">
      {post.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`}>
            {' '}
            <h4>{item.title}</h4>
          </Link>
          <Link href={`/edit/${item._id}`}>📝 수정하기</Link>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

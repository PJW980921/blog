import { useEffect, useState } from 'react';
import React from 'react';

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
      {post.map((item) => (
        <div className="list-item" key={item}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

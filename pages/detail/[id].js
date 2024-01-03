import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Detail() {
  const [post, setPost] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/post');
      const data = await response.json();
      setPost(data);


    }
    fetchData();
  }, []);

  const postFilter = post.filter((item)=> router.query.id === item._id)

  return (
    <div>
      <h4>상세 페이지</h4>
    {
      postFilter.map((item)=>{
        return(
          <div>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        )
      })
      }
    
    </div>
  );
}

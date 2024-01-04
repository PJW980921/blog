import { useEffect, useState } from 'react';
import ListItem from './ListItem';

export default function List() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getList');
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  }, []);

  return (
    <div className="list-bg">
     <ListItem post={post}/>
    </div>
  );
}

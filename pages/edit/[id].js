import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Edit() {
  const [post, setPost] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getList');
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  }, []);
  const postFilter = post.filter((item) => router.query.id === item._id);

  return (
    <div>
      <h4>글 수정하기</h4>
      {postFilter.map((item) => {
        return (
          <div>
            <form action="/api/post/edit" method="POST">
              <input name="title" defaultValue={item.title} />
              <input name="content" defaultValue={item.content} />
              <input
                style={{ display: 'none' }}
                name="_id"
                defaultValue={item._id.toString()}
              />
              <button type="submit">수정</button>
            </form>
            <Link href={`/List`}>
              <button>취소</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

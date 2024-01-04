'use client'
import Link from 'next/link';

export default function ListItem({post}) {
  return (
    <div>
       {post.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`}>
            {' '}
            <h4>{item.title}</h4>
          </Link>
          <Link href={`/edit/${item._id}`}>📝 수정하기</Link>
          <span onClick={(e)=>{
            fetch('/api/post/delete',{
              method : 'DELETE',
              body : item._id,
            }).then((r)=>{
              if(r.status === 200){
                return r.json();
              }else{

              }
            }).then((success)=>{
              e.target.parentElement.style.opacity = 0;
              setTimeout(()=>{
                e.target.parentElement.style.display = 'none';
              },1000)
            }).catch((error)=>{

            })
          }}>🗑️ 삭제하기</span>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}


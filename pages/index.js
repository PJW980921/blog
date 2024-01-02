import {useEffect, useState} from "react";

export default function Page() {
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
 <div>
 <h1>Post</h1>
 {post.map((post, index) => (
 <div key={index}>
 <h2>{post.title}</h2>
 <p>{post.content}</p>
 </div>
 ))}
 </div>
 );
}
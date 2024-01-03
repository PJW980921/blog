import Link from "next/link";

export default function Header (){
  return (
    <>
    <header>
      <Link href={'/'}>Home</Link>
    </header>
    <nav>
      <ul>
        <Link href={'/List'}><li>글 목록</li></Link>
        <Link href={'/write'}><li>글 작성하기</li></Link>
      </ul>
    </nav>
    </>
  )
}
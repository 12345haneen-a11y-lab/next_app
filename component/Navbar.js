
import Link from "next/link"


 function Navbar() {
    return (
     <>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">posts</Link>
     </>
    )
  }
   export default Navbar
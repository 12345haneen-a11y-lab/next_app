

import Link from "next/link";
export default function Posts(props) {
    return (     
    <>
        <p>hello in our posts</p>

       <ul>
        <li style={{display:"flex"}}> 
        
        {props.posts.map(post=>(
            <Link href={`posts/${post.id}`} key={post.id}>
                {post.title}
                </Link>
        ))}
        
        </li>
       </ul>
    </>
    )
}
export async function getStaticProps(){
    /*fetcc api اللي انا عمالاه*/
        const req = await fetch("http://localhost:3000/api/posts")

        const data = await req.json();

        return{
            props:{
                posts: data
            }
        }
}


import Head from "next/head";
import Link from "next/link";

export default function About(props) {
    return (
    
      <>
      <Head>
        <title>About com</title>
      <meta name="description "content="blabla" />   
      </Head>
      <div>
      <h1>
        hello in our about
      </h1>
     </div>

    

      </>
    )
  }
  export async function getStaticProps(){
    const req = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await req.json();

    return{
        props:{
            posts: data
        }
    }
}
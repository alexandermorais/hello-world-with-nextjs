// import { Router } from "next/router"

function Post({post}) {

    // const router = useRouter()

    // if(router.isFallBack){
    //     return <div>Loading...</div>
    // }

    return(
        <>
        <h2>
            {post.id} {post.title}
        </h2>
        <p>{post.body}</p>
        </>
    )

}

export default Post

// Necesitamos usar getStaticPaths cuando usamos variables dinámicas.
export async function getStaticPaths() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        // paths: [
        //     {
        //         params: {postId: '1'} // Ya que hicimos un slide(0, 3), entonces SSG con tres también.
        //     },
        //     {
        //         params: {postId: '2'}
        //     }
        //     ,
        //     {
        //         params: {postId: '3'}
        //     }
        // ],
        paths,
        fallback: false,
    }

}

export async function getStaticProps(context) {
    
    const {params} = context
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    )
    const data = await response.json()

    return {
        props: {
            post:data,
        }
    }

}

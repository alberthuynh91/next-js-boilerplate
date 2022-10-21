import { useRouter } from 'next/router'
import { server } from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <>
        {/* title of the tab and content meta tag. this is good for SEO */}
        <Meta title={article.title} description={article.excerpt} /> 
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go back</Link>
        </>
    )
}

// fetch data at time of request
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// commented this out becuase we are putting data from our own api instead of jsonplaceholder
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// commented this out becuase we are putting data from our own api instead of jsonplaceholder
// export const getStaticPaths = async () => {
//     // fetch all the articles from API
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map((article) => {
//         return article.id
//     })

//     // construct the paths object needed for nextjs
//     // ex: { params: { id: '1', id: '2' } }
//     const paths = ids.map((id) => {
//         return { params: { id: id.toString() } }
//     })

//     return {
//         paths,
//         fallback: false, // if we go to a path that doesnt exist in the data we return a 404 page
//     }
// }


// fetch from our api we created instead
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    // fetch all the articles from API
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => {
        return article.id
    })

    // construct the paths object needed for nextjs
    // ex: { params: { id: '1', id: '2' } }
    const paths = ids.map((id) => {
        return { params: { id: id.toString() } }
    })

    return {
        paths,
        fallback: false, // if we go to a path that doesnt exist in the data we return a 404 page
    }
}

export default article

// what did we do here?
// we created a entire static website from all the data from the api above
// try going to /article/20 (this page is generate by the code above)
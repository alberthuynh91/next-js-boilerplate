
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'
import { server } from '../config'

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <ArticleList articles={articles} />
    </div>
  )
}

// fetches at build time
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }

// instead, fetch from the next js api we built
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles,
    }
  }
}
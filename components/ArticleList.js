import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => {
                return <ArticleItem article={article} key={article.id}/>
            })}
        </div>
    )
}

export default ArticleList
import { articles } from '../../../data'

export default function handler(req, res) {
    // serving articles from static js file. hit localhost:3000/api/articles to see json data
    res.status(200).json(articles)
}

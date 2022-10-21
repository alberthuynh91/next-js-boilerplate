import { articles } from '../../../data'

export default function handler({ query: { id }}, res) {
    // get the id from query params and use it to find the article in the static js data file
    const filtered = articles.filter((article) => {
        return article.id === id
    })
    
    if (filtered.length > 0) {
    // serving article id from static js file. hit localhost:3000/api/articles/[id] to see json data
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Article with the id of ${id} is not found.`})
    }
}

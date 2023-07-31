// Write your JS code here
import './index.css'
const BlogItem=props=>{
    const {blogDetails}=props
    const {title,description,publishedDate}=blogDetails
    return(
        <li className="blog-item-container">
        <div className="title">
        <h1 className="post">{title}</h1>
        <p className="date">{publishedDate}</p>
        </div>
        <p className="desc">{description}</p>
        <hr/>
        </li>
    )
}

export default BlogItem

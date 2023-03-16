###### 🌵 React_Tutorial_Part1

## 버튼을 클릭했을때 해당 글을 삭제해보자  

[ BlogList.js ]
``` javascript
const BlogList = ({blogs, title, handleDelete}) => {
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      { blogs.map((blog)=>(
          <div className="blog-preview" key={blog.id}> 
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          <button onClick={()=> handleDelete(blog.id)}>Remove article</button>
          </div>
        ))}
    </div>
   ); }
export default BlogList;
```   
[ Home.js ]

``` javascript 
import { useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState([
  {title : 'my article 1', body :'1 lorem ipsum...', author:'Hong', id:1},
  {title : 'my article 2', body :'2 lorem ipsum...', author:'Kim' , id:2},
  {title : 'my article 3', body :'3 lorem ipsum...', author:'Lee' , id:3}
 ])

const handleDelete = (id)=>{
  const newBlogs = blogs.filter((blog)=> blog.id !==id );
  setBlog(newBlogs)
}
 return ( 
  <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
  </div>
 );
}
export default Home;

```  


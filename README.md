###### 🌵 React_Tutorial_Part1


## Route 파라미터 -useParams 

The useParams hook은 ``` <Route path>```에 매치되는 현재의 url로부터 다이나믹한 파라미터 오브젝트를 리턴하며 이 오브젝트는  key/value 쌍으로 되어 있습니다.   

```javascript

import { Link } from 'react-router-dom';
const BlogList = ({blogs, title}) => {
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      { blogs.map((blog)=>(
          <div className="blog-preview" key={blog.id}> 
            <Link to={`/blogs/${blog.id}`}> 
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
    </div>
   ); }
export default BlogList;

```  


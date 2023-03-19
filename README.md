###### 🌵 React_Tutorial_Part1


## Route 파라미터 -useParams 

The useParams hook은 ``` <Route path>```에 매치되는 현재의 url로부터 다이나믹한 파라미터 오브젝트를 리턴하며 이 오브젝트는  key/value 쌍으로 되어 있습니다.   

브라우저의 url에     
'http://localhost:3000/'    
'http://localhost:3000/create'   
을 적듯이 
'http://localhost:3000/여기에어떤경로' 를 적었을때 그곳으로 이동하도록 할 것이다.  그럼 이동할 페이지가 있어야 하니까 BlogsDetails.js라는 파일을 새로 만들도록 합시다.   

그리고 이 페이지에 useParams를 사용해보도록 합시다.   
``` javascript
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams()
  return ( 
    <div className="blog-details">
      <h2>Blog-Details -{id} </h2>

    </div>
   );
}
export default BlogDetails;

```  












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


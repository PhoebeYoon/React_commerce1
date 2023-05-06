###### 🌵 React_Tutorial_Part1


## Route 파라미터 -useParams 

The useParams hook은 ``` <Route path>```에 매치되는 현재의 url로부터 다이나믹한 파라미터 오브젝트를 리턴하며 이 오브젝트는  key/value 쌍으로 되어 있습니다.   
Route에서 Key를 지정해주고, 해당 Key에 Value를 넣어 url를 완성합니다. 그럼 useParams를 통해 key/value 객체형태로 반환됩니다.


브라우저의 url에     
'http://localhost:3000/'는 이미 Home으로   
'http://localhost:3000/create'는 create페이지로 이동하도록 만들었습니다. 
이제 새로운 url이 아래처럼 입력되면 
'http://localhost:3000/여기에어떤경로'를 그곳으로 이동하도록 할 것이다.  그럼 이동할 페이지가 있어야 하니까 BlogsDetails.js라는 파일을 새로 만들도록 합시다.   

[BlogsDetails.js].  
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
그리고 Route를 사용하는 파일은?  App.js에 그 내용이 있으니 그 파일에 추가해보도록 하겠습니다.  

[ App.js ]  
```javascript 
<Routes>
   <Route path="/"  exact={true}  element={<Home /> } ></Route>
   <Route path="/create" exact={true}  element={<Create /> } ></Route>  
   <Route path="/blogs/:id" exact={true}  element={<BlogsDetails /> } ></Route>   
</Routes>
```    
'blogs/:id' 에서 id값이 입력되면 그 id값을 전달받고 BlogsDetails.js로 이동해서 id를 보여주도록 해 보겠습니다.  

[ BlogsDetails.js ]   

```javascript
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


[BlosList.js]
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
다은 레슨에서 계속 이어갑니다.

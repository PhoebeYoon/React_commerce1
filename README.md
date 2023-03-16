###### 🌵 React_Tutorial_Part1

## 버튼을 클릭했을때 해당 글을 삭제해보자   

이번 수업은 함수를 매개변수로 전달하는 것을 다룰 예정입니다. 이전 수업인 'lesson06-click'를 한번 보시고 오시면 좋을듯합니다.   
[ BlogList.js ] 에 
``` javascript 
// return문 위에 삽입하세요 
const handleDelete=()=>{
  alert('okay')
 } 
 ...
<button onClick={handleDelete()}>Delete</button> 
```  
이렇게하면 웹페이지를 로드하자마자 alert문이 실행됩니다. 클릭이벤트에 의해 alert문을 실행하려면   
``` <button onClick={()=>{ handleDelete()}}>Delete</button>  ```   
이와 같이 해야합니다 ( lesson06의 내용입니다 ) 









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


###### 🌵 React_Tutorial_Part1

## 버튼을 클릭했을때 해당 글을 삭제해보자    
아래는 완성된 코드입니다.   


[ BlogList.js ]
``` javascript
const BlogList = ({blogs, title, handleRemove}) => { 
  // console.log(handleRemove)
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      { blogs.map((blog)=>(
          <div className="blog-preview" key={blog.id}> 
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          <button onClick={()=> handleRemove(blog.id)}>Remove article</button>
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
      <BlogList blogs={blogs} title="All Blogs!" handleRemove={handleDelete}/>
  </div>
 );
}
export default Home;

```  

## 완성되기 전 이런것들을 시도해보면 완성된 코드가 이해됩니다. 

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
이와 같이 해야합니다 ( lesson06의 내용입니다 )  이 내용에서 클릭이벤트가 일어난 개별 blog( blogs 안에 개별 blog)를 삭제하려면 각 blog의 유일한 key값을 넘겨서 해당하는 것을 blogs에서 찾아서 삭제해야 합니다. 그래서  
``` javascript
<button onClick={ ()=>{ handleDelete(blog.id, blog)}}>Delete</button> 
```    
handleDelete()에 id와 blog내용을 매개변수로 넘겨서 해당 내용을 접근할 수는 있습니다. 
``` javascript
const handleDelete=(_id,_blog)=>{
   console.log(_blog, _id)
 }
```
그런데 전체 blogs 안에서 해당 blog를 제외한 내용을 다시 화면에 출력까지 하고자 한다면 blogs을 접근해야하고 blog의 id로 찾아야 하고 이것을 제외하고 나머지 내용을 blogs에 다시 입력해야 등등의 문제가 복잡합니다. 그래서 문제를 접근하는 방식을 바꿔서 생각해보면 간단하게 해결됩니다.  일단 blog를 출력하는 내용이 BlogList.js에 있다고 handleDelete()함수를 이곳에 만들어줄 필요는 없습니다.  
이전 내용에서 blog.author==='Kim'인 경우만 출력했던거 기억나시죠 이런식으로 BlogList.js에서는 클릭이벤트가 일어난 id값을 넘겨주고 Home.js에서 handleDelete 이벤트를 정의하고 여기에서 useState로 새로운 blogs의 내용을 지정해주는 것이 휠씬 간단하게 해결할 수 있습니다.  

``` javascript 
const handleDelete = (id)=>{
  const newBlogs = blogs.filter((blog)=> blog.id !==id );
  setBlog(newBlogs)
}
```
에서는 filter()함수로 전달된 id를 제외한 내용을 newBlogs로 집어넣고 이것을 setBlog()를 이용하여 새로운 blogs를 만드는 것입니다. 그리고 ``` <BlogList>``` 태그에서 'handleDelete'함수를 매개변수로 전달합니다.    
BlogList.js파일에 콘솔로 ```  console.log(title, handleDelete)  ``` 를 출력해보면 Home.js에서 정의한 함수내용이 출력됩니다.  
  


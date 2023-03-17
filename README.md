###### 🌵 React_Tutorial_Part1

## 데이타를 json으로 만들어 사용해보자

루트 디렉토리에 :file_folder:data :file_folder:db.json 파일을 생성합니다. 
그리고 첨부된 내용을 넣어줍니다. 

새로운 터미널창을 열고   
맥사용자는 , 
``` >sudo npx json-server --watch data/db.json --port 8000 ```   
윈도우 사용자는 앞의 'sudo'를 빼고 실행합니다.  그럼    
```   
Resources
http://localhost:8000/blogs
```   
터미널창에 이런 것이 보일것이다. 클릭해 보면 json파일의 내용이 보일것이다.    
db.json 를 다시 실행해야 할때는  ``` >sudo npx json-server --watch data/db.json --port 8000 ```  


잠시 여기서 endpoints를 보겠습니다.   
```  
/blogs        GET       Fetch all blogs
/blogs/{id}   GET       Fetch a single blogs
/blogs        POST      Add a new blog
/blogs/{id}   POST      Delete a blog
```   

Home.js파일을 다운로드 받아서  

```  
useEffect(()=>{
  fetch(' http://localhost:8000/blogs').then(res => {
    return res.json()
  }).then(data =>{ 
    //console.log(data)
    setBlog(data)
  })
},[]);
```   
위와 같이 변경해줍니다 결과을 확인하세요   

이제 좀더 진행보겠습니다. 
[ Home.js ] 
``` javascript 
import { useEffect, useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState(null) 

 useEffect(()=>{
  fetch('http://localhost:8000/blogs').then(res => {
    return res.json()
  }).then(data =>{ 
    //console.log(data)
    setBlog(data)
  })
},[]);

 return ( 
  <div className="home">
    { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    
  </div>
 );
}
export default Home;
```  

[ BlogList.js ]

``` javascript
const BlogList = ({blogs, title}) => {
 
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      { blogs.map((blog)=>(
          <div className="blog-preview" key={blog.id}> 
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>{blog.author}</p>
          </div>
        ))}
    </div>
   ); }
export default BlogList;
```    

변경해줍니다.   
Home.js 에서 ```  { blogs && <BlogList blogs={blogs} title="All Blogs!" /> } ``` 에 대해 잠시 살펴보겠습니다.   
```blog && ```들어간 이유는  json 파일에서 내용을 읽어와 blogs에 넣어주기 전에 먼제 BlogList.js 파일의 map()이 실행이 됩니다. 그래서 에러를 발생합니다.   
이것을 방지하기 위해 && 연산자를 넣어서 blogs의 내용이 참이 될때까지 잠시 기다리게 한 것입니다. 
 


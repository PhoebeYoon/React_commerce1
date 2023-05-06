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
:pencil: localhost로 해서 내용을 불러오질 못한다면 'http://127.0.0.1'을 바꿔줍니다.   

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
```blog && ```들어간 이유는  json 파일에서 내용을 읽어와 blogs에 넣어주기 전에 먼저 BlogList.js 파일의 map()이 실행이 됩니다. 그래서 에러를 발생합니다.   
이것을 방지하기 위해 && 연산자를 넣어서 blogs의 내용이 참이 될때까지 잠시 기다리게 한 것입니다. 

결과를 확인해 주세요. 

그럼 이번에는 바로 위의 내용에서 json 파일을 읽어오는 동안 'Loading...' 메시지를 내보내도록 변경해 보겠습니다. 
이를 위해 useState()를 사용해서 파일을 불려오기전에는 false 로, 파일을 불러와서 blogs에 내용을 넣은후에는 true로 바꿈으로 제어해 보도록 하겠습니다.   
[ Home.js ]   
``` javascript
import { useEffect, useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState(null);
 const [isPending, setIsPending] = useState(true);

 useEffect(()=>{
  fetch('http://localhost:8000/blogs').then(res => {
    return res.json()
  }).then(data =>{ 
    setBlog(data);
    setIsPending(false);
  })
},[]);

 return ( 
  <div className="home">
    {isPending && <div>Loading... </div>}
    { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    
  </div>
 );
}
export default Home;

```    
Loading... 이 빨리 지나가버리니 못 볼수도 있다는 점 참고하세요.    

이번에는 setTimeout()함수를 이용하여 Loading... 이 1초동안 유지된후에 데이타들이 fetch 되도록 바꿔보겠습니다. 

useEffect()를 아래와 같이 변경해줍니다 

``` javascript   
useEffect(()=>{
   setTimeout( ()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json()
    }).then(data =>{ 
        setBlog(data);
        setIsPending(false);
    })
    } , 1000);
},[]);
```

:pencil: 완성된 Home.js 파일은 :file_folder:after 안에 있는 Home.js 입니다 


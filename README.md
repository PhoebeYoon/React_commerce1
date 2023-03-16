###### 🌵 React_Tutorial_Part1

## 본격적으로 blog를 만들어보도록 하겠습니다.
이번 수업을 하기위해서는 javascript의 map()함수에 대한 이해가 있어야 합니다.  

이전 수업에 이어서 진행됩니다. 시작하는 코드는, 
[ Home.js ]
``` javascript
import { useState } from "react"; 
const Home = () => {
 const [blogs, setBlog] = useState([
  {title : 'my article 1', body :'1 lorem ipsum...', author:'Hong', id:1},
  {title : 'my article 2', body :'2 lorem ipsum...', author:'Kim' , id:2},
  {title : 'my article 3', body :'3 lorem ipsum...', author:'Lee' , id:3}
 ])
  return ( 
    <div className="home">
      {
      blogs.map(() => console.log( ' +  ,'))
      }
    </div>
   );
}
export default Home;

```   
콘솔창에 '+'기호가 3개 찍히는지 확인하세요.  

이제 blogs에 들어 있는 항목을 하나씩 가져와서 title, body, author 순으로 출력해 보겠습니다.  
blogs는 3개의 데이터를 모두 갖고 있는 변수이니 하나씩 가져오려면 따로 변수를 하나를 지정해야 겠지요 그래서 blog라고 하겠습니다. 그래서 코드는 아래와 같습니다.  return문만 바꿔주세요 

``` javascript
return ( 
    <div className="home">
      {
      blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}> 
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
        </div>
      ))
      }
    </div>
   );
```   

index.css의 내용을 추가해 주세요  
``` css
/*  blogs  */
.blog-preview {
  padding: 10px 16px;
  margin:20px 0;
  border-bottom:1px solid #fafafa;
}
.blog-preview:hover { 
  box-shadow: 1px 3px 5px rgba(0,0,0, 0.1) ;}
  .blog-preview h2 {
    font-size: 20px;
    color:#f1356d;
    margin-bottom: 8px;
  }
```    
결과화면은 아래와 같은지 확인하세요  

<img width="268" alt="스크린샷 2023-03-16 오전 11 39 00" src="https://user-images.githubusercontent.com/48478079/225496181-1b5157bb-967e-4a5f-a8b0-c577f825130b.png">











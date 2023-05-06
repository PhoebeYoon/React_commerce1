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
     { blogs.map(() => console.log( ' +  ,'))}
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


## blog list를 만들어보자   
위의 내용중에서 blogs의 내용을 가져와 map()으로 반복하는것을 새로운 블로그 내용이 생길때마다 반복해야 하므로 이런 내용을 하나의 컴포넌트로 만들어서 관리해 보도록 하겠습니다.  

1. :file_folder:src :file_folder: BlogList.js 생성, sfc 엔터 (기본태그들 입력) -> const BlogList로 지정해 줍니다 
2. 기본태그 안에 return 안에 ```<div className="blog-list"> </div>  ``` 생성한다 그리고 
3. Home.js파일안의 ``` blogs.map ~~  ``` 오려두기 하여 BlogList.js안의 .blog-list 안에 붙여넣기 합니다 
4. Home.js파일에는 아까 오려두기 했던 같은 곳에 ``` <BlogList />  ``` 를 입력하면 같은 파일 위쪽에 ``` import BlogList from "./BlogList"; ``` 이 자동으로 입력됩니다. 
5. 여기까지 하면 에러가 발생합니다. 왜냐하면 blogs의 내용은 Home.js에 있는데 BlogList.js 파일에는 blogs의 내용이 없기 때문입니다. blogs의 내용을 BlogList.js에 전달해줘야 합니다.
6. 그래서 여기서 그 유명한 props를 사용하면 되는 것입니다. Home.js 파일의 ``` <BlogList props="{blogs}"/> ``` 바꿔줍니다. 
7. BlogList.js파일에서 ``` const BlogList() => { ```   에 Home.js에서 전해준 인자를 받아야 하니까 괄호안에 props라는 인자를 넣어줍니다.  blogs.map()의 내용은 잠시 주석처리하고 콘솔창에 출력해보십시오. blogs의 내용이 출력됩니다. 
8. 콘솔창에  내용일 출력되었다고 props.author 나 props.title 뭐 이렇게 해주면 안됩니다. 왜냐하면 props는 blogs의 전체내용을 가지고 있는 것이고 title은 blogs의 개별 데이터의 속성이니까요
9. 좀 헷갈리기 쉬운 것을 콘솔창에서 확인하도록 하겠습니다. 아래의 코드를 실행시켜보세요   
``` javascript   
const BlogList = (props) => {
  const blogs = props.props;
  console.log('props --> ' ,props)
  console.log('props blogs -->' , blogs)
  return (  
    <div className="blog-list">
      {
        blogs.map((blog)=> (
          <p key={blog.id} > { blog.title }</p>
        ))
    }
    </div>
  );
}
export default BlogList;

```   
이것은 Home.js에서 전달받은 내용을 'props'라는 인자로 받아서 바로 이 props에서 내용을 추출하는 것과 그렇지 않은것을 비교한 것입니다.  
위의 문장에  
``` const blogs = props.blogs; ``` 이 있는데, 언뜻보면 Home.js에서 blogs을 보냈으니 그냥 props.title 뭐 이런식으로 사용하면 안되나 싶지만 그렇게 하면 데이터를 추출할 수 없습니다. 그래서 이 문장을 사용하는 것입니다.  
<img width="498" alt="스크린샷 2023-03-16 오후 1 04 15" src="https://user-images.githubusercontent.com/48478079/225512294-2f1eeddd-e3ee-4cc7-8580-1228db78434b.png">

출력결과입니다.   
이제 코드를 완성해보도록 하겠습니다.   
``` javascript 
const BlogList = (props) => {
  const blogs = props.props;
  console.log(blogs)
  return ( 
    <div className="blog-list">
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
## porps 더 알아보기
[ Home.js ]
```  <BlogList blogs={blogs} title="All Blogs"/>  ``` 를 추가합니다. 그리고   
[ BlogList.js ]  
console.log(props.title)를 추가합니다. 이때 ``` const BlogList = (props) => { ``` 에 내용을 추가할 필요는 없습니다.  
콘솔창에 'All Blogs' 가 출력됩니다. 확인이 되었다면 아래처럼 변경한 후에 결과를 확인해주세요    
``` 
    <div className="blog-list">
      <h2>{props.title}</h2>
```

실습했던 내용 중에서 BlogList.js에서 전달받는 인자를 이렇게 변경해 보겠습니다.  
``` javascript
const BlogList = ({blogs, title}) => {
  // const blogs = props.blogs;
  // console.log(props.title)
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
화면이 제대로 나오는지 확인합니다.   
<img width="280" alt="스크린샷 2023-03-16 오후 2 20 11" src="https://user-images.githubusercontent.com/48478079/225522103-42cbbd97-cfc1-418d-a6d1-2f542b83b678.png">

## BlogList태그를 여러개 사용해보기
[ Home.js ]   

이번에는 '<BlogList>' 태그를 여러개 사용해보면서 조건을 주다면 어떻게 할까?   
blog의 author가 'Kim' 인것만 출력하고자 한다면,   
``` javascript 
   <BlogList blogs={blogs} title="All Blogs!"/>
   <BlogList blogs={blogs.filter((blog)=> blog.author ==='Kim')} title="Kim's Blogs"/>
 ```   
 filter()함수를 사용해서 해결하면 된다. 혹시 이렇게  사용하면 작동하지 않습니다   
``` <BlogList blogs={blogs.blog.author =='Kim'} title="Nobody's blogs"/> ``` 
 



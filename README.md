###### 🌵 React_Tutorial_Part1

## BlogsDetails.js 에 내용을 추가해보자. 

현재의 BlogsDetails.js파일을 보면 url에서 주어진 id값이 출력되도록 하고 있습니다. 이제 id값을 알았으니 해당 id값의 내용과 author를 함께 출력해보도록 하겠습니다.  

우리가 알고 있는 id는 url에서 넘겨받은 것입니다. 그런데 해당 자료는 db.json 에 있습니다. 그러니 넘겨받은 url의 id를 db.json파일의 id 값과 매치시켜서 시키면 됩니다.  useFetch()를 이용해서 이를 구현할 수 있습니다. 
```   
const { error,isPendind,data:blog} = useFectch("http://localhost:8000/blogs/"+id);
```
그리고 이 내용을 콘솔창에 출력해보면 해당 내용들이 나옵니다. 그런데 실습할때 내용이 보여야 하는 페이지는 BlogsDetails 파일이니 Home에서 출력된 리스트중에 하나를 선택해야만 하겠지요? 
그리고 아래와 같이 변경해 주면 됩니다.   

[BlogsDetails.js]   
``` javascript
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { error,isPending ,data:blog} = useFetch("http://localhost:8000/blogs/"+id);
  return ( 
    <div className="blog-details">
      <h2>Blog-Details -{id} </h2>
      { isPendind && <div>Loadig ... </div>} 
      { error && <div> error</div>} 
      {blog  && ( <article>  
        <h2>{blog.title}</h2> 
        <div>{blog.body}</div>
      </article>)}
    </div>
   );
}
export default BlogDetails;  
```      
확인을 위해 주소창에 ```localhost:3000/blogs/1 ``` 이런식으로 줍니다. 그러면 blogs 내용 중 해당 id에 해당하는 것만 화면에 출력됩니다. 아무 경로나 주는 것이 아니라 아까 BlogList에서 경로 지정을 /blogs/id 로 했기 때문입니다.  


출력이 제대로 되었다면 css를 조금 추가해 보도록 하겠습니다. 

[index.css] 에 추가하기  
``` css
  .blog-details h2 {
    font-size: 20px;
    color:#f1356d;
    margin-bottom: 10px;
  }
  .blog-details div {
    margin:20px 0;

  }

```



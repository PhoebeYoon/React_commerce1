###### 🌵 React_Tutorial_Part1


componentDidMount() 메서드를 사용하면 구성 요소가 DOM(Document Object Model)에 이미 배치되어 있을 때 React 코드를 실행할 수 있습니다. 이 방법은 React Life-cycle의 Mounting 단계, 즉 구성 요소가 렌더링된 후에 호출됩니다.
componentDidMount()는 첫 번째 렌더() 수명 주기 이후 React 구성 요소가 마운트된 직후에 호출되는 후크입니다

## React hook를 이용한 DELETE 요청 

React가 fetch를 이용하여 Delete요청을 보내면 , 이전버전과는 다르게 이 useEffect hook가 componentDidMount lifecycle method를 대치하여 컴포넌트가 로드될때 http delete 요청을 만듭니다.   
useEffect hook의 2번째 매개변수는 hook가 실행되는 시기를 결정하는 종속성 배열입니다. 빈배열을 pass되면 클래스 컴포넌트안의 componentDidMount lifecyle method 메서드처럼 처음 로드될때 한번 실행됩니다.  

이제, 
개별적으로 내용을 보여주는 BlogsDetails에 버튼을 추가하여 삭제할 수 있도록 만들겠습니다.  
내용을 삭제하면 이게 db.json에 반영되고 Home으로 돌아가게 하겠습니다.  
fetch함수에서 메서드는 'DELETE' 입니다.   
기억하실 것은 전에 db에 있는 id값으로 접근가능했던것을 기억하시죠. 그래서 아래와 같이 변경해주면 됩니다.  
[BlogDetails.js] 


``` javascript
import { useParams } from "react-router-dom";
import useFectch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
const { id } = useParams();
const { error,isPendind,data:blog} = useFectch("http://localhost:8000/blogs/"+id);
const history = useNavigate();

const handleClick=()=>{
  fetch('http://localhost:8000/blogs/'+blog.id,{
        method:"DELETE"}).then(()=>{
        history('/')
    })
}
  return ( 
    <div className="blog-details">
      <h2>Blog-Details -{id} </h2>
      { isPendind && <div>Loadig ... </div>} 
      { error && <div> error</div>} 
      {blog  && ( 
      <article>  
        <h2>{blog.title}</h2> 
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>)}
    </div>
   );
}
export default BlogDetails
```   





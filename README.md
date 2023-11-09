###### 🌵 React_Tutorial_Part1

## 폼을 완성해보자   

내용을 입력한 후에 submit를 하기 전에 아래 내용을 먼저 보겠습니다  
``` 
 const handleSubmit= (e)=>{  
    e.preventDefault();
    console.log('보내기')
  }

 <form action="" onSubmit={handleSubmit}>
```    
e.preventDefault()은 button을 클릭하면 폼이 리플레시되어서 사라지는 것을 방지하기 위해 넣었습니다.  
이제 이 내용이 db.json에 추가되어야 합니다.  

그리고 아래와 같이 내용을 변경해줍니다. 
``` javascript
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setPending] = useState(false);
  const handleSubmit= (e)=>{  
    e.preventDefault();
    const blog = { title, body, author};
    console.log(blog)
    fetch("http://localhost:8000/blogs",{ 
      method:'POST',
      headers : { 'Content-Type':"application/json"},
      body : JSON.stringify(blog)
    }).then( ()=>{
      console.log('new');
      setPending(true)
    })
  }
  return (  
    <div className="create">
      <h2>Add a new Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" 
          required
          value={title}
          onChange={ (e)=>{ setTitle(e.target.value)} } />
        <label> Blog body: </label>
        <textarea  required 
          value={body}
          onChange={(e)=> { setBody(e.target.value)} } >
        </textarea>
        <label> Blog author :</label>
        <select value={author} 
          onChange={(e)=>{setAuthor(e.target.value)}}>
          <option value="">선택하세요 </option>
          <option value="Kim">Kim</option>
          <option value="Park">Park</option>
          <option value="Lee">Lee</option>
        </select>
       { !isPending &&  <button> Add Blog</button> }
       { isPending &&  <button disabled> ... Add Blog ...</button>}

        <p>title : {title}</p>
        <p>body : {body}</p>
        <p>author : {author}</p>
      </form>
    </div>
  );
}

export default Create;

``` 

## useNavigate 사용하기 (useHistory 대신 )

useNavigate는 리액트에서 url 주소를 변경할때 사용하는 hook 입니다. url이 변경되면 url주소와 일치하는 Route컴포넌트와 매치시켜 렌더링을 하지만 리액트에서는 url의 변경없이 내부 컴포넌트의 변경만으로도 화면을 바꿀 수 있습니다. 
우리는 위의 실습내용에 추가하여 폼을 완성한 후 submit를 한뒤에 우리의 페이지는 Home으로 돌아가길 원합니다. 이때 useNavigate를 사용하면 되는데 버전이 업데이트되면서 useHistory대신 useNavigate를 사용합니다.   

``` 
import { useNavigate } from 'react-router-dom';
const history = useNavigate();  
fetch().then(()=>{  history('/create') })
``` 
를 추가합니다. 여기서  history('/')로 바꿔주면 Home으로 나옵니다.
완성된 코드는 다음과 같습니다.  


``` javascript 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setPending] = useState(false);
  const history = useNavigate();

  const handleSubmit= (e)=>{  
    e.preventDefault();
    const blog = { title, body, author};

    fetch("http://localhost:8000/blogs",{ 
      method:'POST',
      headers : { 'Content-Type':"application/json"},
      body : JSON.stringify(blog)
    }).then( ()=>{
      console.log("Added new blog")
      setPending(false);
      history('/create')  <-- 폼태그에서 내용을 삽입한 후 Submit 를 시켜도 브라우저화면은 /create 페이지에 머물러 있지만
                              만약  history('/') 이라고 한다면 Submit 로 브라우저 화면은 Home 화면으로 자동이동한다 
    })
  }

  return (  
    <div className="create">
      <h2>Add a new Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" 
          required
          value={title}
          onChange={ (e)=>{ setTitle(e.target.value)} } />
        <label> Blog body: </label>
        <textarea  required 
          value={body}
          onChange={(e)=> { setBody(e.target.value)} } >
        </textarea>
        <label> Blog author :</label>
        <select value={author} 
          onChange={(e)=>{setAuthor(e.target.value)}}>
          <option value="">선택하세요 </option>
          <option value="Kim">Kim</option>
          <option value="Park">Park</option>
          <option value="Lee">Lee</option>
        </select>
       { !isPending &&  <button> Add Blog</button> }
       { isPending &&  <button disabled> ... Add Blog ...</button>}
      </form>
    </div>
  );
}
export default Create;

```     
입력한 내용이 추가되는지 확인하시고, history(/create)를 history('/')로 바꿔서도 작동되는지 확인하세요  

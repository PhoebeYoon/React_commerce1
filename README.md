###### 🌵 React_Tutorial_Part1

## 폼을 완성해보자   

내용을 입력한 후에 submit를 하기 전에 아래 내용을 실습해봅시다. 
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

``` 


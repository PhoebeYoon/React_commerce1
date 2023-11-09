###### 🌵 React_Tutorial_Part1


[Create.js] 파일안의 return문안에 다음의 내용을 삽입하세요 (부분적인 내용입니다. 삽입시 주의하시고  
 jsx 문법에 따르면 닫는태그가 없는 태그에도 태그를 닫아야 한다는것 잊지마세요)

``` javascript
import { useState } from "react";

return (  
<div className="create">
      <h2>Add a new Blog</h2>
      <form>
       <label>Blog Title</label>
       <input type="text"  required />
       <label>Blog body:</label>
       <textarea  required > </textarea>
       <label>Blog author :</label>
       <select>
       <option value="">선택하세요 </option>
          <option value="Kim">Kim</option>
          <option value="Park">Park</option>
          <option value="Lee">Lee</option>
       </select>
        <button> Add Blog</button>
      </form>
    </div>
  );
``` 

이제  form 태그에 입력된 내용을 다음과 같이 넣기 위해   useState()문을 사용하겠습니다. 
```  const [title, setTitle] = useState('hello'); ``` 은 return 문위에 입력하고  ```
<input value={title} >``` 를 삽입하면 화면에 input태그안에 hello가 출력되어 있습니다. 그러나 이 상태에서 변경되지 않기 때문에 input태그안에 사용자가 적은 내용이 들어가게 하기 위해 onChange 메서드를 삽입해 주도록 하겠습니다.  
``` 
<input type="text" 
          required
          value={title}
          onChange={ (e)=>{ setTitle(e.target.value)} }
        />
```   
이와 같이 변경해 주고 내용을 확인하기 위해 ``` </form> ``` 안쪽에 
```  <p>title : {title}</p> ``` 를 넣어줍니다. 이제 실행시켜서 input에 내용을 넣고 출력되는지 확인합니다.    

여기까지 이해되셨나요? 그럼 더 진행해 보도록 하겠습니다.   
위의 내용이 이해가 되셨다면 아래의  완성된 코드도 하실 수 있을것입니다.  

``` javascript
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('')
  return (  
    <div className="create">
      <h2>Add a new Blog</h2>
      <form action="">
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
        <button> Add Blog</button>

        <p>title : {title}</p>
        <p>body : {body}</p>
        <p>author : {author}</p>
      </form>
    </div>
  );
}
export default Create;

```
###  index.css form 스타일삽입
```CSS

/* create 에 들어갈 스타일 , index.css 에 추가 */
.create {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
.create label {
  text-align: left;
  display: block;
}
.create h2 {
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 30px;
}
.create input, .create textarea, .create select {
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
}
.create button {
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

```






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
      history('/')
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
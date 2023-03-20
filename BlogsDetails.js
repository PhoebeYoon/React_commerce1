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
export default BlogDetails;
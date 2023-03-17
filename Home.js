import { useEffect, useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState(null)

const handleDelete = (id)=>{
  const newBlogs = blogs.filter((blog)=> blog.id !==id );
  setBlog(newBlogs)
}
useEffect(()=>{
  fetch(' http://localhost:8000/blogs').then(res => {
    return res.json()
  }).then(data =>{ 
    console.log(data)
  
  })
},[]);

 return ( 
  <div className="home">
      {/* <BlogList blogs={blogs} title="All Blogs!" handleRemove={handleDelete}/> */}
    
  </div>
 );
}
export default Home;
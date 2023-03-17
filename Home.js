import { useEffect, useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState(null);
 const [isPending, setIsPending] = useState(true);
 const [error, setError] = useState(null)

 useEffect(()=>{
   setTimeout( ()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
      if(!res.ok){
        throw Error('데이터를 불러올 수 없습니다 ')
      }
      return res.json()})
    .then(data =>{ 
        setBlog(data);
        setIsPending(false);
        setError(null)
      })
    .catch(err =>{
      setIsPending(false);
      setError(err.message);
    })
    } , 1000);
},[]);
 return ( 
  <div className="home">
 
    {error && <div> {error} </div>}
    {isPending && <div>Loading... </div>}
    { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
  </div>
 );
}
export default Home;
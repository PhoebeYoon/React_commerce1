import { useEffect, useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState(null);
 const [isPending, setIsPending] = useState(true);

 useEffect(()=>{
   setTimeout( ()=>{
    fetch('http://localhost:8000/blog')
    .then(res => {
      //  console.log(res)
      //  console.log(res.ok)
      if(!res.ok){
        throw Error('데이터를 불러올 수 없습니다 ')
      }
      return res.json()})
    .then(data =>{ 
        setBlog(data);
        setIsPending(false);})
    .catch(err =>{
      console.log(err.message)
    })
    } , 1000);
},[]);

 return ( 
  <div className="home">
    {isPending && <div>Loading... </div>}
    { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
  </div>
 );
}
export default Home;
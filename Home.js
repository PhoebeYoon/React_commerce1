import BlogList from "./BlogList";
import useFectch from "./useFetch";

const Home = () => {
  // const [blogs, setBlog] = useState(null);
  // const [isPending , setPending] = useState(true);
  // const [error, setError] =useState(null);

  // useEffect(()=>{
  //     setTimeout(()=>{
  //       fetch('http://localhost:8000/blogs')
  //       .then(res =>{ 
  //         if(!res.ok){
  //           throw Error('데이터를 불러올 수 없습니다')
  //         }
  //         return res.json()
  //       }).then(data =>{
  //           console.log(data)
  //           setBlog(data)
  //           setPending(false)
  //           setError(null)
  //       })
  //       .catch(err=>{
  //         setPending(null)
  //         setError(err.message)
  //       })
  //     } , 1000);
  //     },[]);


 const {data, isPending, error} = useFectch("http://localhost:8000/blogs");
 return ( 
  <div className="home">
    { error && <div>{error} </div>}
    { isPending && <div> Loading... </div>}
    { data && <BlogList blogs={data} title="All Blogs!"  /> }
  </div>
 );
}
export default Home;

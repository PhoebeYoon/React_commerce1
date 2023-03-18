import BlogList from "./BlogList";
import useFectch from "./useFetch";

const Home = () => {
 const {data, isPending, error} = useFectch("http://localhost:8000/blogss");
 return ( 
  <div className="home">
    { error && <div>{error} </div>}
    { isPending && <div> Loading... </div>}
    { data && <BlogList blogs={data} title="All Blogs!"  /> }
  </div>
 );
}
export default Home;

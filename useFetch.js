import { useEffect, useState } from 'react';

// const [blogs, setBlog] = useState(null);
// const [isPending , setPending] = useState(true);
// const [error, setError] =useState(null);

const useFectch = (url) => {
  const [data, setData] = useState(null);
  const [isPending , setPending] = useState(true);
  const [error, setError] =useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      fetch(url)
      .then(res =>{ 
        if(!res.ok){
          throw Error('데이터를 불러올 수 없습니다')
        }
        return res.json()
      }).then(data =>{
          console.log(data)
          setData(data)
          setPending(false)
          setError(null)
      })
      .catch(err=>{
        setPending(null)
        setError(err.message)
      })
    } , 1000);
    },[]);
    return {data, isPending, error}
}
 
export default useFectch;
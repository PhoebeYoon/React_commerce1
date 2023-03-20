###### 🌵 React_Tutorial_Part1


## useHook   

두 개의 자바스크립트 함수에서 같은 로직을 공유하고자 할 때는 또 다른 함수로 분리하는 것이 좋습니다.   
컴포넌트와 Hook 또한 함수이기 때문에 같은 방법을 사용할 수 있습니다. 
사용자 정의 Hook은 이름이 use로 시작하는 자바스크립트 함수입니다. 사용자 Hook은 다른 Hook을 호출할 수 있습니다.   
보통의 함수와 마찬가지로 사용자 정의 Hook은 무엇을 인수로 받아야 하며 필요하다면 무엇을 반환해야 하는 지를 사용자가 결정해주면 됩니다. 그러나 이름은 반드시 use로 시작해야 합니다. 

우리가 했던 예제에서 ``` http://localhost:8000/blogs  ``` 는 언제든지 변경될 수 있고 다른 곳에서 사용할 수 있도록 따로 분리해보겠습니다.  

Home.js에서 useFectch() 부분을 따로 떼어 Hook으로 만들어 보겠습니다.  
:file_folder:src:file_folder:useFetch.js 생성합니다.  
그리고 저 위에 있는 http: 로 시작하는 문구를 url로 바꾸겠습니다.  
그래서   
[ useFetch.js ]
```javascript
import { useEffect, useState } from 'react';

const useFetch = (url) => {
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
 
export default useFetch;

```    
이 코드에서는 마지막에 return 값을 주어야 합니다. 그래야 해당 Hook를 부른후에 그 결과값을 갖고 뭔가를 진행할 수 있으니까요. 우리가 리턴해야 할 것은 3가지 입니다. data, isPending,error 입니다.  
이전수업에서 blogs라는 것이 있었는데 data로 바꿨습니다. 그냥 이름을 변경한 것입니다. 왜냐하면  더 일반적인 이름으로 지정하기 위해 data라는 이름으로 바꾼것입니다.   
아래의 코드를 보시면 전달하는 인자의 이름이 data인것을 볼 수 있습니다.   

[ Home.js ]

```javascript
import BlogList from "./BlogList";
import useFectch from "./useFetch";

const Home = () => {
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
```    

수정이 잘 되었다면 이전 수업과 같은 결과화면이 나옵니다.  


## useFetch 

fetch는 컴포넌트가 마운트되거나 url에 변화가 있으면 실행됩니다   
만약 url이 undefined거나 또는 data가 온전히 불러와지기전 컴포넌트가 unmounted 될때에는 fetch는 호출되지 않습니다. 


useFetch 가 호출되면 loading, data, error 세 가지 값을 반환합니다.   
loading은 데이터를 요청 중일 때 true, 그 외 경우 false 를 반환하고,   
data 는 요청해서 응답받은 데이터 값으로 초기 값은 undefined, 완료 후 해당 값을 반환합니다.   
error 는 요청 도중 error 가 일어났을 때 에러 객체를 리턴하고 그 외 경우 false 를 반환합니다.
 
 


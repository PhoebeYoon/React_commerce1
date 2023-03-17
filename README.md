###### 🌵 React_Tutorial_Part1


이전내용에 이어서 에러가 발생했을때의 코드를 넣어주도록 하겠습니다.
이번 내용은 자바스크립트의 promise()를 이해했다고 생각하고 진행하도록 하겠습니다.
간단히 아래와 같이 바꿔줍니다.
[ Home.js ]
``` javascript
 useEffect(()=>{
   setTimeout( ()=>{
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json()})
    .then(data =>{ 
        setBlog(data);
        setIsPending(false);
    })
    .catch(err=>{
      console.log(err.message)
    })
    } , 1000);
},[]);

```    
실습을 위해 json파일을 불러왔던 서버의 기능을 중지합니다. 터미널창에서 ctrl + c를 클릭하여 중지시킨 후 웹페이지를 다시 로드하면 json 파일을 불러오지 못하기 때문에 에러문구가 콘솔창에 나타납니다.   
다시 정상적으로 가동하게 하려면 새로운 터미널창을 열고 ```npx json-server --watch data/db.json --port 8000 ```  을 실행합니다 


에러 다루는 부분의 내용를 변경해 보겠습니다. 첫번째 then문에 res라는 변수가 있는데 이게 뭔지 콘솔창에서 확인해 보겠습니다. 

```
.then(res => {
       console.log(res)
      return res.json()})
```    
그럼 아래 이미지와 같은 객체를 볼 수 있습니다.  

<img width="365" alt="스크린샷 2023-03-17 오후 4 14 16" src="https://user-images.githubusercontent.com/48478079/225837630-de58339e-9cbf-488d-9efe-a2bf3a8c421d.png">   
이 res.ok라는 항목이 불리언값으로 있습니다. 아래 이미지처럼요.   
<img width="200" alt="스크린샷 2023-03-17 오후 4 11 10" src="https://user-images.githubusercontent.com/48478079/225837728-71eed634-a490-445d-87f7-64e62eaf5b17.png">   

위의 내용에 ``` console.log(res.ok) ``` 를 추가하고 콘솔창에서 확인해 보면 'true'가 찍혀있습니다 여기에 이 값을 이용하여 throw문으로 우리가 만든 에러메시지가 출력되도록 해보겠습니다   
``` javascript
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

```    
에러를 발생시키기 위해 url에서 s를 뺐습니다. 보셨죠!   

이제는 에러처리에 useState()를 사용토록 하겠습니다. 이것은 위츼 내용에서 에러가 났을 때 에러 메시지가 출력되지만 Loading... 이라는 문구는 출력되는 것을 해결한 것입니다.  
``` javascript
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

```   







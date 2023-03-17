###### 🌵 React_Tutorial_Part1

## 데이타를 json으로 만들어 사용해보자

루트 디렉토리에 :file_folder:data :file_folder:db.json 파일을 생성합니다. 
그리고 첨부된 내용을 넣어줍니다. 

새로운 터미널창을 열고   
맥사용자는 , 
``` >sudo npx json-server --watch data/db.json --port 8000 ```   
윈도우 사용자는 앞의 'sudo'를 빼고 실행합니다.  그럼    
```   
Resources
http://localhost:8000/blogs
```   
터미널창에 이런 것이 보일것이다. 클릭해 보면 json파일의 내용이 보일것이다.    
db.json 를 다시 실행해야 할때는  ``` >sudo npx json-server --watch data/db.json --port 8000 ```  


잠시 여기서 endpoints를 보겠습니다.   
```  
/blogs        GET       Fetch all blogs
/blogs/{id}   GET       Fetch a single blogs
/blogs        POST      Add a new blog
/blogs/{id}   POST      Delete a blog
```   

Home.js파일을 다운로드 받아서  

```  
useEffect(()=>{
  fetch(' http://localhost:8000/blogs').then(res => {
    return res.json()
  }).then(data =>{ 
    //console.log(data)
    setBlog(data)
  })
},[]);
```   
위와 같이 변경해줍니다

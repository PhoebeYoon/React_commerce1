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

###### 🌵 React_Tutorial_Part1

## 스타일을 입혀보자.

기본으로 설치된 프로젝트에는 이미 2개의 App.css, index.css 스타일 파일이 있습니다.   
App.js 파일안에 ```  import './App.css'; ```    
index.js 파일안에 ``` import './index.css'; ```   

이 스타일들이 브라우저에서 어떻게 나타나는지 개발자도구로 확인해 보자.   
명확하게 확인해보고자 스타일에 내용을 좀 추가해보자.  

[ index.css ]   
body {  border: 2px solid; background-color: gold; }   
[ App.css]    
.App { background-color: beige; }   
를 기존내용에 추가한다. 결과화면은 아래와 같다.  

<img width="200" alt="스크린샷 2023-03-15 오후 5 28 27" src="https://user-images.githubusercontent.com/48478079/225250889-18bac4e6-5b32-403c-a8f6-e2649a83de10.png">
<img width="400" alt="스크린샷 2023-03-15 오후 5 31 19" src="https://user-images.githubusercontent.com/48478079/225251533-7aa1267a-e72f-4f9f-ae08-3fdd42fc6153.png">

이제 새로운 스타일을 적용해보자 (위에서 연습으로 적용했던 스타일은 제거합니다)   
App.js 파일에서 App.css 를 제거하고   
index.css 파일의 내용을 첨부된 내용으로 바꿔보자. 아래와 같은 결과화면을 얻는다.  

<img width="530" alt="스크린샷 2023-03-15 오후 5 38 17" src="https://user-images.githubusercontent.com/48478079/225253363-eb93b6b1-6a93-4ee3-bd63-871b4f1dce59.png">


#### 스타일을 사용하는 방법 중 ,   
```js
<div style="font-size:24px"> 개발 블로그 </div> <-- 이렇게는 작동하지 않습니다.
아래처럼 
let posts ={ color:'hotpink', fontSize='30px}
<div style={posts}> 개발 블로그</div>
또는
<div style={{ color:'blue', fontSize:'30px' }}> 개발 블로그</div>
```



Navbar.js에 스타일을 입혀볼건데, 스타일에 '{{ }}'를 사용할 것이다.   
바깥쪽 {다이나믹 value}은 리액트에게 우리가 스타일속성을 위한 다이나믹 value를 사용할거라고 알려주는 것이고, 안쪽은 { 자바스크립트 오브젝트 } 이다.  css 문법이 아니라 jsx 문법에 따라 속성을 적어야 한다.  
[ Navbar.js ]   
``` javascript 
const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Hong's Blog</h1>
      <div className="links">
        <a href="/"> Home</a> | 
        <a href="/create" style={{ 
          color:"white", 
          backgroundColor:'#f1356d',
          borderRadius:'4px'
          }}> New Blog</a>
      </div>
    </nav>
   );
}
export default Navbar;

```    
결과는 아래와 같다.   
<img width="500" alt="스크린샷 2023-03-15 오후 5 48 58" src="https://user-images.githubusercontent.com/48478079/225255977-cc3b3324-bf04-4e4d-85b0-c91c24d8aa7f.png">  


여기까지 잘 따라오셨습니다

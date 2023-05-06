###### 🌵 React_Tutorial_Part1

## Rounter 사용하기   
lesson04에서  잠시 소개되었던 도식화된 이미지를 기억해봅시다. Rounter 라는 것을 이용해서 만들어 보겠습니다 
React Router는 클라이언측 라우팅을 가능하게 합니다. 이게 뭐냐면,  
전통적인 방식은 브라우저가 웹서버로 문서를 요청하고 다운로드후 css, javascript등의 요소들을 평가한후에 랜더링하여 화면에 보여줍니다. 
클라이언트측 라우팅은 앱이 문서의 다른 내용들을 뺀 사용자가 클릭한 그 url를 업데이트할 수 있습니다.  
그래서 즉시로 요청한 url과 연관된 새로운 UI과 새로운 데이터를 fetch하여 정보를 갱신합니다.
<b>컴포넌트를 요청주소에 따라서 연결될 수 있도록 Route요소를 사용하는 것입니다</b>     


먼저 rounter 기능을 사용하려면 해당 기능을 설치해야 합니다.   특정버전을 원한다면 dom글자위에  @특정버전를 추가합니다.   
```> npm install react-router-dom``` 이렇게 하면 됩니다 (npx로 사용하지 마세요)      
설치후에 package.json파일을 열어보면  
"dependencies" 항목에 "react-router-dom": "숫자"가 있을 것입니다.   

### App.js의 내용에 등록하기
react-router-dom 설치가 되었다면 사용하기 위해 App.js에 이것을 사용하겠다고 등록(불러옴)해야 합니다. 

```import { BrowserRouter, Routes, Route} from 'react-router-dom';  ```   
추가합니다. 
주의할 것은 react-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원하지 않는다는 것이다.    

[ App.js ]

```javascript
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route path="/" element={<Home /> } ></Route>

            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
```    
위에서 언급했듯이 react-router-dom@5 로 버전6이하의 버전을 설치했다면 위의 코드와는 달라질 것이다.    
여기까지 실행화면을 확인해 보세요.

## 컴포넌트를 하나 더 만들어봅시다

📁src 📁Create.js -> 그 안에서 sfc 엔터   
[ Create.js ]
``` javascript 
const Create = () => {
  return (  
    <div className="create">
      <h2>Add a new Blog</h2>
    </div>
  );
}
export default Create;

```  
만들어진 컴포넌트를 App.js에 등록해야 합니다.  
[App.js]
```javascript
  <Routes>
    <Route path="/" element={<Home /> } ></Route>
    <Route path="/create" element={<Create /> } ></Route>        
  </Routes>
```
이처럼 변경해 줍니다.   
url에 : ```  http://localhost:3000/create  ```  해주면 아까 작성한 내용이 보입니다.   

이제 브라우저에서 메뉴에 있는 항목을 잠시 보겠습니다.  Navbar.js 파일을 열어보면  
```javascript
<a href="/create" style={{ 
          color:"white", 
          backgroundColor:'#f1356d',
          borderRadius:'4px'
          }}> New Blog</a>
```
여기에서 앵커의 url를 '/create' 로 이미 지정했기 때문에 메뉴를 클릭해서도 새로운 페이지로 이동할 수 있습니다.  

## exact 옵션을 넣어봅시다
예제에 있는 내용 중 Home으로 갈때의 링크는 '/' 이고, Create페이지로 갈때는 '/create' 입니다.  
여기서 언급할 내용은 사용자가  '/create' 를 가려고 할때 키보드로 '/'을 입력하는 시점에서   
리액트는 '/' 인지 '/create'의 맨앞의 '/' 인지 잘 모른다는 것입니다. 그래서 두개를 모두 랜더링 한다는 것입니다.   
그래서 정확한 path에 정확하게 위치해야만 해당 컴포넌트를 렌더링하기 위해 ``` exact={treu} ```를 삽입해줍니다.    
```javascript
<Route path="/"  exact={true}  element={<Home /> } ></Route>
<Route path="/create" exact={true}  element={<Create /> } ></Route> 
```

## Routes 요약
- 전에 사용하던 Switch 대신 Routes로 변경되었습니다.
- path =":id"로 상대경로로 지정할 수 있으면 path="." , path=".." 등으로 상대경로를 지정할 수 있습니다.
- 중첩 라우팅을 할 수 있습니다. 아래와 같이    
``` javascript
<Routes>
        <Route path="web/*" element={<Web />}>
             <Route path=":id" element={<WebPost />} />
        </Route>
</Routes>
```   
- 그럼 이것을 해주기 위해 import 문장은 아래와 같이 해야 합니다 
```
import { Link, Routes, Route, Link, Outlet } from "react-router-dom";
``` 
이 정도는 기억하실 수 있을 것입니다.  
많은 내용을 읽고도 기억 못하는 것보다 적정한 내용을 기억했다가 연관된 것들을 조금씩 추가하면 모두 기억할뿐 아니라 사용하는데 휠씬 수월합니다. 

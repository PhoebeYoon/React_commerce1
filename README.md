###### 🌵 React_Tutorial_Part1

## 컴포넌트와 템플릿 ( React  Components & Template )

<img width="470" alt="스크린샷 2023-03-15 오후 3 00 21" src="https://user-images.githubusercontent.com/48478079/225220419-a7ab5cc0-22ca-41e1-ac06-2d37d4ad0769.png">

이렇게 웹페이지를 구성하려고 합니다. 여기에 파란색은 컴포넌트를 뜻합니다.
리액트는 여러개의 컴포넌트를 조합해서 웹페이지를 만든다고 보시면 됩니다. 
컴포넌트란 <b>building blocks</b> 이면서 <b>사용자정의태그</b>입니다. 개발자는 바로 이 컴포넌트를 만드는 것이 일이기도 합니다. 컴포넌트는 반드시 <b>대문자</b>로 시작하는 이름을 가져야 합니다. 컴포넌트는 템플릿과 로직을 가지고 있습니다. 이제 본격적으로 어플리케이션을 만들기전에 문법을 잠시 보도록 하겠습니다.
첫번째로 봐야할 것은 html의 엘리먼트와 jsx의 관계입니다.
1. jsx를 사용하는 이유에 대해 알아보겠습니다. 자바스크립트에서 DOM의 엘리먼트를 읽어오려면 document.getElementById 이런식으로 사용해야 하고 React에서는 React.createElement('div',null, 'HelloWorld') 이런 식으로 적어야 합니다. 이것을 좀 간단하게 사용할 수 있도록 도와주는 것이 jsx입니다. 

2. 리액트의 문법인 JSX와 JSX가 생성하는 리액트 엘리먼트에 대해 간단히 설명하자면, jsx는 React엘리먼트를 만들고 React엘리먼트는 브라우저 DOM를 생성합니다.
이것을 그림으로 보면 아래와 같습니다.  
<img width="365" alt="스크린샷 2023-03-15 오후 3 20 48" src="https://user-images.githubusercontent.com/48478079/225223815-fe3a314f-2c86-41f6-bc74-0f9244618ff7.png">    

###### 이미지발췌 : https://www.snugarchive.com/blog/react-jsx-and-elements/

### 3. jsx의 문법
  - 속성명은 카멜케이스로 작성 예) onClick, onMouseDown
  - 자바스크립트 예약어와 같은 이름은 속성명으로 사용할 수 없습니다.
  - 자바스크립트 표현식을 사용할때는 {  } 사용
  - html에서 닫는 태그가 없는 태그에도 옆의 경우처럼 적어야 한다 예) ``` <input /> ```   
  - return ()  으로 사용하고 이안에서 최상의 태그는 하나만 적어줍니다  
  - {boolean}, {null}, {undefined }는 무시됩니다. 유효하지만 랜더링을 하지 않습니다  
  - {showHeader && &lt;Header  / &gt;} 와 같은 표현에서 showHeader의 값이 true 이면 옆에 있는  ```<Header />```를 랜더링합니다  
  - false, true, null 또는 undefined와 같은 값들을 출력하고 싶다면 먼저 문자열로 전환 해야합니다.  
  ``` 
  <div>
  My JavaScript variable is {String(myVariable)}.
</div>
```

>자동으로 태그를 입력하려면 vs code  하단에 Ln Col Space:4 UTF-8 이렇게 나오는 줄에 'javascript'가 있을 것입니다. 이 javascript 글자를 클릭하면 에디터 위쪽에 드롭다운이 나타납니다. 그러면 javascript JSX ( javascriptreact) 를 선택하면 됩니다



이전 수업에서 웹브라우저의 개발자도구와 vscode로 App.js 내용을 비교한 그림, 기억나시나요?   
#### 거기에 보면 App.js에는 ``` <div className="App"> ~ ``` 로 되어 있는데 개발자도구에는 ``` <div class="App"> ~ ``` 로 되어 있었습니다. jsx 문법에 따라 className이라고 했는데 실제 브라우저의 DOM으로 랜더링해서 보니 class로 변경되어 html 문법에 맞춰서 들어가 있었습니다.  

아래와 같이 수정하겠습니다.  
[App.js]
``` javascript
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1> App 컴포넌트</h1>
      </div>
    </div>
  );
}
export default App;
```   
마지막줄에 있는 <b> export default </b> 문장은 해당 컴포넌트를 다른 파일에서 사용하도록 하기위해 꼭 해줘야 하는 문장입니다. 그리고 function App(){ return   } 으로 return 문에서 jsx 문을 리턴한다는 것을 기억하십시요. 어디서? App.js 입니다.   


여기에 추가해서 변수를 사용해 보도록 하겠습니다.  
return문 전에 변수를 선언합니다.  
``` javascript 
import './App.css';
function App() {
  const title ="Welcome to my blog";
  return (
    <div className="App">
      <div className="content">
        <h1> App 컴포넌트</h1>
        <p> {title }</p>
      </div>
    </div>
  );
}
export default App;
``` 

이제 좀 더 다양한 내용을 다루어보겠습니다.   
``` javascript
import './App.css';
function App() {
  const title ="Welcome to the my blog";
  const likes =50;
  // const gender =false;
  const person = {name:'Kim', age:30};
  const myVariable =true;
  return (
    <div className="App">
      <div className="content">
        <h1> App 컴포넌트</h1>
        <p> {title } | Likes {likes}</p>
        
        {/* <p>{ gender }</p> <-- Boolean 변수는 직접 화면에 출력되지 않습니다. 
                          gender.toString()을 사용해서 문자열로 변환해야합니다.
        <p>{ person }</p>  이렇게는 출력이 제대로 되질 않습니다. 아래처럼 사용해야 합니다 */}
        
        <p>{ person.name }</p>
        <p> { 10 }</p>
        <p> { "문자열도 허용됩니다 "}</p>
        <p>[1,2,3,4,5]</p>
        <p>{ <span> span 태그입니다 </span>} </p>
        <p> { Math.floor(Math.random()*10)}</p>
        <div> My JavaScript variable is {String(myVariable)} </div>
      </div>
    </div>
  );
}
export default App;
```    
### + , - 카운트 하기
```javascript
import './App.css';
import {useState} from 'react'
 
function App() {
  
  const [counter , setCounter] = useState(0)
    return (
      <div className="App">
      <button onClick={ ()=> setCounter((prevCount)=> prevCount +1)} >+</button>
      <h1>{counter}</h1>
      <button onClick={ ()=> setCounter((prevCount)=> prevCount -1) }> -</button>
      </div>
    );
}
export default App;
```



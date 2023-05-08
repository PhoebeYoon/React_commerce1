###### 🌵 React_Tutorial_Part1

수업을 진행하기 전에 Hook(React 16.8.0 버전부터) 과 useState 와 useEffect에 대해 간략히 살펴봅시다. (Hooks에는 여러가지가 있지만 우리는 useState와 useEffect에 대해서만 알아볼것입니다.)  
우리는 이미 Hooks에 대한 체험이 있기때문에 그냥 문자로 읽었을때보다 좀더 이해할 수 있을 것입니다.   
## Hooks  
우선 Hook은 Hooks이며 <b> 함수 </b> 입니다.    
s가 붙여기 때문에 하나가 아니라 여러개라는 것을 짐작할 수 있습니다.  그리고 모든 함수에는 특정한 기능(코드)를 가지고 있듯이 이것도 그러합니다. 이 Hooks이라는 것이 뭐하냐면,   
영어로는 'hook into '이고, 한글로 하면 '~에 연결하다'의 기능을 합니다.    
즉 함수컴포넌트에서 리액트 state와 lifecycle에 관여하여 뭔가를 연결한다는 것이다.   
리액트는 빌트인 Hooks 함수들을 제공하는데 대표적인 것이 우리가 이미 사용해봤던 useEffect함수 와 useState 등입니다. 그리고 사용자가 직접 만드는 Hook도 있습니다.  <br> 

Hook의 개념이 여전히 애매하다면 이렇게 생각해봅시다.  여러분은 이미 Math.random(), Math.floor() 함수를 사용해봤을것이다. 
 random(), floor()는 모두 Math라는 함수에 속합니다.  
 이와같은 방식으로 Hooks라는 함수가 있는데 그것의 서브(?)함수로 useState와 useEffect가 있다고 생각하면 어떨까 싶습니다. 그리고 이것들은 리액트의 state와 관련되고 리액트의 lifecycle에서 사용한다고 생각하십시요.  <br>
 ( 그리고 자바스크립트의 배열구조분해(destructuring) 문법을 사용하니 혹시 이 구조에대해 익숙하지 않다면 먼저 학습이 필요합니다.)      
 

그리고 Hooks를 사용할때는 규칙이 있습니다.    
- 최고 레벨의 Hooks만 호출할 수 있으며 루프, 조건 또는 중첩 함수 내부의 Hooks 를 호출하면 안됩니다. 
- React 함수 컴포넌트 내에서만 Hooks만 호출할 수 있습니다. 
- Hook를 만들때는 use를 앞에 붙여야 한다.



## 1. useState
```js
import { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다. 
  const [count, setCount] = useState(0); // 1번

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> // 2번
        Click me
      </button>
    </div>
  );
}
```    
위의 내용는 useState의 예시코드입니다. 1번과 2번이 중요합니다.   
React에서 함수 컴포넌트는 2가지 모양을 가집니다  
```js
const Example = (props) => {
  // 여기서 Hook을 사용할 수 있습니다!
  return <div />;
}
```    
:pencil: 실습을 위해 위의 코드를 App.js(기존 코드를 주석처리하고 )에 삽입하고 결과를 확인합니다.  

 
그래서 useState는 state를 함수 컴포넌트 안에서 사용할 수 있게 해줍니다. 함수 컴포넌트는 this (자바스크립트에서 이미 학습하셨죠 )를 가질 수 없습니다. 그래서 useState Hook를 직접 컴포넌트에서 사용합니다. 위의 예제에서 useState() 호출되면 state의 초기값 여기서는 count의 초기값을 인자로 넘겨줍니다. 이 초기값은 객체일 필요는 없고 문자, 숫자타입을 가질 수 있습니다.   
그리고 이 useState는 초기값을 넘겨줄 변수 여기서는 count와 해당 변수를 갱신할 수 있는 함수 이 2가지를 쌍으로 반환합니다. 여기서 해당변수를 갱신할 수 있는 함수는 setCount입니다.
 
### :pencil: 혼자해보기
a. 클릭할때마다 1씩 증가하기  
<img width="250" alt="스크린샷 2023-04-16 오후 3 27 42" src="https://user-images.githubusercontent.com/48478079/232276804-b0a695eb-9c72-4af8-9c7c-0cc2f07eb893.png">      
b. input에 삽입한 내용을 화면에 출력하기  
<img width="250" alt="스크린샷 2023-04-16 오후 3 26 42" src="https://user-images.githubusercontent.com/48478079/232276805-0f78a110-8283-4019-a272-4ca4cbaf84c8.png">    
c. useState에 true 또는 false를 이용하여 글자가 보이게 또는 안보이게   
<img width="250" alt="스크린샷 2023-04-16 오후 4 16 17" src="https://user-images.githubusercontent.com/48478079/232280035-c998f33d-138e-48b8-bbae-dae706ddd887.png">

 



## 2. useEffect   

useEffect는 뭐하는 걸까요?

useEffect 라는 Hook 을 사용하여 <b>리액트에게 렌더링이후에 컴포넌트에게 해야할 일이 있다고 알려주는 것입니다.</b>    
useEffect는 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때) 매번 실행된다.  
기본 형태는, 
``` 
useEffect(function, deps)
function : 실행하고자 하는 함수
deps : 배열 형태이며 function을 실행시킬 조건
```

실습내용에 useEffect함수를 사용해봅시다.  
[ Home.js ]
``` javascript   
import {useEffect, useState} from 'react'

// return 문 위에 작성합니다

useEffect(()=>{ 
  console.log('useEffect')
  console.log(blogs)
});
```    
이것만 달랑 추가해주고 브라우저에서 해당 페이지가 실행한 ``` npm run start ``` 후에  콘솔창을 확인해 보면 useEffect 라는 글자가 출력되어 있다. 위에 설명했듯이 Home 컴포넌트가 처음 실행될때 실행된 것이다.   
그리고 버튼을 클릭해서 내용을 삭제해 봅시다. 이때에도 useEffect가 재실행된다는 것을 확인할 수 있습니다. 여기까지 확인되셨나요?   
그럼 이제는 컴포넌트 처음실행할때는 실행되지만 state가 바뀔때는 실행되지 않게 하려면 어떻게 할까요 ?   
이를 위해서는 두번째 인수를 사용하면 됩니다. 여기서는 [] 를 주도록 하겠습니다      
``` javascript
useEffect(()=>{
  console.log('useEffect')
  console.log(blogs)
},[]);
```
결과를 확인하세요.  

이제 [] 안에 useEffect를 트리거 시키는 state value를  넣어보겠습니다  
```javascript
const [name, setName] = useState('Kim')

useEffect(()=>{
  console.log('useEffect')
  console.log(blogs)
},[name]);


 return ( 
  <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleRemove={handleDelete}/>
      <button onClick={()=>setName('Smith')}> Change Name</button>
      <p>{name}</p>
  </div>
 );

```   
이렇게 각각 변경해 주십시요. 결과화면을 보면 삭제버튼을 클릭할때는 여전히 'useEffect' 가 출력되지 않다가 'Change Name' 버튼을 클릭하면 { name }의 값이 변경되면서 'useEffect'가 콘솔창에 출력됩니다.   
useEffect함수의 두번째 인자로 [name] 를 주었는데, 이는 name이라는 state를 주시하다가 이것이 변경되면 useEffect()를 실행하라는 것입니다 

 

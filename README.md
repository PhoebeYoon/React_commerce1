###### 🌵 React_Tutorial_Part1

수업을 진행하기 전에 Hook 과 useEffect에 대해 간략히 살펴봅시다.
우리는 이미 Hooks에 대한 체험이 있기때문에 그냥 문자로 읽었을때보다 좀더 이해할 수 있을 것입니다.   
## Hooks  
우선 Hook은 Hooks이며 <b> 함수 </b> 입니다.    
s가 붙여기 때문에 하나가 아니라 여러개라는 것을 짐작할 수 있습니다.  그리고 모든 함수에는 특정한 기능(코드)를 가지고 있듯이 이것도 그러합니다. 이 Hooks이라는 것이 뭘하냐면,   
영어로는 'hook into '를 하고, 한글로 하면 '~에 연결하다' 하는 기능을 합니다.  즉 함수컴포넌트에서 리액트 state와 lifecycle에 관여하여 뭔가를 연결한다는 것이다.   
리액트는 빌트인 Hooks 함수들을 제공하는데 대표적인 것이 우리가 이미 사용해봤던 useState아 useEffect 함수입니다. 그리고 사용자가 직접 만드는 Hook도 있습니다.  
 Hook의 개념이 여전히 애매하다면 이렇게 생각해봅시다.  여러분은 이미 Math.random(), Math.floor() 함수를 사용해봤을것이다. 
 random(), floor()는 모두 Math라는 함수에 속합니다.  
 이와같은 방식으로 Hooks라는 함수가 있는데 그것의 서브(?)함수로 useState와 useEffect가 있다고 생각하면 어떨까 싶다. 그리고 이것들은 리액트의 state와 관련되고 리액트의 lifecycle에서 사용한다고 생각하십시요.  

그리고 Hooks를 사용할때는 규칙이 있습니다.   
최고 레벨의 Hooks만 호출할 수 있으며 루프, 조건 또는 중첩 함수 내부의 Hooks 를 호출하면 안됩니다. 반응 함수 구성 요소에서 Hooks만 호출할 수 있습니다. 



## useEffect   
useEffect는 뭐하는 걸까?
useEffect 라는 Hook 을 사용하여 리액트에게 렌더링이후에 어떤 컴포넌트가 해야할 일이 있다고 알려주는 것이다. 이 Hook를 사용하는 이유는 가끔은 리액트가 DOM에 업데이트된 후에 추가로 해야할일이 있을때가 있다. 이때 사용하는 것이다.    
useEffect는 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때) 매번 실행된다.  

지난 실습내용에 useEffect함수를 사용해봅시다.  
[ Home.js ]
``` javascript
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

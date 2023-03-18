###### 🌵 React_Tutorial_Part1

## Clean-up함수
우선 왜 이 함수를 사용해야 하는지부터 살펴보겠습니다. 지난 'lesson10-Hook-useEffect'수업의 내용을 잠시 기억해보겠습니다.
useEffect는 리액트에서 렌더링이후에 어떤 컴포넌트가 해야할 일이 있다고 알려주는 것이라고 했습니다.  간단한 사용방법으로는 
```
useEffect(()=>{
  console.log('useEffect')
  console.log(blogs)
});
```    
였습니다.  그리고 이것을 실습했을 때 콘솔창에 출력된것을 자세히 봤다면 'useEffect' 라는 것이 2번씩 찍힌것이 기억이 날것입니다.   
이것은 useEffect가 실행되는 경우가 3가지인데, 컴포넌트가 처음 마운트될때, 언마운트될때, 그리고 특정값이 바뀔때 였습니다.
기억나시나요?   
그리고 useEffect()의 두번째 인수로는 []를 넣었는데,   
그러면서  컴포넌트가 처음 마운트될때 실행되고 state가 바뀔때는 실행되지 않게하기 위해 빈 []를 준다고 했습니다.   
그리고 그 useEffect안에```,[name]);```항목을 주어서 useEffect를 트리거 시키는 state value를 넣는것이라고 설명했습니다. 이 내용을 잘 기억하시고 다음의 내용으로 변경해 보시기 바랍니다.  

[useFetch.js] 파일에서 간단한 실습을 해 보겠습니다. 

<img width="400" alt="스크린샷 2023-03-18 오후 5 33 14" src="https://user-images.githubusercontent.com/48478079/226095014-3abb7326-2fda-40ed-b5ef-a0aec728f4a1.png">
실행결과를 보면 아래 이미지와 같습니다 

<img width="400" alt="스크린샷 2023-03-18 오후 5 40 24" src="https://user-images.githubusercontent.com/48478079/226095076-fc431b52-225d-4bf2-a6ec-2ec513aafc92.png">

위의 결과는 웹페이지를 다시 로드시켰을때이며, 메뉴에서 'Home' 버튼을 클릭하면 useFetch.js가 실행됩니다 위의 이미지에 useFetch.js의 행번호를 따라가 보시면 처음마운트될때, something의 값이 바뀌었을때, 언마운트되었을때 useEffect의 내용이 반복적으로 실행된다는 것을 알수 습니다.  

여기에서 cleanup 함수는 메모리의 누수를 막고 불필요하고 원하지 않는 행위를 방지하기 위해 사용하는 것입니다. 
clearup 함수는 useEffect()에서 parameter로 넣은 함수의 return 함수입니다. 
```
useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
```
우리의 예제에 적용해보면,  
``` setTimeout(()=>{},1000); 
  return ()=>{ console.log('clean up');
   }
    },[]);
  ```    
 변경해 줍니다. 그리고 실행 후 콘솔창을 확인해 보면,   
 처음 페이지가 로드되었을때, clean up 이 한번만 출력됩니다. 
 
 
 
Component의 unmount이전 / update직전에 어떠한 작업을 수행하고 싶다면 Clean-up함수를 반환해 주어야 한다.

unmount 될 때
useEffect(func, [])

특정값 update 직전
useEffect(func, [특정값])

clean-up함수를 사용하게되면, 작동 순서는 re-render -> 이전 effect clean-up -> effect

useEffect 라는 Hook 을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리하는 방법에 대해서 알아보겠습니다.

그리고, useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.  


There are different ways to cancel fetch request calls: either we use AbortController or we use Axios’ cancel token.

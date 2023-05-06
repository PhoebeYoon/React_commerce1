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
( _위의 실습을 위해 입력했던 something에 관련된 내용은 삭제합니다_ )    


우리의 예제에 적용해보면,  [ useFetch.js ]
``` 
setTimeout(()=>{ 생략 },1000); 
  return ()=>{ console.log('clean up');
   }
    },[]);
  ```    
 변경해 줍니다. 그리고 실행 후 콘솔창을 확인해 보면,   
 처음 페이지가 로드되었을때, clean up 이 한번만 출력됩니다. 
 
여기까지 잘 따라오셨나요?  이제 내용을 추가해 보도록 하겠습니다. 
우선 fetch() 함수에 대해 좀 설명해 보겠습니다   
``` 
fetch('http://localhost:8080/요청지', { method : "GET" })   

fetch("http://localhost:8080/요청지", {
            method : "POST",          //메소드 지정
            headers : {               //데이터 타입 지정
                "Content-Type":"application/json; charset=utf-8"
            },
            body: JSON.stringify(data)   //실제 데이터 파싱하여 body에 저장
        })
```   
아마도 눈에 익은 형태일것입니다. 
fetch 객체는 promise 객체를 리턴하는 비동기함수입니다. promise객체에는 abort(중단) 기능이 없기 때문에 'AbortController '를 이용하여 비동기식 동작중단 기능을 만들어보겠습니다.  
이걸 왜 하냐면, 우리의 예제에 에러가 발생할 경우를 대비해서 .catch()문을 적어놓았습니다.  이것을 좀더 효과적으로 바꿔보자는 것입니다.  

사용자가 웹요청을 한뒤 이 요청이 필요없어졌다고 가정해 봅시다. 이제까지는 웹요청을 취소할 수 있는 기능이 없어서 일단 요청을 보내고 난뒤 이 요청이 필요없어져도 취소하지 못하고 요청은 그대로 두고 응답받는 내용을 사용하지 않는 식으로 구현이 되었던 것입니다. http 요청이 꽤 빠르기때문에 별 문제 없는것처럼 보이지만 불필요한 네트워크 트래픽이 생기기도 하고 자원을 차지하고 있으니 취소를 하자는 것입니다   
그리고 이것을 'AbortController '를 통해서 구현할 수 있다는 거죠.


## AbortController 
- AbortController는 signal 이라는 속성(property)과 abort 라는 메소드(method)로 구성되어 있습니다. 
- signal은 AbortController 인터페이스의 읽기전용 속성으로 AbortSignal 객체의 인스턴스이며 DOM 요청과의 통신 또는 중단하는데 사용됩니다  

1. 선언  
  ``` let controller = new AbortController; ```   
2. fetch 함수에 signal 파라미터 할당하기  
    ``` fetch(url, { signal: controller.signal }); ```   
3. abort 함수 호출   
``` controller.abort(); ```    

db.json 파일을 불러올때 에러가 발생한다면 중단시키고자 합니다. fetch()가 취소되면 'AbortError' 라는 'DOMException'를 발생하기 때문에 취소된 오류와 다른 오류를 구분할 수 있습니다. 그래서 아래 catch()에 if문을 추가하여 'AbortError'일때 체크하도록 했습니다. 

[ useFetch.js ]   
```javascript
import { useEffect, useState } from 'react';

const useFectch = (url) => {
  const [data, setData] = useState(null);
  const [isPending , setPending] = useState(true);
  const [error, setError] =useState(null);;



  useEffect(()=>{
    const abortCont = new AbortController();

    setTimeout(()=>{
      fetch(url , {signal : abortCont.signal})
      .then(res =>{ 
        if(!res.ok){
          throw Error('데이터를 불러올 수 없습니다')
        }
        return res.json()
      }).then(data =>{
          setData(data)
          setPending(false)
          setError(null)
      })
      .catch(err=>{
        if( err.name ==='AbortError') {
          console.log('불러오기를 중단합니다')
        } else {
          setPending(null)
          setError(err.message)
        }
      })
    } , 1000);
    return ()=>{
      // console.log('clean up');
      abortCont.abort();
    }
    },[url]);
   
    return {data, isPending, error}
}
 
export default useFectch;

```    
db.json의 연결을 중지하고 페이지를 실행시키면 '데이터를 불러올수 없습니다' 가 콘솔창에 나타납니다.  
Home.js에서 http의 주소를 ~ /blogss 로 고쳐서 실행하면  문서에는 '데이터를 불러올 수 없습니다' 와 콘솔창에는 '불러오기를 중단합니다' 가 나타납니다.




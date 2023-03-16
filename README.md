###### 🌵 React_Tutorial_Part1

## state 
prop(properties의 줄임말)와 state는 일반 자바스크립트 객체다. 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있는데 한 가지 중요한 방식에서 차이가 있다. props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내 선언된 변수처럼) 컴포넌트 안에서 관리한다



|State | Props |
|------|--------|
| 뷰에 렌더링돼야 하는 컴포넌트의 데이터를 저장하는 데 사용한다 | 데이터, 이벤트 핸들러를 자식 컴포넌트에 전달하는 데 사용한다|
|상태는 데이터를 보유하고 시간이 지남에 따라 변경될 수 있다 | props는 바뀔 수 없다. 한 번 설정되면 props를 변경할 수 없다 |
|이벤트 핸들러는 일반적으로 state를 업데이트한다 | 상위 컴포넌트는 하위 컴포넌트에 대한 props를 설정한다 |


위의 내용을 그냥 읽어보십시요, 이제부터 왜 state를 사용하는지 설명하도록 하겠습니다.  

우리는 ```  let name ='Hong Gi lDong';   ``` 를 설정한 뒤에 버튼을 클릭해서 name변수의 값을 'Kim Gil Dong'으로 변경할 것입니다.  아래의 코드를 보세요. ( 완성된 코드는 아닙니다 )  

``` javascript 
const Home = () => {
  let name ='Hong Gi lDong';
  const handleClick =()=>{
    console.log('before ', name);
    name ="Kim Gil Dong";
    console.log('after ',name);
  }

  return ( 
    <div className="home">
      <h2>Home </h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click here</button> 
    
    </div>
   );
}

export default Home;
```  
결과를 보면 콘솔창에 'Kim Gil Dong'이 찍히고 'Hong Gil Dong'값이 handleClick함수로 전달되질 않습니다.  
그래서 Hook(훅)이라는 것을 사용해야 하는데,  Hook은 리액트에서 제공하는 함수입니다. 
그리고 지역변수처럼 사용했던 변수들을 useState를 사용하여 state(상태)로 만들어줍니다. state란 컴포넌트안에 있는 데이터 또는 정보를 포함하고 있는 리액트 내장객체입니다. 그러니까 컴포넌트안에 어떤것들이 있는지 알고 싶으면 이 state를 뒤지면 알수 있다는 얘기죠.   
state를 다시 설명하면, 
컴포넌트에서 입력은 props 인데 일정한 처리를 거친 후 return 값을 내보내는데 props과 함께 함수를 다시 실행해서 새로운 리턴값을 만들어주는 데이터가 state 이다. props는 컴포넌트를 사용하는 외부의 것을 위한 것이고 state는 컴포넌트를 사용하는 내부의 것을 위한 것이다 

useState 사용하면  배열을 리턴하는데  
배열의 첫번째 요소는 상태의 값을 읽을때 사용하고  
배열의 두번째 요소는 그 상태의 값을 변경할 때 사용하는 함수입니다. 이것을 다시 정리하면,  
[ a , b ] = useState('알고싶은 얘')   
이렇게하면 '알고싶은 얘'의 'a'에는 알고싶은 얘가 뭘 갖고 있는지를, b에는 어떻게 바꿀지를 지정해주면 되는데 바꿀때는 b('변경할내용')를 적어줍니다  

위의 코드를 이렇게 바꾸면 됩니다. 위에 설명한 a,b 대신 name, setName을 사용했습니다.  
``` javascript
import {useState} from 'react'
const Home = () => {
  // let name ='Hong Gil Dong';
  const [name, setName ]=useState('Hong Gil Dong')
  const handleClick =()=>{
     console.log(name)
      setName('Kim Gil Dong')
  }
  return ( 
    <div className="home">
      <h2>Home </h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click here</button> 
    
    </div>
   );
}
export default Home;

```   
여기서 중요한것 하나는, 페이지가 처음 로드될때 변수는 값들을 읽습니다. 그리고 클릭이벤트로 인해 이미 읽었던 값들에 변화가 생겼다면 이 변화된 내용을 화면에 보여주기 위해 웹페이지를 다시 리로드해야 하는데, 사용자가 웹페이지를 수동으로 리로드해주지 않는 이상 변경된 내용이 저절로 화면에 반영되질 않습니다. 우리가 useState를 사용하게 되면 이미 실행됐던 어플리케이션이 자동으로 다시 리로드되어 변경된 내용을 화면에 뿌려주도록 해준다고 이해하십시요. 일단은 이렇게 이해하시고 나중에 더 자세히 알아보도록 하겠습니다.  


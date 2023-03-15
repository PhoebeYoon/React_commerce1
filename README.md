###### 🌵 React_Tutorial_Part1

## Using state 
prop(properties의 줄임말)와 state는 일반 자바스크립트 객체다. 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있는데 한 가지 중요한 방식에서 차이가 있다. props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내 선언된 변수처럼) 컴포넌트 안에서 관리한다



|State | Props |
|------|--------|
| 뷰에 렌더링돼야 하는 컴포넌트의 데이터를 저장하는 데 사용한다 | 데이터, 이벤트 핸들러를 자식 컴포넌트에 전달하는 데 사용한다|
|상태는 데이터를 보유하고 시간이 지남에 따라 변경될 수 있다 | props는 바뀔 수 없다. 한 번 설정되면 props를 변경할 수 없다 |
|이벤트 핸들러는 일반적으로 state를 업데이트한다 | 상위 컴포넌트는 하위 컴포넌트에 대한 props를 설정한다 |

- state 객체는 생성자에서 초기화되며, 여러 속성을 저장할 수 있다.
- 객체의 상태가 바뀔때마다 리액트는 컴포넌트를 브라우저에서 다시 랜더링한다
- this.setState()는 state()객체의 값을 저장하는데 사용된다
- setState()는 state와 이전 state 사이의 병합을 수행한다   

위의 내용을 그냥 읽어보십시요, 이제부터 왜 state를 사용하는지 설명하도록 하겠습니다.  

우리는 ```  let name ='Hong Gi lDong';   ``` 를 설정한 뒤에 버튼을 클릭해서 name변수의 값을 'Kim Gil Dong'으로 변경할 것입니다.  아래의 코드를 보세요. ( 완성된 코드는 아닙니다 )  

``` javascript 
const Home = () => {
  let name ='Hong Gi lDong';
  const handleClick =()=>{
    name ="Kim Gil Dong";
    console.log(name)
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
그리고 지역변수처럼 사용했던 변수들을 useState를 사용하여 state(상태)로 만들어줍니다. state란 컴포넌트안에 있는 데이터 또는 정보를 포함하고 있는 리액트 내장객체입니다. 그러니까 컴포넌트안에 있는 어떤것들이 있는지 알고 싶으면 이 state를 뒤지면 알수 있다는 얘기죠. 그리고 useState는 배열을 리턴합니다. 



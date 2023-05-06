###### 🌵 React_Tutorial_Part1


## 클릭이벤트를 삽입해 보겠습니다.  
사용하는 형식은, 
``` 
onClick = {클릭시 실행할 함수} 또는
onClick = { ()=>{ } } 
```


[ Home.js ]   
```javascript

const Home = () => {
  const handleClick =()=>{
    console.log('okay')
  }
  return ( 
    <div className="home">
      <h2>Home </h2>
      <button onClick={handleClick}>Click here</button>
    </div>
   );
}
 
export default Home;
```    
실행후에 버튼을 클릭하면 콘솔창에 'okay'가 출력된다.  


## 매개변수를 갖는 클릭이벤트
```javascript 
const Home = () => {
  const handleClick =()=>{
    console.log('okay')
  }
  const handleClick2 =(name)=>{
    console.log('Hello ' + name)
  }
  return ( 
    <div className="home">
      <h2>Home </h2>
      <button onClick={handleClick}>Click here</button> 
      <button onClick={handleClick2('Hong')}>Click here</button>
    </div>
   );
}
 
export default Home;

```  
이렇게 매개변수를 직접넣으면 클릭하지 않아도 콘솔창에 'Hello Hong'이 출력됩니다. 그래서 버튼을 클릭했을때 함수를 실행하고 이 함수에서 매개변수를 전달하는 방식으로 구현해 보겠습니다. 
``` javascript
 <button onClick={()=>{
          handleClick2('Hong')
      }}>Click here</button>
```  
이렇게 바꿔줍니다.  그러면 버튼을 클릭했을때 Hello, Hong이 출력됩니다. 

자 여기까지 이해가 되셨다면 하나 더 추가하도록 하겠습니다.  아래와 같이 변경해 주세요. 

``` javascript  
 const handleClick2 =(name,e)=>{
    console.log('Hello ' + name, e.target)
  }
  
<button onClick={(e)=>{
          handleClick2('Hong',e)
      }}>Click here</button>

```   

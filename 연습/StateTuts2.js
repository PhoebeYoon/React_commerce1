import { useState } from 'react'

const StateTuts2 = ()=>{

 const [inputValue , setInputValue] = useState('Enter anything');
 let changeContent = (event)=>{
    let newValue =event.target.value ;
    setInputValue(newValue)
 }
  return ( 
  <div> 
    <input type="text"  onChange={changeContent}/> <br />
    {inputValue}
  </div> 
  )
}
export default StateTuts2;  

또는  -------------

let changeContent =(event) =>{   대신 아래와 같이 사용해 볼 수 있다 

function changeContent(){
  let newValue = event.target.value
  setInputValue(newValue)
 }

 이것을 그냥 연습을 하기 위한것이고 위의 방법으로 사용하는 것이 좋다.  
  

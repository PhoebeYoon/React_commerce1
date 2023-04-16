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
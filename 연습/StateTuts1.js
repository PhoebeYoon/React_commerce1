import { useState } from 'react'

const StateTuts1= ()=>{

  const [count, setCount ] = useState(10);
  const IncrementNumber= ()=>{
    setCount(count+1)
  }
 

  return ( 
  <div> {count } 
  <button onClick={ IncrementNumber }>Increment</button></div> 
  )
}
export default StateTuts1;  
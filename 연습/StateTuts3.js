import { useState } from 'react'

const StateTuts3= ()=>{
  const [count, setCount ] = useState(100);
  const [showText, setShowText] = useState(false);
 
  return ( 
    <div>
      <h1>{count}</h1>
      <button onClick={ ()=>{ 
        setCount(count-1); 
        setShowText( !showText );
        }}>1씩 빼기 </button>
       {showText && <p>This is a text</p>}
    </div>
  )
}
export default StateTuts3; 

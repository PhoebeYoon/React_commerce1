
import { useState } from 'react'
// 1씩 감소와 && 연산자로 내용을 보이게도 안 보이게도 하는 것을 알아봅시다

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

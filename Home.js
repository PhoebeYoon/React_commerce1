import { useState } from 'react'

const Home = () => {
  const [a,b] =useState('Hong Gil Dong');
  const handleClick =()=>{
    console.log(a)
    b('Kim Gil Dong')
  }

  return ( 
    <div className="home">
      <h2>Home </h2>
      <p>{ a }</p>
      <button onClick={handleClick}>Click here</button> 
    
    </div>
   );
}

export default Home;
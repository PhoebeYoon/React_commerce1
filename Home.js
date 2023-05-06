import { useState } from 'react'

const Home = () => {
  // const [a,b] =useState('Hong Gil Dong');
  const [name, setName ] = useState('Hong Gil Dong')
  const [age, setAge] =useState(25)
  const handleClick =()=>{
    console.log(a)
     setName('Kim Gil Dong')
     setAge(27)
  }

  return ( 
    <div className="home">
      <h2>Home </h2>
      /* <p>{ a }</p> */
       <p>{name}</p>
      <p>{age} years old</p>
      <button onClick={handleClick}>Click here</button> 
    
    </div>
   );
}

export default Home;

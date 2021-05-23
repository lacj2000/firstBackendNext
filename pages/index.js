import { useState } from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
    </div>
  );
}


const Counter = () =>{
  const [counter, setCounter] = useState(0)
  
  const _addCounter = () =>{
    setCounter(counter+1)
  }
  
  return (
    <>
      <div>{ counter }</div>
      <button onClick={_addCounter} >Adicionar contador</button>
    </>
  )
}

export default Home;
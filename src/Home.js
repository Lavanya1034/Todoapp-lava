import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigation = useNavigate();
  function handleClick(){
    navigation('/todolist',true);
  }
  return (
    <div className='heading'>
        <h2 style={{color:"green",marginBottom:"10px"}}>Login Successful and Welcome</h2>
        <button onClick={handleClick}>Click to open Todo List page</button>
    </div>
  )
}

export default Home
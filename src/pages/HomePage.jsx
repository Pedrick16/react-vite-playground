import React, { useReducer, useState } from 'react'
import HomeComponents from '../components/HomeComponents'
import LikeComponents from '../components/LikeComponents'






const homePage = () => {

  const [count, setCount] = useState(0)
 
  const handleIncrement = () => {
    setCount((prevState) => prevState + 1 )
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1 )
  }





  return (

    <div className='container'>
   
    <HomeComponents count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />

    
    <div className='text-center'>
    <LikeComponents   />
    </div>
    
    

    
    </div>
  )
}

export default homePage
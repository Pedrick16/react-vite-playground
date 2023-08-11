import React, { useState } from 'react'
import HomeComponents from '../components/HomeComponents'
import ChildComponents from '../components/ChildComponents'
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
    <>
    <HomeComponents count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    
    <div className=' text-center'>
    <LikeComponents   />
    </div>

    
    </>
  )
}

export default homePage
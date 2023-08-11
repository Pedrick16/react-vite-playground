import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const LikeComponents = () => {
    const [isLiked, isSetLiked] = useState(false)
    const [count, setCount] = useState(0)

    const handleLiked = () => {
        isSetLiked(!isLiked)
        
        if(isLiked == true){
            setCount((prevState) => prevState - 1)
        }else{
            setCount((prevState) => prevState + 1)
        }
    }

    


  return (
    <>   
        <h1>likes Count: {count}</h1>
        {isLiked ? (
            <>
            <AiFillHeart color='red' size={50} onClick={handleLiked}  />
           
         
            <h4 style={{ color:"red"}}>Pogi mo</h4>
            </>
        ):(
            <AiOutlineHeart color='red' size={50} onClick={handleLiked} />
        )}

      
 
        
   
    </>
  )
}

export default LikeComponents
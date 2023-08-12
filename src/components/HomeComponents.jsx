

const HomeComponents = ({count , handleIncrement, handleDecrement}) => {
 
  return (
    <>

      <h1>Count: {count}</h1>
      <button className='btn btn-dark' onClick={handleIncrement}>Increment</button> 
      <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>


    

       

    </>


  )
}


export default HomeComponents
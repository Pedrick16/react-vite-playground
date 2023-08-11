

const HomeComponents = ({count , handleIncrement, handleDecrement}) => {
 
  return (
    <>
    <div className='container'>
      <h1>Count:{count}</h1>
      <button className='btn btn-dark' onClick={handleIncrement}>Increment</button> 
      <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>
    </div>

    

       

    </>


  )
}


export default HomeComponents
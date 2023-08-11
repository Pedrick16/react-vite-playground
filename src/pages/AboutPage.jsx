import { useRef, useState } from "react"



const AboutPage = () => {
  const [sum, setSum] = useState(0)
  const inputRefFirst = useRef()
  const inputRefSecond = useRef()

  const handleCompute = () => {
    setSum(0)
    const firstNumber = parseInt(inputRefFirst.current.value)
    const secondNumber = parseInt(inputRefSecond.current.value)

    if(isNaN(firstNumber) || isNaN(secondNumber)){
      alert("fields are required")
    } else if (firstNumber.toString().length <= 2 || secondNumber.toString().length <= 2 ){
      const sum = firstNumber + secondNumber
      setSum(sum)
    } else {
      alert("the input fields must have 2 digits")
    }

    inputRefFirst.current.value = '';
    inputRefSecond.current.value = '';

    
    


  }


  return (
    <div className="container pt-5">
      <input ref={inputRefFirst} type="number" className="form-control mb-2" placeholder="input num 1"/>
      <input  ref={inputRefSecond} type="number" className="form-control  mb-2" placeholder="input num  2"/>
      <button className="btn btn-success" onClick={ handleCompute }>Compute</button>
      {sum > 0 &&  (
        <h5>sum:{sum}</h5>
      ) }
    
    </div>
  )
}

export default AboutPage
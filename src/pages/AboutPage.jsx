import { useMemo, useRef, useState } from "react"



const AboutPage = () => {
  const [sum, setSum] = useState(0)

  const doubledNumber = useMemo(() => {
    return sum * 5
  },[sum])


  const inputRef = {
    first: useRef(),
    second: useRef()
  }

  const handleCompute = () => {
    setSum(0)
    const firstNumber = parseInt(inputRef.first.current.value)
    const secondNumber = parseInt(inputRef.second.current.value)

    if(isNaN(firstNumber) || isNaN(secondNumber)){
      alert("fields are required")
    } else if (firstNumber.toString().length <= 2 && secondNumber.toString().length <= 2 ){
      const sum = firstNumber + secondNumber
      setSum(sum)
    } else {
      alert("the input fields must have 2 digits")
    }

    inputRef.first.current.value = '';
    inputRef.second.current.value = '';

    
    


  }


  return (
    <div className="container pt-5">
      <input ref={inputRef.first} type="number" className="form-control mb-2" placeholder="input num 1"/>
      <input  ref={inputRef.second} type="number" className="form-control  mb-2" placeholder="input num  2"/>
      <button className="btn btn-success" onClick={ handleCompute }>Compute</button>
      {sum > 0 &&  (
        <h5>sum:{doubledNumber}</h5>
      ) }
    
    </div>
  )
}

export default AboutPage
import React, { useRef, useState } from 'react'

const TodoPage = () => {
    const [todo, setTodo] = useState('')
    const [tasks, setTaskList] = useState([])
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(true)
    const inputRef = {
        inputTodo: useRef()
    }

    const  handleSubmit = (event) => {

     


        event.preventDefault()
        if(todo){
            setTaskList([...tasks, todo])
            setTodo('')
            setDisabled(true)
            localStorage.setItem('tasks', JSON.stringify([...tasks, todo]));
        }else{
            setError('input must have value')
        }
       
    }

    const handleRemove = (id) => {
        const filteredTask = tasks.filter((task, index) => index !== id)
        setTaskList(filteredTask)
    }

    const handleEditTask = (id) =>{
        
       setDisabled(false)
    } 

    React.useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTaskList(JSON.parse(storedTasks));
        }
      }, []);
    




  return (
    <div className='container d-flex  justify-content-center mt-5 '>
        <div className='border p-5 '>
            <h1 className='text-center'>Todos</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type="text" placeholder='Enter your todo' value={todo} onChange={(event) => setTodo(event.target.value)} />
                    <p className='text-danger'>{error}</p>
                </div>
                <div className=' text-center my-2'>
                <button type='submit' className='btn btn-success'>submit</button>
                </div>
            </form>
            {tasks.length > 0 && (
                <>
                 {tasks.map((data, index) => (
                    <div className='py-2' key={index}>
                        <hr />
                        <input type="text"  value={data} disabled={disabled} />
                        <br />
                        <div className='btn-group mt-2 '>
                        <button className='btn btn-success ' onClick={() => handleEditTask(index)}>Edit Todo</button>
                        <button className='btn btn-danger ' onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                      </div>
                 ))}
                 </>
            

            )}
           
        </div>
       


    </div>
  )
}

export default TodoPage
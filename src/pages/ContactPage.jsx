import React, { useEffect, useState } from "react";



function ContactPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        setTodos(data)
      } catch (error){
        console.log(error)
      }
    
    }

    getPost()
   
   
   
  }, []);

  const handleRemove = (id) => {
    const filtered = todos.filter((data, index) => data.id !== id)
    setTodos(filtered)

  }

  return (
    <>
      {todos.length > 0 ? (
         <table className="table table-dark table-hover text-center">
         <thead>
           <tr>
             
             <th className="col-2">ID</th>
             <th className="col-7">Title</th>
              <th className="col-3">Action</th>
           </tr>
         </thead>
         <tbody>
           {todos.map((todo, index) => (
             <tr key={index}>
             
             <td>{todo.id}</td>
             <td>{todo.title}</td>
             <td><button className="btn btn-danger" onClick={() => handleRemove(todo.id)}>Remove</button></td>
           </tr>
           ))}
          
         </tbody>
       </table>

      ): (

        
        <div className="d-flex align-items-center justify-content-center">
        <h4 >Loading....</h4>
        </div>
      
    
      )}
     
    </>
  );
}

export default ContactPage;

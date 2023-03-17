import React, { useEffect, useState } from "react";
import "./toapp.scss";


function ToApp() {
    const [todo, setTodo] = useState([])

  const getItem = (item) =>{
    setTodo((prevState)=>{
      return [...prevState, item]
    })
  }

//   return (
//     <div className="toapp">
//       <AddTodo item={getItem} />
//       {todo && todo.map(todo=>(
//         <TodoItem item={todo}/>
//       ))}
      
//     </div>
//   );

const ToApp = (props) => {
    const [item, setItem] = useState("")
    const [todo, setTodo] = useState([])

    const getItem = (item) => {
        setTodo((prevState)=>{
            return [...prevState, item]
        })
    }

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.item(item)
    }

    return (
        <>
        <form method="post" onSubmit= { handleSubmit}>
            <input type="text" name="item" value={item} onChange={handleChange} placeholder="Enter Todoapp" />
            <button type="submit">Add Todo</button>
        </form>
        <div className="toapp">
          <AddTodo item={getItem} />
          {todo && todo.map(todo=>(
            <ToItem item={todo}/>
          ))}
          
        </div>
        </>
    );
      
}
}




export default ToApp;
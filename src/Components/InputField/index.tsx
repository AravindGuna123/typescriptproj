import React from 'react'

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
  return (
    <form onSubmit={(e)=>handleAdd(e)}>
        <input type="text" placeholder='Enter a task'
         value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit"></button>
    </form>
  )
}

export default InputField
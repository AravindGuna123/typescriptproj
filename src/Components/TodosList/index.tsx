import React from 'react'
import { Todo } from '../../model'

interface props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodosList = ({todos,setTodos}:props) => {
  return (
    <div></div>
  )
}

export default TodosList
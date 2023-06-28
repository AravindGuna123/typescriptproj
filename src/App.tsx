import React, { useState } from 'react';
import InputField from './Components/InputField';
import {Todo} from "./model"

import './App.css';
import TodosList from './Components/TodosList';

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])
  
  const handleAdd=(e:React.FormEvent)=>{
     e.preventDefault()
     if(todo){
      setTodos([...todos,{
        id:Date.now(),todo,isDone:false
      }])
     }
  }

  return(
    <div className='app=ccontainer'>
       <h1>Task App</h1>
       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
       <TodosList todos={todos} setTodos={setTodos}/>

    </div>
  )
}

export default App;

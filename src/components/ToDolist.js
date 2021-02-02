import React,{ useState } from 'react'
import Todo from './Todo'
import ToDoForm from './ToDoForm'

function ToDolist() {

    let [todos,setTodos] = useState([])

    let addTodo =todo=>{
        if(!todo.text || /^\s*S/.test(todo.text)){          //if noone types in        a            ltetter notihin showsup or nothing will be trcorded 
            return

        }

        const newtodo=[todo,...todos]

        setTodos(newtodo);
        console.log(newtodo);

    }
    let completeTodo=id=>{

        let updatedTodo=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodo);
    }



    const removeTodo=id=>{

    const removedArray= [...todos].filter(todo=>todo.id!==id);
    setTodos(removedArray);

};


    const editTodo=(id,newValue)=>{

        setTodos(prev=>prev.map(item=>(item.id===id? newValue:item)))


    }


    const CompleteTodo=id=>{
        let updatetodo=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        });
        setTodos(updatetodo)
    }


    return (
        <div>

        <h1> Whats the plan for today?</h1>
        <ToDoForm onSubmit={addTodo}> </ToDoForm>
        
        <Todo todos={todos} completeTodo={CompleteTodo} editTodo={editTodo} removeTodo={removeTodo} />
            
      
            
        </div>
    )
}

export default ToDolist

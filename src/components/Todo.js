import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

import {RiCloseCircleLine } from 'react-icons/ri'
import {TiEdit } from 'react-icons/ti'

function Todo(props) {
const [edit, setedit] = useState({id:null,value:''});


const submitUpdate=value=>{

    props.editTodo(edit.id,value);
setedit({
    id:null,
    value:''
});


}



if(edit.id){
    return <ToDoForm edit={edit} onSubmit={submitUpdate}></ToDoForm>
}




    return props.todos.map((todo,index)=>(

        <div className={todo.isComplete? 'todo-row complete': 'todo-row'} key={index}>                


        <div key={todo.id} onClick={()=>props.completeTodo(todo.id)}>

        {todo.text}

        </div>
        <div className="icons">
            <RiCloseCircleLine onClick={()=>props.removeTodo(todo.id)} />
            
            <TiEdit onClick= {()=> setedit({id:todo.id,value:todo.text})}/>

        </div>

        </div>
    ));
    }
export default Todo;

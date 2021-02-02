import React ,{useState, useEffect , useRef} from 'react'




 

function ToDoForm(props) {
    const [input, setinput]= useState("");

  
const inputRef=useRef(null);

useEffect(()=>{
    inputRef.current.focus()
});


  
    const handleChange= e =>{                //handles the change in the txt box 
    setinput(e.target.value)
   } 
    
   


    const Handlesubmit=e=>{
       
       
        e.preventDefault();             //prevent refreshing
            
        
        props.onSubmit({                        
            id: Math.floor(Math.random()*10000),
            text:input
        })




     setinput('');          //resets the text box when clicked "todo button "   can                     only happen in form
    }




   
    return (
        <div>

        
        {props.edit? (
<div>
<input type="text" 
placeholder="update your value"
value={input}  
name="text"
ref={inputRef}
className="todo-input" onChange={handleChange}/>

<button className="todo-button edit" onClick={Handlesubmit}> UPDATE</button>
</div>
):  
<div>
<form className="todo-form" onSubmit={Handlesubmit}>
<input type="text" 
placeholder="enter the task"
value={input}  
name="text"
ref={inputRef}
className="todo-input" onChange={handleChange}>
    
</input>
<button className="todo-button"> Add todo</button>
</form> 
</div>
}
        
      

            
        </div>
    
    )
}

export default ToDoForm

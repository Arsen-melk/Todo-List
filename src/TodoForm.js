import { useState } from "react";

function TodoForm({onAdd}){
    const [text,setText]=useState("")
    return(
        <div className="todoForm">
            <form onSubmit={(e) =>{
                e.preventDefault();
                onAdd(text);
                setText("")
            }}>
                <input type="text" value={text} placeholder="Type here..." 
                    onChange={(evt) =>{setText(evt.target.value)
                } }/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;
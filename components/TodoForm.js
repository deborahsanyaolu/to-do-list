import React from 'react'
import { useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState("")      //Function below is to stop the refresh everytime "Add" button is hit 

    const handleChange = e => { 
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();                     //Needs to be added to the form as an onSubmit func//

        props.onSubmit({                      
             id: Math.floor(Math.random() * 10000),      //Will generate a random number within 10000 or less range
             text: input //Will be whatever is typed in
         });

        setInput(""); 
        
    };

    return ( //create form below//
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a to do..." 
            value={input} 
            name="text" 
            className="todo-input"
            onChange={handleChange}
            />
            <button className="todo-button">Add</button>
        </form>
        )
}



export default TodoForm
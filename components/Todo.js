import React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id:null,
            value: ''
        });
    };

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) =>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
        <RiCloseLine
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
        />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.txt})}
        className='edit-icon'/>
        </div>
    </div>  //Func Will check if the to do is completed or not
  ));
}

export default Todo
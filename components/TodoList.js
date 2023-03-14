import React from 'react';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

//add new to do - code will make sure if nothing is typed out i.e. hi h    ow are you... 'hi how are you' will be displayed ignoring the spaces.
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test (todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]; //Will be logged into console in real time
        setTodos(newTodos);
    };

//edit to do

const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test (newValue.text)) {
        return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
};


//remove to do
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

//to do completed
const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
}

  return (
    <div>
        <h1>Today's Plan</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList;
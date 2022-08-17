import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = ( ) => {

    const [ todos, dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);

    const handleTodo = ( todo ) => {
        const action = {
            type : 'Add Todo',
            payload : todo
        }
        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        console.log(id)
        const action = {
            type : 'Remove Todo',
            payload : id
        }
        dispatch( action )
    }

    const handleToggleTodo = ( id ) => {
        // console.log(id)
        dispatch({
            type : 'Toggle Todo',
            payload : id
        })
    }

    

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}

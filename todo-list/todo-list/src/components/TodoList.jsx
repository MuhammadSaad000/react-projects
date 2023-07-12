import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({tasks, toggleTodo, deleteTodo}) => {
    return (
        <>
             <ul>
                {tasks.length === 0 && "No tasks"}
                {tasks.map(todo => {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                    )
                })}
            </ul>
        </>
    );
}

export default TodoList;

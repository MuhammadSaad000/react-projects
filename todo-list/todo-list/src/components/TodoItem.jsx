import React from 'react';

const TodoItem = ({isDone, id, title, toggleTodo, deleteTodo}) => {
    return (
        <>
            <li>
                <label>
                    <input type='checkbox' checked={isDone} onChange={e => toggleTodo(id, e.target.checked)} />
                    {title}
                </label> &nbsp; &nbsp;

                <button onClick={() => deleteTodo(id)}>Delete</button>
            </li>
        </>
    );
}

export default TodoItem;

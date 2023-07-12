import React,{useState} from 'react';

const AddForm = ({addTodo}) => {

    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo === "") return
        addTodo(todo)
        setTodo("")
    }


    return (
        <div>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>  
            <button type='submit' onClick={handleSubmit} > Add Task </button>

        </div>
    );
}

export default AddForm;

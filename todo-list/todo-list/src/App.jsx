import React,{useEffect, useState} from 'react';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import "./App.css"
const App = () => {
    const [tasks, setTasks] = useState(
      () => {
       const localItems = localStorage.getItem("Todos")
       if (localItems == null) 
         return []
        return JSON.parse(localItems)
      }
    )


    useEffect(() => { 
      localStorage.setItem("Todos", JSON.stringify(tasks))
    },[tasks])

    function addTodo(title)
    {
      setTasks((currentTasks) => {
        return [...currentTasks, {
            id : crypto.randomUUID(),
            title ,
            isDone : false
        }]
    })
    }

    

    const toggleTodo = (id, isDone) => {
        setTasks(currentTasks => {
            return currentTasks.map(todo => {
                if (todo.id === id){
                    return {...todo, isDone}
                }
                return todo
            })
        })
    }


    const deleteTodo = (id) => {
        setTasks(currentTasks => {
            return currentTasks.filter(todo => todo.id !== id)
        })
    }

    return (
      <>
        <div className='main-block'>
          <h2> Todo List </h2>
          <AddForm addTodo={addTodo}/>
          <TodoList tasks={tasks} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </div>


      </>
  );
}

export default App;

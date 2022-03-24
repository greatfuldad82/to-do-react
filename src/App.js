import { useState } from 'react';
import "./App.css";
import Task from './components/Task';


const tasks = [
    {
        id: 1,
        description: 'buy steak'
    },
    {
        id: 2,
        description: 'hit the workout'
    },
    {
        id: 3,
        description: 'have a great day'
    },
    {
        id: 4,
        description: 'learn to rest'
    },
];

function App() {
    const [todos, setTodos] = useState(tasks);
    const [inputValue, setInputValue] = useState("");
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };  

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { description: inputValue }]);
    };

    return (
      <>
          <div className='navbar'>myNavbar</div>
          <div className='App'>
            <h1>My Todo List</h1>
            <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="task"
                        id="user-input"
                        value={inputValue}
                        onChange={handleChange}
                    />
               <input type="button" value="Add Task" />
            </form>
              {todos.map((task, index) => (
                <Task taskInfo={task} key={index} />
            ))}
          </div>
        </>
    );
}

export default App;

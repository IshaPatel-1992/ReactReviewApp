import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // State for the current input
  const [input, setInput] = useState('');

  // Function to add a new todo
  const addToDo = () => {
    if (input.trim() !== '') {
      // Add the new to-do and reset the input
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <>
      <div>
        <h1>Hello! This is my first React App</h1>        
        <form onSubmit={(e) => e.preventDefault()}>
          <label>To do: </label>
          {/* Input field for the to-do */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task"
          />
          {/* Button to add the to-do */}
          <input
            type="button"
            value="Add Todo"
            onClick={addToDo}
          />
        </form>
        
        {/* Display the list of to-dos */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
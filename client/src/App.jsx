import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // State for the current input
  const [input, setInput] = useState('');

  // define maximum length for the text input
  const maxLength = 50;

  
  const [error, setError] = useState(''); 

  // Function to add a new todo
  const addToDo = () => {
    if (input.trim().length === 0) {
      setError('To-do cannot be empty.');
    } else if (input.length > maxLength) {
      setError(`To-do cannot exceed ${maxLength} characters.`);
    } else {
      setTodos([...todos, input]);
      setInput('');
      setError(''); // Clear any previous error message
    }
  };

  return (
    <>
      <div>
        <h1>Hello! This is my first React App {maxLength}</h1>        
        <form onSubmit={(e) => e.preventDefault()}>
          <label>To do: </label>
          {/* Input field for the to-do */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task"
             maxLength={maxLength} // Limit the input length at the HTML level
          />
          {/* Button to add the to-do */}
          <input
            type="button"
            value="Add Todo"
            onClick={addToDo}
          />
          {/* Display validation error */}
          {error && <p className="error">{error}</p>}
        </form>
        
        {/* Display the list of to-dos */}
        <div class="todo-container">
        <ul classname="todo-list">
          {todos.map((todo, index) => (
            <li classname="todo-item" key={index}>{todo}</li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;
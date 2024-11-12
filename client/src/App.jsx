import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Form(props) {
  const maxLength = 50;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>To do: </label>
      {/* Input field for the to-do */}
      <input
        type="text"
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        placeholder="Enter a new task"
        maxLength={maxLength}
      />
      {/* Button to add the to-do */}
      <input
        type="button"
        value="Add Todo"
        onClick={props.addTodo} // Use the addTodo function from props
      />
      {/* Display validation error */}
      {props.error && <p className="error">{props.error}</p>}
    </form>
  );
}

function App() {
  const maxLength = 50;
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const addTodo = () => {
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
        <h1>Hello! This is my first React App</h1>

        {/* Pass addTodo, error, and setError as props */}
        <Form todos={todos} setTodos={setTodos} input={input} setInput={setInput} addTodo={addTodo} error={error} />

        {/* Display the list of to-dos */}
        <div className="todo-container">
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li className="todo-item" key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

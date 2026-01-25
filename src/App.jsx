import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import UserList from './UserList'; // Import the component
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0)
  const names = ['Alice','Bob','Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);
  const users = ['Alice', 'Bob', 'Charlie'];

  const isLoggedIn = true; // Change to false to test the other message

  return (
    <>
      <Counter />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
       <h2>User List</h2>
       <UserList users={users} />
    </div>
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      <UserList users={users} />
      <Counter />
    </div>
    </>
  )
}

export default App

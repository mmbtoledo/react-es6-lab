import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import Counter from './Counter'
import UserAPI from './UserAPI'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [count, setCount] = useState(0)

  const names = ['Alice','Bob','Charlie']
  const doubled = names.map(name => name.length * 2)
  console.log('Doubled lengths:', doubled)

  const person = { name: 'Alice', age: 25 }
  const { name, age } = person
  console.log('Destructured:', name, age)

  const users = ['Alice', 'Bob', 'Charlie']

  return (
    <>
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
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <h2>User List</h2>
        <UserList users={users} />
      </div>

      <div>
        {isLoggedIn ? (
          <>
            <p>Welcome back!</p>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </>
        ) : (
          <>
            <p>Please log in</p>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </>
        )}
      </div>

      {isLoggedIn && <Counter />}
      {isLoggedIn && <UserAPI />}
    </>
  )
}

export default App

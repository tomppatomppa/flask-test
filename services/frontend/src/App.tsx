import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type User = {
  email: string
  id: number
}
function App() {
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const ping = async () => {
      const response = await fetch('/api/users')
      const users = await response.json()

      setAllUsers(users)
    }
    ping()
  }, [])

  const addNew = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@email.com' + new Date().getTime() }),
    }

    const response = await fetch('/api/users', requestOptions)
    const result = await response.json()

    if (!response.ok) {
      throw new Error(`Request failed with status: ${JSON.stringify(result)}`)
    }
    setAllUsers([...allUsers, result])
  }

  return (
    <>
      <div>
        {allUsers.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => addNew()}>Add user</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

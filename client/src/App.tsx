import { useState } from 'react'
import './App.css'
import Screen from './components/Screen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hotel Certificate Verification App</h1>
      <Screen />
    </div>
  )
}

export default App

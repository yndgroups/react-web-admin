import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <img src={reactLogo} className="logo" alt="Vite logo" />
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        </div>
    </>
  )
}

export default App

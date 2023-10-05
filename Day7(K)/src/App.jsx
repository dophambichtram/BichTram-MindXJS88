import { useState } from 'react'
import './App.css'
import { Header } from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Home_container__bCOhY'>
        <Header />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Navbar } from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
    </>
  )
}

export default App
// q+Enter 
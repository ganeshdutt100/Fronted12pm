
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import { Navbar } from "./components/Navbar"
import Section1 from './components/Section1';
import Card from './components/Card';

function App() {
  

  return (
    <>
      
      <Navbar/>
     <Section1/>
  <div className='d-flex flex-wrap'>
  <Card/>
     <Card/>
     <Card/>
  </div>
    </>
  )
}

export default App

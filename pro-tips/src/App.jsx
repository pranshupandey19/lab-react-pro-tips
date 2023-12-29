import './App.css'
import Contact from './components/Contact'
import Form from './components/Form'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
    </>
  )
}

export default App

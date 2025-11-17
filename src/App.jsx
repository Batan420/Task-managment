import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Navbar.jsx'
import Task from './Components/Task.jsx'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/home/task" element={<Task />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
</>
  )
}

export default App

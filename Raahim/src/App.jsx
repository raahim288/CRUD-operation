import { Button } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Forms from './Forms'
import Edit from './Edit'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path={'/'} element={<Forms/>}/>
      <Route path='Home' element={<Home/>}/>
      <Route path='Edit/:id' element={<Edit/>}/>
      
     </Routes>
    </div>
  )
}

export default App

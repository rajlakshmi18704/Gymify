import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="400px" sx={{width:{xl:"14460px"}}} m="auto">
    <Navbar/>

 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
    </Routes>
 
   
    <Footer/>
   
    </Box>
  )
}

export default App

import React, { useState } from 'react'
import '../App.css'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
function Home() {
  const [bodyPart,setBodyPart]=useState("all")
  const [exercises,setExercises]=useState([])
  useState(
  )
  return (
    <Box>
  <HeroBanner/>
  <SearchExercises setExercises={setExercises} bodyPart={bodyPart}
  setBodyPart={setBodyPart}/>
  <Exercises setExercises={setExercises} bodyPart={bodyPart}
  setBodyPart={setBodyPart}/> 
    </Box>
  )
}

export default Home

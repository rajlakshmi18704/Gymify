import React, { useState } from 'react'
import '../App.css'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
function Home() {
  const [bodyPart,setBodyPart]=useState("all")
  const [exercises,setExercises]=useState([])
 console.log(bodyPart)
  return (
    <Box>
  <HeroBanner/>
  <SearchExercises setExercises={setExercises} bodyPart={bodyPart}
  setBodyPart={setBodyPart}/>
  <Exercises setExercises={setExercises} bodyPart={bodyPart}
  exercises={exercises}/> 
    </Box>
  )
}

export default Home

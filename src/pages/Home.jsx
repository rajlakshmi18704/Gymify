import React, { useState } from 'react'
import '../App.css'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
function Home() {
  useState(
  )
  return (
    <Box>
  <HeroBanner/>
  <SearchExercises/>
  <Exercises/> 
    </Box>
  )
}

export default Home

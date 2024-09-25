import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
function Navbar() {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
      <img src="https://cdn-icons-png.freepik.com/256/14989/14989714.png?ga=GA1.1.836803609.1726631433&semt=ais_hybrid" alt='logo'
      style={{
height:"50px", width:"50px",margin:"0 20px"
      }}
       />
      </Link>
     
    <Stack 
     direction="row"
     gap="40px"
     fontFamily="Alegreya"
     fontSize="24px"
     alignItems="flex-end"
    
    >
    <Link to="/" style={{
      textDecoration:"none",
      color:"#FF00FF" ,borderBottom:"3px solid #800080"
    }}>Home</Link>
    <a href="#exercises" style={{textDecoration:"none",color:"#3A1212"}}>Exercises</a>
    </Stack>
   
    </Stack>
  )
}

export default Navbar

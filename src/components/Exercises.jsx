
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
function Exercises({ exercises, setExercises, bodyPart }) {
  return (
    <Box id="exercises" sx={{
mt:{lg:"110px"}

    }} p="20px">
     <Typography variant="h3" mb="46px">
     Showing Results
     </Typography>
     <Stack direction="row" sx={{
      gap:{lg:"110px",xs:"50px"}
     }} flexWrap="wrap" justifyContent="center">

     </Stack>
  
    </Box>
  )
}

export default Exercises
Exercises
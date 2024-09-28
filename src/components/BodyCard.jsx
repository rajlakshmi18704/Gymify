import React, { useContext } from 'react';
import ExerciseCard from './ExerciseCard';
import { Box,Stack } from '@mui/material';
import BodyPartCard from './BodyPartCard';

  

const BodyCard = ({ data,  setBodyPart, bodyPart,isBodyParts }) => {
return (
  <Box className='BodyCard ' >
  
 {data.map((item) => (
    <Box 
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 20px" // Adjust spacing between items
    >
   
   {isBodyParts?<BodyPartCard item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />:<ExerciseCard
   exercise={item}
   />}


    </Box>
  ))}


</Box>
 
)
}

export default BodyCard;

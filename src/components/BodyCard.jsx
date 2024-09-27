import React, { useContext } from 'react';

import { Box,Stack } from '@mui/material';
import BodyPart from './BodyPartCard';

  

const BodyCard = ({ data, bodyParts, setBodyPart, bodyPart }) => {
return (
  <Box className='BodyCard ' >
  
 {data.map((item) => (
    <Box 
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 20px" // Adjust spacing between items
    >
      <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </Box>
  ))}


</Box>
 
)
}

export default BodyCard;

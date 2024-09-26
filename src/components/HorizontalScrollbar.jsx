import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
function HorizontalScrollbar({data,bodyPart,setBodyPart}) {
  console.log(data)
  return (
    <div>
    
    {data.map((item)=>(
      <Box key={item || item.id}
      itemId={item.id || item}
      title={item.id || item}
m="0 40px"
      >
<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    ))}
    </div>
  )
}

export default HorizontalScrollbar

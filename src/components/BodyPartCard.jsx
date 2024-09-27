import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

function BodyPartCard({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
    className="bodyPart"
   
    onClick={() => {
      setBodyPart(item);
   
    }}>
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="16px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPartCard;

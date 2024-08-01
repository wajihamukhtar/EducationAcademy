import { Box, Grid, Typography } from '@mui/material';
import React from 'react';


const Card = (prop) => {
  return (
    <div className='shadow-lg mx-auto '>
    <div>{prop?.img} </div>
    <h5 className='px-2'>{prop?.heading}</h5>
    <p className='px-2'>{prop?.para}</p>
  </div>
    
  );
};

export default Card;

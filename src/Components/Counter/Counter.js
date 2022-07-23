import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

function Counter() {
  return (
    <ButtonGroup
    orientation="vertical"
    aria-label="vertical outlined button group"
    className="counter"
  >
    <Button key="one" startIcon={<AddCircleOutlineIcon/>} className="counter-plus" />
    <Typography className="counter-text">One</Typography>
    <Button key="two"  startIcon={<RemoveCircleOutlineIcon/>} className="counter-minus"/>
  </ButtonGroup>
  )
}

export default Counter
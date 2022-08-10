import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const PantryPopup = (props) => {
  const {handleClose} = props;

  return (
    <Box id="pantry-popup" sx={{...style, width: 800}}> 
      <CloseIcon onClick={handleClose}/>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        This is the pantry popup
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  )
}

export default PantryPopup;
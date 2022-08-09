import React, { useState } from 'react';
import { Container, Grid, Paper, styled, ButtonBase, Typography, Icon } from '@mui/material';

const PantryPopup = (props) => {
  return (
    <Container id="pantry-popup"> 
      {/* <link rel="stylesheet" href="./search.css" /> */}
      <span className="close-icon">
        x
      </span>
      This is the pantry popup
    </Container>
  )

  // return (
  //   <Container id="pantry-popup"> 
  //     <span className="close-icon" onClick={props.handleClose}>
  //       x
  //     </span>
      
  //     <Container id="">

  //     </Container>
  //   </Container>
  // )
}

export default PantryPopup;
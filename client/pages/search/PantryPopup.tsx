import React, {useState} from 'react';
import {
  Container,
  Grid,
  Paper,
  styled,
  ButtonBase,
  Typography,
  Icon,
  makeStyles,
} from '@mui/material';

const PantryPopup = (props) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  return (
    <Container id="pantry-popup">
      {/* <link rel="stylesheet" href="./search.css" /> */}
      <span className="close-icon">x</span>
      This is the pantry popup
    </Container>
  );

  // return (
  //   <Container id="pantry-popup">
  //     <span className="close-icon" onClick={props.handleClose}>
  //       x
  //     </span>

  //     <Container id="">

  //     </Container>
  //   </Container>
  // )
};

export default PantryPopup;

// import * as React from 'react';
// import {HashRouter, Routes, Route} from 'react-router-dom';
// // MUI
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import {createTheme, ThemeProvider} from '@mui/material/styles';

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         FOOD
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       firstName: data.get('firstName'),
//       lastName: data.get('lastName'),
//       username: data.get('email'),
//       password: data.get('password'),
//     });
//     fetch('https://reqres.in/api/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/JSON',
//       },
//       body: JSON.stringify({
//         firstName: data.get('firstName'),
//         lastName: data.get('lastName'),
//         username: data.get('email'),
//         password: data.get('password'),
//       }),
//     })
//       .then((response) => response.json())
//       .then((respy) => {
//         console.log(respy);
//       });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
{
  /* <TextField
  required
  fullWidth
  id="lastName"
  label="Last Name"
  name="lastName"
  autoComplete="family-name"
/>; */
}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{mt: 3, mb: 2}}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="center">
//               <Grid item>
//                 <Link href="/" variant="body2">
//                   {'Just need to sign in?'}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{mt: 5}} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FOOD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('email'),
      password: data.get('password'),
    });
    fetch('https://reqres.in/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        username: data.get('email'),
        password: data.get('password'),
      }),
    })
      .then((response) => response.json())
      .then((respy) => {
        console.log(respy);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://tinyurl.com/pancky)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
              <DinnerDiningIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{mt: 3}}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/" variant="body2">
                    {'Just need to sign in?'}
                  </Link>
                </Grid>
              </Grid>
            </Box>{' '}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

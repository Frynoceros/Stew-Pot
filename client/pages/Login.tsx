import * as React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import logo from '../assets/logo.png';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  // declare variable to help use useNavigate hook for redirect
  let navigate = useNavigate();
  const navigateToSearch = () => {
    // navigate to /search
    navigate('/search');
  };
  // capture form data
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    // send post request to verify user info
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      }),
    })
      // check if info is correct or not
      .then((response) => response.json())
      .then((info) => {
        if (info !== 'Rejected') {
          // if successful then sign in
          console.log('sign-in');
          navigateToSearch();
        } else {
          //otherwise give error
          console.log('rejected');
          window.alert('Incorrect username or password');
        }
      })
      .catch((err) => console.log(err));
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
            backgroundImage: 'url(https://tinyurl.com/foodIngredients)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            height: '100vh',
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
              <img src={logo} style={{height: '100%', width: '100%'}}></img>
            </Avatar>
            <Typography component="h1" variant="h5">
              Stew Pot
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{mt: 1}}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/login">{'Forgot password?'}</Link>
                </Grid>
                <Grid item>
                  <Link to="/signup">{'Need to sign up?'}</Link>
                </Grid>
              </Grid>
              <Copyright sx={{mt: 5}} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

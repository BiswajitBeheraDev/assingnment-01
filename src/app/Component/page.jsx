"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import LoginInput from '../Login/page';
import { Checkbox, FormControlLabel, Link } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { GitHub, Google } from '@mui/icons-material';
import { Box, Grid } from "@mui/material"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

  const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (email === '' && password === '') {
      alert('Login sucessful')
        window.location.assign('/About')
    } else {
      alert('Invalid login');
    }
  };

  return (
    <Grid container style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <img src='https://permata.info/assets/img/illustrations/auth-login-illustration-light.png'  style={{ maxWidth: "100%", maxHeight: "100%", height: "auto" }} />
      </Grid>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <Box sx={{ width: '100%', maxWidth: 360, mx: 'auto' }}>
          <h1>Welcome to Materialize! <span><WavingHandIcon style={{ transform: "rotate(-90deg)", color: "yellow" }} /></span></h1>
          <p style={{ fontSize: "10px" }}>Please sign in to your account and start the adventure</p>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <LoginInput label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <LoginInput label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                    />
                  }
                  label="Remember me" />
                <Link href="#" variant="body2" style={{ marginLeft: "70px" }}>
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth >Login</Button>
              </Grid>
            </Grid>
          </form>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <h2>New on our platform?
              <Link href="#" variant="body2" style={{ marginLeft: "10px" }}>Create an account</Link>
            </h2>
          </div>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <p>__________or__________</p>
          </div>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <FacebookOutlinedIcon style={{ color: "blue", marginLeft: "10px" }} />
            <TwitterIcon style={{ color: "blue", marginLeft: "10px" }} />
            <GitHub style={{ marginLeft: "10px" }} />
            <Google style={{ color: "red", marginLeft: "10px" }} />
          </div>
        </Box>
      </Grid>
    </Grid>
    
  );
};

export default LoginForm;

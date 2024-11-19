"use client";
import { useState } from "react";
import { Button, Checkbox, FormControlLabel, Link, Box, Grid } from "@mui/material";
import LoginInput from "./page";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { GitHub, Google } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      alert("Login successful");
      window.location.assign("/About");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <Grid container style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Grid item xs={12} md={6} style={{ textAlign: "center", padding: "20px" }}>
       <Image
          src="/login.png"
          alt="Login illustration"
          width={1000}
          height={1000}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>

      <Grid item xs={12} md={6} style={{ textAlign: "center", padding: "20px" }}>
        <Box sx={{ width: "100%", maxWidth: 360, mx: "auto" }}>
          <h1>
            Welcome to Materialize!{" "}
            <span>
              <WavingHandIcon style={{ transform: "rotate(-90deg)", color: "yellow" }} />
            </span>
          </h1>
          <p style={{ fontSize: "12px" }}>Please sign in to your account and start the adventure</p>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <LoginInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <LoginInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>

          <div style={{ marginTop: "16px" }}>
            <h2>
              New on our platform?
              <Link href="#" variant="body2" style={{ marginLeft: "10px" }}>
                Create an account
              </Link>
            </h2>
          </div>

          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <p>__________or__________</p>
          </div>

          <div style={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "10px" }}>
            <FacebookOutlinedIcon style={{ color: "blue" }} />
            <TwitterIcon style={{ color: "blue" }} />
            <GitHub />
            <Google style={{ color: "red" }} />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;

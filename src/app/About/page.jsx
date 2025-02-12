"use client";

import React from 'react';
import { Button, Grid } from "@mui/material";
import Header from "../Components/page";
import { useHighContrast } from '../Highconstract_toogle/layoutt';
import Image from 'next/image';

const Aboutus = () => {
  const { highContrast } = useHighContrast();

  return (
    <>
      <Header />
      <div>
        <h1 style={{ fontSize: "2em", fontWeight: "bold", maxWidth: "600px" }}>
          27 Best About Us and About Me Page 
          Examples of 2023 [+Templates]
        </h1>
        <Grid item xs={6}>
          <Button
            variant="contained"
            style={{ backgroundColor: highContrast ? '#1909ad' : 'red' }}
          >
            Download Now: Free About Us Example
          </Button>
        </Grid>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.5" }}>
            Your about page summarizes your history, values, and mission - all in one place.
            That is a tall order for just a few paragraphs. If you are feeling stuck, turn to these
            about-page examples for inspiration.
          </p>
          <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
            <Image
                src="/onehand.png"
                alt="Laptop held in hand"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}



export default Aboutus;

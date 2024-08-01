"use client";
import { Box } from "@mui/material";
import Header from "../Header/page";
import MyApp from "../Pages/page";

const Logo = () => (
  <div>
    <MyApp />
    <Header />
    <h1 style={{ fontSize: "2em", fontWeight: "bold",marginTop:"20px" }}>
      Find the perfect Logo for Dude
    </h1>
    <Box style={{ marginTop: "100px", textAlign: "center"}}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
          <img
            src="img-.1.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="img-2.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="img-3.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="img-4.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <img
            src="img-5.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="img-6.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="img-7.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <img
            src="img-8.jpg"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
      </div>
    </Box>
  </div>
);

export default Logo;

"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import Header from "../Components/page";

const Logo = () => (
  <div>
    <Header />
    <h1 style={{ fontSize: "2em", fontWeight: "bold", marginTop: "20px", }}>
      Find the perfect Logo for Dude
    </h1>

    <Box style={{ marginTop: "100px", textAlign: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          {["img-.1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg"].map((src, index) => (
            <Image
              key={index}
              src={`/${src}`}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                padding: "5px",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          {["img-5.jpg", "img-6.jpg", "img-7.jpg", "img-8.jpg"].map((src, index) => (
            <Image
              key={index}
              src={`/${src}`}
              alt={`Logo ${index + 5}`}
              width={100}
              height={100}
              style={{
                objectFit: "cover",
                padding: "5px",
              }}
            />
          ))}
        </div>
      </div>
    </Box>
  </div>
);

export default Logo;

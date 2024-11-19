"use client"
import Image from "next/image";
import Header from "../Components/page";

const Blog = () => (
  <div>
    <Header />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "10px" }}>
      <h1 style={{ fontSize: "2em", fontWeight: "bold" }}> Website</h1>
      <p>Tips and Tutorials on how to build better websites</p>
    </div>
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
    <Image
        src="/lcp-img.png"
        alt="Tips on how to build better websites"
        width={600}
        height={400}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  </div>
);

export default Blog;

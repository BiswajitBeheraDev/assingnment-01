"use client"
import MyApp from "../Pages/page";
import Header from "../Header/page";

const Blog = () => (
  <div>
    <MyApp />
    <Header />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "10px" }}>
      <h1 style={{ fontSize: "2em", fontWeight: "bold" }}> Website</h1>
      <p>Tips and Tutorials on how to build better websites</p>
    </div>
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <img src="https://www.iitms.co.in/blog/img/lms-vs-cms-d.webp" 
      style={{ width: "100%", height: "auto" }} />
    </div>
  </div>
);

export default Blog;

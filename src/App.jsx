import React from "react";
import Header from "./conponents/Header";
import Content from "./conponents/Content";
import Footer from "./conponents/Footer";

function App() {
  const title = "Welcome to My Website";
  const year = new Date().getFullYear();

  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer year={year} />
    </div>
  );
}

export default App;

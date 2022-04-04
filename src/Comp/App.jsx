import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../index.css";
import Form from "./Form";
const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import "./App.css";

// components
import Layout from "../Layout/Layout";
import Router from "../../router/Router";
import Navbar from "../../components/Navbar/Navbar.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;

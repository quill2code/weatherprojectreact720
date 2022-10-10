import React from "react";

import "./App.css";

import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />

        <Footer />
      </div>
    </div>
  );
}

import React from "react"
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Router";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

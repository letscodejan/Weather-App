import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 className="header1">Weather App</h1>
        <Weather defaultCity="Edmonton" />
        <footer>
          This project was coded by{" "}
          <a
            className="Footer-Source-Code"
            href="https://www.shecodes.io/students/173-janice-asumbrado"
            target="_blank"
            rel="noopener noreferrer"
          >
            Janice Asumbrado
          </a>{" "}
          and is{" "}
          <a
            className="Footer-Source-Code"
            href="https://github.com/jnasmbrd/react-weatherapp-finalproject.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source code
          </a>{" "}
          in Github and
          <a
            className="Footer-Source-Code"
            href="https://happy-swirles-d2eea1.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted
          </a>{" "}
          in Netlify .
        </footer>
      </div>
    </div>
  );
}

export default App;

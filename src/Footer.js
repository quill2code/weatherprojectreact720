import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by{" "}
        <a
          href="https://www.joanaramosparente.pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joana Parente
        </a>{" "}
        it's{" "}
        <a
          href="https://github.com/jrparente/shecodes-react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://shecodes-react-weather-app-jp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </footer>
  );
}

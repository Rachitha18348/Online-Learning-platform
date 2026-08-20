import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { CourseProvider } from "./Context/CourseContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <CourseProvider>

        <App />

      </CourseProvider>

    </BrowserRouter>

  </React.StrictMode>

);
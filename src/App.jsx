import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";

import "./App.css";

function App() {

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {/* Main area below Navbar */}
      <div className="main-layout">

        {/* Sidebar */}
        <Slidebar />

        {/* Page content */}
        <main className="page-content">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <Dashboard search={search} />
              }
            />

            <Route
              path="/dashboard"
              element={
                <Dashboard search={search} />
              }
            />

            {/* My Courses */}
            <Route
              path="/mycourses"
              element={
                <MyCourses />
              }
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;
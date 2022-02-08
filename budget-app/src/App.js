import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Layout from "./views/layout/Layout";
import Operation from "./views/operation/Operation";
import Dashboard from "./views/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/operation/:id" element={<Operation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

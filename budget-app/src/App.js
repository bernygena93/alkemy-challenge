import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Layout from "./views/layout/Layout";
import Operation from "./views/operation/Operation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/operation" element={<Operation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

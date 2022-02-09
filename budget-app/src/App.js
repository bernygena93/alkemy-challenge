import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Layout from "./views/layout/Layout";
import Operation from "./views/operation/Operation";
import Dashboard from "./views/dashboard/Dashboard";
import BudgetContext from "./context/BudgetContext";

function App() {
  const context = useContext(BudgetContext);
  const { islogged } = context;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={islogged ? <Dashboard /> : <Navigate to="login" />}
          />
          <Route
            path="login"
            element={!islogged ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="register"
            element={!islogged ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/operation/:id"
            element={islogged ? <Operation /> : <Navigate to="login" />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

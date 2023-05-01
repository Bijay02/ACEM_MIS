import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const StudentPrivate = () => {
  const adminPrivate = localStorage.getItem("model");
  return adminPrivate ? <Outlet /> : <Navigate to="/" />;
};
export default StudentPrivate;

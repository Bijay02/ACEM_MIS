import React from "react";
import { Navigate , Outlet} from "react-router-dom";

const AdminPrivate = () => {
   const adminPrivate = localStorage.getItem('adminToken')
   return adminPrivate ? <Outlet /> : <Navigate to="/admin/login" />;
}
export default AdminPrivate;
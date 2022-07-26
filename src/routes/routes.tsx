import React, { lazy } from "react";
const Homepage = lazy(() => import("./homepage/index"));
const Generation = lazy(() => import("./generacion/index"));
const Admin = lazy(() => import("./admin/index"));
const ProvinceAdmin = lazy(() => import("./admin/province/ProvinceAdmin"));
//const Login = lazy(() => import("./adminlogin/index"));


export default [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/generacion",
    element: <Generation />
  },
   {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/provinceAdmin",
    element: <ProvinceAdmin />
  }
];

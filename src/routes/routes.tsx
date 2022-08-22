import React, { lazy } from 'react';
const Homepage = lazy(() => import('./homepage/index'));
const Generation = lazy(() => import('./generacion/index'));
const Admin = lazy(() => import('./admin/index'));
const Login = lazy(() => import('./userlogin/index'));
const RolAdmin = lazy(() => import('./admin/rol/index'));
const UserAdmin = lazy(() => import('./admin/usuario/index'));
const ProvinceAdmin = lazy(() => import('./admin/provincia/index'));

export default [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/generacion',
    element: <Generation />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/provinces',
    element: <ProvinceAdmin />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/rols',
    element: <RolAdmin />,
  },
  {
    path: '/users',
    element: <UserAdmin />,
  },
];

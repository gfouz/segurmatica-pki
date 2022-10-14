import React, { lazy } from 'react';
const Homepage = lazy(() => import('./homepage/index'));
//const Generation = lazy(() => import('./generacion/index'));
const Admin = lazy(() => import('./admin/index'));
const Login = lazy(() => import('./userlogin/index'));
const RolAdmin = lazy(() => import('./admin/rol/index'));
const UserAdmin = lazy(() => import('./admin/usuario/index'));
const TarifaAdmin = lazy(() => import('./admin/tarifa/index'));
const FinalidadAdmin = lazy(() => import('./admin/finalidad/index'));
const ProvinceAdmin = lazy(() => import('./admin/provincia/index'));
const CouncilAdmin = lazy(() => import('./admin/municipio/index'));
const EstadosAdmin = lazy(() => import('./admin/estados/index'));
const OrganismAdmin = lazy(() => import('./admin/organismos/index'));
const PropositosAdmin = lazy(() => import('./admin/propositos/index'));
const FunctionalityAdmin = lazy(() => import('./admin/funcionalidad/index'));
const EmpresaInstAdmin = lazy(() => import('./admin/empresasInstituciones/index'));
const LogEntityAdmin = lazy(() => import('./admin/entidadRegistro/index'));
const LoggerAdmin = lazy(() => import('./admin/funcionarioRegistro/index'));
const TermsAdmin = lazy(() => import('./admin/condiciones/index'));
const AgentAdmin = lazy(() => import('./admin/representante/index'));
const GenerationAdmin = lazy(() => import('./admin/generacion/index'));
const TermsAndPolicies = lazy(() => import('./admin/policy/index'));

export default [
  {
    path: '/',
    element: <Homepage />,
  },
  // {
  //   path: '/generacion',
  //   element: <Generation />,
  // },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/provincias',
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
  {
    path: '/municipios',
    element: <CouncilAdmin />,
  },
  {
    path: '/funcionalidades',
    element: <FunctionalityAdmin />,
  },
  {
    path: '/organismos',
    element: <OrganismAdmin />,
  },
  {
    path: '/finalidades',
    element: <FinalidadAdmin />,
  },
  {
    path: '/tarifas',
    element: <TarifaAdmin />,
  },
  {
    path: '/estados',
    element: <EstadosAdmin />,
  },
  {
    path: '/propositos',
    element: <PropositosAdmin />,
  },
  {
    path: '/empresas-instituciones',
    element: <EmpresaInstAdmin />,
  },
  {
    path: '/entidades-registro',
    element: <LogEntityAdmin  />,
  },
  {
    path: '/funcionario-registro',
    element: <LoggerAdmin />,
  },
  {
    path: '/condiciones',
    element: <TermsAdmin />,
  },
  {
    path: '/representante',
    element: <AgentAdmin />,
  },
  {
    path: '/terminos',
    element: <TermsAndPolicies />,
  },
  {
    path: '/generacion',
    element: <GenerationAdmin />,
  },
];

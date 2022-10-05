import{u as n,a as s,j as i,L as e,s as o}from"./index.84145a61.js";import{t as r}from"./constants.c1eecf01.js";import{C as a}from"./Toast.399d4852.js";import{u as l,s as c}from"./store.6f1159d1.js";function _(){const t=l(c);return n(),localStorage.getItem("jwt"),s(m,{children:[i(a,{linear:r.green,color:"#ffffff"}),s("section",{className:"admin",children:[i("h1",{className:"admin__title",children:"Administraci\xF3n general"}),i("div",{className:"admin__list",children:s("ul",{className:"list",children:[i("li",{className:"list__item",children:i(e,{to:"/",children:"Inicio"})}),i("li",{className:"list__item",children:i(e,{to:"/rols",onClick:()=>t.setOption("mostrar"),children:"Rols"})}),i("li",{className:"list__item",children:i(e,{to:"/users",onClick:()=>t.setOption("mostrar"),children:"Usuarios"})}),i("li",{className:"list__item",children:i(e,{to:"/tarifas",onClick:()=>t.setOption("mostrar"),children:"Tarifas"})}),i("li",{className:"list__item",children:i(e,{to:"/estados",onClick:()=>t.setOption("mostrar"),children:"Estados"})}),i("li",{className:"list__item",children:i(e,{to:"/empresasInstituciones",onClick:()=>t.setOption("mostrar"),children:"Empresas-instituciones"})}),i("li",{className:"list__item",children:i(e,{to:"/condiciones",onClick:()=>t.setOption("mostrar"),children:"Admin...Condiciones"})}),i("li",{className:"list__item",children:i(e,{to:"/representante",onClick:()=>t.setOption("mostrar"),children:"Representante"})}),i("li",{className:"list__item",children:i(e,{to:"/municipios",onClick:()=>t.setOption("mostrar"),children:"Municipios"})}),i("li",{className:"list__item",children:i(e,{to:"/provinces",onClick:()=>t.setOption("mostrar"),children:"Provincias"})}),i("li",{className:"list__item",children:i(e,{to:"/organismos",onClick:()=>t.setOption("mostrar"),children:"Organismos"})}),i("li",{className:"list__item",children:i(e,{to:"/funcionalidades",onClick:()=>t.setOption("mostrar"),children:"Funcionalidades"})}),i("li",{className:"list__item",children:i(e,{to:"/funcionarioregistro",onClick:()=>t.setOption("mostrar"),children:"Funcionario de Registro"})}),i("li",{className:"list__item",children:i(e,{to:"/generacion",onClick:()=>t.setOption("mostrar"),children:"Generaci\xF3n"})})]})})]})]})}const m=o.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(./images/coffee.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .admin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .admin__title {
    margin: 2em 0;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.5em;
    text-shadow: 5px 5px 10px black;
  }
  .admin__list {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list__item {
    margin: 3em 1em;
    list-style-type: none;
    min-width: 250px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px black;
    background-color: #e8e1db;
    a {
      color: #444444;
      padding: 1em;
      text-transform: uppercase;
      font-weight: bolder;
      border-radius: 8px;
    }
  }

  .admin__logo {
    width: 300px;
    border-radius: 10px;
    background-color: #00000099;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .admin__image {
    max-width: 100%;
    height: auto;
  }
  .bg-grey {
    background-color: #3a3839;
  }
`;export{_ as default};

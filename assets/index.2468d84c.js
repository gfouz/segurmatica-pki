import{u as n,a as s,j as i,L as t,s as r}from"./index.0150df0d.js";import{u as a,t as o,s as l}from"./store.589a1c54.js";import{T as c}from"./Toast.d11967c9.js";function f(){const e=a(l);return n(),localStorage.getItem("jwt"),s(m,{children:[i(c,{linear:o.green,color:"#ffffff"}),s("section",{className:"admin",children:[i("h1",{className:"admin__title",children:"Administraci\xF3n general"}),i("div",{className:"admin__list",children:s("ul",{className:"list",children:[i("li",{className:"list__item",children:i(t,{to:"/",children:"Inicio"})}),i("li",{className:"list__item",children:i(t,{to:"/rols",onClick:()=>e.setOption("mostrar"),children:"Administrar rol"})}),i("li",{className:"list__item",children:i(t,{to:"/users",onClick:()=>e.setOption("mostrar"),children:"Administrar usuario"})}),i("li",{className:"list__item",children:i(t,{to:"/provinces",onClick:()=>e.setOption("mostrar"),children:"Administrar provincias"})}),i("li",{className:"list__item",children:i(t,{to:"/tarifas",onClick:()=>e.setOption("mostrar"),children:"Administrar tarifas"})}),i("li",{className:"list__item",children:i(t,{to:"/organismos",onClick:()=>e.setOption("mostrar"),children:"Administrar Organismos"})}),i("li",{className:"list__item",children:i(t,{to:"/funcionalidades",onClick:()=>e.setOption("mostrar"),children:"Administrar Funcionalidad"})}),i("li",{className:"list__item",children:i(t,{to:"/municipios",onClick:()=>e.setOption("mostrar"),children:"Administrar Municipios"})}),i("li",{className:"list__item",children:i(t,{to:"/estados",onClick:()=>e.setOption("mostrar"),children:"Administrar Estados"})}),i("li",{className:"list__item",children:i(t,{to:"/empresasInstituciones",onClick:()=>e.setOption("mostrar"),children:"Admin..Empresas-inst"})}),i("li",{className:"list__item",children:i(t,{to:"/funcionarioregistro",onClick:()=>e.setOption("mostrar"),children:"Admin..Funcionario de Reg..."})}),i("li",{className:"list__item",children:i(t,{to:"/condiciones",onClick:()=>e.setOption("mostrar"),children:"Admin...Condiciones"})}),i("li",{className:"list__item",children:i(t,{to:"/representante",onClick:()=>e.setOption("mostrar"),children:"Admin...representante"})})]})})]})]})}const m=r.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(./images/planet.jpg);
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
    margin: 3em 0;
    list-style-type: none;
    min-width: 250px;

    a {
      color: #f1f1f1;
      padding: 1em;
      background-color: #00000090;
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
`;export{f as default};

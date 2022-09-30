import{j as o,I as i,r as t,F as a,a as r,s as n}from"./index.65025839.js";import{t as s}from"./store.1511ef1d.js";import{T as l}from"./Toast.7b500241.js";import{a as d,D as c,C as m,F as f}from"./Card.8f9da9f1.js";import{G as p}from"./GetEnabled.f44fb892.js";import{G as u,a as b}from"./Getter.dd8f0e80.js";import{U as h}from"./Updater.da7b19fa.js";import{C as y}from"./Creator.3a64633e.js";import"./index.esm.63595e96.js";import"./chakra-ui-button.esm.4448790b.js";import"./ErrorWarning.4611fe75.js";import"./TextInput.bdfc726e.js";import"./chakra-ui-switch.esm.885129a1.js";const g=[{option:"a\xF1adir",comp:o(y,{url:"funcionalidades"})},{option:"mostrar",comp:o(u,{url:"funcionalidades",queryKey:"all-functionalities"})},{option:"buscar",comp:o(b,{url:"funcionalidades",queryKey:"funcionalidades-id"})},{option:"habilitados",comp:o(p,{queryKey:"funcionalidades-enabled",url:"funcionalidades/enabled/true"})},{option:"actualizar",comp:o(h,{url:"funcionalidades"})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(i,{size:"md",children:"NO DISPONIBLE!"})}];function z(){const e=localStorage.getItem("jwt");return t.exports.useEffect(()=>{e&&(d.defaults.headers.common.jwt=e)},[]),o(a,{children:r(x,{children:[o(l,{linear:s.green,color:"#ffffff"}),o(c,{children:o(m,{name:"Functionalidad",children:o(f,{form:g})})})]})})}const x=n.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;export{z as default};

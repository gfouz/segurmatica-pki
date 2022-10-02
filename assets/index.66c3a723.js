import{j as o,I as i,r as a,F as t,a as r,s as n}from"./index.197da568.js";import{t as s}from"./store.37b8cf4e.js";import{T as l}from"./Toast.c9a8ea84.js";import{a as d,D as c,C as m,F as f}from"./Card.94feb51f.js";import{G as p}from"./GetEnabled.8de66928.js";import{G as u,a as b}from"./Getter.b8821b94.js";import{U as h}from"./Updater.eb38bc41.js";import{C as y}from"./Creator.75f2d409.js";import"./index.esm.b0a48d8a.js";import"./chakra-ui-button.esm.2eba4fb6.js";import"./ErrorWarning.68e996e2.js";import"./TextInput.21524544.js";const g=[{option:"a\xF1adir",comp:o(y,{url:"funcionalidades"})},{option:"mostrar",comp:o(u,{url:"funcionalidades",queryKey:"all-functionalities"})},{option:"buscar",comp:o(b,{url:"funcionalidades",queryKey:"funcionalidades-id"})},{option:"habilitados",comp:o(p,{queryKey:"funcionalidades-enabled",url:"funcionalidades/enabled/true"})},{option:"actualizar",comp:o(h,{url:"funcionalidades"})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(i,{size:"md",children:"NO DISPONIBLE!"})}];function G(){const e=localStorage.getItem("jwt");return a.exports.useEffect(()=>{e&&(d.defaults.headers.common.jwt=e)},[]),o(t,{children:r(x,{children:[o(l,{linear:s.green,color:"#ffffff"}),o(c,{children:o(m,{name:"Functionalidad",children:o(f,{form:g})})})]})})}const x=n.div`
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
`;export{G as default};

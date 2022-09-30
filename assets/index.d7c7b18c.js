import{j as o,I as r,r as t,F as i,a,s}from"./index.65025839.js";import{t as l}from"./store.1511ef1d.js";import{T as n}from"./Toast.7b500241.js";import{a as m,D as p,C as c,F as d}from"./Card.8f9da9f1.js";import{G as f}from"./GetEnabled.f44fb892.js";import{G as u,a as b}from"./Getter.dd8f0e80.js";import{U as h}from"./Updater.da7b19fa.js";import{C as g}from"./Creator.3a64633e.js";import"./index.esm.63595e96.js";import"./chakra-ui-button.esm.4448790b.js";import"./ErrorWarning.4611fe75.js";import"./TextInput.bdfc726e.js";import"./chakra-ui-switch.esm.885129a1.js";const x=[{option:"a\xF1adir",comp:o(g,{url:"rols"})},{option:"mostrar",comp:o(u,{url:"rols",queryKey:"rols"})},{option:"buscar",comp:o(b,{queryKey:"rolbyid",url:"rols"})},{option:"habilitados",comp:o(f,{queryKey:"rolsenabled",url:"rols/enabled/true"})},{option:"actualizar",comp:o(h,{url:"rols"})},{option:"asociado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function T(){const e=localStorage.getItem("jwt");return t.exports.useEffect(()=>{e&&(m.defaults.headers.common.jwt=e)},[]),o(i,{children:a(y,{children:[o(n,{linear:l.green,color:"#ffffff"}),o(p,{children:o(c,{name:"rol",children:o(d,{form:x})})})]})})}const y=s.div`
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
`;export{T as default};

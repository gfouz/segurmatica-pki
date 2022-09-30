import{j as o,I as r,r as t,F as i,a,s}from"./index.65025839.js";import{t as n}from"./store.1511ef1d.js";import{T as m}from"./Toast.7b500241.js";import{a as l,D as p,C as c,F as d}from"./Card.8f9da9f1.js";import{G as f}from"./GetEnabled.f44fb892.js";import{G as g,a as u}from"./Getter.dd8f0e80.js";import{U as b}from"./Updater.da7b19fa.js";import{C as h}from"./Creator.3a64633e.js";import"./index.esm.63595e96.js";import"./chakra-ui-button.esm.4448790b.js";import"./ErrorWarning.4611fe75.js";import"./TextInput.bdfc726e.js";import"./chakra-ui-switch.esm.885129a1.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"organismos"})},{option:"mostrar",comp:o(g,{url:"organismos",queryKey:"all-organism"})},{option:"buscar",comp:o(u,{url:"organismos",queryKey:"organismos-id"})},{option:"habilitados",comp:o(f,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"actualizar",comp:o(b,{url:"organismos"})},{option:"asociado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(r,{size:"md",children:"NO DISPONIBLE!"})}];function z(){const e=localStorage.getItem("jwt");return t.exports.useEffect(()=>{e&&(l.defaults.headers.common.jwt=e)},[]),o(i,{children:a(y,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(p,{children:o(c,{name:"Organismos",children:o(d,{form:x})})})]})})}const y=s.div`
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

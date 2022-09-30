import{j as o,I as e,r as a,F as r,a as t,s}from"./index.65025839.js";import{t as n}from"./store.1511ef1d.js";import{T as d}from"./Toast.7b500241.js";import{a as l,D as f,C as m,F as p}from"./Card.8f9da9f1.js";import{G as c,a as u}from"./Getter.dd8f0e80.js";import{U as g}from"./Updater.da7b19fa.js";import{C as h}from"./Creator.3a64633e.js";import"./index.esm.63595e96.js";import"./ErrorWarning.4611fe75.js";import"./TextInput.bdfc726e.js";import"./chakra-ui-switch.esm.885129a1.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"finalidades"})},{option:"mostrar",comp:o(c,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",comp:o(u,{url:"finalidades",queryKey:"finalidades-id"})},{option:"actualizar",comp:o(g,{url:"finalidades"})},{option:"asociado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function j(){const i=localStorage.getItem("jwt");return a.exports.useEffect(()=>{i&&(l.defaults.headers.common.jwt=i)},[]),o(r,{children:t(b,{children:[o(d,{linear:n.green,color:"#ffffff"}),o(f,{children:o(m,{name:"finalidades",children:o(p,{form:x})})})]})})}const b=s.div`
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
`;export{j as default};

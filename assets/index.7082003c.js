import{j as o,J as i,r as e,F as t,a as r,s as n}from"./index.0150df0d.js";import{t as s}from"./store.589a1c54.js";import{T as l}from"./Toast.d11967c9.js";import{a as d,D as c,C as f,F as m}from"./Card.1ca1c1fe.js";import{G as p}from"./GetEnabled.9961a451.js";import{G as u,a as b}from"./Getter.df96f5a9.js";import{U as y}from"./Updater.0b40a4fe.js";import{C as g}from"./Creator.e5b33ccf.js";import"./index.esm.7b029979.js";import"./chakra-ui-button.esm.49817bac.js";import"./chakra-ui-input.esm.c17c47de.js";import"./chakra-ui-switch.esm.973a6143.js";const h=[{option:"a\xF1adir",comp:o(g,{url:"funcionalidades"})},{option:"mostrar",comp:o(u,{url:"funcionalidades",queryKey:"all-functionalities"})},{option:"buscar",comp:o(b,{url:"funcionalidades",queryKey:"funcionalidades-id"})},{option:"habilitados",comp:o(p,{queryKey:"funcionalidades-enabled",url:"funcionalidades/enabled/true"})},{option:"actualizar",comp:o(y,{url:"funcionalidades"})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function G(){const a=localStorage.getItem("jwt");return e.exports.useEffect(()=>{a&&(d.defaults.headers.common.jwt=a)},[]),o(t,{children:r(x,{children:[o(l,{linear:s.green,color:"#ffffff"}),o(c,{children:o(f,{name:"Functionalidad",children:o(m,{form:h})})})]})})}const x=n.div`
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

import{j as o,J as e,r as i,F as r,a as t,s}from"./index.0150df0d.js";import{t as n}from"./store.589a1c54.js";import{T as d}from"./Toast.d11967c9.js";import{a as l,D as f,C as m,F as c}from"./Card.1ca1c1fe.js";import{G as p,a as u}from"./Getter.df96f5a9.js";import{U as g}from"./Updater.0b40a4fe.js";import{C as x}from"./Creator.e5b33ccf.js";import"./index.esm.7b029979.js";import"./chakra-ui-input.esm.c17c47de.js";import"./chakra-ui-switch.esm.973a6143.js";const h=[{option:"a\xF1adir",comp:o(x,{url:"finalidades"})},{option:"mostrar",comp:o(p,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",comp:o(u,{url:"finalidades",queryKey:"finalidades-id"})},{option:"actualizar",comp:o(g,{url:"finalidades"})},{option:"asociado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function N(){const a=localStorage.getItem("jwt");return i.exports.useEffect(()=>{a&&(l.defaults.headers.common.jwt=a)},[]),o(r,{children:t(b,{children:[o(d,{linear:n.green,color:"#ffffff"}),o(f,{children:o(m,{name:"finalidades",children:o(c,{form:h})})})]})})}const b=s.div`
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
`;export{N as default};

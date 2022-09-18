import{j as o,J as t,r as e,F as a,a as i,s}from"./index.0150df0d.js";import{t as l}from"./store.589a1c54.js";import{T as n}from"./Toast.d11967c9.js";import{a as m,D as p,C as c,F as d}from"./Card.1ca1c1fe.js";import{G as f}from"./GetEnabled.9961a451.js";import{G as u,a as b}from"./Getter.df96f5a9.js";import{U as g}from"./Updater.0b40a4fe.js";import{C as h}from"./Creator.e5b33ccf.js";import"./index.esm.7b029979.js";import"./chakra-ui-button.esm.49817bac.js";import"./chakra-ui-input.esm.c17c47de.js";import"./chakra-ui-switch.esm.973a6143.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"rols"})},{option:"mostrar",comp:o(u,{url:"rols",queryKey:"rols"})},{option:"buscar",comp:o(b,{queryKey:"rolbyid",url:"rols"})},{option:"habilitados",comp:o(f,{queryKey:"rolsenabled",url:"rols/enabled/true"})},{option:"actualizar",comp:o(g,{url:"rols"})},{option:"asociado",comp:o(t,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(t,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function G(){const r=localStorage.getItem("jwt");return e.exports.useEffect(()=>{r&&(m.defaults.headers.common.jwt=r)},[]),o(a,{children:i(y,{children:[o(n,{linear:l.green,color:"#ffffff"}),o(p,{children:o(c,{name:"rol",children:o(d,{form:x})})})]})})}const y=s.div`
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

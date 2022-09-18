import{j as o,J as r,r as t,F as a,a as i,s}from"./index.2ac2cfd3.js";import{t as n}from"./store.d275f12d.js";import{T as m}from"./Toast.632f1614.js";import{a as l,D as p,C as c,F as d}from"./Card.cebdff99.js";import{G as f}from"./GetEnabled.d4dad4b8.js";import{G as g,a as u}from"./Getter.aa1bdc10.js";import{U as b}from"./Updater.66c34f65.js";import{C as h}from"./Creator.f1e2c46f.js";import"./index.esm.9faa638d.js";import"./chakra-ui-button.esm.8f25e761.js";import"./chakra-ui-input.esm.d0f7b5c8.js";import"./chakra-ui-switch.esm.90aa10f2.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"organismos"})},{option:"mostrar",comp:o(g,{url:"organismos",queryKey:"all-organism"})},{option:"buscar",comp:o(u,{url:"organismos",queryKey:"organismos-id"})},{option:"habilitados",comp:o(f,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"actualizar",comp:o(b,{url:"organismos"})},{option:"asociado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(r,{size:"md",children:"NO DISPONIBLE!"})}];function G(){const e=localStorage.getItem("jwt");return t.exports.useEffect(()=>{e&&(l.defaults.headers.common.jwt=e)},[]),o(a,{children:i(y,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(p,{children:o(c,{name:"Organismos",children:o(d,{form:x})})})]})})}const y=s.div`
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

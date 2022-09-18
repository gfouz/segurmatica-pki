import{j as o,J as e,r as a,F as r,a as t,s}from"./index.2ac2cfd3.js";import{t as n}from"./store.d275f12d.js";import{T as d}from"./Toast.632f1614.js";import{a as l,D as f,C as m,F as c}from"./Card.cebdff99.js";import{G as p,a as u}from"./Getter.aa1bdc10.js";import{U as g}from"./Updater.66c34f65.js";import{C as h}from"./Creator.f1e2c46f.js";import"./index.esm.9faa638d.js";import"./chakra-ui-input.esm.d0f7b5c8.js";import"./chakra-ui-switch.esm.90aa10f2.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"finalidades"})},{option:"mostrar",comp:o(p,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",comp:o(u,{url:"finalidades",queryKey:"finalidades-id"})},{option:"actualizar",comp:o(g,{url:"finalidades"})},{option:"asociado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function F(){const i=localStorage.getItem("jwt");return a.exports.useEffect(()=>{i&&(l.defaults.headers.common.jwt=i)},[]),o(r,{children:t(b,{children:[o(d,{linear:n.green,color:"#ffffff"}),o(f,{children:o(m,{name:"finalidades",children:o(c,{form:x})})})]})})}const b=s.div`
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
`;export{F as default};

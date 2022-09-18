import{j as o,J as e,r as i,F as t,a,s as n}from"./index.2ac2cfd3.js";import{a as s,D as p,C as c,F as m}from"./Card.cebdff99.js";import{t as l}from"./store.d275f12d.js";import{T as f}from"./Toast.632f1614.js";import{G as d}from"./GetEnabled.d4dad4b8.js";import{G as u,a as v}from"./Getter.aa1bdc10.js";import{U as b}from"./Updater.66c34f65.js";import{C as y}from"./Creator.f1e2c46f.js";import{G as g}from"./GetByName.592c1da8.js";import"./index.esm.9faa638d.js";import"./chakra-ui-button.esm.8f25e761.js";import"./chakra-ui-input.esm.d0f7b5c8.js";import"./chakra-ui-switch.esm.90aa10f2.js";import"./chakra-ui-select.esm.2a4bd44b.js";const x=[{option:"a\xF1adir",comp:o(y,{url:"provincias"})},{option:"mostrar",comp:o(u,{url:"provincias",queryKey:"provincias"})},{option:"buscar",comp:o(v,{url:"provincias",queryKey:"provinciaid"})},{option:"habilitados",comp:o(d,{queryKey:"provinciasenabled",url:"provincias/enabled/true"})},{option:"actualizar",comp:o(b,{url:"provincias"})},{option:"asociado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"por nombre",comp:o(g,{path:"provincias/name",allnames:"provincias",queryKey:"func_by_name"})}];function O(){const r=localStorage.getItem("jwt");return i.exports.useEffect(()=>{r&&(s.defaults.headers.common.jwt=r)},[]),o(t,{children:a(h,{children:[o(f,{linear:l.green,color:"#ffffff"}),o(p,{children:o(c,{name:"provincia",children:o(m,{form:x})})})]})})}const h=n.div`
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
`;export{O as default};

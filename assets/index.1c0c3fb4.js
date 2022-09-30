import{j as o,I as i,r as a,F as t,a as n,s}from"./index.65025839.js";import{a as m,D as p,C as c,F as l}from"./Card.8f9da9f1.js";import{t as f}from"./store.1511ef1d.js";import{T as d}from"./Toast.7b500241.js";import{G as u}from"./GetEnabled.f44fb892.js";import{G as v,a as b}from"./Getter.dd8f0e80.js";import{U as g}from"./Updater.da7b19fa.js";import{C as y}from"./Creator.3a64633e.js";import{G as x}from"./GetByName.63770814.js";import"./index.esm.63595e96.js";import"./chakra-ui-button.esm.4448790b.js";import"./ErrorWarning.4611fe75.js";import"./TextInput.bdfc726e.js";import"./chakra-ui-switch.esm.885129a1.js";import"./chakra-ui-select.esm.21842cd1.js";const r={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},h=[{option:"a\xF1adir",comp:o(y,{url:"provincias",msg:r.name})},{option:"mostrar",comp:o(v,{url:"provincias",queryKey:"provincias"})},{option:"buscar",comp:o(b,{url:"provincias",queryKey:"prov-id",msg:r.id})},{option:"habilitados",comp:o(u,{queryKey:"provinciasenabled",url:"provincias/enabled/true"})},{option:"actualizar",comp:o(g,{url:"provincias",msg:r.name})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"por nombre",comp:o(x,{path:"provincias/name",allnames:"provincias",queryKey:"func_by_name"})}];function z(){const e=localStorage.getItem("jwt");return a.exports.useEffect(()=>{e&&(m.defaults.headers.common.jwt=e)},[]),o(t,{children:n(w,{children:[o(d,{linear:f.green,color:"#ffffff"}),o(p,{children:o(c,{name:"provincia",children:o(l,{form:h})})})]})})}const w=s.div`
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

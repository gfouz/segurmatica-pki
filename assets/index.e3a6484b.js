import{j as o,a1 as i,r as t,F as a,a as n,s}from"./index.84145a61.js";import{b as m}from"./StyledLabel.97b52d23.js";import{t as p}from"./constants.c1eecf01.js";import{C as c}from"./Toast.399d4852.js";import{D as l}from"./SubmitButton.d37232a3.js";import{C as f,F as d}from"./Card.4f06ee74.js";import{G as u}from"./GetEnabled.c9b1ba58.js";import{G as b,a as v}from"./Getter.2ace4167.js";import{U as g}from"./Updater.820cbf8b.js";import{C as y}from"./Creator.140eb7d1.js";import{G as x}from"./GetByName.a5d01092.js";import"./store.6f1159d1.js";import"./StatusHandler.4fa71a43.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";import"./index.esm.d64a2720.js";import"./ErrorWarning.4beaff6e.js";import"./TextInput.0bd60058.js";import"./chakra-ui-select.esm.7d7cae85.js";const r={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},h=[{option:"a\xF1adir",comp:o(y,{url:"provincias",msg:r.name})},{option:"mostrar",comp:o(b,{url:"provincias",queryKey:"provincias"})},{option:"buscar",comp:o(v,{url:"provincias",queryKey:"prov-id",msg:r.id})},{option:"habilitados",comp:o(u,{queryKey:"provinciasenabled",url:"provincias/enabled/true"})},{option:"actualizar",comp:o(g,{url:"provincias",msg:r.name})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"por nombre",comp:o(x,{path:"provincias/name",allnames:"provincias",queryKey:"func_by_name"})}];function U(){const e=localStorage.getItem("jwt");return t.exports.useEffect(()=>{e&&(m.defaults.headers.common.jwt=e)},[]),o(a,{children:n(w,{children:[o(c,{linear:p.green,color:"#ffffff"}),o(l,{children:o(f,{name:"provincia",children:o(d,{form:h})})})]})})}const w=s.div`
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
`;export{U as default};

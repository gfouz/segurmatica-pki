import{j as o,a1 as i,r as e,F as t,a,s}from"./index.84145a61.js";import{t as n}from"./constants.c1eecf01.js";import{C as d}from"./Toast.399d4852.js";import{D as l}from"./SubmitButton.d37232a3.js";import{C as m,F as f}from"./Card.4f06ee74.js";import{G as p,a as c}from"./Getter.2ace4167.js";import{U as u}from"./Updater.820cbf8b.js";import{C as b}from"./Creator.140eb7d1.js";import{b as g}from"./StyledLabel.97b52d23.js";import"./store.6f1159d1.js";import"./chakra-ui-checkbox.esm.477918d5.js";import"./index.esm.d64a2720.js";import"./StatusHandler.4fa71a43.js";import"./ErrorWarning.4beaff6e.js";import"./TextInput.0bd60058.js";const h=[{option:"a\xF1adir",comp:o(b,{url:"finalidades"})},{option:"mostrar",comp:o(p,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",comp:o(c,{url:"finalidades",queryKey:"finalidades-id"})},{option:"actualizar",comp:o(u,{url:"finalidades"})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function _(){const r=localStorage.getItem("jwt");return e.exports.useEffect(()=>{r&&(g.defaults.headers.common.jwt=r)},[]),o(t,{children:a(x,{children:[o(d,{linear:n.green,color:"#ffffff"}),o(l,{children:o(m,{name:"finalidades",children:o(f,{form:h})})})]})})}const x=s.div`
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
`;export{_ as default};

import{j as o,a1 as r,r as i,F as e,a as s,s as a}from"./index.84145a61.js";import{t as p}from"./constants.c1eecf01.js";import{C as m}from"./Toast.399d4852.js";import{D as n}from"./SubmitButton.d37232a3.js";import{C as l,F as c}from"./Card.4f06ee74.js";import{G as d}from"./GetEnabled.c9b1ba58.js";import{G as f,a as u}from"./Getter.2ace4167.js";import{U as b}from"./Updater.820cbf8b.js";import{C as h}from"./Creator.140eb7d1.js";import{b as g}from"./StyledLabel.97b52d23.js";import"./store.6f1159d1.js";import"./StatusHandler.4fa71a43.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";import"./index.esm.d64a2720.js";import"./ErrorWarning.4beaff6e.js";import"./TextInput.0bd60058.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"propositos"})},{option:"mostrar",comp:o(f,{url:"propositos",queryKey:"propositos"})},{option:"buscar",comp:o(u,{url:"propositos",queryKey:"propositos-id"})},{option:"habilitados",comp:o(d,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",comp:o(b,{url:"propositos"})},{option:"asociado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function K(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(g.defaults.headers.common.jwt=t)},[]),o(e,{children:s(y,{children:[o(m,{linear:p.green,color:"#ffffff"}),o(n,{children:o(l,{name:"provincia",children:o(c,{form:x})})})]})})}const y=a.div`
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
`;export{K as default};

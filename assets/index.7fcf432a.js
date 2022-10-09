import{j as o,a1 as i,r as t,F as a,a as s,s as n}from"./index.b7cccbb5.js";import{b as m}from"./StyledLabel.46abfa46.js";import{t as p}from"./constants.c1eecf01.js";import{C as c}from"./Toast.1bbf2185.js";import{D as l}from"./SubmitButton.af6348b6.js";import{C as f,F as d}from"./Card.79b886ab.js";import{G as u}from"./GetEnabled.e440a4c2.js";import{G as b,a as v}from"./GetByName.c10d5a19.js";import{U as g}from"./Updater.bd8e77e2.js";import{C as x}from"./Creator.75a875d6.js";import"./store.bebd0824.js";import"./StatusHandler.9d0da5e5.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";import"./index.esm.5c5e9822.js";import"./ErrorWarning.3038fd9c.js";import"./TextInput.56cf34f0.js";const e={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},h=[{option:"a\xF1adir",comp:o(x,{url:"provincias",msg:e.name})},{option:"mostrar",comp:o(b,{url:"provincias",queryKey:"provincias"})},{option:"buscar",comp:o(v,{allnames:"provincias"})},{option:"habilitados",comp:o(u,{queryKey:"provinciasenabled",url:"provincias/enabled/true"})},{option:"actualizar",comp:o(g,{url:"provincias",msg:e.name})},{option:"asociado",comp:o(i,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function P(){const r=localStorage.getItem("jwt");return t.exports.useEffect(()=>{r&&(m.defaults.headers.common.jwt=r)},[]),o(a,{children:s(y,{children:[o(c,{linear:p.green,color:"#ffffff"}),o(l,{children:o(f,{name:"provincia",children:o(d,{form:h})})})]})})}const y=n.div`
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
`;export{P as default};

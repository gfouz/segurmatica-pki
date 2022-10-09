import{j as o,a1 as t,r as e,F as i,a,s}from"./index.b7cccbb5.js";import{t as p}from"./constants.c1eecf01.js";import{C as m}from"./Toast.1bbf2185.js";import{D as n}from"./SubmitButton.af6348b6.js";import{C as l,F as c}from"./Card.79b886ab.js";import{G as f}from"./GetEnabled.e440a4c2.js";import{G as d,a as u}from"./GetByName.c10d5a19.js";import{U as b}from"./Updater.bd8e77e2.js";import{C as g}from"./Creator.75a875d6.js";import{b as h}from"./StyledLabel.46abfa46.js";import"./store.bebd0824.js";import"./StatusHandler.9d0da5e5.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";import"./index.esm.5c5e9822.js";import"./ErrorWarning.3038fd9c.js";import"./TextInput.56cf34f0.js";const x=[{option:"a\xF1adir",comp:o(g,{url:"propositos"})},{option:"mostrar",comp:o(d,{url:"propositos",queryKey:"propositos"})},{option:"buscar",comp:o(u,{allnames:"organismos"})},{option:"habilitados",comp:o(f,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",comp:o(b,{url:"propositos"})},{option:"asociado",comp:o(t,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(t,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function D(){const r=localStorage.getItem("jwt");return e.exports.useEffect(()=>{r&&(h.defaults.headers.common.jwt=r)},[]),o(i,{children:a(y,{children:[o(m,{linear:p.green,color:"#ffffff"}),o(n,{children:o(l,{name:"provincia",children:o(c,{form:x})})})]})})}const y=s.div`
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
`;export{D as default};

import{j as o,a1 as a,r as e,F as i,a as r,s}from"./index.b7cccbb5.js";import{t as n}from"./constants.c1eecf01.js";import{C as l}from"./Toast.1bbf2185.js";import{D as m}from"./SubmitButton.af6348b6.js";import{C as d,F as f}from"./Card.79b886ab.js";import{G as p,a as c}from"./GetByName.c10d5a19.js";import{U as u}from"./Updater.bd8e77e2.js";import{C as g}from"./Creator.75a875d6.js";import{b as x}from"./StyledLabel.46abfa46.js";import"./store.bebd0824.js";import"./chakra-ui-checkbox.esm.51ae5603.js";import"./index.esm.5c5e9822.js";import"./StatusHandler.9d0da5e5.js";import"./ErrorWarning.3038fd9c.js";import"./TextInput.56cf34f0.js";const b=[{option:"a\xF1adir",comp:o(g,{url:"finalidades"})},{option:"mostrar",comp:o(p,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",comp:o(c,{allnames:"finalidades"})},{option:"actualizar",comp:o(u,{url:"finalidades"})},{option:"asociado",comp:o(a,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(a,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function G(){const t=localStorage.getItem("jwt");return e.exports.useEffect(()=>{t&&(x.defaults.headers.common.jwt=t)},[]),o(i,{children:r(h,{children:[o(l,{linear:n.green,color:"#ffffff"}),o(m,{children:o(d,{name:"finalidades",children:o(f,{form:b})})})]})})}const h=s.div`
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

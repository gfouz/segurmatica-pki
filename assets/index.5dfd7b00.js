import{j as o,r as a,F as i,a as s,s as n}from"./index.a965a08b.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.c7c7e538.js";import{D as p}from"./SubmitButton.ff1e26b2.js";import{C as c,F as f}from"./Card.c6800e88.js";import{R as d,G as g}from"./Rocket.84a95247.js";import{E as t,S as u,G as b,a as x,b as h}from"./SearchPlus.ae3627cf.js";import{U as y}from"./Updater.476ca69e.js";import{C as v}from"./Creator.ab123595.js";import{b as w}from"./StyledLabel.73e7a9c0.js";import"./store.df117b59.js";import"./StatusHandler.f4e4ee84.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";import"./index.esm.0200c310.js";import"./ErrorWarning.4bc7c3cd.js";import"./TextInput.77148194.js";const e=[{option:"a\xF1adir",icon:o(t,{}),comp:o(v,{url:"organismos"})},{option:"mostrar",icon:o(u,{}),comp:o(b,{url:"organismos",queryKey:"all-organism"})},{option:"buscar",icon:o(x,{}),comp:o(h,{allnames:"organismos"})},{option:"habilitados",icon:o(d,{}),comp:o(g,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"actualizar",icon:o(t,{}),comp:o(y,{url:"organismos"})}];function B(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(w.defaults.headers.common.jwt=r)},[]),o(i,{children:s(j,{children:[o(l,{linear:m.green,color:"#ffffff"}),o(p,{children:o(c,{name:"Organismos",options:e,children:o(f,{options:e})})})]})})}const j=n.div`
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
`;export{B as default};

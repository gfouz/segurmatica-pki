import{j as o,r as a,F as i,a as s,s as l}from"./index.a965a08b.js";import{t as n}from"./constants.c1eecf01.js";import{C as m}from"./Toast.c7c7e538.js";import{D as p}from"./SubmitButton.ff1e26b2.js";import{C as c,F as f}from"./Card.c6800e88.js";import{R as d,G as u}from"./Rocket.84a95247.js";import{E as t,S as b,G as x,a as g,b as h}from"./SearchPlus.ae3627cf.js";import{U as y}from"./Updater.476ca69e.js";import{C as v}from"./Creator.ab123595.js";import{b as w}from"./StyledLabel.73e7a9c0.js";import"./store.df117b59.js";import"./StatusHandler.f4e4ee84.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";import"./index.esm.0200c310.js";import"./ErrorWarning.4bc7c3cd.js";import"./TextInput.77148194.js";const e=[{option:"a\xF1adir",icon:o(t,{}),comp:o(v,{url:"rols"})},{option:"mostrar",icon:o(b,{}),comp:o(x,{url:"rols",queryKey:"rols"})},{option:"buscar",icon:o(g,{}),comp:o(h,{allnames:"rols"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"rols-enabled",url:"rols/enabled/true"})},{option:"actualizar",icon:o(t,{}),comp:o(y,{url:"rols"})}];function N(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(w.defaults.headers.common.jwt=r)},[]),o(i,{children:s(j,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(p,{children:o(c,{name:"rol",options:e,children:o(f,{options:e})})})]})})}const j=l.div`
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
`;export{N as default};

import{j as t,r as i,F as a,a as s,s as n}from"./index.a965a08b.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.c7c7e538.js";import{D as p}from"./SubmitButton.ff1e26b2.js";import{C as d,F as c}from"./Card.c6800e88.js";import{R as f,G as g}from"./Rocket.84a95247.js";import{E as e,S as u,G as b,a as x,b as h}from"./SearchPlus.ae3627cf.js";import{U as y}from"./Updater.476ca69e.js";import{C as v}from"./Creator.ab123595.js";import{b as w}from"./StyledLabel.73e7a9c0.js";import"./store.df117b59.js";import"./StatusHandler.f4e4ee84.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";import"./index.esm.0200c310.js";import"./ErrorWarning.4bc7c3cd.js";import"./TextInput.77148194.js";const r=[{option:"a\xF1adir",icon:t(e,{}),comp:t(v,{url:"entidades-registro"})},{option:"mostrar",icon:t(u,{}),comp:t(b,{url:"entidades-registro",queryKey:"entidad-reg-all"})},{option:"buscar",icon:t(x,{}),comp:t(h,{allnames:"entidades-registro"})},{option:"habilitados",icon:t(f,{}),comp:t(g,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"actualizar",icon:t(e,{}),comp:t(y,{url:"entidades-registro"})}];function N(){const o=localStorage.getItem("jwt");return i.exports.useEffect(()=>{o&&(w.defaults.headers.common.jwt=o)},[]),t(a,{children:s(E,{children:[t(l,{linear:m.green,color:"#ffffff"}),t(p,{children:t(d,{name:"Entidad registro",options:r,children:t(c,{options:r})})})]})})}const E=n.div`
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

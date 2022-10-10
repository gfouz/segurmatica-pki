import{j as o,r as a,F as s,a as i,s as n}from"./index.a965a08b.js";import{t as m}from"./constants.c1eecf01.js";import{C as l}from"./Toast.c7c7e538.js";import{D as p}from"./SubmitButton.ff1e26b2.js";import{C as c,F as d}from"./Card.c6800e88.js";import{R as f,G as u}from"./Rocket.84a95247.js";import{E as e,S as b,G as x,a as g,b as h}from"./SearchPlus.ae3627cf.js";import{U as y}from"./Updater.476ca69e.js";import{C as v}from"./Creator.ab123595.js";import{b as w}from"./StyledLabel.73e7a9c0.js";import"./store.df117b59.js";import"./StatusHandler.f4e4ee84.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";import"./index.esm.0200c310.js";import"./ErrorWarning.4bc7c3cd.js";import"./TextInput.77148194.js";const r=[{option:"a\xF1adir",icon:o(e,{}),comp:o(v,{url:"estados"})},{option:"mostrar",icon:o(b,{}),comp:o(x,{url:"estados",queryKey:"all-estados"})},{option:"buscar",icon:o(g,{}),comp:o(h,{allnames:"estados"})},{option:"habilitados",icon:o(f,{}),comp:o(u,{queryKey:"estados-enabled",url:"estados/enabled/true"})},{option:"actualizar",icon:o(e,{}),comp:o(y,{url:"estados"})}];function L(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:i(j,{children:[o(l,{linear:m.green,color:"#ffffff"}),o(p,{children:o(c,{name:"estados",options:r,children:o(d,{options:r})})})]})})}const j=n.div`
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
`;export{L as default};

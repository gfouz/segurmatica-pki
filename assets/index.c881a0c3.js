import{j as o,I as e,r,F as a,a as i,s}from"./index.65025839.js";import{t as n}from"./store.1511ef1d.js";import{T as d}from"./Toast.7b500241.js";import{a as l,D as m,C as p,F as c}from"./Card.8f9da9f1.js";import{G as f}from"./GetEnabled.f44fb892.js";import{G as u,a as b}from"./Getter.dd8f0e80.js";import{U as h}from"./Updater.da7b19fa.js";import{C as g}from"./Creator.3a64633e.js";import"./index.esm.63595e96.js";import"./chakra-ui-button.esm.4448790b.js";import"./ErrorWarning.4611fe75.js";import"./TextInput.bdfc726e.js";import"./chakra-ui-switch.esm.885129a1.js";const x=[{option:"a\xF1adir",comp:o(g,{url:"estados"})},{option:"mostrar",comp:o(u,{url:"estados",queryKey:"all-estados"})},{option:"buscar",comp:o(b,{url:"estados",queryKey:"estados-id"})},{option:"habilitados",comp:o(f,{queryKey:"estados-enabled",url:"estados/enabled/true"})},{option:"actualizar",comp:o(h,{url:"estados"})},{option:"asociado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(e,{size:"md",children:"NO DISPONIBLE!"})}];function z(){const t=localStorage.getItem("jwt");return r.exports.useEffect(()=>{t&&(l.defaults.headers.common.jwt=t)},[]),o(a,{children:i(y,{children:[o(d,{linear:n.green,color:"#ffffff"}),o(m,{children:o(p,{name:"estados",children:o(c,{form:x})})})]})})}const y=s.div`
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
`;export{z as default};

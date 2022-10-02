import{j as o,I as r,r as e,F as i,a,s}from"./index.197da568.js";import{t as p}from"./store.37b8cf4e.js";import{T as n}from"./Toast.c9a8ea84.js";import{a as l,D as m,C as c,F as d}from"./Card.94feb51f.js";import{G as f}from"./GetEnabled.8de66928.js";import{G as u,a as b}from"./Getter.b8821b94.js";import{U as h}from"./Updater.eb38bc41.js";import{C as g}from"./Creator.75f2d409.js";import"./index.esm.b0a48d8a.js";import"./chakra-ui-button.esm.2eba4fb6.js";import"./ErrorWarning.68e996e2.js";import"./TextInput.21524544.js";const x=[{option:"a\xF1adir",comp:o(g,{url:"propositos"})},{option:"mostrar",comp:o(u,{url:"propositos",queryKey:"propositos"})},{option:"buscar",comp:o(b,{url:"propositos",queryKey:"propositos-id"})},{option:"habilitados",comp:o(f,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",comp:o(h,{url:"propositos"})},{option:"asociado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function G(){const t=localStorage.getItem("jwt");return e.exports.useEffect(()=>{t&&(l.defaults.headers.common.jwt=t)},[]),o(i,{children:a(y,{children:[o(n,{linear:p.green,color:"#ffffff"}),o(m,{children:o(c,{name:"provincia",children:o(d,{form:x})})})]})})}const y=s.div`
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

import{j as o,J as r,r as e,F as i,a,s}from"./index.2ac2cfd3.js";import{t as p}from"./store.d275f12d.js";import{T as n}from"./Toast.632f1614.js";import{a as l,D as m,C as c,F as d}from"./Card.cebdff99.js";import{G as f}from"./GetEnabled.d4dad4b8.js";import{G as u,a as b}from"./Getter.aa1bdc10.js";import{U as h}from"./Updater.66c34f65.js";import{C as g}from"./Creator.f1e2c46f.js";import"./index.esm.9faa638d.js";import"./chakra-ui-button.esm.8f25e761.js";import"./chakra-ui-input.esm.d0f7b5c8.js";import"./chakra-ui-switch.esm.90aa10f2.js";const x=[{option:"a\xF1adir",comp:o(g,{url:"propositos"})},{option:"mostrar",comp:o(u,{url:"propositos",queryKey:"propositos"})},{option:"buscar",comp:o(b,{url:"propositos",queryKey:"propositos-id"})},{option:"habilitados",comp:o(f,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",comp:o(h,{url:"propositos"})},{option:"asociado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:o(r,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function G(){const t=localStorage.getItem("jwt");return e.exports.useEffect(()=>{t&&(l.defaults.headers.common.jwt=t)},[]),o(i,{children:a(y,{children:[o(n,{linear:p.green,color:"#ffffff"}),o(m,{children:o(c,{name:"provincia",children:o(d,{form:x})})})]})})}const y=s.div`
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

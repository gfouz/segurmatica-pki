import{j as e,J as t,r,F as i,a,s}from"./index.2ac2cfd3.js";import{t as n}from"./store.d275f12d.js";import{T as m}from"./Toast.632f1614.js";import{a as p,D as l,C as c,F as d}from"./Card.cebdff99.js";import{G as f}from"./GetEnabled.d4dad4b8.js";import{G as u,a as b}from"./Getter.aa1bdc10.js";import{U as h}from"./Updater.66c34f65.js";import{C as g}from"./Creator.f1e2c46f.js";import"./index.esm.9faa638d.js";import"./chakra-ui-button.esm.8f25e761.js";import"./chakra-ui-input.esm.d0f7b5c8.js";import"./chakra-ui-switch.esm.90aa10f2.js";const x=[{option:"a\xF1adir",comp:e(g,{url:"empresas-instituciones"})},{option:"mostrar",comp:e(u,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",comp:e(b,{url:"empresas-instituciones",queryKey:"emp-inst-id"})},{option:"habilitados",comp:e(f,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",comp:e(h,{url:"empresas-instituciones"})},{option:"asociado",comp:e(t,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(t,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(t,{size:"md",children:"NO DISPONIBLE!"})}];function G(){const o=localStorage.getItem("jwt");return r.exports.useEffect(()=>{o&&(p.defaults.headers.common.jwt=o)},[]),e(i,{children:a(y,{children:[e(m,{linear:n.green,color:"#ffffff"}),e(l,{children:e(c,{name:"Empresa-inst...",children:e(d,{form:x})})})]})})}const y=s.div`
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

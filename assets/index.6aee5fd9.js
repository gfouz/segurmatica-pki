import{j as e,J as o,r,F as i,a,s}from"./index.3c396f94.js";import{t as n}from"./store.d52a4178.js";import{T as m}from"./Toast.b9a2ccf4.js";import{a as p,D as l,C as c,F as f}from"./Card.7ce88ba9.js";import{G as d}from"./GetEnabled.cc52f2a9.js";import{G as u,a as b}from"./Getter.be515e40.js";import{U as g}from"./Updater.6bd86e9a.js";import{C as h}from"./Creator.443e17c7.js";import"./index.esm.c357225c.js";import"./chakra-ui-button.esm.a759d600.js";import"./chakra-ui-input.esm.9338221f.js";import"./chakra-ui-switch.esm.381cf871.js";const x=[{option:"a\xF1adir",comp:e(h,{url:"empresas-instituciones"})},{option:"mostrar",comp:e(u,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",comp:e(b,{url:"empresas-instituciones",queryKey:"emp-inst-id"})},{option:"habilitados",comp:e(d,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",comp:e(g,{url:"empresas-instituciones"})},{option:"asociado",comp:e(o,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(o,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function G(){const t=localStorage.getItem("jwt");return r.exports.useEffect(()=>{t&&(p.defaults.headers.common.jwt=t)},[]),e(i,{children:a(y,{children:[e(m,{linear:n.green,color:"#ffffff"}),e(l,{children:e(c,{name:"Empresa-inst...",children:e(f,{form:x})})})]})})}const y=s.div`
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

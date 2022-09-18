import{j as o,J as e,r,F as a,a as s,s as i}from"./index.3c396f94.js";import{t as n}from"./store.d52a4178.js";import{T as d}from"./Toast.b9a2ccf4.js";import{a as l,D as m,C as p,F as c}from"./Card.7ce88ba9.js";import{G as f}from"./GetEnabled.cc52f2a9.js";import{G as u,a as b}from"./Getter.be515e40.js";import{U as g}from"./Updater.6bd86e9a.js";import{C as h}from"./Creator.443e17c7.js";import"./index.esm.c357225c.js";import"./chakra-ui-button.esm.a759d600.js";import"./chakra-ui-input.esm.9338221f.js";import"./chakra-ui-switch.esm.381cf871.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"estados"})},{option:"mostrar",comp:o(u,{url:"estados",queryKey:"all-estados"})},{option:"buscar",comp:o(b,{url:"estados",queryKey:"estados-id"})},{option:"habilitados",comp:o(f,{queryKey:"estados-enabled",url:"estados/enabled/true"})},{option:"actualizar",comp:o(g,{url:"estados"})},{option:"asociado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(e,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function G(){const t=localStorage.getItem("jwt");return r.exports.useEffect(()=>{t&&(l.defaults.headers.common.jwt=t)},[]),o(a,{children:s(y,{children:[o(d,{linear:n.green,color:"#ffffff"}),o(m,{children:o(p,{name:"estados",children:o(c,{form:x})})})]})})}const y=i.div`
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

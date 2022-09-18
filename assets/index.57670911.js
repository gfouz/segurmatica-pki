import{j as o,J as t,r as e,F as i,a,s}from"./index.3c396f94.js";import{t as p}from"./store.d52a4178.js";import{T as n}from"./Toast.b9a2ccf4.js";import{a as l,D as m,C as c,F as d}from"./Card.7ce88ba9.js";import{G as f}from"./GetEnabled.cc52f2a9.js";import{G as u,a as b}from"./Getter.be515e40.js";import{U as g}from"./Updater.6bd86e9a.js";import{C as h}from"./Creator.443e17c7.js";import"./index.esm.c357225c.js";import"./chakra-ui-button.esm.a759d600.js";import"./chakra-ui-input.esm.9338221f.js";import"./chakra-ui-switch.esm.381cf871.js";const x=[{option:"a\xF1adir",comp:o(h,{url:"propositos"})},{option:"mostrar",comp:o(u,{url:"propositos",queryKey:"propositos"})},{option:"buscar",comp:o(b,{url:"propositos",queryKey:"propositos-id"})},{option:"habilitados",comp:o(f,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",comp:o(g,{url:"propositos"})},{option:"asociado",comp:o(t,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:o(t,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function G(){const r=localStorage.getItem("jwt");return e.exports.useEffect(()=>{r&&(l.defaults.headers.common.jwt=r)},[]),o(i,{children:a(y,{children:[o(n,{linear:p.green,color:"#ffffff"}),o(m,{children:o(c,{name:"provincia",children:o(d,{form:x})})})]})})}const y=s.div`
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

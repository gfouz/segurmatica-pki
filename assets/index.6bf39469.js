var _=Object.defineProperty,D=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(r,t,i)=>t in r?_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,g=(r,t)=>{for(var i in t||(t={}))K.call(t,i)&&N(r,i,t[i]);if(v)for(var i of v(t))P.call(t,i)&&N(r,i,t[i]);return r},A=(r,t)=>D(r,H(t));import{j as e,F as S,a as f,r as b,aj as q,J as T,I as E,s as X}from"./index.65025839.js";import{t as B}from"./store.1511ef1d.js";import{T as R}from"./Toast.7b500241.js";import{u as w,h as F,b as n,i as p,c as z,S as C,f as O,a as J,D as M,C as Q,F as U}from"./Card.8f9da9f1.js";import{G as V}from"./GetEnabled.f44fb892.js";import{T as W,N as y,G as Z,a as $}from"./Getter.dd8f0e80.js";import{u as j,b as k}from"./index.esm.63595e96.js";import{S as Y}from"./chakra-ui-select.esm.21842cd1.js";import{I as ee,E as re}from"./ErrorWarning.4611fe75.js";import{S as te}from"./chakra-ui-switch.esm.885129a1.js";import"./chakra-ui-button.esm.4448790b.js";function G({list:r,register:t,label:i,required:d}){return e(S,{children:e(Y,A(g({},t(i,{required:d})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((a,l)=>e("option",{value:a.id,children:a.name},l))}))})}const L=({label:r,register:t,required:i,errors:d,defaultValue:a,info:l})=>f(S,{children:[e(W,{label:l,hasArrow:!0,arrowSize:15,children:e(ee,g({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:a},t(r,{pattern:/^[a-zA-Z0-9\s:,.'-]{3,}$/,required:i})))}),e(re,{label:r,errors:d,info:l})]});function ie(r){var h;const{url:t}=r,[i,d]=b.exports.useState(""),{register:a,handleSubmit:l,formState:{errors:s}}=j(),x="/finalidades",{data:m}=w("all-finalidades",()=>O(x)),o=k(c=>F(t,c)),I=async c=>{o.mutateAsync(c),console.log(c)},u=(h=o==null?void 0:o.data)==null?void 0:h.message;return b.exports.useEffect(()=>{u&&d(u)},[u]),e(S,{children:e("form",{onSubmit:l(I),children:f(q,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(y,{label:"time",register:a,errors:s,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(y,{label:"price",register:a,errors:s,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(L,{label:"range",register:a,errors:s,required:!0,info:p.alpha}),e(n,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),f(q,{p:"1em",direction:"column",children:[e(G,{list:m==null?void 0:m.result,label:"finalidadId",register:a,required:!0}),s.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),f(T,{children:[e(n,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(te,A(g({},a("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(z,{buttonstate:o==null?void 0:o.isLoading}),i&&e(C,{message:i})]})})})}function ae(r){var h;const{url:t}=r,[i,d]=b.exports.useState(""),{register:a,handleSubmit:l,formState:{errors:s}}=j(),x="/finalidades",{data:m}=w("all-finalidades",()=>O(x)),o=k(c=>F(t,c)),I=async c=>{o.mutateAsync(c)},u=(h=o==null?void 0:o.data)==null?void 0:h.message;return b.exports.useEffect(()=>{u&&d(u)},[u]),e(S,{children:e("form",{onSubmit:l(I),children:f(q,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"A\xF1adir tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(y,{label:"time",register:a,errors:s,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(y,{label:"price",register:a,errors:s,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(L,{label:"range",register:a,errors:s,required:!0,info:p.alpha}),e(n,{color:"#009966",capit:!0,m:"1em 0 0 0",children:"Seleccione finalidad"}),f(T,{p:"1em",children:[e(G,{list:m==null?void 0:m.result,label:"finalidadId",register:a,required:!0}),s.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(z,{buttonstate:o==null?void 0:o.isLoading}),i&&e(C,{message:i})]})})})}const oe=[{option:"a\xF1adir",comp:e(ae,{url:"tarifas"})},{option:"mostrar",comp:e(Z,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",comp:e($,{url:"tarifas",queryKey:"tarifas-id"})},{option:"habilitados",comp:e(V,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",comp:e(ie,{url:"tarifas"})},{option:"asociado",comp:e(E,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(E,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(E,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function ye(){const r=localStorage.getItem("jwt");return b.exports.useEffect(()=>{r&&(J.defaults.headers.common.jwt=r)},[]),e(S,{children:f(ne,{children:[e(R,{linear:B.green,color:"#ffffff"}),e(M,{children:e(Q,{name:"tarifas",children:e(U,{form:oe})})})]})})}const ne=X.div`
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
`;export{ye as default};

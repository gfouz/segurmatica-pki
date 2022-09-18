var R=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var E=(i,t,r)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,s=(i,t)=>{for(var r in t||(t={}))H.call(t,r)&&E(i,r,t[r]);if(F)for(var r of F(t))P.call(t,r)&&E(i,r,t[r]);return i},I=(i,t)=>B(i,D(t));import{a as o,F as q,j as e,r as x,al as C,J as l,K as c,s as U}from"./index.2ac2cfd3.js";import{t as X}from"./store.d275f12d.js";import{T as $}from"./Toast.632f1614.js";import{u as N,f as O,t as T,r as J,b as _,S as j,e as L,a as M,D as Q,C as V,F as W}from"./Card.cebdff99.js";import{G as Y}from"./GetEnabled.d4dad4b8.js";import{T as Z,p as S,t as b,G as ee,a as ie}from"./Getter.aa1bdc10.js";import{u as k,b as G,a as te}from"./index.esm.9faa638d.js";import{S as re}from"./chakra-ui-select.esm.2a4bd44b.js";import{I as y}from"./chakra-ui-input.esm.d0f7b5c8.js";import{S as ae}from"./chakra-ui-switch.esm.90aa10f2.js";import"./chakra-ui-button.esm.8f25e761.js";function v(i){return o(q,{children:[e("datalist",{id:i.listname,children:i.datalist&&i.datalist.map(t=>e("option",{value:t},t.toString()))}),e(Z,{label:i.message,hasArrow:!0,arrowSize:15,children:i.children})]})}function K({list:i,register:t,label:r,required:f}){return e(q,{children:e(re,I(s({},t(r,{required:f})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(i)&&i.map((n,h)=>e("option",{value:n.id,children:n.name},h))}))})}function se(i){var g;const{url:t}=i,[r,f]=x.exports.useState(""),{register:n,handleSubmit:h,formState:{errors:d}}=k(),z="/finalidades",{data:p}=N("all-finalidades",()=>L(z)),a=G(m=>O(t,m)),A=async m=>{a.mutateAsync(m),console.log(m)},u=(g=a==null?void 0:a.data)==null?void 0:g.message;return x.exports.useEffect(()=>{u&&f(u)},[u]),e(q,{children:e("form",{onSubmit:h(A),children:o(C,{p:"1em",direction:"column",children:[e(l,{size:"sm",p:"1em",children:"Tiempo"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("time",{required:!0})),T))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Precio de Tarifa"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("price",{required:!0})),T))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Seleccione rango"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("time",{required:!0})),J))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Seleccione finalidad"}),o(c,{p:"1em",children:[e(K,{list:p==null?void 0:p.result,label:"finalidadId",register:n,required:!0}),d.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),o(c,{p:"1em",children:[e(l,{size:"sm",m:"0 1em",children:"Deshabilitar o habilitar"}),e(ae,I(s({},n("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(_,{buttonstate:a==null?void 0:a.isLoading}),r&&e(j,{message:r})]})})})}const ne="http://localhost:5000",oe=te.create({baseURL:ne,withCredentials:!1});oe.defaults.headers.common["Content-Type"]="application/json";const w={size:"sm",type:"text",variant:"flushed"};function le(i){var g;const{url:t}=i,[r,f]=x.exports.useState(""),{register:n,handleSubmit:h,formState:{errors:d}}=k(),z="/finalidades",{data:p}=N("all-finalidades",()=>L(z)),a=G(m=>O(t,m)),A=async m=>{a.mutateAsync(m)},u=(g=a==null?void 0:a.data)==null?void 0:g.message;return x.exports.useEffect(()=>{u&&f(u)},[u]),e(q,{children:e("form",{onSubmit:h(A),children:o(C,{p:"1em",direction:"column",children:[e(l,{size:"sm",p:"1em",children:"Tiempo"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("time",{required:!0})),w))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Precio de Tarifa"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("price",{required:!0})),w))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Seleccione rango"}),e(c,{p:"1em",children:e("input",I(s({},n("range",{required:!0})),{type:"range",min:"100",max:"600"}))}),e(l,{size:"sm",p:"1em",children:"Seleccione finalidad"}),o(c,{p:"1em",children:[e(K,{list:p==null?void 0:p.result,label:"finalidadId",register:n,required:!0}),d.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(_,{buttonstate:a==null?void 0:a.isLoading}),r&&e(j,{message:r})]})})})}const ce=[{option:"a\xF1adir",comp:e(le,{url:"tarifas"})},{option:"mostrar",comp:e(ee,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",comp:e(ie,{url:"tarifas",queryKey:"tarifas-id"})},{option:"habilitados",comp:e(Y,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",comp:e(se,{url:"tarifas"})},{option:"asociado",comp:e(l,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(l,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(l,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function Ie(){const i=localStorage.getItem("jwt");return x.exports.useEffect(()=>{i&&(M.defaults.headers.common.jwt=i)},[]),e(q,{children:o(de,{children:[e($,{linear:X.green,color:"#ffffff"}),e(Q,{children:e(V,{name:"tarifas",children:e(W,{form:ce})})})]})})}const de=U.div`
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
`;export{Ie as default};

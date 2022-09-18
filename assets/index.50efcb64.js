var R=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(i,t,r)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,s=(i,t)=>{for(var r in t||(t={}))H.call(t,r)&&w(i,r,t[r]);if(A)for(var r of A(t))P.call(t,r)&&w(i,r,t[r]);return i},z=(i,t)=>B(i,D(t));import{a as o,F as q,j as e,r as x,al as C,J as l,K as c,s as U}from"./index.0150df0d.js";import{t as X}from"./store.589a1c54.js";import{T as $}from"./Toast.d11967c9.js";import{u as _,f as j,t as T,r as J,b as L,S as k,e as N,a as M,D as Q,C as V,F as W}from"./Card.1ca1c1fe.js";import{G as Y}from"./GetEnabled.9961a451.js";import{T as Z,p as S,t as b,G as ee,a as ie}from"./Getter.df96f5a9.js";import{u as O,b as G,a as te}from"./index.esm.7b029979.js";import{S as re}from"./chakra-ui-select.esm.7f24c6aa.js";import{I as y}from"./chakra-ui-input.esm.c17c47de.js";import{S as ae}from"./chakra-ui-switch.esm.973a6143.js";import"./chakra-ui-button.esm.49817bac.js";function v(i){return o(q,{children:[e("datalist",{id:i.listname,children:i.datalist&&i.datalist.map(t=>e("option",{value:t},t.toString()))}),e(Z,{label:i.message,hasArrow:!0,arrowSize:15,children:i.children})]})}function K({list:i,register:t,label:r,required:f}){return e(q,{children:e(re,z(s({},t(r,{required:f})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(i)&&i.map((n,h)=>e("option",{value:n.id,children:n.name},h))}))})}function se(i){var g;const{url:t}=i,[r,f]=x.exports.useState(""),{register:n,handleSubmit:h,formState:{errors:d}}=O(),F="/finalidades",{data:p}=_("all-finalidades",()=>N(F)),a=G(m=>j(t,m)),I=async m=>{a.mutateAsync(m),console.log(m)},u=(g=a==null?void 0:a.data)==null?void 0:g.message;return x.exports.useEffect(()=>{u&&f(u)},[u]),e(q,{children:e("form",{onSubmit:h(I),children:o(C,{p:"1em",direction:"column",children:[e(l,{size:"sm",p:"1em",children:"Tiempo"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("time",{required:!0})),T))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Precio de Tarifa"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("price",{required:!0})),T))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Seleccione rango"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("time",{required:!0})),J))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Seleccione finalidad"}),o(c,{p:"1em",children:[e(K,{list:p==null?void 0:p.result,label:"finalidadId",register:n,required:!0}),d.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),o(c,{p:"1em",children:[e(l,{size:"sm",m:"0 1em",children:"Deshabilitar o habilitar"}),e(ae,z(s({},n("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(L,{buttonstate:a==null?void 0:a.isLoading}),r&&e(k,{message:r})]})})})}const ne="http://localhost:5000",oe=te.create({baseURL:ne,withCredentials:!1});oe.defaults.headers.common["Content-Type"]="application/json";const E={size:"sm",type:"text",variant:"flushed"};function le(i){var g;const{url:t}=i,[r,f]=x.exports.useState(""),{register:n,handleSubmit:h,formState:{errors:d}}=O(),F="/finalidades",{data:p}=_("all-finalidades",()=>N(F)),a=G(m=>j(t,m)),I=async m=>{a.mutateAsync(m)},u=(g=a==null?void 0:a.data)==null?void 0:g.message;return x.exports.useEffect(()=>{u&&f(u)},[u]),e(q,{children:e("form",{onSubmit:h(I),children:o(C,{p:"1em",direction:"column",children:[e(l,{size:"sm",p:"1em",children:"Tiempo"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("time",{required:!0})),E))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Precio de Tarifa"}),o(c,{children:[e(v,{datalist:S,listname:"provincias",message:b.provincia,children:e(y,s(s({list:"provincias"},n("price",{required:!0})),E))}),d.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(l,{size:"sm",p:"1em",children:"Seleccione rango"}),e(c,{p:"1em",children:e("input",z(s({},n("range",{required:!0})),{type:"range",min:"100",max:"600"}))}),e(l,{size:"sm",p:"1em",children:"Seleccione finalidad"}),o(c,{p:"1em",children:[e(K,{list:p==null?void 0:p.result,label:"finalidadId",register:n,required:!0}),d.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(L,{buttonstate:a==null?void 0:a.isLoading}),r&&e(k,{message:r})]})})})}const ce=[{option:"a\xF1adir",comp:e(le,{url:"tarifas"})},{option:"mostrar",comp:e(ee,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",comp:e(ie,{url:"tarifas",queryKey:"tarifas-id"})},{option:"habilitados",comp:e(Y,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",comp:e(se,{url:"tarifas"})},{option:"asociado",comp:e(l,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(l,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function ze(){const i=localStorage.getItem("jwt");return x.exports.useEffect(()=>{i&&(M.defaults.headers.common.jwt=i)},[]),e(q,{children:o(de,{children:[e($,{linear:X.green,color:"#ffffff"}),e(Q,{children:e(V,{name:"tarifas",children:e(W,{form:ce})})})]})})}const de=U.div`
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
`;export{ze as default};

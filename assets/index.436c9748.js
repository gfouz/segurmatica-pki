var H=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var F=(r,a,i)=>a in r?H(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,x=(r,a)=>{for(var i in a||(a={}))R.call(a,i)&&F(r,i,a[i]);if(w)for(var i of w(a))X.call(a,i)&&F(r,i,a[i]);return r},q=(r,a)=>K(r,P(a));import{j as e,F as g,a as m,r as S,aj as N,J as C,I as v,s as k}from"./index.197da568.js";import{u as z,b as J,s as M,t as Q}from"./store.37b8cf4e.js";import{T as U}from"./Toast.c9a8ea84.js";import{u as O,p as W,b as n,i as p,c as j,S as G,f as L,h as Z,a as $,D as Y,C as ee,F as re}from"./Card.94feb51f.js";import{G as te}from"./GetEnabled.8de66928.js";import{T as ae,N as I,S as ie,G as oe,a as ne}from"./Getter.b8821b94.js";import{u as B,b as V}from"./index.esm.b0a48d8a.js";import{S as se}from"./chakra-ui-select.esm.3da330ac.js";import{I as le,E as ce}from"./ErrorWarning.68e996e2.js";import"./chakra-ui-button.esm.2eba4fb6.js";function _({list:r,register:a,label:i,required:c}){return e(g,{children:e(se,q(x({},a(i,{required:c})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((t,l)=>e("option",{value:t.id,children:t.name},l))}))})}const D=({label:r,register:a,required:i,errors:c,defaultValue:t,info:l})=>m(g,{children:[e(ae,{label:l,hasArrow:!0,arrowSize:15,children:e(le,x({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^[a-zA-Z0-9\s:,.'-]{3,}$/,required:i})))}),e(ce,{label:r,errors:c,info:l})]});function de(r){var T;const{url:a}=r,i=z(J),c=z(M),{stack:t}=i,[l,f]=S.exports.useState(""),{register:d,handleSubmit:h,formState:{errors:o}}=B(),A="/finalidades",{data:u}=O("all-finalidades",()=>L(A)),s=V(E=>W(E,a,t.id)),b=async E=>{s.mutateAsync(E)},y=(T=s==null?void 0:s.data)==null?void 0:T.message;return S.exports.useEffect(()=>{y&&f(y),y==="updated"&&c.setOption("mostrar")},[y]),e(g,{children:e("form",{onSubmit:h(b),children:m(N,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(I,{label:"time",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t.time}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(I,{label:"price",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t==null?void 0:t.price}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:d,errors:o,required:!0,info:p.alpha,defaultValue:t==null?void 0:t.range}),e(n,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),m(N,{p:"1em",direction:"column",children:[e(_,{list:u==null?void 0:u.result,label:"finalidadId",register:d,required:!0}),o.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),m(C,{children:[e(n,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(ie,q(x({},d("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(t==null?void 0:t.enabled)}))]}),e(j,{buttonstate:s==null?void 0:s.isLoading}),l&&e(G,{message:l})]})})})}function ue(r){var s;const{url:a}=r,[i,c]=S.exports.useState(""),{register:t,handleSubmit:l,formState:{errors:f}}=B(),d="/finalidades",{data:h}=O("all-finalidades",()=>L(d)),o=V(b=>Z(a,b)),A=async b=>{o.mutateAsync(b)},u=(s=o==null?void 0:o.data)==null?void 0:s.message;return S.exports.useEffect(()=>{u&&c(u)},[u]),e(g,{children:e("form",{onSubmit:l(A),children:m(N,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"A\xF1adir tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(I,{label:"time",register:t,errors:f,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(I,{label:"price",register:t,errors:f,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:t,errors:f,required:!0,info:p.alpha}),e(n,{color:"#009966",capit:!0,m:"1em 0 0 0",children:"Seleccione finalidad"}),m(C,{p:"1em",children:[e(_,{list:h==null?void 0:h.result,label:"finalidadId",register:t,required:!0}),f.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(j,{buttonstate:o==null?void 0:o.isLoading}),i&&e(G,{message:i})]})})})}const me=[{option:"a\xF1adir",comp:e(ue,{url:"tarifas"})},{option:"mostrar",comp:e(oe,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",comp:e(ne,{url:"tarifas",queryKey:"tarifas-id"})},{option:"habilitados",comp:e(te,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",comp:e(de,{url:"tarifas"})},{option:"asociado",comp:e(v,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(v,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(v,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function ve(){const r=localStorage.getItem("jwt");return S.exports.useEffect(()=>{r&&($.defaults.headers.common.jwt=r)},[]),e(g,{children:m(fe,{children:[e(U,{linear:Q.green,color:"#ffffff"}),e(Y,{children:e(ee,{name:"tarifas",children:e(re,{form:me})})})]})})}const fe=k.div`
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
`;export{ve as default};

var $=Object.defineProperty,M=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var z=(r,a,i)=>a in r?$(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,g=(r,a)=>{for(var i in a||(a={}))Q.call(a,i)&&z(r,i,a[i]);if(E)for(var i of E(a))U.call(a,i)&&z(r,i,a[i]);return r},A=(r,a)=>M(r,O(a));import{j as e,F as h,a as d,r as y,H as F,a2 as G,s as W}from"./index.a965a08b.js";import{t as Z}from"./constants.c1eecf01.js";import{C as J}from"./Toast.c7c7e538.js";import{S as L,D as X}from"./SubmitButton.ff1e26b2.js";import{C as Y,F as ee}from"./Card.c6800e88.js";import{R as re,G as te}from"./Rocket.84a95247.js";import{c as ae,E as T,S as ie,G as oe,a as ne,b as se}from"./SearchPlus.ae3627cf.js";import{u as j,b as le,s as ce}from"./store.df117b59.js";import{u as R,S as B}from"./StatusHandler.f4e4ee84.js";import{u as P,a as _}from"./index.esm.0200c310.js";import{S as de}from"./chakra-ui-select.esm.56befddd.js";import{d as k,p as ue,S as s,i as p,e as me,b as fe}from"./StyledLabel.73e7a9c0.js";import{T as D,I as H,E as N}from"./ErrorWarning.4bc7c3cd.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";function V({list:r,register:a,label:i,required:c}){return e(h,{children:e(de,A(g({},a(i,{required:c})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((t,o)=>e("option",{value:t.id,children:t.name},o))}))})}const q=({label:r,register:a,required:i,errors:c,defaultValue:t,info:o})=>d(h,{children:[e(D,{label:o,hasArrow:!0,arrowSize:15,children:e(H,g({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^\d*(\.\d+)?$/,required:i})))}),e(N,{label:r,errors:c,info:o})]}),K=({label:r,register:a,required:i,errors:c,defaultValue:t,info:o})=>d(h,{children:[e(D,{label:o,hasArrow:!0,arrowSize:15,children:e(H,g({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^[a-zA-Z0-9\s:,.'-]{3,}$/,required:i})))}),e(N,{label:r,errors:c,info:o})]});function pe(r){var I;const{url:a}=r,i=j(le),c=j(ce),{stack:t}=i,[o,f]=y.exports.useState(""),{register:u,handleSubmit:b,formState:{errors:n}}=P(),v="/finalidades",{data:m}=R("all-finalidades",()=>k(v)),l=_(w=>ue(w,a,t.id)),S=async w=>{l.mutateAsync(w)},x=(I=l==null?void 0:l.data)==null?void 0:I.message;return y.exports.useEffect(()=>{x&&f(x),x==="updated"&&c.setOption("mostrar")},[x]),e(h,{children:e("form",{onSubmit:b(S),children:d(F,{p:"1em",direction:"column",children:[e(s,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(s,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(q,{label:"time",register:u,errors:n,required:!0,info:p.numeric,defaultValue:t.time}),e(s,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(q,{label:"price",register:u,errors:n,required:!0,info:p.numeric,defaultValue:t==null?void 0:t.price}),e(s,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(K,{label:"range",register:u,errors:n,required:!0,info:p.alpha,defaultValue:t==null?void 0:t.range}),e(s,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),d(F,{p:"1em",direction:"column",children:[e(V,{list:m==null?void 0:m.result,label:"finalidadId",register:u,required:!0}),n.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),d(G,{children:[e(s,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(ae,A(g({},u("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(t==null?void 0:t.enabled)}))]}),e(L,{buttonstate:l==null?void 0:l.isLoading}),o&&e(B,{message:o})]})})})}function he(r){var l;const{url:a}=r,[i,c]=y.exports.useState(""),{register:t,handleSubmit:o,formState:{errors:f}}=P(),u="/finalidades",{data:b}=R("all-finalidades",()=>k(u)),n=_(S=>me(a,S)),v=async S=>{n.mutateAsync(S)},m=(l=n==null?void 0:n.data)==null?void 0:l.message;return y.exports.useEffect(()=>{m&&c(m)},[m]),e(h,{children:e("form",{onSubmit:o(v),children:d(F,{p:"1em",direction:"column",children:[e(s,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"A\xF1adir tarifa"}),e(s,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(q,{label:"time",register:t,errors:f,required:!0,info:p.numeric}),e(s,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(q,{label:"price",register:t,errors:f,required:!0,info:p.numeric}),e(s,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(K,{label:"range",register:t,errors:f,required:!0,info:p.alpha}),e(s,{color:"#009966",capit:!0,m:"1em 0 0 0",children:"Seleccione finalidad"}),d(G,{p:"1em",children:[e(V,{list:b==null?void 0:b.result,label:"finalidadId",register:t,required:!0}),f.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(L,{buttonstate:n==null?void 0:n.isLoading}),i&&e(B,{message:i})]})})})}const C=[{option:"a\xF1adir",icon:e(T,{}),comp:e(he,{url:"tarifas"})},{option:"mostrar",icon:e(ie,{}),comp:e(oe,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",icon:e(ne,{}),comp:e(se,{allnames:"tarifas"})},{option:"habilitados",icon:e(re,{}),comp:e(te,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",icon:e(T,{}),comp:e(pe,{url:"tarifas"})}];function Le(){const r=localStorage.getItem("jwt");return y.exports.useEffect(()=>{r&&(fe.defaults.headers.common.jwt=r)},[]),e(h,{children:d(be,{children:[e(J,{linear:Z.green,color:"#ffffff"}),e(X,{children:e(Y,{name:"tarifas",options:C,children:e(ee,{options:C})})})]})})}const be=W.div`
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
`;export{Le as default};

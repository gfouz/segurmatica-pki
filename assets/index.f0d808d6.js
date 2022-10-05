var K=Object.defineProperty,P=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var F=(r,a,i)=>a in r?K(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,x=(r,a)=>{for(var i in a||(a={}))V.call(a,i)&&F(r,i,a[i]);if(w)for(var i of w(a))X.call(a,i)&&F(r,i,a[i]);return r},q=(r,a)=>P(r,R(a));import{j as e,F as g,a as u,r as S,H as C,a2 as z,a1 as v,s as k}from"./index.84145a61.js";import{t as M}from"./constants.c1eecf01.js";import{C as Q}from"./Toast.399d4852.js";import{S as O,D as U}from"./SubmitButton.d37232a3.js";import{C as W,F as Z}from"./Card.4f06ee74.js";import{G as $}from"./GetEnabled.c9b1ba58.js";import{N as I,S as J,G as Y,a as ee}from"./Getter.2ace4167.js";import{u as T,b as re,s as te}from"./store.6f1159d1.js";import{u as j,S as G}from"./StatusHandler.4fa71a43.js";import{u as L,a as B}from"./index.esm.d64a2720.js";import{S as ae}from"./chakra-ui-select.esm.7d7cae85.js";import{e as H,p as ie,S as n,i as p,f as oe,b as ne}from"./StyledLabel.97b52d23.js";import{T as se,I as le,E as ce}from"./ErrorWarning.4beaff6e.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";function _({list:r,register:a,label:i,required:c}){return e(g,{children:e(ae,q(x({},a(i,{required:c})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((t,l)=>e("option",{value:t.id,children:t.name},l))}))})}const D=({label:r,register:a,required:i,errors:c,defaultValue:t,info:l})=>u(g,{children:[e(se,{label:l,hasArrow:!0,arrowSize:15,children:e(le,x({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^[a-zA-Z0-9\s:,.'-]{3,}$/,required:i})))}),e(ce,{label:r,errors:c,info:l})]});function de(r){var N;const{url:a}=r,i=T(re),c=T(te),{stack:t}=i,[l,f]=S.exports.useState(""),{register:d,handleSubmit:h,formState:{errors:o}}=L(),A="/finalidades",{data:m}=j("all-finalidades",()=>H(A)),s=B(E=>ie(E,a,t.id)),b=async E=>{s.mutateAsync(E)},y=(N=s==null?void 0:s.data)==null?void 0:N.message;return S.exports.useEffect(()=>{y&&f(y),y==="updated"&&c.setOption("mostrar")},[y]),e(g,{children:e("form",{onSubmit:h(b),children:u(C,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(I,{label:"time",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t.time}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(I,{label:"price",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t==null?void 0:t.price}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:d,errors:o,required:!0,info:p.alpha,defaultValue:t==null?void 0:t.range}),e(n,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),u(C,{p:"1em",direction:"column",children:[e(_,{list:m==null?void 0:m.result,label:"finalidadId",register:d,required:!0}),o.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),u(z,{children:[e(n,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(J,q(x({},d("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(t==null?void 0:t.enabled)}))]}),e(O,{buttonstate:s==null?void 0:s.isLoading}),l&&e(G,{message:l})]})})})}function me(r){var s;const{url:a}=r,[i,c]=S.exports.useState(""),{register:t,handleSubmit:l,formState:{errors:f}}=L(),d="/finalidades",{data:h}=j("all-finalidades",()=>H(d)),o=B(b=>oe(a,b)),A=async b=>{o.mutateAsync(b)},m=(s=o==null?void 0:o.data)==null?void 0:s.message;return S.exports.useEffect(()=>{m&&c(m)},[m]),e(g,{children:e("form",{onSubmit:l(A),children:u(C,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"A\xF1adir tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(I,{label:"time",register:t,errors:f,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(I,{label:"price",register:t,errors:f,required:!0,info:p.numeric}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:t,errors:f,required:!0,info:p.alpha}),e(n,{color:"#009966",capit:!0,m:"1em 0 0 0",children:"Seleccione finalidad"}),u(z,{p:"1em",children:[e(_,{list:h==null?void 0:h.result,label:"finalidadId",register:t,required:!0}),f.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(O,{buttonstate:o==null?void 0:o.isLoading}),i&&e(G,{message:i})]})})})}const ue=[{option:"a\xF1adir",comp:e(me,{url:"tarifas"})},{option:"mostrar",comp:e(Y,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",comp:e(ee,{url:"tarifas",queryKey:"tarifas-id"})},{option:"habilitados",comp:e($,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",comp:e(de,{url:"tarifas"})},{option:"asociado",comp:e(v,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(v,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(v,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function Te(){const r=localStorage.getItem("jwt");return S.exports.useEffect(()=>{r&&(ne.defaults.headers.common.jwt=r)},[]),e(g,{children:u(fe,{children:[e(Q,{linear:M.green,color:"#ffffff"}),e(U,{children:e(W,{name:"tarifas",children:e(Z,{form:ue})})})]})})}const fe=k.div`
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
`;export{Te as default};

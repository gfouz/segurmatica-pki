var k=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var F=(r,a,i)=>a in r?k(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,g=(r,a)=>{for(var i in a||(a={}))$.call(a,i)&&F(r,i,a[i]);if(z)for(var i of z(a))M.call(a,i)&&F(r,i,a[i]);return r},E=(r,a)=>K(r,X(a));import{j as e,F as h,a as d,r as y,H as v,a2 as N,a1 as C,s as Q}from"./index.b7cccbb5.js";import{t as U}from"./constants.c1eecf01.js";import{C as W}from"./Toast.1bbf2185.js";import{S as O,D as Z}from"./SubmitButton.af6348b6.js";import{C as J,F as Y}from"./Card.79b886ab.js";import{G as ee}from"./GetEnabled.e440a4c2.js";import{S as re,G as te,a as ae}from"./GetByName.c10d5a19.js";import{u as T,b as ie,s as oe}from"./store.bebd0824.js";import{u as j,S as G}from"./StatusHandler.9d0da5e5.js";import{u as L,a as B}from"./index.esm.5c5e9822.js";import{S as ne}from"./chakra-ui-select.esm.3f4503b3.js";import{d as H,p as se,S as s,i as f,e as le,b as ce}from"./StyledLabel.46abfa46.js";import{T as _,I as D,E as P}from"./ErrorWarning.3038fd9c.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";function R({list:r,register:a,label:i,required:c}){return e(h,{children:e(ne,E(g({},a(i,{required:c})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((t,o)=>e("option",{value:t.id,children:t.name},o))}))})}const A=({label:r,register:a,required:i,errors:c,defaultValue:t,info:o})=>d(h,{children:[e(_,{label:o,hasArrow:!0,arrowSize:15,children:e(D,g({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^\d*(\.\d+)?$/,required:i})))}),e(P,{label:r,errors:c,info:o})]}),V=({label:r,register:a,required:i,errors:c,defaultValue:t,info:o})=>d(h,{children:[e(_,{label:o,hasArrow:!0,arrowSize:15,children:e(D,g({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^[a-zA-Z0-9\s:,.'-]{3,}$/,required:i})))}),e(P,{label:r,errors:c,info:o})]});function de(r){var w;const{url:a}=r,i=T(ie),c=T(oe),{stack:t}=i,[o,p]=y.exports.useState(""),{register:m,handleSubmit:b,formState:{errors:n}}=L(),I="/finalidades",{data:u}=j("all-finalidades",()=>H(I)),l=B(q=>se(q,a,t.id)),S=async q=>{l.mutateAsync(q)},x=(w=l==null?void 0:l.data)==null?void 0:w.message;return y.exports.useEffect(()=>{x&&p(x),x==="updated"&&c.setOption("mostrar")},[x]),e(h,{children:e("form",{onSubmit:b(S),children:d(v,{p:"1em",direction:"column",children:[e(s,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(s,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(A,{label:"time",register:m,errors:n,required:!0,info:f.numeric,defaultValue:t.time}),e(s,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(A,{label:"price",register:m,errors:n,required:!0,info:f.numeric,defaultValue:t==null?void 0:t.price}),e(s,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(V,{label:"range",register:m,errors:n,required:!0,info:f.alpha,defaultValue:t==null?void 0:t.range}),e(s,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),d(v,{p:"1em",direction:"column",children:[e(R,{list:u==null?void 0:u.result,label:"finalidadId",register:m,required:!0}),n.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),d(N,{children:[e(s,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(re,E(g({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(t==null?void 0:t.enabled)}))]}),e(O,{buttonstate:l==null?void 0:l.isLoading}),o&&e(G,{message:o})]})})})}function me(r){var l;const{url:a}=r,[i,c]=y.exports.useState(""),{register:t,handleSubmit:o,formState:{errors:p}}=L(),m="/finalidades",{data:b}=j("all-finalidades",()=>H(m)),n=B(S=>le(a,S)),I=async S=>{n.mutateAsync(S)},u=(l=n==null?void 0:n.data)==null?void 0:l.message;return y.exports.useEffect(()=>{u&&c(u)},[u]),e(h,{children:e("form",{onSubmit:o(I),children:d(v,{p:"1em",direction:"column",children:[e(s,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"A\xF1adir tarifa"}),e(s,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(A,{label:"time",register:t,errors:p,required:!0,info:f.numeric}),e(s,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(A,{label:"price",register:t,errors:p,required:!0,info:f.numeric}),e(s,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(V,{label:"range",register:t,errors:p,required:!0,info:f.alpha}),e(s,{color:"#009966",capit:!0,m:"1em 0 0 0",children:"Seleccione finalidad"}),d(N,{p:"1em",children:[e(R,{list:b==null?void 0:b.result,label:"finalidadId",register:t,required:!0}),p.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(O,{buttonstate:n==null?void 0:n.isLoading}),i&&e(G,{message:i})]})})})}const ue=[{option:"a\xF1adir",comp:e(me,{url:"tarifas"})},{option:"mostrar",comp:e(te,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",comp:e(ae,{allnames:"rols"})},{option:"habilitados",comp:e(ee,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",comp:e(de,{url:"tarifas"})},{option:"asociado",comp:e(C,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(C,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function Te(){const r=localStorage.getItem("jwt");return y.exports.useEffect(()=>{r&&(ce.defaults.headers.common.jwt=r)},[]),e(h,{children:d(pe,{children:[e(W,{linear:U.green,color:"#ffffff"}),e(Z,{children:e(J,{name:"tarifas",children:e(Y,{form:ue})})})]})})}const pe=Q.div`
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

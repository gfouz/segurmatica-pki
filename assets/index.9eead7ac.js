var D=Object.defineProperty,H=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var C=(t,a,r)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,h=(t,a)=>{for(var r in a||(a={}))X.call(a,r)&&C(t,r,a[r]);if(z)for(var r of z(a))Z.call(a,r)&&C(t,r,a[r]);return t},E=(t,a)=>H(t,P(a));import{j as e,F as f,s as v,r as s,R as $,a as b,aj as F,J,I as k}from"./index.65025839.js";import{u as q,b as Q,s as V,t as W}from"./store.1511ef1d.js";import{T as Y}from"./Toast.7b500241.js";import{u as N,p as ee,b as d,c as L,f as O,h as te,a as re,D as ae,C as oe,F as se}from"./Card.8f9da9f1.js";import{G as ie}from"./GetEnabled.f44fb892.js";import{T as R,G as ne,a as ce}from"./Getter.dd8f0e80.js";import{S as le}from"./chakra-ui-select.esm.21842cd1.js";import{u as j,b as T,a as de}from"./index.esm.63595e96.js";import{I as B,E as U}from"./ErrorWarning.4611fe75.js";import{S as ue}from"./chakra-ui-switch.esm.885129a1.js";import"./chakra-ui-button.esm.4448790b.js";function _({list:t,register:a,label:r,required:i}){return e(f,{children:e(le,E(h({},a(r,{required:i})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((n,c)=>e("option",{value:n.id,children:n.name},c))}))})}function G({message:t}){const[a,r]=s.exports.useState("");return s.exports.useEffect(()=>{switch(t){case"ok":r("todo bien!");break;case"accepted":r("aceptado!");break;case"created":r("realizado!");break;case"updated":r("Actualizado correcto!");break;case"not-authorized":r("no autorizado!");break;case"bad-request":r("solicitud errada!");break;case"Bad Request":r("solicitud errada!");break;case"Forbidden":r("email o password incorrecto!");break;case"Network Error":r("error de red!");break;case"unprocessable":r("datos no procesados!");break;case"Unprocessable-data":r("datos incompletos!");break;case"Request failed with status code 400":r("solicitud fallida!");break;case"not-found":r("datos no encontrados!")}},[t]),e(f,{children:e(me,{children:e("p",{className:t,children:a})})})}const me=v.div`
  margin: 2em;
  font-weight: bolder;
  text-transform: uppercase;

  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: #222222;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
`;function pe(t){return s.exports.createElement("svg",h({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),s.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function he(t){return s.exports.createElement("svg",h({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),s.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const K=({label:t,register:a,required:r,errors:i,defaultValue:n,info:c})=>{const[l,S]=$.useState(!1),u=()=>S(!l);return b(f,{children:[e(R,{label:c,hasArrow:!0,arrowSize:15,children:e(B,h({size:"sm",type:l?"text":"password",cursor:"pointer",variant:"flushed",defaultValue:n},a(t,{required:r})))}),e("div",{style:{margin:"1em 0"},onClick:u,children:l?e(pe,{}):e(he,{})}),e(U,{label:t,errors:i,info:c})]})},M=({register:t,errors:a,defaultValue:r,info:i})=>b(f,{children:[e(R,{label:i,hasArrow:!0,arrowSize:15,children:e(B,h({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(U,{label:"email",errors:a,m:"0 2em",info:i})]});function fe(t){var I;const a=q(Q),r=q(V),{stack:i}=a,{setOption:n}=r;s.exports.useState("");const[c,l]=s.exports.useState(""),[S,u]=s.exports.useState(""),{register:o,handleSubmit:x,formState:{errors:g}}=j(),y="/rols/enabled/true",{data:m}=N("enabled-rolls",()=>O(y)),p=T(A=>ee(A,t.url,i.id),{retry:2}),w=(I=p==null?void 0:p.data)==null?void 0:I.message;return s.exports.useEffect(()=>{w&&l(w),w==="updated"&&n("mostrar"),u(i.name)},[w,i]),e(f,{children:e("form",{onSubmit:x(async A=>{p.mutateAsync(A)}),children:b(F,{direction:"column",children:[e(d,{color:"#009966",m:"1em 0",children:"Actualizar usuario"}),e(d,{capit:!0,children:"Correo electr\xF3nico."}),e(M,{register:o,errors:g}),e(d,{capit:!0,children:"Escriba una contrase\xF1a."}),e(K,{label:"password",register:o,errors:g,required:!0}),e(d,{color:"#009966",capit:!0,children:"Seleccione un rol"}),e(_,{list:m==null?void 0:m.result,label:"rolId",register:o,required:!0}),g.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),b(J,{m:"2em 0",children:[e(d,{capit:!0,color:"#444444",children:"Deshabilitar o habilitar."}),e(ue,E(h({defaultChecked:i.enabled},o("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(L,{buttonstate:p==null?void 0:p.isLoading}),c&&e(G,{message:c})]})})})}const be="http://localhost:5000",Se=de.create({baseURL:be,withCredentials:!1});Se.defaults.headers.common["Content-Type"]="application/json";function xe(t){var y;const{path:a}=t,[r,i]=s.exports.useState("");s.exports.useState([]);const{register:n,handleSubmit:c,formState:{errors:l}}=j(),S="/rols/enabled/true",{data:u}=N("all-enabled-rolls",()=>O(S)),o=T(m=>te(a,m)),x=(y=o==null?void 0:o.data)==null?void 0:y.message;return s.exports.useEffect(()=>{i(x)},[x]),e(f,{children:e("form",{onSubmit:c(async m=>{o==null||o.mutateAsync(m)}),children:b(F,{direction:"column",children:[e(d,{color:"#009966",m:"1em 0",capit:!0,children:"A\xF1adir usuario"}),e(d,{capit:!0,children:"Correo electr\xF3nico."}),e(M,{register:n,errors:l}),e(d,{capit:!0,children:"Escriba contrase\xF1a."}),e(K,{label:"password",register:n,errors:l,required:!0}),e(d,{color:"#009966",capit:!0,children:"Seleccione rol de usuario."}),e(_,{list:u==null?void 0:u.result,label:"rolId",register:n,required:!0}),l.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),e(L,{buttonstate:o==null?void 0:o.isLoading}),r&&e(G,{message:r})]})})})}const ge=[{option:"a\xF1adir",comp:e(xe,{path:"users"})},{option:"mostrar",comp:e(ne,{url:"users",queryKey:"all-users"})},{option:"buscar",comp:e(ce,{url:"users",queryKey:"user-id"})},{option:"habilitados",comp:e(ie,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"actualizar",comp:e(fe,{queryKey:"user-update",url:"users"})},{option:"asociado",comp:e(k,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(k,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(k,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function Re(){const t=localStorage.getItem("jwt");return s.exports.useEffect(()=>{t&&(re.defaults.headers.common.jwt=t)},[]),e(f,{children:b(ye,{children:[e(Y,{linear:W.green,color:"#ffffff"}),e(ae,{children:e(oe,{name:"usuarios",children:e(se,{form:ge})})})]})})}const ye=v.div`
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
`;export{Re as default};

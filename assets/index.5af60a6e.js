var D=Object.defineProperty,P=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(t,a,r)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,h=(t,a)=>{for(var r in a||(a={}))Z.call(a,r)&&v(t,r,a[r]);if(q)for(var r of q(a))$.call(a,r)&&v(t,r,a[r]);return t},E=(t,a)=>P(t,X(a));import{j as e,F as f,s as N,r as s,R as Q,a as b,H as L,a2 as W,a1 as k}from"./index.84145a61.js";import{t as J}from"./constants.c1eecf01.js";import{C as V}from"./Toast.399d4852.js";import{S as O,D as Y}from"./SubmitButton.d37232a3.js";import{C as ee,F as te}from"./Card.4f06ee74.js";import{G as re}from"./GetEnabled.c9b1ba58.js";import{S as ae,G as oe,a as se}from"./Getter.2ace4167.js";import{u as F,b as ie,s as ne}from"./store.6f1159d1.js";import{S as ce}from"./chakra-ui-select.esm.7d7cae85.js";import{u as R,a as B}from"./index.esm.d64a2720.js";import{u as j}from"./StatusHandler.4fa71a43.js";import{e as T,p as le,S as d,i as I,a as de,f as ue,b as me}from"./StyledLabel.97b52d23.js";import{T as U,I as _,E as z}from"./ErrorWarning.4beaff6e.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";function G({list:t,register:a,label:r,required:i}){return e(f,{children:e(ce,E(h({},a(r,{required:i})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((n,c)=>e("option",{value:n.id,children:n.name},c))}))})}function H({message:t}){const[a,r]=s.exports.useState("");return s.exports.useEffect(()=>{switch(t){case"ok":r("todo bien!");break;case"accepted":r("aceptado!");break;case"created":r("realizado!");break;case"updated":r("Actualizado correcto!");break;case"not-authorized":r("no autorizado!");break;case"bad-request":r("solicitud errada!");break;case"Bad Request":r("solicitud errada!");break;case"Forbidden":r("email o password incorrecto!");break;case"Network Error":r("error de red!");break;case"unprocessable":r("datos no procesados!");break;case"Unprocessable-data":r("datos incompletos!");break;case"Request failed with status code 400":r("solicitud fallida!");break;case"not-found":r("datos no encontrados!")}},[t]),e(f,{children:e(pe,{children:e("p",{className:t,children:a})})})}const pe=N.div`
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
`;function he(t){return s.exports.createElement("svg",h({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),s.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function fe(t){return s.exports.createElement("svg",h({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),s.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const K=({label:t,register:a,required:r,errors:i,defaultValue:n,info:c})=>{const[l,S]=Q.useState(!1),u=()=>S(!l);return b(f,{children:[e(U,{label:c,hasArrow:!0,arrowSize:15,children:e(_,h({size:"sm",type:l?"text":"password",cursor:"pointer",variant:"flushed",defaultValue:n},a(t,{required:r})))}),e("div",{style:{margin:"1em 0"},onClick:u,children:l?e(he,{}):e(fe,{})}),e(z,{label:t,errors:i,info:c})]})},M=({register:t,errors:a,defaultValue:r,info:i})=>b(f,{children:[e(U,{label:i,hasArrow:!0,arrowSize:15,children:e(_,h({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(z,{label:"email",errors:a,m:"0 2em",info:i})]});function be(t){var C;const a=F(ie),r=F(ne),{stack:i}=a,{setOption:n}=r;s.exports.useState("");const[c,l]=s.exports.useState(""),[S,u]=s.exports.useState(""),{register:o,handleSubmit:x,formState:{errors:g}}=R(),y="/rols/enabled/true",{data:m}=j("enabled-rolls",()=>T(y)),p=B(A=>le(A,t.url,i.id),{retry:2}),w=(C=p==null?void 0:p.data)==null?void 0:C.message;return s.exports.useEffect(()=>{w&&l(w),w==="updated"&&n("mostrar"),u(i.name)},[w,i]),e(f,{children:e("form",{onSubmit:x(async A=>{p.mutateAsync(A)}),children:b(L,{direction:"column",p:"0 1em",children:[e(d,{color:"#009966",m:"1em 0",children:"Actualizar usuario"}),e(d,{capit:!0,children:"Correo electr\xF3nico."}),e(M,{info:I.email,register:o,errors:g}),e(d,{capit:!0,children:"Escriba una contrase\xF1a."}),e(K,{label:"password",register:o,errors:g,required:!0}),e(d,{color:"#009966",capit:!0,children:"Seleccione un rol"}),e(G,{list:m==null?void 0:m.result,label:"rolId",register:o,required:!0}),e(z,{label:"rolId",errors:g,info:I.select}),b(W,{m:"2em 0",children:[e(d,{capit:!0,color:"#444444",children:"Deshabilitar o habilitar."}),e(ae,E(h({defaultChecked:Boolean(i.enabled)},o("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(O,{buttonstate:p==null?void 0:p.isLoading}),c&&e(H,{message:c})]})})})}const Se="http://localhost:5000",xe=de.create({baseURL:Se,withCredentials:!1});xe.defaults.headers.common["Content-Type"]="application/json";function ge(t){var y;const{path:a}=t,[r,i]=s.exports.useState("");s.exports.useState([]);const{register:n,handleSubmit:c,formState:{errors:l}}=R(),S="/rols/enabled/true",{data:u}=j("all-enabled-rolls",()=>T(S)),o=B(m=>ue(a,m)),x=(y=o==null?void 0:o.data)==null?void 0:y.message;return s.exports.useEffect(()=>{i(x)},[x]),e(f,{children:e("form",{onSubmit:c(async m=>{o==null||o.mutateAsync(m)}),children:b(L,{direction:"column",children:[e(d,{color:"#009966",m:"1em 0",capit:!0,children:"A\xF1adir usuario"}),e(d,{capit:!0,children:"Correo electr\xF3nico."}),e(M,{register:n,errors:l,info:I.email}),e(d,{capit:!0,children:"Escriba contrase\xF1a."}),e(K,{label:"password",register:n,errors:l,required:!0}),e(d,{color:"#009966",capit:!0,children:"Seleccione rol de usuario."}),e(G,{list:u==null?void 0:u.result,label:"rolId",register:n,required:!0}),l.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),e(O,{buttonstate:o==null?void 0:o.isLoading}),r&&e(H,{message:r})]})})})}const ye=[{option:"a\xF1adir",comp:e(ge,{path:"users"})},{option:"mostrar",comp:e(oe,{url:"users",queryKey:"all-users"})},{option:"buscar",comp:e(se,{url:"users",queryKey:"user-id"})},{option:"habilitados",comp:e(re,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"actualizar",comp:e(be,{queryKey:"user-update",url:"users"})},{option:"asociado",comp:e(k,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(k,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(k,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})}];function _e(){const t=localStorage.getItem("jwt");return s.exports.useEffect(()=>{t&&(me.defaults.headers.common.jwt=t)},[]),e(f,{children:b(we,{children:[e(V,{linear:J.green,color:"#ffffff"}),e(Y,{children:e(ee,{name:"usuarios",children:e(te,{form:ye})})})]})})}const we=N.div`
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
`;export{_e as default};

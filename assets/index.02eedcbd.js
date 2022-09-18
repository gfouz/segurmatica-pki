var V=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var z=(t,a,r)=>a in t?V(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(t,a)=>{for(var r in a||(a={}))$.call(a,r)&&z(t,r,a[r]);if(I)for(var r of I(a))J.call(a,r)&&z(t,r,a[r]);return t},q=(t,a)=>W(t,X(a));import{j as e,F as b,a as i,s as R,r as n,K as c,J as E,M as h}from"./index.0150df0d.js";import{u as C,b as Q,s as P,t as Y}from"./store.589a1c54.js";import{T as Z}from"./Toast.d11967c9.js";import{u as T,p as ee,b as _,e as U,f as re,a as te,D as ae,C as se,F as oe}from"./Card.1ca1c1fe.js";import{G as ie}from"./GetEnabled.9961a451.js";import{T as le,e as ne,t as F,c as B,I as ce,d as G,S as L,p as j,G as de,a as ue}from"./Getter.df96f5a9.js";import{S as me}from"./chakra-ui-select.esm.7f24c6aa.js";import{u as K,b as D,F as pe,a as he}from"./index.esm.7b029979.js";import{I as v}from"./chakra-ui-input.esm.c17c47de.js";import{S as be}from"./chakra-ui-switch.esm.973a6143.js";import"./chakra-ui-button.esm.49817bac.js";function H({list:t,register:a,label:r,required:l}){return e(b,{children:e(me,q(o({},a(r,{required:l})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((d,p)=>e("option",{value:d.id,children:d.name},p))}))})}function O(t){return i(b,{children:[e("datalist",{id:t.listname,children:t.datalist&&t.datalist.map(a=>e("option",{value:a},a.toString()))}),e(le,{label:t.message,hasArrow:!0,arrowSize:15,children:t.children})]})}function M({message:t}){const[a,r]=n.exports.useState("");return n.exports.useEffect(()=>{switch(t){case"ok":r("todo bien!");break;case"accepted":r("aceptado!");break;case"created":r("realizado!");break;case"updated":r("Actualizado correcto!");break;case"not-authorized":r("no autorizado!");break;case"bad-request":r("solicitud errada!");break;case"Bad Request":r("solicitud errada!");break;case"Forbidden":r("email o password incorrecto!");break;case"Network Error":r("error de red!");break;case"unprocessable":r("datos no procesados!");break;case"Unprocessable-data":r("datos incompletos!");break;case"Request failed with status code 400":r("solicitud fallida!");break;case"not-found":r("datos no encontrados!")}},[t]),e(b,{children:e(fe,{children:e("p",{className:t,children:a})})})}const fe=R.div`
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
`;function Se(t){var N;const a=C(Q),r=C(P),{stack:l}=a,{setOption:d}=r;n.exports.useState("");const[p,f]=n.exports.useState(""),[A,S]=n.exports.useState(""),{register:s,handleSubmit:g,formState:{errors:y}}=K(),x="/rols/enabled/true",{data:u}=T("enabled-rolls",()=>U(x)),m=D(k=>ee(k,t.url,l.id),{retry:2}),w=(N=m==null?void 0:m.data)==null?void 0:N.message;return n.exports.useEffect(()=>{w&&f(w),w==="updated"&&d("mostrar"),S(l.name)},[w,l]),e(b,{children:i("form",{onSubmit:g(async k=>{m.mutateAsync(k)}),children:[e(c,{children:e(E,{size:"sm",color:"#009966",m:"1em",children:l.email})}),e(c,{children:i(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"correo electr\xF3nico"})}),e(O,{datalist:ne,listname:"email",message:F.provincia,children:e(v,o(o({defaultValue:l.email,list:"email"},s("email",{required:!0})),B))}),y.email&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{children:i(h,{children:[e("label",{htmlFor:"password",children:e("strong",{className:"byid-input-label",children:"Escriba una contrase\xF1a"})}),e(O,{datalist:ce,listname:"password",message:F.provincia,children:e(v,o(o({list:"password"},s("password",{required:!0})),G))}),y.password&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:i(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Seleccione un rol"})}),e(H,{list:u==null?void 0:u.result,label:"rolid",register:s,required:!0}),y.rolid&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{children:i(c,{m:"2em 0",children:[e(pe,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(be,q(o({defaultChecked:l.enabled},s("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]})}),e(_,{buttonstate:m==null?void 0:m.isLoading}),p&&e(M,{message:p})]})})}const ge="http://localhost:5000",ye=he.create({baseURL:ge,withCredentials:!1});ye.defaults.headers.common["Content-Type"]="application/json";function xe(t){var x;const{path:a}=t,[r,l]=n.exports.useState("");n.exports.useState([]);const{register:d,handleSubmit:p,formState:{errors:f}}=K(),A="/rols/enabled/true",{data:S}=T("all-enabled-rolls",()=>U(A)),s=D(u=>re(a,u)),g=(x=s==null?void 0:s.data)==null?void 0:x.message;return n.exports.useEffect(()=>{l(g)},[g]),e(b,{children:i("form",{onSubmit:p(async u=>{s==null||s.mutateAsync(u)}),children:[e(c,{p:"1em",children:i(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba Email"})}),e(L,{datalist:j,listname:"provincias",message:F.provincia,children:e(v,o(o({color:"#666666",fontWeight:"bolder",list:"provincias"},d("email",{required:!0})),B))}),f.email&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:i(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba contrase\xF1a"})}),e(L,{datalist:j,listname:"provincias",message:F.provincia,children:e(v,o(o({color:"#666666",fontWeight:"bolder",list:"provincias"},d("password",{required:!0})),G))}),f.password&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:i(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Seleccione un rol"})}),e(H,{list:S==null?void 0:S.result,label:"rolid",register:d,required:!0}),f.rolid&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(_,{buttonstate:s==null?void 0:s.isLoading}),r&&e(M,{message:r})]})})}const we=[{option:"a\xF1adir",comp:e(xe,{path:"users"})},{option:"mostrar",comp:e(de,{url:"users",queryKey:"all-users"})},{option:"buscar",comp:e(ue,{url:"users",queryKey:"userid"})},{option:"habilitados",comp:e(ie,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"actualizar",comp:e(Se,{queryKey:"user-update",url:"users"})},{option:"asociado",comp:e(E,{size:"md",children:"NO EXISTEN ASOCIACIONES!"})},{option:"asociado habilitado",comp:e(E,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function Te(){const t=localStorage.getItem("jwt");return n.exports.useEffect(()=>{t&&(te.defaults.headers.common.jwt=t)},[]),e(b,{children:i(Fe,{children:[e(Z,{linear:Y.green,color:"#ffffff"}),e(ae,{children:e(se,{name:"usuarios",children:e(oe,{form:we})})})]})})}const Fe=R.div`
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

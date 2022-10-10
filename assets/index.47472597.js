var Q=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(t,o,r)=>o in t?Q(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,A=(t,o)=>{for(var r in o||(o={}))V.call(o,r)&&B(t,r,o[r]);if(L)for(var r of L(o))X.call(o,r)&&B(t,r,o[r]);return t},C=(t,o)=>W(t,J(o));import{j as e,F as g,s as q,r as a,R as Y,a as b,H as P,a2 as U,a3 as ee,G as te,a1 as re}from"./index.a965a08b.js";import{t as oe}from"./constants.c1eecf01.js";import{C as ae}from"./Toast.c7c7e538.js";import{S as H,D as se}from"./SubmitButton.ff1e26b2.js";import{C as ie,F as ne}from"./Card.c6800e88.js";import{R as ce,G as le}from"./Rocket.84a95247.js";import{c as de,A as ue,E as R,S as me,G as pe,a as he,b as fe}from"./SearchPlus.ae3627cf.js";import{u as G,b as be,s as Se}from"./store.df117b59.js";import{S as _}from"./chakra-ui-select.esm.56befddd.js";import{u as M,a as N}from"./index.esm.0200c310.js";import{u as E,S as ge}from"./StatusHandler.f4e4ee84.js";import{d as F,p as xe,S as p,i as v,a as ye,e as we,f as Ae,b as ke}from"./StyledLabel.73e7a9c0.js";import{T,I as D,E as I}from"./ErrorWarning.4bc7c3cd.js";import{C as Ee}from"./CodeBranch.b0aee27b.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";function K({list:t,register:o,label:r,required:n}){return e(g,{children:e(_,C(A({},o(r,{required:n})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((c,d)=>e("option",{value:c.id,children:c.name},d))}))})}function Z({message:t}){const[o,r]=a.exports.useState("");return a.exports.useEffect(()=>{switch(t){case"ok":r("todo bien!");break;case"accepted":r("aceptado!");break;case"created":r("realizado!");break;case"updated":r("Actualizado correcto!");break;case"not-authorized":r("no autorizado!");break;case"bad-request":r("solicitud errada!");break;case"Bad Request":r("solicitud errada!");break;case"Forbidden":r("email o password incorrecto!");break;case"Network Error":r("error de red!");break;case"unprocessable":r("datos no procesados!");break;case"Unprocessable-data":r("datos incompletos!");break;case"Request failed with status code 400":r("solicitud fallida!");break;case"not-found":r("datos no encontrados!")}},[t]),e(g,{children:e(ze,{children:e("p",{className:t,children:o})})})}const ze=q.div`
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
`;function Ce(t){return a.exports.createElement("svg",A({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),a.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function ve(t){return a.exports.createElement("svg",A({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),a.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const $=({label:t,register:o,required:r,errors:n,defaultValue:c,info:d})=>{const[l,s]=Y.useState(!1),h=()=>s(!l);return b(g,{children:[e(T,{label:d,hasArrow:!0,arrowSize:15,children:e(D,A({size:"sm",type:l?"text":"password",cursor:"pointer",variant:"flushed",defaultValue:c},o(t,{required:r})))}),e("div",{style:{margin:"1em 0"},onClick:h,children:l?e(Ce,{}):e(ve,{})}),e(I,{label:t,errors:n,info:d})]})},O=({register:t,errors:o,defaultValue:r,info:n})=>b(g,{children:[e(T,{label:n,hasArrow:!0,arrowSize:15,children:e(D,A({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(I,{label:"email",errors:o,m:"0 2em",info:n})]});function qe(t){var w;const o=G(be),r=G(Se),{stack:n}=o,{setOption:c}=r;a.exports.useState("");const[d,l]=a.exports.useState(""),[s,h]=a.exports.useState(""),{register:i,handleSubmit:k,formState:{errors:S}}=M(),x="/rols/enabled/true",{data:f}=E("enabled-rolls",()=>F(x)),u=N(z=>xe(z,t.url,n.id),{retry:2}),y=(w=u==null?void 0:u.data)==null?void 0:w.message;return a.exports.useEffect(()=>{y&&l(y),y==="updated"&&c("mostrar"),h(n.name)},[y,n]),e(g,{children:e("form",{onSubmit:k(async z=>{u.mutateAsync(z)}),children:b(P,{direction:"column",p:"0 1em",children:[e(p,{color:"#009966",m:"1em 0",children:"Actualizar usuario"}),e(p,{capit:!0,children:"Correo electr\xF3nico."}),e(O,{info:v.email,register:i,errors:S}),e(p,{capit:!0,children:"Escriba una contrase\xF1a."}),e($,{label:"password",register:i,errors:S,required:!0}),e(p,{color:"#009966",capit:!0,children:"Seleccione un rol"}),e(K,{list:f==null?void 0:f.result,label:"rolId",register:i,required:!0}),e(I,{label:"rolId",errors:S,info:v.select}),b(U,{m:"2em 0",children:[e(p,{capit:!0,color:"#444444",children:"Deshabilitar o habilitar."}),e(de,C(A({defaultChecked:Boolean(n.enabled)},i("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(H,{buttonstate:u==null?void 0:u.isLoading}),d&&e(Z,{message:d})]})})})}const Fe="http://localhost:5000",Ie=ye.create({baseURL:Fe,withCredentials:!1});Ie.defaults.headers.common["Content-Type"]="application/json";function Le(t){var x;const{path:o}=t,[r,n]=a.exports.useState("");a.exports.useState([]);const{register:c,handleSubmit:d,formState:{errors:l}}=M(),s="/rols/enabled/true",{data:h}=E("all-enabled-rolls",()=>F(s)),i=N(f=>we(o,f)),k=(x=i==null?void 0:i.data)==null?void 0:x.message;return a.exports.useEffect(()=>{n(k)},[k]),e(g,{children:e("form",{onSubmit:d(async f=>{i==null||i.mutateAsync(f)}),children:b(P,{direction:"column",children:[e(p,{color:"#009966",m:"1em 0",capit:!0,children:"A\xF1adir usuario"}),e(p,{capit:!0,children:"Correo electr\xF3nico."}),e(O,{register:c,errors:l,info:v.email}),e(p,{capit:!0,children:"Escriba contrase\xF1a."}),e($,{label:"password",register:c,errors:l,required:!0}),e(p,{color:"#009966",capit:!0,children:"Seleccione rol de usuario."}),e(K,{list:h==null?void 0:h.result,label:"rolId",register:c,required:!0}),l.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),e(H,{buttonstate:i==null?void 0:i.isLoading}),r&&e(Z,{message:r})]})})})}function Be(){var u,y;const t="users/rol",o="rols",[r,n]=a.exports.useState(""),[c,d]=a.exports.useState(""),{data:l}=E("rols-all",()=>F(o)),{data:s,isLoading:h,isError:i,refetch:k}=E("users-by-rols",()=>Ae(t,c));s==null||s.result;const S=l==null?void 0:l.result,x=((y=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:y.message)||(s==null?void 0:s.message);a.exports.useEffect(()=>{n(x)},[x]);const f=m=>{var w;d((w=m==null?void 0:m.target)==null?void 0:w.value)};return a.exports.useEffect(()=>{k()},[c]),e(g,{children:e(U,{p:"1em",children:b(ee,{children:[e("label",{htmlFor:"association",children:e(p,{m:"2em 0",color:"#009966",children:"Buscar usuario por rols:"})}),e(_,{placeholder:"Select option",size:"xm",color:"#000000",onChange:m=>f(m),children:S==null?void 0:S.map((m,w)=>e("option",{value:m.id,children:m.email||m.name},w))}),b(Re,{children:[i&&e("div",{children:"An error ocurred..."}),h&&b("div",{children:[e(te,{size:"sm",color:"white"}),e(re,{color:"white",children:"Loading..."})]}),e(ue,{data:s==null?void 0:s.result}),r&&e(ge,{message:r})]})]})})})}const Re=q.div`
  width: 100%;
`,j=[{option:"a\xF1adir",icon:e(R,{}),comp:e(Le,{path:"users"})},{option:"mostrar",icon:e(me,{}),comp:e(pe,{url:"users",queryKey:"all-users"})},{option:"buscar",icon:e(he,{}),comp:e(fe,{allnames:"users"})},{option:"habilitados",icon:e(ce,{}),comp:e(le,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"asociado",icon:e(Ee,{}),comp:e(Be,{})},{option:"actualizar",icon:e(R,{}),comp:e(qe,{queryKey:"user-update",url:"users"})}];function Xe(){const t=localStorage.getItem("jwt");return a.exports.useEffect(()=>{t&&(ke.defaults.headers.common.jwt=t)},[]),e(g,{children:b(Ge,{children:[e(ae,{linear:oe.green,color:"#ffffff"}),e(se,{children:e(ie,{name:"usuarios",options:j,children:e(ne,{options:j})})})]})})}const Ge=q.div`
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
`;export{Xe as default};

var $=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var B=(t,a,r)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,A=(t,a)=>{for(var r in a||(a={}))X.call(a,r)&&B(t,r,a[r]);if(L)for(var r of L(a))J.call(a,r)&&B(t,r,a[r]);return t},C=(t,a)=>Q(t,W(a));import{j as e,F as g,s as I,r as o,R as V,a as b,H as G,a2 as j,a3 as Y,G as ee,a1 as N}from"./index.b7cccbb5.js";import{t as te}from"./constants.c1eecf01.js";import{C as re}from"./Toast.1bbf2185.js";import{S as P,D as ae}from"./SubmitButton.af6348b6.js";import{C as oe,F as se}from"./Card.79b886ab.js";import{G as ie}from"./GetEnabled.e440a4c2.js";import{S as ne,A as ce,G as le,a as de}from"./GetByName.c10d5a19.js";import{u as R,b as ue,s as me}from"./store.bebd0824.js";import{S as U}from"./chakra-ui-select.esm.3f4503b3.js";import{u as H,a as T}from"./index.esm.5c5e9822.js";import{u as E,S as pe}from"./StatusHandler.9d0da5e5.js";import{d as q,p as he,S as p,i as v,a as fe,e as be,f as Se,b as ge}from"./StyledLabel.46abfa46.js";import{T as _,I as M,E as F}from"./ErrorWarning.3038fd9c.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";function O({list:t,register:a,label:r,required:n}){return e(g,{children:e(U,C(A({},a(r,{required:n})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((c,d)=>e("option",{value:c.id,children:c.name},d))}))})}function D({message:t}){const[a,r]=o.exports.useState("");return o.exports.useEffect(()=>{switch(t){case"ok":r("todo bien!");break;case"accepted":r("aceptado!");break;case"created":r("realizado!");break;case"updated":r("Actualizado correcto!");break;case"not-authorized":r("no autorizado!");break;case"bad-request":r("solicitud errada!");break;case"Bad Request":r("solicitud errada!");break;case"Forbidden":r("email o password incorrecto!");break;case"Network Error":r("error de red!");break;case"unprocessable":r("datos no procesados!");break;case"Unprocessable-data":r("datos incompletos!");break;case"Request failed with status code 400":r("solicitud fallida!");break;case"not-found":r("datos no encontrados!")}},[t]),e(g,{children:e(xe,{children:e("p",{className:t,children:a})})})}const xe=I.div`
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
`;function ye(t){return o.exports.createElement("svg",A({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),o.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function we(t){return o.exports.createElement("svg",A({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),o.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const K=({label:t,register:a,required:r,errors:n,defaultValue:c,info:d})=>{const[l,s]=V.useState(!1),h=()=>s(!l);return b(g,{children:[e(_,{label:d,hasArrow:!0,arrowSize:15,children:e(M,A({size:"sm",type:l?"text":"password",cursor:"pointer",variant:"flushed",defaultValue:c},a(t,{required:r})))}),e("div",{style:{margin:"1em 0"},onClick:h,children:l?e(ye,{}):e(we,{})}),e(F,{label:t,errors:n,info:d})]})},Z=({register:t,errors:a,defaultValue:r,info:n})=>b(g,{children:[e(_,{label:n,hasArrow:!0,arrowSize:15,children:e(M,A({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(F,{label:"email",errors:a,m:"0 2em",info:n})]});function Ae(t){var w;const a=R(ue),r=R(me),{stack:n}=a,{setOption:c}=r;o.exports.useState("");const[d,l]=o.exports.useState(""),[s,h]=o.exports.useState(""),{register:i,handleSubmit:k,formState:{errors:S}}=H(),x="/rols/enabled/true",{data:f}=E("enabled-rolls",()=>q(x)),u=T(z=>he(z,t.url,n.id),{retry:2}),y=(w=u==null?void 0:u.data)==null?void 0:w.message;return o.exports.useEffect(()=>{y&&l(y),y==="updated"&&c("mostrar"),h(n.name)},[y,n]),e(g,{children:e("form",{onSubmit:k(async z=>{u.mutateAsync(z)}),children:b(G,{direction:"column",p:"0 1em",children:[e(p,{color:"#009966",m:"1em 0",children:"Actualizar usuario"}),e(p,{capit:!0,children:"Correo electr\xF3nico."}),e(Z,{info:v.email,register:i,errors:S}),e(p,{capit:!0,children:"Escriba una contrase\xF1a."}),e(K,{label:"password",register:i,errors:S,required:!0}),e(p,{color:"#009966",capit:!0,children:"Seleccione un rol"}),e(O,{list:f==null?void 0:f.result,label:"rolId",register:i,required:!0}),e(F,{label:"rolId",errors:S,info:v.select}),b(j,{m:"2em 0",children:[e(p,{capit:!0,color:"#444444",children:"Deshabilitar o habilitar."}),e(ne,C(A({defaultChecked:Boolean(n.enabled)},i("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(P,{buttonstate:u==null?void 0:u.isLoading}),d&&e(D,{message:d})]})})})}const ke="http://localhost:5000",Ee=fe.create({baseURL:ke,withCredentials:!1});Ee.defaults.headers.common["Content-Type"]="application/json";function ze(t){var x;const{path:a}=t,[r,n]=o.exports.useState("");o.exports.useState([]);const{register:c,handleSubmit:d,formState:{errors:l}}=H(),s="/rols/enabled/true",{data:h}=E("all-enabled-rolls",()=>q(s)),i=T(f=>be(a,f)),k=(x=i==null?void 0:i.data)==null?void 0:x.message;return o.exports.useEffect(()=>{n(k)},[k]),e(g,{children:e("form",{onSubmit:d(async f=>{i==null||i.mutateAsync(f)}),children:b(G,{direction:"column",children:[e(p,{color:"#009966",m:"1em 0",capit:!0,children:"A\xF1adir usuario"}),e(p,{capit:!0,children:"Correo electr\xF3nico."}),e(Z,{register:c,errors:l,info:v.email}),e(p,{capit:!0,children:"Escriba contrase\xF1a."}),e(K,{label:"password",register:c,errors:l,required:!0}),e(p,{color:"#009966",capit:!0,children:"Seleccione rol de usuario."}),e(O,{list:h==null?void 0:h.result,label:"rolId",register:c,required:!0}),l.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),e(P,{buttonstate:i==null?void 0:i.isLoading}),r&&e(D,{message:r})]})})})}function Ce(){var u,y;const t="users/rol",a="rols",[r,n]=o.exports.useState(""),[c,d]=o.exports.useState(""),{data:l}=E("rols-all",()=>q(a)),{data:s,isLoading:h,isError:i,refetch:k}=E("users-by-rols",()=>Se(t,c));s==null||s.result;const S=l==null?void 0:l.result,x=((y=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:y.message)||(s==null?void 0:s.message);o.exports.useEffect(()=>{n(x)},[x]);const f=m=>{var w;d((w=m==null?void 0:m.target)==null?void 0:w.value)};return o.exports.useEffect(()=>{k()},[c]),e(g,{children:e(j,{p:"1em",children:b(Y,{children:[e("label",{htmlFor:"association",children:e(p,{m:"2em 0",color:"#009966",children:"Buscar usuario por rols:"})}),e(U,{placeholder:"Select option",size:"xm",color:"#000000",onChange:m=>f(m),children:S==null?void 0:S.map((m,w)=>e("option",{value:m.id,children:m.email||m.name},w))}),b(ve,{children:[i&&e("div",{children:"An error ocurred..."}),h&&b("div",{children:[e(ee,{size:"sm",color:"white"}),e(N,{color:"white",children:"Loading..."})]}),e(ce,{data:s==null?void 0:s.result}),r&&e(pe,{message:r})]})]})})})}const ve=I.div`
  width: 100%;
`,Ie=[{option:"a\xF1adir",comp:e(ze,{path:"users"})},{option:"mostrar",comp:e(le,{url:"users",queryKey:"all-users"})},{option:"buscar",comp:e(de,{allnames:"users"})},{option:"habilitados",comp:e(ie,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"actualizar",comp:e(Ae,{queryKey:"user-update",url:"users"})},{option:"asociado",comp:e(Ce,{})},{option:"asociado habilitado",comp:e(N,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function Ze(){const t=localStorage.getItem("jwt");return o.exports.useEffect(()=>{t&&(ge.defaults.headers.common.jwt=t)},[]),e(g,{children:b(qe,{children:[e(re,{linear:te.green,color:"#ffffff"}),e(ae,{children:e(oe,{name:"usuarios",children:e(se,{form:Ie})})})]})})}const qe=I.div`
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
`;export{Ze as default};

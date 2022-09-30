var j=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var b=(e,s,a)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,c=(e,s)=>{for(var a in s||(s={}))I.call(s,a)&&b(e,a,s[a]);if(g)for(var a of g(s))k.call(s,a)&&b(e,a,s[a]);return e},w=(e,s)=>A(e,C(s));import{r,a as d,F as h,j as t,s as p,H as q,I as B,J as x,K as S,u as N}from"./index.65025839.js";import{a as R,u as H,b as M}from"./index.esm.63595e96.js";import{I as E,E as y}from"./ErrorWarning.4611fe75.js";import{S as U}from"./SubmitButton.fd1372e6.js";import{L as P}from"./Layout.122b2229.js";import"./Toast.7b500241.js";import"./chakra-ui-button.esm.4448790b.js";const T={size:"sm",type:"email",variant:"flushed"};function _(e){return r.exports.createElement("svg",c({viewBox:"0 0 576 512",width:e.width||"1em",length:e.height||"auto"},e),r.exports.createElement("path",{fill:e.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function J(e){return r.exports.createElement("svg",c({viewBox:"0 0 640 512",width:e.width||"1em",length:e.height||"auto"},e),r.exports.createElement("path",{fill:e.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const K=({label:e,register:s,required:a})=>{const[n,u]=r.exports.useState(!1),m=()=>u(!n);return d(h,{children:[t(E,w(c({},s(e,{required:a})),{size:"sm",type:n?"text":"password",variant:"flushed"})),t("div",{style:{margin:"1em 0"},onClick:m,children:n?t(_,{}):t(J,{})})]})},W=["ok","updated","enabled","associated","created","accepted","not-authorized","bad-request","Bad Request","Forbidden","Network Error","unprocessable","Unprocessable-data","not-found","Not Found","found by id","gotten-by-id","Unprocessable Entity","Request failed with status code 401","Request failed with status code 422"];function $({message:e}){const[s,a]=r.exports.useState("");return r.exports.useEffect(()=>{W.map(n=>{switch(e){case n:a(n);break}})},[e]),t(h,{children:t(D,{children:t("p",{className:e,children:s})})})}const D=p.div`
  margin: 2em;
  font-weight: bolder;
  font-size: 0.7em;
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
  .enabled {
    color: #446344;
  }
`,G="http://localhost:5000/",v=R.create({baseURL:G,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";const O=()=>{const[e,s]=r.exports.useState(""),{register:a,handleSubmit:n,formState:{errors:u}}=H();async function m(l){var f;try{const i=await v.post("login",l);return s((f=i.data)==null?void 0:f.message),i.data}catch(i){return i==null?void 0:i.message}}const{data:o,mutateAsync:z,isLoading:F,isError:Y,isSuccess:Z}=M(l=>m(l)),L=l=>{z(l)};return r.exports.useEffect(()=>{s(o)},[o]),r.exports.useEffect(()=>{o!=null&&o.jwt&&localStorage.setItem("jwt",o==null?void 0:o.jwt)},[o==null?void 0:o.jwt]),d(V,{children:[d("form",{onSubmit:n(L),children:[t(q,{w:"100%",p:"1.5em",children:t(B,{as:"h3",size:"lg",color:"#B22222",children:"Inicio de sesi\xF3n."})}),t(x,{p:"1em",children:d(S,{children:[t("label",{htmlFor:"email",children:t("strong",{className:"byid-input-label",children:"Escriba su email."})}),t(E,c(c({},a("email",{required:!0})),T))]})}),t(y,{label:"email",errors:u,m:"0 2em"}),t(x,{p:"1em",children:d(S,{children:[t("label",{htmlFor:"password",children:t("strong",{className:"input-label",children:"Escriba su contrase\xF1a."})}),t(K,{label:"password",register:a,required:!0})]})}),t(y,{label:"password",errors:u,m:"0 2em"}),t(U,{buttonstate:F})]}),e&&t($,{message:e})]})};var Q=O;const V=p.div`
  max-width: 500px;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;function ce(){const e=N(),s=localStorage.getItem("auth");return r.exports.useEffect(()=>{setTimeout(()=>{s&&e("/")},1e3)},[s]),t(h,{children:t(P,{children:t(X,{children:t(Q,{})})})})}const X=p.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (min-width: 800px) {
    padding: 0.5em 0;
  }
`;export{ce as default};

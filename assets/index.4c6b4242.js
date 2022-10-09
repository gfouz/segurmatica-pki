var G=Object.defineProperty,z=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var x=(t,r,o)=>r in t?G(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,y=(t,r)=>{for(var o in r||(r={}))L.call(r,o)&&x(t,o,r[o]);if(h)for(var o of h(r))_.call(r,o)&&x(t,o,r[o]);return t},S=(t,r)=>z(t,B(r));import{j as e,F as b,s as w,r as i,a as v,H as N,a1 as f}from"./index.b7cccbb5.js";import{t as T}from"./constants.c1eecf01.js";import{C as U}from"./Toast.1bbf2185.js";import{D}from"./SubmitButton.af6348b6.js";import{C as H,F as O}from"./Card.79b886ab.js";import{G as R}from"./GetEnabled.e440a4c2.js";import{A as $,G as K,a as Q}from"./GetByName.c10d5a19.js";import{U as X}from"./Updater.bd8e77e2.js";import{C as J}from"./Creator.75a875d6.js";import{S as M}from"./chakra-ui-select.esm.3f4503b3.js";import{u as d,S as P}from"./StatusHandler.9d0da5e5.js";import{a as V,d as A,b as W}from"./StyledLabel.46abfa46.js";import{u as Y}from"./index.esm.5c5e9822.js";import{S as Z}from"./SubmitButton.ba1b45ea.js";import"./store.bebd0824.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";import"./ErrorWarning.3038fd9c.js";import"./TextInput.56cf34f0.js";function E(t){const{label:r,list:o,register:a,required:n}=t;return e(b,{children:e(M,S(y({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},a(r,{required:n})),{children:Array.isArray(o)&&o.map((m,c)=>e("option",{value:m.id,children:m.name},c))}))})}const ee="http://localhost:5000",C=V.create({baseURL:ee,withCredentials:!1});C.defaults.headers.common["Content-Type"]="application/json";async function te(t,r){try{return(await C.get(`/empresas-instituciones/municipio/${t}/organismo/${r}`)).data}catch(o){return o.message}}function oe(){const[t,r]=i.exports.useState(""),[o,a]=i.exports.useState(""),[n,m]=i.exports.useState(""),{register:c,handleSubmit:F,formState:{errors:ie}}=Y(),I="municipios",j="organismos",{data:l}=d("all-mun",()=>A(I)),{data:p}=d("all-org",()=>A(j)),{data:s,refetch:k}=d("some-emp",()=>te(o,n)),q=async g=>{console.log(s),a(g.id),m(g.id2)};i.exports.useEffect(()=>{k()},[o,n]);const u=s==null?void 0:s.message;return i.exports.useEffect(()=>{u&&r(u)},[u]),e(b,{children:e("form",{onSubmit:F(q),children:v(N,{direction:"column",p:"0.5em",children:[e(f,{size:"sm",m:"0.5em 0",children:"Empresa e instituci\xF3n por municipio."}),e(E,{label:"id",list:l==null?void 0:l.result,register:c,required:!0}),e(f,{size:"sm",m:"0.5em 0",children:"Empresa o instituci\xF3n por organismo."}),e(E,{label:"id2",list:p==null?void 0:p.result,register:c,required:!0}),e(Z,{buttonstate:s==null?void 0:s.isLoading}),e($,{data:s==null?void 0:s.result}),t&&e(P,{message:t})]})})})}w.div`
  margin: 2em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid #ab8ffe;
  border-radius: 10px;
  color: #222222;
  background-color: #ab8ffe;
`;const re=[{option:"a\xF1adir",comp:e(J,{url:"empresas-instituciones"})},{option:"mostrar",comp:e(K,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",comp:e(Q,{allnames:"empresas-instituciones"})},{option:"habilitados",comp:e(R,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",comp:e(X,{url:"empresas-instituciones"})},{option:"asociado",comp:e(oe,{})},{option:"asociado habilitado",comp:e(f,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})}];function Fe(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(W.defaults.headers.common.jwt=t)},[]),e(b,{children:v(se,{children:[e(U,{linear:T.green,color:"#ffffff"}),e(D,{children:e(H,{name:"Empresa-inst...",children:e(O,{form:re})})})]})})}const se=w.div`
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
`;export{Fe as default};

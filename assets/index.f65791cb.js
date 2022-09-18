var $=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var B=(t,r,i)=>r in t?$(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,g=(t,r)=>{for(var i in r||(r={}))_.call(r,i)&&B(t,i,r[i]);if(k)for(var i of k(r))D.call(r,i)&&B(t,i,r[i]);return t},A=(t,r)=>M(t,T(r));import{a as s,F as v,j as e,r as u,am as y,J as h,s as w,M as S,K as C}from"./index.2ac2cfd3.js";import{u as K,b as V,t as H}from"./store.d275f12d.js";import{T as U}from"./Toast.632f1614.js";import{u as x,t as J,b as E,S as F,e as N,a as O,D as Q,C as W,F as X}from"./Card.cebdff99.js";import{G as Y}from"./GetEnabled.d4dad4b8.js";import{T as Z,A as G,G as ee,a as te}from"./Getter.aa1bdc10.js";import{a as re,u as z,b as ie,F as oe}from"./index.esm.9faa638d.js";import{S as se}from"./chakra-ui-select.esm.2a4bd44b.js";import{I as ne}from"./chakra-ui-input.esm.d0f7b5c8.js";import{S as ae}from"./chakra-ui-switch.esm.90aa10f2.js";import{C as ce}from"./Creator.f1e2c46f.js";import"./chakra-ui-button.esm.8f25e761.js";function le(t){return s(v,{children:[e("datalist",{id:t.listname,children:t.datalist&&t.datalist.map(r=>e("option",{value:r},r.toString()))}),e(Z,{label:t.message,hasArrow:!0,arrowSize:15,children:t.children})]})}function P({list:t,label:r,required:i,onChange:n,register:a}){return e(v,{children:e(se,{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",onChange:n,children:t&&t.map((c,d)=>e("option",{value:c.id,children:c.name},d))})})}const ue="http://localhost:5000",q=re.create({baseURL:ue,withCredentials:!1});q.defaults.headers.common["Content-Type"]="application/json";async function R(t){try{return(await q.get(t)).data}catch(r){return r}}async function de(t,r){try{return(await q.get(`/${t}/${r}`)).data}catch(i){return i.message}}async function me(t,r,i){try{return(await q.put(`/${r}/${i}`,t)).data}catch(n){return n.message}}const pe={name:"nombre valido requerido.",id:"solo numeros requeridos"},fe=["Chaparra","Amancio","Jobabo","Puerto Padre","Vasques","Colombia","Delicias","Gibara","Alcides Pino","Rafael Freire","Moa"];function he(t){var b;const r=K(V),{stack:i}=r,n="/provincias",{data:a}=x("council",()=>R(n));u.exports.useState("");const[c,d]=u.exports.useState(""),{register:p,handleSubmit:I,formState:{errors:m}}=z(),o=ie(l=>me(l,t.url,i.id),{retry:2}),f=(b=o==null?void 0:o.data)==null?void 0:b.message;return u.exports.useEffect(()=>{f&&d(f)},[f]),e(v,{children:s("form",{onSubmit:I(async l=>{l&&o.mutateAsync(l)}),children:[e(y,{m:"1em 0",align:"left",children:e(h,{size:"md",color:"#009966",textTransform:"capitalize",children:i.name})}),s(y,{align:"left",children:[e(oe,{size:"sm",color:"#333333",children:"Actulice nombre"}),e(le,{datalist:fe,listname:"rolid",message:pe.name,children:e(ne,A(g(g({list:"rolid"},p("name",{required:!0})),J),{defaultValue:i.name}))}),m.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(y,{align:"left",children:[e(h,{size:"sm",m:"2em 0 0.5em 0",children:"Provincia a que pertenece"}),e(P,{list:a==null?void 0:a.result,label:"provinciaId",register:p,required:!0}),m.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(y,{align:"left",children:[e(h,{size:"sm",color:"#444444",m:"2em 0 0 0",children:"Deshabilitar o habilitar"}),e(ae,A(g({},p("enabled")),{size:"sm",colorScheme:"red",defaultChecked:i.enabled}))]}),e(E,{buttonstate:o==null?void 0:o.isLoading}),c&&e(F,{message:c})]})})}function be(){const[t,r]=u.exports.useState(""),[i,n]=u.exports.useState(""),{register:a,handleSubmit:c,formState:{errors:d}}=z(),p="provincias",I="municipios/provincia",{data:m}=x("provincias",()=>R(p)),{data:o,isLoading:f,refetch:L}=x("municipiosby",()=>de(I,t)),b=async j=>{r(o==null?void 0:o.provinciaId)};console.log(o==null?void 0:o.message);const l=o==null?void 0:o.message;return u.exports.useEffect(()=>{L()},[t]),u.exports.useEffect(()=>{l&&n(l)},[l]),s(ge,{children:[e("form",{onSubmit:c(b),children:s(S,{children:[e(C,{p:"1em",children:s(S,{children:[e("label",{htmlFor:"municipios",children:e(h,{size:"md",m:"0.5em 0",children:"Municipios por Provincias"})}),e(P,{list:m==null?void 0:m.result,label:"provinciaId",required:!0,onChange:j=>r(j.target.value)}),d.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{children:e(E,{buttonstate:f})})]})}),s(S,{children:[e(G,{data:o==null?void 0:o.result}),i&&e(F,{message:i})]})]})}const ge=w.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function ye(){const{register:t,handleSubmit:r,formState:{errors:i}}=z(),n="municipios/provincia/enabled/true",{data:a}=x("munByProvEnabled",()=>N(n));return s(xe,{children:[e("form",{onSubmit:r(async d=>{}),children:e(C,{p:"1em",children:s(S,{children:[e(Se,{children:"Municipios por provincias habilitadas"}),status&&e(F,{message:status})]})})}),e(G,{data:a==null?void 0:a.result})]})}const Se=w.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,xe=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ve=[{option:"a\xF1adir",comp:e(ce,{url:"municipios"})},{option:"mostrar",comp:e(ee,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",comp:e(te,{url:"municipios",queryKey:"municipios-id"})},{option:"habilitados",comp:e(Y,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"actualizar",comp:e(he,{url:"municipios"})},{option:"asociado",comp:e(be,{})},{option:"asociado habilitado",comp:e(ye,{})},{option:"por nombre",comp:e(h,{size:"md",children:"NO DISPONIBLE!"})}];function Re(){const t=localStorage.getItem("jwt");return u.exports.useEffect(()=>{t&&(O.defaults.headers.common.jwt=t)},[]),e(v,{children:s(we,{children:[e(U,{linear:H.green,color:"#ffffff"}),e(Q,{children:e(W,{name:"Municipios",children:e(X,{form:ve})})})]})})}const we=w.div`
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

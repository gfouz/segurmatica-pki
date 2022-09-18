var M=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var B=(t,r,i)=>r in t?M(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,b=(t,r)=>{for(var i in r||(r={}))_.call(r,i)&&B(t,i,r[i]);if(L)for(var i of L(r))D.call(r,i)&&B(t,i,r[i]);return t},C=(t,r)=>P(t,T(r));import{a as s,F as v,j as e,r as u,am as g,J as y,s as w,M as S,K as F}from"./index.0150df0d.js";import{u as K,b as V,t as H}from"./store.589a1c54.js";import{T as U}from"./Toast.d11967c9.js";import{u as x,t as J,b as E,S as I,e as Q,a as N,D as O,C as W,F as X}from"./Card.1ca1c1fe.js";import{G as Y}from"./GetEnabled.9961a451.js";import{T as Z,A as G,G as ee,a as te}from"./Getter.df96f5a9.js";import{a as re,u as z,b as ie,F as oe}from"./index.esm.7b029979.js";import{S as se}from"./chakra-ui-select.esm.7f24c6aa.js";import{I as ne}from"./chakra-ui-input.esm.c17c47de.js";import{S as ae}from"./chakra-ui-switch.esm.973a6143.js";import{C as ce}from"./Creator.e5b33ccf.js";import"./chakra-ui-button.esm.49817bac.js";function le(t){return s(v,{children:[e("datalist",{id:t.listname,children:t.datalist&&t.datalist.map(r=>e("option",{value:r},r.toString()))}),e(Z,{label:t.message,hasArrow:!0,arrowSize:15,children:t.children})]})}function R({list:t,label:r,required:i,onChange:n,register:a}){return e(v,{children:e(se,{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",onChange:n,children:t&&t.map((c,d)=>e("option",{value:c.id,children:c.name},d))})})}const ue="http://localhost:5000",q=re.create({baseURL:ue,withCredentials:!1});q.defaults.headers.common["Content-Type"]="application/json";async function $(t){try{return(await q.get(t)).data}catch(r){return r}}async function de(t,r){try{return(await q.get(`/${t}/${r}`)).data}catch(i){return i.message}}async function me(t,r,i){try{return(await q.put(`/${r}/${i}`,t)).data}catch(n){return n.message}}const pe={name:"nombre valido requerido.",id:"solo numeros requeridos"},fe=["Chaparra","Amancio","Jobabo","Puerto Padre","Vasques","Colombia","Delicias","Gibara","Alcides Pino","Rafael Freire","Moa"];function he(t){var h;const r=K(V),{stack:i}=r,n="/provincias",{data:a}=x("council",()=>$(n));u.exports.useState("");const[c,d]=u.exports.useState(""),{register:p,handleSubmit:A,formState:{errors:m}}=z(),o=ie(l=>me(l,t.url,i.id),{retry:2}),f=(h=o==null?void 0:o.data)==null?void 0:h.message;return u.exports.useEffect(()=>{f&&d(f)},[f]),e(v,{children:s("form",{onSubmit:A(async l=>{l&&o.mutateAsync(l)}),children:[e(g,{m:"1em 0",align:"left",children:e(y,{size:"md",color:"#009966",textTransform:"capitalize",children:i.name})}),s(g,{align:"left",children:[e(oe,{size:"sm",color:"#333333",children:"Actulice nombre"}),e(le,{datalist:fe,listname:"rolid",message:pe.name,children:e(ne,C(b(b({list:"rolid"},p("name",{required:!0})),J),{defaultValue:i.name}))}),m.name&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(g,{align:"left",children:[e(y,{size:"sm",m:"2em 0 0.5em 0",children:"Provincia a que pertenece"}),e(R,{list:a==null?void 0:a.result,label:"provinciaId",register:p,required:!0}),m.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(g,{align:"left",children:[e(y,{size:"sm",color:"#444444",m:"2em 0 0 0",children:"Deshabilitar o habilitar"}),e(ae,C(b({},p("enabled")),{size:"sm",colorScheme:"red",defaultChecked:i.enabled}))]}),e(E,{buttonstate:o==null?void 0:o.isLoading}),c&&e(I,{message:c})]})})}function be(){const[t,r]=u.exports.useState(""),[i,n]=u.exports.useState(""),{register:a,handleSubmit:c,formState:{errors:d}}=z(),p="provincias",A="municipios/provincia",{data:m}=x("provincias",()=>$(p)),{data:o,isLoading:f,refetch:j}=x("municipiosby",()=>de(A,t)),h=async k=>{r(o==null?void 0:o.provinciaId)};console.log(o==null?void 0:o.message);const l=o==null?void 0:o.message;return u.exports.useEffect(()=>{j()},[t]),u.exports.useEffect(()=>{l&&n(l)},[l]),s(ge,{children:[e("form",{onSubmit:c(h),children:s(S,{children:[e(F,{p:"1em",children:s(S,{children:[e("label",{htmlFor:"municipios",children:e(y,{size:"md",m:"0.5em 0",children:"Municipios por Provincias"})}),e(R,{list:m==null?void 0:m.result,label:"provinciaId",required:!0,onChange:k=>r(k.target.value)}),d.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(F,{children:e(E,{buttonstate:f})})]})}),s(S,{children:[e(G,{data:o==null?void 0:o.result}),i&&e(I,{message:i})]})]})}const ge=w.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function ye(){const{register:t,handleSubmit:r,formState:{errors:i}}=z(),n="municipios/provincia/enabled/true",{data:a}=x("munByProvEnabled",()=>Q(n));return s(xe,{children:[e("form",{onSubmit:r(async d=>{}),children:e(F,{p:"1em",children:s(S,{children:[e(Se,{children:"Municipios por provincias habilitadas"}),status&&e(I,{message:status})]})})}),e(G,{data:a==null?void 0:a.result})]})}const Se=w.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,xe=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ve=[{option:"a\xF1adir",comp:e(ce,{url:"municipios"})},{option:"mostrar",comp:e(ee,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",comp:e(te,{url:"municipios",queryKey:"municipios-id"})},{option:"habilitados",comp:e(Y,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"actualizar",comp:e(he,{url:"municipios"})},{option:"asociado",comp:e(be,{})},{option:"asociado habilitado",comp:e(ye,{})}];function $e(){const t=localStorage.getItem("jwt");return u.exports.useEffect(()=>{t&&(N.defaults.headers.common.jwt=t)},[]),e(v,{children:s(we,{children:[e(U,{linear:H.green,color:"#ffffff"}),e(O,{children:e(W,{name:"Municipios",children:e(X,{form:ve})})})]})})}const we=w.div`
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
`;export{$e as default};

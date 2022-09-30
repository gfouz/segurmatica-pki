var T=Object.defineProperty,_=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var B=(t,r,i)=>r in t?T(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,E=(t,r)=>{for(var i in r||(r={}))K.call(r,i)&&B(t,i,r[i]);if(k)for(var i of k(r))P.call(r,i)&&B(t,i,r[i]);return t},L=(t,r)=>_(t,D(r));import{j as e,F as q,r as l,a as s,am as b,s as x,K as y,J as I,I as $}from"./index.65025839.js";import{u as H,b as N,t as U}from"./store.1511ef1d.js";import{T as O}from"./Toast.7b500241.js";import{u as S,b as g,i as V,c as G,S as C,f as J,a as Q,D as W,C as X,F as Y}from"./Card.8f9da9f1.js";import{G as Z}from"./GetEnabled.f44fb892.js";import{A as z,G as ee,a as te}from"./Getter.dd8f0e80.js";import{a as re,u as A,b as ie}from"./index.esm.63595e96.js";import{S as oe}from"./chakra-ui-select.esm.21842cd1.js";import{T as ne}from"./TextInput.bdfc726e.js";import{S as se}from"./chakra-ui-switch.esm.885129a1.js";import{C as ae}from"./Creator.3a64633e.js";import"./chakra-ui-button.esm.4448790b.js";import"./ErrorWarning.4611fe75.js";function R({list:t,label:r,required:i,onChange:n,register:a}){return e(q,{children:e(oe,{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",onChange:n,children:t&&t.map((c,d)=>e("option",{value:c.id,children:c.name},d))})})}const ce="http://localhost:5000",v=re.create({baseURL:ce,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function M(t){try{return(await v.get(t)).data}catch(r){return r}}async function le(t,r){try{return(await v.get(`/${t}/${r}`)).data}catch(i){return i.message}}async function ue(t,r,i){try{return(await v.put(`/${r}/${i}`,t)).data}catch(n){return n.message}}function de(t){var h;const r=H(N),{stack:i}=r,n="/provincias",{data:a}=S("council",()=>M(n));l.exports.useState("");const[c,d]=l.exports.useState(""),{register:p,handleSubmit:w,formState:{errors:m}}=A(),o=ie(u=>ue(u,t.url,i.id),{retry:2}),f=(h=o==null?void 0:o.data)==null?void 0:h.message;return l.exports.useEffect(()=>{f&&d(f)},[f]),e(q,{children:s("form",{onSubmit:w(async u=>{o.mutateAsync(u)}),children:[e(b,{m:"1em 0",align:"left",children:e(g,{color:"#009966",capit:!0,children:i.name})}),s(b,{align:"left",children:[e(g,{children:"Nombre de Municipio"}),e(ne,{info:V.name,required:!0,label:"name",errors:m,register:p})]}),s(b,{align:"left",children:[e(g,{children:"Provincia a que pertenece"}),e(R,{list:a==null?void 0:a.result,label:"provinciaId",register:p,required:!0}),m.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(b,{align:"left",children:[e(g,{children:"Deshabilitar o habilitar"}),e(se,L(E({},p("enabled")),{size:"sm",colorScheme:"red",defaultChecked:i.enabled}))]}),e(G,{buttonstate:o==null?void 0:o.isLoading}),c&&e(C,{message:c})]})})}function me(){const[t,r]=l.exports.useState(""),[i,n]=l.exports.useState(""),{register:a,handleSubmit:c,formState:{errors:d}}=A(),p="provincias",w="municipios/provincia",{data:m}=S("provincias",()=>M(p)),{data:o,isLoading:f,refetch:F}=S("municipiosby",()=>le(w,t)),h=async j=>{r(o==null?void 0:o.provinciaId)};console.log(o==null?void 0:o.message);const u=o==null?void 0:o.message;return l.exports.useEffect(()=>{F()},[t]),l.exports.useEffect(()=>{u&&n(u)},[u]),s(pe,{children:[e("form",{onSubmit:c(h),children:s(y,{children:[e(I,{p:"1em",children:s(y,{children:[e("label",{htmlFor:"municipios",children:e($,{size:"md",m:"0.5em 0",children:"Municipios por Provincias"})}),e(R,{list:m==null?void 0:m.result,label:"provinciaId",required:!0,onChange:j=>r(j.target.value)}),d.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(I,{children:e(G,{buttonstate:f})})]})}),s(y,{children:[e(z,{data:o==null?void 0:o.result}),i&&e(C,{message:i})]})]})}const pe=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function fe(){const{register:t,handleSubmit:r,formState:{errors:i}}=A(),n="municipios/provincia/enabled/true",{data:a}=S("munByProvEnabled",()=>J(n));return s(be,{children:[e("form",{onSubmit:r(async d=>{}),children:e(I,{p:"1em",children:s(y,{children:[e(he,{children:"Municipios por provincias habilitadas"}),status&&e(C,{message:status})]})})}),e(z,{data:a==null?void 0:a.result})]})}const he=x.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,be=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ge=[{option:"a\xF1adir",comp:e(ae,{url:"municipios"})},{option:"mostrar",comp:e(ee,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",comp:e(te,{url:"municipios",queryKey:"municipios-id"})},{option:"habilitados",comp:e(Z,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"actualizar",comp:e(de,{url:"municipios"})},{option:"asociado",comp:e(me,{})},{option:"asociado habilitado",comp:e(fe,{})},{option:"por nombre",comp:e($,{size:"md",children:"NO DISPONIBLE!"})}];function $e(){const t=localStorage.getItem("jwt");return l.exports.useEffect(()=>{t&&(Q.defaults.headers.common.jwt=t)},[]),e(q,{children:s(ye,{children:[e(O,{linear:U.green,color:"#ffffff"}),e(W,{children:e(X,{name:"Municipios",children:e(Y,{form:ge})})})]})})}const ye=x.div`
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

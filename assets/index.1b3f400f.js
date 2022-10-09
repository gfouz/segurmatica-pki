var M=Object.defineProperty,_=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var B=(t,r,o)=>r in t?M(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,E=(t,r)=>{for(var o in r||(r={}))D.call(r,o)&&B(t,o,r[o]);if(k)for(var o of k(r))H.call(r,o)&&B(t,o,r[o]);return t},L=(t,r)=>_(t,T(r));import{j as e,F as q,r as l,a as n,am as b,s as x,a3 as y,a2 as C,a1 as P}from"./index.b7cccbb5.js";import{t as U}from"./constants.c1eecf01.js";import{C as K}from"./Toast.1bbf2185.js";import{S as $,D as N}from"./SubmitButton.af6348b6.js";import{C as Q,F as V}from"./Card.79b886ab.js";import{G as J}from"./GetEnabled.e440a4c2.js";import{S as O,A as G,G as W,a as X}from"./GetByName.c10d5a19.js";import{u as I,a as Y}from"./index.esm.5c5e9822.js";import{u as S,S as A}from"./StatusHandler.9d0da5e5.js";import{u as Z,b as ee}from"./store.bebd0824.js";import{S as te}from"./chakra-ui-select.esm.3f4503b3.js";import{a as re,S as g,i as oe,d as ie,b as se}from"./StyledLabel.46abfa46.js";import{T as ne}from"./TextInput.56cf34f0.js";import{C as ae}from"./Creator.75a875d6.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";import"./ErrorWarning.3038fd9c.js";function R({list:t,label:r,required:o,onChange:s,register:a}){return e(q,{children:e(te,{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",onChange:s,children:t&&t.map((c,m)=>e("option",{value:c.id,children:c.name},m))})})}const ce="http://localhost:5000",v=re.create({baseURL:ce,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function z(t){try{return(await v.get(t)).data}catch(r){return r}}async function le(t,r){try{return(await v.get(`/${t}/${r}`)).data}catch(o){return o.message}}async function ue(t,r,o){try{return(await v.put(`/${r}/${o}`,t)).data}catch(s){return s.message}}function me(t){var h;const r=Z(ee),{stack:o}=r,s="/provincias",{data:a}=S("council",()=>z(s));l.exports.useState("");const[c,m]=l.exports.useState(""),{register:p,handleSubmit:w,formState:{errors:d}}=I(),i=Y(u=>ue(u,t.url,o.id),{retry:2}),f=(h=i==null?void 0:i.data)==null?void 0:h.message;return l.exports.useEffect(()=>{f&&m(f)},[f]),e(q,{children:n("form",{onSubmit:w(async u=>{i.mutateAsync(u)}),children:[e(b,{m:"1em 0",align:"left",children:e(g,{color:"#009966",capit:!0,children:o.name})}),n(b,{align:"left",children:[e(g,{children:"Nombre de Municipio"}),e(ne,{info:oe.name,required:!0,label:"name",errors:d,register:p})]}),n(b,{align:"left",children:[e(g,{children:"Provincia a que pertenece"}),e(R,{list:a==null?void 0:a.result,label:"provinciaId",register:p,required:!0}),d.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),n(b,{align:"left",children:[e(g,{children:"Deshabilitar o habilitar"}),e(O,L(E({},p("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(o.enabled)}))]}),e($,{buttonstate:i==null?void 0:i.isLoading}),c&&e(A,{message:c})]})})}function de(){const[t,r]=l.exports.useState(""),[o,s]=l.exports.useState(""),{register:a,handleSubmit:c,formState:{errors:m}}=I(),p="provincias",w="municipios/provincia",{data:d}=S("provincias",()=>z(p)),{data:i,isLoading:f,refetch:F}=S("municipiosby",()=>le(w,t)),h=async j=>{r(i==null?void 0:i.provinciaId)};console.log(i==null?void 0:i.message);const u=i==null?void 0:i.message;return l.exports.useEffect(()=>{F()},[t]),l.exports.useEffect(()=>{u&&s(u)},[u]),n(pe,{children:[e("form",{onSubmit:c(h),children:n(y,{children:[e(C,{p:"1em",children:n(y,{children:[e("label",{htmlFor:"municipios",children:e(P,{size:"md",m:"0.5em 0",children:"Municipios por Provincias"})}),e(R,{list:d==null?void 0:d.result,label:"provinciaId",required:!0,onChange:j=>r(j.target.value)}),m.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{children:e($,{buttonstate:f})})]})}),n(y,{children:[e(G,{data:i==null?void 0:i.result}),o&&e(A,{message:o})]})]})}const pe=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function fe(){const{register:t,handleSubmit:r,formState:{errors:o}}=I(),s="municipios/provincia/enabled/true",{data:a}=S("munByProvEnabled",()=>ie(s));return n(be,{children:[e("form",{onSubmit:r(async m=>{}),children:e(C,{p:"1em",children:n(y,{children:[e(he,{children:"Municipios por provincias habilitadas"}),status&&e(A,{message:status})]})})}),e(G,{data:a==null?void 0:a.result})]})}const he=x.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,be=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ge=[{option:"a\xF1adir",comp:e(ae,{url:"municipios"})},{option:"mostrar",comp:e(W,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",comp:e(X,{allnames:"municipios"})},{option:"habilitados",comp:e(J,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"actualizar",comp:e(me,{url:"municipios"})},{option:"asociado",comp:e(de,{})},{option:"asociado habilitado",comp:e(fe,{})}];function Me(){const t=localStorage.getItem("jwt");return l.exports.useEffect(()=>{t&&(se.defaults.headers.common.jwt=t)},[]),e(q,{children:n(ye,{children:[e(K,{linear:U.green,color:"#ffffff"}),e(N,{children:e(Q,{name:"Municipios",children:e(V,{form:ge})})})]})})}const ye=x.div`
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
`;export{Me as default};

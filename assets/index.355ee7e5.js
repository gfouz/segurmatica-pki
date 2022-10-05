var _=Object.defineProperty,D=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var k=(t,r,i)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,E=(t,r)=>{for(var i in r||(r={}))T.call(r,i)&&k(t,i,r[i]);if(j)for(var i of j(r))H.call(r,i)&&k(t,i,r[i]);return t},L=(t,r)=>D(t,P(r));import{j as e,F as I,r as l,a as s,am as b,s as x,a3 as y,a2 as C,a1 as $}from"./index.84145a61.js";import{t as K}from"./constants.c1eecf01.js";import{C as N}from"./Toast.399d4852.js";import{S as G,D as U}from"./SubmitButton.d37232a3.js";import{C as O,F as Q}from"./Card.4f06ee74.js";import{G as V}from"./GetEnabled.c9b1ba58.js";import{S as J,A as z,G as W,a as X}from"./Getter.2ace4167.js";import{u as q,a as Y}from"./index.esm.d64a2720.js";import{u as S,S as A}from"./StatusHandler.4fa71a43.js";import{u as Z,b as ee}from"./store.6f1159d1.js";import{S as te}from"./chakra-ui-select.esm.7d7cae85.js";import{a as re,S as g,i as ie,e as oe,b as ne}from"./StyledLabel.97b52d23.js";import{T as se}from"./TextInput.0bd60058.js";import{C as ae}from"./Creator.140eb7d1.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";import"./ErrorWarning.4beaff6e.js";function R({list:t,label:r,required:i,onChange:n,register:a}){return e(I,{children:e(te,{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",onChange:n,children:t&&t.map((c,m)=>e("option",{value:c.id,children:c.name},m))})})}const ce="http://localhost:5000",v=re.create({baseURL:ce,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function M(t){try{return(await v.get(t)).data}catch(r){return r}}async function le(t,r){try{return(await v.get(`/${t}/${r}`)).data}catch(i){return i.message}}async function ue(t,r,i){try{return(await v.put(`/${r}/${i}`,t)).data}catch(n){return n.message}}function me(t){var h;const r=Z(ee),{stack:i}=r,n="/provincias",{data:a}=S("council",()=>M(n));l.exports.useState("");const[c,m]=l.exports.useState(""),{register:p,handleSubmit:w,formState:{errors:d}}=q(),o=Y(u=>ue(u,t.url,i.id),{retry:2}),f=(h=o==null?void 0:o.data)==null?void 0:h.message;return l.exports.useEffect(()=>{f&&m(f)},[f]),e(I,{children:s("form",{onSubmit:w(async u=>{o.mutateAsync(u)}),children:[e(b,{m:"1em 0",align:"left",children:e(g,{color:"#009966",capit:!0,children:i.name})}),s(b,{align:"left",children:[e(g,{children:"Nombre de Municipio"}),e(se,{info:ie.name,required:!0,label:"name",errors:d,register:p})]}),s(b,{align:"left",children:[e(g,{children:"Provincia a que pertenece"}),e(R,{list:a==null?void 0:a.result,label:"provinciaId",register:p,required:!0}),d.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(b,{align:"left",children:[e(g,{children:"Deshabilitar o habilitar"}),e(J,L(E({},p("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)}))]}),e(G,{buttonstate:o==null?void 0:o.isLoading}),c&&e(A,{message:c})]})})}function de(){const[t,r]=l.exports.useState(""),[i,n]=l.exports.useState(""),{register:a,handleSubmit:c,formState:{errors:m}}=q(),p="provincias",w="municipios/provincia",{data:d}=S("provincias",()=>M(p)),{data:o,isLoading:f,refetch:B}=S("municipiosby",()=>le(w,t)),h=async F=>{r(o==null?void 0:o.provinciaId)};console.log(o==null?void 0:o.message);const u=o==null?void 0:o.message;return l.exports.useEffect(()=>{B()},[t]),l.exports.useEffect(()=>{u&&n(u)},[u]),s(pe,{children:[e("form",{onSubmit:c(h),children:s(y,{children:[e(C,{p:"1em",children:s(y,{children:[e("label",{htmlFor:"municipios",children:e($,{size:"md",m:"0.5em 0",children:"Municipios por Provincias"})}),e(R,{list:d==null?void 0:d.result,label:"provinciaId",required:!0,onChange:F=>r(F.target.value)}),m.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{children:e(G,{buttonstate:f})})]})}),s(y,{children:[e(z,{data:o==null?void 0:o.result}),i&&e(A,{message:i})]})]})}const pe=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function fe(){const{register:t,handleSubmit:r,formState:{errors:i}}=q(),n="municipios/provincia/enabled/true",{data:a}=S("munByProvEnabled",()=>oe(n));return s(be,{children:[e("form",{onSubmit:r(async m=>{}),children:e(C,{p:"1em",children:s(y,{children:[e(he,{children:"Municipios por provincias habilitadas"}),status&&e(A,{message:status})]})})}),e(z,{data:a==null?void 0:a.result})]})}const he=x.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,be=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ge=[{option:"a\xF1adir",comp:e(ae,{url:"municipios"})},{option:"mostrar",comp:e(W,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",comp:e(X,{url:"municipios",queryKey:"municipios-id"})},{option:"habilitados",comp:e(V,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"actualizar",comp:e(me,{url:"municipios"})},{option:"asociado",comp:e(de,{})},{option:"asociado habilitado",comp:e(fe,{})},{option:"por nombre",comp:e($,{size:"md",children:"NO DISPONIBLE!"})}];function Me(){const t=localStorage.getItem("jwt");return l.exports.useEffect(()=>{t&&(ne.defaults.headers.common.jwt=t)},[]),e(I,{children:s(ye,{children:[e(N,{linear:K.green,color:"#ffffff"}),e(U,{children:e(O,{name:"Municipios",children:e(Q,{form:ge})})})]})})}const ye=x.div`
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

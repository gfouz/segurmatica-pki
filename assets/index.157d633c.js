var T=Object.defineProperty,D=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var j=(t,r,o)=>r in t?T(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,F=(t,r)=>{for(var o in r||(r={}))H.call(r,o)&&j(t,o,r[o]);if(E)for(var o of E(r))K.call(r,o)&&j(t,o,r[o]);return t},L=(t,r)=>D(t,U(r));import{j as e,F as q,r as l,a as s,am as g,s as x,a3 as S,a2 as C}from"./index.a965a08b.js";import{t as N}from"./constants.c1eecf01.js";import{C as Q}from"./Toast.c7c7e538.js";import{S as M,D as V}from"./SubmitButton.ff1e26b2.js";import{C as J,F as O}from"./Card.c6800e88.js";import{R as W,G as X}from"./Rocket.84a95247.js";import{c as Y,A as _,E as R,S as Z,G as ee,a as te,b as re}from"./SearchPlus.ae3627cf.js";import{u as I,a as oe}from"./index.esm.0200c310.js";import{u as y,S as A}from"./StatusHandler.f4e4ee84.js";import{u as ie,b as ne}from"./store.df117b59.js";import{S as se}from"./chakra-ui-select.esm.56befddd.js";import{a as ae,S as h,i as ce,d as le,b as ue}from"./StyledLabel.73e7a9c0.js";import{T as me}from"./TextInput.77148194.js";import{C as de}from"./Creator.ab123595.js";import{C as $}from"./CodeBranch.b0aee27b.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";import"./ErrorWarning.4bc7c3cd.js";function z({list:t,label:r,required:o,onChange:n,register:a}){return e(q,{children:e(se,{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",onChange:n,children:t&&t.map((c,m)=>e("option",{value:c.id,children:c.name},m))})})}const pe="http://localhost:5000",v=ae.create({baseURL:pe,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function P(t){try{return(await v.get(t)).data}catch(r){return r}}async function fe(t,r){try{return(await v.get(`/${t}/${r}`)).data}catch(o){return o.message}}async function he(t,r,o){try{return(await v.put(`/${r}/${o}`,t)).data}catch(n){return n.message}}function be(t){var b;const r=ie(ne),{stack:o}=r,n="/provincias",{data:a}=y("council",()=>P(n));l.exports.useState("");const[c,m]=l.exports.useState(""),{register:p,handleSubmit:w,formState:{errors:d}}=I(),i=oe(u=>he(u,t.url,o.id),{retry:2}),f=(b=i==null?void 0:i.data)==null?void 0:b.message;return l.exports.useEffect(()=>{f&&m(f)},[f]),e(q,{children:s("form",{onSubmit:w(async u=>{i.mutateAsync(u)}),children:[e(g,{m:"1em 0",align:"left",children:e(h,{color:"#009966",capit:!0,children:o.name})}),s(g,{align:"left",children:[e(h,{children:"Nombre de Municipio"}),e(me,{info:ce.name,required:!0,label:"name",errors:d,register:p})]}),s(g,{align:"left",children:[e(h,{children:"Provincia a que pertenece"}),e(z,{list:a==null?void 0:a.result,label:"provinciaId",register:p,required:!0}),d.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),s(g,{align:"left",children:[e(h,{children:"Deshabilitar o habilitar"}),e(Y,L(F({},p("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(o.enabled)}))]}),e(M,{buttonstate:i==null?void 0:i.isLoading}),c&&e(A,{message:c})]})})}function ge(){const[t,r]=l.exports.useState(""),[o,n]=l.exports.useState(""),{register:a,handleSubmit:c,formState:{errors:m}}=I(),p="provincias",w="municipios/provincia",{data:d}=y("provincias",()=>P(p)),{data:i,isLoading:f,refetch:k}=y("municipiosby",()=>fe(w,t)),b=async B=>{r(i==null?void 0:i.provinciaId)};console.log(i==null?void 0:i.message);const u=i==null?void 0:i.message;return l.exports.useEffect(()=>{k()},[t]),l.exports.useEffect(()=>{u&&n(u)},[u]),s(Se,{children:[e("form",{onSubmit:c(b),children:s(S,{children:[e(C,{p:"1em",children:s(S,{children:[e(h,{upper:!0,m:"1em 0",children:"Municipios por Provincias"}),e(z,{list:d==null?void 0:d.result,label:"provinciaId",required:!0,onChange:B=>r(B.target.value)}),m.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{children:e(M,{buttonstate:f})})]})}),s(S,{children:[e(_,{data:i==null?void 0:i.result}),o&&e(A,{message:o})]})]})}const Se=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function ye(){const{register:t,handleSubmit:r,formState:{errors:o}}=I(),n="municipios/provincia/enabled/true",{data:a}=y("munByProvEnabled",()=>le(n));return s(ve,{children:[e("form",{onSubmit:r(async m=>{}),children:e(C,{p:"1em",children:s(S,{children:[e(xe,{children:"Municipios por provincias habilitadas"}),status&&e(A,{message:status})]})})}),e(_,{data:a==null?void 0:a.result})]})}const xe=x.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,ve=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,G=[{option:"a\xF1adir",icon:e(R,{}),comp:e(de,{url:"municipios"})},{option:"mostrar",icon:e(Z,{}),comp:e(ee,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",icon:e(te,{}),comp:e(re,{allnames:"municipios"})},{option:"habilitados",icon:e(W,{}),comp:e(X,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"asociado",icon:e($,{}),comp:e(ge,{})},{option:"asociado habilitado",icon:e($,{}),comp:e(ye,{})},{option:"actualizar",icon:e(R,{}),comp:e(be,{url:"municipios"})}];function Ue(){const t=localStorage.getItem("jwt");return l.exports.useEffect(()=>{t&&(ue.defaults.headers.common.jwt=t)},[]),e(q,{children:s(we,{children:[e(Q,{linear:N.green,color:"#ffffff"}),e(V,{children:e(J,{name:"Municipios",options:G,children:e(O,{options:G})})})]})})}const we=x.div`
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
`;export{Ue as default};

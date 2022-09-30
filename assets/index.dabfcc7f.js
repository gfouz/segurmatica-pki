var D=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var k=(r,o,t)=>o in r?D(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,L=(r,o)=>{for(var t in o||(o={}))M.call(o,t)&&k(r,t,o[t]);if(j)for(var t of j(o))O.call(o,t)&&k(r,t,o[t]);return r},_=(r,o)=>H(r,J(o));import{j as e,F as b,a as n,s as T,r as v,J as u,K as d}from"./index.65025839.js";import{u as B,b as P,s as Q,t as V}from"./store.1511ef1d.js";import{T as W}from"./Toast.7b500241.js";import{u as w,i as F,c as C,S as K,a as X,D as Y,C as Z,F as ee}from"./Card.8f9da9f1.js";import{G as re}from"./GetEnabled.f44fb892.js";import{T as te,G as oe,a as ne}from"./Getter.dd8f0e80.js";import{a as ie,u as N,b as $}from"./index.esm.63595e96.js";import{S as se}from"./chakra-ui-select.esm.21842cd1.js";import{T as z}from"./TextInput.bdfc726e.js";import{I as ae,E as le}from"./ErrorWarning.4611fe75.js";import{G as ce}from"./GetByParams.6dcc3081.js";import{G as ue}from"./GetByName.63770814.js";import"./chakra-ui-button.esm.4448790b.js";const de="http://localhost:5000",A=ie.create({baseURL:de,withCredentials:!1});A.defaults.headers.common["Content-Type"]="application/json";async function me(r,o){try{const t=await A.post(r,o);return t==null?void 0:t.data}catch(t){return t}}async function pe(r,o,t){try{return(await A.put(`/${o}/${t}`,r)).data}catch(s){return s}}async function I(r){try{const o=await A.get(r),{data:t}=o;return t}catch(o){return o}}function E({list:r,register:o,label:t,required:s}){return e(b,{children:e(se,_(L({},o(t,{required:s})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((i,a)=>e("option",{value:i.id,children:i.name},a))}))})}const U=({label:r,register:o,required:t,errors:s,defaultValue:i,info:a})=>n(b,{children:[e(te,{label:a,hasArrow:!0,arrowSize:15,children:e(ae,L({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:i},o(r,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(le,{label:r,errors:s,info:a})]});function fe(r){var R;const o=B(P),t=B(Q),{stack:s}=o,{setOption:i}=t,[a,p]=v.exports.useState(""),{register:f,handleSubmit:G,formState:{errors:l}}=N(),g="/users/enabled/true",h="/entidades-registro/enabled/true",{data:y}=w("entidad-actived",()=>I(h)),{data:c}=w("users-act",()=>I(g)),m=$(q=>pe(q,r.url,s.id)),S=(R=m==null?void 0:m.data)==null?void 0:R.message;return v.exports.useEffect(()=>{S&&p(S),S==="updated"&&i("mostrar")},[S]),n(b,{children:[n("form",{onSubmit:G(async q=>{m.mutateAsync(q),console.log(q)}),children:[e(u,{p:"1em",children:n(d,{children:[e("label",{htmlFor:"name",children:e("strong",{className:"byid-input-label",children:"Nombre del funcionario de registro"})}),e(z,{info:F.name,required:!0,label:"name",register:f,errors:l})]})}),e(u,{p:"1em",children:n(d,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba el tel\xE9fono del funcionario de registro"})}),e(U,{required:!0,info:F.tel,label:"phone",errors:l,register:f})]})}),e(u,{p:"1em",children:n(d,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"input-label",children:"Seleccione entidad de registro a la que pertenece"})}),e(E,{list:y==null?void 0:y.result,label:"erId",register:f,required:!0}),l.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(u,{p:"1em",children:n(d,{children:[e("label",{htmlFor:"provinces",children:e("strong",{children:"Seleccione usuario al que se vincula"})}),e(E,{list:c==null?void 0:c.result,label:"userId",register:f,required:!0}),l.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{buttonstate:m==null?void 0:m.isLoading})]}),a&&e(K,{message:a})]})}T.h4`
  color: ${r=>r.color||"#888888"};
  font-weight: bolder;
`;function he(r){const{url:o}=r,[t,s]=v.exports.useState(""),{register:i,handleSubmit:a,formState:{errors:p}}=N(),f="/users/enabled/true",G="/entidades-registro/enabled/true",{data:l}=w("entidad-actived",()=>I(G)),{data:g}=w("users-act",()=>I(f)),h=$(c=>me(o,c));return n(b,{children:[n("form",{onSubmit:a(async c=>{h.mutateAsync(c),console.log(c)}),children:[e(u,{p:"1em",children:n(d,{children:[e(x,{children:"Nombre del funcionario de registro"}),e(z,{info:F.name,required:!0,label:"name",register:i,errors:p})]})}),e(u,{p:"1em",children:n(d,{children:[e(x,{children:"Tel\xE9fono del funcionario de registro"}),e(U,{required:!0,info:F.tel,label:"phone",errors:p,register:i})]})}),e(u,{p:"1em",children:n(d,{children:[e(x,{children:"Seleccione entidad de registro a la que pertenece"}),e(E,{list:l==null?void 0:l.result,label:"erId",register:i,required:!0}),p.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(u,{p:"1em",children:n(d,{children:[e(x,{children:"Seleccione usuario al que se vincula"}),e(E,{list:g==null?void 0:g.result,label:"userId",register:i,required:!0}),p.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{buttonstate:h==null?void 0:h.isLoading})]}),t&&e(K,{message:t})]})}const x=T.h4`
  color: ${r=>r.color||"#888888"};
  font-weight: bolder;
`,ge=[{option:"a\xF1adir",comp:e(he,{url:"funcionarios-registro"})},{option:"mostrar",comp:e(oe,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",comp:e(ne,{url:"funcionarios-registro",queryKey:"funcReg-id"})},{option:"habilitados",comp:e(re,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"actualizar",comp:e(fe,{url:"funcionarios-registro"})},{option:"asociado",comp:e(ce,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"por nombre",comp:e(ue,{path:"funcionarios-registro/name",allnames:"funcionarios-registro",queryKey:"func_by_name"})}];function ke(){const r=localStorage.getItem("jwt");return v.exports.useEffect(()=>{r&&(X.defaults.headers.common.jwt=r)},[]),e(b,{children:n(be,{children:[e(W,{linear:V.green,color:"#ffffff"}),e(Y,{children:e(Z,{name:"Funcinario..regist",children:e(ee,{form:ge})})})]})})}const be=T.div`
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
`;export{ke as default};

var $=Object.defineProperty,D=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var N=(i,t,r)=>t in i?$(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,o=(i,t)=>{for(var r in t||(t={}))O.call(t,r)&&N(i,r,t[r]);if(k)for(var r of k(t))P.call(t,r)&&N(i,r,t[r]);return i},B=(i,t)=>D(i,H(t));import{j as e,F as C,r as x,a as s,K as d,M as u,s as Q}from"./index.2ac2cfd3.js";import{u as K,b as V,s as J,t as W}from"./store.d275f12d.js";import{T as X}from"./Toast.632f1614.js";import{u as F,b as M,S as U,a as Y,D as Z,C as ee,F as re}from"./Card.cebdff99.js";import{G as te}from"./GetEnabled.d4dad4b8.js";import{S as v,t as I,b as E,G as ie,a as se}from"./Getter.aa1bdc10.js";import{a as ne,u as z,b as T}from"./index.esm.9faa638d.js";import{S as oe}from"./chakra-ui-select.esm.2a4bd44b.js";import{I as w}from"./chakra-ui-input.esm.d0f7b5c8.js";import{G as ae}from"./GetByParams.92e3a29e.js";import{G as le}from"./GetByName.592c1da8.js";import"./chakra-ui-button.esm.8f25e761.js";const ce="http://localhost:5000",R=ne.create({baseURL:ce,withCredentials:!1});R.defaults.headers.common["Content-Type"]="application/json";async function de(i,t){try{const r=await R.post(i,t);return r==null?void 0:r.data}catch(r){return r}}async function ue(i,t,r){try{return(await R.put(`/${t}/${r}`,i)).data}catch(a){return a}}async function G(i){try{const t=await R.get(i),{data:r}=t;return r}catch(t){return t}}const L=["Universidad de Matanzas","Facultad de Medicina de C\xE1rdenas","Empresa MICOM"];function A({list:i,register:t,label:r,required:a}){return e(C,{children:e(oe,B(o({},t(r,{required:a})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(i)&&i.map((n,p)=>e("option",{value:n.id,children:n.name},p))}))})}function me(i){var j;const t=K(V),r=K(J),{stack:a}=t,{setOption:n}=r,[p,h]=x.exports.useState(""),{register:f,handleSubmit:_,formState:{errors:l}}=z(),b="/users/enabled/true",g="/entidades-registro/enabled/true",{data:y}=F("entidad-actived",()=>G(g)),{data:c}=F("users-act",()=>G(b)),m=T(q=>ue(q,i.url,a.id)),S=(j=m==null?void 0:m.data)==null?void 0:j.message;return x.exports.useEffect(()=>{S&&h(S),S==="updated"&&n("mostrar")},[S]),s(C,{children:[s("form",{onSubmit:_(async q=>{m.mutateAsync(q),console.log(q)}),children:[e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"name",children:e("strong",{className:"byid-input-label",children:"Escriba el nombre del funcionario de registro"})}),e(v,{datalist:L,listname:"funcionarios-registro",message:I.provincia,children:e(w,o(o({list:"funcionarios-registro"},f("name",{required:!0})),E))}),l.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba el tel\xE9fono del funcionario de registro"})}),e(v,{datalist:L,listname:"funcionarios-registro",message:I.provincia,children:e(w,o(o({list:"funcionarios-registro"},f("phone",{required:!0})),E))}),l.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Seleccione la entidad de registro a la que pertenece"})}),e(A,{list:y==null?void 0:y.result,label:"erId",register:f,required:!0}),l.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"provinces",children:e("strong",{children:"Seleccione el usuario al que se vincula"})}),e(A,{list:c==null?void 0:c.result,label:"userId",register:f,required:!0}),l.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(M,{buttonstate:m==null?void 0:m.isLoading})]}),p&&e(U,{message:p})]})}function pe(i){const{url:t}=i,[r,a]=x.exports.useState(""),{register:n,handleSubmit:p,formState:{errors:h}}=z(),f="/users/enabled/true",_="/entidades-registro/enabled/true",{data:l}=F("entidad-actived",()=>G(_)),{data:b}=F("users-act",()=>G(f)),g=T(c=>de(t,c));return s(C,{children:[s("form",{onSubmit:p(async c=>{g.mutateAsync(c),console.log(c)}),children:[e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"name",children:e("strong",{className:"byid-input-label",children:"Escriba el nombre del funcionario de registro"})}),e(v,{datalist:L,listname:"funcionarios-registro",message:I.provincia,children:e(w,o(o({list:"funcionarios-registro"},n("name",{required:!0})),E))}),h.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba el tel\xE9fono del funcionario de registro"})}),e(v,{datalist:L,listname:"funcionarios-registro",message:I.provincia,children:e(w,o(o({list:"funcionarios-registro"},n("phone",{required:!0})),E))}),h.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Seleccione la entidad de registro a la que pertenece"})}),e(A,{list:l==null?void 0:l.result,label:"erId",register:n,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(d,{p:"1em",children:s(u,{children:[e("label",{htmlFor:"provinces",children:e("strong",{children:"Seleccione el usuario al que se vincula"})}),e(A,{list:b==null?void 0:b.result,label:"userId",register:n,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(M,{buttonstate:g==null?void 0:g.isLoading})]}),r&&e(U,{message:r})]})}const he=[{option:"a\xF1adir",comp:e(pe,{url:"funcionarios-registro"})},{option:"mostrar",comp:e(ie,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",comp:e(se,{url:"funcionarios-registro",queryKey:"funcReg-id"})},{option:"habilitados",comp:e(te,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"actualizar",comp:e(me,{url:"funcionarios-registro"})},{option:"asociado",comp:e(ae,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"por nombre",comp:e(le,{path:"funcionarios-registro/name",allnames:"funcionarios-registro",queryKey:"func_by_name"})}];function Ce(){const i=localStorage.getItem("jwt");return x.exports.useEffect(()=>{i&&(Y.defaults.headers.common.jwt=i)},[]),e(C,{children:s(fe,{children:[e(X,{linear:W.green,color:"#ffffff"}),e(Z,{children:e(ee,{name:"Funcinario..regist",children:e(re,{form:he})})})]})})}const fe=Q.div`
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
`;export{Ce as default};

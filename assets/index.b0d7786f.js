var U=Object.defineProperty,V=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var j=(t,a,r)=>a in t?U(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,I=(t,a)=>{for(var r in a||(a={}))N.call(a,r)&&j(t,r,a[r]);if(R)for(var r of R(a))J.call(a,r)&&j(t,r,a[r]);return t},L=(t,a)=>V(t,H(a));import{j as e,F as y,a as n,r as w,J as c,K as d,s as M}from"./index.197da568.js";import{u as B,b as O,s as P,t as Q}from"./store.37b8cf4e.js";import{T as W}from"./Toast.c9a8ea84.js";import{u as v,b as l,i as F,c as C,S as _,a as X,D as Y,C as Z,F as ee}from"./Card.94feb51f.js";import{G as re}from"./GetEnabled.8de66928.js";import{T as te,S as ae,G as ne,a as oe}from"./Getter.b8821b94.js";import{a as ie,u as K,b as z}from"./index.esm.b0a48d8a.js";import{S as se}from"./chakra-ui-select.esm.3da330ac.js";import{T as $}from"./TextInput.21524544.js";import{I as ce,E as le}from"./ErrorWarning.68e996e2.js";import{G as ue}from"./GetByParams.8849c695.js";import{G as de}from"./GetByName.ab46f50f.js";import"./chakra-ui-button.esm.2eba4fb6.js";const me="http://localhost:5000",E=ie.create({baseURL:me,withCredentials:!1});E.defaults.headers.common["Content-Type"]="application/json";async function pe(t,a){try{const r=await E.post(t,a);return r==null?void 0:r.data}catch(r){return r}}async function fe(t,a,r){try{return(await E.put(`/${a}/${r}`,t)).data}catch(o){return o}}async function A(t){try{const a=await E.get(t),{data:r}=a;return r}catch(a){return a}}function T({list:t,register:a,label:r,required:o}){return e(y,{children:e(se,L(I({},a(r,{required:o})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((i,s)=>e("option",{value:i.id,children:i.name},s))}))})}const D=({label:t,register:a,required:r,errors:o,defaultValue:i,info:s})=>n(y,{children:[e(te,{label:s,hasArrow:!0,arrowSize:15,children:e(ce,I({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:i},a(t,{required:r,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(le,{label:t,errors:o,info:s})]});function he(t){var k;const a=B(O),r=B(P),{stack:o}=a,{setOption:i}=r,[s,h]=w.exports.useState(""),{register:m,handleSubmit:G,formState:{errors:u}}=K(),g="/users/enabled/true",b="/entidades-registro/enabled/true",{data:S}=v("entidad-actived",()=>A(b)),{data:p}=v("users-act",()=>A(g)),f=z(x=>fe(x,t.url,o.id)),q=(k=f==null?void 0:f.data)==null?void 0:k.message;return w.exports.useEffect(()=>{q&&h(q),q==="updated"&&i("mostrar")},[q]),n(y,{children:[n("form",{onSubmit:G(async x=>{f.mutateAsync(x),console.log(x)}),children:[e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Actualice nombre"}),e($,{info:F.name,required:!0,label:"name",register:m,errors:u,defaultValue:o.name})]})}),e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario de registro."}),e(D,{required:!0,info:F.tel,label:"phone",errors:u,register:m,defaultValue:o.phone})]})}),e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(T,{list:S==null?void 0:S.result,label:"erId",register:m,required:!0}),u.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(T,{list:p==null?void 0:p.result,label:"userId",register:m,required:!0}),u.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),n(c,{m:"1em 2em",children:[e(l,{capit:!0,children:"Deshabilitar o habilitar"}),e(ae,L(I({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(o.enabled)}))]}),e(C,{buttonstate:f==null?void 0:f.isLoading})]}),s&&e(_,{message:s})]})}function be(t){const{url:a}=t,[r,o]=w.exports.useState(""),{register:i,handleSubmit:s,formState:{errors:h}}=K(),m="/users/enabled/true",G="/entidades-registro/enabled/true",{data:u}=v("entidad-actived",()=>A(G)),{data:g}=v("users-act",()=>A(m)),b=z(p=>pe(a,p));return n(y,{children:[n("form",{onSubmit:s(async p=>{b.mutateAsync(p)}),children:[e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Nombre del funcionario"}),e($,{info:F.name,required:!0,label:"name",register:i,errors:h})]})}),e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario"}),e(D,{required:!0,info:F.tel,label:"phone",errors:h,register:i})]})}),e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(T,{list:u==null?void 0:u.result,label:"erId",register:i,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:n(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(T,{list:g==null?void 0:g.result,label:"userId",register:i,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(C,{buttonstate:b==null?void 0:b.isLoading})]}),r&&e(_,{message:r})]})}const ge=[{option:"a\xF1adir",comp:e(be,{url:"funcionarios-registro"})},{option:"mostrar",comp:e(ne,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",comp:e(oe,{url:"funcionarios-registro",queryKey:"funcReg-id"})},{option:"habilitados",comp:e(re,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"actualizar",comp:e(he,{url:"funcionarios-registro"})},{option:"asociado",comp:e(ue,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"por nombre",comp:e(de,{path:"funcionarios-registro/name",allnames:"funcionarios-registro",queryKey:"func_by_name"})}];function Be(){const t=localStorage.getItem("jwt");return w.exports.useEffect(()=>{t&&(X.defaults.headers.common.jwt=t)},[]),e(y,{children:n(ye,{children:[e(W,{linear:Q.green,color:"#ffffff"}),e(Y,{children:e(Z,{name:"Funcinario..regist",children:e(ee,{form:ge})})})]})})}const ye=M.div`
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
`;export{Be as default};

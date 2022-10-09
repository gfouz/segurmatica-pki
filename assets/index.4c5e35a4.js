var U=Object.defineProperty,H=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var G=(r,a,t)=>a in r?U(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,w=(r,a)=>{for(var t in a||(a={}))V.call(a,t)&&G(r,t,a[t]);if(j)for(var t of j(a))M.call(a,t)&&G(r,t,a[t]);return r},T=(r,a)=>H(r,N(a));import{j as e,F as S,a as o,r as I,a2 as c,a3 as d,s as O}from"./index.b7cccbb5.js";import{t as P}from"./constants.c1eecf01.js";import{C as Q}from"./Toast.1bbf2185.js";import{S as B,D as W}from"./SubmitButton.af6348b6.js";import{C as J,F as X}from"./Card.79b886ab.js";import{G as Y}from"./GetEnabled.e440a4c2.js";import{S as Z,G as ee,a as te}from"./GetByName.c10d5a19.js";import{u as R,b as re,s as ae}from"./store.bebd0824.js";import{u as z,a as _}from"./index.esm.5c5e9822.js";import{u as v,S as $}from"./StatusHandler.9d0da5e5.js";import{a as oe,S as l,i as F,b as ie}from"./StyledLabel.46abfa46.js";import{S as ne}from"./chakra-ui-select.esm.3f4503b3.js";import{T as D}from"./TextInput.56cf34f0.js";import{T as se,I as ce,E as le}from"./ErrorWarning.3038fd9c.js";import{G as ue}from"./GetByParams.89e291fd.js";import"./chakra-ui-button.esm.c2046937.js";import"./chakra-ui-checkbox.esm.51ae5603.js";const de="http://localhost:5000",E=oe.create({baseURL:de,withCredentials:!1});E.defaults.headers.common["Content-Type"]="application/json";async function me(r,a){try{const t=await E.post(r,a);return t==null?void 0:t.data}catch(t){return t}}async function pe(r,a,t){try{return(await E.put(`/${a}/${t}`,r)).data}catch(i){return i}}async function A(r){try{const a=await E.get(r),{data:t}=a;return t}catch(a){return a}}function C({list:r,register:a,label:t,required:i}){return e(S,{children:e(ne,T(w({},a(t,{required:i})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((n,s)=>e("option",{value:n.id,children:n.name},s))}))})}const K=({label:r,register:a,required:t,errors:i,defaultValue:n,info:s})=>o(S,{children:[e(se,{label:s,hasArrow:!0,arrowSize:15,children:e(ce,w({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:n},a(r,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(le,{label:r,errors:i,info:s})]});function fe(r){var k;const a=R(re),t=R(ae),{stack:i}=a,{setOption:n}=t,[s,h]=I.exports.useState(""),{register:m,handleSubmit:L,formState:{errors:u}}=z(),g="/users/enabled/true",b="/entidades-registro/enabled/true",{data:y}=v("entidad-actived",()=>A(b)),{data:p}=v("users-act",()=>A(g)),f=_(q=>pe(q,r.url,i.id)),x=(k=f==null?void 0:f.data)==null?void 0:k.message;return I.exports.useEffect(()=>{x&&h(x),x==="updated"&&n("mostrar")},[x]),o(S,{children:[o("form",{onSubmit:L(async q=>{f.mutateAsync(q),console.log(q)}),children:[e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Actualice nombre"}),e(D,{info:F.name,required:!0,label:"name",register:m,errors:u,defaultValue:i.name})]})}),e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario de registro."}),e(K,{required:!0,info:F.tel,label:"phone",errors:u,register:m,defaultValue:i.phone})]})}),e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(C,{list:y==null?void 0:y.result,label:"erId",register:m,required:!0}),u.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(C,{list:p==null?void 0:p.result,label:"userId",register:m,required:!0}),u.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),o(c,{m:"1em 2em",children:[e(l,{capit:!0,children:"Deshabilitar o habilitar"}),e(Z,T(w({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)}))]}),e(B,{buttonstate:f==null?void 0:f.isLoading})]}),s&&e($,{message:s})]})}function he(r){const{url:a}=r,[t,i]=I.exports.useState(""),{register:n,handleSubmit:s,formState:{errors:h}}=z(),m="/users/enabled/true",L="/entidades-registro/enabled/true",{data:u}=v("entidad-actived",()=>A(L)),{data:g}=v("users-act",()=>A(m)),b=_(p=>me(a,p));return o(S,{children:[o("form",{onSubmit:s(async p=>{b.mutateAsync(p)}),children:[e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Nombre del funcionario"}),e(D,{info:F.name,required:!0,label:"name",register:n,errors:h})]})}),e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario"}),e(K,{required:!0,info:F.tel,label:"phone",errors:h,register:n})]})}),e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(C,{list:u==null?void 0:u.result,label:"erId",register:n,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:o(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(C,{list:g==null?void 0:g.result,label:"userId",register:n,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(B,{buttonstate:b==null?void 0:b.isLoading})]}),t&&e($,{message:t})]})}const be=[{option:"a\xF1adir",comp:e(he,{url:"funcionarios-registro"})},{option:"mostrar",comp:e(ee,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",comp:e(te,{allnames:"funcionarios-registro"})},{option:"habilitados",comp:e(Y,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"actualizar",comp:e(fe,{url:"funcionarios-registro"})},{option:"asociado",comp:e(ue,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})}];function _e(){const r=localStorage.getItem("jwt");return I.exports.useEffect(()=>{r&&(ie.defaults.headers.common.jwt=r)},[]),e(S,{children:o(ge,{children:[e(Q,{linear:P.green,color:"#ffffff"}),e(W,{children:e(J,{name:"Funcinario..regist",children:e(X,{form:be})})})]})})}const ge=O.div`
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
`;export{_e as default};

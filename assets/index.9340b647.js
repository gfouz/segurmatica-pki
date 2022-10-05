var U=Object.defineProperty,H=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var R=(t,o,r)=>o in t?U(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,I=(t,o)=>{for(var r in o||(o={}))V.call(o,r)&&R(t,r,o[r]);if(k)for(var r of k(o))M.call(o,r)&&R(t,r,o[r]);return t},L=(t,o)=>H(t,N(o));import{j as e,F as y,a,r as w,a2 as c,a3 as d,s as O}from"./index.84145a61.js";import{t as P}from"./constants.c1eecf01.js";import{C as Q}from"./Toast.399d4852.js";import{S as B,D as W}from"./SubmitButton.d37232a3.js";import{C as J,F as X}from"./Card.4f06ee74.js";import{G as Y}from"./GetEnabled.c9b1ba58.js";import{S as Z,G as ee,a as re}from"./Getter.2ace4167.js";import{u as j,b as te,s as oe}from"./store.6f1159d1.js";import{u as _,a as z}from"./index.esm.d64a2720.js";import{u as v,S as K}from"./StatusHandler.4fa71a43.js";import{a as ae,S as l,i as F,b as ie}from"./StyledLabel.97b52d23.js";import{S as ne}from"./chakra-ui-select.esm.7d7cae85.js";import{T as $}from"./TextInput.0bd60058.js";import{T as se,I as ce,E as le}from"./ErrorWarning.4beaff6e.js";import{G as ue}from"./GetByParams.3e5ce4c1.js";import{G as de}from"./GetByName.a5d01092.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";const me="http://localhost:5000",E=ae.create({baseURL:me,withCredentials:!1});E.defaults.headers.common["Content-Type"]="application/json";async function pe(t,o){try{const r=await E.post(t,o);return r==null?void 0:r.data}catch(r){return r}}async function fe(t,o,r){try{return(await E.put(`/${o}/${r}`,t)).data}catch(i){return i}}async function A(t){try{const o=await E.get(t),{data:r}=o;return r}catch(o){return o}}function C({list:t,register:o,label:r,required:i}){return e(y,{children:e(ne,L(I({},o(r,{required:i})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((n,s)=>e("option",{value:n.id,children:n.name},s))}))})}const D=({label:t,register:o,required:r,errors:i,defaultValue:n,info:s})=>a(y,{children:[e(se,{label:s,hasArrow:!0,arrowSize:15,children:e(ce,I({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:n},o(t,{required:r,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(le,{label:t,errors:i,info:s})]});function he(t){var T;const o=j(te),r=j(oe),{stack:i}=o,{setOption:n}=r,[s,h]=w.exports.useState(""),{register:m,handleSubmit:G,formState:{errors:u}}=_(),g="/users/enabled/true",b="/entidades-registro/enabled/true",{data:S}=v("entidad-actived",()=>A(b)),{data:p}=v("users-act",()=>A(g)),f=z(x=>fe(x,t.url,i.id)),q=(T=f==null?void 0:f.data)==null?void 0:T.message;return w.exports.useEffect(()=>{q&&h(q),q==="updated"&&n("mostrar")},[q]),a(y,{children:[a("form",{onSubmit:G(async x=>{f.mutateAsync(x),console.log(x)}),children:[e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Actualice nombre"}),e($,{info:F.name,required:!0,label:"name",register:m,errors:u,defaultValue:i.name})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario de registro."}),e(D,{required:!0,info:F.tel,label:"phone",errors:u,register:m,defaultValue:i.phone})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(C,{list:S==null?void 0:S.result,label:"erId",register:m,required:!0}),u.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(C,{list:p==null?void 0:p.result,label:"userId",register:m,required:!0}),u.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),a(c,{m:"1em 2em",children:[e(l,{capit:!0,children:"Deshabilitar o habilitar"}),e(Z,L(I({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)}))]}),e(B,{buttonstate:f==null?void 0:f.isLoading})]}),s&&e(K,{message:s})]})}function be(t){const{url:o}=t,[r,i]=w.exports.useState(""),{register:n,handleSubmit:s,formState:{errors:h}}=_(),m="/users/enabled/true",G="/entidades-registro/enabled/true",{data:u}=v("entidad-actived",()=>A(G)),{data:g}=v("users-act",()=>A(m)),b=z(p=>pe(o,p));return a(y,{children:[a("form",{onSubmit:s(async p=>{b.mutateAsync(p)}),children:[e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Nombre del funcionario"}),e($,{info:F.name,required:!0,label:"name",register:n,errors:h})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Tel\xE9fono del funcionario"}),e(D,{required:!0,info:F.tel,label:"phone",errors:h,register:n})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(C,{list:u==null?void 0:u.result,label:"erId",register:n,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:a(d,{children:[e(l,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(C,{list:g==null?void 0:g.result,label:"userId",register:n,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(B,{buttonstate:b==null?void 0:b.isLoading})]}),r&&e(K,{message:r})]})}const ge=[{option:"a\xF1adir",comp:e(be,{url:"funcionarios-registro"})},{option:"mostrar",comp:e(ee,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",comp:e(re,{url:"funcionarios-registro",queryKey:"funcReg-id"})},{option:"habilitados",comp:e(Y,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"actualizar",comp:e(he,{url:"funcionarios-registro"})},{option:"asociado",comp:e(ue,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"por nombre",comp:e(de,{path:"funcionarios-registro/name",allnames:"funcionarios-registro",queryKey:"func_by_name"})}];function $e(){const t=localStorage.getItem("jwt");return w.exports.useEffect(()=>{t&&(ie.defaults.headers.common.jwt=t)},[]),e(y,{children:a(ye,{children:[e(Q,{linear:P.green,color:"#ffffff"}),e(W,{children:e(J,{name:"Funcinario..regist",children:e(X,{form:ge})})})]})})}const ye=O.div`
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

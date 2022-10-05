var k=Object.defineProperty,B=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var x=(t,r,o)=>r in t?k(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,y=(t,r)=>{for(var o in r||(r={}))L.call(r,o)&&x(t,o,r[o]);if(h)for(var o of h(r))_.call(r,o)&&x(t,o,r[o]);return t},S=(t,r)=>B(t,z(r));import{j as e,F as b,s as w,r as i,a as I,H as K,a1 as f}from"./index.84145a61.js";import{t as N}from"./constants.c1eecf01.js";import{C as T}from"./Toast.399d4852.js";import{D as U}from"./SubmitButton.d37232a3.js";import{C as D,F as H}from"./Card.4f06ee74.js";import{G as O}from"./GetEnabled.c9b1ba58.js";import{A as R,G as $,a as Q}from"./Getter.2ace4167.js";import{U as X}from"./Updater.820cbf8b.js";import{C as J}from"./Creator.140eb7d1.js";import{G as M}from"./GetByName.a5d01092.js";import{S as P}from"./chakra-ui-select.esm.7d7cae85.js";import{u as d,S as V}from"./StatusHandler.4fa71a43.js";import{a as W,e as A,b as Y}from"./StyledLabel.97b52d23.js";import{u as Z}from"./index.esm.d64a2720.js";import{S as ee}from"./SubmitButton.72998832.js";import"./store.6f1159d1.js";import"./chakra-ui-button.esm.6a8e0e0a.js";import"./chakra-ui-checkbox.esm.477918d5.js";import"./ErrorWarning.4beaff6e.js";import"./TextInput.0bd60058.js";function E(t){const{label:r,list:o,register:a,required:n}=t;return e(b,{children:e(P,S(y({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},a(r,{required:n})),{children:Array.isArray(o)&&o.map((m,c)=>e("option",{value:m.id,children:m.name},c))}))})}const te="http://localhost:5000",v=W.create({baseURL:te,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function oe(t,r){try{return(await v.get(`/empresas-instituciones/municipio/${t}/organismo/${r}`)).data}catch(o){return o.message}}function re(){const[t,r]=i.exports.useState(""),[o,a]=i.exports.useState(""),[n,m]=i.exports.useState(""),{register:c,handleSubmit:C,formState:{errors:ae}}=Z(),F="municipios",q="organismos",{data:l}=d("all-mun",()=>A(F)),{data:p}=d("all-org",()=>A(q)),{data:s,refetch:G}=d("some-emp",()=>oe(o,n)),j=async g=>{console.log(s),a(g.id),m(g.id2)};i.exports.useEffect(()=>{G()},[o,n]);const u=s==null?void 0:s.message;return i.exports.useEffect(()=>{u&&r(u)},[u]),e(b,{children:e("form",{onSubmit:C(j),children:I(K,{direction:"column",p:"0.5em",children:[e(f,{size:"sm",m:"0.5em 0",children:"Empresa e instituci\xF3n por municipio."}),e(E,{label:"id",list:l==null?void 0:l.result,register:c,required:!0}),e(f,{size:"sm",m:"0.5em 0",children:"Empresa o instituci\xF3n por organismo."}),e(E,{label:"id2",list:p==null?void 0:p.result,register:c,required:!0}),e(ee,{buttonstate:s==null?void 0:s.isLoading}),e(R,{data:s==null?void 0:s.result}),t&&e(V,{message:t})]})})})}w.div`
  margin: 2em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid #ab8ffe;
  border-radius: 10px;
  color: #222222;
  background-color: #ab8ffe;
`;const se=[{option:"a\xF1adir",comp:e(J,{url:"empresas-instituciones"})},{option:"mostrar",comp:e($,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",comp:e(Q,{url:"empresas-instituciones",queryKey:"emp-inst-id"})},{option:"habilitados",comp:e(O,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",comp:e(X,{url:"empresas-instituciones"})},{option:"asociado",comp:e(re,{})},{option:"asociado habilitado",comp:e(f,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(M,{path:"empresas-instituciones/name",allnames:"empresas-instituciones",queryKey:"emp-by-name"})}];function qe(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(Y.defaults.headers.common.jwt=t)},[]),e(b,{children:I(ie,{children:[e(T,{linear:N.green,color:"#ffffff"}),e(U,{children:e(D,{name:"Empresa-inst...",children:e(H,{form:se})})})]})})}const ie=w.div`
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
`;export{qe as default};

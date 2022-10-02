var k=Object.defineProperty,B=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(t,r,s)=>r in t?k(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,y=(t,r)=>{for(var s in r||(r={}))L.call(r,s)&&x(t,s,r[s]);if(h)for(var s of h(r))T.call(r,s)&&x(t,s,r[s]);return t},S=(t,r)=>B(t,z(r));import{j as e,F as b,s as w,r as i,a as I,aj as _,I as f}from"./index.197da568.js";import{t as K}from"./store.37b8cf4e.js";import{T as N}from"./Toast.c9a8ea84.js";import{u as d,S as U,f as A,a as D,D as O,C as R,F as $}from"./Card.94feb51f.js";import{G as H}from"./GetEnabled.8de66928.js";import{A as Q,G as V,a as X}from"./Getter.b8821b94.js";import{U as J}from"./Updater.eb38bc41.js";import{C as M}from"./Creator.75f2d409.js";import{G as P}from"./GetByName.ab46f50f.js";import{S as W}from"./chakra-ui-select.esm.3da330ac.js";import{a as Y,u as Z}from"./index.esm.b0a48d8a.js";import{S as ee}from"./SubmitButton.f82040d6.js";import"./chakra-ui-button.esm.2eba4fb6.js";import"./ErrorWarning.68e996e2.js";import"./TextInput.21524544.js";function E(t){const{label:r,list:s,register:a,required:n}=t;return e(b,{children:e(W,S(y({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},a(r,{required:n})),{children:Array.isArray(s)&&s.map((m,c)=>e("option",{value:m.id,children:m.name},c))}))})}const te="http://localhost:5000",v=Y.create({baseURL:te,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function se(t,r){try{return(await v.get(`/empresas-instituciones/municipio/${t}/organismo/${r}`)).data}catch(s){return s.message}}function re(){const[t,r]=i.exports.useState(""),[s,a]=i.exports.useState(""),[n,m]=i.exports.useState(""),{register:c,handleSubmit:F,formState:{errors:ae}}=Z(),j="municipios",q="organismos",{data:l}=d("all-mun",()=>A(j)),{data:p}=d("all-org",()=>A(q)),{data:o,refetch:C}=d("some-emp",()=>se(s,n)),G=async g=>{console.log(o),a(g.id),m(g.id2)};i.exports.useEffect(()=>{C()},[s,n]);const u=o==null?void 0:o.message;return i.exports.useEffect(()=>{u&&r(u)},[u]),e(b,{children:e("form",{onSubmit:F(G),children:I(_,{direction:"column",p:"0.5em",children:[e(f,{size:"sm",m:"0.5em 0",children:"Empresa e instituci\xF3n por municipio."}),e(E,{label:"id",list:l==null?void 0:l.result,register:c,required:!0}),e(f,{size:"sm",m:"0.5em 0",children:"Empresa o instituci\xF3n por organismo."}),e(E,{label:"id2",list:p==null?void 0:p.result,register:c,required:!0}),e(ee,{buttonstate:o==null?void 0:o.isLoading}),e(Q,{data:o==null?void 0:o.result}),t&&e(U,{message:t})]})})})}w.div`
  margin: 2em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid #ab8ffe;
  border-radius: 10px;
  color: #222222;
  background-color: #ab8ffe;
`;const oe=[{option:"a\xF1adir",comp:e(M,{url:"empresas-instituciones"})},{option:"mostrar",comp:e(V,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",comp:e(X,{url:"empresas-instituciones",queryKey:"emp-inst-id"})},{option:"habilitados",comp:e(H,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",comp:e(J,{url:"empresas-instituciones"})},{option:"asociado",comp:e(re,{})},{option:"asociado habilitado",comp:e(f,{size:"md",children:"NO EXISTEN ASOCIACIONES !"})},{option:"por nombre",comp:e(P,{path:"empresas-instituciones/name",allnames:"empresas-instituciones",queryKey:"emp-by-name"})}];function we(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(D.defaults.headers.common.jwt=t)},[]),e(b,{children:I(ie,{children:[e(N,{linear:K.green,color:"#ffffff"}),e(O,{children:e(R,{name:"Empresa-inst...",children:e($,{form:oe})})})]})})}const ie=w.div`
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
`;export{we as default};

var L=Object.defineProperty,R=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(t,r,o)=>r in t?L(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,x=(t,r)=>{for(var o in r||(r={}))z.call(r,o)&&h(t,o,r[o]);if(g)for(var o of g(r))U.call(r,o)&&h(t,o,r[o]);return t},y=(t,r)=>R(t,_(r));import{j as e,F as f,s as C,r as i,a as F,H as D,a1 as S}from"./index.a965a08b.js";import{t as H}from"./constants.c1eecf01.js";import{C as T}from"./Toast.c7c7e538.js";import{D as $}from"./SubmitButton.ff1e26b2.js";import{C as K,F as N}from"./Card.c6800e88.js";import{R as P,G as Q}from"./Rocket.84a95247.js";import{A as J,E as w,S as M,G as O,a as V,b as W}from"./SearchPlus.ae3627cf.js";import{U as X}from"./Updater.476ca69e.js";import{C as Y}from"./Creator.ab123595.js";import{S as Z}from"./chakra-ui-select.esm.56befddd.js";import{u as d,S as ee}from"./StatusHandler.f4e4ee84.js";import{a as te,d as E,b as oe}from"./StyledLabel.73e7a9c0.js";import{u as re}from"./index.esm.0200c310.js";import{S as se}from"./SubmitButton.ae9c346c.js";import{C as ie}from"./CodeBranch.b0aee27b.js";import"./store.df117b59.js";import"./chakra-ui-button.esm.af1d5124.js";import"./chakra-ui-checkbox.esm.fe438153.js";import"./ErrorWarning.4bc7c3cd.js";import"./TextInput.77148194.js";function A(t){const{label:r,list:o,register:a,required:n}=t;return e(f,{children:e(Z,y(x({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},a(r,{required:n})),{children:Array.isArray(o)&&o.map((c,m)=>e("option",{value:c.id,children:c.name},m))}))})}const ae="http://localhost:5000",j=te.create({baseURL:ae,withCredentials:!1});j.defaults.headers.common["Content-Type"]="application/json";async function ne(t,r){try{return(await j.get(`/empresas-instituciones/municipio/${t}/organismo/${r}`)).data}catch(o){return o.message}}function ce(){const[t,r]=i.exports.useState(""),[o,a]=i.exports.useState(""),[n,c]=i.exports.useState(""),{register:m,handleSubmit:k,formState:{errors:le}}=re(),I="municipios",q="organismos",{data:l}=d("all-mun",()=>E(I)),{data:p}=d("all-org",()=>E(q)),{data:s,refetch:B}=d("some-emp",()=>ne(o,n)),G=async b=>{console.log(s),a(b.id),c(b.id2)};i.exports.useEffect(()=>{B()},[o,n]);const u=s==null?void 0:s.message;return i.exports.useEffect(()=>{u&&r(u)},[u]),e(f,{children:e("form",{onSubmit:k(G),children:F(D,{direction:"column",p:"0.5em",children:[e(S,{size:"sm",m:"0.5em 0",children:"Empresa e instituci\xF3n por municipio."}),e(A,{label:"id",list:l==null?void 0:l.result,register:m,required:!0}),e(S,{size:"sm",m:"0.5em 0",children:"Empresa o instituci\xF3n por organismo."}),e(A,{label:"id2",list:p==null?void 0:p.result,register:m,required:!0}),e(se,{buttonstate:s==null?void 0:s.isLoading}),e(J,{data:s==null?void 0:s.result}),t&&e(ee,{message:t})]})})})}C.div`
  margin: 2em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid #ab8ffe;
  border-radius: 10px;
  color: #222222;
  background-color: #ab8ffe;
`;const v=[{option:"a\xF1adir",icon:e(w,{}),comp:e(Y,{url:"empresas-instituciones"})},{option:"mostrar",icon:e(M,{}),comp:e(O,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",icon:e(V,{}),comp:e(W,{allnames:"empresas-instituciones"})},{option:"habilitados",icon:e(P,{}),comp:e(Q,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",icon:e(w,{}),comp:e(X,{url:"empresas-instituciones"})},{option:"asociado",icon:e(ie,{}),comp:e(ce,{})}];function Ge(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(oe.defaults.headers.common.jwt=t)},[]),e(f,{children:F(me,{children:[e(T,{linear:H.green,color:"#ffffff"}),e($,{children:e(K,{name:"Empresa-inst...",options:v,children:e(N,{options:v})})})]})})}const me=C.div`
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
`;export{Ge as default};

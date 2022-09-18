var J=Object.defineProperty,Q=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var K=(s,t,r)=>t in s?J(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,u=(s,t)=>{for(var r in t||(t={}))X.call(t,r)&&K(s,r,t[r]);if(B)for(var r of B(t))W.call(t,r)&&K(s,r,t[r]);return s},_=(s,t)=>Q(s,V(t));import{j as e,F as I,r as y,a as n,K as p,M as h,s as T,J as O,G as Y}from"./index.3c396f94.js";import{u as U,b as Z,s as ee,t as re}from"./store.d52a4178.js";import{T as te}from"./Toast.b9a2ccf4.js";import{u as F,b as H,S as z,d as se,e as ie,h as ne,a as oe,D as ae,C as le,F as ce}from"./Card.7ce88ba9.js";import{G as de}from"./GetEnabled.cc52f2a9.js";import{S as A,t as C,b as L,A as ue,G as me,a as pe}from"./Getter.be515e40.js";import{a as he,u as P,b as $}from"./index.esm.c357225c.js";import{S as D}from"./chakra-ui-select.esm.067ebc97.js";import{I as N}from"./chakra-ui-input.esm.9338221f.js";import"./chakra-ui-button.esm.a759d600.js";const ge="http://localhost:5000",k=he.create({baseURL:ge,withCredentials:!1});k.defaults.headers.common["Content-Type"]="application/json";async function fe(s,t){try{const r=await k.post(s,t);return r==null?void 0:r.data}catch(r){return r}}async function be(s,t,r){try{return(await k.put(`/${t}/${r}`,s)).data}catch(c){return c}}async function R(s){try{const t=await k.get(s),{data:r}=t;return r}catch(t){return t}}const G=["Universidad de Matanzas","Facultad de Medicina de C\xE1rdenas","Empresa MICOM"];function j({list:s,register:t,label:r,required:c}){return e(I,{children:e(D,_(u({},t(r,{required:c})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(s)&&s.map((a,g)=>e("option",{value:a.id,children:a.name},g))}))})}function ye(s){var E;const t=U(Z),r=U(ee),{stack:c}=t,{setOption:a}=r,[g,m]=y.exports.useState(""),{register:f,handleSubmit:S,formState:{errors:i}}=P(),x="/users/enabled/true",b="/entidades-registro/enabled/true",{data:q}=F("entidad-actived",()=>R(b)),{data:l}=F("users-act",()=>R(x)),d=$(o=>be(o,s.url,c.id)),v=(E=d==null?void 0:d.data)==null?void 0:E.message;return y.exports.useEffect(()=>{v&&m(v),v==="updated"&&a("mostrar")},[v]),n(I,{children:[n("form",{onSubmit:S(async o=>{d.mutateAsync(o),console.log(o)}),children:[e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"name",children:e("strong",{className:"byid-input-label",children:"Escriba el nombre del funcionario de registro"})}),e(A,{datalist:G,listname:"funcionarios-registro",message:C.provincia,children:e(N,u(u({list:"funcionarios-registro"},f("name",{required:!0})),L))}),i.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba el tel\xE9fono del funcionario de registro"})}),e(A,{datalist:G,listname:"funcionarios-registro",message:C.provincia,children:e(N,u(u({list:"funcionarios-registro"},f("phone",{required:!0})),L))}),i.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Seleccione la entidad de registro a la que pertenece"})}),e(j,{list:q==null?void 0:q.result,label:"erId",register:f,required:!0}),i.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{children:"Seleccione el usuario al que se vincula"})}),e(j,{list:l==null?void 0:l.result,label:"userId",register:f,required:!0}),i.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(H,{buttonstate:d==null?void 0:d.isLoading})]}),g&&e(z,{message:g})]})}function Se(s){const{url:t}=s,[r,c]=y.exports.useState(""),{register:a,handleSubmit:g,formState:{errors:m}}=P(),f="/users/enabled/true",S="/entidades-registro/enabled/true",{data:i}=F("entidad-actived",()=>R(S)),{data:x}=F("users-act",()=>R(f)),b=$(l=>fe(t,l));return n(I,{children:[n("form",{onSubmit:g(async l=>{b.mutateAsync(l),console.log(l)}),children:[e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"name",children:e("strong",{className:"byid-input-label",children:"Escriba el nombre del funcionario de registro"})}),e(A,{datalist:G,listname:"funcionarios-registro",message:C.provincia,children:e(N,u(u({list:"funcionarios-registro"},a("name",{required:!0})),L))}),m.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Escriba el tel\xE9fono del funcionario de registro"})}),e(A,{datalist:G,listname:"funcionarios-registro",message:C.provincia,children:e(N,u(u({list:"funcionarios-registro"},a("phone",{required:!0})),L))}),m.name&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{className:"byid-input-label",children:"Seleccione la entidad de registro a la que pertenece"})}),e(j,{list:i==null?void 0:i.result,label:"erId",register:a,required:!0}),m.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"provinces",children:e("strong",{children:"Seleccione el usuario al que se vincula"})}),e(j,{list:x==null?void 0:x.result,label:"userId",register:a,required:!0}),m.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(H,{buttonstate:b==null?void 0:b.isLoading})]}),r&&e(z,{message:r})]})}function xe(s){var M,E;const{path:t,queryKey:r}=s,c="entidades-registro",[a,g]=y.exports.useState(""),[m,f]=y.exports.useState(""),{data:S}=F("entidades-registro",()=>ie(c)),{data:i,isLoading:x,isError:b,refetch:q}=F(r,()=>ne(t,m));i==null||i.result;const l=S==null?void 0:S.result,d=((E=(M=i==null?void 0:i.response)==null?void 0:M.data)==null?void 0:E.message)||(i==null?void 0:i.message);y.exports.useEffect(()=>{se(d,g)},[d]);const v=o=>{var w;f((w=o==null?void 0:o.target)==null?void 0:w.value)};return y.exports.useEffect(()=>{q()},[m]),e(I,{children:e(p,{p:"1em",children:n(h,{children:[e("label",{htmlFor:"association",children:e(O,{size:"md",m:"0.5em 0",color:"#009966",children:"Seleccione asociado:"})}),e(D,{placeholder:"Select option",size:"xm",color:"#000000",onChange:o=>v(o),children:l==null?void 0:l.map((o,w)=>e("option",{value:o.id,children:o.email||o.name},w))}),n(qe,{children:[b&&e("div",{children:"An error ocurred..."}),x&&n("div",{children:[e(Y,{size:"sm",color:"white"}),e(O,{color:"white",children:"Loading..."})]}),e(ue,{data:i==null?void 0:i.result}),a&&e(z,{message:a})]})]})})})}const qe=T.div`
  width: 100%;
`,ve=[{option:"a\xF1adir",comp:e(Se,{url:"funcionarios-registro"})},{option:"mostrar",comp:e(me,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",comp:e(pe,{url:"funcionarios-registro",queryKey:"funcReg-id"})},{option:"habilitados",comp:e(de,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"actualizar",comp:e(ye,{url:"funcionarios-registro"})},{option:"asociado",comp:e(xe,{path:"funcionarios-registro/entidad-registro",queryKey:"func-reg"})},{option:"asociado habilitado",comp:e("p",{children:"AUN NO EXISTEN ASOCIACIONES !"})}];function Me(){const s=localStorage.getItem("jwt");return y.exports.useEffect(()=>{s&&(oe.defaults.headers.common.jwt=s)},[]),e(I,{children:n(Fe,{children:[e(te,{linear:re.green,color:"#ffffff"}),e(ae,{children:e(le,{name:"Funcinario..regist",children:e(ce,{form:ve})})})]})})}const Fe=T.div`
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

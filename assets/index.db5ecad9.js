import{h as N,y as L,z as j,a5 as P,r as c,d as A,c as _,s as f,R as B,a as d,j as e,G as F,I as l,F as b,J as S,K as k}from"./index.197da568.js";import{t as z}from"./store.37b8cf4e.js";import{T as C}from"./Toast.c9a8ea84.js";import{u as v,S as E,b as w,c as D,a as q,D as R,C as K,F as G}from"./Card.94feb51f.js";import{c as H,a as U,u as V,b as W}from"./index.esm.b0a48d8a.js";function g(){return g=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},g.apply(this,arguments)}function $(t,o){if(t==null)return{};var r={},s=Object.keys(t),i,n;for(n=0;n<s.length;n++)i=s[n],!(o.indexOf(i)>=0)&&(r[i]=t[i]);return r}var J=["className","rows"],M=["h","minH","height","minHeight"],Q=N(function(t,o){var r=L("Textarea",t),s=j(t),i=s.className,n=s.rows,m=$(s,J),u=H(m),a=n?P(r,M):r;return c.exports.createElement(A.textarea,g({ref:o,rows:n},u,{className:_("chakra-textarea",i),__css:a}))});const X="http://localhost:5000",x=U.create({baseURL:X,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function T(t){try{return(await x.get(t)).data}catch(o){return o}}async function Y(t,o){try{const r=await x.post(t,o),{data:s}=r;return s}catch(r){return r==null?void 0:r.message}}function Z(t){const{url:o,queryKey:r}=t;c.exports.useState(()=>localStorage.getItem("jwt"));const[s,i]=c.exports.useState(""),{data:n,isLoading:m,isError:u}=v(r,()=>T(o)),a=n==null?void 0:n.message;return B.useEffect(()=>{a&&i(a)},[a]),d(ee,{children:[u&&e("div",{children:"An error ocurred..."}),m&&d("div",{children:[e(F,{size:"sm",color:"red"}),e(l,{color:"#444444",children:"Loading..."})]}),d(te,{children:[s&&e(E,{message:s}),e(w,{color:"#009966",children:"Terminos y condiciones."}),e(re,{children:n==null?void 0:n.data})]})]})}const ee=f.div`
  width: 100%;
`,te=f.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,re=f.p`
  color: #666666;
  text-align: left;
`;function oe(t){const{url:o,queryKey:r}=t,{register:s,handleSubmit:i,formState:{errors:n}}=V();let[m,u]=c.exports.useState("");const{data:a,isLoading:ie,isError:ce}=v(r,()=>T(o)),[I,O]=c.exports.useState("");c.exports.useState(""),a==null||a.result;const y=a==null?void 0:a.message;c.exports.useEffect(()=>{u(y)},[y]),c.exports.useEffect(()=>{O(a==null?void 0:a.data)});const p=W(h=>Y(o,h));return e(b,{children:d(se,{children:[d("form",{onSubmit:i(async h=>{console.log(h)}),children:[e(S,{p:"1em",children:d(k,{children:[e(w,{color:"#009966",m:"1em 0",center:!0,children:"Editar condiciones."}),e(Q,{defaultValue:I,placeholder:"Terminos y condiciones",minWidth:"320px"}),e(D,{buttonstate:p==null?void 0:p.isLoading})]})}),n.condiciones&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(S,{children:m&&e(E,{message:m})})]})})}const se=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ne=[{option:"a\xF1adir",comp:e(oe,{url:"condiciones",queryKey:"terms-to-change"})},{option:"mostrar",comp:e(Z,{url:"condiciones",queryKey:"fullterms"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado habilitado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"por nombre",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})}];function he(){const t=localStorage.getItem("jwt");return c.exports.useEffect(()=>{t&&(q.defaults.headers.common.jwt=t)},[]),e(b,{children:d(ae,{children:[e(C,{linear:z.green,color:"#ffffff"}),e(R,{children:e(K,{name:"Terminos y...",children:e(G,{form:ne})})})]})})}const ae=f.div`
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
`;export{he as default};

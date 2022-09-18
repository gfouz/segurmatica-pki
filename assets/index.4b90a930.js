import{h as I,y as N,z as j,a7 as L,r as l,d as P,c as A,s as f,R as F,a as d,j as e,G as _,J as c,F as b,K as S,M as z}from"./index.2ac2cfd3.js";import{t as B}from"./store.d275f12d.js";import{T as k}from"./Toast.632f1614.js";import{u as v,S as E,b as C,a as D,D as q,C as R,F as K}from"./Card.cebdff99.js";import{c as G,a as H,u as M,b as U}from"./index.esm.9faa638d.js";function g(){return g=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},g.apply(this,arguments)}function V(t,o){if(t==null)return{};var r={},s=Object.keys(t),a,n;for(n=0;n<s.length;n++)a=s[n],!(o.indexOf(a)>=0)&&(r[a]=t[a]);return r}var W=["className","rows"],$=["h","minH","height","minHeight"],J=I(function(t,o){var r=N("Textarea",t),s=j(t),a=s.className,n=s.rows,m=V(s,W),u=G(m),i=n?L(r,$):r;return l.exports.createElement(P.textarea,g({ref:o,rows:n},u,{className:A("chakra-textarea",a),__css:i}))});const Q="http://localhost:5000",x=H.create({baseURL:Q,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function w(t){try{return(await x.get(t)).data}catch(o){return o}}async function X(t,o){try{const r=await x.post(t,o),{data:s}=r;return s}catch(r){return r==null?void 0:r.message}}function Y(t){const{url:o,queryKey:r}=t;l.exports.useState(()=>localStorage.getItem("jwt"));const[s,a]=l.exports.useState(""),{data:n,isLoading:m,isError:u}=v(r,()=>w(o)),i=n==null?void 0:n.message;return F.useEffect(()=>{i&&a(i)},[i]),d(Z,{children:[u&&e("div",{children:"An error ocurred..."}),m&&d("div",{children:[e(_,{size:"sm",color:"red"}),e(c,{color:"#444444",children:"Loading..."})]}),d(ee,{children:[s&&e(E,{message:s}),e("label",{htmlFor:"terminos",children:e(c,{color:"#009966",size:"md",m:"1em 0",children:"Terminos y condiciones."})}),e(te,{children:n==null?void 0:n.data})]})]})}const Z=f.div`
  width: 100%;
`,ee=f.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,te=f.p`
  color: #666666;
  text-align: left;
`;function re(t){const{url:o,queryKey:r}=t,{register:s,handleSubmit:a,formState:{errors:n}}=M();let[m,u]=l.exports.useState("");const{data:i,isLoading:ie,isError:ae}=v(r,()=>w(o)),[T,O]=l.exports.useState("");l.exports.useState(""),i==null||i.result;const y=i==null?void 0:i.message;l.exports.useEffect(()=>{u(y)},[y]),l.exports.useEffect(()=>{O(i==null?void 0:i.data)});const p=U(h=>X(o,h));return e(b,{children:d(oe,{children:[d("form",{onSubmit:a(async h=>{console.log(h)}),children:[e(S,{p:"1em",children:d(z,{children:[e("label",{htmlFor:"terminos",children:e(c,{color:"#009966",size:"md",m:"1em 0",children:"Editar condiciones."})}),e(J,{defaultValue:T,placeholder:"Terminos y condiciones",minWidth:"320px"}),e(C,{buttonstate:p==null?void 0:p.isLoading})]})}),n.condiciones&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(S,{children:m&&e(E,{message:m})})]})})}const oe=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,se=[{option:"a\xF1adir",comp:e(re,{url:"condiciones",queryKey:"terms-to-change"})},{option:"mostrar",comp:e(Y,{url:"condiciones",queryKey:"fullterms"})},{option:"asociado",comp:e(c,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(c,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(c,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(c,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado habilitado",comp:e(c,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"por nombre",comp:e(c,{size:"md",children:"NO ESTA DISPONIBLE!"})}];function pe(){const t=localStorage.getItem("jwt");return l.exports.useEffect(()=>{t&&(D.defaults.headers.common.jwt=t)},[]),e(b,{children:d(ne,{children:[e(k,{linear:B.green,color:"#ffffff"}),e(q,{children:e(R,{name:"Terminos y...",children:e(K,{form:se})})})]})})}const ne=f.div`
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
`;export{pe as default};

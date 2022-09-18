import{h as j,y as I,z as N,a7 as L,r as c,d as P,c as A,s as f,R as F,a as d,j as e,G as _,J as l,F as b,K as S,M as z}from"./index.0150df0d.js";import{t as k}from"./store.589a1c54.js";import{T as B}from"./Toast.d11967c9.js";import{u as v,S as w,b as C,a as q,D,C as R,F as K}from"./Card.1ca1c1fe.js";import{c as G,a as H,u as M,b as U}from"./index.esm.7b029979.js";function g(){return g=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},g.apply(this,arguments)}function V(t,o){if(t==null)return{};var r={},s=Object.keys(t),i,n;for(n=0;n<s.length;n++)i=s[n],!(o.indexOf(i)>=0)&&(r[i]=t[i]);return r}var W=["className","rows"],$=["h","minH","height","minHeight"],J=j(function(t,o){var r=I("Textarea",t),s=N(t),i=s.className,n=s.rows,m=V(s,W),u=G(m),a=n?L(r,$):r;return c.exports.createElement(P.textarea,g({ref:o,rows:n},u,{className:A("chakra-textarea",i),__css:a}))});const Q="http://localhost:5000",x=H.create({baseURL:Q,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function E(t){try{return(await x.get(t)).data}catch(o){return o}}async function X(t,o){try{const r=await x.post(t,o),{data:s}=r;return s}catch(r){return r==null?void 0:r.message}}function Y(t){const{url:o,queryKey:r}=t;c.exports.useState(()=>localStorage.getItem("jwt"));const[s,i]=c.exports.useState(""),{data:n,isLoading:m,isError:u}=v(r,()=>E(o)),a=n==null?void 0:n.message;return F.useEffect(()=>{a&&i(a)},[a]),d(Z,{children:[u&&e("div",{children:"An error ocurred..."}),m&&d("div",{children:[e(_,{size:"sm",color:"red"}),e(l,{color:"#444444",children:"Loading..."})]}),d(ee,{children:[s&&e(w,{message:s}),e("label",{htmlFor:"terminos",children:e(l,{color:"#009966",size:"md",m:"1em 0",children:"Terminos y condiciones."})}),e(te,{children:n==null?void 0:n.data})]})]})}const Z=f.div`
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
`;function re(t){const{url:o,queryKey:r}=t,{register:s,handleSubmit:i,formState:{errors:n}}=M();let[m,u]=c.exports.useState("");const{data:a,isLoading:ae,isError:ie}=v(r,()=>E(o)),[T,O]=c.exports.useState("");c.exports.useState(""),a==null||a.result;const y=a==null?void 0:a.message;c.exports.useEffect(()=>{u(y)},[y]),c.exports.useEffect(()=>{O(a==null?void 0:a.data)});const p=U(h=>X(o,h));return e(b,{children:d(oe,{children:[d("form",{onSubmit:i(async h=>{console.log(h)}),children:[e(S,{p:"1em",children:d(z,{children:[e("label",{htmlFor:"terminos",children:e(l,{color:"#009966",size:"md",m:"1em 0",children:"Editar condiciones."})}),e(J,{defaultValue:T,placeholder:"Terminos y condiciones",minWidth:"320px"}),e(C,{buttonstate:p==null?void 0:p.isLoading})]})}),n.condiciones&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(S,{children:m&&e(w,{message:m})})]})})}const oe=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,se=[{option:"a\xF1adir",comp:e(re,{url:"condiciones",queryKey:"terms-to-change"})},{option:"mostrar",comp:e(Y,{url:"condiciones",queryKey:"fullterms"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado habilitado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})}];function pe(){const t=localStorage.getItem("jwt");return c.exports.useEffect(()=>{t&&(q.defaults.headers.common.jwt=t)},[]),e(b,{children:d(ne,{children:[e(B,{linear:k.green,color:"#ffffff"}),e(D,{children:e(R,{name:"Terminos y...",children:e(K,{form:se})})})]})})}const ne=f.div`
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

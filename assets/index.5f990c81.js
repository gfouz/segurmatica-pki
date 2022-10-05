import{h as N,y as L,z as j,W as P,r as c,d as A,c as _,s as f,R as C,a as d,j as e,G as B,a1 as l,F as b,a2 as S,a3 as F}from"./index.84145a61.js";import{t as k}from"./constants.c1eecf01.js";import{C as z}from"./Toast.399d4852.js";import{S as D,D as q}from"./SubmitButton.d37232a3.js";import{C as R,F as G}from"./Card.4f06ee74.js";import{u as v,S as E}from"./StatusHandler.4fa71a43.js";import{a as H,S as w,b as K}from"./StyledLabel.97b52d23.js";import{b as W,u as U,a as $}from"./index.esm.d64a2720.js";import"./store.6f1159d1.js";function g(){return g=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},g.apply(this,arguments)}function M(t,o){if(t==null)return{};var r={},s=Object.keys(t),i,n;for(n=0;n<s.length;n++)i=s[n],!(o.indexOf(i)>=0)&&(r[i]=t[i]);return r}var Q=["className","rows"],V=["h","minH","height","minHeight"],J=N(function(t,o){var r=L("Textarea",t),s=j(t),i=s.className,n=s.rows,m=M(s,Q),u=W(m),a=n?P(r,V):r;return c.exports.createElement(A.textarea,g({ref:o,rows:n},u,{className:_("chakra-textarea",i),__css:a}))});const X="http://localhost:5000",x=H.create({baseURL:X,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function T(t){try{return(await x.get(t)).data}catch(o){return o}}async function Y(t,o){try{const r=await x.post(t,o),{data:s}=r;return s}catch(r){return r==null?void 0:r.message}}function Z(t){const{url:o,queryKey:r}=t;c.exports.useState(()=>localStorage.getItem("jwt"));const[s,i]=c.exports.useState(""),{data:n,isLoading:m,isError:u}=v(r,()=>T(o)),a=n==null?void 0:n.message;return C.useEffect(()=>{a&&i(a)},[a]),d(ee,{children:[u&&e("div",{children:"An error ocurred..."}),m&&d("div",{children:[e(B,{size:"sm",color:"red"}),e(l,{color:"#444444",children:"Loading..."})]}),d(te,{children:[s&&e(E,{message:s}),e(w,{color:"#009966",children:"Terminos y condiciones."}),e(re,{children:n==null?void 0:n.data})]})]})}const ee=f.div`
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
`;function oe(t){const{url:o,queryKey:r}=t,{register:s,handleSubmit:i,formState:{errors:n}}=U();let[m,u]=c.exports.useState("");const{data:a,isLoading:ie,isError:ce}=v(r,()=>T(o)),[O,I]=c.exports.useState("");c.exports.useState(""),a==null||a.result;const y=a==null?void 0:a.message;c.exports.useEffect(()=>{u(y)},[y]),c.exports.useEffect(()=>{I(a==null?void 0:a.data)});const p=$(h=>Y(o,h));return e(b,{children:d(se,{children:[d("form",{onSubmit:i(async h=>{console.log(h)}),children:[e(S,{p:"1em",children:d(F,{children:[e(w,{color:"#009966",m:"1em 0",center:!0,children:"Editar condiciones."}),e(J,{defaultValue:O,placeholder:"Terminos y condiciones",minWidth:"320px"}),e(D,{buttonstate:p==null?void 0:p.isLoading})]})}),n.condiciones&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(S,{children:m&&e(E,{message:m})})]})})}const se=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ne=[{option:"a\xF1adir",comp:e(oe,{url:"condiciones",queryKey:"terms-to-change"})},{option:"mostrar",comp:e(Z,{url:"condiciones",queryKey:"fullterms"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"asociado habilitado",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})},{option:"por nombre",comp:e(l,{size:"md",children:"NO ESTA DISPONIBLE!"})}];function Se(){const t=localStorage.getItem("jwt");return c.exports.useEffect(()=>{t&&(K.defaults.headers.common.jwt=t)},[]),e(b,{children:d(ae,{children:[e(z,{linear:k.green,color:"#ffffff"}),e(q,{children:e(R,{name:"Terminos y...",children:e(G,{form:ne})})})]})})}const ae=f.div`
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
`;export{Se as default};

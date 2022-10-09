import{h as _,y as F,z as C,W as k,r as c,d as H,c as P,s as u,R,a as l,j as o,G as q,a1 as A,F as y,H as G,a2 as K}from"./index.b7cccbb5.js";import{t as O}from"./constants.c1eecf01.js";import{C as z}from"./Toast.1bbf2185.js";import{S as I,D as M}from"./SubmitButton.af6348b6.js";import{C as N,F as B}from"./Card.79b886ab.js";import{u as v,S}from"./StatusHandler.9d0da5e5.js";import{a as W,S as w,b as D}from"./StyledLabel.46abfa46.js";import{b as Q,u as U,a as $}from"./index.esm.5c5e9822.js";import"./store.bebd0824.js";function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},h.apply(this,arguments)}function V(e,r){if(e==null)return{};var t={},s=Object.keys(e),i,n;for(n=0;n<s.length;n++)i=s[n],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var J=["className","rows"],X=["h","minH","height","minHeight"],Y=_(function(e,r){var t=F("Textarea",e),s=C(e),i=s.className,n=s.rows,m=V(s,J),d=Q(m),a=n?k(t,X):t;return c.exports.createElement(H.textarea,h({ref:r,rows:n},d,{className:P("chakra-textarea",i),__css:a}))});const Z="http://localhost:5000",x=W.create({baseURL:Z,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function b(e){try{return(await x.get(e)).data}catch(r){return r}}async function ee(e,r){try{const t=await x.post(e,r),{data:s}=t;return s}catch(t){return t==null?void 0:t.message}}function te(e){const{url:r,queryKey:t}=e;c.exports.useState(()=>localStorage.getItem("jwt"));const[s,i]=c.exports.useState(""),{data:n,isLoading:m,isError:d}=v(t,()=>b(r)),a=n==null?void 0:n.message;return R.useEffect(()=>{a&&i(a)},[a]),l(re,{children:[d&&o("div",{children:"An error ocurred..."}),m&&l("div",{children:[o(q,{size:"sm",color:"red"}),o(A,{color:"#444444",children:"Loading..."})]}),l(se,{children:[o(w,{color:"#009966",m:"2em 0",children:"Terminos y condiciones."}),o(oe,{children:n==null?void 0:n.data}),s&&o(S,{message:s})]})]})}const re=u.div`
  width: 100%;
`,se=u.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,oe=u.p`
  color: #666666;
  text-align: left;
`,ne=e=>{const[r,t]=c.exports.useState(!1);return c.exports.useEffect(()=>{const s=window.matchMedia(e);s.matches!==r&&t(s.matches);const i=()=>t(s.matches);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[r,e]),r};function ae(e){const{url:r,queryKey:t}=e,{register:s,handleSubmit:i,formState:{errors:n}}=U();let[m,d]=c.exports.useState("");const{data:a,isLoading:me,isError:de}=v(t,()=>b(r)),[j,T]=c.exports.useState("");c.exports.useState(""),a==null||a.result;const g=a==null?void 0:a.message;c.exports.useEffect(()=>{d(g)},[g]),c.exports.useEffect(()=>{T(a==null?void 0:a.data)});const f=$(p=>ee(r,p)),E=async p=>{console.log(p)},L=ne("(min-width: 600px)");return o(y,{children:l(ie,{children:[l("form",{onSubmit:i(E),children:[l(G,{direction:"column",children:[o(w,{upper:!0,center:!0,color:"#009966",m:"1em 0",children:"Editar condiciones."}),o(Y,{width:L?"595px":"320px",minWidth:"320px",minHeight:"400px",defaultValue:j,placeholder:"Terminos y condiciones"}),o(I,{buttonstate:f==null?void 0:f.isLoading})]}),n.condiciones&&o("span",{style:{color:"red"},children:"Field is required"})]}),o(K,{children:m&&o(S,{message:m})})]})})}const ie=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ce=[{option:"a\xF1adir",comp:o(ae,{url:"condiciones",queryKey:"terms-to-change"})},{option:"mostrar",comp:o(te,{url:"condiciones",queryKey:"fullterms"})}];function we(){const e=localStorage.getItem("jwt");return c.exports.useEffect(()=>{e&&(D.defaults.headers.common.jwt=e)},[]),o(y,{children:l(le,{children:[o(z,{linear:O.green,color:"#ffffff"}),o(M,{children:o(N,{name:"Terminos y...",children:o(B,{form:ce})})})]})})}const le=u.div`
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

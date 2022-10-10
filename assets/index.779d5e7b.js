var k=Object.defineProperty;var v=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(e,r,t)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))H.call(r,t)&&w(e,t,r[t]);if(v)for(var t of v(r))M.call(r,t)&&w(e,t,r[t]);return e};import{h as P,y as R,z as q,W as A,r as i,d as B,c as G,s as u,R as K,a as l,j as s,G as O,a1 as I,F as b,H as N,a2 as D}from"./index.a965a08b.js";import{t as W}from"./constants.c1eecf01.js";import{C as Q}from"./Toast.c7c7e538.js";import{S as U,D as V}from"./SubmitButton.ff1e26b2.js";import{C as $,F as J}from"./Card.c6800e88.js";import{u as E,S as j}from"./StatusHandler.f4e4ee84.js";import{a as X,S as L,b as Y}from"./StyledLabel.73e7a9c0.js";import{b as Z,u as ee,a as te}from"./index.esm.0200c310.js";import"./store.df117b59.js";function x(){return x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},x.apply(this,arguments)}function re(e,r){if(e==null)return{};var t={},o=Object.keys(e),c,n;for(n=0;n<o.length;n++)c=o[n],!(r.indexOf(c)>=0)&&(t[c]=e[c]);return t}var se=["className","rows"],oe=["h","minH","height","minHeight"],ne=P(function(e,r){var t=R("Textarea",e),o=q(e),c=o.className,n=o.rows,m=re(o,se),d=Z(m),a=n?A(t,oe):t;return i.exports.createElement(B.textarea,x({ref:r,rows:n},d,{className:G("chakra-textarea",c),__css:a}))});const ae="http://localhost:5000",g=X.create({baseURL:ae,withCredentials:!1});g.defaults.headers.common["Content-Type"]="application/json";async function T(e){try{return(await g.get(e)).data}catch(r){return r}}async function ie(e,r){try{const t=await g.post(e,r),{data:o}=t;return o}catch(t){return t==null?void 0:t.message}}function ce(e){const{url:r,queryKey:t}=e;i.exports.useState(()=>localStorage.getItem("jwt"));const[o,c]=i.exports.useState(""),{data:n,isLoading:m,isError:d}=E(t,()=>T(r)),a=n==null?void 0:n.message;return K.useEffect(()=>{a&&c(a)},[a]),l(le,{children:[d&&s("div",{children:"An error ocurred..."}),m&&l("div",{children:[s(O,{size:"sm",color:"red"}),s(I,{color:"#444444",children:"Loading..."})]}),l(me,{children:[s(L,{color:"#009966",m:"2em 0",children:"Terminos y condiciones."}),s(de,{children:n==null?void 0:n.data}),o&&s(j,{message:o})]})]})}const le=u.div`
  width: 100%;
`,me=u.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,de=u.p`
  color: #666666;
  text-align: left;
`,ue=e=>{const[r,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{const o=window.matchMedia(e);o.matches!==r&&t(o.matches);const c=()=>t(o.matches);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[r,e]),r};function fe(e){const{url:r,queryKey:t}=e,{register:o,handleSubmit:c,formState:{errors:n}}=ee();let[m,d]=i.exports.useState("");const{data:a,isLoading:ye,isError:ve}=E(t,()=>T(r)),[_,z]=i.exports.useState("");i.exports.useState(""),a==null||a.result;const y=a==null?void 0:a.message;i.exports.useEffect(()=>{d(y)},[y]),i.exports.useEffect(()=>{z(a==null?void 0:a.data)});const f=te(h=>ie(r,h)),F=async h=>{console.log(h)},C=ue("(min-width: 600px)");return s(b,{children:l(he,{children:[l("form",{onSubmit:c(F),children:[l(N,{direction:"column",children:[s(L,{upper:!0,center:!0,color:"#009966",m:"1em 0",children:"Editar condiciones."}),s(ne,{width:C?"595px":"320px",minWidth:"320px",minHeight:"400px",defaultValue:_,placeholder:"Terminos y condiciones"}),s(U,{buttonstate:f==null?void 0:f.isLoading})]}),n.condiciones&&s("span",{style:{color:"red"},children:"Field is required"})]}),s(D,{children:m&&s(j,{message:m})})]})})}const he=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;function pe(e){return i.exports.createElement("svg",p({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),i.exports.createElement("path",{fill:e.color,d:"M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 00-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21.92 18.67l-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 00-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 00-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 000 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 11.001-2.701 1.35 1.35 0 01-.001 2.701z"}))}function xe(e){return i.exports.createElement("svg",p({viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto"},e),i.exports.createElement("path",{fill:e.color,d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}))}const S=[{option:"a\xF1adir",icon:s(pe,{}),comp:s(fe,{url:"condiciones",queryKey:"terms-to-change"})},{option:"mostrar",icon:s(xe,{}),comp:s(ce,{url:"condiciones",queryKey:"fullterms"})}];function Ce(){const e=localStorage.getItem("jwt");return i.exports.useEffect(()=>{e&&(Y.defaults.headers.common.jwt=e)},[]),s(b,{children:l(ge,{children:[s(Q,{linear:W.green,color:"#ffffff"}),s(V,{children:s($,{name:"Terminos y...",options:S,children:s(J,{options:S})})})]})})}const ge=u.div`
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
`;export{Ce as default};

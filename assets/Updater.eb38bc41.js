var A=Object.defineProperty,B=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var h=(s,e,t)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&h(s,t,e[t]);if(b)for(var t of b(e))L.call(e,t)&&h(s,t,e[t]);return s},f=(s,e)=>B(s,H(e));import{s as w,r as S,j as a,F as z,a as m,J as c,I as C,K as T}from"./index.197da568.js";import{u as g,b as U,s as D}from"./store.37b8cf4e.js";import{u as E,b as J,F as K}from"./index.esm.b0a48d8a.js";import{p as M,c as O,S as R}from"./Card.94feb51f.js";import{T as V}from"./TextInput.21524544.js";import{S as v}from"./Getter.b8821b94.js";function $(s){var u;const e="se requiere nombres compuestos sin n\xFAmeros",t=g(U),x=g(D),{stack:r}=t,{url:F,msg:N}=s,[l,y]=S.exports.useState(""),{register:d,handleSubmit:j,formState:{errors:k}}=E(),o=J(i=>M(i,F,r.id)),q=async i=>{o.mutateAsync(i)},n=(u=o==null?void 0:o.data)==null?void 0:u.message;return S.exports.useEffect(()=>{n&&y(n),n==="updated"&&x.setOption("mostrar")},[n]),a(z,{children:m("form",{onSubmit:j(q),children:[a(c,{p:"2em",children:a(C,{size:"md",color:"#009966",children:r.name})}),a(c,{p:"1em",children:m(T,{children:[a(G,{children:"Actualice nombre"}),a(V,{info:e,required:!0,label:"name",errors:k,register:d,defaultValue:r.name})]})}),m(c,{children:[a(K,{htmlFor:"enabled",m:"0 0 0 2em",color:"#333333",children:"Deshabilitar o habilitar"}),a(v,f(p({},d("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(r.enabled)}))]}),a(O,{buttonstate:o==null?void 0:o.isLoading}),l&&a(R,{message:l})]})})}const G=w.h4`
  color: #888888;
  font-weight: bolder;
`;export{$ as U};

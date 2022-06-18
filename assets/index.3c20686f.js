var z=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(r,o,i)=>o in r?z(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,t=(r,o)=>{for(var i in o||(o={}))H.call(o,i)&&b(r,i,o[i]);if(y)for(var i of y(o))L.call(o,i)&&b(r,i,o[i]);return r},s=(r,o)=>A(r,B(o));import{s as I,r as x,j as e,F as C,a as n,J as w,H as T,T as O,N as p,O as g,K as E,M as S}from"./index.27895db8.js";import{B as _,L as G}from"./Layout.c4e18661.js";import{a as P,I as v,C as V}from"./index.esm.939aa73c.js";import{R as Y,a as F}from"./chakra-ui-radio.esm.60cccee0.js";const J=I.div`
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,N={size:"sm",type:"number",variant:"flushed"},K={size:"sm",type:"text",variant:"flushed"};function c(r,o,i){return parseInt(r.toString().substring(o,i))}let m=new Date().getFullYear(),R=new Date().getMonth()+1;m=c(m,2,4);R=c(R,2,4);const U={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:r=>m>c(r,0,2)&&m-c(r,0,2)>18||m<c(r,0,2)&&c(r,0,2)<99,monthMin:r=>parseInt(r.substring(2,4))>=1,monthMax:r=>parseInt(r.substring(2,4))<=12,dayMin:r=>parseInt(r.substring(4,6))>=1,dayMax:r=>parseInt(r.substring(4,6))<=31}};function $(){const[r,o]=x.exports.useState("#666666"),[i,f]=x.exports.useState(""),[h,j]=x.exports.useState("renewal"),{register:u,handleSubmit:M,formState:{errors:l}}=P(),k=d=>console.log(d);function D(d){let{value:q}=d.target,a=q.length;a&&a===11?o("#66CC00"):f("Validos 11 n\xFAmeros"),a&&a>11?o("#ff0000"):f("Complete 11 numeros"),a&&a<11?o("#CCCCCC"):f("N\xFAmero excedido de 11")}return e(C,{children:e(J,{children:n("form",{onSubmit:M(k),children:[e(w,{w:"100%",p:"1.5em",children:e(T,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),e(w,{w:"100%",p:"0.3em 0",children:e(O,{color:"#666666",children:"Tipo de solicitud:"})}),e(Y,{onChange:j,value:h,w:"100%",children:e(p,{p:"0 0.7em",w:"100%",children:n(g,{justifyContent:"space-evenly",children:[e(F,{m:"0 1em",value:"renewal",colorScheme:"red",isChecked:h=="renewal",children:"Renovaci\xF3n"}),e(F,{m:"0 1em",value:"revocation",colorScheme:"red",isChecked:h=="natural",children:"Revocaci\xF3n"})]})})}),n(E,{spacing:2,p:"0.7em",children:[n(S,{children:[e("label",{style:{color:`${r}`},children:e("strong",{children:"Nro de ID"})}),e(v,t(s(t({},N),{_placeholder:{color:l.id?"red.400":"#666666"},placeholder:l.id?"Valido 11 d\xEDgitos":" "}),u("id",s(t({},U),{onChange:d=>D(d)}))))]}),n(S,{children:[e("label",{children:"Nro de Serie o DN"}),e(v,t(s(t({},N),{_placeholder:{color:l.dn?"red.400":"gray.500"},placeholder:l.dn?"Olvido su DN!":""}),u("dn",{required:!0})))]})]}),h=="revocation"&&e(C,{children:e(p,{p:"2em 0.7em",w:"100%",children:e(g,{justifyContent:"space-evenly",children:e(v,t(s(t({m:"0 0.7em"},K),{_placeholder:{color:l.motive?"red.400":"gray.500"},placeholder:l.motive?"Motivo de Revocaci\xF3n!":"Escriba Motivo de Revocaci\xF3n"}),u("motive",{required:!0})))})})}),e(p,{p:"0 1em",w:"100%",children:e(g,{justifyContent:"flex-start",children:e(V,s(t({m:"0 0.7em",colorScheme:"red"},u("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),e(p,{p:"2em 0.7em",w:"100%",children:n(g,{justifyContent:"space-evenly",children:[e(_,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(_,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function oe(){return e(G,{children:e(Q,{children:n("section",{className:"login",children:[n("div",{className:"login__divider",children:[e("div",{className:"login__logo"}),e("img",{className:"login__image",src:"./images/forms.png"})]}),e("div",{className:"login__divider",children:e($,{})})]})})})}const Q=I.div`
  width: 100%;
  background-color: #f8f8f8;
  .login {
    position: relative;
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .login__divider {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .login__logo {
    width: 300px;
    border-radius: 10px;
    background-color:#00000099;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: bolder;
    font-family: calibri;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .login__image {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;export{oe as default};

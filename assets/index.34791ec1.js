var z=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(r,o,i)=>o in r?z(r,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[o]=i,n=(r,o)=>{for(var i in o||(o={}))H.call(o,i)&&b(r,i,o[i]);if(y)for(var i of y(o))L.call(o,i)&&b(r,i,o[i]);return r},s=(r,o)=>A(r,B(o));import{s as N,r as x,j as e,F as C,a as t,J as w,H as T,T as O,N as g,O as p,K as E,M as S}from"./index.848cf5ec.js";import{B as F,L as G}from"./Layout.d7a9fc71.js";import{a as P,I as v,C as V}from"./index.esm.2fd493cd.js";import{R as Y,a as _}from"./chakra-ui-radio.esm.2ce6bef4.js";const J=N.div`
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,R={size:"sm",type:"number",variant:"flushed"},K={size:"sm",type:"text",variant:"flushed"};function c(r,o,i){return parseInt(r.toString().substring(o,i))}let m=new Date().getFullYear(),I=new Date().getMonth()+1;m=c(m,2,4);I=c(I,2,4);const U={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:r=>m>c(r,0,2)&&m-c(r,0,2)>18||m<c(r,0,2)&&c(r,0,2)<99,monthMin:r=>parseInt(r.substring(2,4))>=1,monthMax:r=>parseInt(r.substring(2,4))<=12,dayMin:r=>parseInt(r.substring(4,6))>=1,dayMax:r=>parseInt(r.substring(4,6))<=31}};function $(){const[r,o]=x.exports.useState("#666666"),[i,f]=x.exports.useState(""),[h,k]=x.exports.useState("renewal"),{register:u,handleSubmit:M,formState:{errors:l}}=P(),j=d=>console.log(d);function D(d){let{value:q}=d.target,a=q.length;a&&a===11?o("#66CC00"):f("Validos 11 n\xFAmeros"),a&&a>11?o("#ff0000"):f("Complete 11 numeros"),a&&a<11?o("#CCCCCC"):f("N\xFAmero excedido de 11")}return e(C,{children:e(J,{children:t("form",{onSubmit:M(j),children:[e(w,{w:"100%",p:"1.5em",children:e(T,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),e(w,{w:"100%",p:"0.3em 0",children:e(O,{color:"#666666",children:"Tipo de solicitud:"})}),e(Y,{onChange:k,value:h,w:"100%",children:e(g,{p:"0 0.7em",w:"100%",children:t(p,{justifyContent:"space-evenly",children:[e(_,{m:"0 1em",value:"renewal",colorScheme:"red",isChecked:h=="renewal",children:"Renovaci\xF3n"}),e(_,{m:"0 1em",value:"revocation",colorScheme:"red",isChecked:h=="natural",children:"Revocaci\xF3n"})]})})}),t(E,{spacing:2,p:"0.7em",children:[t(S,{children:[e("label",{style:{color:`${r}`},children:e("strong",{children:"Nro de ID"})}),e(v,n(s(n({},R),{_placeholder:{color:l.id?"red.400":"#666666"},placeholder:l.id?"Valido 11 d\xEDgitos":" "}),u("id",s(n({},U),{onChange:d=>D(d)}))))]}),t(S,{children:[e("label",{children:"Nro de Serie o DN"}),e(v,n(s(n({},R),{_placeholder:{color:l.dn?"red.400":"gray.500"},placeholder:l.dn?"Olvido su DN!":""}),u("dn",{required:!0})))]})]}),h=="revocation"&&e(C,{children:e(g,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(v,n(s(n({m:"0 0.7em"},K),{_placeholder:{color:l.motive?"red.400":"gray.500"},placeholder:l.motive?"Motivo de Revocaci\xF3n!":"Escriba Motivo de Revocaci\xF3n"}),u("motive",{required:!0})))})})}),e(g,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(V,s(n({m:"0 0.7em",colorScheme:"red"},u("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),e(g,{p:"2em 0.7em",w:"100%",children:t(p,{justifyContent:"space-evenly",children:[e(F,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(F,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function oe(){return e(G,{children:e(Q,{children:t("section",{className:"login",children:[e("div",{className:"login__divider bg-grey",children:e("img",{className:"login__image",src:"./images/forms.png"})}),e("div",{className:"login__divider",children:e($,{})})]})})})}const Q=N.div`
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
    align-items: center;
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
  
  }
 .bg-grey  {
  background-color: #3a3839;
 }
`;export{oe as default};

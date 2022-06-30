var z=Object.defineProperty,A=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var b=(r,i,t)=>i in r?z(r,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[i]=t,o=(r,i)=>{for(var t in i||(i={}))H.call(i,t)&&b(r,t,i[t]);if(y)for(var t of y(i))L.call(i,t)&&b(r,t,i[t]);return r},s=(r,i)=>A(r,B(i));import{s as k,r as x,j as e,F as C,a as n,E as w,H as E,T as G,J as g,K as p,G as T,I as S}from"./index.9cd25fd6.js";import{B as _,L as V}from"./Layout.ed67b70c.js";import{u as Y,I as v,C as J}from"./index.esm.411ed49e.js";import{R as K,a as F}from"./chakra-ui-radio.esm.77d44b16.js";const O=k.div`
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,R={size:"sm",type:"number",variant:"flushed"},U={size:"sm",type:"text",variant:"flushed"};function c(r,i,t){return parseInt(r.toString().substring(i,t))}let m=new Date().getFullYear(),I=new Date().getMonth()+1;m=c(m,2,4);I=c(I,2,4);const $={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:r=>m>c(r,0,2)&&m-c(r,0,2)>18||m<c(r,0,2)&&c(r,0,2)<99,monthMin:r=>parseInt(r.substring(2,4))>=1,monthMax:r=>parseInt(r.substring(2,4))<=12,dayMin:r=>parseInt(r.substring(4,6))>=1,dayMax:r=>parseInt(r.substring(4,6))<=31}};function P(){const[r,i]=x.exports.useState("#666666"),[t,f]=x.exports.useState(""),[u,N]=x.exports.useState("renewal"),{register:h,handleSubmit:j,formState:{errors:l}}=Y(),M=d=>console.log(d);function D(d){let{value:q}=d.target,a=q.length;a&&a===11?i("#66CC00"):f("Validos 11 n\xFAmeros"),a&&a>11?i("#ff0000"):f("Complete 11 numeros"),a&&a<11?i("#CCCCCC"):f("N\xFAmero excedido de 11")}return e(C,{children:e(O,{children:n("form",{onSubmit:j(M),children:[e(w,{w:"100%",p:"1.5em",children:e(E,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud:"})}),e(w,{w:"100%",p:"0.3em 0",children:e(G,{color:"#666666",children:"Tipo de solicitud:"})}),e(K,{onChange:N,value:u,w:"100%",children:e(g,{p:"0 0.7em",w:"100%",children:n(p,{justifyContent:"space-evenly",children:[e(F,{m:"0 1em",value:"renewal",colorScheme:"red",isChecked:u=="renewal",children:"Renovaci\xF3n"}),e(F,{m:"0 1em",value:"revocation",colorScheme:"red",isChecked:u=="natural",children:"Revocaci\xF3n"})]})})}),n(T,{spacing:2,p:"0.7em",children:[n(S,{children:[e("label",{style:{color:`${r}`},children:e("strong",{children:"Nro de ID"})}),e(v,o(s(o({},R),{_placeholder:{color:l.id?"red.400":"#666666"},placeholder:l.id?"Valido 11 d\xEDgitos":" "}),h("id",s(o({},$),{onChange:d=>D(d)}))))]}),n(S,{children:[e("label",{children:"Nro de Serie o DN"}),e(v,o(s(o({},R),{_placeholder:{color:l.dn?"red.400":"gray.500"},placeholder:l.dn?"Olvido su DN!":""}),h("dn",{required:!0})))]})]}),u=="revocation"&&e(C,{children:e(g,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(v,o(s(o({m:"0 0.7em"},U),{_placeholder:{color:l.motive?"red.400":"gray.500"},placeholder:l.motive?"Motivo de Revocaci\xF3n!":"Escriba Motivo de Revocaci\xF3n"}),h("motive",{required:!0})))})})}),e(g,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(J,s(o({m:"0 0.7em",colorScheme:"red"},h("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})}),e(g,{p:"2em 0.7em",w:"100%",children:n(p,{justifyContent:"space-evenly",children:[e(_,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(_,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function ie(){return e(V,{children:e(Q,{children:n("section",{className:"login",children:[e("div",{className:"login__divider bg-grey",children:e("img",{className:"login__image",src:"./images/contact.png"})}),e("div",{className:"login__divider",children:e(P,{})})]})})})}const Q=k.div`
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
`;export{ie as default};

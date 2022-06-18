var g=Object.defineProperty,x=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(t,n,i)=>n in t?g(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,r=(t,n)=>{for(var i in n||(n={}))b.call(n,i)&&m(t,i,n[i]);if(d)for(var i of d(n))C.call(n,i)&&m(t,i,n[i]);return t},o=(t,n)=>x(t,y(n));import{s as u,j as e,F as v,a as l,J as w,H as S,K as a,M as c,N as h,O as p}from"./index.27895db8.js";import{B as _,L as j}from"./Layout.c4e18661.js";import{a as N,I as s,C as q}from"./index.esm.939aa73c.js";const A={headerbg:"#385898",footerbg:"#385898"};function F(){const{register:t,handleSubmit:n,formState:{errors:i}}=N();return e(v,{children:e(k,{children:l("form",{onSubmit:n(f=>console.log(f)),children:[e(w,{w:"100%",p:"1.5em",children:e(S,{as:"h3",size:"lg",color:"#385898",children:"CONTACTO"})}),e(a,{spacing:2,p:"0.7em",children:l(c,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Nombre"})}),e(s,r({type:"email",variant:"outline"},t("name",{required:!0})))]})}),e(a,{spacing:2,p:"0.7em",children:l(c,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Email"})}),e(s,r({type:"email",variant:"outline"},t("email",{required:!0})))]})}),e(a,{spacing:2,p:"0.7em",children:l(c,{textAlign:"left",children:[e("label",{style:{color:"#888888"},children:e("strong",{children:"Message"})}),e(s,r({type:"text",variant:"outline"},t("message",{required:!0})))]})}),e(a,{spacing:2,p:"0.7em",children:e(c,{children:e(h,{p:"0 1em",w:"100%",children:e(p,{justifyContent:"flex-start",children:e(q,o(r({m:"0 0.7em",colorScheme:"red"},t("policy",{required:!0})),{children:"Acepto los terminos y condiciones."}))})})})}),e(h,{p:"2em 0.7em",w:"100%",children:e(p,{justifyContent:"space-evenly",children:e(_,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Enviar"})})})]})})})}const k=u.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;
`;function L(){return e(j,o(r({},A),{children:e(B,{children:l("section",{className:"contact",children:[l("article",{className:"contact__divider",children:[e("h2",{className:"contact__title",children:" Contacte nos aqu\xED!"}),e("img",{src:"./images/habana.jpg"})]}),e("article",{className:"contact__divider",children:e(F,{})})]})})}))}const B=u.div`
   width: 100%;
   height: 100%;
   .contact {
    display: flex;
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
    }
    }
   .contact__title {
    color: #222222;
    position: absolute;
    top: 40%;
    left:50%;
    white-space: nowrap;
    font-size: 1.6em;
    font-weight: bolder;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #ffffff;
    transform: translate(-50%, -50%);
   } 
   .contact__divider {
    display: flex;
    flex-direction: column;
  
    align-items: center;
    text-align: center;
    width: 100%;
    position:relative;
   }
`;export{L as default};

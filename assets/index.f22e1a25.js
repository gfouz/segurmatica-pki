var z=Object.defineProperty,B=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var A=(r,t,o)=>t in r?z(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,n=(r,t)=>{for(var o in t||(t={}))P.call(t,o)&&A(r,o,t[o]);if(q)for(var o of q(t))H.call(t,o)&&A(r,o,t[o]);return r},a=(r,t)=>B(r,G(t));import{s as R,r as S,j as e,F as N,a as l,E as T,H as U,T as Y,G as J,I as w,J as c,K as u}from"./index.9cd25fd6.js";import{B as k,L as K}from"./Layout.ed67b70c.js";import{C as y,S as E,O as I}from"./ChakraInput.9f2eaffa.js";import{u as $,I as _,C as Q}from"./index.esm.411ed49e.js";import{R as V,a as L}from"./chakra-ui-radio.esm.77d44b16.js";const W=R.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`;function h(r,t,o){return parseInt(r.toString().substring(t,o))}let p=new Date().getFullYear(),X=new Date().getMonth()+1;p=h(p,2,4);const Z=["PCC","MININT","FAR","MTSS","MINCIN","MEP"],ee=["ETECSA","UNE","DPT","FCBC","UMCC","ITH"],re=["BANDEC","BPA"],m={number:()=>({size:"sm",type:"number",variant:"flushed"}),email:()=>({size:"sm",type:"email",variant:"flushed"}),telephone:()=>({size:"sm",type:"tel",variant:"flushed"}),password:()=>({size:"sm",type:"password",variant:"flushed"}),text:()=>({size:"sm",type:"text",variant:"flushed"})},te={isgrownup:r=>p-h(r,0,2)==18&&X>h(r,2,4)||p>h(r,0,2)&&p-h(r,0,2)>18||p<h(r,0,2)&&h(r,0,2)<99,monthover:r=>parseInt(r.substring(2,4))>=1,monthunder:r=>parseInt(r.substring(2,4))<=12,dayover:r=>parseInt(r.substring(4,6))>=1,dayunder:r=>parseInt(r.substring(4,6))<=31},ne={id:"",tel:"",tomo:"",color:"#000000",cargo:"",folio:"",email:"",warning:"",empresas:"",entidades:"",organismos:"",representante:"",condiciones:!1},b={id:()=>({required:!0,maxLength:12,minLength:8}),tomo:()=>({required:!0,maxLength:12,minLength:8}),folio:()=>({required:!0,maxLength:12,minLength:8}),tel:()=>({required:!0,maxLength:12,minLength:8})},j={green:r=>a(n({},r),{color:"#00FF00"}),red:r=>a(n({},r),{color:"#FF0000"}),grey:r=>a(n({},r),{color:"#CCCCCC"}),black:r=>a(n({},r),{color:"#666666"})};function ie(){const[r,t]=S.exports.useState(ne),[o,x]=S.exports.useState(""),[g,D]=S.exports.useState("juridica"),{register:s,handleSubmit:M,formState:{errors:i}}=$(),O=v=>console.log(v);function f(v){let{value:F}=v.target,C=F.length;t(d=>a(n({},d),{id:F})),C===11?t(d=>j.green(d)):x("warning"),C>11?t(d=>j.red(d)):x("warning"),C<11?t(d=>j.grey(d)):x("warning")}return e(N,{children:e(W,{children:l("form",{onSubmit:M(O),children:[e(T,{w:"100%",p:"1.5em",children:e(U,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),e(T,{w:"100%",p:"0.3em 0",children:e(Y,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),l(J,{spacing:2,p:"0.7em",children:[l(w,{children:[e("label",{style:{color:`${r.color}`},children:e("strong",{children:"ID"})}),e(y,{label:"id",register:s,htmlAttributes:m.number(),idEvt:f,validations:te,requirements:b.id(),placeholder:i.id?"Olvido su ID!":"",_placeholder:{color:i.id?"red.400":"gray.500"}})]}),l(w,{children:[e("label",{children:"Tomo"}),e(y,{label:"tomo",register:s,htmlAttributes:m.number(),idEvt:f,requirements:b.tomo(),placeholder:i.id?"Olvido su Tomo!":"",_placeholder:{color:i.id?"red.400":"gray.500"}})]}),l(w,{children:[e("label",{children:"Folio"}),e(y,{label:"folio",register:s,htmlAttributes:m.number(),idEvt:f,requirements:b.folio(),placeholder:i.id?"Olvido su Folio!":"",_placeholder:{color:i.id?"red.400":"gray.500"}})]})]}),e(c,{p:"2em 0.7em",w:"100%",children:l(u,{justifyContent:"space-evenly",children:[e(_,n(a(n({},m.email),{m:"0 0.7em",_placeholder:{color:i.email?"red.400":"gray.500"},placeholder:i.email?"Email requerido!":"Correo Electr\xF3nico"}),s("email",{required:!0}))),e(y,{label:"tel",register:s,htmlAttributes:m.telephone(),idEvt:f,requirements:b.tel(),placeholder:i.id?"Su t\xE9lefono!":"",_placeholder:{color:i.id?"red.400":"gray.500"}})]})}),e(V,{onChange:D,value:g,w:"100%",children:e(c,{p:"0 0.7em",w:"100%",children:l(u,{justifyContent:"flex-start",children:[e(L,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:g=="juridica",children:"Persona jur\xEDdica"}),e(L,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:g=="natural",children:"Persona Natural"})]})})}),g=="juridica"&&l(N,{children:[e(c,{p:"2em 0.7em",w:"100%",children:l(u,{justifyContent:"space-evenly",children:[e(E,a(n({m:"0 0.7em",placeholder:"Organismos"},s("organismos")),{children:e(I,{data:Z})})),e(E,a(n({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},s("empresas")),{children:e(I,{data:ee})}))]})}),e(c,{p:"2em 0.7em",w:"100%",children:l(u,{justifyContent:"space-evenly",children:[e(_,n(a(n({m:"0 0.7em"},m.text()),{_placeholder:{color:i.cargo?"red.400":"gray.500"},placeholder:i.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),s("cargo",{required:!0}))),e(_,n(a(n({m:"0 0.7em"},m.text()),{_placeholder:{color:i.representante?"red.400":"gray.500"},placeholder:i.representante?"Representante requerido!":"Representante"}),s("representante",{required:!0})))]})})]}),g=="natural"&&e(c,{p:"2em 0.7em",w:"100%",children:e(u,{justifyContent:"space-evenly",children:e(E,a(n({placeholder:"Entidad relacionada"},s("entidades")),{children:e(I,{data:re})}))})}),e(c,{p:"0 1em",w:"100%",children:e(u,{justifyContent:"flex-start",children:e(Q,a(n({m:"0 0.7em",colorScheme:"red"},s("condiciones")),{children:"Acepto los terminos y condiciones."}))})}),e(c,{p:"2em 0.7em",w:"100%",children:l(u,{justifyContent:"space-evenly",children:[e(k,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),e(k,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function me(){return e(K,{children:e(oe,{children:l("section",{className:"login",children:[e("div",{className:"login__divider",children:e("img",{className:"login__image",src:"./images/contact.png"})}),e("div",{className:"login__divider",children:e(ie,{})})]})})})}const oe=R.div`
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
    align-items: center;
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
`;export{me as default};

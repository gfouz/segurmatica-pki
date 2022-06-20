var V=Object.defineProperty,$=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t)=>{for(var n in t||(t={}))Q.call(t,n)&&H(e,n,t[n]);if(k)for(var n of k(t))X.call(t,n)&&H(e,n,t[n]);return e},l=(e,t)=>$(e,J(t));import{f as G,t as Z,o as ee,E as re,d as te,r as s,e as M,h as ne,c as oe,G as ie,j as r,F,I as le,s as L,a as m,J as z,H as ae,T as ce,K as se,M as N,N as f,O as x}from"./index.5c43cfe4.js";import{B as D,L as de}from"./Layout.013e1a9d.js";import{u as he,a as me,I as v,C as ue}from"./index.esm.85b4d3db.js";import{R as pe,a as q}from"./chakra-ui-radio.esm.1cf05ee2.js";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function T(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,h;for(h=0;h<o.length;h++)a=o[h],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var ge=["children","placeholder","className"],fe=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],xe=["children"],ve=G(function(e,t){var n=e.children,o=e.placeholder,a=e.className,h=T(e,ge);return s.exports.createElement(M.select,p({},h,{ref:t,className:oe("chakra-select",a)}),o&&s.exports.createElement("option",{value:""},o),n)}),j=G(function(e,t){var n=Z("Select",e),o=ee(e),a=o.rootProps,h=o.placeholder,d=o.icon,_=o.color,c=o.height,E=o.h,w=o.minH,g=o.minHeight,S=o.iconColor,y=o.iconSize,u=T(o,fe),R=re(u,ie),U=R[0],W=R[1],O=he(W),Y={width:"100%",height:"fit-content",position:"relative",color:_},K=te({paddingEnd:"2rem"},n.field,{_focus:{zIndex:"unset"}});return s.exports.createElement(M.div,p({className:"chakra-select__wrapper",__css:Y},U,a),s.exports.createElement(ve,p({ref:t,height:E!=null?E:c,minH:w!=null?w:g,placeholder:h},O,{__css:K}),e.children),s.exports.createElement(_e,p({"data-disabled":ne(O.disabled)},(S||_)&&{color:S||_},{__css:n.icon},y&&{fontSize:y}),d))}),ye=function(t){return s.exports.createElement("svg",p({viewBox:"0 0 24 24"},t),s.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},Ce=M("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),_e=function(t){var n=t.children,o=n===void 0?s.exports.createElement(ye,null):n,a=T(t,xe),h=s.exports.cloneElement(o,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.exports.createElement(Ce,p({},a,{className:"chakra-select__icon-wrapper"}),s.exports.isValidElement(o)?h:null)};function P({data:e}){return r(F,{children:e?e.map(t=>r("option",{value:t,children:t},le.useId())):r("option",{})})}const Se=L.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,be=["PCC","MININT","FAR","MTSS","MINCIN","MEP"],Ee=["ETECSA","UNE","DPT","FCBC","UMCC","ITH"],we=["BANDEC","BPA"],I={size:"sm",type:"number",variant:"flushed"},Ie={size:"sm",type:"email",variant:"flushed"},A={size:"sm",type:"text",variant:"flushed"};function C(e,t,n){return parseInt(e.toString().substring(t,n))}let b=new Date().getFullYear(),B=new Date().getMonth()+1;b=C(b,2,4);B=C(B,2,4);const Ne={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:e=>b>C(e,0,2)&&b-C(e,0,2)>18||b<C(e,0,2)&&C(e,0,2)<99,monthMin:e=>parseInt(e.substring(2,4))>=1,monthMax:e=>parseInt(e.substring(2,4))<=12,dayMin:e=>parseInt(e.substring(4,6))>=1,dayMax:e=>parseInt(e.substring(4,6))<=31}},je={id:"",tel:"",tomo:"",color:"#000000",cargo:"",folio:"",email:"",warning:"",empresas:"",entidades:"",organismos:"",representante:"",condiciones:!1},Pe=e=>l(i({},e),{color:"#00FF00"}),Fe=e=>l(i({},e),{color:"#FF0000"}),Me=e=>l(i({},e),{color:"#CCCCCC"});function Te(){const[e,t]=s.exports.useState(je),[n,o]=s.exports.useState(""),[a,h]=s.exports.useState("juridica"),{register:d,handleSubmit:_,formState:{errors:c}}=me(),E=g=>console.log(g);function w(g){let{value:S}=g.target,y=S.length;t(u=>l(i({},u),{id:S})),y===11?t(u=>Pe(u)):o("warning"),y>11?t(u=>Fe(u)):o("warning"),y<11?t(u=>Me(u)):o("warning")}return r(F,{children:r(Se,{children:m("form",{onSubmit:_(E),children:[r(z,{w:"100%",p:"1.5em",children:r(ae,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),r(z,{w:"100%",p:"0.3em 0",children:r(ce,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),m(se,{spacing:2,p:"0.7em",children:[m(N,{children:[r("label",{style:{color:`${e.color}`},children:r("strong",{children:"ID"})}),r(v,i(l(i({},I),{_placeholder:{color:c.id?"red.400":"#666666"},placeholder:c.id?"Valido 11 d\xEDgitos":" "}),d("id",l(i({},Ne),{onChange:g=>w(g)}))))]}),m(N,{children:[r("label",{children:"Tomo"}),r(v,i(l(i({},I),{_placeholder:{color:c.tomo?"red.400":"gray.500"},placeholder:c.tomo?"Olvido su Tomo!":""}),d("tomo",{required:!0})))]}),m(N,{children:[r("label",{children:"Folio"}),r(v,i(l(i({},I),{_placeholder:{color:c.folio?"red.400":"gray.500"},placeholder:c.folio?"Olvido su Folio!":""}),d("folio",{required:!0})))]})]}),r(f,{p:"2em 0.7em",w:"100%",children:m(x,{justifyContent:"space-evenly",children:[r(v,i(l(i({},Ie),{m:"0 0.7em",_placeholder:{color:c.email?"red.400":"gray.500"},placeholder:c.email?"Email requerido!":"Correo Electr\xF3nico"}),d("email",{required:!0}))),r(v,i(l(i({m:"0 0.7em"},I),{_placeholder:{color:c.tel?"red.400":"gray.500"},placeholder:c.tel?"Tel\xE9fono requerido!":"Nro de Tel\xE9fono"}),d("tel",{required:!0})))]})}),r(pe,{onChange:h,value:a,w:"100%",children:r(f,{p:"0 0.7em",w:"100%",children:m(x,{justifyContent:"flex-start",children:[r(q,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:a=="juridica",children:"Persona jur\xEDdica"}),r(q,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:a=="natural",children:"Persona Natural"})]})})}),a=="juridica"&&m(F,{children:[r(f,{p:"2em 0.7em",w:"100%",children:m(x,{justifyContent:"space-evenly",children:[r(j,l(i({m:"0 0.7em",placeholder:"Organismos"},d("organismos")),{children:r(P,{data:be})})),r(j,l(i({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},d("empresas")),{children:r(P,{data:Ee})}))]})}),r(f,{p:"2em 0.7em",w:"100%",children:m(x,{justifyContent:"space-evenly",children:[r(v,i(l(i({m:"0 0.7em"},A),{_placeholder:{color:c.cargo?"red.400":"gray.500"},placeholder:c.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),d("cargo",{required:!0}))),r(v,i(l(i({m:"0 0.7em"},A),{_placeholder:{color:c.representante?"red.400":"gray.500"},placeholder:c.representante?"Representante requerido!":"Representante"}),d("representante",{required:!0})))]})})]}),a=="natural"&&r(f,{p:"2em 0.7em",w:"100%",children:r(x,{justifyContent:"space-evenly",children:r(j,l(i({placeholder:"Entidad relacionada"},d("entidades")),{children:r(P,{data:we})}))})}),r(f,{p:"0 1em",w:"100%",children:r(x,{justifyContent:"flex-start",children:r(ue,l(i({m:"0 0.7em",colorScheme:"red"},d("condiciones")),{children:"Acepto los terminos y condiciones."}))})}),r(f,{p:"2em 0.7em",w:"100%",children:m(x,{justifyContent:"space-evenly",children:[r(D,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),r(D,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function qe(){return r(de,{children:r(Re,{children:m("section",{className:"login",children:[r("div",{className:"login__divider",children:r("img",{className:"login__image",src:"./images/contact.png"})}),r("div",{className:"login__divider",children:r(Te,{})})]})})})}const Re=L.div`
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
`;export{qe as default};

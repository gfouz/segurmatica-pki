var V=Object.defineProperty,$=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&H(e,o,t[o]);if(k)for(var o of k(t))X.call(t,o)&&H(e,o,t[o]);return e},l=(e,t)=>$(e,J(t));import{f as L,t as Z,o as ee,E as re,d as te,r as c,e as M,h as oe,c as ne,G as ie,j as r,F,I as le,s as G,a as h,J as z,H as ae,T as se,K as ce,M as N,N as f,O as v}from"./index.27895db8.js";import{B as D,L as de}from"./Layout.c4e18661.js";import{u as he,a as me,I as x,C as ue}from"./index.esm.939aa73c.js";import{R as pe,a as q}from"./chakra-ui-radio.esm.60cccee0.js";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p.apply(this,arguments)}function T(e,t){if(e==null)return{};var o={},n=Object.keys(e),a,m;for(m=0;m<n.length;m++)a=n[m],!(t.indexOf(a)>=0)&&(o[a]=e[a]);return o}var ge=["children","placeholder","className"],fe=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],ve=["children"],xe=L(function(e,t){var o=e.children,n=e.placeholder,a=e.className,m=T(e,ge);return c.exports.createElement(M.select,p({},m,{ref:t,className:ne("chakra-select",a)}),n&&c.exports.createElement("option",{value:""},n),o)}),j=L(function(e,t){var o=Z("Select",e),n=ee(e),a=n.rootProps,m=n.placeholder,d=n.icon,_=n.color,s=n.height,E=n.h,w=n.minH,g=n.minHeight,S=n.iconColor,y=n.iconSize,u=T(n,fe),R=re(u,ie),U=R[0],W=R[1],O=he(W),Y={width:"100%",height:"fit-content",position:"relative",color:_},K=te({paddingEnd:"2rem"},o.field,{_focus:{zIndex:"unset"}});return c.exports.createElement(M.div,p({className:"chakra-select__wrapper",__css:Y},U,a),c.exports.createElement(xe,p({ref:t,height:E!=null?E:s,minH:w!=null?w:g,placeholder:m},O,{__css:K}),e.children),c.exports.createElement(_e,p({"data-disabled":oe(O.disabled)},(S||_)&&{color:S||_},{__css:o.icon},y&&{fontSize:y}),d))}),ye=function(t){return c.exports.createElement("svg",p({viewBox:"0 0 24 24"},t),c.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},Ce=M("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),_e=function(t){var o=t.children,n=o===void 0?c.exports.createElement(ye,null):o,a=T(t,ve),m=c.exports.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return c.exports.createElement(Ce,p({},a,{className:"chakra-select__icon-wrapper"}),c.exports.isValidElement(n)?m:null)};function P({data:e}){return r(F,{children:e?e.map(t=>r("option",{value:t,children:t},le.useId())):r("option",{})})}const Se=G.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,be=["PCC","MININT","FAR","MTSS","MINCIN","MEP"],Ee=["ETECSA","UNE","DPT","FCBC","UMCC","ITH"],we=["BANDEC","BPA"],I={size:"sm",type:"number",variant:"flushed"},Ie={size:"sm",type:"email",variant:"flushed"},A={size:"sm",type:"text",variant:"flushed"};function C(e,t,o){return parseInt(e.toString().substring(t,o))}let b=new Date().getFullYear(),B=new Date().getMonth()+1;b=C(b,2,4);B=C(B,2,4);const Ne={required:!0,maxLength:11,minLength:11,validate:{isGrownUp:e=>b>C(e,0,2)&&b-C(e,0,2)>18||b<C(e,0,2)&&C(e,0,2)<99,monthMin:e=>parseInt(e.substring(2,4))>=1,monthMax:e=>parseInt(e.substring(2,4))<=12,dayMin:e=>parseInt(e.substring(4,6))>=1,dayMax:e=>parseInt(e.substring(4,6))<=31}},je={id:"",tel:"",tomo:"",color:"#000000",cargo:"",folio:"",email:"",warning:"",empresas:"",entidades:"",organismos:"",representante:"",condiciones:!1},Pe=e=>l(i({},e),{color:"#00FF00"}),Fe=e=>l(i({},e),{color:"#FF0000"}),Me=e=>l(i({},e),{color:"#CCCCCC"});function Te(){const[e,t]=c.exports.useState(je),[o,n]=c.exports.useState(""),[a,m]=c.exports.useState("juridica"),{register:d,handleSubmit:_,formState:{errors:s}}=me(),E=g=>console.log(g);function w(g){let{value:S}=g.target,y=S.length;t(u=>l(i({},u),{id:S})),y===11?t(u=>Pe(u)):n("warning"),y>11?t(u=>Fe(u)):n("warning"),y<11?t(u=>Me(u)):n("warning")}return r(F,{children:r(Se,{children:h("form",{onSubmit:_(E),children:[r(z,{w:"100%",p:"1.5em",children:r(ae,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),r(z,{w:"100%",p:"0.3em 0",children:r(se,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),h(ce,{spacing:2,p:"0.7em",children:[h(N,{children:[r("label",{style:{color:`${e.color}`},children:r("strong",{children:"ID"})}),r(x,i(l(i({},I),{_placeholder:{color:s.id?"red.400":"#666666"},placeholder:s.id?"Valido 11 d\xEDgitos":" "}),d("id",l(i({},Ne),{onChange:g=>w(g)}))))]}),h(N,{children:[r("label",{children:"Tomo"}),r(x,i(l(i({},I),{_placeholder:{color:s.tomo?"red.400":"gray.500"},placeholder:s.tomo?"Olvido su Tomo!":""}),d("tomo",{required:!0})))]}),h(N,{children:[r("label",{children:"Folio"}),r(x,i(l(i({},I),{_placeholder:{color:s.folio?"red.400":"gray.500"},placeholder:s.folio?"Olvido su Folio!":""}),d("folio",{required:!0})))]})]}),r(f,{p:"2em 0.7em",w:"100%",children:h(v,{justifyContent:"space-evenly",children:[r(x,i(l(i({},Ie),{m:"0 0.7em",_placeholder:{color:s.email?"red.400":"gray.500"},placeholder:s.email?"Email requerido!":"Correo Electr\xF3nico"}),d("email",{required:!0}))),r(x,i(l(i({m:"0 0.7em"},I),{_placeholder:{color:s.tel?"red.400":"gray.500"},placeholder:s.tel?"Tel\xE9fono requerido!":"Nro de Tel\xE9fono"}),d("tel",{required:!0})))]})}),r(pe,{onChange:m,value:a,w:"100%",children:r(f,{p:"0 0.7em",w:"100%",children:h(v,{justifyContent:"flex-start",children:[r(q,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:a=="juridica",children:"Persona jur\xEDdica"}),r(q,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:a=="natural",children:"Persona Natural"})]})})}),a=="juridica"&&h(F,{children:[r(f,{p:"2em 0.7em",w:"100%",children:h(v,{justifyContent:"space-evenly",children:[r(j,l(i({m:"0 0.7em",placeholder:"Organismos"},d("organismos")),{children:r(P,{data:be})})),r(j,l(i({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},d("empresas")),{children:r(P,{data:Ee})}))]})}),r(f,{p:"2em 0.7em",w:"100%",children:h(v,{justifyContent:"space-evenly",children:[r(x,i(l(i({m:"0 0.7em"},A),{_placeholder:{color:s.cargo?"red.400":"gray.500"},placeholder:s.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),d("cargo",{required:!0}))),r(x,i(l(i({m:"0 0.7em"},A),{_placeholder:{color:s.representante?"red.400":"gray.500"},placeholder:s.representante?"Representante requerido!":"Representante"}),d("representante",{required:!0})))]})})]}),a=="natural"&&r(f,{p:"2em 0.7em",w:"100%",children:r(v,{justifyContent:"space-evenly",children:r(j,l(i({placeholder:"Entidad relacionada"},d("entidades")),{children:r(P,{data:we})}))})}),r(f,{p:"0 1em",w:"100%",children:r(v,{justifyContent:"flex-start",children:r(ue,l(i({m:"0 0.7em",colorScheme:"red"},d("condiciones")),{children:"Acepto los terminos y condiciones."}))})}),r(f,{p:"2em 0.7em",w:"100%",children:h(v,{justifyContent:"space-evenly",children:[r(D,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),r(D,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function qe(){return r(de,{children:r(Re,{children:h("section",{className:"login",children:[h("div",{className:"login__divider",children:[r("div",{className:"login__logo"}),r("img",{className:"login__image",src:"./images/forms.png"})]}),r("div",{className:"login__divider",children:r(Te,{})})]})})})}const Re=G.div`
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
`;export{qe as default};

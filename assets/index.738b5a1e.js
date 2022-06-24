var J=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var z=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&z(e,n,t[n]);if(M)for(var n of M(t))ee.call(t,n)&&z(e,n,t[n]);return e},d=(e,t)=>Q(e,X(t));import{f as Y,t as re,o as te,E as ne,d as oe,r as h,e as T,h as ae,c as ie,G as le,j as r,F as P,I as se,s as $,a as u,J as H,H as ce,T as de,K as he,M as N,N as v,O as x}from"./index.f64b0dbf.js";import{B as R,L as ue}from"./Layout.3d9bba9e.js";import{u as me,I,a as pe,C as ge}from"./index.esm.d2e5aae3.js";import{R as fe,a as A}from"./chakra-ui-radio.esm.9fcf62ce.js";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function D(e,t){if(e==null)return{};var n={},o=Object.keys(e),i,c;for(c=0;c<o.length;c++)i=o[c],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var ve=["children","placeholder","className"],xe=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],ye=["children"],Ce=Y(function(e,t){var n=e.children,o=e.placeholder,i=e.className,c=D(e,ve);return h.exports.createElement(T.select,p({},c,{ref:t,className:ie("chakra-select",i)}),o&&h.exports.createElement("option",{value:""},o),n)}),j=Y(function(e,t){var n=re("Select",e),o=te(e),i=o.rootProps,c=o.placeholder,s=o.icon,g=o.color,l=o.height,E=o.h,f=o.minH,b=o.minHeight,_=o.iconColor,C=o.iconSize,m=D(o,xe),O=ne(m,le),V=O[0],W=O[1],q=me(W),K={width:"100%",height:"fit-content",position:"relative",color:g},U=oe({paddingEnd:"2rem"},n.field,{_focus:{zIndex:"unset"}});return h.exports.createElement(T.div,p({className:"chakra-select__wrapper",__css:K},V,i),h.exports.createElement(Ce,p({ref:t,height:E!=null?E:l,minH:f!=null?f:b,placeholder:c},q,{__css:U}),e.children),h.exports.createElement(_e,p({"data-disabled":ae(q.disabled)},(_||g)&&{color:_||g},{__css:n.icon},C&&{fontSize:C}),s))}),Se=function(t){return h.exports.createElement("svg",p({viewBox:"0 0 24 24"},t),h.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},be=T("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),_e=function(t){var n=t.children,o=n===void 0?h.exports.createElement(Se,null):n,i=D(t,ye),c=h.exports.cloneElement(o,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return h.exports.createElement(be,p({},i,{className:"chakra-select__icon-wrapper"}),h.exports.isValidElement(o)?c:null)};function k({data:e}){return r(P,{children:e?e.map(t=>r("option",{value:t,children:t},se.useId())):r("option",{})})}const Ee=$.div`
  background-color: #fefefe;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
`,w=({idEvt:e,label:t,chakraProps:n,register:o,validations:i,placeholder:c,_placeholder:s,requirements:g})=>r(P,{children:r(I,a(d(a({},n),{_placeholder:s,placeholder:c}),o(t,d(a({},g),{validate:a({},i),onChange:l=>e(l)}))))});function y(e,t,n){return parseInt(e.toString().substring(t,n))}let S=new Date().getFullYear(),we=new Date().getMonth()+1;S=y(S,2,4);const F={size:"sm",type:"number",variant:"flushed"},Ie={size:"sm",type:"tel",variant:"flushed"},Pe={isgrownup:e=>S-y(e,0,2)==18&&we>y(e,2,4)||S>y(e,0,2)&&S-y(e,0,2)>18||S<y(e,0,2)&&y(e,0,2)<99,monthover:e=>parseInt(e.substring(2,4))>=1,monthunder:e=>parseInt(e.substring(2,4))<=12,dayover:e=>parseInt(e.substring(4,6))>=1,dayunder:e=>parseInt(e.substring(4,6))<=31},Ne={required:!0,maxLength:11,minLength:11},L={required:!0,maxLength:4,minLength:4},je={required:!0,maxLength:12,minLength:8},ke=["PCC","MININT","FAR","MTSS","MINCIN","MEP"],Fe=["ETECSA","UNE","DPT","FCBC","UMCC","ITH"],Te=["BANDEC","BPA"],De={size:"sm",type:"email",variant:"flushed"},B={size:"sm",type:"text",variant:"flushed"};function Oe(e,t,n){return parseInt(e.toString().substring(t,n))}let G=new Date().getFullYear();new Date().getMonth()+1;G=Oe(G,2,4);const qe={id:"",tel:"",tomo:"",color:"#000000",cargo:"",folio:"",email:"",warning:"",empresas:"",entidades:"",organismos:"",representante:"",condiciones:!1},Me=e=>d(a({},e),{color:"#00FF00"}),ze=e=>d(a({},e),{color:"#FF0000"}),He=e=>d(a({},e),{color:"#CCCCCC"});function Re(){const[e,t]=h.exports.useState(qe),[n,o]=h.exports.useState(""),[i,c]=h.exports.useState("juridica"),{register:s,handleSubmit:g,formState:{errors:l}}=pe(),E=b=>console.log(b);function f(b){let{value:_}=b.target,C=_.length;t(m=>d(a({},m),{id:_})),C===11?t(m=>Me(m)):o("warning"),C>11?t(m=>ze(m)):o("warning"),C<11?t(m=>He(m)):o("warning")}return r(P,{children:r(Ee,{children:u("form",{onSubmit:g(E),children:[r(H,{w:"100%",p:"1.5em",children:r(ce,{as:"h3",size:"lg",color:"#B22222",children:"Solicitud de Generaci\xF3n"})}),r(H,{w:"100%",p:"0.3em 0",children:r(de,{color:"#666666",children:"Escriba sus datos correspondientes:"})}),u(he,{spacing:2,p:"0.7em",children:[u(N,{children:[r("label",{style:{color:`${e.color}`},children:r("strong",{children:"ID"})}),r(w,{label:"id",register:s,chakraProps:F,idEvt:f,validations:Pe,requirements:Ne,placeholder:l.id?"Olvido su ID!":"",_placeholder:{color:l.id?"red.400":"gray.500"}})]}),u(N,{children:[r("label",{children:"Tomo"}),r(w,{label:"tomo",register:s,chakraProps:F,idEvt:f,requirements:L,placeholder:l.id?"Olvido su ID!":"",_placeholder:{color:l.id?"red.400":"gray.500"}})]}),u(N,{children:[r("label",{children:"Folio"}),r(w,{label:"folio",register:s,chakraProps:F,idEvt:f,requirements:L,placeholder:l.id?"Olvido su ID!":"",_placeholder:{color:l.id?"red.400":"gray.500"}})]})]}),r(v,{p:"2em 0.7em",w:"100%",children:u(x,{justifyContent:"space-evenly",children:[r(I,a(d(a({},De),{m:"0 0.7em",_placeholder:{color:l.email?"red.400":"gray.500"},placeholder:l.email?"Email requerido!":"Correo Electr\xF3nico"}),s("email",{required:!0}))),r(w,{label:"tel",register:s,chakraProps:Ie,idEvt:f,requirements:je,placeholder:l.id?"Su t\xE9lefono!":"",_placeholder:{color:l.id?"red.400":"gray.500"}})]})}),r(fe,{onChange:c,value:i,w:"100%",children:r(v,{p:"0 0.7em",w:"100%",children:u(x,{justifyContent:"flex-start",children:[r(A,{m:"0 1em",value:"juridica",colorScheme:"red",isChecked:i=="juridica",children:"Persona jur\xEDdica"}),r(A,{m:"0 1em",value:"natural",colorScheme:"red",isChecked:i=="natural",children:"Persona Natural"})]})})}),i=="juridica"&&u(P,{children:[r(v,{p:"2em 0.7em",w:"100%",children:u(x,{justifyContent:"space-evenly",children:[r(j,d(a({m:"0 0.7em",placeholder:"Organismos"},s("organismos")),{children:r(k,{data:ke})})),r(j,d(a({m:"0 0.7em",placeholder:"Empresa o Instituci\xF3n"},s("empresas")),{children:r(k,{data:Fe})}))]})}),r(v,{p:"2em 0.7em",w:"100%",children:u(x,{justifyContent:"space-evenly",children:[r(I,a(d(a({m:"0 0.7em"},B),{_placeholder:{color:l.cargo?"red.400":"gray.500"},placeholder:l.cargo?"Olvido su Cargo!":"Escribe tu cargo"}),s("cargo",{required:!0}))),r(I,a(d(a({m:"0 0.7em"},B),{_placeholder:{color:l.representante?"red.400":"gray.500"},placeholder:l.representante?"Representante requerido!":"Representante"}),s("representante",{required:!0})))]})})]}),i=="natural"&&r(v,{p:"2em 0.7em",w:"100%",children:r(x,{justifyContent:"space-evenly",children:r(j,d(a({placeholder:"Entidad relacionada"},s("entidades")),{children:r(k,{data:Te})}))})}),r(v,{p:"0 1em",w:"100%",children:r(x,{justifyContent:"flex-start",children:r(ge,d(a({m:"0 0.7em",colorScheme:"red"},s("condiciones")),{children:"Acepto los terminos y condiciones."}))})}),r(v,{p:"2em 0.7em",w:"100%",children:u(x,{justifyContent:"space-evenly",children:[r(R,{colorScheme:"facebook",variant:"solid",type:"submit",children:"Continuar"}),r(R,{colorScheme:"red",variant:"solid",children:"Cancelar"})]})})]})})})}function Ve(){return r(ue,{children:r(Ae,{children:u("section",{className:"login",children:[r("div",{className:"login__divider",children:r("img",{className:"login__image",src:"./images/contact.png"})}),r("div",{className:"login__divider",children:r(Re,{})})]})})})}const Ae=$.div`
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
`;export{Ve as default};

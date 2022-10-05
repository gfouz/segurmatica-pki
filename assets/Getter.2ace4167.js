var C=Object.defineProperty;var I=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var P=(s,a,r)=>a in s?C(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,j=(s,a)=>{for(var r in a||(a={}))M.call(a,r)&&P(s,r,a[r]);if(I)for(var r of I(a))R.call(a,r)&&P(s,r,a[r]);return s};import{u as T}from"./chakra-ui-checkbox.esm.477918d5.js";import{h as B,o as G,z as H,r as c,d as m,c as q,E as $,s as x,j as n,F as _,a as o,G as O,R as k,a2 as w,a3 as F,a1 as K}from"./index.84145a61.js";import{u as z,S as L}from"./StatusHandler.4fa71a43.js";import{u as D}from"./index.esm.d64a2720.js";import{S as W,i as Q,c as J,d as U,e as V}from"./StyledLabel.97b52d23.js";import{S as X}from"./SubmitButton.d37232a3.js";import{T as Y,I as Z,E as ee}from"./ErrorWarning.4beaff6e.js";import{u as E,b as re,s as se}from"./store.6f1159d1.js";function d(){return d=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=r[l])}return s},d.apply(this,arguments)}function ne(s,a){if(s==null)return{};var r={},l=Object.keys(s),e,t;for(t=0;t<l.length;t++)e=l[t],!(a.indexOf(e)>=0)&&(r[e]=s[e]);return r}var ae=["spacing","children"],ke=B(function(s,a){var r=G("Switch",s),l=H(s),e=l.spacing,t=e===void 0?"0.5rem":e,h=l.children,f=ne(l,ae),i=T(f),p=i.state,g=i.getInputProps,u=i.getCheckboxProps,S=i.getRootProps,v=i.getLabelProps,b=c.exports.useMemo(function(){return d({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},r.container)},[r.container]),y=c.exports.useMemo(function(){return d({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},r.track)},[r.track]),N=c.exports.useMemo(function(){return d({userSelect:"none",marginStart:t},r.label)},[t,r.label]);return c.exports.createElement(m.label,d({},S(),{className:q("chakra-switch",s.className),__css:b}),c.exports.createElement("input",d({className:"chakra-switch__input"},g({},a))),c.exports.createElement(m.span,d({},u(),{className:"chakra-switch__track",__css:y}),c.exports.createElement(m.span,{__css:r.thumb,className:"chakra-switch__thumb","data-checked":$(p.isChecked),"data-hover":$(p.isHovered)})),h&&c.exports.createElement(m.span,d({className:"chakra-switch__label"},v(),{__css:N}),h))});function te({data:s}){const a=E(re),r=E(se),l=e=>{a.setStack(e),r.setOption("actualizar")};return n(_,{children:n(oe,{children:Array.isArray(s)?s==null?void 0:s.map((e,t)=>n("ul",{className:"list",onClick:()=>l(e),children:o("li",{className:e!=null&&e.enabled?"list__item":"disabled",children:[o("p",{children:[" ",(e==null?void 0:e.name)&&`nombre: ${e==null?void 0:e.name}`]}),o("p",{children:[" ",(e==null?void 0:e.ci)&&`dni: ${e==null?void 0:e.ci}`]}),o("p",{children:[" ",(e==null?void 0:e.tome)&&`tomo: ${e==null?void 0:e.tome}`]}),o("p",{children:[" ",(e==null?void 0:e.folio)&&`folio: ${e==null?void 0:e.folio}`]}),o("p",{children:[" ",(e==null?void 0:e.email)&&`correo: ${e==null?void 0:e.email}`," "]}),o("p",{children:[" ",(e==null?void 0:e.price)&&`precio: ${e==null?void 0:e.price}`]}),o("p",{children:[" ",(e==null?void 0:e.range)&&`rango: ${e==null?void 0:e.range}`]}),o("p",{children:[" ",(e==null?void 0:e.phone)&&`tel: ${e==null?void 0:e.phone}`]}),o("p",{children:[" ",Boolean(e==null?void 0:e.enabled)===!0?"Habilitado":"Deshabilitado"]})]})},t)):n("p",{className:"default-message",children:"no data available"})})})}const oe=x.div`
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .default-message {
    color: #ff0000;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .list {
    cursor: pointer;
    width: 320px;
    padding: 1em;
    margin: 0.1em;
    border-radius: 10px;
    background-color: #e7e9eb;
  }
  .list__item {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #009966;
    text-align: left;
    list-style-type: none;
  }
  .disabled {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #999999;
    text-align: left;
    list-style-type: none;
  }

  .list:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.05, 0.9, 1);
    }
    40% {
      transform: scale3d(0.85, 1.05, 1);
    }
    50% {
      transform: scale3d(1.05, 0.9, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;function le({data:s}){const a=r=>s==null?void 0:s.hasOwnProperty(r);if(a("name")||a("email")||a("price")){const r=Object.assign({},s);return n(_,{children:n(ce,{children:n("div",{className:"list-container",children:o("ul",{className:"list",children:[r.name&&n("li",{className:"list__item",children:r==null?void 0:r.name}),r.ci&&o("li",{className:"list__item",children:["DNI: ",r==null?void 0:r.ci]}),r.tome&&o("li",{className:"list__item",children:["TOMO: ",r==null?void 0:r.tome]}),r.folio&&o("li",{className:"list__item",children:["FOLIO: ",r==null?void 0:r.folio]}),r.email&&o("li",{className:"list__item",children:["EMAIL: ",r==null?void 0:r.email]}),r.phone&&n("li",{className:"list__item",children:`TEL: ${r==null?void 0:r.phone}`}),r.price&&n("li",{className:"list__item",children:`Precio: ${r==null?void 0:r.price}`}),r.range&&n("li",{className:"list__item",children:`Rango: ${r==null?void 0:r.range}`}),n("li",{className:"list__item",children:Boolean(r==null?void 0:r.enabled)===!0?"habilitado":"deshabilitado"})]})})})})}else return n(ie,{children:"No data available"})}const ce=x.div`
  margin: 2em 0;
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list {
    padding: 0;
    margin: 0;
    border-radius: 10px;
    min-width: 250px;
    padding: 1em;
    margin: 0.2em;
    background-color: #000000;
    box-shadow: 1px 1px 10px #ab8ffe;
  }
  .list__item {
    color: #f1f1f1;
    text-align: left;
    list-style-type: none;
  }
`,ie=x.p`
  color: red;
  margin: 1em 0;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
`;function de(){return n(_,{children:n(O,{size:"sm"})})}const pe=({label:s,register:a,required:r,errors:l,defaultValue:e,info:t})=>o(_,{children:[n(Y,{label:t,hasArrow:!0,arrowSize:15,children:n(Z,j({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:e},a(s,{pattern:/^\d*(\.\d+)?$/,required:r})))}),n(ee,{label:s,errors:l,info:t})]});function Ne(s){const{url:a,msg:r,queryKey:l}=s,{register:e,handleSubmit:t,formState:{errors:h}}=D(),[f,i]=c.exports.useState(""),[p,g]=c.exports.useState(""),{data:u,isLoading:S,refetch:v}=z(l,()=>J(a,f),{staleTime:2e3}),b=u==null?void 0:u.result,y=u==null?void 0:u.message;return k.useEffect(()=>{g(y)},[y]),k.useEffect(()=>{v()},[f]),n(_,{children:o(ue,{children:[n("form",{onSubmit:t(async A=>{i(A.id)}),children:n(w,{p:"1em",children:o(F,{children:[n(W,{children:"Buscar por ID"}),n(pe,{label:"id",register:e,errors:h,required:!0,info:Q.numeric}),n(X,{buttonstate:b==null?void 0:b.isLoading})]})})}),n(w,{children:S?n(de,{}):n(le,{data:b})}),n(w,{children:p&&n(L,{message:p})})]})})}const ue=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;function Ie(s){var p,g;const[a,r]=c.exports.useState(""),{url:l,queryKey:e}=s,{data:t,isLoading:h,isError:f}=z(e,()=>V(l)),i=((g=(p=t==null?void 0:t.response)==null?void 0:p.data)==null?void 0:g.message)||(t==null?void 0:t.message);return k.useEffect(()=>{U(i,r)},[i]),o(he,{children:[f&&n("div",{children:"An error ocurred..."}),h&&o("div",{children:[n(O,{size:"sm",color:"white"}),n(K,{color:"white",children:"Loading..."})]}),n(te,{data:t==null?void 0:t.result}),a&&n(L,{message:a})]})}const he=x.div`
  width: 100%;
`;export{te as A,Ie as G,pe as N,le as O,ke as S,Ne as a};

var T=Object.defineProperty;var $=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var z=(r,a,n)=>a in r?T(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,b=(r,a)=>{for(var n in a||(a={}))G.call(a,n)&&z(r,n,a[n]);if($)for(var n of $(a))B.call(a,n)&&z(r,n,a[n]);return r};import{u as V}from"./chakra-ui-checkbox.esm.fe438153.js";import{h as q,o as F,z as K,r as t,d as y,c as m,E as L,s as v,j as c,F as P,a as o,R as D,G as A,a1 as M,a2 as Q,a3 as W}from"./index.a965a08b.js";import{u as j,S as I}from"./StatusHandler.f4e4ee84.js";import{c as H,d as R,S as J}from"./StyledLabel.73e7a9c0.js";import{u as N,b as U,s as X}from"./store.df117b59.js";import{I as Y}from"./ErrorWarning.4bc7c3cd.js";function f(){return f=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},f.apply(this,arguments)}function Z(r,a){if(r==null)return{};var n={},i=Object.keys(r),e,l;for(l=0;l<i.length;l++)e=i[l],!(a.indexOf(e)>=0)&&(n[e]=r[e]);return n}var ee=["spacing","children"],fe=q(function(r,a){var n=F("Switch",r),i=K(r),e=i.spacing,l=e===void 0?"0.5rem":e,g=i.children,p=Z(i,ee),h=V(p),u=h.state,s=h.getInputProps,S=h.getCheckboxProps,w=h.getRootProps,_=h.getLabelProps,k=t.exports.useMemo(function(){return f({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},n.container)},[n.container]),C=t.exports.useMemo(function(){return f({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},n.track)},[n.track]),d=t.exports.useMemo(function(){return f({userSelect:"none",marginStart:l},n.label)},[l,n.label]);return t.exports.createElement(y.label,f({},w(),{className:m("chakra-switch",r.className),__css:k}),t.exports.createElement("input",f({className:"chakra-switch__input"},s({},a))),t.exports.createElement(y.span,f({},S(),{className:"chakra-switch__track",__css:C}),t.exports.createElement(y.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":L(u.isChecked),"data-hover":L(u.isHovered)})),g&&t.exports.createElement(y.span,f({className:"chakra-switch__label"},_(),{__css:d}),g))});function se({data:r}){const a=N(U),n=N(X),i=e=>{a.setStack(e),n.setOption("actualizar")};return c(P,{children:c(re,{children:Array.isArray(r)?r==null?void 0:r.map((e,l)=>c("ul",{className:"list",onClick:()=>i(e),children:o("li",{className:e!=null&&e.enabled?"list__item":"disabled",children:[o("p",{children:[" ",(e==null?void 0:e.name)&&`nombre: ${e==null?void 0:e.name}`]}),o("p",{children:[" ",(e==null?void 0:e.ci)&&`dni: ${e==null?void 0:e.ci}`]}),o("p",{children:[" ",(e==null?void 0:e.tome)&&`tomo: ${e==null?void 0:e.tome}`]}),o("p",{children:[" ",(e==null?void 0:e.folio)&&`folio: ${e==null?void 0:e.folio}`]}),o("p",{children:[" ",(e==null?void 0:e.email)&&`correo: ${e==null?void 0:e.email}`," "]}),o("p",{children:[" ",(e==null?void 0:e.price)&&`precio: ${e==null?void 0:e.price}`]}),o("p",{children:[" ",(e==null?void 0:e.range)&&`rango: ${e==null?void 0:e.range}`]}),o("p",{children:[" ",(e==null?void 0:e.phone)&&`tel: ${e==null?void 0:e.phone}`]}),o("p",{children:[" ",(e==null?void 0:e.enabled)==="true"?"Estado: habilitado":"Estado: desabilitado"]})]})},l)):c("p",{className:"default-message",children:"no data available"})})})}const re=v.div`
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
`;function xe(r){var u,s;const[a,n]=t.exports.useState(""),{url:i,queryKey:e}=r,{data:l,isLoading:g,isError:p}=j(e,()=>R(i)),h=((s=(u=l==null?void 0:l.response)==null?void 0:u.data)==null?void 0:s.message)||(l==null?void 0:l.message);return D.useEffect(()=>{H(h,n)},[h]),o(ne,{children:[p&&c("div",{children:"An error ocurred..."}),g&&o("div",{children:[c(A,{size:"sm",color:"white"}),c(M,{color:"white",children:"Loading..."})]}),c(se,{data:l==null?void 0:l.result}),a&&c(I,{message:a})]})}const ne=v.div`
  width: 100%;
`,ae=({data:r})=>{const a=r==null?void 0:r.map(d=>d.name),[n,i]=t.exports.useState([""]),[e,l]=t.exports.useState(0),[g,p]=t.exports.useState(!1),[h,u]=t.exports.useState(""),[s,S]=t.exports.useState(),w=d=>{const x=d.target.value.toLowerCase();if(u(x),x.length>1){const E=a==null?void 0:a.filter(O=>O.toLowerCase().indexOf(x)>-1);i(E),p(!0)}else p(!1)},_=d=>{i([]),u(d.target.innerHTML),p(!1)},k=d=>{if(d.keyCode===38){if(e===0)return;l(e-1)}else if(d.keyCode===40){if(e-1===n.length)return;l(e+1)}else d.keyCode===13&&(u(n[e]),l(0),p(!1))},C=()=>c("ul",{className:"suggestions",children:n==null?void 0:n.map((d,x)=>c("li",{className:x===e?"active":"",onClick:E=>_(E),style:{listStyleType:"none",cursor:"pointer"},children:d},x))});return t.exports.useEffect(()=>{S(r==null?void 0:r.find(d=>d.name===h))},[h]),o(oe,{children:[c(Y,{className:"searchbox__input",type:"text",value:h,variant:"flushed",onChange:w,onKeyDown:k}),g&&c(C,{}),!g&&c(le,{children:c("ul",{className:"list",children:o("li",{className:"list__item",children:[o("span",{children:[" ",(s==null?void 0:s.name)&&`Nombre: ${s==null?void 0:s.name}`]}),o("span",{children:[" ",(s==null?void 0:s.ci)&&`Carnet: ${s==null?void 0:s.ci}`]}),o("span",{children:[" ",(s==null?void 0:s.tome)&&`Tomo: ${s==null?void 0:s.tome}`]}),o("span",{children:[" ",(s==null?void 0:s.folio)&&`Folio: ${s==null?void 0:s.folio}`]}),o("span",{children:[" ",(s==null?void 0:s.email)&&`Correo: ${s==null?void 0:s.email}`," "]}),o("span",{children:[" ",(s==null?void 0:s.price)&&`Precio: ${s==null?void 0:s.price}`]}),o("span",{children:[" ",(s==null?void 0:s.range)&&`Rango: ${s==null?void 0:s.range}`]}),o("span",{children:[" ",(s==null?void 0:s.phone)&&`Tel: ${s==null?void 0:s.phone}`]}),o("span",{children:[" ",(s==null?void 0:s.address)&&`domicilio: ${s==null?void 0:s.address}`]}),o("span",{children:[" ",(s==null?void 0:s.enabled)&&(s==null?void 0:s.enabled)===!0&&"Estado: habilitado"]})]})})})]})},oe=v.div``,le=v.div`
  margin: 1em 0;
  .list {
    display: flex;
    flex-direction: column;
  }
  .list__item {
    list-style-type: none;
    span {
      display: block;
    }
    font-style: italic;
    font-weight: bolder;
  }
`;function ve(r){var u,s;const{allnames:a}=r,[n,i]=t.exports.useState(""),{data:e,isError:l,isLoading:g}=j("all-names",()=>R(a)),p=e==null?void 0:e.result,h=((s=(u=e==null?void 0:e.response)==null?void 0:u.data)==null?void 0:s.message)||(e==null?void 0:e.message);return t.exports.useEffect(()=>{H(h,i)},[h]),c(P,{children:c(Q,{p:"1em",children:o(W,{children:[c(J,{m:"0.5em 0",color:"#009966",upper:!0,children:"B\xFAsqueda por nombre."}),c(ae,{data:p}),o(te,{children:[l&&c("div",{children:"An error ocurred..."}),g&&o("div",{children:[c(A,{size:"sm",color:"white"}),c(M,{color:"white",children:"Loading..."})]}),n&&c(I,{message:n})]})]})})})}const te=v.div`
  width: 100%;
`;function be(r){return t.exports.createElement("svg",b({viewBox:"0 0 576 512",width:r.width||"1em",length:r.height||"auto"},r),t.exports.createElement("path",{fill:r.color,d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}))}function ye(r){return t.exports.createElement("svg",b({viewBox:"0 0 512 512",width:r.width||"1em",length:r.height||"auto"},r),t.exports.createElement("path",{fill:r.color,d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))}function Se(r){return t.exports.createElement("svg",b({viewBox:"0 0 512 512",width:r.width||"1em",length:r.height||"auto"},r),t.exports.createElement("path",{fill:r.color,d:"M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"}))}export{se as A,be as E,xe as G,Se as S,ye as a,ve as b,fe as c};

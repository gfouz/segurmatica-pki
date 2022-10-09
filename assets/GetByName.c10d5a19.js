import{u as O}from"./chakra-ui-checkbox.esm.51ae5603.js";import{h as T,o as G,z as H,r as i,d as y,c as M,E as $,s as b,j as l,F as P,a as n,R as q,G as E,a1 as A,a2 as F,a3 as K}from"./index.b7cccbb5.js";import{u as L,S as j}from"./StatusHandler.9d0da5e5.js";import{c as I,d as z,S as D}from"./StyledLabel.46abfa46.js";import{u as N,b as B,s as Q}from"./store.bebd0824.js";import{I as U}from"./ErrorWarning.3038fd9c.js";function g(){return g=Object.assign||function(a){for(var c=1;c<arguments.length;c++){var r=arguments[c];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},g.apply(this,arguments)}function V(a,c){if(a==null)return{};var r={},t=Object.keys(a),e,o;for(o=0;o<t.length;o++)e=t[o],!(c.indexOf(e)>=0)&&(r[e]=a[e]);return r}var W=["spacing","children"],ce=T(function(a,c){var r=G("Switch",a),t=H(a),e=t.spacing,o=e===void 0?"0.5rem":e,f=t.children,u=V(t,W),d=O(u),h=d.state,s=d.getInputProps,S=d.getCheckboxProps,v=d.getRootProps,_=d.getLabelProps,k=i.exports.useMemo(function(){return g({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},r.container)},[r.container]),w=i.exports.useMemo(function(){return g({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},r.track)},[r.track]),p=i.exports.useMemo(function(){return g({userSelect:"none",marginStart:o},r.label)},[o,r.label]);return i.exports.createElement(y.label,g({},v(),{className:M("chakra-switch",a.className),__css:k}),i.exports.createElement("input",g({className:"chakra-switch__input"},s({},c))),i.exports.createElement(y.span,g({},S(),{className:"chakra-switch__track",__css:w}),i.exports.createElement(y.span,{__css:r.thumb,className:"chakra-switch__thumb","data-checked":$(h.isChecked),"data-hover":$(h.isHovered)})),f&&i.exports.createElement(y.span,g({className:"chakra-switch__label"},_(),{__css:p}),f))});function J({data:a}){const c=N(B),r=N(Q),t=e=>{c.setStack(e),r.setOption("actualizar")};return l(P,{children:l(X,{children:Array.isArray(a)?a==null?void 0:a.map((e,o)=>l("ul",{className:"list",onClick:()=>t(e),children:n("li",{className:e!=null&&e.enabled?"list__item":"disabled",children:[n("p",{children:[" ",(e==null?void 0:e.name)&&`nombre: ${e==null?void 0:e.name}`]}),n("p",{children:[" ",(e==null?void 0:e.ci)&&`dni: ${e==null?void 0:e.ci}`]}),n("p",{children:[" ",(e==null?void 0:e.tome)&&`tomo: ${e==null?void 0:e.tome}`]}),n("p",{children:[" ",(e==null?void 0:e.folio)&&`folio: ${e==null?void 0:e.folio}`]}),n("p",{children:[" ",(e==null?void 0:e.email)&&`correo: ${e==null?void 0:e.email}`," "]}),n("p",{children:[" ",(e==null?void 0:e.price)&&`precio: ${e==null?void 0:e.price}`]}),n("p",{children:[" ",(e==null?void 0:e.range)&&`rango: ${e==null?void 0:e.range}`]}),n("p",{children:[" ",(e==null?void 0:e.phone)&&`tel: ${e==null?void 0:e.phone}`]}),n("p",{children:[" ",(e==null?void 0:e.enabled)==="true"?"Estado: habilitado":"Estado: desabilitado"]})]})},o)):l("p",{className:"default-message",children:"no data available"})})})}const X=b.div`
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
`;function ie(a){var h,s;const[c,r]=i.exports.useState(""),{url:t,queryKey:e}=a,{data:o,isLoading:f,isError:u}=L(e,()=>z(t)),d=((s=(h=o==null?void 0:o.response)==null?void 0:h.data)==null?void 0:s.message)||(o==null?void 0:o.message);return q.useEffect(()=>{I(d,r)},[d]),n(Y,{children:[u&&l("div",{children:"An error ocurred..."}),f&&n("div",{children:[l(E,{size:"sm",color:"white"}),l(A,{color:"white",children:"Loading..."})]}),l(J,{data:o==null?void 0:o.result}),c&&l(j,{message:c})]})}const Y=b.div`
  width: 100%;
`,Z=({data:a})=>{const c=a==null?void 0:a.map(p=>p.name),[r,t]=i.exports.useState([""]),[e,o]=i.exports.useState(0),[f,u]=i.exports.useState(!1),[d,h]=i.exports.useState(""),[s,S]=i.exports.useState(),v=p=>{const x=p.target.value.toLowerCase();if(h(x),x.length>1){const C=c==null?void 0:c.filter(R=>R.toLowerCase().indexOf(x)>-1);t(C),u(!0)}else u(!1)},_=p=>{t([]),h(p.target.innerHTML),u(!1)},k=p=>{if(p.keyCode===38){if(e===0)return;o(e-1)}else if(p.keyCode===40){if(e-1===r.length)return;o(e+1)}else p.keyCode===13&&(h(r[e]),o(0),u(!1))},w=()=>l("ul",{className:"suggestions",children:r==null?void 0:r.map((p,x)=>l("li",{className:x===e?"active":"",onClick:C=>_(C),style:{listStyleType:"none",cursor:"pointer"},children:p},x))});return i.exports.useEffect(()=>{S(a==null?void 0:a.find(p=>p.name===d))},[d]),n(m,{children:[l(U,{className:"searchbox__input",type:"text",value:d,variant:"flushed",onChange:v,onKeyDown:k}),f&&l(w,{}),!f&&l(ee,{children:l("ul",{className:"list",children:n("li",{className:"list__item",children:[n("span",{children:[" ",(s==null?void 0:s.name)&&`Nombre: ${s==null?void 0:s.name}`]}),n("span",{children:[" ",(s==null?void 0:s.ci)&&`Carnet: ${s==null?void 0:s.ci}`]}),n("span",{children:[" ",(s==null?void 0:s.tome)&&`Tomo: ${s==null?void 0:s.tome}`]}),n("span",{children:[" ",(s==null?void 0:s.folio)&&`Folio: ${s==null?void 0:s.folio}`]}),n("span",{children:[" ",(s==null?void 0:s.email)&&`Correo: ${s==null?void 0:s.email}`," "]}),n("span",{children:[" ",(s==null?void 0:s.price)&&`Precio: ${s==null?void 0:s.price}`]}),n("span",{children:[" ",(s==null?void 0:s.range)&&`Rango: ${s==null?void 0:s.range}`]}),n("span",{children:[" ",(s==null?void 0:s.phone)&&`Tel: ${s==null?void 0:s.phone}`]}),n("span",{children:[" ",(s==null?void 0:s.address)&&`domicilio: ${s==null?void 0:s.address}`]}),n("span",{children:[" ",(s==null?void 0:s.enabled)&&(s==null?void 0:s.enabled)===!0&&"Estado: habilitado"]})]})})})]})},m=b.div``,ee=b.div`
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
`;function de(a){var h,s;const{allnames:c}=a,[r,t]=i.exports.useState(""),{data:e,isError:o,isLoading:f}=L("all-names",()=>z(c)),u=e==null?void 0:e.result,d=((s=(h=e==null?void 0:e.response)==null?void 0:h.data)==null?void 0:s.message)||(e==null?void 0:e.message);return i.exports.useEffect(()=>{I(d,t)},[d]),l(P,{children:l(F,{p:"1em",children:n(K,{children:[l(D,{m:"0.5em 0",color:"#009966",children:"Utilitario de b\xFAsqueda por nombre."}),l(Z,{data:u}),n(se,{children:[o&&l("div",{children:"An error ocurred..."}),f&&n("div",{children:[l(E,{size:"sm",color:"white"}),l(A,{color:"white",children:"Loading..."})]}),r&&l(j,{message:r})]})]})})})}const se=b.div`
  width: 100%;
`;export{J as A,ie as G,ce as S,de as a};

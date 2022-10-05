var Le=Object.defineProperty,Me=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var xe=(a,e,t)=>e in a?Le(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,B=(a,e)=>{for(var t in e||(e={}))Oe.call(e,t)&&xe(a,t,e[t]);if(ge)for(var t of ge(e))Ge.call(e,t)&&xe(a,t,e[t]);return a},re=(a,e)=>Me(a,Be(e));import{e as Te,h as Se,r as m,c as $e,d as ne,o as He,z as Ke,ad as Ue,ak as Ve,Z as _e,an as We,t as Ze,af as ie,E as F,l as N,Q as se,ai as Qe,al as Ye,aj as we,a as v,F as M,j as r,s as Q,H as le,ao as Ce,a2 as Je,L as Xe}from"./index.84145a61.js";import{t as ea}from"./constants.c1eecf01.js";import{C as aa}from"./Toast.399d4852.js";import{S as ra,D as ta}from"./SubmitButton.d37232a3.js";import{S as D,c as na,i as $,g as te,f as oa,b as ia}from"./StyledLabel.97b52d23.js";import{T as Y,I as J,E as O}from"./ErrorWarning.4beaff6e.js";import{d as sa,u as la,a as da}from"./index.esm.d64a2720.js";import{u as Z,S as ua}from"./StatusHandler.4fa71a43.js";import{S as Re}from"./chakra-ui-select.esm.7d7cae85.js";import{C as ca}from"./chakra-ui-checkbox.esm.477918d5.js";function oe(a,e){if(a==null)return{};var t={},n=Object.keys(a),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=a[i]);return t}function g(){return g=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},g.apply(this,arguments)}var ma=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];function ha(a){a===void 0&&(a={});var e=a,t=e.onChange,n=e.value,i=e.defaultValue,o=e.name,C=e.isDisabled,l=e.isFocusable,y=e.isNative,P=oe(e,ma),f=m.exports.useState(i||""),s=f[0],_=f[1],k=we(n,s),w=k[0],x=k[1],R=m.exports.useRef(null),d=m.exports.useCallback(function(){var c=R.current;if(!!c){var p="input:not(:disabled):checked",b=c.querySelector(p);if(b){b.focus();return}p="input:not(:disabled)";var j=c.querySelector(p);j==null||j.focus()}},[]),A=_e(void 0,"radio"),I=o||A,u=m.exports.useCallback(function(c){var p=We(c)?c.target.value:c;w||_(p),t==null||t(String(p))},[t,w]),E=m.exports.useCallback(function(c,p){return c===void 0&&(c={}),p===void 0&&(p=null),g({},c,{ref:Ze(p,R),role:"radiogroup"})},[]),q=m.exports.useCallback(function(c,p){var b;c===void 0&&(c={}),p===void 0&&(p=null);var j=y?"checked":"isChecked";return g({},c,(b={ref:p,name:I},b[j]=x!=null?c.value===x:void 0,b.onChange=u,b["data-radiogroup"]=!0,b))},[y,I,u,x]);return{getRootProps:E,getRadioProps:q,name:I,ref:R,focus:d,setValue:_,value:x,onChange:u,isDisabled:C,isFocusable:l,htmlProps:P}}var pa=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],Ie=Te({name:"RadioGroupContext",strict:!1}),va=Ie[0],Fe=Ie[1],fa=Se(function(a,e){var t=a.colorScheme,n=a.size,i=a.variant,o=a.children,C=a.className,l=a.isDisabled,y=a.isFocusable,P=oe(a,pa),f=ha(P),s=f.value,_=f.onChange,k=f.getRootProps,w=f.name,x=f.htmlProps,R=m.exports.useMemo(function(){return{name:w,size:n,onChange:_,colorScheme:t,value:s,variant:i,isDisabled:l,isFocusable:y}},[w,n,_,t,s,i,l,y]),d=k(x,e),A=$e("chakra-radio-group",C);return m.exports.createElement(va,{value:R},m.exports.createElement(ne.div,g({},d,{className:A}),o))}),ba=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"];function ga(a){a===void 0&&(a={});var e=a,t=e.defaultChecked,n=e.isChecked,i=e.isFocusable,o=e.isDisabled,C=e.isReadOnly,l=e.isRequired,y=e.onChange,P=e.isInvalid,f=e.name,s=e.value,_=e.id,k=e["data-radiogroup"],w=e["aria-describedby"],x=oe(e,ba),R=_e(void 0,"radio"),d=sa(),A=Fe(),I=!!A||!!k,u=!!d,E=u&&!I?d.id:R;E=_!=null?_:E;var q=o!=null?o:d==null?void 0:d.isDisabled,c=C!=null?C:d==null?void 0:d.isReadOnly,p=l!=null?l:d==null?void 0:d.isRequired,b=P!=null?P:d==null?void 0:d.isInvalid,j=ie(),K=j[0],U=j[1],X=ie(),V=X[0],T=X[1],ee=ie(),W=ee[0],z=ee[1],ae=m.exports.useState(Boolean(t)),De=ae[0],Ae=ae[1],ue=we(n,De),ce=ue[0],G=ue[1],me=m.exports.useCallback(function(h){if(c||q){h.preventDefault();return}ce||Ae(h.target.checked),y==null||y(h)},[ce,q,c,y]),he=m.exports.useCallback(function(h){h.key===" "&&z.on()},[z]),pe=m.exports.useCallback(function(h){h.key===" "&&z.off()},[z]),Ee=m.exports.useCallback(function(h,S){return h===void 0&&(h={}),S===void 0&&(S=null),g({},h,{ref:S,"data-active":F(W),"data-hover":F(V),"data-disabled":F(q),"data-invalid":F(b),"data-checked":F(G),"data-focus":F(K),"data-readonly":F(c),"aria-hidden":!0,onMouseDown:N(h.onMouseDown,z.on),onMouseUp:N(h.onMouseUp,z.off),onMouseEnter:N(h.onMouseEnter,T.on),onMouseLeave:N(h.onMouseLeave,T.off)})},[W,V,q,b,G,K,c,z.on,z.off,T.on,T.off]),ve=d!=null?d:{},fe=ve.onFocus,be=ve.onBlur,qe=m.exports.useCallback(function(h,S){h===void 0&&(h={}),S===void 0&&(S=null);var L=q&&!i;return g({},h,{id:E,ref:S,type:"radio",name:f,value:s,onChange:N(h.onChange,me),onBlur:N(be,h.onBlur,U.off),onFocus:N(fe,h.onFocus,U.on),onKeyDown:N(h.onKeyDown,he),onKeyUp:N(h.onKeyUp,pe),checked:G,disabled:L,readOnly:c,required:p,"aria-invalid":se(b),"aria-disabled":se(L),"aria-required":se(p),"data-readonly":F(c),"aria-describedby":w,style:Qe})},[q,i,E,f,s,me,be,U,fe,he,pe,G,c,p,b,w]),Ne=function(S,L){return S===void 0&&(S={}),L===void 0&&(L=null),g({},S,{ref:L,onMouseDown:N(S.onMouseDown,ye),onTouchStart:N(S.onTouchStart,ye),"data-disabled":F(q),"data-checked":F(G),"data-invalid":F(b)})},je=function(S,L){return L===void 0&&(L=null),g({},S,{ref:L,"data-disabled":F(q),"data-checked":F(G),"data-invalid":F(b)})},ze={isInvalid:b,isFocused:K,isChecked:G,isActive:W,isHovered:V,isDisabled:q,isReadOnly:c,isRequired:p};return{state:ze,getCheckboxProps:Ee,getInputProps:qe,getLabelProps:Ne,getRootProps:je,htmlProps:x}}function ye(a){a.preventDefault(),a.stopPropagation()}var xa=["spacing","children","isDisabled","isFocusable","inputProps"],Pe=Se(function(a,e){var t,n=Fe(),i=a.onChange,o=a.value,C=He("Radio",g({},n,a)),l=Ke(a),y=l.spacing,P=y===void 0?"0.5rem":y,f=l.children,s=l.isDisabled,_=s===void 0?n==null?void 0:n.isDisabled:s,k=l.isFocusable,w=k===void 0?n==null?void 0:n.isFocusable:k,x=l.inputProps,R=oe(l,xa),d=a.isChecked;(n==null?void 0:n.value)!=null&&o!=null&&(d=n.value===o);var A=i;n!=null&&n.onChange&&o!=null&&(A=Ue(n.onChange,i));var I=(t=a==null?void 0:a.name)!=null?t:n==null?void 0:n.name,u=ga(g({},R,{isChecked:d,isFocusable:w,isDisabled:_,onChange:A,name:I})),E=u.getInputProps,q=u.getCheckboxProps,c=u.getLabelProps,p=u.getRootProps,b=u.htmlProps,j=Ve(b,Ye),K=j[0],U=j[1],X=q(U),V=E(x,e),T=c(),ee=Object.assign({},K,p()),W=g({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer"},C.container),z=g({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},C.control),ae=g({userSelect:"none",marginStart:P},C.label);return m.exports.createElement(ne.label,g({className:"chakra-radio"},ee,{__css:W}),m.exports.createElement("input",g({className:"chakra-radio__input"},V)),m.exports.createElement(ne.span,g({className:"chakra-radio__control"},X,{__css:z})),f&&m.exports.createElement(ne.span,g({className:"chakra-radio__label"},T,{__css:ae}),f))});const Ca=({label:a,register:e,required:t,errors:n,defaultValue:i,info:o})=>v(M,{children:[r(Y,{label:o,hasArrow:!0,arrowSize:15,children:r(J,B({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:i},e(a,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),r(O,{label:a,errors:n,info:o})]}),ke=({label:a,register:e,required:t,errors:n,defaultValue:i,info:o})=>v(M,{children:[r(Y,{label:o,hasArrow:!0,arrowSize:15,children:r(J,B({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:i},e(a,{pattern:/^\d+$/,required:t,maxLength:4,minLength:4})))}),r(O,{label:a,errors:n,info:o})]});let H=new Date().getFullYear();const ya=new Date().getMonth()+1;H=parseInt(H.toString().substring(2,4));const Pa=({register:a,errors:e,defaultValue:t,info:n})=>v(M,{children:[r(Y,{label:n,hasArrow:!0,arrowSize:15,children:r(J,B({size:"sm",type:"number",cursor:"pointer",variant:"flushed",defaultValue:t},a("ci",{required:!0,validate:{isOlder:i=>H-parseInt(i.substring(0,2))==18&&ya>parseInt(i.substring(2,4))||H>parseInt(i.substring(0,2))&&H-parseInt(i.substring(0,2))>18||H<parseInt(i.substring(0,2))&&parseInt(i.substring(0,2))<99,min_month:i=>parseInt(i.substring(2,4))>=1,max_month:i=>parseInt(i.substring(2,4))<=12,min_day:i=>parseInt(i.substring(4,6))>=1,max_day:i=>parseInt(i.substring(4,6))<=31},minLength:11,maxLength:11})))}),r(O,{label:"ci",errors:e,info:n})]}),ka=({register:a,errors:e,defaultValue:t,info:n})=>v(M,{children:[r(Y,{label:n,hasArrow:!0,arrowSize:15,children:r(J,B({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:t},a("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),r(O,{label:"email",errors:e,info:n})]}),Sa=({label:a,register:e,required:t,errors:n,defaultValue:i,info:o})=>v(M,{children:[r(Y,{label:o,hasArrow:!0,arrowSize:15,children:r(J,B({size:"sm",type:"text",cursor:"pointer",variant:"flushed",defaultValue:i},e(a,{pattern:/^[a-zA-Z\u00C0-\u017F\s]+$/,required:t})))}),r(O,{label:a,errors:n,info:o})]});function de(a){const{list:e,register:t,label:n,required:i}=a;return r(M,{children:r(Re,re(B({},t(n,{required:i})),{placeholder:"Select option",size:"xm",color:"#000000",children:Array.isArray(e)&&(e==null?void 0:e.map((o,C)=>r("option",{value:o.id,children:o.email&&o.email||o.name&&o.name},C)))}))})}function _a(a){var x,R,d,A,I;const{list:e,register1:t,label:n,required:i}=a,[o,C]=m.exports.useState(""),[l,y]=m.exports.useState(""),[P,f]=m.exports.useState(!1),{data:s,refetch:_}=Z("agent-id",()=>na(o,l)),k=u=>{y(u.target.value)},w=()=>{f(u=>!u)};return m.exports.useEffect(()=>{C("representantes"),_()},[l]),v(wa,{children:[r(Re,re(B({},t(n,{required:i,onChange(u){k(u)}})),{placeholder:"Select option",size:"xm",color:"#000000",children:Array.isArray(e)&&(e==null?void 0:e.map((u,E)=>r("option",{value:u.id,children:u.email&&u.email||u.name&&u.name},u.id)))})),r("div",{className:"written-label",onClick:w,children:v(Ia,{size:"12px",upper:!0,color:"#009966",m:"2em  0",center:!0,children:[P?"Ocultar":"Mostrar"," informaci\xF3n del representante"]})}),P&&l&&v(Ra,{children:[v("p",{children:["Nombre: ",(x=s==null?void 0:s.result)==null?void 0:x.name]}),v("p",{children:["Carnet: ",(R=s==null?void 0:s.result)==null?void 0:R.ci]}),v("p",{children:["Tomo: ",(d=s==null?void 0:s.result)==null?void 0:d.tome]}),v("p",{children:["Folio: ",(A=s==null?void 0:s.result)==null?void 0:A.folio]}),v("p",{children:["Tel: ",(I=s==null?void 0:s.result)==null?void 0:I.phone]})]})]})}const wa=Q.div`
.written-label:hover {
    filter: drop-shadow(0 0 2em #009966);
    background-color: #000000;
    border-radius: 12px;
  }
`,Ra=Q.div`
  box-shadow: 1px 1px 10px black;
  border-radius: 12px;
  padding: 1em;
  color: #555555;
  font-weight: bolder;
  font-size: 14px;
`,Ia=Q(D)`
   border: 1px solid #009966;
   padding: 1em;
   border-radius: 12px;
`;function Fa(){var u;const[a,e]=m.exports.useState(""),[t,n]=m.exports.useState("juridica"),{watch:i,register:o,handleSubmit:C,formState:{errors:l}}=la(),y="/entidades-registro/enabled/true",{data:P}=Z("entities-all",()=>te(y)),f="/representantes/enabled/true",{data:s}=Z("agents-all",()=>te(f)),_="/organismos/enabled/true",{data:k}=Z("org-all",()=>te(_)),w="/empresas-instituciones/",{data:x}=Z("companies",()=>te(w)),R="",d=da(E=>oa(R,E)),A=E=>console.log(E),I=(u=d==null?void 0:d.data)==null?void 0:u.message;return m.exports.useEffect(()=>{I&&e(I)},[I]),r(M,{children:r(Da,{children:r("form",{onSubmit:C(A),children:v(le,{direction:"column",p:"1em",children:[r(D,{color:"#009966",upper:!0,center:!0,m:"1em 0 2em 0",children:"Generaci\xF3n"}),r(D,{m:"1em 0 0 0",children:"N\xFAmero de carnet de identidad"}),r(Pa,{register:o,errors:l,info:$.ci}),r(D,{m:"1em 0 0 0",children:"Tomo de documento"}),r(ke,{label:"tome",register:o,errors:l,info:$.tome,required:!0}),r(D,{m:"1em 0 0 0",children:"Folio de documento"}),r(ke,{label:"folio",register:o,errors:l,info:$.folio,required:!0}),r(D,{m:"1em 0 0 0",children:"Correo electr\xF3nico"}),r(ka,{register:o,errors:l,info:$.email}),r(D,{m:"1em 0 0 0",children:"Tel\xE9fono"}),r(Ca,{required:!0,label:"phone",register:o,errors:l,info:$.tel}),r(fa,{onChange:n,value:t,w:"100%",children:r(Ce,{p:"2em 0",w:"100%",children:v(le,{justifyContent:"flex-start",children:[r(Pe,{value:"juridica",colorScheme:"red",isChecked:t=="juridica",children:r("b",{children:"Persona jur\xEDdica"})}),r(Pe,{m:"0 0.5em",value:"natural",colorScheme:"red",isChecked:t=="natural",children:r("b",{children:"Persona Natural"})})]})})}),t=="juridica"&&v(M,{children:[r(D,{m:"1em 0",children:"Organismos"}),r(de,{list:k==null?void 0:k.result,label:"organismos",register:o,required:!0}),r(O,{label:"organismos",errors:l,m:"0 2em"}),r(D,{m:"1em 0",children:"Empresas o Instituci\xF3n"}),r(de,{list:x==null?void 0:x.result,label:"empresas",register:o,required:!0}),r(O,{label:"empresas",errors:l,m:"0 2em"}),r(D,{m:"1em 0",children:"Cargo"}),r(Sa,{label:"cargo",register:o,errors:l,info:$.tome}),r(D,{m:"1em 0",children:"Representante"}),r(_a,{register1:o,list:s==null?void 0:s.result,label:"representante",required:!0}),r(O,{label:"representante",errors:l,m:"0 2em"})]}),t=="natural"&&v(Ce,{children:[r(D,{m:"1em 0",color:"#009966",children:"Entidad relacionada"}),r(de,{list:P==null?void 0:P.result,label:"entidades",register:o,required:!0}),r(O,{label:"entidades",errors:l,m:"0 2em"})]}),t=="natural"&&v(M,{children:[r(le,{justifyContent:"flex-start",children:r(ca,re(B({m:"0 0.7em",colorScheme:"red"},o("condiciones")),{children:r(D,{m:"1em 0",children:"Acepto los terminos y condiciones."})}))}),r(Je,{p:"2em",children:r(Xe,{to:"/terminos",children:r(D,{color:"#372381",children:"Lea t\xE9rminos y condiciones"})})})]}),r(ra,{buttonstate:d==null?void 0:d.isLoading}),a&&r(ua,{message:a})]})})})})}const Da=Q.div`
  box-shadow: 1px 1px 10px black;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 2em 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 3em;
  }
  .label__name {
    color: #777777;
    white-space: nowrap;
  }
  .agent-info {
    display: none;
  }
  .agent-info:hover {
    display: block;
  }
`;function $a(){const a=localStorage.getItem("jwt");return m.exports.useEffect(()=>{a&&(ia.defaults.headers.common.jwt=a)},[]),r(M,{children:v(Aa,{children:[r(aa,{linear:ea.green,color:"#ffffff"}),r(ta,{children:r(Fa,{})})]})})}const Aa=Q.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;export{$a as default};

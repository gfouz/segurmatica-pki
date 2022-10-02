var w=Object.defineProperty,k=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var _=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&_(e,n,t[n]);if(g)for(var n of g(t))j.call(t,n)&&_(e,n,t[n]);return e},x=(e,t)=>k(e,$(t));import{c as A}from"./index.esm.b0a48d8a.js";import{h as o,o as R,z as O,c as u,r as c,d as f,k as S,s as C,j as E}from"./index.197da568.js";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function p(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,l;for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var L=["htmlSize"],P=o(function(e,t){var n=e.htmlSize,a=p(e,L),r=R("Input",a),l=O(a),d=A(l),m=u("chakra-input",e.className);return c.exports.createElement(f.input,i({size:n},d,{__css:r.field,ref:t,className:m}))});P.id="Input";var T=["placement"],W={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},F=f("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),b=o(function(e,t){var n,a=e.placement,r=a===void 0?"left":a,l=p(e,T),d=(n=W[r])!=null?n:{},m=S();return c.exports.createElement(F,i({ref:t},l,{__css:i({},m.addon,d)}))}),K=o(function(e,t){return c.exports.createElement(b,i({ref:t,placement:"left"},e,{className:u("chakra-input__left-addon",e.className)}))});K.id="InputLeftAddon";var M=o(function(e,t){return c.exports.createElement(b,i({ref:t,placement:"right"},e,{className:u("chakra-input__right-addon",e.className)}))});M.id="InputRightAddon";var q=["placement"],B=["className"],D=["className"],G=f("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),h=o(function(e,t){var n,a,r,l=e.placement,d=l===void 0?"left":l,m=p(e,q),v=S(),s=v.field,I=d==="left"?"insetStart":"insetEnd",N=i((r={},r[I]="0",r.width=(n=s==null?void 0:s.height)!=null?n:s==null?void 0:s.h,r.height=(a=s==null?void 0:s.height)!=null?a:s==null?void 0:s.h,r.fontSize=s==null?void 0:s.fontSize,r),v.element);return c.exports.createElement(G,i({ref:t,__css:N},m))});h.id="InputElement";var H=o(function(e,t){var n=e.className,a=p(e,B),r=u("chakra-input__left-element",n);return c.exports.createElement(h,i({ref:t,placement:"left",className:r},a))});H.id="InputLeftElement";var J=o(function(e,t){var n=e.className,a=p(e,D),r=u("chakra-input__right-element",n);return c.exports.createElement(h,i({ref:t,placement:"right",className:r},a))});J.id="InputRightElement";function Y(e){const{errors:t,label:n,info:a}=e;return E(Q,x(y({},e),{children:(t==null?void 0:t.hasOwnProperty(n))&&E("p",{children:a})}))}const Q=C.div`
  width: 100%;
  color: #c40550;
  font-weight: bolder;
  font-style: italic;
  font-size: 10px;
  text-transform: uppercase;
  text-align: ${e=>e.align||"center"};
  padding: ${e=>e.p};
  margin: ${e=>e.m};

  p {
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;export{Y as E,P as I};

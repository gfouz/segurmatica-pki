import{r as h}from"./index.84145a61.js";const V=Symbol(),J=Symbol(),U=Symbol(),_=Object.getPrototypeOf,k=new WeakMap,C=e=>e&&(k.has(e)?k.get(e):_(e)===Object.prototype||_(e)===Array.prototype),D=e=>typeof e=="object"&&e!==null,Q=(e,n)=>{let c=!1;const s=(t,r,f)=>{if(!c){let S=t.a.get(e);S||(S=new Set,t.a.set(e,S)),f&&S.has(V)||S.add(r)}},u={f:n,get(t,r){return r===U?e:(s(this,r),H(t[r],this.a,this.c))},has(t,r){return r===J?(c=!0,this.a.delete(e),!0):(s(this,r),r in t)},getOwnPropertyDescriptor(t,r){return s(this,r,!0),Object.getOwnPropertyDescriptor(t,r)},ownKeys(t){return s(this,V),Reflect.ownKeys(t)}};return n&&(u.set=u.deleteProperty=()=>!1),u},x=e=>e[U]||e,H=(e,n,c)=>{if(!C(e))return e;const s=x(e),u=(r=>Object.isFrozen(r)||Object.values(Object.getOwnPropertyDescriptors(r)).some(f=>!f.writable))(s);let t=c&&c.get(s);return t&&t.f===u||(t=Q(s,u),t.p=new Proxy(u?(r=>{if(Array.isArray(r))return Array.from(r);const f=Object.getOwnPropertyDescriptors(r);return Object.values(f).forEach(S=>{S.configurable=!0}),Object.create(_(r),f)})(s):s,t),c&&c.set(s,t)),t.a=n,t.c=c,t.p},X=(e,n)=>{const c=Reflect.ownKeys(e),s=Reflect.ownKeys(n);return c.length!==s.length||c.some((u,t)=>u!==s[t])},q=(e,n,c,s)=>{if(Object.is(e,n))return!1;if(!D(e)||!D(n))return!0;const u=c.get(x(e));if(!u)return!0;if(s){const r=s.get(e);if(r&&r.n===n)return r.g;s.set(e,{n,g:!1})}let t=null;for(const r of u){const f=r===V?X(e,n):q(e[r],n[r],c,s);if(f!==!0&&f!==!1||(t=f),t)break}return t===null&&(t=!0),s&&s.set(e,{n,g:t}),t},Y=e=>C(e)&&e[U]||null,W=(e,n)=>{k.set(e,n)},Z=(e,n)=>{const c=[],s=new WeakSet,u=(t,r)=>{if(s.has(t))return;D(t)&&s.add(t);const f=D(t)&&n.get(x(t));f?f.forEach(S=>{u(t[S],r?[...r,S]:[S])}):r&&c.push(r)};return u(e),c};var z={exports:{}},F={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=h.exports;function ee(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var te=typeof Object.is=="function"?Object.is:ee,ne=m.useState,re=m.useEffect,se=m.useLayoutEffect,oe=m.useDebugValue;function ce(e,n){var c=n(),s=ne({inst:{value:c,getSnapshot:n}}),u=s[0].inst,t=s[1];return se(function(){u.value=c,u.getSnapshot=n,j(u)&&t({inst:u})},[e,c,n]),re(function(){return j(u)&&t({inst:u}),e(function(){j(u)&&t({inst:u})})},[e]),oe(c),c}function j(e){var n=e.getSnapshot;e=e.value;try{var c=n();return!te(e,c)}catch{return!0}}function ue(e,n){return n()}var ie=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?ue:ce;F.useSyncExternalStore=m.useSyncExternalStore!==void 0?m.useSyncExternalStore:ie;z.exports=F;var ae=z.exports;const fe=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("VERSION"):Symbol(),y=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("LISTENERS"):Symbol(),A=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("SNAPSHOT"):Symbol(),le=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("HANDLER"):Symbol(),b=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("PROMISE_RESULT"):Symbol(),I=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("PROMISE_ERROR"):Symbol(),G=new WeakSet,v=e=>typeof e=="object"&&e!==null,pe=e=>v(e)&&!G.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),N=new WeakMap;let T=1;const $=new WeakMap;function L(e={}){if(!v(e))throw new Error("object required");const n=N.get(e);if(n)return n;let c=T;const s=new Set,u=(a,o=++T)=>{c!==o&&(c=o,s.forEach(i=>i(a,o)))},t=new Map,r=a=>{let o=t.get(a);return o||(o=(i,l)=>{const p=[...i];p[1]=[a,...p[1]],u(p,l)},t.set(a,o)),o},f=a=>{const o=t.get(a);return t.delete(a),o},S=(a,o)=>{const i=$.get(o);if((i==null?void 0:i[0])===c)return i[1];const l=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a));return W(l,!0),$.set(o,[c,l]),Reflect.ownKeys(a).forEach(p=>{const d=Reflect.get(a,p,o);if(G.has(d))W(d,!1),l[p]=d;else if(d instanceof Promise)if(b in d)l[p]=d[b];else{const O=d[I]||d;Object.defineProperty(l,p,{get(){if(b in d)return d[b];throw O}})}else d!=null&&d[y]?l[p]=d[A]:l[p]=d}),Object.freeze(l),l},R=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e)),P={get(a,o,i){return o===fe?c:o===y?s:o===A?S(a,i):o===le?P:Reflect.get(a,o,i)},deleteProperty(a,o){const i=Reflect.get(a,o),l=i==null?void 0:i[y];l&&l.delete(f(o));const p=Reflect.deleteProperty(a,o);return p&&u(["delete",[o],i]),p},is:Object.is,canProxy:pe,set(a,o,i,l){var p;const d=Reflect.has(a,o),O=Reflect.get(a,o,l);if(d&&this.is(O,i))return!0;const B=O==null?void 0:O[y];B&&B.delete(f(o)),v(i)&&(i=Y(i)||i);let E;return(p=Object.getOwnPropertyDescriptor(a,o))!=null&&p.set?E=i:i instanceof Promise?E=i.then(g=>(E[b]=g,u(["resolve",[o],g]),g)).catch(g=>{E[I]=g,u(["reject",[o],g])}):i!=null&&i[y]?(E=i,E[y].add(r(o))):this.canProxy(i)?(E=L(i),E[y].add(r(o))):E=i,Reflect.set(a,o,E,l),u(["set",[o],i,O]),!0}},M=new Proxy(R,P);return N.set(e,M),Reflect.ownKeys(e).forEach(a=>{const o=Object.getOwnPropertyDescriptor(e,a);o.get||o.set?Object.defineProperty(R,a,o):M[a]=e[a]}),M}function de(e,n,c){({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[y])&&console.warn("Please use proxy object");let s;const u=[],t=r=>{if(u.push(r),c){n(u.splice(0));return}s||(s=Promise.resolve().then(()=>{s=void 0,n(u.splice(0))}))};return e[y].add(t),()=>{e[y].delete(t)}}function K(e){return({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[A])&&console.warn("Please use proxy object"),e[A]}const{useSyncExternalStore:Se}=ae,Ee=(e,n)=>{const c=h.exports.useRef();h.exports.useEffect(()=>{c.current=Z(e,n)}),h.exports.useDebugValue(c.current)};function Oe(e,n){const c=n==null?void 0:n.sync,s=h.exports.useRef(),u=h.exports.useRef();let t=!0;const r=Se(h.exports.useCallback(R=>{const P=de(e,R,c);return R(),P},[e,c]),()=>{const R=K(e);try{if(!t&&s.current&&u.current&&!q(s.current,R,u.current,new WeakMap))return s.current}catch{}return R},()=>K(e));t=!1;const f=new WeakMap;h.exports.useEffect(()=>{s.current=r,u.current=f}),({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Ee(r,f);const S=h.exports.useMemo(()=>new WeakMap,[]);return H(r,f,S)}const ye=L({stack:{},setStack:e=>Object.assign(ye.stack,e)}),he=L({opt:"mostrar",setOption:e=>he.opt=e}),w=L({st:!1,setTrue:()=>w.st=!0,setFalse:()=>w.st=!1,reverse:()=>w.st=!w.st});export{w as a,ye as b,he as s,Oe as u};

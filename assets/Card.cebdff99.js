var te=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var q=(e,n,r)=>n in e?te(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,w=(e,n)=>{for(var r in n||(n={}))se.call(n,r)&&q(e,r,n[r]);if(D)for(var r of D(n))ie.call(n,r)&&q(e,r,n[r]);return e},F=(e,n)=>re(e,ne(n));import{b as ae,_ as H,V as oe,X as V,Y as X,Z as ce,$ as ue,a0 as K,a1 as W,a2 as le,a3 as de,O as I,Q as he,R as E,U as fe,a4 as pe,r as p,s as b,u as ve,a as R,j as c,F as B,G as me,H as ge,v as T}from"./index.2ac2cfd3.js";import{s as ye,a as be}from"./index.esm.9faa638d.js";import{u as Q,s as z,a as P}from"./store.d275f12d.js";var Re=function(e){ae(n,e);function n(i,s){var t;return t=e.call(this)||this,t.client=i,t.options=s,t.trackedProps=[],t.selectError=null,t.bindMethods(),t.setOptions(s),t}var r=n.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),G(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return U(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return U(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(s,t){var o=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(s),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var l=this.hasListeners();l&&Y(this.currentQuery,a,this.options,o)&&this.executeFetch(),this.updateResult(t),l&&(this.currentQuery!==a||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();l&&(this.currentQuery!==a||this.options.enabled!==o.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},r.getOptimisticResult=function(s){var t=this.client.defaultQueryObserverOptions(s),o=this.client.getQueryCache().build(this.client,t);return this.createResult(o,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(s,t){var o=this,a={},l=function(h){o.trackedProps.includes(h)||o.trackedProps.push(h)};return Object.keys(s).forEach(function(u){Object.defineProperty(a,u,{configurable:!1,enumerable:!0,get:function(){return l(u),s[u]}})}),(t.useErrorBoundary||t.suspense)&&l("error"),a},r.getNextResult=function(s){var t=this;return new Promise(function(o,a){var l=t.subscribe(function(u){u.isFetching||(l(),u.isError&&(s==null?void 0:s.throwOnError)?a(u.error):o(u))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(s){return this.fetch(H({},s,{meta:{refetchPage:s==null?void 0:s.refetchPage}}))},r.fetchOptimistic=function(s){var t=this,o=this.client.defaultQueryObserverOptions(s),a=this.client.getQueryCache().build(this.client,o);return a.fetch().then(function(){return t.createResult(a,o)})},r.fetch=function(s){var t=this;return this.executeFetch(s).then(function(){return t.updateResult(),t.currentResult})},r.executeFetch=function(s){this.updateQuery();var t=this.currentQuery.fetch(this.options,s);return s!=null&&s.throwOnError||(t=t.catch(oe)),t},r.updateStaleTimeout=function(){var s=this;if(this.clearStaleTimeout(),!(V||this.currentResult.isStale||!X(this.options.staleTime))){var t=ce(this.currentResult.dataUpdatedAt,this.options.staleTime),o=t+1;this.staleTimeoutId=setTimeout(function(){s.currentResult.isStale||s.updateResult()},o)}},r.computeRefetchInterval=function(){var s;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(s=this.options.refetchInterval)!=null?s:!1},r.updateRefetchInterval=function(s){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=s,!(V||this.options.enabled===!1||!X(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(t.options.refetchIntervalInBackground||ue.isFocused())&&t.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(s,t){var o=this.currentQuery,a=this.options,l=this.currentResult,u=this.currentResultState,h=this.currentResultOptions,v=s!==o,g=v?s.state:this.currentQueryInitialState,x=v?this.currentResult:this.previousQueryResult,d=s.state,S=d.dataUpdatedAt,N=d.error,A=d.errorUpdatedAt,k=d.isFetching,f=d.status,M=!1,$=!1,m;if(t.optimisticResults){var j=this.hasListeners(),Z=!j&&G(s,t),J=j&&Y(s,o,t,a);(Z||J)&&(k=!0,S||(f="loading"))}if(t.keepPreviousData&&!d.dataUpdateCount&&(x==null?void 0:x.isSuccess)&&f!=="error")m=x.data,S=x.dataUpdatedAt,f=x.status,M=!0;else if(t.select&&typeof d.data!="undefined")if(l&&d.data===(u==null?void 0:u.data)&&t.select===this.selectFn)m=this.selectResult;else try{this.selectFn=t.select,m=t.select(d.data),t.structuralSharing!==!1&&(m=K(l==null?void 0:l.data,m)),this.selectResult=m,this.selectError=null}catch(C){W().error(C),this.selectError=C}else m=d.data;if(typeof t.placeholderData!="undefined"&&typeof m=="undefined"&&(f==="loading"||f==="idle")){var y;if((l==null?void 0:l.isPlaceholderData)&&t.placeholderData===(h==null?void 0:h.placeholderData))y=l.data;else if(y=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof y!="undefined")try{y=t.select(y),t.structuralSharing!==!1&&(y=K(l==null?void 0:l.data,y)),this.selectError=null}catch(C){W().error(C),this.selectError=C}typeof y!="undefined"&&(f="success",m=y,$=!0)}this.selectError&&(N=this.selectError,m=this.selectResult,A=Date.now(),f="error");var ee={status:f,isLoading:f==="loading",isSuccess:f==="success",isError:f==="error",isIdle:f==="idle",data:m,dataUpdatedAt:S,error:N,errorUpdatedAt:A,failureCount:d.fetchFailureCount,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>g.dataUpdateCount||d.errorUpdateCount>g.errorUpdateCount,isFetching:k,isRefetching:k&&f!=="loading",isLoadingError:f==="error"&&d.dataUpdatedAt===0,isPlaceholderData:$,isPreviousData:M,isRefetchError:f==="error"&&d.dataUpdatedAt!==0,isStale:L(s,t),refetch:this.refetch,remove:this.remove};return ee},r.shouldNotifyListeners=function(s,t){if(!t)return!0;var o=this.options,a=o.notifyOnChangeProps,l=o.notifyOnChangePropsExclusions;if(!a&&!l||a==="tracked"&&!this.trackedProps.length)return!0;var u=a==="tracked"?this.trackedProps:a;return Object.keys(s).some(function(h){var v=h,g=s[v]!==t[v],x=u==null?void 0:u.some(function(S){return S===h}),d=l==null?void 0:l.some(function(S){return S===h});return g&&!d&&(!u||x)})},r.updateResult=function(s){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!le(this.currentResult,t)){var o={cache:!0};(s==null?void 0:s.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,t)&&(o.listeners=!0),this.notify(H({},o,s))}},r.updateQuery=function(){var s=this.client.getQueryCache().build(this.client,this.options);if(s!==this.currentQuery){var t=this.currentQuery;this.currentQuery=s,this.currentQueryInitialState=s.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),s.addObserver(this))}},r.onQueryUpdate=function(s){var t={};s.type==="success"?t.onSuccess=!0:s.type==="error"&&!de(s.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(s){var t=this;I.batch(function(){s.onSuccess?(t.options.onSuccess==null||t.options.onSuccess(t.currentResult.data),t.options.onSettled==null||t.options.onSettled(t.currentResult.data,null)):s.onError&&(t.options.onError==null||t.options.onError(t.currentResult.error),t.options.onSettled==null||t.options.onSettled(void 0,t.currentResult.error)),s.listeners&&t.listeners.forEach(function(o){o(t.currentResult)}),s.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})})},n}(he);function xe(e,n){return n.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&n.retryOnMount===!1)}function G(e,n){return xe(e,n)||e.state.dataUpdatedAt>0&&U(e,n,n.refetchOnMount)}function U(e,n,r){if(n.enabled!==!1){var i=typeof r=="function"?r(e):r;return i==="always"||i!==!1&&L(e,n)}return!1}function Y(e,n,r,i){return r.enabled!==!1&&(e!==n||i.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&L(e,r)}function L(e,n){return e.isStaleByTime(n.staleTime)}function Se(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var we=E.createContext(Se()),Ee=function(){return E.useContext(we)};function Qe(e,n){var r=E.useRef(!1),i=E.useState(0),s=i[1],t=fe(),o=Ee(),a=t.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=I.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=I.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=I.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(o.isReset()||(a.retryOnMount=!1));var l=E.useState(function(){return new n(t,a)}),u=l[0],h=u.getOptimisticResult(a);if(E.useEffect(function(){r.current=!0,o.clearReset();var v=u.subscribe(I.batchCalls(function(){r.current&&s(function(g){return g+1})}));return u.updateResult(),function(){r.current=!1,v()}},[o,u]),E.useEffect(function(){u.setOptions(a,{listeners:!1})},[a,u]),a.suspense&&h.isLoading)throw u.fetchOptimistic(a).then(function(v){var g=v.data;a.onSuccess==null||a.onSuccess(g),a.onSettled==null||a.onSettled(g,null)}).catch(function(v){o.clearReset(),a.onError==null||a.onError(v),a.onSettled==null||a.onSettled(void 0,v)});if(h.isError&&!o.isReset()&&!h.isFetching&&ye(a.suspense,a.useErrorBoundary,[h.error,u.getCurrentQuery()]))throw h.error;return a.notifyOnChangeProps==="tracked"&&(h=u.trackResult(h,a)),h}function Xe(e,n,r){var i=pe(e,n,r);return Qe(i,Re)}function Oe(e){return p.exports.createElement("svg",w({viewBox:"0 0 192 512",width:e.width||"1em",length:e.height||"auto"},e),p.exports.createElement("path",{fill:e.color,d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}))}function Ke({children:e}){const n=ve();function r(){n(-1)}return R(Ce,{children:[c("header",{children:R("div",{className:"backwards",onClick:r,children:[c(Oe,{})," ",c("span",{children:"REGRESAR"})]})}),c("main",{children:e}),c("footer",{children:"Segurm\xE1tica"})]})}const Ce=b.div`
  border: 1px solid black;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  header {
    text-align: center;
    grid-area: header;
    color: #372381;
    font-weight: bolder;
    line-height: 60px;
  }
  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  footer {
    grid-area: footer;
    text-align: center;
    line-height: 60px;
    font-weight: bolder;
  }

  .backwards {
    position: fixed;
    top: -1em;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #000000;
    margin: 1em;
    span {
      position: relative;
      left: 1rem;
      color: #000000;
    }
  }
`;function We({form:e}){let r=Q(z).opt;const[i,s]=p.exports.useState("");return p.exports.useEffect(()=>{s(r)},[r]),c(B,{children:e&&e.map((t,o)=>i==t.option&&c(_e,{children:t.comp},o))})}const _e=b.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;
`,Ie=["ok","updated","enabled","associated","created","accepted","not-authorized","bad-request","Bad Request","Forbidden","Network Error","unprocessable","Unprocessable-data","not-found","Not Found","found by id","gotten-by-id"];function Ge({message:e}){const[n,r]=p.exports.useState("");return p.exports.useEffect(()=>{Ie.map(i=>{switch(e){case i:r(i);break;default:{r(e);break}}})},[e]),c(B,{children:c(ke,{children:c("p",{className:e,children:n})})})}const ke=b.div`
  margin: 2em;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  p {
    font-size: 0.7em;
  }
  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: #222222;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
  .enabled {
    color: #446344;
  }
`,Fe="http://localhost:5000",O=be.create({baseURL:Fe,withCredentials:!1}),Ye={size:"sm",type:"number",variant:"flushed"},Ze={size:"sm",type:"text",variant:"flushed"},Je={size:"sm",type:"text",variant:"flushed"},et={size:"sm",type:"file",variant:"flushed"};async function tt(e,n){try{const r=await O.post(e,n),{data:i}=r;return i}catch(r){return r==null?void 0:r.message}}async function rt(e,n,r){try{return(await O.put(`/${n}/${r}`,e)).data}catch(i){return i.message}}async function nt(e,n){try{return(await O.get(`/${e}/${n}`)).data}catch(r){return r.message}}async function st(e,n){try{return(await O.get(`/${e}/${n}`)).data}catch(r){return r.message}}async function it(e){try{return(await O.get(e)).data}catch(n){return n.message}}async function at(e){try{return(await O.get(e)).data}catch(n){return n}}const ot=(e,n)=>{n(e)};function ct(e){const{buttonstate:n}=e,[r,i]=p.exports.useState(!1);return p.exports.useEffect(()=>{i(n)},[n]),c(Te,{children:c(Ue,{children:r?R("div",{children:[c(me,{size:"sm"}),c(ge,{children:"Loading..."})]}):c("span",{children:"Enviar"})})})}const Te=b.div`
  button:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`,Ue=b.button`
  padding: 0.5em 1.3em;
  color: #23023f;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  margin: 2em;
  background-color: #ab8ffe;
`;function Be(e){return p.exports.createElement("svg",w({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),p.exports.createElement("path",{fill:e.color,d:"M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 00-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21.92 18.67l-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 00-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 00-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 000 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 11.001-2.701 1.35 1.35 0 01-.001 2.701z"}))}function ze(e){return p.exports.createElement("svg",w({viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto"},e),p.exports.createElement("path",{fill:e.color,d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}))}function _(e){return p.exports.createElement("svg",w({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),p.exports.createElement("path",{fill:e.color,d:"M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"}))}const Pe=b.div`
  width: 100%;
  background-color: ${e=>e.bg};
  margin: ${e=>e.margin};
  padding: ${e=>e.padding||"1em 0"};

  .nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    &__list {
      padding: 1em 0;
    }
    &__item {
      display: flex;
      padding: 0.5em;
    }
    &__item:hover {
      color: violet;
    }
    .nav__icon {
      position: relative;
      top: 2px;
      margin: 0 0.5em 0 0;
    }

    .nav__link {
      color: #222222;
      font-weight: bolder;
      font-size: 0.8em;
      text-transform: uppercase;
    }
    .nav__link:hover {
      color: green;
    }
  }

  .nav__button {
    color: #555555;
    text-transform: uppercase;
  }
  .nav__button:focus {
    color: #000000;
    font-weight: bolder;
  }

  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${e=>e.mixed&&T`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${e=>e.dark&&T`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${e=>e.column&&T`
      .nav {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    `}
`;function Le(e){const n=Q(z),r=Q(P),{setOption:i}=n,{reverse:s}=r,t=[{option:"a\xF1adir",icon:c(Be,{})},{option:"mostrar",icon:c(ze,{})},{option:"buscar",icon:c(_,{})},{option:"asociado",icon:c(_,{})},{option:"asociado habilitado",icon:c(_,{})},{option:"habilitados",icon:c(_,{})},{option:"por nombre",icon:c(_,{})}];return c(B,{children:c(Pe,F(w({},e),{children:c("div",{className:"nav",children:t.map((o,a)=>R("div",{className:"nav__item",children:[c("div",{className:"nav__icon",children:o.icon}),c("div",{children:c("button",{className:"nav__button",onClick:()=>{i(o.option),s()},children:c("a",{className:"nav__link",children:o.option})})})]},a))})}))})}function Ne(){const e=Q(P),{st:n}=e;return c(Ae,{children:c("div",{className:n?"opened":"closed",children:c(Le,{column:!0})})})}const Ae=b.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ffffff;
    transition: all 1s;
    transform: translateX(0);
    width: 60%;
    z-index: 10;
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`,Me=({st:e,reverse:n})=>c($e,{children:R("button",{onClick:()=>n(),children:[c("div",{className:e?"opened":"closed"}),c("div",{className:e?"opened":"closed"}),c("div",{className:e?"opened":"closed"})]})}),$e=b.div`
  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 200px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  .opened {
    width: 1.5rem;
    height: 0.2rem;
    background: #009966;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    :nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  .closed {
    width: 1.5rem;
    height: 0.2rem;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(0);
    }

    :nth-child(2) {
      opacity: 1;
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: rotate(0);
    }
  }
`;function ut(e){const n=Q(z),r=Q(P),{opt:i}=n,{st:s,reverse:t,setFalse:o}=r;return R(je,F(w({},e),{children:[R("header",{children:[R("h2",{className:"header__title",children:["Admin...",e.name]}),c(Me,{st:s,reverse:t})]}),c(Ne,{}),c("main",{onClick:o,children:e.children}),c("footer",{children:i})]}))}const je=b.div`
  box-shadow: 1px 1px 10px #222222;
  background-color: #ffffff;
  margin: 2em 0;
  position: relative;
  display: grid;
  min-width: 320px;
  max-width: 700px;
  min-height: 400px;
  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  header {
    grid-area: header;
    line-height: 60px;
    text-align: center;
    color: #fff4a3;
    background-color: #444444;
  }
  .header__title {
    text-transform: uppercase;
  }
  main {
    grid-area: main;
  }
  .option {
    font-size: 2em;
    font-weight: bolder;
    color: red;
  }

  footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    text-transform: uppercase;
    color: #009966;
  }
`;export{ut as C,Ke as D,We as F,Ge as S,O as a,ct as b,nt as c,ot as d,at as e,tt as f,it as g,st as h,et as i,Ye as n,rt as p,Je as r,Ze as t,Xe as u};

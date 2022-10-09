var y=Object.defineProperty,k=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(e,n,o)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,l=(e,n)=>{for(var o in n||(n={}))N.call(n,o)&&b(e,o,n[o]);if(x)for(var o of x(n))S.call(n,o)&&b(e,o,n[o]);return e},m=(e,n)=>k(e,z(n));import{s as f,r as a,j as t,F as _,v as u,a as h}from"./index.b7cccbb5.js";import{u as c,s as v,a as g}from"./store.bebd0824.js";function D({form:e}){let o=c(v).opt;const[s,d]=a.exports.useState("");return a.exports.useEffect(()=>{d(o)},[o]),t(_,{children:e&&e.map((r,i)=>s==r.option&&t(C,{children:r.comp},i))})}const C=f.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;
`;function j(e){return a.exports.createElement("svg",l({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 00-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21.92 18.67l-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 00-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 00-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 000 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 11.001-2.701 1.35 1.35 0 01-.001 2.701z"}))}function E(e){return a.exports.createElement("svg",l({viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}))}function p(e){return a.exports.createElement("svg",l({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"}))}const F=f.div`
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

  ${e=>e.mixed&&u`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${e=>e.dark&&u`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${e=>e.column&&u`
      .nav {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    `}
`;function H(e){const n=c(v),o=c(g),{setOption:s}=n,{reverse:d}=o,r=[{option:"a\xF1adir",icon:t(j,{})},{option:"mostrar",icon:t(E,{})},{option:"buscar",icon:t(p,{})},{option:"asociado",icon:t(p,{})},{option:"asociado habilitado",icon:t(p,{})},{option:"habilitados",icon:t(p,{})}];return t(_,{children:t(F,m(l({},e),{children:t("div",{className:"nav",children:r.map((i,w)=>h("div",{className:"nav__item",children:[t("div",{className:"nav__icon",children:i.icon}),t("div",{children:t("button",{className:"nav__button",onClick:()=>{s(i.option),d()},children:t("a",{className:"nav__link",children:i.option&&i.option})})})]},w))})}))})}function M(){const e=c(g),{st:n}=e;return t($,{children:t("div",{className:n?"opened":"closed",children:t(H,{column:!0})})})}const $=f.nav`
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
`,B=({st:e,reverse:n})=>t(V,{children:h("button",{onClick:()=>n(),children:[t("div",{className:e?"opened":"closed"}),t("div",{className:e?"opened":"closed"}),t("div",{className:e?"opened":"closed"})]})}),V=f.div`
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
`;function I(e){const n=c(v),o=c(g),{opt:s}=n,{st:d,reverse:r,setFalse:i}=o;return h(L,m(l({},e),{children:[h("header",{children:[h("h2",{className:"header__title",children:["Admin...",e.name]}),t(B,{st:d,reverse:r})]}),t(M,{}),t("main",{onClick:i,children:e.children}),t("footer",{children:s})]}))}const L=f.div`
  box-shadow: 1px 1px 10px #222222;
  background-color: #ffffff;
  
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
    color: #999999;
  }
`;export{I as C,D as F};

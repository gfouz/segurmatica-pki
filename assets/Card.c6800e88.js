var _=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&x(e,o,t[o]);if(g)for(var o of g(t))N.call(t,o)&&x(e,o,t[o]);return e},p=(e,t)=>y(e,k(t));import{s as c,r as v,j as n,F as b,v as h,a as d}from"./index.a965a08b.js";import{u as i,s as m,a as u}from"./store.df117b59.js";function I({options:e}){let o=i(m).opt;const[a,s]=v.exports.useState("");return v.exports.useEffect(()=>{s(o)},[o]),n(b,{children:e&&e.map((r,l)=>a==r.option&&n(S,{children:r.comp},l))})}const S=c.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;
`,j=c.div`
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

  ${e=>e.mixed&&h`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${e=>e.dark&&h`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${e=>e.column&&h`
      .nav {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    `}
`;function C(e){const t=i(m),o=i(u),{setOption:a}=t,{reverse:s}=o;return n(b,{children:n(j,p(f({},e),{children:n("div",{className:"nav",children:Array.isArray(e.options)&&e.options.map((r,l)=>d("div",{className:"nav__item",children:[n("div",{className:"nav__icon",children:r.icon}),n("div",{children:n("button",{className:"nav__button",onClick:()=>{a(r.option),s()},children:n("a",{className:"nav__link",children:r.option&&r.option})})})]},l))})}))})}function $(e){const t=i(u),{st:o}=t;return n(F,{children:n("div",{className:o?"opened":"closed",children:n(C,{column:!0,options:e.options})})})}const F=c.nav`
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
`,z=({st:e,reverse:t})=>n(X,{children:d("button",{onClick:()=>t(),children:[n("div",{className:e?"opened":"closed"}),n("div",{className:e?"opened":"closed"}),n("div",{className:e?"opened":"closed"})]})}),X=c.div`
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
`;function q(e){const t=i(m),o=i(u),{opt:a}=t,{st:s,reverse:r,setFalse:l}=o;return d(A,p(f({},e),{children:[d("header",{children:[d("h2",{className:"header__title",children:["Admin...",e.name]}),n(z,{st:s,reverse:r})]}),n($,{options:e.options}),n("main",{onClick:l,children:e.children}),n("footer",{children:a})]}))}const A=c.div`
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
`;export{q as C,I as F};

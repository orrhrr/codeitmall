(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(829)}])},2784:function(e,t,n){"use strict";n.d(t,{Fg:function(){return u},f6:function(){return a}});var r=n(5893),o=n(7294);let l=(0,o.createContext)();function a(e){let{children:t}=e,[n,a]=(0,o.useState)("dark");return(0,o.useEffect)(()=>(document.body.classList.add(n),()=>{document.body.classList.remove(n)}),[n]),(0,r.jsx)(l.Provider,{value:{theme:n,setTheme:a},children:t})}function u(){let e=(0,o.useContext)(l);if(!e)throw Error("ThemeContext 안에서 써야 합니다");return e}},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),a=n(4532),u=n(3353),c=n(1410),i=n(9064),s=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),_=n(4266);let v=new Set;function y(e,t,n,r,o){if(o||u.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:c.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let n,r;let{href:c,as:v,children:b,prefetch:g,passHref:x,replace:j,shallow:C,scroll:E,locale:M,onClick:k,onMouseEnter:N,onTouchStart:P,legacyBehavior:O=!1}=e,w=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==g,S=l.default.useContext(f.RouterContext),T=l.default.useContext(d.AppRouterContext),R=null!=S?S:T,I=!S,{href:K,as:H}=l.default.useMemo(()=>{if(!S){let e=m(c);return{href:e,as:v?m(v):e}}let[e,t]=a.resolveHref(S,c,!0);return{href:e,as:v?a.resolveHref(S,v):t||e}},[S,c,v]),U=l.default.useRef(K),A=l.default.useRef(H);O&&(r=l.default.Children.only(n));let D=O?r&&"object"==typeof r&&r.ref:t,[F,B,q]=p.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(A.current!==H||U.current!==K)&&(q(),A.current=H,U.current=K),F(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[H,D,K,q,F]);l.default.useEffect(()=>{R&&B&&L&&y(R,K,H,{locale:M},I)},[H,K,B,M,L,null==S?void 0:S.locale,R,I]);let Z={ref:X,onClick(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,a,c,i,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?l.default.startTransition(h):h()}(e,R,K,H,j,C,E,M,I,L)},onMouseEnter(e){O||"function"!=typeof N||N(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(L||!I)&&y(R,K,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},I)},onTouchStart(e){O||"function"!=typeof P||P(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(L||!I)&&y(R,K,H,{locale:M,priority:!0,bypassPrefetchedCheck:!0},I)}};if(i.isAbsoluteUrl(H))Z.href=H;else if(!O||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&h.getDomainLocale(H,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);Z.href=t||_.addBasePath(s.addLocale(H,e,null==S?void 0:S.defaultLocale))}return O?l.default.cloneElement(r,Z):l.default.createElement("a",Object.assign({},w,Z),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!l,[s,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(i||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},u.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[i,n,t,s,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(7294),o=n(29);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),o=n(344),l=n.n(o),a=n(522),u=n.n(a);function c(e){let{className:t="",page:n=!1,children:o}=e,l="".concat(u().container," ").concat(n?u().page:""," ").concat(t);return(0,r.jsx)("div",{className:l,children:o})}var i=n(1664),s=n.n(i),f=n(6951),d=n.n(f);function p(){return(0,r.jsx)("header",{className:d().header,children:(0,r.jsxs)(c,{className:d().container,children:[(0,r.jsx)(s(),{className:d().logo,href:"/",children:"codietmall"}),(0,r.jsx)(s(),{className:d().setting,href:"/setting",children:"설정"})]})})}var h=n(2784);n(5488);var _=n(9008),v=n.n(_);function y(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v(),{children:(0,r.jsx)("title",{children:"codeitmall"})}),(0,r.jsx)("main",{className:l().className,children:(0,r.jsxs)(h.f6,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(c,{children:(0,r.jsx)(t,{...n})})]})})]})}},5488:function(){},344:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_e3568d', '__Noto_Sans_KR_Fallback_e3568d'",fontStyle:"normal"},className:"__className_e3568d"}},522:function(e){e.exports={container:"Container_container__e2It7",page:"Container_page__f4lp3"}},6951:function(e){e.exports={header:"Header_header__l1qoc",container:"Header_container__2E6BT"}},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"094J":function(e,t,n){"use strict";(function(e){n("8+KV"),n("V+eJ");var r=n("q1tI"),a=n("puqk"),c={},o=function(e,t,n){return c[e]||(c[e]={callbacks:[],value:n}),c[e].callbacks.push(t),{deregister:function(){var n=c[e].callbacks,r=n.indexOf(t);r>-1&&n.splice(r,1)},emit:function(n){c[e].value!==n&&(c[e].value=n,c[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};t.a=function(t,n){if(void 0===n&&(n=e.localStorage),n){var c=(i=n,{get:function(e,t){var n=i.getItem(e);return null===n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,n){var c=n.get,i=n.set,u=Object(r.useRef)(null),l=Object(r.useState)((function(){return c(t,e)})),s=l[0],f=l[1];return Object(a.a)("storage",(function(e){var n=e.key,r=JSON.parse(e.newValue);n===t&&s!==r&&f(r)})),Object(r.useEffect)((function(){return u.current=o(t,f,e),function(){u.current.deregister()}}),[]),Object(r.useEffect)((function(){i(t,s),u.current.emit(s)}),[s]),[s,f]}(e,t,c)}}var i;return r.useState}}).call(this,n("yLpj"))},"7+zl":function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},D36q:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,r.createElement("path",{d:"M256 387c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4v-46.2c0-8.5-6.9-15.4-15.4-15.4zM256 48c-8.5 0-15.4 6.9-15.4 15.4v46.2c0 8.5 6.9 15.4 15.4 15.4s15.4-6.9 15.4-15.4V63.4c0-8.5-6.9-15.4-15.4-15.4zM125 256c0-8.5-6.9-15.4-15.4-15.4H63.4c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4zM448.6 240.6h-46.2c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h46.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4zM152.5 344.1c-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5l32.7-32.7c6-6 6-15.8 0-21.8-2.9-2.9-6.8-4.5-10.9-4.5zM359.5 167.9c4.1 0 8-1.6 10.9-4.5l32.7-32.7c2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5l-32.7 32.7c-2.9 2.9-4.5 6.8-4.5 10.9s1.6 8 4.5 10.9c2.9 2.9 6.8 4.5 10.9 4.5zM130.7 108.9c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-2.9 2.9-4.5 6.8-4.5 10.9 0 4.1 1.6 8 4.5 10.9l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM370.4 348.6c-2.9-2.9-6.8-4.5-10.9-4.5-4.1 0-8 1.6-10.9 4.5-6 6-6 15.8 0 21.8l32.7 32.7c2.9 2.9 6.8 4.5 10.9 4.5 4.1 0 8-1.6 10.9-4.5 2.9-2.9 4.5-6.8 4.5-10.9s-1.6-8-4.5-10.9l-32.7-32.7zM256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96z"}))}a.defaultProps={viewBox:"0 0 512 512"},e.exports=a,a.default=a},"g+62":function(e,t,n){"use strict";(function(e){var r=n("puqk"),a=n("q1tI"),c=n("094J"),o=function(){},i={classList:{add:o,remove:o}},u=function(t,n,r){void 0===r&&(r=e);var o=t?Object(c.a)(t,n):a.useState,u=r.matchMedia?r.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},s="(prefers-color-scheme: dark)"===u.media,f=r.document&&r.document.body||i;return{usePersistedDarkModeState:o,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=f),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(r){e.classList.add(r?t:n),e.classList.remove(r?n:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return s?u.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,c=t.classNameDark,o=t.classNameLight,i=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var s=t.storageProvider,f=t.global,d=Object(a.useMemo)((function(){return u(l,s,f)}),[l,s,f]),p=d.getDefaultOnChange,m=d.mediaQueryEventTarget,v=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(e)),h=v[0],b=v[1],g=Object(a.useMemo)((function(){return i||p(n,c,o)}),[i,n,c,o,p]);return Object(a.useEffect)((function(){g(h)}),[g,h]),Object(r.a)("change",(function(e){return b(e.matches)}),m),{value:h,enable:Object(a.useCallback)((function(){return b(!0)}),[b]),disable:Object(a.useCallback)((function(){return b(!1)}),[b]),toggle:Object(a.useCallback)((function(){return b((function(e){return!e}))}),[b])}}}).call(this,n("yLpj"))},puqk:function(e,t,n){"use strict";(function(e){var r=n("q1tI");t.a=function(t,n,a){void 0===a&&(a=e);var c=Object(r.useRef)();Object(r.useEffect)((function(){c.current=n}),[n]),Object(r.useEffect)((function(){if(a&&a.addEventListener){var e=function(e){return c.current(e)};return a.addEventListener(t,e),function(){a.removeEventListener(t,e)}}}),[t,a])}}).call(this,n("yLpj"))},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=(n("91GP"),n("Wbzz")),o=n("p3AD"),i=n("g+62"),u=n("7+zl"),l=n.n(u),s=n("D36q"),f=n.n(s),d=function(e){var t=e.ph,n=Object(i.a)(!1);return a.a.createElement("div",{className:"dark-mode-toggle"},n.value?a.a.createElement(f.a,{onClick:n.disable,style:{height:t,fill:"#565d64"}}):a.a.createElement(l.a,{onClick:n.enable,style:{height:t}}))};var p=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.location,r=t.title,i=t.children;return e="/"===n.pathname?a.a.createElement("div",null,a.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0,display:"inline-block"})},a.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),a.a.createElement(d,{ph:"25px"})):a.a.createElement("div",null,a.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,display:"inline-block"}},a.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),a.a.createElement(d,{ph:"15px"})),a.a.createElement("div",null,a.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},a.a.createElement("header",null,e),a.a.createElement("main",null,i),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", 使用"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"构建")))},r}(a.a.Component),m=n("vrFN");n.d(t,"pageQuery",(function(){return h}));var v=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return a.a.createElement(p,{location:this.props.location,title:e},a.a.createElement(m.a,{title:"404: Not Found"}),a.a.createElement("h1",null,"Not Found"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},r}(a.a.Component),h=(t.default=v,"1097489062")}}]);
//# sourceMappingURL=component---src-pages-404-js-3f6464d3fd9acae2d191.js.map
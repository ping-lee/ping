(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return A(t||a).src},A=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(j,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},j=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:d,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));j.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,S=e.loading,x=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:I?1:0,transition:O?"opacity "+E+"ms":"none"},l),k="boolean"==typeof h?"lightgray":h,L={transitionDelay:E+"ms"},Q=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&L,{},l,{},m),z={title:t,alt:this.state.isVisible?"":a,style:Q,className:f,itemProp:v};if(p){var Y=p,V=A(p);return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),k&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&L)}),V.base64&&c.default.createElement(B,{src:V.base64,spreadProps:z,imageVariants:Y,generateSources:w}),V.tracedSVG&&c.default.createElement(B,{src:V.tracedSVG,spreadProps:z,imageVariants:Y,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,y(Y),c.default.createElement(j,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:S},V,{imageVariants:Y}))}}))}if(g){var T=g,D=A(g),P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete P.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},k&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:k,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},O&&L)}),D.base64&&c.default.createElement(B,{src:D.base64,spreadProps:z,imageVariants:T,generateSources:w}),D.tracedSVG&&c.default.createElement(B,{src:D.tracedSVG,spreadProps:z,imageVariants:T,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,y(T),c.default.createElement(j,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:S},D,{imageVariants:T}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:R,sizes:k,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=O;t.default=L},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},Otoc:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("gmdE"),s=a("Wbzz"),l=a("pzsF");a("IO/f");var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1,isDark:l.c},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this,t=this.state,a=t.isOpen,r=t.isDark;return i.a.createElement("div",{className:"nav-sidebar-open"},i.a.createElement(n.a.Div,{className:"wrapper",css:a?{transform:"translateX(320px)",position:"fixed!important",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"}},i.a.createElement("div",{style:a?{position:"absolute",width:"100%",top:0,left:0,height:"100%",backgroundColor:"rgba(0,0,0,0.75)",zIndex:"999",transition:"all 0.5s ease-in-out"}:{transition:"all 0.5s ease-in-out"},onClick:function(){a&&e.setState({isOpen:!1})}}),i.a.createElement("nav",{id:"nav-main",className:"nav-main"},i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"pull-left"},i.a.createElement(l.a,{ph:"15px",handleDark:function(t){return e.setState({isDark:t})}})),i.a.createElement("div",{className:"pull-right",onClick:function(){a&&e.setState({isOpen:!1})}},i.a.createElement(n.a.Div,{className:"bt-close text-uppercase",css:{":before":{content:" ",position:"absolute",top:"33px",right:"27px",width:"20px",height:"3px",background:"#202121",transform:"rotate(45deg)"},":after":{content:" ",position:"absolute",top:"33px",right:"27px",width:"20px",height:"3px",background:"#202121",transform:"rotate(-45deg)"}}},i.a.createElement("font",{color:"#202121"},"关闭")))),i.a.createElement("ul",{id:"menu-main",className:"menu"},i.a.createElement("li",null,i.a.createElement("span",{className:"item"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("font",{color:"#202121"},"注册 / 登录")))),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"Home")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"关于")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"摄影")),i.a.createElement("li",null,i.a.createElement(n.a.A,{className:"item",css:{":after":{content:"attr(data-count)",display:"block",position:"absolute",top:"50%",right:"25px",width:"24px",height:"24px",lineHeight:"24px",fontSize:"11px",fontWeight:500,textAlign:"center",backgroundColor:"#FEF7C1",borderRadius:"50%",transform:"translateY(-50%)"}},"data-count":"6"},"仓库")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"工作 & 技能")),i.a.createElement("li",null,i.a.createElement(n.a.A,{className:"item",css:{":after":{content:"attr(data-count)",display:"block",position:"absolute",top:"50%",right:"25px",width:"24px",height:"24px",lineHeight:"24px",fontSize:"11px",fontWeight:500,textAlign:"center",backgroundColor:"#9ceade",borderRadius:"50%",transform:"translateY(-50%)"}},"data-count":"8"},"Blog")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"关于")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"摄影")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"关于")),i.a.createElement("li",null,i.a.createElement("span",{className:"item"},"摄影"))))),i.a.createElement("div",null,i.a.createElement("header",{id:"header",style:r?{backgroundColor:"#000"}:{backgroundColor:"#f4f7f6"}},i.a.createElement("div",{className:"header-main"},i.a.createElement("div",{className:"box-left"},i.a.createElement("div",{className:"item bt-menu",onClick:function(){return e.setState({isOpen:!a})}},i.a.createElement("div",{className:"ico-menu"},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"})),i.a.createElement("span",{className:"has-tablet"},i.a.createElement("font",{color:"#202121"},"菜单")))),i.a.createElement("div",{className:"box-right"},i.a.createElement("div",{id:"js-search-container",className:"item bt-search"},i.a.createElement("svg",{className:"ico-svg",viewBox:"0 0 14 14"},i.a.createElement("path",{d:"M14,12.383l-2.73-2.73c0.678-0.99,1.078-2.188,1.078-3.479C12.348,2.77,9.578,0,6.174,0 C2.77,0,0,2.77,0,6.173c0,3.405,2.77,6.174,6.174,6.174c1.29,0,2.486-0.398,3.478-1.078l2.73,2.73L14,12.383z M1.759,6.173 c0-2.434,1.98-4.415,4.415-4.415c2.433,0,4.414,1.98,4.414,4.415s-1.98,4.415-4.414,4.415C3.739,10.588,1.759,8.607,1.759,6.173"}))),i.a.createElement("div",{className:"item login"},i.a.createElement("strong",null,i.a.createElement("a",{className:"text-black open-login",href:"/login"},"注册 / 登录"))),i.a.createElement("div",{id:"bt-submit",className:"item has-tablet"},i.a.createElement("a",{className:"button button-large",href:"/submit/"},i.a.createElement("span",null,"说出您的建议")))),i.a.createElement("div",{className:"logo-header"}))),i.a.createElement("section",{id:"content"},i.a.createElement("div",{className:"content-view"},i.a.createElement("div",{className:"block"},i.a.createElement("div",{className:"inner width-2"},this.props.children)))))))},r}(i.a.Component);t.a=o},YZX3:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUBBAP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGzP7J8aWWrzzwEdAZ//8QAHhAAAQMEAwAAAAAAAAAAAAAAAQACAwQQERITITH/2gAIAQEAAQUCkzqORq9VQdYxI9z0ewBb/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIRIP/aAAgBAwEBPwFUouP/xAAWEQEBAQAAAAAAAAAAAAAAAAABICH/2gAIAQIBAT8BXY//xAAcEAEAAQQDAAAAAAAAAAAAAAABEQACEDETIUH/2gAIAQEABj8Cg20JyLHY4k3VpPubMf/EABsQAQACAwEBAAAAAAAAAAAAAAEAESExcRBB/9oACAEBAAE/IXaqaEmbqBTY512CCzUX4RwxIKqWBUACjUAgwR4vz//aAAwDAQACAAMAAAAQ7w+8/8QAFhEBAQEAAAAAAAAAAAAAAAAAASBR/9oACAEDAQE/EHfEf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxBjEQZ//8QAHhABAAICAgMBAAAAAAAAAAAAAQARITFBURBhcdH/2gAIAQEAAT8QrF5KNhyl8/sDi4K6h9KZx19hlrWmNzah0W5+y6EhoF5uoCABgDiGCImmYqVUrdtGX34//9k=","width":50,"height":50,"src":"/static/6ae3054a26cc4c3e7157f357db698536/30d3a/profile-pic.jpg","srcSet":"/static/6ae3054a26cc4c3e7157f357db698536/30d3a/profile-pic.jpg 1x,\\n/static/6ae3054a26cc4c3e7157f357db698536/66c95/profile-pic.jpg 1.5x,\\n/static/6ae3054a26cc4c3e7157f357db698536/aacbd/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Lee","social":{"twitter":"kylemathews"}}}}}')},yZlL:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=(a("qHiR"),a("0mN4"),a("YZX3")),l=a("9eSz"),o=a.n(l),c=a("p3AD"),d=function(){var e=s.data,t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,i.a.createElement("strong",null,a),"，生活、工作在美丽的春城-昆明，这个网站记录了我平时的所思所感，"," ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"你可以在知乎关注我。")))},u=a("Otoc"),m=a("vrFN");a.d(t,"pageQuery",(function(){return A}));var f=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,s=a.next;return i.a.createElement(u.a,{location:this.props.location,title:t},i.a.createElement(m.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},e.frontmatter.date)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(d,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,s&&i.a.createElement(n.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))},r}(i.a.Component),A=(t.default=f,"4085973763")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-38a2a0e1343635e6b7fd.js.map
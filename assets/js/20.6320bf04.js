(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{160:function(t,e,n){var r=n(1),i=n(3),o=n(101).f;r({target:"Object",stat:!0,forced:i((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:o})},161:function(t,e,n){var r=n(1),i=n(3),o=n(5),a=Object.isFrozen;r({target:"Object",stat:!0,forced:i((function(){a(1)}))},{isFrozen:function(t){return!o(t)||!!a&&a(t)}})},165:function(t,e,n){"use strict";e.a='<h1 align="center">Markdown Editor built on Vue</h1>\n\n<p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n\n## Links\n\n- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)\n- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n\n## Install\n\n```bash\n# use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n```\n\n## Quick Start\n\n```js {1}\nimport Vue from \'vue\';\nimport VueMarkdownEditor from \'@kangc/v-md-editor\';\nimport \'@kangc/v-md-editor/lib/style/base-editor.css\';\nimport vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n\nVueMarkdownEditor.use(vuepressTheme);\n\nVue.use(VueMarkdownEditor);\n```\n\n## Usage\n\n```html\n<template>\n  <v-md-editor v-model="text" height="400px"></v-md-editor>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: \'\',\n      };\n    },\n  };\n<\/script>\n```\n\n## Refrence\n\n- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)\n- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)\n'},317:function(t,e,n){(function(t){var r,i,o;n(68),n(69),n(174),n(168),n(17),n(179),n(65),n(107),n(162),n(30),n(175),n(176),n(177),n(172),n(15),n(171),n(167),n(29),n(166),n(44),n(163),n(116),n(164),n(210),n(67);var a,s=n(178);"undefined"!=typeof self&&self,a=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==s(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([,,function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r="data-v-md-line",i="data-v-md-heading",o="data-v-md-anchor"},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-md-editor-preview",class:[this.themeConfig.previewClass],domProps:{innerHTML:this._s(this.html)},on:{click:this.handlePreviewClick}})};r._withStripped=!0;var i=n(8),o=n.n(i),a=["style","align","class","id"],s=["data-"],l=[{input:["type"]}].concat({math:[],annotation:[],semantics:[],mtext:[],mn:[],mo:[],mi:[],mspace:[],mover:[],munder:[],munderover:[],msup:[],msub:[],msubsup:[],mfrac:[],mroot:[],msqrt:[],mtable:[],mtr:[],mtd:[],mlabeledtr:[],mrow:[],menclose:[],mstyle:[],mpadded:[],mphantom:[],mglyph:[]},{svg:[],altGlyph:[],altGlyphDef:[],altGlyphItem:[],animate:[],animateColor:[],animateMotion:[],animateTransform:[],circle:[],clipPath:[],"color-profile":[],cursor:[],"definition-src":[],defs:[],desc:[],ellipse:[],feBlend:[],feColorMatrix:[],feComponentTransfer:[],feComposite:[],feConvolveMatrix:[],feDiffuseLighting:[],feDisplacementMap:[],feDistantLight:[],feFlood:[],feFuncA:[],feFuncB:[],feFuncG:[],feFuncR:[],feGaussianBlur:[],feImage:[],feMerge:[],feMergeNode:[],feMorphology:[],feOffset:[],fePointLight:[],feSpecularLighting:[],feSpotLight:[],feTile:[],feTurbulence:[],filter:[],font:[],foreignObject:[],g:[],glyph:[],glyphRef:[],hkern:[],image:[],line:[],linearGradient:[],marker:[],mask:[],metadata:[],"missing-glyph":[],mpath:[],path:[],pattern:[],polygon:[],polyline:[],radialGradient:[],rect:[],set:[],stop:[],style:[],switch:[],symbol:[],text:[],textPath:[],title:[],tref:[],tspan:[],use:[],view:[],vkern:[]});Object.entries(l).forEach((function(t){var e=t[0],n=t[1];o.a.whiteList[e]=n}));var c={onIgnoreTagAttr:function(t,e,n){if(a.find((function(t){return t===e}))||s.find((function(t){return e.startsWith(t)})))return e+'="'+o.a.escapeAttrValue(n)+'"'}},u=new o.a.FilterXSS(c),d=n(5),f=n(7),p=n(3),g=function(t){return t},m={name:"v-md-preview",props:{text:{type:String,default:""},theme:Object,scrollContainer:{type:Function,default:function(){return window}},top:{type:Number,default:0}},data:function(){return{html:""}},computed:{themeConfig:function(){return this.theme||m.themeConfig||{}},markdownParser:function(){return this.themeConfig.markdownParser},markdownLoader:function(){var t;return(null==(t=this.markdownParser)?void 0:t.render.bind(this.markdownParser))||g}},watch:{text:function(){this.handleTextChange()}},created:function(){var t,e=this;"function"!=typeof this.markdownLoader||this.markdownLoader===g?console.warn("Please configure your markdown parser"):[].concat((null==(t=this.theme)?void 0:t.markdownExtenders)||[],m.markdownExtenders).forEach((function(t){t(e.markdownParser)})),this.handleTextChange()},methods:{handlePreviewClick:function(t){var e=t.target.getAttribute(p.a),n=this.$el.querySelector("["+p.b+'="'+e+'"]');n&&this.scrollToTarget({target:n,scrollContainer:this.scrollContainer(),top:this.top})},getOffsetTop:function(t,e){var n=t.getBoundingClientRect();return e===window||e===document.documentElement?n.top:n.top-e.getBoundingClientRect().top},scrollToTarget:function(t){var e=t.target,n=t.scrollContainer,r=void 0===n?this.scrollContainer():n,i=t.top,o=void 0===i?0:i,a=t.onScrollEnd,s=this.getOffsetTop(e,r),l=Object(d.a)(r)+s-o;Object(f.a)({scrollTarget:r,scrollToTop:l,onScrollEnd:a})},scrollToLine:function(t){var e=t.lineIndex,n=t.onScrollEnd;if(e){var r=this.$el.querySelector("["+p.c+'="'+e+'"]');r&&this.scrollToTarget({target:r,onScrollEnd:n})}},handleTextChange:function(){this.html=u.process(this.markdownLoader(this.text)),this.$emit("change",this.text,this.html)}},theme:function(t){m.themeConfig=t},markdownExtenders:[],extendMarkdown:function(t){m.markdownExtenders.push(t)}},h=m,b=(n(30),n(2)),v=Object(b.a)(h,r,[],!1,null,null,null);v.options.__file="src/preview.vue";var w=v.exports,y=function(t){t.component(w.name,w)};w.version="1.2.10",w.install=y,w.use=function(t){return"function"==typeof t?t(w):t.install(w),w},"undefined"!=typeof window&&window.Vue&&y(window.Vue),e.default=w},function(t,e,n){"use strict";function r(t){var e=0;return t===window?e=t.pageYOffset:t&&(e=t.scrollTop),e}function i(t,e){t===window?window.scrollTo(window.pageYOffset,e):t&&(t.scrollTop=e)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},function(t,e,n){},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r=n(5);function i(t){var e=t.currentScrollTop,n=t.scrollToTop,r=t.scrollFn,i=t.percent,o=void 0===i?10:i,a=t.onScrollEnd,s=n>e?"down":"up",l=o/100*(n-e);window.requestAnimationFrame((function t(){e+=l,"down"===s&&e>=n||"up"===s&&e<=n?(r(n),window.cancelAnimationFrame(void 0),a&&window.requestAnimationFrame(a)):(r(e),window.requestAnimationFrame(t))}))}function o(t){var e=t.scrollTarget,n=t.scrollToTop,o=t.percent,a=void 0===o?10:o,s=t.onScrollEnd;i({currentScrollTop:Object(r.a)(e),scrollToTop:n,scrollFn:function(t){return Object(r.b)(e,t)},percent:a,onScrollEnd:s})}},function(t,e,n){var r=n(21),i=n(24),o=n(29);function a(t,e){return new o(e).process(t)}for(var s in(e=t.exports=a).filterXSS=a,e.FilterXSS=o,r)e[s]=r[s];for(var s in i)e[s]=i[s];"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},,,function(t,e,n){var r=n(22),i=n(27);for(var o in(e=t.exports=function(t,e){return new i(e).process(t)}).FilterCSS=i,r)e[o]=r[o];"undefined"!=typeof window&&(window.filterCSS=t.exports)},function(t,e){t.exports={indexOf:function(t,e){var n,r;if(Array.prototype.indexOf)return t.indexOf(e);for(n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},forEach:function(t,e,n){var r,i;if(Array.prototype.forEach)return t.forEach(e,n);for(r=0,i=t.length;r<i;r++)e.call(n,t[r],r,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},,,,,,,,,function(t,e,n){var r=n(11).FilterCSS,i=n(11).getDefaultWhiteList,o=n(12),a=new r;function s(t){return t.replace(l,"&lt;").replace(c,"&gt;")}var l=/</g,c=/>/g,u=/"/g,d=/&quot;/g,f=/&#([a-zA-Z0-9]*);?/gim,p=/&colon;?/gim,g=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,h=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,b=/u\s*r\s*l\s*\(.*/gi;function v(t){return t.replace(u,"&quot;")}function w(t){return t.replace(d,'"')}function y(t){return t.replace(f,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function k(t){return t.replace(p,":").replace(g," ")}function x(t){for(var e="",n=0,r=t.length;n<r;n++)e+=t.charCodeAt(n)<32?" ":t.charAt(n);return o.trim(e)}function T(t){return x(t=k(t=y(t=w(t))))}function S(t){return s(t=v(t))}var A=/<!--[\s\S]*?-->/g;e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},e.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}},e.onTag=function(t,e,n){},e.onIgnoreTag=function(t,e,n){},e.onTagAttr=function(t,e,n){},e.onIgnoreTagAttr=function(t,e,n){},e.safeAttrValue=function(t,e,n,r){if(n=T(n),"href"===e||"src"===e){if("#"===(n=o.trim(n)))return"#";if("http://"!==n.substr(0,7)&&"https://"!==n.substr(0,8)&&"mailto:"!==n.substr(0,7)&&"tel:"!==n.substr(0,4)&&"#"!==n[0]&&"/"!==n[0])return""}else if("background"===e){if(m.lastIndex=0,m.test(n))return""}else if("style"===e){if(h.lastIndex=0,h.test(n))return"";if(b.lastIndex=0,b.test(n)&&(m.lastIndex=0,m.test(n)))return"";!1!==r&&(n=(r=r||a).process(n))}return S(n)},e.escapeHtml=s,e.escapeQuote=v,e.unescapeQuote=w,e.escapeHtmlEntities=y,e.escapeDangerHtml5Entities=k,e.clearNonPrintableCharacter=x,e.friendlyAttrValue=T,e.escapeAttrValue=S,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var n=!Array.isArray(t),r=[],i=!1;return{onIgnoreTag:function(a,s,l){if(function(e){return!!n||-1!==o.indexOf(t,e)}(a)){if(l.isClosing){var c="[/removed]",u=l.position+c.length;return r.push([!1!==i?i:l.position,u]),i=!1,c}return i||(i=l.position),"[removed]"}return e(a,s,l)},remove:function(t){var e="",n=0;return o.forEach(r,(function(r){e+=t.slice(n,r[0]),n=r[1]})),e+=t.slice(n)}}},e.stripCommentTag=function(t){return t.replace(A,"")},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)}))).join("")},e.cssFilter=a,e.getDefaultCSSWhiteList=i},function(t,e){function n(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}var r=/javascript\s*\:/gim;e.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},e.getDefaultWhiteList=n,e.onAttr=function(t,e,n){},e.onIgnoreAttr=function(t,e,n){},e.safeAttrValue=function(t,e){return r.test(e)?"":e}},function(t,e){t.exports={indexOf:function(t,e){var n,r;if(Array.prototype.indexOf)return t.indexOf(e);for(n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},forEach:function(t,e,n){var r,i;if(Array.prototype.forEach)return t.forEach(e,n);for(r=0,i=t.length;r<i;r++)e.call(n,t[r],r,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},function(t,e,n){var r=n(12);function i(t){var e=r.spaceIndex(t);if(-1===e)var n=t.slice(1,-1);else n=t.slice(1,e+1);return"/"===(n=r.trim(n).toLowerCase()).slice(0,1)&&(n=n.slice(1)),"/"===n.slice(-1)&&(n=n.slice(0,-1)),n}function o(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(t,e){for(;e<t.length;e++){var n=t[e];if(" "!==n)return"="===n?e:-1}}function l(t,e){for(;e>0;e--){var n=t[e];if(" "!==n)return"="===n?e:-1}}function c(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,n){var r="",a=0,s=!1,l=!1,c=0,u=t.length,d="",f="";for(c=0;c<u;c++){var p=t.charAt(c);if(!1===s){if("<"===p){s=c;continue}}else if(!1===l){if("<"===p){r+=n(t.slice(a,c)),s=c,a=c;continue}if(">"===p){r+=n(t.slice(a,s)),d=i(f=t.slice(s,c+1)),r+=e(s,r.length,d,f,o(f)),a=c+1,s=!1;continue}if(('"'===p||"'"===p)&&"="===t.charAt(c-1)){l=p;continue}}else if(p===l){l=!1;continue}}return a<t.length&&(r+=n(t.substr(a))),r},e.parseAttr=function(t,e){var n=0,i=[],o=!1,u=t.length;function d(t,n){if(!((t=(t=r.trim(t)).replace(a,"").toLowerCase()).length<1)){var o=e(t,n||"");o&&i.push(o)}}for(var f=0;f<u;f++){var p,g=t.charAt(f);if(!1!==o||"="!==g)if(!1===o||f!==n||'"'!==g&&"'"!==g||"="!==t.charAt(f-1)){if(/\s|\n|\t/.test(g)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(p=s(t,f))){d(r.trim(t.slice(n,f))),o=!1,n=f+1;continue}f=p-1;continue}if(-1===(p=l(t,f-1))){d(o,c(r.trim(t.slice(n,f)))),o=!1,n=f+1;continue}}}else{if(-1===(p=t.indexOf(g,f+1)))break;d(o,r.trim(t.slice(n+1,p))),o=!1,n=(f=p)+1}else o=t.slice(n,f),n=f+1}return n<t.length&&(!1===o?d(t.slice(n)):d(o,c(r.trim(t.slice(n))))),r.trim(i.join(" "))}},,,function(t,e,n){var r=n(22),i=n(28);function o(t){return null==t}function a(t){(t=function(t){var e={};for(var n in t)e[n]=t[n];return e}(t||{})).whiteList=t.whiteList||r.whiteList,t.onAttr=t.onAttr||r.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||r.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||r.safeAttrValue,this.options=t}n(23),a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,n=e.whiteList,r=e.onAttr,a=e.onIgnoreAttr,s=e.safeAttrValue;return i(t,(function(t,e,i,l,c){var u=n[i],d=!1;if(!0===u?d=u:"function"==typeof u?d=u(l):u instanceof RegExp&&(d=u.test(l)),!0!==d&&(d=!1),l=s(i,l)){var f,p={position:e,sourcePosition:t,source:c,isWhite:d};return d?o(f=r(i,l,p))?i+":"+l:f:o(f=a(i,l,p))?void 0:f}}))},t.exports=a},function(t,e,n){var r=n(23);t.exports=function(t,e){";"!==(t=r.trimRight(t))[t.length-1]&&(t+=";");var n=t.length,i=!1,o=0,a=0,s="";function l(){if(!i){var n=r.trim(t.slice(o,a)),l=n.indexOf(":");if(-1!==l){var c=r.trim(n.slice(0,l)),u=r.trim(n.slice(l+1));if(c){var d=e(o,s.length,c,u,n);d&&(s+=d+"; ")}}}o=a+1}for(;a<n;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;o=(a=u+1)+1,i=!1}else"("===c?i=!0:")"===c?i=!1:";"===c?i||l():"\n"===c&&l()}return r.trim(s)}},function(t,e,n){var r=n(11).FilterCSS,i=n(21),o=n(24),a=o.parseTag,s=o.parseAttr,l=n(12);function c(t){return null==t}function u(t){(t=function(t){var e={};for(var n in t)e[n]=t[n];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=i.onIgnoreTagStripAll),t.whiteList=t.whiteList||i.whiteList,t.onTag=t.onTag||i.onTag,t.onTagAttr=t.onTagAttr||i.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||i.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||i.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||i.safeAttrValue,t.escapeHtml=t.escapeHtml||i.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new r(t.css))}u.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,n=e.whiteList,r=e.onTag,o=e.onIgnoreTag,u=e.onTagAttr,d=e.onIgnoreTagAttr,f=e.safeAttrValue,p=e.escapeHtml,g=this.cssFilter;e.stripBlankChar&&(t=i.stripBlankChar(t)),e.allowCommentTag||(t=i.stripCommentTag(t));var m=!1;e.stripIgnoreTagBody&&(m=i.StripTagBody(e.stripIgnoreTagBody,o),o=m.onIgnoreTag);var h=a(t,(function(t,e,i,a,m){var h,b={sourcePosition:t,position:e,isClosing:m,isWhite:n.hasOwnProperty(i)};if(!c(h=r(i,a,b)))return h;if(b.isWhite){if(b.isClosing)return"</"+i+">";var v=function(t){var e=l.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var n="/"===(t=l.trim(t.slice(e+1,-1)))[t.length-1];return n&&(t=l.trim(t.slice(0,-1))),{html:t,closing:n}}(a),w=n[i],y=s(v.html,(function(t,e){var n,r=-1!==l.indexOf(w,t);return c(n=u(i,t,e,r))?r?(e=f(i,t,e,g))?t+'="'+e+'"':t:c(n=d(i,t,e,r))?void 0:n:n}));return a="<"+i,y&&(a+=" "+y),v.closing&&(a+=" /"),a+">"}return c(h=o(i,a,b))?p(a):h}),p);return m&&(h=m.remove(h)),h},t.exports=u},function(t,e,n){"use strict";var r=n(6);n.n(r).a}]).default},"object"==s(e)&&"object"==s(t)?t.exports=a():(i=[],void 0===(o="function"==typeof(r=a)?r.apply(e,i):r)||(t.exports=o))}).call(this,n(173)(t))},318:function(t,e,n){},334:function(t,e,n){"use strict";n.r(e);var r=n(146),i=n(317),o=n.n(i),a=(n(318),n(159)),s=n.n(a),l=n(165),c={components:Object(r.a)({},o.a.name,o.a),data:function(){return this.theme=s.a,{text:l.a}}},u=n(28),d=Object(u.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("v-md-preview",{attrs:{text:this.text,theme:this.theme,height:"500px"}})}),[],!1,null,null,null);e.default=d.exports}}]);
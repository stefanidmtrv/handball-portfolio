(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9436:function(o,n,e){Promise.resolve().then(e.bind(e,2581)),Promise.resolve().then(e.bind(e,9232)),Promise.resolve().then(e.t.bind(e,1878,23)),Promise.resolve().then(e.bind(e,9568))},9568:function(o,n,e){"use strict";e.d(n,{theme:function(){return t}});let t={}},1878:function(){},2581:function(o,n,e){"use strict";e.d(n,{ColorSchemeScript:function(){return r}});var t=e(7437);let a=o=>{let{defaultColorScheme:n,localStorageKey:e,forceColorScheme:t}=o;return t?'document.documentElement.setAttribute("data-mantine-color-scheme", \''.concat(t,"');"):'try {\n  var _colorScheme = window.localStorage.getItem("'.concat(e,'");\n  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "').concat(n,'";\n  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";\n  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);\n} catch (e) {}\n')};function r(o){let{defaultColorScheme:n="light",localStorageKey:e="mantine-color-scheme-value",forceColorScheme:r,...c}=o,i=["light","dark","auto"].includes(n)?n:"light";return(0,t.jsx)("script",{...c,"data-mantine-script":!0,dangerouslySetInnerHTML:{__html:a({defaultColorScheme:i,localStorageKey:e,forceColorScheme:r})}})}},9232:function(o,n,e){"use strict";e.d(n,{MantineProvider:function(){return E}});var t=e(7437);function a(o){return"auto"===o||"dark"===o||"light"===o}var r=e(8150),c=e(9481),i=e(6726),l=e(1607),m=e(2265),s=e(5274);function h(){let o=(0,s.rZ)(),n=(0,r.R7)(),e=(0,c.X)(o.breakpoints).reduce((n,e)=>{let t=o.breakpoints[e].includes("px"),a=(0,i.px)(o.breakpoints[e]),r=t?"".concat(a-.1,"px"):(0,l.em)(a-.1),c=t?"".concat(a,"px"):(0,l.em)(a);return"".concat(n,"@media (max-width: ").concat(r,") {.mantine-visible-from-").concat(e," {display: none !important;}}@media (min-width: ").concat(c,") {.mantine-hidden-from-").concat(e," {display: none !important;}}")},"");return(0,t.jsx)("style",{"data-mantine-styles":"classes",nonce:null==n?void 0:n(),dangerouslySetInnerHTML:{__html:e}})}function d(o){return Object.entries(o).map(o=>{let[n,e]=o;return"".concat(n,": ").concat(e,";")}).join("")}function u(o,n){return(Array.isArray(o)?o:[o]).reduce((o,n)=>"".concat(n,"{").concat(o,"}"),n)}var v=e(3138),g=e(6900),f=e(9955),b=e(8928);function p(o){let{theme:n,color:e,colorScheme:t,name:a=e,withColorValues:r=!0}=o;if(!n.colors[e])return{};if("light"===t){let o=(0,g.j)(n,"light"),t={["--mantine-color-".concat(a,"-text")]:"var(--mantine-color-".concat(a,"-filled)"),["--mantine-color-".concat(a,"-filled")]:"var(--mantine-color-".concat(a,"-").concat(o,")"),["--mantine-color-".concat(a,"-filled-hover")]:"var(--mantine-color-".concat(a,"-").concat(9===o?8:o+1,")"),["--mantine-color-".concat(a,"-light")]:(0,b.F)(n.colors[e][o],.1),["--mantine-color-".concat(a,"-light-hover")]:(0,b.F)(n.colors[e][o],.12),["--mantine-color-".concat(a,"-light-color")]:"var(--mantine-color-".concat(a,"-").concat(o,")"),["--mantine-color-".concat(a,"-outline")]:"var(--mantine-color-".concat(a,"-").concat(o,")"),["--mantine-color-".concat(a,"-outline-hover")]:(0,b.F)(n.colors[e][o],.05)};return r?{["--mantine-color-".concat(a,"-0")]:n.colors[e][0],["--mantine-color-".concat(a,"-1")]:n.colors[e][1],["--mantine-color-".concat(a,"-2")]:n.colors[e][2],["--mantine-color-".concat(a,"-3")]:n.colors[e][3],["--mantine-color-".concat(a,"-4")]:n.colors[e][4],["--mantine-color-".concat(a,"-5")]:n.colors[e][5],["--mantine-color-".concat(a,"-6")]:n.colors[e][6],["--mantine-color-".concat(a,"-7")]:n.colors[e][7],["--mantine-color-".concat(a,"-8")]:n.colors[e][8],["--mantine-color-".concat(a,"-9")]:n.colors[e][9],...t}:t}let c=(0,g.j)(n,"dark"),i={["--mantine-color-".concat(a,"-text")]:"var(--mantine-color-".concat(a,"-4)"),["--mantine-color-".concat(a,"-filled")]:"var(--mantine-color-".concat(a,"-").concat(c,")"),["--mantine-color-".concat(a,"-filled-hover")]:"var(--mantine-color-".concat(a,"-").concat(9===c?8:c+1,")"),["--mantine-color-".concat(a,"-light")]:(0,b.F)(n.colors[e][Math.max(0,c-2)],.15),["--mantine-color-".concat(a,"-light-hover")]:(0,b.F)(n.colors[e][Math.max(0,c-2)],.2),["--mantine-color-".concat(a,"-light-color")]:"var(--mantine-color-".concat(a,"-").concat(Math.max(c-5,0),")"),["--mantine-color-".concat(a,"-outline")]:"var(--mantine-color-".concat(a,"-").concat(Math.max(c-4,0),")"),["--mantine-color-".concat(a,"-outline-hover")]:(0,b.F)(n.colors[e][Math.max(c-4,0)],.05)};return r?{["--mantine-color-".concat(a,"-0")]:n.colors[e][0],["--mantine-color-".concat(a,"-1")]:n.colors[e][1],["--mantine-color-".concat(a,"-2")]:n.colors[e][2],["--mantine-color-".concat(a,"-3")]:n.colors[e][3],["--mantine-color-".concat(a,"-4")]:n.colors[e][4],["--mantine-color-".concat(a,"-5")]:n.colors[e][5],["--mantine-color-".concat(a,"-6")]:n.colors[e][6],["--mantine-color-".concat(a,"-7")]:n.colors[e][7],["--mantine-color-".concat(a,"-8")]:n.colors[e][8],["--mantine-color-".concat(a,"-9")]:n.colors[e][9],...i}:i}function k(o,n,e){(0,c.X)(n).forEach(t=>Object.assign(o,{["--mantine-".concat(e,"-").concat(t)]:n[t]}))}let y=o=>{let n=(0,g.j)(o,"light"),e=o.defaultRadius in o.radius?o.radius[o.defaultRadius]:(0,l.h)(o.defaultRadius),t={variables:{"--mantine-scale":o.scale.toString(),"--mantine-cursor-type":o.cursorType,"--mantine-color-scheme":"light dark","--mantine-webkit-font-smoothing":o.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":o.fontSmoothing?"grayscale":"unset","--mantine-color-white":o.white,"--mantine-color-black":o.black,"--mantine-line-height":o.lineHeights.md,"--mantine-font-family":o.fontFamily,"--mantine-font-family-monospace":o.fontFamilyMonospace,"--mantine-font-family-headings":o.headings.fontFamily,"--mantine-heading-font-weight":o.headings.fontWeight,"--mantine-heading-text-wrap":o.headings.textWrap,"--mantine-radius-default":e,"--mantine-primary-color-filled":"var(--mantine-color-".concat(o.primaryColor,"-filled)"),"--mantine-primary-color-filled-hover":"var(--mantine-color-".concat(o.primaryColor,"-filled-hover)"),"--mantine-primary-color-light":"var(--mantine-color-".concat(o.primaryColor,"-light)"),"--mantine-primary-color-light-hover":"var(--mantine-color-".concat(o.primaryColor,"-light-hover)"),"--mantine-primary-color-light-color":"var(--mantine-color-".concat(o.primaryColor,"-light-color)")},light:{"--mantine-primary-color-contrast":(0,f.a)(o,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":o.black,"--mantine-color-body":o.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":"var(--mantine-color-".concat(o.primaryColor,"-").concat(n,")"),"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)"},dark:{"--mantine-primary-color-contrast":(0,f.a)(o,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":"var(--mantine-color-".concat(o.primaryColor,"-4)"),"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)"}};k(t.variables,o.breakpoints,"breakpoint"),k(t.variables,o.spacing,"spacing"),k(t.variables,o.fontSizes,"font-size"),k(t.variables,o.lineHeights,"line-height"),k(t.variables,o.shadows,"shadow"),k(t.variables,o.radius,"radius"),o.colors[o.primaryColor].forEach((n,e)=>{t.variables["--mantine-primary-color-".concat(e)]="var(--mantine-color-".concat(o.primaryColor,"-").concat(e,")")}),(0,c.X)(o.colors).forEach(n=>{let e=o.colors[n];if(e&&"object"==typeof e&&"mantine-virtual-color"in e){Object.assign(t.light,p({theme:o,name:e.name,color:e.light,colorScheme:"light",withColorValues:!0})),Object.assign(t.dark,p({theme:o,name:e.name,color:e.dark,colorScheme:"dark",withColorValues:!0}));return}e.forEach((o,e)=>{t.variables["--mantine-color-".concat(n,"-").concat(e)]=o}),Object.assign(t.light,p({theme:o,color:n,colorScheme:"light",withColorValues:!1})),Object.assign(t.dark,p({theme:o,color:n,colorScheme:"dark",withColorValues:!1}))});let a=o.headings.sizes;return(0,c.X)(a).forEach(n=>{t.variables["--mantine-".concat(n,"-font-size")]=a[n].fontSize,t.variables["--mantine-".concat(n,"-line-height")]=a[n].lineHeight,t.variables["--mantine-".concat(n,"-font-weight")]=a[n].fontWeight||o.headings.fontWeight}),t},w=y(e(6165).t);function S(o){let{cssVariablesSelector:n,deduplicateCssVariables:e}=o,a=(0,s.rZ)(),i=(0,r.R7)(),l=function(o){let{theme:n,generator:e}=o,t=y(n),a=null==e?void 0:e(n);return a?(0,v.R)(t,a):t}({theme:a,generator:(0,r.Sm)()}),m=":root"===n&&e,h=function(o,n){let e=d(o.variables),t=e?u(n,e):"",a=d(o.dark),r=d(o.light),c=a?":host"===n?u("".concat(n,'([data-mantine-color-scheme="dark"])'),a):u("".concat(n,'[data-mantine-color-scheme="dark"]'),a):"",i=r?":host"===n?u("".concat(n,'([data-mantine-color-scheme="light"])'),r):u("".concat(n,'[data-mantine-color-scheme="light"]'),r):"";return"".concat(t).concat(c).concat(i)}(m?function(o){let n={variables:{},light:{},dark:{}};return(0,c.X)(o.variables).forEach(e=>{w.variables[e]!==o.variables[e]&&(n.variables[e]=o.variables[e])}),(0,c.X)(o.light).forEach(e=>{w.light[e]!==o.light[e]&&(n.light[e]=o.light[e])}),(0,c.X)(o.dark).forEach(e=>{w.dark[e]!==o.dark[e]&&(n.dark[e]=o.dark[e])}),n}(l):l,n);return h?(0,t.jsx)("style",{"data-mantine-styles":!0,nonce:null==i?void 0:i(),dangerouslySetInnerHTML:{__html:"".concat(h).concat(m?"":"\n  ".concat(n,'[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }\n  ').concat(n,'[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }\n'))}}):null}S.displayName="@mantine/CssVariables";var x=e(5206);function C(o,n){var e;let t="auto"!==o?o:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";null===(e=n())||void 0===e||e.setAttribute("data-mantine-color-scheme",t)}function E(o){let{theme:n,children:e,getStyleNonce:c,withStaticClasses:i=!0,withGlobalClasses:l=!0,deduplicateCssVariables:d=!0,withCssVariables:u=!0,cssVariablesSelector:v=":root",classNamesPrefix:g="mantine",colorSchemeManager:f=function(){let o,{key:n="mantine-color-scheme-value"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{get:o=>{if("undefined"==typeof window)return o;try{let e=window.localStorage.getItem(n);return a(e)?e:o}catch(n){return o}},set:o=>{try{window.localStorage.setItem(n,o)}catch(o){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",o)}},subscribe:e=>{o=o=>{o.storageArea===window.localStorage&&o.key===n&&a(o.newValue)&&e(o.newValue)},window.addEventListener("storage",o)},unsubscribe:()=>{window.removeEventListener("storage",o)},clear:()=>{window.localStorage.removeItem(n)}}}(),defaultColorScheme:b="light",getRootElement:p=()=>document.documentElement,cssVariablesResolver:k,forceColorScheme:y,stylesTransform:w}=o,{colorScheme:E,setColorScheme:j,clearColorScheme:M}=function(o){let{manager:n,defaultColorScheme:e,getRootElement:t,forceColorScheme:a}=o,r=(0,m.useRef)(),[c,i]=(0,m.useState)(()=>n.get(e)),l=a||c,s=(0,m.useCallback)(o=>{a||(C(o,t),i(o),n.set(o))},[n.set,l,a]),h=(0,m.useCallback)(()=>{i(e),C(e,t),n.clear()},[n.clear,e]);return(0,m.useEffect)(()=>(n.subscribe(s),n.unsubscribe),[n.subscribe,n.unsubscribe]),(0,x.Y)(()=>{C(n.get(e),t)},[]),(0,m.useEffect)(()=>{var o;if(a)return C(a,t),()=>{};void 0===a&&C(c,t),r.current=window.matchMedia("(prefers-color-scheme: dark)");let n=o=>{"auto"===c&&C(o.matches?"dark":"light",t)};return null===(o=r.current)||void 0===o||o.addEventListener("change",n),()=>{var o;return null===(o=r.current)||void 0===o?void 0:o.removeEventListener("change",n)}},[c,a]),{colorScheme:l,setColorScheme:s,clearColorScheme:h}}({defaultColorScheme:b,forceColorScheme:y,manager:f,getRootElement:p});return!function(o){let{respectReducedMotion:n,getRootElement:e}=o;(0,x.Y)(()=>{if(n){var o;null===(o=e())||void 0===o||o.setAttribute("data-respect-reduced-motion","true")}},[n])}({respectReducedMotion:(null==n?void 0:n.respectReducedMotion)||!1,getRootElement:p}),(0,t.jsx)(r.XD.Provider,{value:{colorScheme:E,setColorScheme:j,clearColorScheme:M,getRootElement:p,classNamesPrefix:g,getStyleNonce:c,cssVariablesResolver:k,cssVariablesSelector:v,withStaticClasses:i,stylesTransform:w},children:(0,t.jsxs)(s.M2,{theme:n,children:[u&&(0,t.jsx)(S,{cssVariablesSelector:v,deduplicateCssVariables:d}),l&&(0,t.jsx)(h,{}),e]})})}!function(){let o=console.error;console.error=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];e.length>1&&"string"==typeof e[0]&&e[0].toLowerCase().includes("extra attributes from the server")&&"string"==typeof e[1]&&e[1].toLowerCase().includes("data-mantine-color-scheme")||o(...e)}}(),E.displayName="@mantine/core/MantineProvider"}},function(o){o.O(0,[79,589,971,23,744],function(){return o(o.s=9436)}),_N_E=o.O()}]);
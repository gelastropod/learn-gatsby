(self.webpackChunklearn_gatsby=self.webpackChunklearn_gatsby||[]).push([[678],{6558:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return y}});var r=n(6796),o=n.n(r),i=n(7294);const u={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif",overflow:"hidden",whiteSpace:"pre-line"},c={marginTop:0,marginBottom:64,maxWidth:1e3},a={position:"sticky",top:20,maxWidth:1e3},l={marginBottom:48},f={color:"#3747D4",fontWeight:"bold",fontSize:16,textDecoration:"none"},s={color:"#3747D4",fontWeight:"bold",textDecoration:"none"};function p(t){for(var e="",n=0;n<t;n++)e+="\n";return i.createElement("p",null,e)}const v=(0,i.memo)((()=>i.createElement("main",{style:u},i.createElement("h1",{style:c},"Welcome to learn-gatsby, a site used by ",i.createElement("a",{style:s,href:"https://github.com/gelastropod"},"gelastropod")," to learn Gatsby ",i.createElement("i",null,"(obviously)")),i.createElement("p",{style:l},"Visit my site at ",i.createElement("a",{style:f,href:"https://gelastropod.github.io"},"gelastropod.github.io")),i.createElement("h1",{style:a},"This is sticky"),p(50),i.createElement("p",null,o()("-",198)),(()=>{const{0:t,1:e}=(0,i.useState)(0);return(0,i.useEffect)((()=>{let t=!1;const n=()=>{t||(window.requestAnimationFrame((()=>{e(window.pageYOffset),t=!1})),t=!0)};return"undefined"!=typeof window&&window.addEventListener("scroll",n),()=>{"undefined"!=typeof window&&(console.log("asd"),window.removeEventListener("scroll",n))}}),[]),i.createElement("div",null,i.createElement("h1",{style:{...c,position:"absolute",left:3*t-2500+"px"}},"Woweeee"))})(),i.createElement("h1",{style:{marginTop:0,marginBottom:0}}," "),i.createElement("p",null,o()("-",198)),p(50))));e.default=v;const y=()=>i.createElement("title",null,"Learn Gatsby")},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},4239:function(t,e,n){var r=n(2705),o=n(9607),i=n(2333),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},8190:function(t){var e=Math.floor;t.exports=function(t,n){var r="";if(!t||n<1||n>9007199254740991)return r;do{n%2&&(r+=t),(n=e(n/2))&&(t+=t)}while(n);return r}},531:function(t,e,n){var r=n(2705),o=n(9932),i=n(1469),u=n(3448),c=r?r.prototype:void 0,a=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(u(e))return a?a.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},7561:function(t,e,n){var r=n(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(a){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},5776:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},6612:function(t,e,n){var r=n(7813),o=n(8612),i=n(5776),u=n(3218);t.exports=function(t,e,n){if(!u(n))return!1;var c=typeof e;return!!("number"==c?o(n)&&i(e,n.length):"string"==c&&e in n)&&r(n[e],t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},7813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},1469:function(t){var e=Array.isArray;t.exports=e},8612:function(t,e,n){var r=n(3560),o=n(1780);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},3560:function(t,e,n){var r=n(4239),o=n(3218);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},6796:function(t,e,n){var r=n(8190),o=n(6612),i=n(554),u=n(9833);t.exports=function(t,e,n){return e=(n?o(t,e,n):void 0===e)?1:i(e),r(u(t),e)}},8601:function(t,e,n){var r=n(4841),o=1/0;t.exports=function(t){return t?(t=r(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:function(t,e,n){var r=n(8601);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},4841:function(t,e,n){var r=n(7561),o=n(3218),i=n(3448),u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||a.test(t)?l(t.slice(2),n?2:8):u.test(t)?NaN:+t}},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-aa91d9c9cba949ce14d6.js.map
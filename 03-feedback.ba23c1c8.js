!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),g=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=y();if(b(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?v(n,a-(e-c)):n}(e))}function h(e){return f=void 0,d&&i?g(e):(i=o=void 0,u)}function w(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(O,t),s?g(e):u}(l);if(m)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,S(n)&&(s=!!n.leading,a=(m="maxWait"in n)?p(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(y())},w}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return i;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return S(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const O=document.querySelector("form"),h=document.querySelector("input[type=email]"),w=document.querySelector("textarea[name=message]"),T=JSON.parse(localStorage.getItem("feedback-form-state")),x={email:"",message:""},E=e(t)((e=>{x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500);O.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),O.reset(),localStorage.removeItem("feedback-form-state")})),T?(x.email=T.email,x.message=T.message):(x.email="",x.message=""),h.value=x.email,w.value=x.message,h.addEventListener("input",E),w.addEventListener("input",E)}();
//# sourceMappingURL=03-feedback.ba23c1c8.js.map

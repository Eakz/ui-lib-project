!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=12)}([function(t,n,e){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},r=[],i=0;i<t.length;i++){var o=t[i],c=n.base?o[0]+n.base:o[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var f=s(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:g(d,n),references:1}),r.push(u)}return r}function l(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=e.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,f=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function d(t,n,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function p(t,n,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function g(t,n){var e,r,i;if(n.singleton){var o=v++;e=h||(h=l(n)),r=d.bind(null,e,o,!1),i=d.bind(null,e,o,!0)}else e=l(n),r=p.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var i=s(e[r]);a[i].references--}for(var o=c(t,n),l=0;l<e.length;l++){var u=s(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=o}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(o).concat([i]).join("\n")}var a,s,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n,e){var r=e(0),i=e(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,'.tooltip{\n    position: relative;\n    display: inline-block;\n    color:#ff6565;\n    border-bottom: 1px dotted #ff6565;\n    cursor:help;\n}\n.tip{\n    visibility: hidden;\n    width: 150px;\n    background-color: #ff6565;\n    color:#fff;\n    text-align:center;\n    border-radius:10px;\n    padding:5px 0;\n    position: absolute;\n    bottom:120%;\n    left:50%;\n    margin-left:-75px;\n    opacity:0;\n    transition: opacity 0.3s;\n}\n.tip.active{\n    visibility: visible;\n    opacity: 1;\n\n}\n.tip::after{\n    content: "";\n    position: absolute;\n    top:100%;\n    left: 50%;\n    margin-left: -4px;\n    border-width: 4px;\n    border-style: solid;\n    border-color: transparent;\n    border-top-color: #ff6565;\n}',""]),t.exports=n},function(t,n,e){var r=e(0),i=e(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,'.dropdown .trigger{\n    border-bottom: 1px solid #ddd;\n    padding: 10px;\n    position: relative;\n    cursor: pointer;\n  }\n  .dropdown .trigger::after{\n    content: ">";\n    display: inline-block;\n    position: absolute;\n    right: 15px;\n    transform: rotate(90deg) scale(0.5, 1);\n    font-weight: bold;\n    transition: transform 0.3s;\n  }\n  .dropdown .trigger.active::after{\n    transform: rotate(-90deg) scale(0.5, 1);\n  }\n  .dropdown .content{\n    display: none;\n  }\n  .dropdown .content.active{\n    display: block;\n  }',""]),t.exports=n},function(t,n,e){var r=e(0),i=e(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,".tabs > ul{\n    padding: 0;\n  }\n  .tabs .trigger{\n    list-style-type: none;\n    padding: 10px;\n    background: #f2f2f2;\n    margin: 4px;\n    border-radius: 6px;\n    display: inline-block;\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  .tabs .trigger.active{\n    background: #ff6565;\n    color: white;\n  }\n  .tabs .content{\n    background: #fbfbfb;\n    padding: 10px 20px;\n    border-radius: 6px;\n    display: none;\n  }\n  .tabs .content.active{\n    display: block;\n  }",""]),t.exports=n},function(t,n,e){var r=e(0),i=e(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,".snackbar {\n    width: 200px;\n    padding: 20px;\n    position: fixed;\n    left: 50%;\n    margin-left: -120px;\n    top: 0;\n    border-radius: 0 0 5px 5px;\n    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0, 2);\n    background: #ff6565;\n    text-align: center;\n    color: #fff;\n    margin-top: -100%;\n    transition: all 0.2s;\n}\n.snackbar.active {\n    margin-top: 0;\n\n}\n\n",""]),t.exports=n},function(t,n,e){var r=e(0),i=e(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},function(t,n,e){(n=e(1)(!1)).push([t.i,".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    padding: 0 3rem;\r\n}\r\nh1, h2 {\r\n    font-weight: 200;\r\n    margin: 0.4rem;\r\n}\r\nh1{\r\n    padding-top: 3rem;\r\n    font-size: 3.5rem;\r\n}\r\nh2{\r\n    font-size: 2rem;\r\n    color: #aaa;\r\n}\r\n/* Cursor */\r\n.txt-type>.txt{\r\n    animation: blink 1.5s linear;\r\n}\r\n@keyframes blink{\r\n    from,to {border-right: 0.2rem solid black;}\r\n    50% {border-right: 0.2rem solid transparent;}\r\n}\r\n",""]),t.exports=n},function(t,n,e){"use strict";e.r(n);e(2);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.message=n.getAttribute("data-message")}var n,e,i;return n=t,(e=[{key:"init",value:function(){var t=document.createElement("div");t.classList.add("tip"),t.textContent=this.message,this.element.appendChild(t),this.element.addEventListener("mouseenter",(function(){t.classList.add("active")})),this.element.addEventListener("mouseleave",(function(){t.classList.remove("active")}))}}])&&r(n.prototype,e),i&&r(n,i),t}();e(4);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n,this.trigger=n.querySelector(".trigger"),this.content=n.querySelector(".content")}var n,e,r;return n=t,(e=[{key:"init",value:function(){var t=this;this.trigger.addEventListener("click",(function(){t.trigger.classList.toggle("active"),t.content.classList.toggle("active")}))}}])&&o(n.prototype,e),r&&o(n,r),t}();e(6);function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n,this.tabs=n.querySelectorAll(".trigger")}var n,e,r;return n=t,(e=[{key:"init",value:function(){var t=this;this.tabs.forEach((function(n){n.addEventListener("click",(function(n){t.toggleTabs(n),t.toggleContent(n)}))}))}},{key:"toggleTabs",value:function(t){this.tabs.forEach((function(t){return t.classList.remove("active")})),t.target.classList.add("active")}},{key:"toggleContent",value:function(t){this.container.querySelectorAll(".content").forEach((function(t){t.classList.remove("active")}));var n=t.target.getAttribute("data-target");this.container.querySelector(n).classList.add("active")}}])&&s(n.prototype,e),r&&s(n,r),t}();e(8);function l(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.snackbar=document.createElement("dic")}var n,e,r;return n=t,(e=[{key:"init",value:function(){this.snackbar.classList.add("snackbar"),document.querySelector("body").appendChild(this.snackbar)}},{key:"show",value:function(t){var n=this;this.snackbar.textContent=t,this.snackbar.classList.add("active"),setTimeout((function(){n.snackbar.classList.remove("active")}),4e3)}}])&&l(n.prototype,e),r&&l(n,r),t}();e(10);function f(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;f(this,t),this.txtElement=n,this.words=e,this.txt="",this.wordIndex=0,this.wait=parseInt(r,10),this.type(),this.isDeleting=!1,this.startPause=!1}var n,e,r;return n=t,(e=[{key:"type",value:function(){var t=this,n=this.wordIndex%this.words.length,e=this.words[n];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var r=300;this.isDeleting&&(r/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.startPause?(this.isDeleting=!1,this.startPause=!1,this.wordIndex++,r=500):(r=this.wait/2,this.startPause=!0)):(r=this.wait,this.isDeleting=!0),setTimeout((function(){return t.type()}),r)}}])&&d(n.prototype,e),r&&d(n,r),t}();new i(document.querySelector(".tooltip")).init(),document.querySelectorAll(".dropdown").forEach((function(t){new a(t).init()})),new c(document.querySelector(".tabs")).init();var h=new u;h.init(),document.querySelector("button").addEventListener("click",(function(){h.show("you clicked me :)")})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".txt-type"),n=JSON.parse(t.getAttribute("data-words")),e=t.getAttribute("data-wait");new p(t,n,e)}))}]);
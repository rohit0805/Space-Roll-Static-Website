!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r,o,i,u;t(1);(r=".burger",o=".nav_link",i={burger:document.querySelector(r),navlink:document.querySelector(o),navItems:document.querySelectorAll("".concat(o," li"))},u=function(e){i.navlink.classList.toggle("show_navlink"),i.navItems.forEach((function(e,n){e.style.animation?e.style.animation="":e.style.animation="NavFadeEffect 0.5s ease ".concat(n/7+.3,"s forwards")}))},{init:function(){i.burger.addEventListener("click",u)}}).init()},function(e,n,t){}]);
//# sourceMappingURL=[main].7e7ff410dd337b5022bd.js.map
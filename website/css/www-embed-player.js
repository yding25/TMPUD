(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function oa(){this.m=!1;this.j=null;this.i=void 0;this.h=1;this.A=this.u=0;this.l=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.o=function(a){this.i=a};
function qa(a,b){a.l={va:b,Pa:!0};a.h=a.u||a.A}
oa.prototype["return"]=function(a){this.l={"return":a};this.h=this.A};
function x(a,b,c){a.h=c;return{value:b}}
function ra(a){a.u=0;var b=a.l.va;a.l=null;return b}
function sa(a){this.h=new oa;this.i=a}
function ta(a,b){pa(a.h);var c=a.h.j;if(c)return ua(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return va(a)}
function ua(a,b,c,d){try{var e=b.call(a.h.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.m=!1,e;var f=e.value}catch(g){return a.h.j=null,qa(a.h,g),va(a)}a.h.j=null;d.call(a.h,f);return va(a)}
function va(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.m=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.m=!1;if(a.h.l){b=a.h.l;a.h.l=null;if(b.Pa)throw b.va;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function wa(a){this.next=function(b){pa(a.h);a.h.j?b=ua(a,a.h.j.next,b,a.h.o):(a.h.o(b),b=va(a));return b};
this["throw"]=function(b){pa(a.h);a.h.j?b=ua(a,a.h.j["throw"],b,a.h.o):(qa(a.h,b),b=va(a));return b};
this["return"]=function(b){return ta(a,b)};
this[Symbol.iterator]=function(){return this}}
function xa(a,b){var c=new wa(new sa(b));na&&a.prototype&&na(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function ya(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
function za(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Aa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)za(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Aa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.u)}};
b.prototype.J=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.S(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.m(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.T(h,g):this.m(g)};
b.prototype.u=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.K();this.C()};
b.prototype.K=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.S=function(g){var h=this.l();g.ca(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(y){n(y)}}:r}
var l,n,p=new b(function(q,r){l=q;n=r});
this.ca(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ca=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ca(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(y){q[w]=y;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ca(p(q.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ya(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push([d,b[d]]);return c}});
function Ba(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ba(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ba(this,function(b,c){return c})}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ba(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!za(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!za(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&za(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&za(k,g)&&za(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&za(h.i,l))for(var p=0;p<n.length;p++){var q=n[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:p,G:q}}return{id:l,list:n,index:-1,G:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.G?l.G.value=k:(l.G={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.G),this.h.previous.next=l.G,this.h.previous=l.G,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.G&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.G.previous.next=h.G.next,h.G.next.previous=h.G.previous,h.G.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).G};
e.prototype.get=function(h){return(h=d(this,h).G)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)za(b,d)&&c.push(b[d]);return c}});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ca(a){if(a&&a!=z)return Da(a.document);null===Ea&&(Ea=Da(z.document));return Ea}
var Fa=/^[\w+/_-]+[=]{0,2}$/,Ea=null;function Da(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Fa.test(a)?a:""}
function B(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ga(){}
function Ha(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function Ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?E=Na:E=Oa;return E.apply(null,arguments)}
function Pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function F(){return Date.now()}
function Qa(a,b){A(a,b,void 0)}
function G(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ra(a){return a}
;function Sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Sa,Error);Sa.prototype.name="CustomError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ua(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Za(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function $a(a,b){var c=Va(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function cb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(){var a=I("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;function ob(){if(void 0===nb){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ra,createScript:Ra,createScriptURL:Ra})}catch(c){z.console&&z.console.error(c.message)}nb=a}else nb=a}return nb}
;function pb(a,b){this.h=b===qb?a:""}
m=pb.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.ka=!0;m.ha=function(){return 1};
m.toString=function(){return this.h+""};
function rb(a){if(a instanceof pb&&a.constructor===pb)return a.h;Ia(a);return"type_error:TrustedResourceUrl"}
var qb={};var sb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function tb(a,b){if(b)a=a.replace(ub,"&amp;").replace(vb,"&lt;").replace(wb,"&gt;").replace(xb,"&quot;").replace(yb,"&#39;").replace(zb,"&#0;");else{if(!Ab.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;"))}return a}
var ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function J(a,b){this.h=b===Bb?a:""}
m=J.prototype;m.W=!0;m.V=function(){return this.h.toString()};
m.ka=!0;m.ha=function(){return 1};
m.toString=function(){return this.h.toString()};
function Cb(a){if(a instanceof J&&a.constructor===J)return a.h;Ia(a);return"type_error:SafeUrl"}
var Db=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Eb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Gb(a){if(a instanceof J)return a;a="object"==typeof a&&a.W?a.V():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return new J(a,Bb)}
var Bb={},Hb=new J("about:invalid#zClosurez",Bb);var Ib;a:{var Jb=z.navigator;if(Jb){var Kb=Jb.userAgent;if(Kb){Ib=Kb;break a}}Ib=""}function K(a){return-1!=Ib.indexOf(a)}
;function Lb(a,b,c){this.h=c===Mb?a:"";this.i=b}
m=Lb.prototype;m.ka=!0;m.ha=function(){return this.i};
m.W=!0;m.V=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Mb={};function Nb(a,b){var c=ob();c=c?c.createHTML(a):a;return new Lb(c,b,Mb)}
;function Ob(a,b){var c=b instanceof J?b:Gb(b);a.href=Cb(c)}
function Pb(a,b){a.src=rb(b);var c=Ca(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Qb(a){return a=tb(a,void 0)}
function Rb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Sb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Tb(a){return a?decodeURI(a):a}
function Ub(a){return Tb(a.match(Sb)[3]||null)}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
function Xb(a,b){var c=Wb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Yb=/#|$/;function Zb(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function $b(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function ac(a){ac[" "](a);return a}
ac[" "]=Ga;var bc=K("Opera"),cc=K("Trident")||K("MSIE"),dc=K("Edge"),ec=K("Gecko")&&!(-1!=Ib.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),fc=-1!=Ib.toLowerCase().indexOf("webkit")&&!K("Edge");function gc(){var a=z.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",jc=function(){var a=Ib;if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
jc&&(ic=jc?jc[1]:"");if(cc){var kc=gc();if(null!=kc&&kc>parseFloat(ic)){hc=String(kc);break a}}hc=ic}var lc=hc,mc;if(z.document&&cc){var nc=gc();mc=nc?nc:parseInt(lc,10)||void 0}else mc=void 0;var oc=mc;var pc=$b()||K("iPod"),qc=K("iPad"),rc=K("Safari")&&!((K("Chrome")||K("CriOS"))&&!K("Edge")||K("Coast")||K("Opera")||K("Edge")||K("Edg/")||K("OPR")||K("Firefox")||K("FxiOS")||K("Silk")||K("Android"))&&!($b()||K("iPad")||K("iPod"));var sc={},tc=null;
function uc(a){var b=3;Ja(a);void 0===b&&(b=0);if(!tc){tc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));sc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===tc[h]&&(tc[h]=g)}}}b=sc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var L=window;var vc=!cc||9<=Number(oc);function wc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=wc.prototype;m.clone=function(){return new wc(this.x,this.y)};
m.equals=function(a){return a instanceof wc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function xc(a,b){this.width=a;this.height=b}
m=xc.prototype;m.clone=function(){return new xc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function yc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function zc(a,b){cb(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ac.hasOwnProperty(d)?a.setAttribute(Ac[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Bc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!vc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Qb(g.name),'"');if(g.type){f.push(' type="',Qb(g.type),'"');var h={};mb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Cc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):zc(f,g));2<d.length&&Dc(e,f,d);return f}
function Dc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ja(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}H(g?ab(f):f,d)}}}
function Cc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Ec(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Fc(a){var b=Gc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Hc(){var a=[];Fc(function(b){a.push(b)});
return a}
var Gc={rb:"allow-forms",sb:"allow-modals",tb:"allow-orientation-lock",ub:"allow-pointer-lock",vb:"allow-popups",wb:"allow-popups-to-escape-sandbox",xb:"allow-presentation",yb:"allow-same-origin",zb:"allow-scripts",Ab:"allow-top-navigation",Bb:"allow-top-navigation-by-user-activation"},Ic=Ua(function(){return Hc()});
function Jc(){var a=Cc(document,"IFRAME"),b={};H(Ic(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Kc(a){Lc();var b=ob();a=b?b.createScriptURL(a):a;return new pb(a,qb)}
var Lc=Ga;function Mc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Nc=(new Date).getTime();function Oc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Pc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],y=e[2],C=e[3],T=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var M=C^w&(y^C);var Y=1518500249}else M=w^y^C,Y=1859775393;else 60>r?(M=w&y|C&(w|y),Y=2400959708):(M=w^y^C,Y=3395469782);M=((p<<5|p>>>27)&4294967295)+M+T+Y+q[r]&4294967295;T=C;C=y;y=(w<<30|w>>>2)&4294967295;w=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+T&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,y=p.length;w<y;++w)r.push(p.charCodeAt(w));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<q;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)p[q++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ea:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function Qc(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Rc(Oc(d),a,c||null)].join(" "):null}
function Rc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Sc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Sc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Sc(a){var b=Pc();b.update(a);return b.Ea().toLowerCase()}
;var Tc={};function Uc(a){this.h=a||{cookie:""}}
m=Uc.prototype;m.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ma:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=sb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=sb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vc=new Uc("undefined"==typeof document?null:document);function Wc(a){return!!Tc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Xc(a,b,c,d){(a=z[a])||(a=(new Uc(document)).get(b));return a?Qc(a,c,d):null}
function Yc(a){var b=void 0===b?!1:b;var c=Oc(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;Wc(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new Uc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Wc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new Uc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Qc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Wc(b)&&((b=Xc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Xc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Zc(){this.h=[];this.i=-1}
Zc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.i=-1)};
Zc.prototype.get=function(a){return!!this.h[a]};
function $c(a){-1==a.i&&(a.i=Ya(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function ad(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ad.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function bd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var cd;
function dd(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Cc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=E(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ra;c.ra=null;e()}};
return function(e){d.next={ra:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function ed(a){z.setTimeout(function(){throw a;},0)}
;function fd(){this.i=this.h=null}
fd.prototype.add=function(a,b){var c=gd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
fd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var gd=new ad(function(){return new hd},function(a){return a.reset()});
function hd(){this.next=this.scope=this.h=null}
hd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
hd.prototype.reset=function(){this.next=this.scope=this.h=null};function id(a,b){jd||kd();ld||(jd(),ld=!0);md.add(a,b)}
var jd;function kd(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);jd=function(){a.then(nd)}}else jd=function(){var b=nd;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!K("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(cd||(cd=dd()),cd(b)):z.setImmediate(b)}}
var ld=!1,md=new fd;function nd(){for(var a;a=md.remove();){try{a.h.call(a.scope)}catch(b){ed(b)}bd(gd,a)}ld=!1}
;function od(){this.i=-1}
;function pd(){this.i=64;this.h=[];this.m=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.u=this.j=0;this.reset()}
G(pd,od);pd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.u=this.j=0};
function qd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
pd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)qd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){qd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){qd(this,e);f=0;break}}this.j=f;this.u+=b}};
pd.prototype.digest=function(){var a=[],b=8*this.u;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.m[c]=b&255,b/=256;qd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function rd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=sd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,td[c])c=td[c];else{c=String(c);if(!td[c]){var f=/function\s+([^\(]+)/m.exec(c);td[c]=f?f[1]:"[Anonymous]"}c=td[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function sd(a,b){b||(b={});b[ud(a)]=!0;var c=a.stack||"",d=a.uk;d&&!b[ud(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=sd(d,b));return c}
function ud(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var td={};function vd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function wd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ja(d)?wd.apply(null,d):vd(d)}}
;function N(){this.h=this.h;this.u=this.u}
N.prototype.h=!1;N.prototype.dispose=function(){this.h||(this.h=!0,this.B())};
function xd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
N.prototype.B=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function yd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function zd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ad(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:yd(a).match(/\S+/g)||[],c=0<=Va(c,b);return c}
function Bd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ad(a,"inverted-hdpi")&&zd(a,Wa(a.classList?a.classList:yd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Cd="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function Dd(){}
Dd.prototype.next=function(){throw Cd;};
Dd.prototype.L=function(){return this};
function Ed(a){if(a instanceof Dd)return a;if("function"==typeof a.L)return a.L(!1);if(Ja(a)){var b=0,c=new Dd;c.next=function(){for(;;){if(b>=a.length)throw Cd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Fd(a,b){if(Ja(a))try{H(a,b,void 0)}catch(c){if(c!==Cd)throw c;}else{a=Ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Cd)throw c;}}}
function Gd(a){if(Ja(a))return ab(a);a=Ed(a);var b=[];Fd(a,function(c){b.push(c)});
return b}
;function Hd(a,b){this.i={};this.h=[];this.N=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hd)for(c=Id(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Id(a){Jd(a);return a.h.concat()}
m=Hd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||Kd;Jd(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Kd(a,b){return a===b}
m.isEmpty=function(){return 0==this.j};
m.clear=function(){this.i={};this.N=this.j=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.j--,this.N++,this.h.length>2*this.j&&Jd(this),!0):!1};
function Jd(a){if(a.j!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.j!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.j++,this.h.push(a),this.N++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Id(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Hd(this)};
m.L=function(a){Jd(this);var b=0,c=this.N,d=this,e=new Dd;e.next=function(){if(c!=d.N)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Cd;var f=d.h[b++];return a?f:d.i[f]};
return e};var Ld=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ga,b),z.removeEventListener("test",Ga,b)}catch(c){}return a}();function Md(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Md.prototype.stopPropagation=function(){this.j=!0};
Md.prototype.preventDefault=function(){this.defaultPrevented=!0};function Nd(a,b){Md.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
G(Nd,Md);var Od={2:"touch",3:"pen",4:"mouse"};
Nd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(ec){a:{try{ac(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Od[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Nd.H.preventDefault.call(this)};
Nd.prototype.stopPropagation=function(){Nd.H.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Nd.prototype.preventDefault=function(){Nd.H.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pd="closure_listenable_"+(1E6*Math.random()|0);var Qd=0;function Rd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Qd;this.Y=this.ba=!1}
function Sd(a){a.Y=!0;a.listener=null;a.h=null;a.src=null;a.da=null}
;function Td(a){this.src=a;this.listeners={};this.h=0}
Td.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ud(a,b,d,e);-1<g?(b=a[g],c||(b.ba=!1)):(b=new Rd(b,this.src,f,!!d,e),b.ba=c,a.push(b));return b};
Td.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ud(e,b,c,d);return-1<b?(Sd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Vd(a,b){var c=b.type;c in a.listeners&&$a(a.listeners[c],b)&&(Sd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ud(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Y&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return-1}
;var Wd="closure_lm_"+(1E6*Math.random()|0),Xd={},Yd=0;function Zd(a,b,c,d,e){if(d&&d.once)$d(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Zd(a,b[f],c,d,e);else c=ae(c),a&&a[Pd]?be(a,b,c,D(d)?!!d.capture:!!d,e):ce(a,b,c,!1,d,e)}
function ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=de(a);h||(a[Wd]=h=new Td(a));c=h.add(b,c,d,g,f);if(!c.h){d=ee();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)Ld||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Yd++}}
function ee(){function a(c){return b.call(a.src,a.listener,c)}
var b=ge;return a}
function $d(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$d(a,b[f],c,d,e);else c=ae(c),a&&a[Pd]?a.i.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):ce(a,b,c,!0,d,e)}
function he(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)he(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=ae(c),a&&a[Pd])?a.i.remove(String(b),c,d,e):a&&(a=de(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ud(b,c,d,e)),(c=-1<a?b[a]:null)&&ie(c))}
function ie(a){if("number"!==typeof a&&a&&!a.Y){var b=a.src;if(b&&b[Pd])Vd(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Yd--;(c=de(b))?(Vd(c,a),0==c.h&&(c.src=null,b[Wd]=null)):Sd(a)}}}
function fe(a){return a in Xd?Xd[a]:Xd[a]="on"+a}
function ge(a,b){if(a.Y)var c=!0;else{c=new Nd(b,this);var d=a.listener,e=a.da||a.src;a.ba&&ie(a);c=d.call(e,c)}return c}
function de(a){a=a[Wd];return a instanceof Td?a:null}
var je="__closure_events_fn_"+(1E9*Math.random()>>>0);function ae(a){if("function"===typeof a)return a;a[je]||(a[je]=function(b){return a.handleEvent(b)});
return a[je]}
;function ke(){N.call(this);this.i=new Td(this);this.F=this;this.m=null}
G(ke,N);ke.prototype[Pd]=!0;ke.prototype.addEventListener=function(a,b,c,d){Zd(this,a,b,c,d)};
ke.prototype.removeEventListener=function(a,b,c,d){he(this,a,b,c,d)};
function le(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}c=a.F;e=b;var f=e.type||e;if("string"===typeof e)e=new Md(e,c);else if(e instanceof Md)e.target=e.target||c;else{var g=e;e=new Md(f,c);mb(e,g)}g=!0;if(d)for(var h=d.length-1;!e.j&&0<=h;h--){var k=e.h=d[h];g=me(k,f,!0,e)&&g}e.j||(k=e.h=c,g=me(k,f,!0,e)&&g,e.j||(g=me(k,f,!1,e)&&g));if(d)for(h=0;!e.j&&h<d.length;h++)k=e.h=d[h],g=me(k,f,!1,e)&&g}
ke.prototype.B=function(){ke.H.B.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Sd(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function be(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function me(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Y&&g.capture==c){var h=g.listener,k=g.da||g.src;g.ba&&Vd(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ne(a){var b=[];oe(new pe,a,b);return b.join("")}
function pe(){}
function oe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),oe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qe(d,c),c.push(":"),oe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var re={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},se=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function qe(a,b){b.push('"',a.replace(se,function(c){var d=re[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),re[c]=d);return d}),'"')}
;function te(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ga)try{var b=this;a.call(void 0,function(c){ue(b,2,c)},function(c){ue(b,3,c)})}catch(c){ue(this,3,c)}}
function ve(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
ve.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var we=new ad(function(){return new ve},function(a){a.reset()});
function xe(a,b,c){var d=we.get();d.i=a;d.onRejected=b;d.context=c;return d}
function ye(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return ze(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
O.prototype.$goog_Thenable=!0;function Ae(a,b){return ze(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.h){var b=new Be(a);id(function(){Ce(this,b)},this)}};
function Ce(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ce(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):De(c),Ee(c,e,3,b)))}a.j=null}else ue(a,3,b)}
function Fe(a,b){a.i||2!=a.h&&3!=a.h||Ge(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ze(a,b,c,d){var e=xe(null,null,null);e.h=new O(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Be?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Fe(a,e);return e.h}
O.prototype.C=function(a){this.h=0;ue(this,2,a)};
O.prototype.F=function(a){this.h=0;ue(this,3,a)};
function ue(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof O){Fe(d,xe(e||Ga,f||null,a));var g=!0}else if(te(d))d.then(e,f,a),g=!0;else{if(D(d))try{var h=d.then;if("function"===typeof h){He(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Ge(a),3!=b||c instanceof Be||Ie(a,c))}}
function He(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ge(a){a.m||(a.m=!0,id(a.A,a))}
function De(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
O.prototype.A=function(){for(var a;a=De(this);)Ee(this,a,this.h,this.o);this.m=!1};
function Ee(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,Je(b,c,d);else try{b.j?b.i.call(b.context):Je(b,c,d)}catch(e){Ke.call(null,e)}bd(we,b)}
function Je(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ie(a,b){a.u=!0;id(function(){a.u&&Ke.call(null,b)})}
var Ke=ed;function Be(a){Sa.call(this,a)}
G(Be,Sa);Be.prototype.name="cancel";function P(a){N.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
G(P,N);m=P.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Le(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=Za(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.X(b)}}
m.X=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ga):(c&&$a(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.O=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Me(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.X(c)}}return 0!=e}return!1};
function Me(a,b,c){id(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(H(b,this.X,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.B=function(){P.H.B.call(this);this.clear();this.l.length=0};function Ne(a){this.h=a}
Ne.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,ne(b))};
Ne.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ne.prototype.remove=function(a){this.h.remove(a)};function Oe(a){this.h=a}
G(Oe,Ne);function Pe(a){this.data=a}
function Qe(a){return void 0===a||a instanceof Pe?a:new Pe(a)}
Oe.prototype.set=function(a,b){Oe.H.set.call(this,a,Qe(b))};
Oe.prototype.i=function(a){a=Oe.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Oe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Re(a){this.h=a}
G(Re,Oe);Re.prototype.set=function(a,b,c){if(b=Qe(b)){if(c){if(c<F()){Re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}Re.H.set.call(this,a,b)};
Re.prototype.i=function(a){var b=Re.H.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())Re.prototype.remove.call(this,a);else return b}};function Se(){}
;function Te(){}
G(Te,Se);Te.prototype.clear=function(){var a=Gd(this.L(!0)),b=this;H(a,function(c){b.remove(c)})};function Ue(a){this.h=a}
G(Ue,Te);m=Ue.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.L=function(a){var b=0,c=this.h,d=new Dd;d.next=function(){if(b>=c.length)throw Cd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(Ve,Ue);function We(a,b){this.i=a;this.h=null;if(cc&&!(9<=Number(oc))){Xe||(Xe=new Hd);this.h=Xe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xe.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
G(We,Te);var Ye={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xe=null;function Ze(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ye[b]})}
m=We.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ze(a),b);$e(this)};
m.get=function(a){a=this.h.getAttribute(Ze(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ze(a));$e(this)};
m.L=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Dd;d.next=function(){if(b>=c.length)throw Cd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$e(this)};
function $e(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function af(a,b){this.i=a;this.h=b+"::"}
G(af,Te);af.prototype.set=function(a,b){this.i.set(this.h+a,b)};
af.prototype.get=function(a){return this.i.get(this.h+a)};
af.prototype.remove=function(a){this.i.remove(this.h+a)};
af.prototype.L=function(a){var b=this.i.L(!0),c=this,d=new Dd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function bf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var cf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",cf,void 0);function df(a){bf(cf,arguments)}
function I(a,b){return a in cf?cf[a]:b}
;var ef=[];function ff(a){ef.forEach(function(b){return b(a)})}
function gf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hf(b),ff(b)}}:a}
function hf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=I("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),df("ERRORS",b))}
function jf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=I("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),df("ERRORS",b))}
;var kf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",kf,void 0);function lf(a){bf(kf,arguments)}
;function Q(a){a=mf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function nf(a,b){var c=mf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function mf(a){var b=I("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:I("EXPERIMENT_FLAGS",{})[a]}
;var of=0;A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++of},void 0);var pf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in pf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function rf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
qf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",eb,void 0);var sf=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",sf,void 0);
function tf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var uf=Ua(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function vf(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=tf(a,b,c,d);if(e)return e;e=++sf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new qf(h);if(!Ec(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new qf(h);
h.currentTarget=a;return c.call(a,h)};
g=gf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),uf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function wf(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?uf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var xf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function R(a,b){"function"===typeof a&&(a=gf(a));return window.setTimeout(a,b)}
function yf(a){window.clearTimeout(a)}
;function zf(a){this.C=a;this.i=null;this.m=0;this.A=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.I=vf(window,"mousemove",E(this.J,this));a=E(this.F,this);"function"===typeof a&&(a=gf(a));this.K=window.setInterval(a,25)}
G(zf,N);zf.prototype.J=function(a){void 0===a.h&&rf(a);var b=a.h;void 0===a.i&&rf(a);this.i=new wc(b,a.i)};
zf.prototype.F=function(){if(this.i){var a=xf();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.o=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
zf.prototype.B=function(){window.clearInterval(this.K);wf(this.I)};function Af(){}
function Bf(a,b){return Cf(a,1,b)}
;function Df(){Af.apply(this,arguments)}
v(Df,Af);function Cf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
function Ef(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):yf(a)}}
Df.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Df.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
Ha(Df);Df.getInstance();var Ff={};
function Gf(a){var b=void 0===a?{}:a;a=void 0===b.Ha?!0:b.Ha;b=void 0===b.Ua?!1:b.Ua;if(null==B("_lact",window)){var c=parseInt(I("LACT"),10);c=isFinite(c)?F()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Hf();vf(document,"keydown",Hf);vf(document,"keyup",Hf);vf(document,"mousedown",Hf);vf(document,"mouseup",Hf);a&&(b?vf(window,"touchmove",function(){If("touchmove",200)},{passive:!0}):(vf(window,"resize",function(){If("resize",200)}),vf(window,"scroll",function(){If("scroll",200)})));
new zf(function(){If("mouse",100)});
vf(document,"touchstart",Hf,{passive:!0});vf(document,"touchend",Hf,{passive:!0})}}
function If(a,b){Ff[a]||(Ff[a]=!0,Bf(function(){Hf();Ff[a]=!1},b))}
function Hf(){null==B("_lact",window)&&Gf();var a=F();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Jf(){var a=B("_lact",window);return null==a?-1:Math.max(F()-a,0)}
;function Kf(){var a=Lf;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Mf(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var Nf=/^[\w.]*$/,Of={q:!0,search_query:!0};function Pf(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=Qf(g[0]||""),k=Qf(g[1]||"");h in d?Array.isArray(d[h])?bb(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(q){var l=q,n=g[0],p=String(Pf);l.args=[{key:n,value:g[1],query:a,method:Rf==p?"unchanged":p}];Of.hasOwnProperty(n)||jf(l)}}return d}
var Rf=String(Pf);function Sf(a){var b=[];cb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Tf(a){"?"==a.charAt(0)&&(a=a.substr(1));return Pf(a,"&")}
function Uf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Tf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Xb(a,e)+d}
function Qf(a){return a&&a.match(Nf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Vf(a){var b=Wf;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Nc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(T){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?L:g;try{var h=g.history.length}catch(T){h=0}e.u_his=h;e.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(e.u_h=L.screen.height,e.u_w=L.screen.width,
e.u_ah=L.screen.availHeight,e.u_aw=L.screen.availWidth,e.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(e.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(e.u_nmime=L.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(T){}try{var n=h.outerWidth;var p=h.outerHeight}catch(T){}try{var q=h.innerWidth;var r=h.innerHeight}catch(T){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,n,p,q,r];
l=b.h.top;try{var w=(l||window).document,y="CSS1Compat"==w.compatMode?w.documentElement:w.body;var C=(new xc(y.clientWidth,y.clientHeight)).round()}catch(T){C=new xc(-12245933,-12245933)}w=C;C={};y=new Zc;z.SVGElement&&z.document.createElementNS&&y.set(0);l=Jc();l["allow-top-navigation-by-user-activation"]&&y.set(1);l["allow-popups-to-escape-sandbox"]&&y.set(2);z.crypto&&z.crypto.subtle&&y.set(3);z.TextDecoder&&z.TextEncoder&&y.set(4);y=$c(y);C.bc=y;C.bih=w.height;C.biw=w.width;C.brdim=k.join();b=
b.i;b=(C.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,C.wgl=!!L.WebGLRenderingContext,C);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Wf=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Sf(Vf(a))},void 0);var Xf="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function Yf(){if(!Xf)return null;var a=Xf();return"open"in a?a:null}
function Zf(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var $f={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
ag="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),bg=!1;
function cg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Sb)[1]||null,e=Ub(a);d&&e?(d=c,c=a.match(Sb),d=d.match(Sb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ub(c)==e&&(Number(c.match(Sb)[4]||null)||null)==(Number(a.match(Sb)[4]||null)||null):!0;d=Q("web_ajax_ignore_global_headers_if_set");for(var f in $f)e=I($f[f]),!e||!c&&Ub(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Ub(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Ub(a))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Ub(a))b["X-YouTube-Ad-Signals"]=Sf(Vf(void 0));return b}
function dg(a){var b=window.location.search,c=Ub(a),d=Tb(a.match(Sb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Tf(b),f={};H(ag,function(g){e[g]&&(f[g]=e[g])});
return Uf(a,f||{},!1)}
function eg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=fg(a,b);var d=gg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=b.context||z,f=!1,g;fetch(a,c).then(function(h){if(!f){f=!0;g&&yf(g);var k=h.ok,l=function(n){n=n||{};k?b.onSuccess&&b.onSuccess.call(e,n,h):b.onError&&b.onError.call(e,n,h);b.onFinish&&b.onFinish.call(e,n,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}})["catch"](function(){b.onError&&b.onError.call(e,{},{})});
b.onFetchTimeout&&0<b.timeout&&(g=R(function(){f||(f=!0,yf(g),b.onFetchTimeout.call(b.context||z))},b.timeout))}else hg(a,b)}
function hg(a,b){var c=b.format||"JSON";a=fg(a,b);var d=gg(a,b),e=!1,f=ig(a,function(k){if(!e){e=!0;h&&yf(h);var l=Zf(k),n=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)n=jg(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=R(function(){e||(e=!0,f.abort(),yf(h),g.call(b.context||z,f))},b.timeout)}return f}
function fg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=I("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=Uf(a,d||{},!0));return a}
function gg(a,b){var c=I("XSRF_FIELD_NAME",void 0),d=I("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=I("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ub(a)&&!b.withCredentials&&Ub(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Tf(e),mb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Wb(e));f=e||f&&!fb(f);!bg&&f&&
"POST"!=b.method&&(bg=!0,hf(Error("AJAX request with postData should use POST")));return e}
function jg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,jf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?kg(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=lg(g)})}d&&mg(e);
return e}
function mg(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Nb(a[b],null);a[c]=d}else mg(a[b])}}
function kg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function lg(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ig(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&gf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Yf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=dg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=cg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ng=pc||qc;function og(a){var b=Ib;return b?0<=b.toLowerCase().indexOf(a):!1}
;var pg={},qg=0;
function rg(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!og("cobalt")){if(a){a instanceof J||(a="object"==typeof a&&a.W?a.V():String(a),Fb.test(a)?a=new J(a,Bb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Eb))&&Db.test(b[1])?new J(a,Bb):null));a=Cb(a||Hb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Lb)){b="object"==typeof a;var f=null;b&&a.ka&&(f=a.ha());a=Nb(tb(b&&a.W?a.V():String(a)),f)}a instanceof Lb&&a.constructor===Lb?a=a.h:(Ia(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(ne(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Bc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)ig(a,b,"POST",e,d);else if(I("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)ig(a,b,"GET","",d);else{b:{try{var g=new Ta({url:a});if(g.j&&g.i||g.l){var h=Tb(a.match(Sb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(Yb);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(y){}f=!1}f?sg(a)?(b&&b(),f=!0):f=!1:f=!1;f||tg(a,b)}}
function ug(a){var b=void 0===b?"":b;sg(a,b)||rg(a,void 0,void 0,void 0,b)}
function sg(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function tg(a,b){var c=new Image,d=""+qg++;pg[d]=c;c.onload=c.onerror=function(){b&&pg[d]&&b();delete pg[d]};
c.src=a}
;var vg=z.ytPubsubPubsubInstance||new P,wg=z.ytPubsubPubsubSubscribedKeys||{},xg=z.ytPubsubPubsubTopicToKeys||{},yg=z.ytPubsubPubsubIsSynchronous||{};function zg(a,b){var c=Ag();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){wg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{yg[a]?f():R(f,0)}catch(g){hf(g)}},void 0);
wg[d]=!0;xg[a]||(xg[a]=[]);xg[a].push(d);return d}return 0}
function Bg(a){var b=Ag();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete wg[c]}))}
function Cg(a,b){var c=Ag();c&&c.publish.apply(c,arguments)}
function Dg(a){var b=Ag();if(b)if(b.clear(a),a)Eg(a);else for(var c in xg)Eg(c)}
function Ag(){return z.ytPubsubPubsubInstance}
function Eg(a){xg[a]&&(a=xg[a],H(a,function(b){wg[b]&&delete wg[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.X;P.prototype.publish=P.prototype.O;P.prototype.clear=P.prototype.clear;A("ytPubsubPubsubInstance",vg,void 0);A("ytPubsubPubsubTopicToKeys",xg,void 0);A("ytPubsubPubsubIsSynchronous",yg,void 0);A("ytPubsubPubsubSubscribedKeys",wg,void 0);var Fg=window,S=Fg.ytcsi&&Fg.ytcsi.now?Fg.ytcsi.now:Fg.performance&&Fg.performance.timing&&Fg.performance.now&&Fg.performance.timing.navigationStart?function(){return Fg.performance.timing.navigationStart+Fg.performance.now()}:function(){return(new Date).getTime()};var Gg=nf("initial_gel_batch_timeout",1E3),Hg=Math.pow(2,16)-1,Ig=null,Jg=0,Kg=void 0,Lg=0,Mg=0,Ng=0,Og=!0,Pg=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Pg,void 0);var Qg=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Qg,void 0);
function Rg(a,b){if("log_event"===a.endpoint){var c="";a.D&&(Qg[a.D.token]=Sg(a.D),c=a.D.token);var d=Pg.get(c)||[];Pg.set(c,d);d.push(a.payload);b&&(Kg=new b);c=nf("web_logging_max_batch")||100;var e=S();d.length>=c?Tg({writeThenSend:!0}):10<=e-Ng&&(Ug(),Ng=e)}}
function Vg(a,b){if("log_event"===a.endpoint){var c="";a.D&&(Qg[a.D.token]=Sg(a.D),c=a.D.token);var d=new Map;d.set(c,[a.payload]);b&&(Kg=new b);return new O(function(e){Kg&&Kg.isReady()?Wg(d,e,{bypassNetworkless:!0}):e()})}}
function Tg(a){a=void 0===a?{}:a;return new O(function(b){yf(Lg);yf(Mg);Mg=0;Kg&&Kg.isReady()?(Wg(Pg,b,a),Pg.clear()):(Ug(),b())})}
function Ug(){Q("web_gel_timeout_cap")&&!Mg&&(Mg=R(Tg,6E4));yf(Lg);var a=I("LOGGING_BATCH_TIMEOUT",nf("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Og&&(a=Gg);Lg=R(function(){Tg({writeThenSend:!0})},a)}
function Wg(a,b,c){var d=Kg;c=void 0===c?{}:c;var e=Math.round(S()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=kb({context:Xg(d.h||Yg())});h.events=k;(k=Qg[g])&&Zg(h,g,k);delete Qg[g];$g(h,e);Q("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&ug("/generate_204");ah(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();Jg=Math.round(S()-e)},
onError:function(){f--;f||b()},
ya:c});Og=!1}}
function $g(a,b){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=I("EVENT_ID",void 0);if(c){var d=I("BATCH_CLIENT_COUNTER",void 0)||0;d||(d=Math.floor(Math.random()*Hg/2));d++;d>Hg&&(d=1);df("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Ig&&Jg&&Q("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Ig,roundtripMs:String(Jg)});Ig=c;Jg=0}}
function Zg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Sg(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var bh=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",bh,void 0);function ch(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||S());e[a]=b;a=Jf();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.M&&(a=e.context,b=d.M,bh[b]=b in bh?bh[b]+1:0,a.sequence={index:bh[b],groupKey:b},d.Fa&&delete bh[d.M]);(d.Ck?Vg:Rg)({endpoint:"log_event",payload:e,D:d.D},c)}
;function dh(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function eh(a,b,c,d,e){Vc.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var U=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",U,void 0);function fh(){this.h=I("ALT_PREF_COOKIE_NAME","PREF");this.i=I("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Vc.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(U[d]=c.toString())}}}
m=fh.prototype;m.get=function(a,b){gh(a);hh(a);var c=void 0!==U[a]?U[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){gh(a);hh(a);if(null==b)throw Error("ExpectedNotNull");U[a]=b.toString()};
m.remove=function(a){gh(a);hh(a);delete U[a]};
m.save=function(){var a=!0;Q("web_secure_pref_cookie_killswitch")&&(a=!1);var b=this.h,c=[],d;for(d in U)c.push(d+"="+encodeURIComponent(String(U[d])));eh(b,c.join("&"),63072E3,this.i,a)};
m.clear=function(){for(var a in U)delete U[a]};
function hh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function gh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ih(a){a=void 0!==U[a]?U[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ha(fh);var jh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},kh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function lh(){var a=z.navigator;return a?a.connection:void 0}
;function mh(){return"INNERTUBE_API_KEY"in cf&&"INNERTUBE_API_VERSION"in cf}
function Yg(){return{innertubeApiKey:I("INNERTUBE_API_KEY",void 0),innertubeApiVersion:I("INNERTUBE_API_VERSION",void 0),Ia:I("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ja:I("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:I("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),La:I("INNERTUBE_CONTEXT_HL",void 0),Ka:I("INNERTUBE_CONTEXT_GL",void 0),Ma:I("INNERTUBE_HOST_OVERRIDE",void 0)||"",Oa:!!I("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Na:!!I("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:I("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Xg(a){var b={client:{hl:a.La,gl:a.Ka,clientName:a.Ja,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ia}},c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=I("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=I("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=I("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!Q("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=dh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!Q("music_web_display_mode_killswitch")){var h;b.client.xa=null!=(h=b.client.xa)?h:{};b.client.xa.webDisplayMode=dh()}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);
I("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(b.user={onBehalfOfUser:I("DELEGATED_SESSION_ID")});a:{if(h=lh()){a=jh[h.type||"unknown"]||"CONN_UNKNOWN";h=jh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);Q("web_log_effective_connection_type")&&(a=lh(),a=null!==a&&void 0!==a&&a.effectiveType?kh.hasOwnProperty(a.effectiveType)?kh[a.effectiveType]:
"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Tf(I("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function nh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||I("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sk||I("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().rk:b=Yc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=I("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=I("DELEGATED_SESSION_ID")));return d}
;function oh(a){a=Object.assign({},a);delete a.Authorization;var b=Yc();if(b){var c=new pd;c.update(I("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=uc(c.digest())}return a}
;function ph(a){var b=new Ve;(b=b.isAvailable()?a?new af(b,a):b:null)||(a=new We(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Re(a):null;this.i=document.domain||window.location.hostname}
ph.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,F()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ne(b))}catch(f){return}else e=escape(b);eh(a,e,c,this.i)};
ph.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Vc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ph.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Vc.remove(""+a,"/",void 0===b?"youtube.com":b)};var qh;function rh(){qh||(qh=new ph("yt.innertube"));return qh}
function sh(a,b,c,d){if(d)return null;d=rh().get("nextId",!0)||1;var e=rh().get("requests",!0)||{};e[d]={method:a,request:b,authState:oh(c),requestTime:Math.round(S())};rh().set("nextId",d+1,86400,!0);rh().set("requests",e,86400,!0);return d}
function th(a){var b=rh().get("requests",!0)||{};delete b[a];rh().set("requests",b,86400,!0)}
function uh(a){var b=rh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=oh(nh(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),ah(a,d.method,e,{}));delete b[c]}}rh().set("requests",b,86400,!0)}}
;function vh(a,b){this.version=a;this.args=b}
;function wh(a,b){this.topic=a;this.h=b}
wh.prototype.toString=function(){return this.topic};var xh=B("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.X;P.prototype.publish=P.prototype.O;P.prototype.clear=P.prototype.clear;A("ytPubsub2Pubsub2Instance",xh,void 0);var yh=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",yh,void 0);var zh=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",zh,void 0);var Ah=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Ah,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Bh(a,b){var c=Ch();c&&c.publish.call(c,a.toString(),a,b)}
function Dh(a){var b=Eh,c=Ch();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yh[d])try{if(f&&b instanceof wh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.N){var l=new h;h.N=l.version}var n=h.N}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
ab(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){hf(p)}},Ah[b.toString()]?B("yt.scheduler.instance")?Bf(g):R(g,0):g())});
yh[d]=!0;zh[b.toString()]||(zh[b.toString()]=[]);zh[b.toString()].push(d);return d}
function Fh(){var a=Gh,b=Dh(function(c){a.apply(void 0,arguments);Hh(b)});
return b}
function Hh(a){var b=Ch();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete yh[c]}))}
function Ch(){return B("ytPubsub2Pubsub2Instance")}
;var Ih=[],Jh=!1;function Kh(a,b){Jh||(Ih.push({type:"EVENT",eventType:a,payload:b}),10<Ih.length&&Ih.shift())}
;function V(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(V,Error);function Lh(a){return a.substr(0,a.indexOf(":"))||a}
;var Mh={},Nh=(Mh.AUTH_INVALID="No user identifier specified.",Mh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Mh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Mh.MISSING_OBJECT_STORE="Object store not created.",Mh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Mh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Mh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Mh.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",Mh),Oh={},Ph=(Oh.AUTH_INVALID="ERROR",Oh.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Oh.EXPLICIT_ABORT="IGNORED",Oh.IDB_NOT_SUPPORTED="ERROR",Oh.MISSING_OBJECT_STORE="ERROR",Oh.QUOTA_EXCEEDED="WARNING",Oh.QUOTA_MAYBE_EXCEEDED="WARNING",Oh.UNKNOWN_ABORT="WARNING",Oh);
function W(a,b,c,d){b=void 0===b?{}:b;c=void 0===c?Nh[a]:c;d=void 0===d?Ph[a]:d;V.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;Object.setPrototypeOf(this,W.prototype)}
v(W,V);function Qh(a){W.call(this,"MISSING_OBJECT_STORE",{xk:a},Nh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Qh.prototype)}
v(Qh,W);var Rh=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Sh(a,b,c){b=Lh(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof W)return d;if("QuotaExceededError"===d.name)return new W("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(rc&&"UnknownError"===d.name)return new W("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Rh.some(function(e){return d.message.includes(e)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new W("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",yk:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Th(a){if(!a)throw Error();throw a;}
function Uh(a){return a}
function X(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
X.all=function(a){return new X(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={R:0};f.R<a.length;f={R:f.R},++f.R)Vh(X.resolve(a[f.R]).then(function(g){return function(h){d[g.R]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
X.resolve=function(a){return new X(function(b,c){a instanceof X?a.then(b,c):b(a)})};
X.reject=function(a){return new X(function(b,c){c(a)})};
X.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Uh,e=null!==b&&void 0!==b?b:Th;return new X(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Wh(c,c,d,f,g)}),c.onRejected.push(function(){Xh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Wh(c,c,d,f,g):"REJECTED"===c.state.status&&Xh(c,c,e,f,g)})};
function Vh(a,b){a.then(void 0,b)}
function Wh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof X?Yh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof X?Yh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof X?Yh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Zh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function $h(a){return new Promise(function(b,c){Zh(a,b,c)})}
function ai(a){return new X(function(b,c){Zh(a,b,c)})}
;function bi(a,b){return new X(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function ci(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
m=ci.prototype;m.add=function(a,b,c){return di(this,[a],{mode:"readwrite",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(d){return ei(d,a).add(b,c)})};
m.clear=function(a){return di(this,[a],{mode:"readwrite",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(b){return ei(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return di(this,[a],{mode:"readonly",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return ei(c,a).count(b)})};
m["delete"]=function(a,b){return di(this,[a],{mode:"readwrite",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return ei(c,a)["delete"](b)})};
m.get=function(a,b){return di(this,[a],{mode:"readonly",U:Q("ytidb_transaction_enable_retries_core_and_nwl")},function(c){return ei(c,a).get(b)})};
function di(a,b,c,d){return Zb(a,function f(){var g=this,h,k,l,n,p,q,r,w,y,C,T;return xa(f,function(M){switch(M.h){case 1:var Y={mode:"readonly",U:!1};"string"===typeof c?Y.mode=c:Y=c;h=Y;g.transactionCount++;k=h.U?nf("ytidb_transaction_try_count",1):1;case 2:if(l){M.h=3;break}k--;n=Math.round(S());M.u=4;p=g.h.transaction(b,h.mode);Y=new fi(p);Y=gi(Y,d);return x(M,Y,6);case 6:return q=M.i,r=Math.round(S()),hi(g,n,r,void 0,b.join(),h),M["return"](q);case 4:w=ra(M);y=Math.round(S());C=Sh(w,g.h.name,
b.join());if((T=C instanceof W&&"EXPLICIT_ABORT"===C.type)||0>=k)hi(g,n,y,C,b.join(),h),l=C;M.h=2;break;case 3:return M["return"](Promise.reject(l))}})})}
function hi(a,b,c,d,e,f){b=c-b;d?(d instanceof W&&("QUOTA_EXCEEDED"===d.type||"QUOTA_MAYBE_EXCEEDED"===d.type)&&Kh("QUOTA_EXCEEDED",{dbName:Lh(a.h.name),objectStoreNames:e,transactionCount:a.transactionCount,transactionMode:f.mode}),d instanceof W&&"UNKNOWN_ABORT"===d.type&&(Kh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:e,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c-a.j}),a.i=!0),ii(a,!1,e,b),Jh||(Ih.push({type:"ERROR",payload:d}),10<Ih.length&&Ih.shift())):ii(a,
!0,e,b)}
function ii(a,b,c,d){Kh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function ji(a){this.h=a}
m=ji.prototype;m.add=function(a,b){return ai(this.h.add(a,b))};
m.clear=function(){return ai(this.h.clear()).then(function(){})};
m.count=function(a){return ai(this.h.count(a))};
function ki(a,b){return li(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
m["delete"]=function(a){return a instanceof IDBKeyRange?ki(this,a):ai(this.h["delete"](a))};
m.get=function(a){return ai(this.h.get(a))};
m.index=function(a){return new mi(this.h.index(a))};
m.getName=function(){return this.h.name};
function li(a,b,c){a=a.h.openCursor(b.query,b.direction);return ni(a).then(function(d){return bi(d,c)})}
function fi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=W;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function gi(a,b){var c=new Promise(function(d,e){Vh(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
fi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new W("EXPLICIT_ABORT");};
fi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function ei(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new ji(c),a.i.set(c,d));return d}
function mi(a){this.h=a}
mi.prototype.count=function(a){return ai(this.h.count(a))};
mi.prototype["delete"]=function(a){return oi(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
mi.prototype.get=function(a){return ai(this.h.get(a))};
mi.prototype.getKey=function(a){return ai(this.h.getKey(a))};
function oi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ni(a).then(function(d){return bi(d,c)})}
function pi(a,b){this.request=a;this.cursor=b}
function ni(a){return ai(a).then(function(b){return null===b?null:new pi(a,b)})}
m=pi.prototype;m.advance=function(a){this.cursor.advance(a);return ni(this.request)};
m["continue"]=function(a){this.cursor["continue"](a);return ni(this.request)};
m["delete"]=function(){return ai(this.cursor["delete"]()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return ai(this.cursor.update(a))};function qi(a,b,c){return Zb(this,function e(){var f,g,h,k,l,n,p,q,r,w;return xa(e,function(y){if(1==y.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.fb,n=g.upgrade,p=g.closed,r=function(){q||(q=new ci(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(C){if(null===C.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");C.dataLoss&&"none"!==C.dataLoss&&Kh("IDB_DATA_CORRUPTED",{reason:C.dataLossMessage||"unknown reason",dbName:Lh(a)});var T=r(),M=new fi(f.transaction);n&&n(T,C.oldVersion,C.newVersion,M)}),h&&f.addEventListener("blocked",function(){h()}),x(y,$h(f),2);
w=y.i;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){Kh("IDB_UNEXPECTEDLY_CLOSED",{dbName:Lh(a),dbVersion:w.version});l&&l()});
return y["return"](r())})})}
function ri(a,b){b=void 0===b?{}:b;return Zb(this,function d(){var e,f,g;return xa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,$h(e),0)})})}
;function si(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function ti(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return qi(a,b,c)}
si.prototype["delete"]=function(a){a=void 0===a?{}:a;return ri(this.name,a)};
si.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,fb:c,upgrade:this.options.upgrade},e=function(){return Zb(a,function g(){var h=this,k,l,n;return xa(g,function(p){switch(p.h){case 1:return p.u=2,x(p,ti(h.name,h.options.version,d),4);case 4:k=p.i;a:{var q=u(Object.keys(h.options.Ra));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.h=5;break}if(h.i){p.h=6;break}h.i=!0;return x(p,h["delete"](),7);case 7:return p["return"](e());case 6:throw new Qh(l);case 5:return p["return"](k);
case 2:n=ra(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p["return"](ti(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var ui=new si({Ra:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function vi(a){return Zb(this,function c(){var d;return xa(c,function(e){if(1==e.h)return x(e,ui.open(),2);d=e.i;return e["return"](di(d,["databases"],"readwrite",function(f){var g=ei(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return ai(g.h.put(a,void 0)).then(function(){})})}))})})}
function wi(){return Zb(this,function b(){var c;return xa(b,function(d){if(1==d.h)return x(d,ui.open(),2);c=d.i;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var xi;
function yi(){return Zb(this,function b(){var c,d;return xa(b,function(e){switch(e.h){case 1:var f;if(f=ng)f=/WebKit\/([0-9]+)/.exec(Ib),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ib),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.u=2;
d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,vi(d),4);case 4:return x(e,wi(),5);case 5:return e["return"](!0);case 2:return ra(e),e["return"](!1)}})})}
function zi(){if(void 0!==xi)return xi;Jh=!0;return xi=yi().then(function(a){Jh=!1;return a})}
;var Ai;function Bi(){Ai||(Ai=new ph("yt.offline"));return Ai}
;function Ci(){ke.call(this);this.o=this.A=this.C=this.l=!1;this.j=Di();this.o=Q("validate_network_status");Ei(this);Fi(this)}
v(Ci,ke);function Di(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Fi(a){window.addEventListener("online",function(){return Zb(a,function c(){var d=this;return xa(c,function(e){if(1==e.h){if(!d.o){d.j=!0;e.h=2;return}return x(e,Gi(d),3)}2!=e.h&&(d.j=e.i);d.l&&d.j&&le(d,"ytnetworkstatus-online");Hi(d);if(d.A&&Q("offline_error_handling")){var f=Bi().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new V(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;hf(h)}Bi().set("errors",{},2592E3,!0)}}e.h=0})})})}
function Ei(a){window.addEventListener("offline",function(){return Zb(a,function c(){var d=this;return xa(c,function(e){if(1==e.h){if(!d.o){d.j=!1;e.h=2;return}return x(e,Gi(d),3)}2!=e.h&&(d.j=e.i);d.l&&!d.j&&le(d,"ytnetworkstatus-offline");Hi(d);e.h=0})})})}
function Hi(a){a.C&&(jf(new V("NetworkStatusManager state did not match poll",S()-0)),a.C=!1)}
function Gi(a){return Zb(a,function c(){var d;return xa(c,function(e){switch(e.h){case 1:return e.u=2,x(e,fetch("/generate_204",{method:"HEAD"}),4);case 4:d=!0;e.h=3;e.u=0;break;case 2:ra(e),d=!1;case 3:return e["return"](d)}})})}
;function Ii(a){a=void 0===a?{}:a;ke.call(this);var b=this;this.l=this.A=0;Ci.h||(Ci.h=new Ci);this.j=Ci.h;this.j.l=!0;a.Qa&&(this.j.A=!0);a.ea?(this.ea=a.ea,be(this.j,"ytnetworkstatus-online",function(){Ji(b,"publicytnetworkstatus-online")}),be(this.j,"ytnetworkstatus-offline",function(){Ji(b,"publicytnetworkstatus-offline")})):(be(this.j,"ytnetworkstatus-online",function(){le(b,"publicytnetworkstatus-online")}),be(this.j,"ytnetworkstatus-offline",function(){le(b,"publicytnetworkstatus-offline")}))}
v(Ii,ke);function Ji(a,b){a.ea?a.l?(Ef(a.A),a.A=Bf(function(){a.o!==b&&(le(a,b),a.o=b,a.l=S())},a.ea-(S()-a.l))):(le(a,b),a.o=b,a.l=S()):le(a,b)}
;var Ki;function Li(a,b){b=void 0===b?{}:b;zi().then(function(){Ki||(Ki=new Ii({Qa:!0}));Ki.j.j!==Di()&&jf(new V("NetworkStatusManager isOnline does not match window status"));hg(a,b)})}
function Mi(a,b){b=void 0===b?{}:b;zi().then(function(){hg(a,b)})}
;function Ni(a){var b=this;this.h=null;a?this.h=a:mh()&&(this.h=Yg());Cf(function(){uh(b)},0,5E3)}
Ni.prototype.isReady=function(){!this.h&&mh()&&(this.h=Yg());return!!this.h};
function ah(a,b,c,d){!I("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&jf(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new V("innertube xhrclient not ready",b,c,d);hf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.Ma)&&(g=e);var h=a.h.Oa||!1,k=nh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.Na&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var n=Uf(""+g+e,l||{},!0);(function(p){p=void 0===p?!1:p;var q;if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g&&(p||(q=sh(b,c,k,h)),q)){var r=f.onSuccess,w=f.onFetchSuccess;
f.onSuccess=function(y,C){th(q);r(y,C)};
c.onFetchSuccess=function(y,C){th(q);w(y,C)}}try{Q("use_fetch_for_op_xhr")?eg(n,f):p&&d.retry&&!d.ya.bypassNetworkless?(f.method="POST",!d.ya.writeThenSend&&Q("nwl_send_fast_on_unload")?Mi(n,f):Li(n,f)):(f.method="POST",f.postParams||(f.postParams={}),hg(n,f))}catch(y){if("InvalidAccessError"==y.name)q&&(th(q),q=0),jf(Error("An extension is blocking network request."));
else throw y;}q&&Cf(function(){uh(a)},0,5E3)})(!1)}
;function Oi(a,b,c){c=void 0===c?{}:c;var d=Ni;I("ytLoggingEventsDefaultDisabled",!1)&&Ni==Ni&&(d=null);ch(a,b,d,c)}
;var Pi=[{wa:function(a){return"Cannot read property '"+a.key+"'"},
na:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{wa:function(a){return"Cannot call '"+a.key+"'"},
na:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Qi(){this.h=[];this.i=[]}
var Ri;function Si(){Ri||(Ri=new Qi);return Ri}
;var Ti=new P;function Ui(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Vi(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Vi(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Vi(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Vi(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Wi(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Xi(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ui(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Xi(f+".ve",g,h,k):0;d+=f;d+=Xi(e,a[e],b,c);if(500<d)break}}else c[b]=Yi(a),d+=c[b].length;else c[b]=Yi(a),d+=c[b].length;return d}
function Xi(a,b,c,d){c+="."+a;a=Yi(b);d[c]=a;return c.length+a.length}
function Yi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Zi=new Set,$i=0,aj=0,bj=0,cj=[],dj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ej(a){fj(a,"WARNING")}
function fj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||I("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||I("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.level&&(b=a.level),Q("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+a.fileName),
d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=$i))){var g=rd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.h||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Wi(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=a.params;
if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,q=Yi(n[l]);c[p]=q;k+=p.length+q.length;if(500<k)break}}else c.params=Yi(n)}if(cj.length)for(l=0;l<cj.length&&!(k=Wi(cj[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Si();
c=u(a.i);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.wk)){a=d.weight;break a}a=u(a.h);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Pi);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.na[l.name])for(e=u(c.na[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=d[g+
1];l.message=c.wa(f);break}l.params||(l.params={});a=Si();l.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;l.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Zi.has(l.message)){"ERROR"===b?(Ti.O("handleError",l),Q("record_app_crashed_web")&&0===bj&&1===l.sampleWeight&&
(bj++,Oi("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),aj++):"WARNING"===b&&Ti.O("handleWarning",l);if(Q("kevlar_gel_error_routing")){c=b;b:{a=u(dj);for(d=a.next();!d.done;d=a.next())if(og(d.value.toLowerCase())){a=!0;break b}a=!1}if(a)a=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);a=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),
d.columnNumber=Number(a[1])):d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===c?a.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,kvPairs:[]};I("FEXP_EXPERIMENTS")&&(d.experimentIds=I("FEXP_EXPERIMENTS"));if(e=l.params)for(f=u(Object.keys(e)),g=f.next();!g.done;g=f.next())g=g.value,d.kvPairs.push({key:"client."+g,value:String(e[g])});
e=I("SERVER_NAME",void 0);f=I("SERVER_VERSION",void 0);e&&f&&(d.kvPairs.push({key:"server.name",value:e}),d.kvPairs.push({key:"server.version",value:f}));a={errorMetadata:d,stackTrace:c,logMessage:a}}a&&(Oi("clientError",a),Tg())}if(!Q("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:I("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=I("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=I("SERVER_NAME",void 0);c=I("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}hg(I("ECATCHER_REPORT_HOST","")+"/error_204",b)}Zi.add(l.message);
$i++}}}
function gj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;function hj(a){a&&(a.dataset?a.dataset[ij("loaded")]="true":a.setAttribute("data-loaded","true"))}
function jj(a,b){return a?a.dataset?a.dataset[ij(b)]:a.getAttribute("data-"+b):null}
var kj={};function ij(a){return kj[a]||(kj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var lj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function nj(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lj,""),c=c.replace(mj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else oj(a,b,c)}
function oj(a,b,c){c=void 0===c?null:c;var d=pj(a),e=document.getElementById(d),f=e&&jj(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=zg(d,b),b=""+Ka(b),qj[b]=f),g||(e=rj(a,d,function(){jj(e,"loaded")||(hj(e),Cg(d),R(Pa(Dg,d),0))},c)))}
function rj(a,b,c,d){d=void 0===d?null:d;var e=Cc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Pb(e,Kc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sj(a){a=pj(a);var b=document.getElementById(a);b&&(Dg(a),b.parentNode.removeChild(b))}
function tj(a,b){if(a&&b){var c=""+Ka(b);(c=qj[c])&&Bg(c)}}
function pj(a){var b=document.createElement("a");Ob(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Rb(a)}
var qj={};var uj=[],vj=!1;function wj(){if(!Q("disable_ad_status_on_html5_clients")&&(!Q("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Vc.get("CONSENT","").startsWith("YES+"))&&"1"!=hb()){var a=function(){vj=!0;"google_ad_status"in window?df("DCLKSTAT",1):df("DCLKSTAT",2)};
try{nj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}uj.push(Bf(function(){if(!(vj||"google_ad_status"in window)){try{tj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}vj=!0;df("DCLKSTAT",3)}},5E3))}}
function xj(){return parseInt(I("DCLKSTAT",0),10)}
;function yj(){this.i=!1;this.h=null}
yj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,nj(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?zj(g,c,d,f,h):(sj(b),ej(new V("Unable to load Botguard","from "+b)))},e)):a&&(e=Cc(document,"SCRIPT"),e.textContent=a,e.nonce=Ca(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?zj(this,c,d,f,a):ej(Error("Unable to load Botguard from JS")))};
function zj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ga)}catch(f){ej(f)}else{try{a.h=new e(b)}catch(f){ej(f)}c&&c(b)}}
yj.prototype.dispose=function(){this.h=null};var Aj=new yj;function Bj(){return!!Aj.h}
function Cj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Aj.h?Aj.h.hot?Aj.h.hot(void 0,void 0,a):Aj.h.invoke(void 0,void 0,a):null}
;var Dj={Lb:29434,Nb:3611,Be:3854,Tf:42993,Di:4724,nj:96370,gb:27686,hb:85013,ib:23462,kb:42016,lb:62407,mb:26926,jb:43781,nb:51236,ob:79148,pb:50160,qb:77504,Cb:87907,Db:18630,Eb:54445,Fb:80935,Gb:105675,Hb:37521,Ib:47786,Jb:98349,Kb:6827,Mb:7282,Qb:32276,Pb:76278,Rb:93911,Sb:106531,Tb:27259,Ub:27262,Vb:27263,Xb:21759,Yb:27107,Zb:62936,ac:49568,cc:38408,dc:80637,ec:68727,fc:68728,hc:80353,ic:80356,jc:74610,kc:45707,lc:83962,mc:83970,nc:46713,oc:89711,pc:74612,qc:93265,sc:74611,uc:113533,wc:93252,
xc:99357,zc:94521,Ac:114252,Bc:113532,Cc:94522,yc:94583,Dc:88E3,Ec:93253,Fc:93254,Gc:94387,Hc:94388,Ic:93255,Jc:97424,tc:72502,Kc:110111,Lc:76019,Nc:117092,Oc:117093,Mc:89431,Pc:110466,Qc:77240,Rc:60508,Sc:105350,Tc:73393,Uc:113534,Vc:92098,Wc:84517,Xc:83759,Yc:80357,Zc:86113,bd:72598,cd:72733,dd:107349,ed:118203,fd:117431,gd:117429,hd:117430,jd:117432,kd:120080,ld:117259,md:121692,nd:97615,od:31402,pd:84774,qd:95117,rd:98930,sd:98931,td:98932,ud:43347,vd:45474,wd:100352,xd:84758,yd:98443,zd:117985,
Ad:74613,Bd:74614,Cd:64502,Dd:74615,Ed:74616,Fd:74617,Gd:77820,Hd:74618,Id:93278,Jd:93274,Kd:93275,Ld:93276,Md:22110,Nd:29433,Pd:120541,Rd:82047,Sd:113550,Td:75836,Ud:75837,Vd:42352,Wd:84512,Xd:76065,Yd:75989,Zd:16623,ae:32594,be:27240,ce:32633,de:74858,ge:3945,ee:16989,he:45520,ie:25488,je:25492,ke:25494,le:55760,me:14057,ne:18451,oe:57204,pe:57203,qe:17897,re:57205,se:18198,te:17898,ue:17909,we:43980,xe:46220,ye:11721,ze:49954,Ae:96369,Ce:56251,De:25624,Ee:16906,Fe:99999,Ge:68172,He:27068,Ie:47973,
Je:72773,Ke:26970,Le:26971,Me:96805,Ne:17752,Oe:73233,Pe:109512,Qe:22256,Re:14115,Se:22696,Te:89278,Ue:89277,Ve:109513,We:43278,Xe:43459,Ye:43464,Ze:89279,af:43717,bf:55764,cf:22255,df:89281,ef:40963,ff:43277,gf:43442,hf:91824,jf:120137,kf:96367,lf:36850,mf:72694,nf:37414,pf:36851,qf:121343,rf:73491,sf:54473,tf:43375,uf:46674,vf:32473,wf:72901,xf:72906,yf:50947,zf:50612,Af:50613,Bf:50942,Cf:84938,Df:84943,Ef:84939,Ff:84941,Gf:84944,Hf:84940,If:84942,Jf:35585,Kf:51926,Lf:79983,Mf:63238,Nf:18921,Of:63241,
Pf:57893,Qf:41182,Rf:33424,Sf:22207,Uf:36229,Vf:22206,Wf:22205,Xf:18993,Yf:19001,Zf:18990,ag:18991,cg:18997,dg:18725,eg:19003,fg:36874,gg:44763,hg:33427,jg:67793,kg:22182,lg:37091,mg:34650,ng:50617,og:47261,pg:22287,qg:25144,rg:97917,sg:62397,tg:36961,ug:108035,vg:27426,wg:27857,xg:27846,yg:27854,zg:69692,Ag:61411,Bg:39299,Cg:38696,Dg:62520,Eg:36382,Fg:108701,Gg:50663,Hg:36387,Ig:14908,Jg:37533,Kg:105443,Lg:61635,Mg:62274,Ng:65702,Og:65703,Pg:65701,Qg:76256,Rg:37671,Sg:49953,Ug:36216,Vg:28237,Wg:39553,
Xg:29222,Yg:26107,Zg:38050,ah:26108,dh:120745,bh:26109,eh:26110,fh:66881,gh:28236,hh:14586,ih:57929,jh:74723,kh:44098,lh:44099,mh:23528,nh:61699,oh:59149,ph:101951,qh:97346,rh:118051,sh:95102,uh:64882,vh:119505,wh:63595,xh:63349,yh:95101,zh:75240,Ah:27039,Bh:68823,Ch:21537,Dh:83464,Eh:75707,Fh:83113,Gh:101952,Hh:101953,Jh:79610,Kh:24402,Lh:24400,Mh:32925,Nh:57173,Oh:64423,Ph:64424,Qh:33986,Rh:100828,Sh:21409,Th:11070,Uh:11074,Vh:17880,Wh:14001,Yh:30709,Zh:30707,ai:30711,bi:30710,ci:30708,Xh:26984,
di:63648,fi:63649,gi:51879,hi:111059,ii:5754,ji:20445,ki:110386,li:113746,mi:66557,ni:17310,oi:28631,ri:21589,si:68012,ti:60480,vi:31571,wi:76980,xi:41577,yi:45469,zi:38669,Ai:13768,Bi:13777,Ci:62985,Ei:59369,Fi:43927,Gi:43928,Hi:12924,Ii:100355,Li:56219,Mi:27669,Ni:10337,Ki:47896,Oi:121258,Pi:107598,Qi:96639,Ri:107536,Si:96661,Ti:96658,Ui:116646,Vi:121122,Wi:96660,Xi:104443,Yi:96659,Zi:106442,aj:63667,bj:63668,cj:63669,dj:78314,ej:55761,fj:96368,gj:67374,hj:48992,ij:49956,jj:31961,kj:26388,lj:23811,
mj:5E4,oj:47355,pj:47356,qj:37935,rj:45521,sj:21760,tj:83769,uj:49977,vj:49974,wj:93497,xj:93498,yj:34325,zj:115803,Aj:100081,Bj:35309,Cj:68314,Dj:25602,Ej:100339,Fj:59018,Gj:18248,Hj:50625,Ij:9729,Jj:37168,Kj:37169,Lj:21667,Mj:16749,Nj:18635,Oj:39305,Pj:18046,Qj:53969,Rj:8213,Sj:93926,Tj:102852,Uj:110099,Vj:22678,Wj:69076,Yj:100856,Zj:17736,ak:3832,bk:55759,ck:64031,dk:93044,ek:93045,fk:34388,gk:17657,hk:17655,ik:39579,jk:39578,kk:77448,lk:8196,mk:11357,nk:69877,pk:8197,qk:82039};function Ej(a,b,c){N.call(this);var d=this;c=c||I("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=Va(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.A)}
v(Ej,N);Ej.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.C)}catch(e){jf(e)}}};
Ej.prototype.B=function(){window.removeEventListener("message",this.A);N.prototype.B.call(this)};function Fj(){var a=this.i=new Ej(!!I("WIDGET_ID_ENFORCE")),b=E(this.Va,this);a.m=b;a.o=null;this.i.channel="widget";if(a=I("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.m=!1;this.u={}}
m=Fj.prototype;m.Va=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.u[a]||"onReady"==a||(this.addEventListener(a,Gj(this,a)),this.u[a]=!0)):this.oa(a,b,c)};
m.oa=function(){};
function Gj(a,b){return E(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.Ga=function(){this.m=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");H(this.l,this.Aa,this);this.l=[]};
m.ja=function(){return null};
function Hj(a,b){a.sendMessage("infoDelivery",b)}
m.Aa=function(a){this.m?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.i=null};function Ij(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Jj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Kj(a)}
function Kj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Lj(a,b,c,d){if(D(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Mj(a){Fj.call(this);this.h=a;this.j=[];this.addEventListener("onReady",E(this.Sa,this));this.addEventListener("onVideoProgress",E(this.bb,this));this.addEventListener("onVolumeChange",E(this.cb,this));this.addEventListener("onApiChange",E(this.Wa,this));this.addEventListener("onPlaybackQualityChange",E(this.Ya,this));this.addEventListener("onPlaybackRateChange",E(this.Za,this));this.addEventListener("onStateChange",E(this.ab,this));this.addEventListener("onWebglSettingsChanged",E(this.eb,
this))}
v(Mj,Fj);m=Mj.prototype;m.oa=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Ij(a)){var d=b;if(D(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Kj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Jj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Lj.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Ij(a)&&Hj(this,this.ja())}};
m.Sa=function(){var a=E(this.Ga,this);this.i.i=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ja=function(){if(!this.h)return null;var a=this.h.getApiInterface();$a(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=F()/1E3;return b};
m.ab=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Hj(this,a)};
m.Ya=function(a){Hj(this,{playbackQuality:a})};
m.Za=function(a){Hj(this,{playbackRate:a})};
m.Wa=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.cb=function(){Hj(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.bb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:F()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Hj(this,a)};
m.eb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Hj(this,a)};
m.dispose=function(){Fj.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Nj(a){a=void 0===a?!1:a;N.call(this);this.i=new P(a);xd(this,Pa(vd,this.i))}
G(Nj,N);Nj.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Nj.prototype.l=function(a,b){this.h||this.i.O.apply(this.i,arguments)};function Oj(a,b,c){Nj.call(this);this.j=a;this.destination=b;this.id=c}
v(Oj,Nj);Oj.prototype.P=function(a,b){this.h||this.j.P(this.destination,this.id,a,b)};
Oj.prototype.B=function(){this.destination=this.j=null;Nj.prototype.B.call(this)};function Pj(a,b,c){N.call(this);this.i=a;this.l=c;this.o=vf(window,"message",E(this.m,this));this.j=new Oj(this,a,b);xd(this,Pa(vd,this.j))}
v(Pj,N);Pj.prototype.P=function(a,b,c,d){this.h||a!=this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(ne(a),this.l))};
Pj.prototype.m=function(a){var b;if(b=!this.h)if(b=a.origin==this.l)a:{b=this.i;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.h||c.l("command",b.command,b.data,a.origin))}};
Pj.prototype.B=function(){wf(this.o);this.i=null;N.prototype.B.call(this)};function Qj(){var a=jb(Rj),b;return Ae(new O(function(c,d){a.onSuccess=function(e){Zf(e)?c(e):d(new Sj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Sj("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Sj("Request timed out","net.timeout",e))};
b=hg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Be&&b.abort();
return ye(c)})}
function Sj(a,b,c){Sa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Sj,Sa);function Tj(){this.i=0;this.h=null}
Tj.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),te(a)?a:Uj(a)):2===this.i&&b?(a=b.call(c,this.h),te(a)?a:Vj(a)):this};
Tj.prototype.getValue=function(){return this.h};
Tj.prototype.$goog_Thenable=!0;function Vj(a){var b=new Tj;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Uj(a){var b=new Tj;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Wj(a){Sa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xj;this.isTimeout=a instanceof Sj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Be}
v(Wj,Sa);Wj.prototype.name="BiscottiError";function Xj(){Sa.call(this,"Biscotti ID is missing from server")}
v(Xj,Sa);Xj.prototype.name="BiscottiMissingError";var Rj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yj=null;
function Lf(){if(Q("disable_biscotti_fetch_on_html5_clients"))return ye(Error("Fetching biscotti ID is disabled."));if(Q("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Vc.get("CONSENT","").startsWith("YES+"))return ye(Error("User has not consented - not fetching biscotti id."));if("1"==hb())return ye(Error("Biscotti ID is not available in private embed mode"));Yj||(Yj=Ae(Qj().then(Zj),function(a){return ak(2,a)}));
return Yj}
function Zj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Xj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Xj;a=a.id;Mf(a);Yj=Uj(a);bk(18E5,2);return a}
function ak(a,b){var c=new Wj(b);Mf("");Yj=Vj(c);0<a&&bk(12E4,a-1);throw c;}
function bk(a,b){R(function(){Ae(Qj().then(Zj,function(c){return ak(b,c)}),Ga)},a)}
function ck(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Lf()}catch(b){return ye(b)}}
;function dk(a){if("1"!=hb()){a&&Kf();try{ck().then(function(){},function(){}),R(dk,18E5)}catch(b){hf(b)}}}
;var ek=F().toString();
function fk(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=F();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ek)for(a=1,b=0;b<ek.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ek.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var gk=z.ytLoggingDocDocumentNonce_||fk();A("ytLoggingDocDocumentNonce_",gk,void 0);var hk={Od:0,Ob:1,Wb:2,Tg:3,Qd:4,Xj:5,Ih:6,Ji:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function ik(a){this.h=a}
function jk(a){return new ik({trackingParams:a})}
ik.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
ik.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ik.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function kk(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function lk(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function mk(a){return I(lk(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",mk,void 0);function nk(a){return(a=mk(void 0===a?0:a))?new ik({veType:a,youtubeData:void 0}):null}
function ok(){var a=I("csn-to-ctt-auth-info");a||(a={},df("csn-to-ctt-auth-info",a));return a}
function pk(a){a=void 0===a?0:a;var b=I(kk(a));if(!b&&!I("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
A("yt_logging_screen.getCurrentCsn",pk,void 0);function qk(a,b,c){var d=ok();(c=pk(c))&&delete d[c];b&&(d[a]=b)}
function rk(a){return ok()[a]}
A("yt_logging_screen.getCttAuthInfo",rk,void 0);function sk(a,b,c,d){c=void 0===c?0:c;if(a!==I(kk(c))||b!==I(lk(c)))qk(a,d,c),df(kk(c),a),df(lk(c),b),b=function(){setTimeout(function(){a&&ch("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:gk,clientScreenNonce:a},Ni)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",sk,void 0);function tk(a){vh.call(this,1,arguments);this.csn=a}
v(tk,vh);var Eh=new wh("screen-created",tk),uk=[],wk=vk,xk=0;function yk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Xa(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&ej(Error("Child VE logged with no data"));d={D:rk(b),M:b};"UNDEFINED_CSN"==b?zk("visualElementAttached",c,d):a?ch("visualElementAttached",c,a,d):Oi("visualElementAttached",c,d)}
function vk(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return uc(b)}
function zk(a,b,c){uk.push({payloadName:a,payload:b,options:c});xk||(xk=Fh())}
function Gh(a){if(uk){for(var b=u(uk),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,ch(c.payloadName,c.payload,null,c.options));uk.length=0}xk=0}
;function Ak(){this.i=new Set;this.h=new Set;this.j=new Map}
Ak.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ha(Ak);function Bk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Ck(a)||c.some(function(e){return!Ck(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Dk(a,d.value);return a}
function Dk(a,b){for(var c in b)if(Ck(b[c])){if(c in a&&!Ck(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Dk(a[c],b[c])}else if(Ek(b[c])){if(c in a&&!Ek(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Fk(a[c],b[c])}else a[c]=b[c];return a}
function Fk(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Ck(d)?a.push(Dk({},d)):Ek(d)?a.push(Fk([],d)):a.push(d);return a}
function Ck(a){return"object"===typeof a&&!Array.isArray(a)}
function Ek(a){return"object"===typeof a&&Array.isArray(a)}
;function Gk(a,b){vh.call(this,1,arguments)}
v(Gk,vh);function Hk(a,b){vh.call(this,1,arguments)}
v(Hk,vh);var Ik=new wh("aft-recorded",Gk),Jk=new wh("timing-sent",Hk);var Kk=window;function Lk(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Mk=Kk.performance||Kk.mozPerformance||Kk.msPerformance||Kk.webkitPerformance||new Lk;var Nk=!1;E(Mk.clearResourceTimings||Mk.webkitClearResourceTimings||Mk.mozClearResourceTimings||Mk.msClearResourceTimings||Mk.oClearResourceTimings||Ga,Mk);function Ok(a){var b=Pk(a);if(b.aft)return b.aft;a=I((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Qk(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Qa("ytcsi."+(a||"")+"data_",b));return b}
function Rk(a){a=Qk(a);a.info||(a.info={});return a.info}
function Pk(a){a=Qk(a);a.tick||(a.tick={});return a.tick}
function Sk(a){var b=Qk(a).nonce;b||(b=fk(),Qk(a).nonce=b);return b}
function Tk(a){var b=Pk(a||""),c=Ok(a);c&&!Nk&&(Bh(Ik,new Gk(Math.round(c-b._start),a)),Nk=!0)}
;function Uk(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function Vk(a){a=a||"";var b=B("ytcsi.reference");b||(Uk(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Uk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Wk=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Wk,void 0);function Xk(){this.h=0}
function Yk(){Xk.h||(Xk.h=new Xk);return Xk.h}
Xk.prototype.tick=function(a,b,c){Zk(this,"tick_"+a+"_"+b)||Oi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Xk.prototype.info=function(a,b){var c=Object.keys(a).join("");Zk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,Oi("latencyActionInfo",c))};
Xk.prototype.span=function(a,b){var c=Object.keys(a).join("");Zk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Oi("latencyActionSpan",a))};
function Zk(a,b){Wk[b]=Wk[b]||{count:0};var c=Wk[b];c.count++;c.time=S();a.h||(a.h=Cf(function(){var d=S(),e;for(e in Wk)Wk[e]&&6E4<d-Wk[e].time&&delete Wk[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||ej(c)),!0):!1}
;var Z={},$k=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.br_trs=
"tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid=
"requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),al="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),bl={},cl=(bl.ccs="CANARY_STATE_",bl.mver="MEASUREMENT_VERSION_",
bl.pis="PLAYER_INITIALIZED_STATE_",bl.yt_pt="LATENCY_PLAYER_",bl.pa="LATENCY_ACTION_",bl.yt_vst="VIDEO_STREAM_TYPE_",bl),dl="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function el(a){return!!I("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!Qk(a).useGel}
function fl(a){a=Qk(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function gl(a,b,c){if(null!==b)if(Rk(c)[a]=b,el(c)){var d=b;b=fl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in $k){b=$k[a];0<=Va(al,b)&&(d=!!d);a in cl&&"string"===typeof d&&(d=cl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Bk({},e)}else 0<=Va(dl,a)||ej(new V("Unknown label logged with GEL CSI",
a)),f=void 0;f&&el(c)&&(b=Vk(c||""),Bk(b.info,f),b=fl(c),b.gelInfos||(b.gelInfos={}),Bk(b.gelInfos,f),c=Sk(c),Yk().info(f,c))}else Vk(c||"").info[a]=b}
function hl(a,b,c){var d=Pk(c);if(Q("use_first_tick")&&il(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Mk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Mk.mark(e))}e=b||S();d[a]=e;e=fl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||S();if(el(c)){Vk(c||"").tick[a]=b||S();e=Sk(c);if("_start"===a){var f=Yk();Zk(f,"baseline_"+e)||Oi("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Yk().tick(a,e,b);Tk(c);e=!0}else e=!1;if(!e){if(!B("yt.timing."+(c||"")+"pingSent_")&&
(f=I((c||"")+"TIMING_ACTION",void 0),e=Pk(c),B("ytglobal.timing"+(c||"")+"ready_")&&f&&il("_start")&&Ok(c)))if(Tk(c),c)jl(c);else{f=!0;var g=I("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&jl(c)}Vk(c||"").tick[a]=b||S()}return d[a]}
function il(a,b){var c=Pk(b);return a in c}
function jl(a){if(!el(a)){var b=Pk(a),c=Rk(a),d=b._start,e=I("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:I((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Ok(a);var h=Pk(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Rk(a).yt_pvis&&"youtube"===e&&(gl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=S();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||Q("always_send_csi_204_with_beacon"))?ug(f):rg(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);Bh(Jk,new Hk(n.aft+(Number(g)||0),a))}}
var kl=window;kl.ytcsi&&(kl.ytcsi.info=gl,kl.ytcsi.tick=hl);function ll(){this.l=[];this.u=[];this.h=[];this.i=new Set;this.m=new Map}
function ml(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=pk(c),h=nk(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&yk(a.client,g,h,[jk(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&yk(a.client,g,h,[jk(d.playerResponse.trackingParams)]))})}
function nl(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=pk(d);c=c||nk(d);e&&c&&yk(a.client,e,c,[b])}}
ll.prototype.clickCommand=function(a){var b=pk();if(!a.clickTrackingParams||!b)return!1;var c=this.client;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:b,ve:jk(a.clickTrackingParams).getAsJson(),gestureType:d};d={D:rk(b),M:b};"UNDEFINED_CSN"==b?zk("visualElementGestured",a,d):c?ch("visualElementGestured",a,c,d):Oi("visualElementGestured",a,d);return!0};
function ol(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){pl(a,b,c);var f=nk(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,nl(a,h[0],h[1]||f,c.layer);f=u(a.u);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=pk(g);var l=k[0]||nk(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={D:rk(h),M:h},"UNDEFINED_CSN"==h?zk("visualElementStateChanged",k,l):g?ch("visualElementStateChanged",k,g,l):Oi("visualElementStateChanged",
k,l))}}};
pk(c.layer)||a.j();if(c.ta)for(var d=u(c.ta),e=d.next();!e.done;e=d.next())ml(a,e.value,c.layer);else fj(Error("Delayed screen needs a data promise."))}
function pl(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Ta?c.Ta:c.layer;var e=pk(d);d=nk(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.sa,l=c.D,n=wk(),p={csn:n,pageVe:(new ik({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&ej(new V("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={D:l,M:n};g?ch("screenCreated",p,g,k):Oi("screenCreated",p,k);Bh(Eh,new tk(n));var q=n}catch(r){gj(r,{Ak:b,rootVe:d,parentVisualElement:void 0,vk:e,zk:f,sa:c.sa});fj(r);return}sk(q,b,c.layer,c.D);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=Q("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(hk));for(f=b.next();!f.done;f=b.next())if(pk(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={D:rk(e),M:e,
Fa:f},"UNDEFINED_CSN"==e?zk("visualElementHidden",d,f):b?ch("visualElementHidden",d,b,f):Oi("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");gl("csn",q);Ak.getInstance().clear();d=nk(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&(e=q,q=Q("use_default_events_client")?void 0:Ni,b={csn:e,ve:d.getAsJson(),eventType:1},f={D:rk(e),M:e},"UNDEFINED_CSN"==e?zk("visualElementShown",b,f):q?ch("visualElementShown",
b,q,f):Oi("visualElementShown",b,f));a.i["delete"](c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&nl(a,b,d,c.layer)}
;function ql(a){N.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.za,this)}
v(ql,N);m=ql.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.P("RECEIVING"))};
m.P=function(a,b){this.started&&!this.h&&this.connection.P(a,b)};
m.za=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=rl(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=sl(a,c))&&this.P(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Xa.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Xa=function(a,b){this.started&&!this.h&&this.connection.P(a,this.ia(a,b))};
m.ia=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.B=function(){var a=this.connection;a.h||Le(a.i,"command",this.za,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);N.prototype.B.call(this)};function tl(a,b){ql.call(this,b);this.api=a;this.start()}
v(tl,ql);tl.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
tl.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function rl(a,b){switch(a){case "loadVideoById":var c=Kj(b);return[c];case "cueVideoById":return c=Kj(b),[c];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return c=Lj(b),[c];case "cuePlaylist":return c=Lj(b),[c];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function sl(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
tl.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ql.prototype.ia.call(this,a,b)};
tl.prototype.B=function(){ql.prototype.B.call(this);delete this.api};function ul(){N.call(this);this.i=[]}
v(ul,N);ul.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Da)}N.prototype.B.call(this)};function vl(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||jb(b);this.assets=a.assets||{};this.attrs=a.attrs||jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
vl.prototype.clone=function(){var a=new vl,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ia(c)?a[b]=jb(c):a[b]=c}return a};var wl=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function xl(a){a=a||"";if(window.spf){var b=a.match(wl);spf.style.load(a,b?b[1]:"",void 0)}else yl(a)}
function yl(a){var b=zl(a),c=document.getElementById(b),d=c&&jj(c,"loaded");d||c&&!d||(c=Al(a,b,function(){jj(c,"loaded")||(hj(c),Cg(b),R(Pa(Dg,b),0))}))}
function Al(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Kc(a);d.rel="stylesheet";d.href=rb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function zl(a){var b=Cc(document,"A");Ob(b,new J(a,Bb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Rb(a)}
;function Bl(a,b,c,d){N.call(this);var e=this;this.F=b;this.webPlayerContextConfig=d;this.fa=!1;this.api={};this.T=this.m=null;this.I=new P;this.i={};this.K=this.Z=this.elementId=this.ga=this.config=null;this.J=!1;this.l=this.A=null;this.aa={};this.Ba=["onReady"];this.lastError=null;this.qa=NaN;this.C={};this.Ca=new ul(this);this.S=0;this.j=this.o=a;xd(this,Pa(vd,this.I));Cl(this);Dl(this);xd(this,Pa(vd,this.Ca));c?this.S=R(function(){e.loadNewVideoConfig(c)},0):d&&(El(this),Fl(this))}
v(Bl,N);m=Bl.prototype;m.getId=function(){return this.F};
m.loadNewVideoConfig=function(a){if(!this.h){this.S&&(yf(this.S),this.S=0);var b=a||{};b instanceof vl||(b=new vl(b));this.config=b;this.setConfig(a);Fl(this);this.isReady()&&Gl(this)}};
function El(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.F,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.F:a.config.attrs.id=a.F);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.ga=a;this.config=Hl(a);El(this);this.Z||(this.Z=Il(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Mc(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Mc(Number(a)||a))};
function Gl(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Jl(a){var b=!0,c=Kl(a);c&&a.config&&(a=Ll(a),b=jj(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Fl(a){if(!a.h&&!a.J){var b=Jl(a);if(b&&"html5"===(Kl(a)?"html5":null))a.K="html5",a.isReady()||Ml(a);else if(Nl(a),a.K="html5",b&&a.l&&a.o)a.o.appendChild(a.l),Ml(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Ol(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Hl(a.config):void 0;d(a.o,e,a.webPlayerContextConfig);Ml(a)};
a.J=!0;b?a.A():(nj(Ll(a),a.A),(b=Pl(a))&&xl(b),Ql(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function Kl(a){var b=yc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Ml(a){var b;if(!a.h){var c=Kl(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.J=!1,!Ol(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Rl(a)):a.qa=R(function(){Ml(a)},50)}}
function Rl(a){Cl(a);a.fa=!0;var b=Kl(a);if(b){a.m=Sl(a,b,"addEventListener");a.T=Sl(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Sl(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);Gl(a);a.Z&&a.Z(a.api);a.I.O("onReady",a.api)}
function Sl(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,jf(h))}}}
function Cl(a){a.fa=!1;if(a.T)for(var b in a.i)a.i.hasOwnProperty(b)&&a.T(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&yf(Number(c));a.C={};a.m=null;a.T=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ga};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.fa};
function Dl(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Cg("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Cg("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Cg("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=Il(this,b);if(d){if(!(0<=Va(this.Ba,a)||this.i[a])){var e=Tl(this,a);this.m&&this.m(a,e)}this.I.subscribe(a,d);"onReady"===a&&this.isReady()&&R(function(){d(c.api)},0)}};
m.removeEventListener=function(a,b){if(!this.h){var c=Il(this,b);c&&Le(this.I,a,c)}};
function Il(a,b){var c=b;if("string"===typeof b){if(a.aa[b])return a.aa[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];(f=B(b))&&f.apply(z,e)};
a.aa[b]=c}return c?c:null}
function Tl(a,b){var c="ytPlayer"+b+a.F;a.i[b]=c;z[c]=function(d){var e=R(function(){if(!a.h){a.I.O(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
gb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.K||(Kl(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Nl(a){a.cancel();Cl(a);a.K=null;a.config&&(a.config.loaded=!1);var b=Kl(a);b&&(Jl(a)||!Ql(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&tj(Ll(this),this.A);yf(this.qa);this.J=!1};
m.B=function(){Nl(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){hf(b)}this.aa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(z[this.i[a]]=null);this.ga=this.config=this.api=null;delete this.o;delete this.j;N.prototype.B.call(this)};
function Ql(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Ll(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Pl(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ol(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Pf(d||"","&")[b]}
function Hl(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?jb(e):e}return b}
;var Ul={},Vl="player_uid_"+(1E9*Math.random()>>>0);function Wl(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?yc(d):d;var e=Vl+"_"+Ka(d),f=Ul[e];if(f&&c)return Xl(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Bl(d,e,a,b);Ul[e]=f;Cg("player-added",f.api);xd(f,function(){delete Ul[f.getId()]});
return f.api}
function Xl(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Yl=null,Zl=null,$l=null;function am(){var a=Yl.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function bm(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=I("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=I("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Ub(window.location.href);g&&f.push(g);g=Ub(d);if(0<=Va(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Ob(f,d),d=f.href),d){g=d.match(Sb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:pk()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Rb(d).toString(36),e=e?Wb(e):"",eh(b,e,k||5))}else k=b,e="ST-"+Rb(d).toString(36),k=k?Wb(k):"",eh(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=Xb(a,l)+n;a=a instanceof J?a:Gb(a);c.href=Cb(a)}return!0}
;A("yt.setConfig",df,void 0);A("yt.config.set",df,void 0);A("yt.setMsg",lf,void 0);A("yt.msgs.set",lf,void 0);A("yt.logging.errors.log",fj,void 0);
A("writeEmbed",function(){var a=I("PLAYER_CONFIG",void 0);if(!a){var b=I("PLAYER_VARS",void 0);b&&(a={args:b})}dk(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=I("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);if((c=I("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=Tf(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Yl=Wl(a,c,!1)}else Yl=Wl(a);Yl.addEventListener("onVideoDataChange",am);a=I("POST_MESSAGE_ID","player");I("ENABLE_JS_API")?$l=new Mj(Yl):I("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Zl=new Pj(window.parent,a,b),$l=new tl(Yl,Zl.j));wj()},void 0);
var cm=gf(function(){hl("ol");var a=fh.getInstance(),b=!!((ih("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Ad(document.body,"exp-invert-logo"))if(c&&!Ad(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ad(d,"inverted-hdpi")){var e=yd(d);zd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ad(document.body,"inverted-hdpi")&&Bd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=ih(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete U[b]:(c=d.toString(16),U[b]=c.toString()),a.save());ll.h||(ll.h=new ll);a=ll.h;c=16623;var f=void 0===f?{}:f;Object.values(Dj).includes(c)||(ej(new V("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.u=[];f.ta?ol(a,c,f):pl(a,c,f)}),dm=gf(function(){Yl&&Yl.sendAbandonmentPing&&Yl.sendAbandonmentPing();
I("PL_ATT")&&Aj.dispose();for(var a=0,b=uj.length;a<b;a++)Ef(uj[a]);uj.length=0;sj("//static.doubleclick.net/instream/ad_status.js");vj=!1;df("DCLKSTAT",0);wd($l,Zl);Yl&&(Yl.removeEventListener("onVideoDataChange",am),Yl.destroy())});
window.addEventListener?(window.addEventListener("load",cm),window.addEventListener("unload",dm)):window.attachEvent&&(window.attachEvent("onload",cm),window.attachEvent("onunload",dm));Qa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Bj);Qa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Cj);Qa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||xj);
Qa("yt.player.exports.navigate",B("yt.player.exports.navigate")||bm);Qa("yt.util.activity.init",B("yt.util.activity.init")||Gf);Qa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Jf);Qa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Hf);}).call(this);

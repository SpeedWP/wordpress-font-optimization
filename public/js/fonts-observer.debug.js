(function(){function a(a){r.push(a);1==r.length&&p()}function c(){for(;r.length;)r[0](),r.shift()}function b(a){this.a=t;this.g=void 0;this.f=[];var b=this;try{a(function(a){f(b,a)},function(a){g(b,a)})}catch(u){g(b,u)}}function d(a){return new b(function(b,c){c(a)})}function e(a){return new b(function(b){b(a)})}function f(a,b){if(a.a==t){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||f(a,b);c=!0},function(b){c||
g(a,b);c=!0});return}}catch(N){c||g(a,N);return}a.a=0;a.g=b;h(a)}}function g(a,b){if(a.a==t){if(b==a)throw new TypeError;a.a=1;a.g=b;h(a)}}function h(b){a(function(){if(b.a!=t)for(;b.f.length;){var a=b.f.shift(),c=a[0],d=a[1],e=a[2],a=a[3];try{0==b.a?"function"==typeof c?e(c.call(void 0,b.g)):e(b.g):1==b.a&&("function"==typeof d?e(d.call(void 0,b.g)):a(b.g))}catch(pb){a(pb)}}})}function k(a){return new b(function(b,c){function d(c){return function(d){k[c]=d;f+=1;f==a.length&&b(k)}}var f=0,k=[];0==
a.length&&b(k);for(var h=0;h<a.length;h+=1)e(a[h]).h(d(h),c)})}function q(a){return new b(function(b,c){for(var d=0;d<a.length;d+=1)e(a[d]).h(b,c)})}var p,r=[];p=function(){setTimeout(c)};var t=2;b.prototype.l=function(a){return this.h(void 0,a)};b.prototype.h=function(a,c){var d=this;return new b(function(b,e){d.f.push([a,c,b,e]);h(d)})};window.Promise||(window.Promise=b,window.Promise.resolve=e,window.Promise.reject=d,window.Promise.race=q,window.Promise.all=k,window.Promise.prototype.then=b.prototype.h,
window.Promise.prototype["catch"]=b.prototype.l)})();
(function(){function a(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function c(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function N(){document.removeEventListener("DOMContentLoaded",N);a()}):document.attachEvent("onreadystatechange",function pb(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",pb),a()})}function b(a){this.a=document.createElement("div");
this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.g=document.createElement("span");this.h=document.createElement("span");this.o=document.createElement("span");this.f=document.createElement("span");this.l=-1;this.g.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.o.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.g.appendChild(this.o);this.h.appendChild(this.f);this.a.appendChild(this.g);this.a.appendChild(this.h)}function d(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+
b+";"}function e(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.h.scrollLeft=c;a.g.scrollLeft=a.g.scrollWidth+100;return a.l!==b?(a.l=b,!0):!1}function f(b,c){function d(){var a=f;e(a)&&a.a.parentNode&&c(a.l)}var f=b;a(b.g,d);a(b.h,d);e(b)}function g(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}function h(){if(null===t)if(k()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
t=!!a&&603>parseInt(a[1],10)}else t=!1;return t}function k(){null===w&&(w=!!document.fonts);return w}function q(){if(null===n){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(y){}n=""!==a.style.font}return n}function p(a,b){return[a.style,a.weight,q()?a.stretch:"","100px",b].join(" ")}var r=null,t=null,n=null,w=null;g.prototype.load=function(a,e){var g=this,n=a||"BESbswy",q=0,t=e||3E3,w=(new Date).getTime();return new Promise(function(a,e){if(k()&&!h()){var u=
new Promise(function(a,b){function c(){(new Date).getTime()-w>=t?b():document.fonts.load(p(g,'"'+g.family+'"'),n).then(function(b){1<=b.length?a():setTimeout(c,25)},function(){b()})}c()}),y=new Promise(function(a,b){q=setTimeout(b,t)});Promise.race([y,u]).then(function(){clearTimeout(q);a(g)},function(){e(g)})}else c(function(){function c(){var b;if(b=-1!=S&&-1!=T||-1!=S&&-1!=U||-1!=T&&-1!=U)(b=S!=T&&S!=U&&T!=U)||(null===r&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
r=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=r&&(S==N&&T==N&&U==N||S==Oa&&T==Oa&&U==Oa||S==Pa&&T==Pa&&U==Pa)),b=!b;b&&(L.parentNode&&L.parentNode.removeChild(L),clearTimeout(q),a(g))}function k(){if((new Date).getTime()-w>=t)L.parentNode&&L.parentNode.removeChild(L),e(g);else{var a=document.hidden;if(!0===a||void 0===a)S=h.a.offsetWidth,T=u.a.offsetWidth,U=y.a.offsetWidth,c();q=setTimeout(k,50)}}var h=new b(n),u=new b(n),y=new b(n),S=-1,T=-1,U=-1,N=-1,Oa=-1,Pa=
-1,L=document.createElement("div");L.dir="ltr";d(h,p(g,"sans-serif"));d(u,p(g,"serif"));d(y,p(g,"monospace"));L.appendChild(h.a);L.appendChild(u.a);L.appendChild(y.a);document.body.appendChild(L);N=h.a.offsetWidth;Oa=u.a.offsetWidth;Pa=y.a.offsetWidth;k();f(h,function(a){S=a;c()});d(h,p(g,'"'+g.family+'",sans-serif'));f(u,function(a){T=a;c()});d(u,p(g,'"'+g.family+'",serif'));f(y,function(a){U=a;c()});d(y,p(g,'"'+g.family+'",monospace'))})})};"object"===typeof module?module.B=g:(window.FontFaceObserver=
g,window.FontFaceObserver.prototype.load=g.prototype.load)})();var Ic=x[5]?x[5][1]:0;Ic&&"FontFaceObserver"in m&&Fc(Ic,function(a,c,b,d,e,f,g,h){if(b="string"===typeof a?a:a[26]){M("loadFont"+g);var k=new FontFaceObserver(b,c);k.load().then(function(){f&&(f[7]&&f[7]in m&&m[f[7]].call(m,fontface_family),f[10]&&Ec(f[10][11],f[10][12],f[10][13]));h||(h=[]);var b=h[2]?[h[2]]:[];b.push(M("_loadFont"+g,"loadFont"+g,"load","load"));var c={};c[a[26]]=k;I("fonts.observer.load",c,h[0]||"\u00f8",h[1]||"\u00f8",O(b))})}},1);

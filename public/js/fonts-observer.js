(function(){function a(a){w.push(a);1==w.length&&p()}function c(){for(;w.length;)w[0](),w.shift()}function b(a){this.a=u;this.b=void 0;this.g=[];var b=this;try{a(function(a){f(b,a)},function(a){g(b,a)})}catch(v){g(b,v)}}function d(a){return new b(function(b,c){c(a)})}function e(a){return new b(function(b){b(a)})}function f(a,b){if(a.a==u){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||f(a,b);c=!0},function(b){c||
g(a,b);c=!0});return}}catch(x){c||g(a,x);return}a.a=0;a.b=b;n(a)}}function g(a,b){if(a.a==u){if(b==a)throw new TypeError;a.a=1;a.b=b;n(a)}}function n(b){a(function(){if(b.a!=u)for(;b.g.length;){var a=b.g.shift(),c=a[0],d=a[1],e=a[2],a=a[3];try{0==b.a?"function"==typeof c?e(c.call(void 0,b.b)):e(b.b):1==b.a&&("function"==typeof d?e(d.call(void 0,b.b)):a(b.b))}catch(Ra){a(Ra)}}})}function h(a){return new b(function(b,c){function d(c){return function(d){g[c]=d;f+=1;f==a.length&&b(g)}}var f=0,g=[];0==
a.length&&b(g);for(var h=0;h<a.length;h+=1)e(a[h]).c(d(h),c)})}function q(a){return new b(function(b,c){for(var d=0;d<a.length;d+=1)e(a[d]).c(b,c)})}var p,w=[];p=function(){setTimeout(c)};var u=2;b.prototype.h=function(a){return this.c(void 0,a)};b.prototype.c=function(a,c){var d=this;return new b(function(b,e){d.g.push([a,c,b,e]);n(d)})};window.Promise||(window.Promise=b,window.Promise.resolve=e,window.Promise.reject=d,window.Promise.race=q,window.Promise.all=h,window.Promise.prototype.then=b.prototype.c,
window.Promise.prototype["catch"]=b.prototype.h)})();
(function(){function a(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function c(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function x(){document.removeEventListener("DOMContentLoaded",x);a()}):document.attachEvent("onreadystatechange",function Ra(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",Ra),a()})}function b(a){this.a=document.createElement("div");
this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.j=document.createElement("span");this.g=document.createElement("span");this.h=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.g.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.j.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.j);this.c.appendChild(this.g);this.a.appendChild(this.b);this.a.appendChild(this.c)}function d(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+
b+";"}function e(a){var b=a.a.offsetWidth,c=b+100;a.g.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.h!==b?(a.h=b,!0):!1}function f(b,c){function d(){var a=f;e(a)&&a.a.parentNode&&c(a.h)}var f=b;a(b.b,d);a(b.c,d);e(b)}function g(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}function n(){if(null===u)if(h()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
u=!!a&&603>parseInt(a[1],10)}else u=!1;return u}function h(){null===r&&(r=!!document.fonts);return r}function q(){if(null===m){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(K){}m=""!==a.style.font}return m}function p(a,b){return[a.style,a.weight,q()?a.stretch:"","100px",b].join(" ")}var w=null,u=null,m=null,r=null;g.prototype.load=function(a,e){var g=this,m=a||"BESbswy",q=0,r=e||3E3,u=(new Date).getTime();return new Promise(function(a,e){if(h()&&!n()){var v=
new Promise(function(a,b){function c(){(new Date).getTime()-u>=r?b():document.fonts.load(p(g,'"'+g.family+'"'),m).then(function(b){1<=b.length?a():setTimeout(c,25)},function(){b()})}c()}),x=new Promise(function(a,b){q=setTimeout(b,r)});Promise.race([x,v]).then(function(){clearTimeout(q);a(g)},function(){e(g)})}else c(function(){function c(){var b;if(b=-1!=L&&-1!=M||-1!=L&&-1!=N||-1!=M&&-1!=N)(b=L!=M&&L!=N&&M!=N)||(null===w&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
w=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=w&&(L==K&&M==K&&N==K||L==va&&M==va&&N==va||L==wa&&M==wa&&N==wa)),b=!b;b&&(F.parentNode&&F.parentNode.removeChild(F),clearTimeout(q),a(g))}function h(){if((new Date).getTime()-u>=r)F.parentNode&&F.parentNode.removeChild(F),e(g);else{var a=document.hidden;if(!0===a||void 0===a)L=n.a.offsetWidth,M=v.a.offsetWidth,N=x.a.offsetWidth,c();q=setTimeout(h,50)}}var n=new b(m),v=new b(m),x=new b(m),L=-1,M=-1,N=-1,K=-1,va=-1,wa=
-1,F=document.createElement("div");F.dir="ltr";d(n,p(g,"sans-serif"));d(v,p(g,"serif"));d(x,p(g,"monospace"));F.appendChild(n.a);F.appendChild(v.a);F.appendChild(x.a);document.body.appendChild(F);K=n.a.offsetWidth;va=v.a.offsetWidth;wa=x.a.offsetWidth;h();f(n,function(a){L=a;c()});d(n,p(g,'"'+g.family+'",sans-serif'));f(v,function(a){M=a;c()});d(v,p(g,'"'+g.family+'",serif'));f(x,function(a){N=a;c()});d(x,p(g,'"'+g.family+'",monospace'))})})};"object"===typeof module?module.w=g:(window.FontFaceObserver=
g,window.FontFaceObserver.prototype.load=g.prototype.load)})();var hc=z[5]?z[5][1]:0;hc&&"FontFaceObserver"in t&&ec(hc,function(a,c,b,d,e,f){(a="string"===typeof a?a:a[26])&&(new FontFaceObserver(a,c)).load().then(function(){f&&(f[7]&&f[7]in t&&t[f[7]].call(t,fontface_family),f[10]&&dc(f[10][11],f[10][12],f[10][13]))})},1);

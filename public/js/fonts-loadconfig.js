function gc(a){if(!a)return!1;a instanceof Array||(a=[a]);return a}var hc=[33,34,35,36,37,38,39,40,41];function ic(a){return 31==a?"oblique":32==a?"italic":"normal"}function jc(a,b,c){if(a=a?k(a):aa){if(b){"string"===typeof b&&(b=[b]);for(var d=0,e=b.length;d<e;d++)a.classList.add(b[d])}if(c)for("string"===typeof c&&(c=[c]),d=0,e=c.length;d<e;d++)a.classList.remove(c[d])}}
function kc(a,b,c){var d=a[4],e=gc(a[5]);if(!c)var f=gc(a[6]),g=a[42];var m,h,q,p,t,v,n;K(0,function(){for(var y=0,r=a[3].length;y<r;y++){m=a[3][y];q=m[4]||d;p=m[5]||e;c||(25===q?t=!1:(t=m[6]||f,g&&!t&&(t=[22])));for(var x=0,w=m[27].length;x<w;x++)h=m[27][x],function(a,d,e,f,r,g){function h(a){b(d,w,f,r,g,v,void 0,a)}var w={};e&&(e[20]&&(w.weight=100*(hc.indexOf(e[20])+1)),e[21]&&(w.style=ic(e[21])),e[22]&&(w.stretch=e[22]),c||(e[23]&&(w.variant=e[23]),e[24]&&(w.unicodeRange=e[24]),e[25]&&(w.featureSettings=
e[25])));n=a[8];v=a[9];n&&(n[7]&&n[7]in u&&u[n[7]].call(u,d),n[10]&&jc(n[10][11],n[10][12],n[10][13]));25===f?O(r,h):27===f?K(0,h):h()}(m,h,h[28],q,p,t)}})};

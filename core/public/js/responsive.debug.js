var cc=m.matchMedia||m.msMatchMedia,dc={};function Na(a){if(!cc||!a)return!0;a in dc||(dc[a]=cc(a));return dc[a]}function Pa(a,c,b){function d(f){f.matches?(b||dc[a].removeListener(d),e||(e=!0,c())):f.matches||(b&&!0===e&&b(),e=!1)}var e=!cc||!a||Na(a).matches;e&&c();b&&dc&&a in dc&&dc[a].addListener(d)}z.media=Pa;

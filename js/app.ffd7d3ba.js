(function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],p=0,f=[];p<i.length;p++)l=i[p],a[l]&&f.push(a[l][0]),a[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/SlapMap/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("f9cc"),a=r.n(n);a.a},"0abb":function(e,t,r){"use strict";var n=r("1fe2"),a=r.n(n);a.a},"11e7":function(e,t,r){},"1fe2":function(e,t,r){},"4aaf":function(e,t,r){"use strict";var n=r("78ab"),a=r.n(n);a.a},5689:function(e,t,r){"use strict";var n=r("11e7"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("bc3a"),o=r.n(a),l={},i=o.a.create(l);i.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),i.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},n["a"].use(Plugin);Plugin;var s,c,u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("GlobalHeader"),r("Map"),r("GlobalFooter")],1)},p=[],f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("img",{attrs:{src:r("9b10")}}),n("h1",[e._v("SlapMap")])])}],d={name:"GlobalHeader"},m=d,b=(r("5689"),r("2877")),h=Object(b["a"])(m,f,y,!1,null,"e7890832",null),v=h.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"map-container"}},[r("div",{attrs:{id:"map"}})])}],T=(r("96cf"),r("3b8d")),x=(r("ac6a"),r("f355")),_=x.keys.googleMaps,j="gmapsCallback",A=!!window.google,M=new Promise(function(e,t){s=e,c=t});function O(){if(A)return M;A=!0,window[j]=function(){return s(window.google)};var e=document.createElement("script");return e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=".concat(_,"&callback=").concat(j),e.onerror=c,document.querySelector("head").appendChild(e),M}var P={name:"Map",mounted:function(){var e=Object(T["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,[],t="https://docs.google.com/spreadsheets/d/e/2PACX-1vQr67rOigwpANg9-wzJcD7aBPR7-ezPBMr1MZhBMH0-3wAvjBvqjzRODB1W596lIRZt-we_-eH7T4by/pub?output=csv",e.next=5,O();case 5:r=e.sent,axios.get(t).then(function(e){for(var t=k(e.data,","),n=new r.maps.Map(document.getElementById("map"),{zoom:5,center:{lat:38.5341146,lng:-98.0819922},disableDefaultUI:!0,styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels",stylers:[{visibility:"off"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]}),a=[],o=0;o<t.length;o++)if(!isNaN(t[o][2])){var l=new r.maps.Marker({position:{lat:parseFloat(t[o][2]),lng:parseFloat(t[o][3])},map:n,icon:{url:t[o][4],scaledSize:new r.maps.Size(32,32)}});a.push(l)}new MarkerClusterer(n,a,{imagePath:"https://mkvug.github.io/SlapMap/img/cluster.svg"})}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));function t(){return e.apply(this,arguments)}return t}()};function k(e,t){void 0==t&&(t=","),t&&t.length>1&&(t=",");var r="\n",n="",a=0,o=e.charAt(a),l=0,i=new Array;while(o!=n){while(" "==o||"\t"==o||"\r"==o)o=e.charAt(++a);var s="";if('"'==o){o=e.charAt(++a);do{if('"'!=o&&(s+=o,o=e.charAt(++a)),'"'==o){var c=e.charAt(a+1);'"'==c&&(s+='"',a+=2,o=e.charAt(a))}}while(o!=n&&'"'!=o);if(o==n)throw"Unexpected end of data, double-quote expected";o=e.charAt(++a)}else while(o!=n&&o!=t&&o!=r&&" "!=o&&"\t"!=o&&"\r"!=o)s+=o,o=e.charAt(++a);i.length<=l&&i.push(new Array),i[l].push(s);while(" "==o||"\t"==o||"\r"==o)o=e.charAt(++a);if(o==t)0;else if(o==r)0,l++;else if(o!=n)throw"Delimiter expected after character "+a;o=e.charAt(++a)}return i}var S=P,E=(r("4aaf"),Object(b["a"])(S,g,w,!1,null,"0f08d9c1",null)),G=E.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[e._v("\n  SlapMap © "+e._s(e.year)+"\n")])},z=[],F={name:"GlobalFooter",computed:{year:function(){var e=new Date;return e.getFullYear()}}},B=F,H=(r("0abb"),Object(b["a"])(B,$,z,!1,null,"4ad12db7",null)),C=H.exports,D={name:"app",components:{GlobalHeader:v,Map:G,GlobalFooter:C}},R=D,q=(r("034f"),Object(b["a"])(R,u,p,!1,null,null,null)),I=q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(I)}}).$mount("#app")},"78ab":function(e,t,r){},"9b10":function(e,t,r){e.exports=r.p+"img/slapmap.85dc349a.svg"},f355:function(e){e.exports={keys:{googleMaps:"AIzaSyCAfW71nF_ixfE6ZuGWGj59fA29GAHo9X0"}}},f9cc:function(e,t,r){}});
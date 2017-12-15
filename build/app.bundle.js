!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=n(1);(0,function(e){return e&&e.__esModule?e:{default:e}}(r).default)({}),$.urlParam=function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=t?t[1]||0:null};var o=$.urlParam("chart");null!=o&&($(".slide").hide(),$("#"+o).show()),"all"==o&&$(".slide").show(),d3.json("./data/taxes.json",function(e,t){function n(e,t,n){for(var r=0;r<n.length;r++)if(e.properties.COUNTYNAME==n[r].PLACE){var o=d3.scale.linear().domain([7e3,15e3]).range(["#F7F7F7","#252525"]),i=Number(n[r].AverageTotal);return o(i)}}function r(e,t,n){for(var r=0,o=0;o<n.length;o++)if(e.properties.COUNTYNAME==n[o].PLACE){r=Number(n[o].AverageTotal);var i=d3.scale.linear().domain([7e3,15e3]).range(["#F7F7F7","#252525"])}return"<div class='districtName'>"+e.properties.COUNTYNAME+" County</div><div><span class='legendary' style='background-color:"+i(r)+"'>"+d3.format("$,.0f")(r)+"</span> average taxes paid</div>"}var o=t.counties;d3.helper={},d3.helper.tooltip=function(e){return function(t){var n,r=d3.select("body").node();t.on("mouseover",function(t,o){d3.select("body").selectAll("div.tooltip").remove(),n=d3.select("body").append("div").attr("class","tooltip");var i=d3.mouse(r);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px").style("position","absolute").style("z-index",1001);e(t,o)}).on("mousemove",function(t,o){var i=d3.mouse(r);n.style("left",i[0]+10+"px").style("top",i[1]-15+"px");var a=e(t,o)||"";n.html(a)}).on("mouseout",function(e,t){n.remove()})}},function(e,t,o,i,a,s,c,l){function u(e){if(e&&d!==e){var t=v.centroid(e);t[0],t[1],d=e}else d=null;y.selectAll("path").classed("faded",!1).classed("active",d&&function(e){return e===d})}var d,f=320,p=400;if("us"==s)var h=d3.geo.albersUsa().scale(700).translate([330,200]);else if("mn"==s)var h=d3.geo.albersUsa().scale(5037).translate([50,970]);else if("metro"==s)var h=d3.geo.mercator().scale([16800]).center([-92.384033,45.209134]);var v=d3.geo.path().projection(h),m=d3.select(e+" svg").attr("width",f).attr("height",p);m.append("rect").attr("class","background").attr("width",f).attr("height",p);var y=m.append("g");d3.json("shapefiles/"+i,function(e,t){y.append("g").attr("class","states").selectAll("path").data(t.features).enter().append("path").attr("d",v).attr("id",function(e){return(s+"_"+e.properties.DISTRICT).replace(new RegExp(" ","g"),"-")}).attr("precinctName",function(e){return e.properties.DISTRICT}).style("fill",function(e){return n(e,a,c)}).style("stroke-width","1px").style("stroke","#fff").call(d3.helper.tooltip(function(e,t){return r(e,a,c)})),y.append("path").attr("id","state-borders").attr("d",v)}),d3.behavior.zoom().on("zoom",function(){y.attr("transform","translate("+d3.event.translate.join(",")+")scale("+d3.event.scale+")"),y.selectAll("circle").attr("d",v.projection(h)),y.selectAll("path").attr("d",v.projection(h))}),$(".zoom, .switch, #close, .mapSwitch").click(function(){u(),$("#filter input").val(""),$(".district").removeClass("selected"),$("#infobox").hide(),d3.selectAll(".map rect").classed("faded",!1),d3.selectAll(".map rect").classed("active",!1),$(".rightSide").show()}),$(".mapSwitch").click(function(){$("#filter input").val("")})}("#map",0,0,"counties.json","house","mn",o)})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(){function e(t){r(this,e),this.options=t||{},this.options.pym=void 0===this.options.pym||this.options.pym,this.options.useView=void 0===this.options.useView||this.options.useView,this.options.views=this.options.views||{develop:/localhost.*|127\.0\.0\.1.*/i,staging:/staging/i},this.parseQuery(),this.setView(),this.options.pym&&(this.pym=_.isUndefined(window.pym)?void 0:new pym.Child({polling:500}))}return o(e,[{key:"setView",value:function(){if(this.options.useView){var e=void 0;if(_.find(this.options.views,function(t,n){return e=n,window.location.href.match(t)?n:void 0}),e){var t=document.createElement("div"),n=document.getElementsByTagName("body")[0];t.className="site-view site-view-"+e,n.insertBefore(t,n.childNodes[0])}}}},{key:"parseQuery",value:function(){this.query=a.default.parse(document.location.search),this.query.pym&&"true"===this.query.pym&&(this.options.pym=!0)}},{key:"deepClone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"isEmbedded",value:function(){if(!_.isUndefined(this.embedded))return this.embedded;try{this.embedded=window.self!==window.top}catch(e){this.embedded=!0}return this.embedded}},{key:"hasLocalStorage",value:function(){if(!_.isUndefined(this.localStorage))return this.localStorage;try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.localStorage=!0}catch(e){this.localStorage=!1}return this.localStorage}},{key:"hasGeolocate",value:function(){return window.navigator&&"geolocation"in window.navigator}},{key:"geolocate",value:function(e){this.hasGeolocate()?window.navigator.geolocation.getCurrentPosition(function(t){e(null,{lat:t.coords.latitude,lng:t.coords.longitude})},function(){e("Unable to find your position.")}):e("Geolocation not available")}},{key:"goTo",value:function(e){var t=_.isElement(e)?e:e[0]&&_.isElement(e[0])?e[0]:document.getElementById(e);t&&(this.isEmbedded()&&this.pym?this.pym.scrollParentToChildEl(t):t.scrollIntoView({behavior:"smooth"}))}},{key:"gaPageUpdate",value:function(e){e=e||document.location.pathname+document.location.search+document.location.hash,window.ga&&(window.ga("set","page",e),window.ga("send","pageview"))}}]),e}();t.default=function(e){return new s(e)}},function(e,t,n){"use strict";function r(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}function o(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(r[e]=n);void 0===r[e]&&(r[e]={}),r[e][t[1]]=n};case"bracket":return function(e,n,r){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===r[e]?void(r[e]=[n]):void(r[e]=[].concat(r[e],n)):void(r[e]=n)};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function i(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function a(e){return Array.isArray(e)?e.sort():"object"==typeof e?a(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var s=n(3),c=n(4);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=c({arrayFormat:"none"},t);var n=o(t),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(o),i,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=a(n):e[t]=n,e},Object.create(null))):r},t.stringify=function(e,t){t=c({encode:!0,strict:!0,arrayFormat:"none"},t);var n=r(t);return e?Object.keys(e).sort().map(function(r){var o=e[r];if(void 0===o)return"";if(null===o)return i(r,t);if(Array.isArray(o)){var a=[];return o.slice().forEach(function(e){void 0!==e&&a.push(n(r,e,a.length))}),a.join("&")}return i(r,t)+"="+i(o,t)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,c=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var u in n)i.call(n,u)&&(c[u]=n[u]);if(o){s=o(n);for(var d=0;d<s.length;d++)a.call(n,s[d])&&(c[s[d]]=n[s[d]])}}return c}}]);
//# sourceMappingURL=app.bundle.js.map
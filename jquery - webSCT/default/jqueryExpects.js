!function(t,e){function o(t){return new s(t)}function r(t){if(Object.keys)return Object.keys(t);var e=[];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.push(o);return e}function n(t){if(t.selector)return t.selector;if(t[0]&&t[0].tagName){var e=t[0].tagName.toLowerCase(),o=t.attr("id");o&&(e+="#"+o);var r=t.attr("class");if(r){r=r.split(" ");for(var n=0;n<r.length;n++)e+="."+r[n]}return e}return t}function s(t,o,n){if(this.obj=t instanceof d?t:b(t),this.flags={},e!==n){this.flags[o]=!0;for(var i in n.flags)n.flags.hasOwnProperty(i)&&(this.flags[i]=!0)}var a=o?f[o]:r(f),h=this;if(a)for(var c=0,l=a.length;l>c;c++)this.flags[a[c]]||function(){var t=a[c],e=new s(this.obj,t,this);if("function"==typeof s.prototype[t]){var o=this[t];this[t]=function(){return o.apply(h,arguments)};for(var r in s.prototype)s.prototype.hasOwnProperty(r)&&r!==t&&(this[t][r]=b.proxy(e[r],e))}else this[t]=e}.call(this)}function i(t){Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,arguments.callee),this.message=t,this.name="AssertionError"}function a(t){return t=t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2)}function h(t){function e(t){return t.toUpperCase()+t.toUpperCase()}return t?t.match(/^#/)?4===t.length?"#"+e(t.charAt(1))+e(t.charAt(2))+e(t.charAt(3)):t.toUpperCase():t.match(/^rgb/)?a(t).toUpperCase():g[b.trim(t)]:""}function c(t,e,o){function r(t){if(e.match(/^border/)){var o=e.split(/-/);return o[0]+"-"+t+"-"+o[1]}return e+"-"+t}var n=e.match(/color/);o=o.split(/\s/);var s=!0,i=b.map(["top","right","bottom","left"],function(e,i){var a=o[i]||o[i-2]||o[0],c=t.css(r(e));return n?h(a)!==(c=h(c))&&(s=!1):a!==c&&(s=!1),c});return{passing:s,got:i.join(" ")}}function l(t,e,o){o=o.split(/\s/);var r=!0,n=b.map(["width","style","color"],function(n,s){var i=t.css(e+"-"+n);return"color"===n?(i=h(i))!==h(o[s])&&(r=!1):i!==o[s]&&(r=!1),i});return{passing:r,got:n.join(" ")}}function u(t){return b.map(t,function(e,o){return b.inArray(e,t)===o?e:null}).join(" ")}function p(t,e,o){this.deferred=t,this.event=e,this.args=o}function F(t,e){throw new p(t,e,[].slice.call(arguments,2))}var d=t.jQuery,b=d;window.require&&!d&&(d=b=require("jquery"),module.exports=o);var g={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF ",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC ",crimson:"#DC143C ",cyan:"#00FFFF ",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9 ",darkgreen:"#006400 ",darkgrey:"#A9A9A9 ",darkkhaki:"#BDB76B ",darkmagenta:"#8B008B ",darkolivegreen:"#556B2F ",darkorange:"#FF8C00 ",darkorchid:"#9932CC ",darkred:"#8B0000",darksalmon:"#E9967A ",darkseagreen:"#8FBC8F ",darkslateblue:"#483D8B ",darkslategray:"#2F4F4F ",darkslategrey:"#2F4F4F ",darkturquoise:"#00CED1 ",darkviolet:"#9400D3 ",deeppink:"#FF1493 ",deepskyblue:"#00BFFF",dimgray:"#696969 ",dimgrey:"#696969 ",dodgerblue:"#1E90FF",firebrick:"#B22222 ",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF ",gainsboro:"#DCDCDC ",ghostwhite:"#F8F8FF ",gold:"#FFD700 ",goldenrod:"#DAA520 ",gray:"#808080 ",green:"#008000 ",greenyellow:"#ADFF2F ",grey:"#808080 ",honeydew:"#F0FFF0 ",hotpink:"#FF69B4 ",indianred:"#CD5C5C",indigo:"#4B0082 ",ivory:"#FFFFF0 ",khaki:"#F0E68C ",lavender:"#E6E6FA",lavenderblush:"#FFF0F5 ",lawngreen:"#7CFC00 ",lemonchiffon:"#FFFACD ",lightblue:"#ADD8E6 ",lightcoral:"#F08080 ",lightcyan:"#E0FFFF ",lightgoldenrodyellow:"#FAFAD2 ",lightgray:"#D3D3D3 ",lightgreen:"#90EE90 ",lightgrey:"#D3D3D3 ",lightpink:"#FFB6C1 ",lightsalmon:"#FFA07A ",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA ",lightslategray:"#778899 ",lightslategrey:"#778899 ",lightsteelblue:"#B0C4DE ",lightyellow:"#FFFFE0 ",lime:"#00FF00 ",limegreen:"#32CD32 ",linen:"#FAF0E6 ",magenta:"#FF00FF ",maroon:"#800000 ",mediumaquamarine:"#66CDAA ",mediumblue:"#0000CD ",mediumorchid:"#BA55D3 ",mediumpurple:"#9370DB ",mediumseagreen:"#3CB371 ",mediumslateblue:"#7B68EE ",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC ",mediumvioletred:"#C71585 ",midnightblue:"#191970 ",mintcream:"#F5FFFA ",mistyrose:"#FFE4E1 ",moccasin:"#FFE4B5 ",navajowhite:"#FFDEAD",navy:"#000080 ",oldlace:"#FDF5E6 ",olive:"#808000 ",olivedrab:"#6B8E23 ",orange:"#FFA500 ",orangered:"#FF4500 ",orchid:"#DA70D6 ",palegoldenrod:"#EEE8AA ",palegreen:"#98FB98 ",paleturquoise:"#AFEEEE ",palevioletred:"#DB7093 ",papayawhip:"#FFEFD5 ",peachpuff:"#FFDAB9 ",peru:"#CD853F ",pink:"#FFC0CB ",plum:"#DDA0DD ",powderblue:"#B0E0E6 ",purple:"#800080 ",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072 ",sandybrown:"#F4A460 ",seagreen:"#2E8B57 ",seashell:"#FFF5EE ",sienna:"#A0522D ",silver:"#C0C0C0 ",skyblue:"#87CEEB ",slateblue:"#6A5ACD ",slategray:"#708090 ",slategrey:"#708090 ",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},f={not:["to","be","have","include","only"],to:["be","have","include","match","matchHtml","not","only"],be:[],is:[],are:[],have:[],has:[],any:[]};i.prototype=new Error,i.prototype.constructor=i,t.$expect=o,o.Assertion=s,o.AssertionError=i,s.prototype.assert=function(t,e,o){var r=this.flags.not?!t:t;if(b.isFunction(e)&&(o=e=e.call(this,!r)),e=this.flags.not?o:e,!r)throw new i(e);this.and=new s(this.obj)},s.prototype.exist=function(t){return this.assert(!!this.obj.length,t||"expected "+n(this.obj)+" to exist",t||"expected "+n(this.obj)+" not to exist"),this},s.prototype.elements=s.prototype.items=s.prototype.length=function(t,e){var o=this.obj.length;return this.assert(t===o,e||"expected "+n(this.obj)+" to have a length of "+t+" but got "+o,e||"expected "+n(this.obj)+" to not have a length of "+o),this},s.prototype.greaterThan=s.prototype.above=function(t,e){return this.assert(this.obj.length>t,e||"expected "+n(this.obj)+" to have a length greater than "+t,e||"expected "+n(this.obj)+" to have a length less than "+t),this},s.prototype.lessThan=s.prototype.below=function(t,e){return this.assert(this.obj.length<t,e||"expected "+n(this.obj)+" to have a length less than "+t,e||"expected "+n(this.obj)+" to have a length greater than "+t),this},s.prototype.eql=s.prototype.equal=function(t,e){t=t instanceof d?t:b(t);var o=function(t,e){return t.length!==e.length?!1:t.map(function(t,o){return b.inArray(o,e)>-1?!0:null}).length===t.length},r=o(this.obj,t)&&o(t,this.obj);return this.assert(r,e||"expected "+n(this.obj)+" to equal "+n(t),e||"expected "+n(this.obj)+" to not equal "+n(t)),this},s.prototype.attr=function(t,o,r){var s=this.obj.attr(t);return e===o?this.assert(e!==s,r||"expected "+n(this.obj)+" to have an attribute "+t,r||"expected "+n(this.obj)+" not to have attribute "+t):this.assert(s===o,r||"expected "+n(this.obj)+" to have an attribute "+t+" equals to "+o,r||"expected "+n(this.obj)+" to not have an attribute "+t+" equals to "+o),this},s.prototype.css=function(t,e,o){function r(o){switch(t){case"backgroundColor":case"background-color":case"color":i=(s=h(o.css(t)))===h(e);break;case"border-style":case"border-color":case"border-width":case"margin":case"padding":s=c(o,t,e),i=s.passing,s=s.got;break;case"border-top":case"border-right":case"border-left":case"border-bottom":s=l(o,t,e),i=s.passing,s=s.got;break;case"border":i=!0,s=b.map(["top","right","left","bottom"],function(r){var n=l(o,t+"-"+r,e);return n.passing||(i=!1),n.got}),s=u(s);break;case"border-radius":s=[],i=(s[0]=o.css("border-top-left-radius"))===e&&(s[1]=o.css("border-top-right-radius"))===e&&(s[2]=o.css("border-bottom-left-radius"))===e&&(s[3]=o.css("border-bottom-right-radius"))===e,s=u(s);break;default:i=(s=o.css(t))===e}F.assert(i,p(s),p())}t=b.trim(t),e="string"==typeof e?b.trim(e):e;var s,i,a=this.obj,p=function(r){return o||"expected "+n(a)+" to have its "+t+" style equal to "+e+(r?" but got "+r:"")},F=this;return this.obj.each(function(t,e){r(b(e))}),this},s.prototype.text=function(t,e){var o=this.obj.text();return"number"==typeof t?this.assert(o.length===t,e||"expected "+n(this.obj)+" text to be of length "+t+" but got "+o.length,e||"expected "+n(this.obj)+" text to not be of length "+t):t instanceof RegExp?this.assert(t.test(o),e||"expected "+n(this.obj)+" text to match "+String(t),e||"expected "+n(this.obj)+" text not to match "+String(t)):null==t?this.assert(!!o.length,e||"expected "+n(this.obj)+" to have text",e||"expected "+n(this.obj)+" to not have text"):(t=String(t),this.assert(o===t,e||"expected "+n(this.obj)+" text to be equal to "+t+" but got "+o,e||"expected "+n(this.obj)+" text to not be equal to "+t)),this},s.prototype.contain=function(t,e,o){"boolean"!=typeof e&&(o=e,e=!1);var r,s=/[\.,-\/#!$%\^&\*;:{}=\-_`~()\s'"]/g;return r=e?this.obj.is(":contains('"+t+"')"):this.obj.text().replace(s,"").toLowerCase().indexOf(t.replace(s,"").toLowerCase())>-1,this.assert(r,o||"expected "+n(this.obj)+' to contain "'+t+'"',o||"expected "+n(this.obj)+' not to contain "'+t+'"'),this},b.each(["width","innerWidth","outerWidth","height","innerHeight","outerHeight","scrollLeft","scrollTop"],function(t,e){s.prototype[e]=function(t,o){var r={">":function(t,e){return t>e},">=":function(t,e){return t>=e},"<":function(t,e){return e>t},"<=":function(t,e){return e>=t}};if("string"==typeof t&&(r[b.trim(t).slice(0,2)]||r[b.trim(t).charAt(0)])){t=b.trim(t);var s,i;(s=r[t.slice(0,2)])?(i=t.slice(0,2),t=parseFloat(t.slice(2))):(s=r[t.charAt(0)])&&(i=t.charAt(0),t=parseFloat(t.slice(1)));var a=this.obj[e]();this.assert(s(a,t),o||"expected "+n(this.obj)+" to have a "+e+"  "+i+" "+t,o||"expected "+n(this.obj)+" not to have a "+e+"  "+i+" "+t)}else{var h;this.assert((h=this.obj[e]())===t,o||"expected "+n(this.obj)+" to have a "+e+" of "+t+" but got "+h,o||"expected "+n(this.obj)+" not to have a "+e+" of "+t)}return this}}),s.prototype.value=s.prototype.val=function(t,e){var o;this.assert((o=this.obj.val())===t,e||"expected "+n(this.obj)+" to have value "+t+" but got "+o,e||"expected "+n(this.obj)+" not to have value "+t)},s.prototype.html=function(t,e){var o;this.assert((o=this.obj.html())===t,e||"expected "+n(this.obj)+" to have HTML "+t+" but got "+o,e||"expected "+n(this.obj)+" not to have HTML "+t)},b.each(["children","closest","find","next","nextAll","nextUntil","offsetParent","parent","parents","parentsUntil","prev","prevAll","prevUntil","siblings"],function(t,e){s.prototype[e]=function(t,o){var r=this.obj[e](t);return this.assert(!!r.length,o||"expected "+n(this.obj)+" to have "+e+" "+t,o||"expected "+n(this.obj)+" not to have "+e+" "+t),this.that=this.which=new s(r),this}}),s.prototype.have=s.prototype.find,s.prototype.be=s.prototype.an=s.prototype.a=function(t,e){return this.assert(this.obj.is(t),e||"expected "+n(this.obj)+" to be "+n(t),e||"expected "+n(this.obj)+" not to be "+n(t)),this},s.prototype.matchHtml=function(t,e){return this.assert(t.exec(this.obj.html()),e||"expected "+n(this.obj)+" to match "+t,e||"expected "+n(this.obj)+" not to match "+t),this},s.prototype.match=function(t,e){return this.text(t,e)},s.prototype.any=function(t,e){if(!(t instanceof Function))throw TypeError("The any assertion must be passed an assertion function as its first parameter.");var o=0;return this.obj.each(function(e,r){try{t(r)}catch(n){if(!(n instanceof i))throw n;o++}}),this.assert(o<this.obj.length,e||"expected "+n(this.obj)+" to have at least one element that passed the any assertion",e||"expected "+n(this.obj)+" to have no elements that passed the any assertion"),this},s.prototype.end=function(){return new s(this.obj.end())},p.prototype=new Error,o.DeferredSignal=p,s.prototype.on=function(t,e){var o=this.obj,r=b.Deferred(),s=function(){o.off(t,s);var n=null;try{n=e.apply(this,arguments),r.resolveWith(o,[null,n])}catch(i){r.rejectWith(o,[i,n])}return n};return this.obj.on(t,s),F(r,t,String(n(this.obj)))},o.wait=function(t,e){var o=b.Deferred();return setTimeout(function(){try{e(),o.resolve()}catch(t){o.reject(t)}},t),F(o,"wait",t)},o.async=function(t){var e=b.Deferred(),o=function(t){if(t){var o=new i(String(t));e.reject(o)}else e.resolve()};return setTimeout(function(){try{t(o)}catch(r){e.reject(r)}},0),F(e,"async")},b.each(["blur","change","click","dblclick","error","focus","focusin","focusout","hover","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","resize","select","submit","scroll"],function(t,e){s.prototype[e]=function(t){this.on(e,t)}}),s.prototype["class"]=function(t,e){this.above(0);var o=this;return this.obj.each(function(r,s){o.assert(b(s).hasClass(t),e||"expected "+n(o.obj)+" to have class "+t,e||"expected "+n(o.obj)+" not to have class "+t)}),this},b.each(["visible","hidden","selected","checked","disabled","empty"],function(t,e){s.prototype[e]=function(t){return this.assert(this.obj.is(":"+e),t||"expected "+n(this.obj)+" to be "+e,t||"expected "+n(this.obj)+" not to be "+e),this}})}(this);

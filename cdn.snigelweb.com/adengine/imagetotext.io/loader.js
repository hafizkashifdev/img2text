!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var r=t(1);if(!r.init())throw new Error("Abort!");var a=r.get();try{!function(e,n,r,o,i){var s,c,u=null,l={scripts:[{name:"qchoice",loadModule:function(){return t(3)},firstParty:!0},{name:"adconsent",skipLoadOnExists:!0,loadModule:function(){return t(4)},onLoad:{emitEvent:"adnginLoaderReady",scripts:[{name:"pbjs",obj:{que:[]},queue:"que",path:"?v="+escape(e)},{name:"apstag",obj:{init:function(){this._Q.push(["i",arguments])},fetchBids:function(){this._Q.push(["f",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}},{name:"gpt",obj:{cmd:[]},queue:"cmd"},{name:"adsbygoogle",obj:[]},{name:"adngin",obj:{queue:[],metrics:{timing:{}}},queue:"queue",path:"/"+escape(n)+"/"+escape(e)+"/adngin.js",firstParty:!0},{name:"scripts",argus:{obj:{cmd:[]},queue:"cmd",firstParty:!0}}]},firstParty:!0}]},d=window.performance,f=d.now?function(){return o(d.now())}:function(){return-1},p=function(e,n){var t=function(e){return(d.getEntriesByType?d.getEntriesByType("resource"):[]).find((function(n){return e(n.name)}))||{startTime:-1,responseEnd:-1}}(n),r=h[e]||(h[e]={});r.requested=[o(t.startTime)],r.loaded=[o(t.responseEnd)],r.ready=[f()]},g=function(e,n,t,r){var o=a.resources||(a.resources={}),i=document.createElement("script");i.type="text/javascript",i.async=!0,i.onload=function(){p(n,(function(e){return e.toLowerCase().indexOf(t.toLowerCase())>=0})),o[n].loaded=!0,r&&r()},h[n]||(h[n]={}),h[n].queued=[f()],o[n]={scriptElement:i,loaded:!1},i.src=t,document.head.appendChild(i)},v=function(e,n,t){e.scripts.forEach((function(e){var a=r[e.name]||{};!i(a)&&a.load&&n(a.objName,e),e.onLoad&&e.onLoad.scripts&&t(e.onLoad)}))},m=function(e,n){var t=n.obj;if(t)if(window[e]){var r=window[e];for(var a in t)r[a]=r[a]||t[a]}else window[e]=t},b=function(e,n){var t=n.queue;t&&window[e][t].push((function(){var t;(h[t=n.name||e]||(h[t]={})).apiReady=[f()]}))};((s=window).adsbygoogle||(s.adsbygoogle=[])).pauseAdRequests=1,(c=window).snigelPubConf||(c.snigelPubConf={}),function e(n){return v(n,m,e)}(l);var y=window[r.adngin.objName],h=y.metrics.timing;p("loader",(function(e){return/.*snigel.*loader.js$/i.test(e)})),function e(n){return v(n,b,e)}(l),u=a.settings&&a.settings.adconsent&&a.settings.adconsent.consentWall?function(e,n,t,r){var o=a.settings.adconsent.objName||"adconsent";window[o]&&!e.firstParty?window[o]("isConsentWallUser",null,(function(a){a.hasSubscription||g(e,n,t,r)})):g(e,n,t,r)}:g,function e(n){if(!n)return!1;n.emitEvent&&(window.dispatchEvent(new CustomEvent(n.emitEvent)),y[n.emitEvent]=!0,h.loader[n.emitEvent]=[f()]),n.scripts&&n.scripts.forEach((function(n){var t=r[n.name]||{},a=function(){var e=!!window[t.objName];return t.load&&(!e||e&&!n.skipLoadOnExists)};i(t)?t.forEach((function(e){if(void 0===e.freq||o(100*Math.random())<e.freq){var t=e.name,r=n[t]||{};m(t,r),b(t,r),u(r,e.name||e.url,e.url)}})):(a()&&n.loadModule&&n.loadModule(),a()&&t.url?function(e,n){var t=r[e.name].queryParameters,a=r[e.name].url+(e.path||"")+(t?"?"+t:"");u(e,e.name,a,n)}(n,(function(){return e(n.onLoad)})):e(n.onLoad))}))}(l)}(a.version,a.site,a.settings,Math.floor,Array.isArray)}catch(e){if(!0===a.passThroughException)throw e;console.error(e)}},function(e,n,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw a}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i=t(2),s=function(e,n){console.warn("Override detected: '"+n);var t=function(){var n=document.getElementById("sn-session-override-warnings");n||((n=document.createElement("div")).id="sn-session-override-warnings",n.setAttribute("style","background: darkred; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000000; padding: 0.25em; color: white; font-family: monospace; font-size: small;"),n.innerHTML="(!) Session overrides:",n.addEventListener("mouseover",(function(){return n.style.opacity="0.20"})),n.addEventListener("mouseout",(function(){return n.style.opacity="1"})),document.body.appendChild(n)),n.innerHTML+=e},r=document.readyState;"interactive"===r||"complete"===r?t():document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()}),!1)};e.exports={init:function(){try{var e,n=(e=window)._snigelConfig||(e._snigelConfig={}),t=window.localStorage,o=JSON.parse(window.sessionStorage.getItem("snSessionOverrides")),c=o&&o.loaderUrl&&o.loaderUrl===document.currentScript.src;if(!c||o.loaderSettingsOverride){for(var u in i)"exp"!=u&&(n[u]=i[u]);if(i.exp){var l,d,f=a((t.getItem("_sn_exp")||"").split(";"),2);l=f[0],d=f[1],l!=i.cfgVer&&(l=i.cfgVer,d=void 0),i.exp.some((function(e){if(d==e.id||null==d&&Math.random()<e.freq){var t="exp="+(d=e.id),r=e.settings.adngin.queryParameters;return e.settings.adngin.queryParameters=r?r+"&"+t:t,n.settings=e.settings,!0}return!1}))||(d=0),t.setItem("_sn_exp",l+";"+d)}else t.removeItem("_sn_exp")}if(o){var p=o.loaderUrl;if(p&&!c){s(" (Loader overriden) ","Loader'.");var g=document.createElement("script");return g.src=p,g.async=!0,document.head.appendChild(g),!1}var v=o.products,m=o.adEngineCoreConfig;v&&"object"===r(v)&&!Array.isArray(v)&&Object.entries(v).forEach((function(e){var t=a(e,2),r=t[0],o=t[1],i=n.settings[r],c=o.message||"";i.url=o.url,i.queryParameters=o.queryParameters,s(" ("+r+", "+c+")",r+"': "+c)})),m&&(n.adEngineCoreConfigOverride=m,s(" (AdEngine coreConfig overriden) ","AdEngine coreConfig'."))}}catch(e){}return!0},get:function(){return window._snigelConfig||{}}}},function(e){e.exports=JSON.parse('{"site":"imagetotext.io","version":"10953-1720106540495","cfgVer":13073,"settings":{"adconsent":{"load":true,"objName":"adconsent","url":"//cdn.snigelweb.com/adconsent/adconsent.js","consentWall":false},"pbjs":{"load":true,"objName":"pbjs","url":"//cdn.snigelweb.com/prebid/8.26.0/prebid.js"},"gpt":{"load":true,"objName":"googletag","url":"//securepubads.g.doubleclick.net/tag/js/gpt.js"},"adngin":{"load":true,"objName":"adngin","url":"//adengine.snigelweb.com"},"apstag":{"load":true,"objName":"apstag","url":"//c.amazon-adsystem.com/aax2/apstag.js"},"scripts":[{"url":"//cdn.snigelweb.com/argus/argus.js","freq":100,"name":"argus"},{"url":"//boot.pbstck.com/v1/tag/857cb288-ad50-43e9-94d1-4b165388fd98","freq":10,"name":"pubstack"},{"url":"//cdnx.snigelweb.com/315b44bc-10e5-45a8-8f58-064d6e7317c0.js","freq":100,"name":"pubx"}],"adsbygoogle":{"load":true,"objName":"adsbygoogle","url":"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}}')},function(e,n){},function(e,n,t){"use strict";!function(e,n,t,r,a,o,i,s){var c=e._snigelConfig;if(c)try{t=c.settings.adconsent.objName}catch(e){}var u=void 0,l=229,d="__"+t,f="stub",p="loaded",g="pwuserstatus",v=void 0,m={tcfeuv2:{z:1,v:2,sid:2,api:a,f:a,s:"getTCData",c:"euconsent-v2",n:"GDPR"},uspv1:{z:2,v:1,sid:6,api:i,f:i,s:"getUSPData",c:"usprivacy",n:"CCPA"},tcfcav1:{z:3,v:2,sid:5,api:t+".pipeda",f:"__tcfca",s:"getTCData",c:"caconsent",n:"PIPEDA"},usnat:{z:4,v:1,sid:7,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usconsent",n:"USNATIONAL"},usca:{z:5,v:1,sid:8,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscaconsent",n:"US-CALIFORNIA"},usco:{z:6,v:1,sid:10,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscoconsent",n:"US-COLORADO"},usct:{z:7,v:1,sid:12,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usctconsent",n:"US-CONNECTICUT"},usva:{z:8,v:1,sid:9,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usvaconsent",n:"US-VIRGINIA"},usut:{z:9,v:1,sid:11,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usutconsent",n:"US-UTAH"}},b=[1,2],y={gppVersion:"1.1",supportedAPIs:Object.keys(m).map((function(e){return m[e].sid+":"+e})),cmpStatus:f,cmpDisplayStatus:"disabled",cmpId:l};function h(e){return"function"==typeof e}function C(e){return"string"==typeof e}try{s=localStorage}catch(e){}var S,w,E=e.performance,I=E&&E.now?function(){return Math.floor(E.now())}:function(){return 0};function L(e){if(window.argus){var n=1===e.length&&e[0]instanceof Error?{stack:e[0].stack}:{log:e,stack:(new Error).stack};window.argus.cmd.push((function(){window.argus.queueError("adconsent",n)}))}}!function(){if(h(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:u};var r=n.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{var _=function(n,t,r,a){e.console[n]&&Q.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(r,n.toUpperCase()+":",a))},A=function(n){return n===r?function(t,r,a){e[n](t,a,r,u)}:function(t,r,a){e[n](t,u,a,r)}},j=function(e,n,t){return!n||n===e.version||(N(t,null,!1),$("Wrong framework version detected: "+n),!1)},P=function(e,n,t){var r=ne.applies?u:ne.applies,a={tcString:u,tcfPolicyVersion:4,cmpId:l,cmpVersion:84,gdprApplies:r,eventStatus:!1===r?"tcloaded":u,cmpStatus:ne.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:H.publisherCC,purposeOneTreatment:!1};return $("Sending TCData structure:",a,t),N(t,a,!0),a},O=function(e,n,t,r,a){e.queue.push({command:n,version:t,parameter:a,callback:r})},U=function(n){for(var t=Array.isArray(n)?n:(n||"").split("."),r=t.length>1,a=t.length-1,o=t[a],i=e,s=0;s<a&&(i=i[t[s]]);s++);return{r:i,e:o,apiParts:t,api:i?i[o]:u,internal:r}},x=function(t,a){var o=function(n){var a=n.data,o=C(a);try{var i=(o?JSON.parse(a):a)[t+"Call"];if(i){var s=function(e,r){try{if(n&&n.source&&n.source.postMessage){var a={};a[t+"Return"]={returnValue:e,success:r===u||r,callId:i.callId},n.source.postMessage(o?JSON.stringify(a):a,"*")}}catch(e){}};t===r?e[t](i.command,s,i.parameter,i.version):e[t](i.command,i.version,s,i.parameter)}}catch(e){}},i=U(t);if(!i.internal){!function t(r){if(!e.frames[r]){var a=n.body;if(a){var o=n.createElement("iframe");o.style.display="none",o.name=r,a.appendChild(o)}else setTimeout(t,5,r)}}(t+"Locator")}i.r&&!h(i.api)&&(i.r[i.e]=function(e,n,o,s){var c=U(i.apiParts).api;if(!c.queue)return c(e,n,o,s);var l=!1;for(var d in a)if(e===d)return l=!0,(0,a[d])(c,e,n,o,s);if(!l)if(t===r){var f=(e||"none").split("."),p=2===f.length?m[f[0]]:u;if(p){var g=U(p.api);g.internal?g.api(f[1],o,n):g.api(f[1],p.v,n,o)}else X("Unknown "+t+"() API call '"+e+"'")}else i.internal?O(c,e,s,o,n):O(c,e,n,o,s)},i.r[i.e].queue=[],i.internal||(e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o)))},N=function(e,n,t){h(e)&&setTimeout((function(){e(n,t)}),0)},D=function(e){if(s){var n="_sn_"+e;try{var t=s.getItem(n).split("~");if(2===t.length&&parseInt(t[0])>=Date.now())return t[1];s.removeItem(n)}catch(e){s.removeItem(n)}}},k=function(e,n){return e&&3!==e||3!==n?e||n?e&&1!==e||1!==n?2:1:0:3},q=function(n,t,r,a,o){if(r||K("setConsentRegion is deprecated and should be only used in debug mode."),Y.region===u)if(Z[o]){for(var s in m){var c=ee[s];c.applies=c.region==o,c.applies?y.currentAPI=s:(c.loaded=!0,c.status=p)}var l;Y.region=o,y.applicableSections=[y.currentAPI?m[y.currentAPI].sid:-1],F("Configured consent region "+Z[o]),l=function(n){var t=e[n],r=t.queue;if(r){t.queue=[];for(var a=0;a<r.length;a++){var o=r[a];t(o.command,o.version,o.callback,o.parameter)}}},Y.region!==m.tcfeuv2.z&&J.processListeners(P),Y.region!==m.uspv1.z&&l(i),0===Y.region&&l(d)}else X("Incorrect consent region "+o)},T=function(e){N(e,{hasSubscription:!1},!0)},z=function(e){N(e,{consentWallEnabled:!1},!0)},M=function(e,n){for(var t in B.eventListeners)"id"!==t&&N(B.eventListeners[t],G(e,t,n))},V=function(e,n,t){var r=JSON.parse(JSON.stringify(y));return N(t,r,!0),r},R=function(e,n,t,a){var o=C(a)&&m[a];if(o){var i=U(o.api);return i.internal?i.api(o.s,u,t):i.api(o.s,o.v,t)}return function(e,n,t){var a=r+"() API call '"+e+"': "+t;return X(a),N(n,{message:a},!1),null}(n,t,"Unknown section '"+a+"'.")},G=function(e,n,t){return{eventName:e,listenerId:Number.parseInt(n),data:t,pingData:V()}},W=A(d);W.utils={},W.functions={},W.constants={},W.constants.pwUserStatusStorageName=g,W.gdpr=A(a);var J=W.gdpr;J.listenerId=1,J.tcfListeners=[],J.addEventListener=function(e,n,t){if(j(ne,e,n)){$("Adding event listener "+J.listenerId,n);var r={id:J.listenerId++,callback:n||function(){}};J.tcfListeners.push(r),t(null,r.id,r.callback)}},J.removeEventListener=function(e,n,t,r,a){if(j(ne,t,r)){$("Removing event listener "+a);for(var o=0;o<J.tcfListeners.length;o++)if(J.tcfListeners[o].id==a)return J.tcfListeners.splice(o,1),void N(r,!0);K("Couldn't find listener id "+a+"."),N(r,!1)}},J.getTCData=function(e,n,t,r){if(j(ne,t,r))return P(0,0,r)},J.processListeners=function(e){for(var n=J.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},W.ccpa=A(i),W.gpp=A(r);var B=W.gpp;B.eventListeners={id:0},B.fibonacciEncode=function(e){var n=function e(n,t){if(t=t||[],!n)return t;for(var r=0;n>=b[r];)++r>=b.length&&b.push(b[r-1]+b[r-2]);return t.push(r),e(n-b[r-1],t)}(e),t="";if(n.length){var r,a=0,o=n[0],i=n[a];t="1";for(var s=o;s>0;s--)r="0",s===i&&(r="1",++a<n.length&&(i=n[a])),t=r+t}return t},B.fibonacciDecode=function(e){var n=0;if(e.length>1)for(var t=0;t<e.length-1;t++)t>=b.length&&b.push(b[t-1]+b[t-2]),"1"===e.charAt(t)&&(n+=b[t]);return n},W.version=84,W.cmpId=l,W.cfg=c&&c.adConsentConfigOverrides?c.adConsentConfigOverrides:{apiBaseUrl:"https://cdn.snigelweb.com/adconsent/84",publisherCC:"US",storage:0};var H=W.cfg;W.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){L(arguments),_("error",1,arguments,"#ff0000")},warn:function(){_("warn",2,arguments,"#ffe600")},info:function(){_("info",3,arguments,"#3b88a3")},debug:function(){_("debug",4,arguments,"#808080")}};var Q=W.log,$=Q.debug,F=Q.info,K=Q.warn,X=Q.error;W.consent=function(){var e={regions:{0:"NONE"},region:u,api:{}};for(var n in m){var t=m[n];e.regions[t.z]=t.n,e.api[n]={region:t.z,loaded:!1,applies:u,version:t.v,status:f}}return e}();var Y=W.consent,Z=Y.regions,ee=Y.api,ne=ee.tcfeuv2,te=ee.uspv1;W.analytics={enabled:!1,callback:u,send:function(e){re.sendEvent(Z[Y.region],e,I())},sendEvent:function(n,t,r){F("Sending analytics event action"+(re.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+r),re.enabled&&(re.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):K("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:r||0,nonInteraction:!0})}};var re=W.analytics,ae=re.send;W.event={fired:{},dispatchCustomEvent:function(e,t,r){r&&ie[e]||(ie[e]=!0,$("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};ae(t[n]),Y.region!=m.tcfeuv2.z&&Y.region!=m.tcfcav1.z||0==e||ae("Publisher"+t[e]);var r=k(e,n);v=3==r,oe.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,globalConsent:r,gdprApplies:ne.applies,uspApplies:te.applies,currentAPI:y.currentAPI}}})}};var oe=W.event,ie=oe.fired,se=(w=e.location.search)?w.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),r=t[0],a=t.length>1?t[1]:u;return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(a)):e[r]=a||"",e}),{}):{},ce=("true"==se.sn_debug?"debug":null)||("true"==se.adconsent_debug?"debug":null)||se.adconsent_log;if(Q.level=Q.levels[ce]||Q.level,e[t])return void X("Stub is tried to load again!");if(e[a]||e[i]||e[r])return void K("A cmp is already registered in the system. AdConsent is stopping.");e[t]=W,W.utils.getStorageItem=D,W.resolveGlobalConsent=k;var ue=!1;W.functions.isConsentWallUser=T,W.functions.isConsentWallEnabled=z;var le=function(e,t,r,a){var o=function(){return N(a,{fullConsent:v,region:y.currentAPI},!0)};void 0===v?n.addEventListener("cmpConsentAvailable",(function e(){n.removeEventListener("cmpConsentAvailable",e),o()})):o()};W.functions.getConsent=le,x(a,{ping:function(e,n,t,r){N(r,{gdprApplies:ne.applies,cmpLoaded:ne.loaded,cmpStatus:ne.status,displayStatus:"disabled",apiVersion:"2.0",cmpVersion:84,cmpId:l,gvlVersion:u,tcfPolicyVersion:4},!0)},getTCData:J.getTCData,addEventListener:function(e,n,t,r,a){J.addEventListener(t,r,P)},removeEventListener:J.removeEventListener}),x(i,{getUSPData:function(e,n,t,r,a){if(!1===te.applies){if(j(te,t,r)){var o={version:m.uspv1.v,uspString:m.uspv1.v+"---"};return N(r,o,!0),o}}else O(e,n,t,r,a)}}),S=function(t){var r=!0,a=y.cmpStatus;y.cmpStatus=p;var o=y.cmpDisplayStatus,i=t.type;if("cmpGUIShow"===i?(y.cmpDisplayStatus="visible",y.signalStatus="not ready",M("signalStatus","not ready"),r=!1):"cmpGUISubmit"===i&&(y.cmpDisplayStatus="hidden",M("sectionChange",y.currentAPI)),o!==y.cmpDisplayStatus?M("cmpDisplayStatus",y.cmpDisplayStatus):a!==p?M("cmpStatus",p):r=!1,r){var c=function(t){var r={sectionId:3,gppVersion:1,parsedSections:{}},a=function(e,n,t){var r=C(e)?e:Number(e).toString(2);if(n)for(var a=(n-r.length%n)%n,o=0;o<a;o++)t?r+="0":r="0"+r;return r},o={},i=[];for(var c in m){var u=m[c];if(u&&u.c){var l="_sn_"+u.c,d=(s&&s.getItem(l)||"").split("~");if(d&&2===d.length)try{parseInt(d[0])>=(new Date).getTime()?(o[u.sid]=d[1],i.push(u.sid)):s.removeItem(l)}catch(e){}else{var f=("; "+n.cookie).split("; "+u.c+"=");f.length>=2&&(o[u.sid]=f[f.length-1].split(";").shift(),i.push(u.sid))}r.parsedSections[c]=R(0,null,null,c)}}var p="",g="";p+=a(r.sectionId,6),p+=a(r.gppVersion,6),p+=a(i.length,12);var v=0;return r.sectionList=i.sort((function(e,n){return e-n})),r.sectionList.forEach((function(e){p+=a(0,1);var n=e-v;p+=B.fibonacciEncode(n),g+="~"+o[e],v=e})),p=a(p,6,!0),r.gppString=function(n){for(var t=a(n,8,!0),r="",o=0;o<t.length;o+=8)r+=String.fromCharCode(parseInt(t.substr(o,8),2));return e.btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}(p)+g,r}();y.signalStatus="ready",y.sectionList=c.sectionList,y.gppString=c.gppString,y.parsedSections=c.parsedSections,M("signalStatus","ready")}},n.addEventListener("cmpGUIShow",S),n.addEventListener("cmpGUISubmit",S),n.addEventListener("cmpConsentAvailable",S),x(m.tcfcav1.api,{}),x(m.usnat.api,{}),x(d,{start:function t(r,a,o,i,c){if(Y.region!==u){if(!ue)if(ue=!0,0==Y.region)oe.dispatchCustomEventConsent(3,3);else if(y.currentAPI){var l=n.createElement("script");l.type="text/javascript",l.async=!0,l.charset="utf-8",l.src=W.cfg.apiBaseUrl+"/adconsent"+m[y.currentAPI].f+".js",n.head.appendChild(l)}}else!function(n,t){if((!n||!n.country)&&(n=null,s)){var r=s.getItem("snconsent_geo");if(r){var a=s.getItem("snconsent_geo_exp");if(a)try{parseInt(a)>=(new Date).getTime()&&(n=JSON.parse(e.atob(r)))}catch(e){}}}if(n)t(n);else{var o=new XMLHttpRequest;o.open("GET","https://pro.ip-api.com/json/?fields=24582&key=33arzTfj1gigDqW"),o.timeout=5e3,o.onload=function(){var n=o.responseText.toLowerCase(),r=JSON.parse(n);r={country:r.countrycode,region:r.region},s&&(s.setItem("snconsent_geo",e.btoa(JSON.stringify(r))),s.setItem("snconsent_geo_exp",(new Date).getTime()+36e5)),t(r)},o.onerror=o.ontimeout=function(){t(null)},o.send()}}(c,(function(e){if(e&&(H.country=e.country?e.country.toLowerCase():null,H.region=(e.region||"").toLowerCase()),D(g))q(0,0,1,0,m.tcfeuv2.z);else if("us"===H.country)switch(H.region){case"ca":q(0,0,1,0,m.uspv1.z);break;default:q(0,0,1,0,0)}else-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb ch".indexOf(H.country)?q(0,0,1,0,m.tcfeuv2.z):(H.country||(ae("ErrorGeotargeting"),X("Geotargeting failed")),q(0,0,1,0,0));t()}))},setStorageType:function(e,n,t,r,a){0!==a&&1!==a?N(r,{message:"Invalid storage type: should be 0 (cookie) or 1 (local storage)."},!1):1!==a||s?(H.storage=a,N(r,null,!0)):N(r,{message:"Storage type 'localStorage' was selected, but local storage is not available. Reverting to cookie storage."},!1)},setPublisherCC:function(e,n,t,r,a){C(a)&&2==a.length?(H.publisherCC=a.toUpperCase(),N(r,null,!0)):N(r,{message:"Invalid publisher country code detected. Ignoring call."},!1)},setConsentRegion:q,enableGoogleAnalytics:function(e,n,t,r,a){re.enabled=a===u||!!a,re.callback=r},isConsentWallUser:function(e,n,t,r){0===Y.region?T(r):O(e,n,t,r,null)},isConsentWallEnabled:function(e,n,t,r){0===Y.region?z(r):O(e,n,t,r,null)},getConsent:le});var de=t+"Ready";e.dispatchEvent(new CustomEvent(de)),e.dataLayer||(e.dataLayer=[]),e.dataLayer.push({event:de})}catch(e){if(L(e),c&&c.passThroughException)throw e;console.error(e)}}(window,document,"adconsent","__gpp","__tcfapi",0,"__uspapi")}]);
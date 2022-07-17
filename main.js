"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var c={$http,$info,$log,$data,$file,getOption:u=>$option[u]},I=Object.defineProperty,_=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,y=(u,t,r)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r,U=(u,t)=>{for(var r in t||(t={}))q.call(t,r)&&y(u,r,t[r]);if(_)for(var r of _(t))R.call(t,r)&&y(u,r,t[r]);return u},K=(u,t,r)=>new Promise((e,i)=>{var l=D=>{try{o(r.next(D))}catch(F){i(F)}},B=D=>{try{o(r.throw(D))}catch(F){i(F)}},o=D=>D.done?e(D.value):Promise.resolve(D.value).then(l,B);o((r=r.apply(u,t)).next())});function V(u="unknown",t="\u63D2\u4EF6\u51FA\u9519",r={}){return{type:u,message:t,addtion:JSON.stringify(r)}}var d=u=>Array.isArray(u),Q=(u,t=0)=>d(u)&&u.length>t,h=u=>typeof u=="string",v=u=>!!u&&typeof u=="object"&&u.constructor===Object,W=u=>u==null;function w(u){if(!v)return u;const t=U({},u);return Object.keys(t).forEach(r=>t[r]=typeof u[r]=="object"?w(u[r]):u[r]),Array.isArray(u)?(t.length=u.length)&&Array.from(t):t}function X(u){return Reflect.toString.call(u).slice(8,-1).toLowerCase()}function Y(u,t){return K(this,null,function*(){try{const r=yield u;return[null,r]}catch(r){let e=r;return t&&Object.assign(e,t),[e,void 0]}})}var C={error:V,isString:h,isArray:d,isNil:W,isArrayAndLenGt:Q,isPlainObject:v,deepClone:w,getType:X,asyncTo:Y};class Z{constructor(t="bobplug-cache"){this._cacheFilePath="",this._store={},this._cacheFilePath=`$sandbox/cache/${t}.json`,this._read()}_write(){const t=JSON.stringify(this._store);c.$file.write({data:c.$data.fromUTF8(t),path:this._cacheFilePath})}_read(){var t=c.$file.exists(this._cacheFilePath);if(t){var r=c.$file.read(this._cacheFilePath);this._store=JSON.parse(r.toUTF8())}else this._store={},this._write()}set(t,r){!h(t)||(this._store[t]=r,this._write())}get(t){return h(t)?this._store[t]:null}getAll(){return this._store}remove(t){!h(t)||(delete this._store[t],this._write())}clear(){this._store={},this._write()}}var n=Object.defineProperty,O=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,P=(u,t,r)=>t in u?n(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r,L=(u,t)=>{for(var r in t||(t={}))a.call(t,r)&&P(u,r,t[r]);if(O)for(var r of O(t))m.call(t,r)&&P(u,r,t[r]);return u},b=require("crypto-js");class g{constructor(t){this._resultCacheStore=new Z(t||"result-cache");let r=this._resultCacheStore.get("result")||{};C.isPlainObject(r)||(r={}),this._result=r}_save(){this._resultCacheStore.set("result",L({},this._result))}get(t){if(!C.isString(t))return null;const r=b.MD5(t).toString(),e=this._result[r];if(!C.isPlainObject(e))return null;const{time:i,data:l}=e,B=1e3*60*60*24*7;return Date.now()-B>i?(delete this._result[r],this._save(),null):l}set(t,r){if(!C.isString(t)&&!C.isPlainObject(r)&&!C.isArrayAndLenGt(r.toParagraphs,0))return;const e=b.MD5(t).toString(),i={time:Date.now(),data:r};this._result[e]=i,this._save()}clear(){this._resultCacheStore.clear()}}var S;(function(u){u.auto="\u81EA\u52A8",u["zh-Hans"]="\u4E2D\u6587\u7B80\u4F53",u["zh-Hant"]="\u4E2D\u6587\u7E41\u4F53",u.yue="\u7CA4\u8BED",u.wyw="\u6587\u8A00\u6587",u.pysx="\u62FC\u97F3\u7F29\u5199",u.en="\u82F1\u8BED",u.ja="\u65E5\u8BED",u.ko="\u97E9\u8BED",u.fr="\u6CD5\u8BED",u.de="\u5FB7\u8BED",u.es="\u897F\u73ED\u7259\u8BED",u.it="\u610F\u5927\u5229\u8BED",u.ru="\u4FC4\u8BED",u.pt="\u8461\u8404\u7259\u8BED",u.nl="\u8377\u5170\u8BED",u.pl="\u6CE2\u5170\u8BED",u.ar="\u963F\u62C9\u4F2F\u8BED",u.af="\u5357\u975E\u8BED",u.am="\u963F\u59C6\u54C8\u62C9\u8BED",u.az="\u963F\u585E\u62DC\u7586\u8BED",u.be="\u767D\u4FC4\u7F57\u65AF\u8BED",u.bg="\u4FDD\u52A0\u5229\u4E9A\u8BED",u.bn="\u5B5F\u52A0\u62C9\u8BED",u.bo="\u85CF\u8BED",u.bs="\u6CE2\u65AF\u5C3C\u4E9A\u8BED",u.ca="\u52A0\u6CF0\u9686\u8BED",u.ceb="\u5BBF\u52A1\u8BED",u.chr="\u5207\u7F57\u57FA\u8BED",u.co="\u79D1\u897F\u5609\u8BED",u.cs="\u6377\u514B\u8BED",u.cy="\u5A01\u5C14\u58EB\u8BED",u.da="\u4E39\u9EA6\u8BED",u.el="\u5E0C\u814A\u8BED",u.eo="\u4E16\u754C\u8BED",u.et="\u7231\u6C99\u5C3C\u4E9A\u8BED",u.eu="\u5DF4\u65AF\u514B\u8BED",u.fa="\u6CE2\u65AF\u8BED",u.fi="\u82AC\u5170\u8BED",u.fj="\u6590\u6D4E\u8BED",u.fy="\u5F17\u91CC\u897F\u8BED",u.ga="\u7231\u5C14\u5170\u8BED",u.gd="\u82CF\u683C\u5170\u76D6\u5C14\u8BED",u.gl="\u52A0\u5229\u897F\u4E9A\u8BED",u.gu="\u53E4\u5409\u62C9\u7279\u8BED",u.ha="\u8C6A\u8428\u8BED",u.haw="\u590F\u5A01\u5937\u8BED",u.he="\u5E0C\u4F2F\u6765\u8BED",u.hi="\u5370\u5730\u8BED",u.hmn="\u82D7\u8BED",u.hr="\u514B\u7F57\u5730\u4E9A\u8BED",u.ht="\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED",u.hu="\u5308\u7259\u5229\u8BED",u.hy="\u4E9A\u7F8E\u5C3C\u4E9A\u8BED",u.id="\u5370\u5C3C\u8BED",u.ig="\u4F0A\u535A\u8BED",u.is="\u51B0\u5C9B\u8BED",u.jw="\u722A\u54C7\u8BED",u.ka="\u683C\u9C81\u5409\u4E9A\u8BED",u.kk="\u54C8\u8428\u514B\u8BED",u.km="\u9AD8\u68C9\u8BED",u.kn="\u5361\u7EB3\u8FBE\u8BED",u.ku="\u5E93\u5C14\u5FB7\u8BED",u.ky="\u67EF\u5C14\u514B\u5B5C\u8BED",u.la="\u8001\u631D\u8BED",u.lb="\u5362\u68EE\u5821\u8BED",u.lo="\u8001\u631D\u8BED",u.lt="\u7ACB\u9676\u5B9B\u8BED",u.lv="\u62C9\u8131\u7EF4\u4E9A\u8BED",u.mg="\u9A6C\u5C14\u52A0\u4EC0\u8BED",u.mi="\u6BDB\u5229\u8BED",u.mk="\u9A6C\u5176\u987F\u8BED",u.ml="\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED",u.mn="\u8499\u53E4\u8BED",u.mr="\u9A6C\u62C9\u5730\u8BED",u.ms="\u9A6C\u6765\u8BED",u.mt="\u9A6C\u8033\u4ED6\u8BED",u.mww="\u767D\u82D7\u8BED",u.my="\u7F05\u7538\u8BED",u.ne="\u5C3C\u6CCA\u5C14\u8BED",u.no="\u632A\u5A01\u8BED",u.ny="\u9F50\u5207\u74E6\u8BED",u.or="\u5965\u91CC\u4E9A\u8BED",u.otq="\u514B\u96F7\u5854\u7F57\u5965\u6258\u7C73\u8BED",u.pa="\u65C1\u906E\u666E\u8BED",u.ps="\u666E\u4EC0\u56FE\u8BED",u.ro="\u7F57\u9A6C\u5C3C\u4E9A\u8BED",u.rw="\u5362\u65FA\u8FBE\u8BED",u.sd="\u4FE1\u5FB7\u8BED",u.si="\u50E7\u4F3D\u7F57\u8BED",u.sk="\u65AF\u6D1B\u4F10\u514B\u8BED",u.sl="\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED",u.sm="\u8428\u6469\u4E9A\u8BED",u.sn="\u4FEE\u7EB3\u8BED",u.so="\u7D22\u9A6C\u91CC\u8BED",u.sq="\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED",u.sr="\u585E\u5C14\u7EF4\u4E9A\u8BED",u["sr-Cyrl"]="\u585E\u5C14\u7EF4\u4E9A\u8BED-\u897F\u91CC\u5C14\u6587",u["sr-Latn"]="\u585E\u5C14\u7EF4\u4E9A\u8BED-\u62C9\u4E01\u6587",u.st="\u585E\u7D22\u6258\u8BED",u.su="\u5DFD\u4ED6\u8BED",u.sv="\u745E\u5178\u8BED",u.sw="\u65AF\u74E6\u5E0C\u91CC\u8BED",u.ta="\u6CF0\u7C73\u5C14\u8BED",u.te="\u6CF0\u5362\u56FA\u8BED",u.tg="\u5854\u5409\u514B\u8BED",u.th="\u6CF0\u8BED",u.tk="\u571F\u5E93\u66FC\u8BED",u.tl="\u83F2\u5F8B\u5BBE\u8BED",u.tlh="\u514B\u6797\u8D21\u8BED",u.to="\u6C64\u52A0\u8BED",u.tr="\u571F\u8033\u5176\u8BED",u.tt="\u9791\u977C\u8BED",u.ty="\u5854\u5E0C\u63D0\u8BED",u.ug="\u7EF4\u543E\u5C14\u8BED",u.uk="\u4E4C\u514B\u5170\u8BED",u.ur="\u4E4C\u5C14\u90FD\u8BED",u.uz="\u4E4C\u5179\u522B\u514B\u8BED",u.vi="\u8D8A\u5357\u8BED",u.xh="\u79D1\u8428\u8BED",u.yi="\u610F\u7B2C\u7EEA\u8BED",u.yo="\u7EA6\u9C81\u5DF4\u8BED",u.yua="\u5C24\u5361\u5766\u739B\u96C5\u8BED",u.zu="\u7956\u9C81\u8BED"})(S||(S={}));var $;(function(u){u.unknown="\u672A\u77E5\u9519\u8BEF",u.param="\u53C2\u6570\u9519\u8BEF",u.unsupportLanguage="\u4E0D\u652F\u6301\u7684\u8BED\u79CD",u.secretKey="\u7F3A\u5C11\u79D8\u94A5",u.network="\u7F51\u7EDC\u5F02\u5E38\uFF0C\u7F51\u7EDC\u8BF7\u5931\u8D25",u.api="\u670D\u52A1\u63A5\u53E3\u5F02\u5E38"})($||($={}));var E=[["auto","auto"],["zh-Hans","zh-Hans"],["zh-Hant","zh-Hant"],["en","en"],["ja","ja"],["fr","fr"],["ko","ko"],["de","de"],["es","es"],["it","it"],["ru","ru"],["pt","pt"]],uu=new Map(E);new Map(E.map(u=>{var[t,r]=u;return[r,t]}));function j(u){return uu.get(u)||"auto"}function tu(){return E.map(u=>{var[t]=u;return t})}function T(u,t,r,e,i,l,B){try{var o=u[l](B),D=o.value}catch(F){r(F);return}o.done?t(D):Promise.resolve(D).then(e,i)}function ru(u){return function(){var t=this,r=arguments;return new Promise(function(e,i){var l=u.apply(t,r);function B(D){T(l,e,i,B,o,"next",D)}function o(D){T(l,e,i,B,o,"throw",D)}B(void 0)})}}var f=new g("translate-result");function eu(u,t){return s.apply(this,arguments)}function s(){return s=ru(function*(u,t){var{from:r,to:e,cache:i="enable"}=t,l="".concat(u).concat(r).concat(e);if(i==="enable"){var B=f.get(l);if(B)return B}else f.clear();var o={from:r,to:e,toParagraphs:[]},D=c.getOption("endpoint"),F="/translate?api-version=3.0",x="&from="+j(r),z="&to="+j(e),k=D+F+x+z,N=c.getOption("key"),H=c.getOption("location"),J={"Content-Type":"application/json","Ocp-Apim-Subscription-Key":N,"Ocp-Apim-Subscription-Region":H},[A,p]=yield C.asyncTo(c.$http.post({url:k,header:J,body:[{text:u}]}));if(A)throw C.error("network","\u63A5\u53E3\u7F51\u7EDC\u9519\u8BEF",A);var M=p==null?void 0:p.data;c.$log.info(JSON.stringify(p));try{o.toParagraphs=[M[0].translations[0].text]}catch(G){throw C.error("api","\u6570\u636E\u89E3\u6790\u9519\u8BEF",G)}return i==="enable"&&f.set(l,o),o}),s.apply(this,arguments)}function ou(){return tu()}function iu(u,t){var{text:r="",detectFrom:e,detectTo:i}=u,l={from:e,to:i,cache:c.getOption("cache")},B=eu(r,l);B.then(o=>t({result:o})).catch(o=>{if(c.$log.error(JSON.stringify(o)),o!=null&&o.type)return t({error:o});t({error:C.error("api","\u63D2\u4EF6\u51FA\u9519",o)})})}exports.supportLanguages=ou,exports.translate=iu;

"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[722],{52:(e,t,r)=>{function n(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}r.d(t,{HY:()=>l,Qd:()=>a,Tw:()=>f,Zz:()=>s,ve:()=>p,y$:()=>c});var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=()=>Math.random().toString(36).substring(7).split("").join("."),u={INIT:`@@redux/INIT${i()}`,REPLACE:`@@redux/REPLACE${i()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${i()}`};function a(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function c(e,t,r){if("function"!=typeof e)throw Error(n(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw Error(n(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw Error(n(1));return r(c)(e,t)}let i=e,l=t,s=new Map,f=s,p=0,d=!1;function y(){f===s&&(f=new Map,s.forEach((e,t)=>{f.set(t,e)}))}function h(){if(d)throw Error(n(3));return l}function _(e){if("function"!=typeof e)throw Error(n(4));if(d)throw Error(n(5));let t=!0;y();let r=p++;return f.set(r,e),function(){if(t){if(d)throw Error(n(6));t=!1,y(),f.delete(r),s=null}}}function b(e){if(!a(e))throw Error(n(7));if(void 0===e.type)throw Error(n(8));if("string"!=typeof e.type)throw Error(n(17));if(d)throw Error(n(9));try{d=!0,l=i(l,e)}finally{d=!1}return(s=f).forEach(e=>{e()}),e}return b({type:u.INIT}),{dispatch:b,subscribe:_,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error(n(10));i=e,b({type:u.REPLACE})},[o]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(n(11));function t(){e.next&&e.next(h())}return t(),{unsubscribe:_(t)}},[o](){return this}}}}}function l(e){let t;let r=Object.keys(e),o={};for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof e[n]&&(o[n]=e[n])}let i=Object.keys(o);try{!function(e){Object.keys(e).forEach(t=>{let r=e[t];if(void 0===r(void 0,{type:u.INIT}))throw Error(n(12));if(void 0===r(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw Error(n(13))})}(o)}catch(e){t=e}return function(e={},r){if(t)throw t;let u=!1,a={};for(let t=0;t<i.length;t++){let c=i[t],l=o[c],s=e[c],f=l(s,r);if(void 0===f)throw r&&r.type,Error(n(14));a[c]=f,u=u||f!==s}return(u=u||i.length!==Object.keys(e).length)?a:e}}function s(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}function f(...e){return t=>(r,o)=>{let i=t(r,o),u=()=>{throw Error(n(15))},a={getState:i.getState,dispatch:(e,...t)=>u(e,...t)};return u=s(...e.map(e=>e(a)))(i.dispatch),{...i,dispatch:u}}}function p(e){return a(e)&&"type"in e&&"string"==typeof e.type}},1992:(e,t,r)=>{e.exports=r(4993)},4540:(e,t,r)=>{r.d(t,{Kq:()=>x,d4:()=>R,wA:()=>A});var n=r(2115),o=r(1992),i=Symbol.for("react.forward_ref"),u=Symbol.for("react.memo");function a(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:1!==e.length}var c={notify(){},get:()=>[]},l="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,s="undefined"!=typeof navigator&&"ReactNative"===navigator.product,f=l||s?n.useLayoutEffect:n.useEffect;function p(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}var d={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},y={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},h={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_={[i]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[u]:h};function b(e){return function(e){if("object"==typeof e&&null!==e){let{$$typeof:t}=e;switch(t){case null:switch(e=e.type){case null:case null:case null:case null:case null:return e;default:switch(e=e&&e.$$typeof){case null:case i:case null:case u:case null:return e;default:return t}}case null:return t}}}(e)===u?h:_[e.$$typeof]||d}var w=Object.defineProperty,v=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,O=Object.getPrototypeOf,E=Object.prototype,S=Symbol.for("react-redux-context"),P="undefined"!=typeof globalThis?globalThis:{},j=function(){if(!n.createContext)return{};let e=P[S]??=new Map,t=e.get(n.createContext);return!t&&(t=n.createContext(null),e.set(n.createContext,t)),t}(),x=function(e){let{children:t,context:r,serverState:o,store:i}=e,u=n.useMemo(()=>{let e=function(e,t){let r;let n=c,o=0,i=!1;function u(){s.onStateChange&&s.onStateChange()}function a(){if(o++,!r){let t,o;r=e.subscribe(u),t=null,o=null,n={clear(){t=null,o=null},notify(){(()=>{let e=t;for(;e;)e.callback(),e=e.next})()},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let r=!0,n=o={callback:e,next:null,prev:o};return n.prev?n.prev.next=n:t=n,function(){r&&null!==t&&(r=!1,n.next?n.next.prev=n.prev:o=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}}function l(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=c)}let s={addNestedSub:function(e){a();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),l())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:u,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,a())},tryUnsubscribe:function(){i&&(i=!1,l())},getListeners:()=>n};return s}(i);return{store:i,subscription:e,getServerState:o?()=>o:void 0}},[i,o]),a=n.useMemo(()=>i.getState(),[i]);return f(()=>{let{subscription:e}=u;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),a!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[u,a]),n.createElement((r||j).Provider,{value:u},t)};function T(e=j){return function(){return n.useContext(e)}}var N=T();function C(e=j){let t=e===j?N:T(e),r=()=>{let{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var k=C(),A=function(e=j){let t=e===j?k:C(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}(),D=(e,t)=>e===t,R=function(e=j){let t=e===j?N:T(e),r=(e,r={})=>{let{equalityFn:i=D}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:a,getServerState:c}=t();n.useRef(!0);let l=n.useCallback({[e.name]:t=>e(t)}[e.name],[e]),s=(0,o.useSyncExternalStoreWithSelector)(a.addNestedSub,u.getState,c||u.getState,l,i);return n.useDebugValue(s),s};return Object.assign(r,{withTypes:()=>r}),r}()},4993:(e,t,r)=>{var n=r(2115),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useSyncExternalStore,u=n.useRef,a=n.useEffect,c=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var f=u(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var d=i(e,(f=c(function(){function e(e){if(!a){if(a=!0,i=e,e=n(e),void 0!==s&&p.hasValue){var t=p.value;if(s(t,e))return u=t}return u=e}if(t=u,o(i,e))return t;var r=n(e);return void 0!==s&&s(t,r)?(i=e,t):(i=e,u=r)}var i,u,a=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,s]))[0],f[1]);return a(function(){p.hasValue=!0,p.value=d},[d]),l(d),d}},6439:(e,t,r)=>{r.d(t,{U1:()=>eo,Z0:()=>eb});var n,o=r(52);function i(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var u=i(),a=Symbol.for("immer-nothing"),c=Symbol.for("immer-draftable"),l=Symbol.for("immer-state");function s(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var f=Object.getPrototypeOf;function p(e){return!!e&&!!e[l]}function d(e){return!!e&&(h(e)||Array.isArray(e)||!!e[c]||!!e.constructor?.[c]||m(e)||g(e))}var y=Object.prototype.constructor.toString();function h(e){if(!e||"object"!=typeof e)return!1;let t=f(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===y}function _(e,t){0===b(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function b(e){let t=e[l];return t?t.type_:Array.isArray(e)?1:m(e)?2:3*!!g(e)}function w(e,t){return 2===b(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function v(e,t,r){let n=b(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function m(e){return e instanceof Map}function g(e){return e instanceof Set}function O(e){return e.copy_||e.base_}function E(e,t){if(m(e))return new Map(e);if(g(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=h(e);if(!0!==t&&("class_only"!==t||r)){let t=f(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[l];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(f(e),t)}}function S(e,t=!1){return j(e)||p(e)||!d(e)||(b(e)>1&&(e.set=e.add=e.clear=e.delete=P),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>S(t,!0))),e}function P(){s(2)}function j(e){return Object.isFrozen(e)}var x={};function T(e){let t=x[e];return t||s(0,e),t}function N(e,t){t&&(T("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function C(e){k(e),e.drafts_.forEach(D),e.drafts_=null}function k(e){e===n&&(n=e.parent_)}function A(e){return n={drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function D(e){let t=e[l];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function R(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[l].modified_&&(C(t),s(4)),d(e)&&(e=M(t,e),t.parent_||$(t,e)),t.patches_&&T("Patches").generateReplacementPatches_(r[l].base_,e,t.patches_,t.inversePatches_)):e=M(t,r,[]),C(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==a?e:void 0}function M(e,t,r){if(j(t))return t;let n=t[l];if(!n)return _(t,(o,i)=>z(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return $(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),_(o,(o,u)=>z(e,n,t,o,u,r,i)),$(e,t,!1),r&&e.patches_&&T("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function z(e,t,r,n,o,i,u){if(p(o)){let u=M(e,o,i&&t&&3!==t.type_&&!w(t.assigned_,n)?i.concat(n):void 0);if(v(r,n,u),!p(u))return;e.canAutoFreeze_=!1}else u&&r.add(o);if(d(o)&&!j(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;M(e,o),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&$(e,o)}}function $(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,r)}var F={get(e,t){if(t===l)return e;let r=O(e);if(!w(r,t))return function(e,t,r){let n=L(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!d(n)?n:n===W(e.base_,t)?(K(e),e.copy_[t]=V(n,e)):n},has:(e,t)=>t in O(e),ownKeys:e=>Reflect.ownKeys(O(e)),set(e,t,r){let n=L(O(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=W(O(e),t),o=n?.[l];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||w(e.base_,t)))return!0;K(e),U(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==W(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,K(e),U(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=O(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){s(11)},getPrototypeOf:e=>f(e.base_),setPrototypeOf(){s(12)}},I={};function W(e,t){let r=e[l];return(r?O(r):e)[t]}function L(e,t){if(!(t in e))return;let r=f(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=f(r)}}function U(e){!e.modified_&&(e.modified_=!0,e.parent_&&U(e.parent_))}function K(e){e.copy_||(e.copy_=E(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function V(e,t){let r=m(e)?T("MapSet").proxyMap_(e,t):g(e)?T("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),o={type_:+!!r,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=o,u=F;r&&(i=[o],u=I);let{revoke:a,proxy:c}=Proxy.revocable(i,u);return o.draft_=c,o.revoke_=a,c}(e,t);return(t?t.scope_:n).drafts_.push(r),r}_(F,(e,t)=>{I[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),I.deleteProperty=function(e,t){return I.set.call(this,e,t,void 0)},I.set=function(e,t,r){return F.set.call(this,e[0],t,r,e[0])};var X=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&s(6),void 0!==r&&"function"!=typeof r&&s(7),d(e)){let o=A(this),i=V(e,void 0),u=!0;try{n=t(i),u=!1}finally{u?C(o):k(o)}return N(o,r),R(n,o)}if(e&&"object"==typeof e)s(1,e);else{if(void 0===(n=t(e))&&(n=e),n===a&&(n=void 0),this.autoFreeze_&&S(n,!0),r){let t=[],o=[];T("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;d(e)||s(8),p(e)&&(p(t=e)||s(10,t),e=function e(t){let r;if(!d(t)||j(t))return t;let n=t[l];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=E(t,n.scope_.immer_.useStrictShallowCopy_)}else r=E(t,!0);return _(r,(t,n)=>{v(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=A(this),n=V(e,void 0);return n[l].isManual_=!0,k(r),n}finishDraft(e,t){let r=e&&e[l];r&&r.isManual_||s(9);let{scope_:n}=r;return N(n,t),R(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=T("Patches").applyPatches_;return p(e)?n(e,t):this.produce(e,e=>n(e,t))}},q=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseStrictShallowCopy.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X),r(9509);var Z="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?o.Zz:o.Zz.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var B=e=>e&&"function"==typeof e.match;function H(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(eV(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>(0,o.ve)(t)&&t.type===e,r}function Q(e){return["type","payload","error","meta"].indexOf(e)>-1}var Y=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function G(e){return d(e)?q(e,()=>{}):e}function J(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}var ee=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{},a=new Y;return t&&("boolean"==typeof t?a.push(u):a.push(i(t.extraArgument))),a},et=e=>t=>{setTimeout(t,e)},er=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,u=!1,a=new Set,c="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:et(10):"callback"===e.type?e.queueNotification:et(e.timeout),l=()=>{u=!1,i&&(i=!1,a.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return(i=!(o=!e?.meta?.RTK_autoBatch))&&!u&&(u=!0,c(l)),n.dispatch(e)}finally{o=!0}}})},en=e=>function(t){let{autoBatch:r=!0}=t??{},n=new Y(e);return r&&n.push(er("object"==typeof r?r:void 0)),n};function eo(e){let t,r;let n=ee(),{reducer:i,middleware:u,devTools:a=!0,preloadedState:c,enhancers:l}=e||{};if("function"==typeof i)t=i;else if((0,o.Qd)(i))t=(0,o.HY)(i);else throw Error(eV(1));r="function"==typeof u?u(n):n();let s=o.Zz;a&&(s=Z({trace:!1,..."object"==typeof a&&a}));let f=en((0,o.Tw)(...r)),p=s(..."function"==typeof l?l(f):f());return(0,o.y$)(t,c,p)}function ei(e){let t;let r={},n=[],o={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(eV(28));if(n in r)throw Error(eV(29));return r[n]=t,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(t=e,o)};return e(o),[r,n,t]}var eu=(e,t)=>B(e)?e.match(t):e(t);function ea(...e){return t=>e.some(e=>eu(e,t))}var ec=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},el=["name","message","stack","code"],es=class{constructor(e,t){this.payload=e,this.meta=t}_type},ef=class{constructor(e,t){this.payload=e,this.meta=t}_type},ep=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of el)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}},ed="External signal was aborted";function ey(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var eh=Symbol.for("rtk-slice-createasyncthunk"),e_=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(e_||{}),eb=function({creators:e}={}){let t=e?.asyncThunk?.[eh];return function(e){let r;let{name:n,reducerPath:o=n}=e;if(!n)throw Error(eV(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},u=Object.keys(i),a={},c={},l={},s=[],f={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw Error(eV(12));if(r in c)throw Error(eV(13));return c[r]=t,f},addMatcher:(e,t)=>(s.push({matcher:e,reducer:t}),f),exposeAction:(e,t)=>(l[e]=t,f),exposeCaseReducer:(e,t)=>(a[e]=t,f)};function y(){let[t={},r=[],n]="function"==typeof e.extraReducers?ei(e.extraReducers):[e.extraReducers],o={...t,...c};return function(e,t){let r;let[n,o,i]=ei(t);if("function"==typeof e)r=()=>G(e());else{let t=G(e);r=()=>t}function u(e=r(),t){let a=[n[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===a.filter(e=>!!e).length&&(a=[i]),a.reduce((e,r)=>{if(r){if(p(e)){let n=r(e,t);return void 0===n?e:n}if(d(e))return q(e,e=>r(e,t));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e},e)}return u.getInitialState=r,u}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of s)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)})}u.forEach(r=>{let o=i[r],u={reducerName:r,type:`${n}/${r}`,createNotation:"function"==typeof e.reducers};"asyncThunk"===o._reducerDefinitionType?function({type:e,reducerName:t},r,n,o){if(!o)throw Error(eV(18));let{payloadCreator:i,fulfilled:u,pending:a,rejected:c,settled:l,options:s}=r,f=o(e,i,s);n.exposeAction(t,f),u&&n.addCase(f.fulfilled,u),a&&n.addCase(f.pending,a),c&&n.addCase(f.rejected,c),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:u||ew,pending:a||ew,rejected:c||ew,settled:l||ew})}(u,o,f,t):function({type:e,reducerName:t,createNotation:r},n,o){let i,u;if("reducer"in n){if(r&&"reducerWithPrepare"!==n._reducerDefinitionType)throw Error(eV(17));i=n.reducer,u=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,u?H(e,u):H(e))}(u,o,f)});let h=e=>e,_=new Map;function b(e,t){return r||(r=y()),r(e,t)}function w(){return r||(r=y()),r.getInitialState()}function v(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=w()),n}function o(t=h){let n=J(_,r,()=>new WeakMap);return J(n,t,()=>{let n={};for(let[o,i]of Object.entries(e.selectors??{}))n[o]=function(e,t,r,n){function o(i,...u){let a=t(i);return void 0===a&&n&&(a=r()),e(a,...u)}return o.unwrapped=e,o}(i,t,w,r);return n})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}let m={name:n,reducer:b,actions:l,caseReducers:a,getInitialState:w,...v(o),injectInto(e,{reducerPath:t,...r}={}){let n=t??o;return e.inject({reducerPath:n,reducer:b},r),{...m,...v(n,!0)}}};return m}}();function ew(){}function ev(e){return function(t,r){let n=t=>{isAction(r)&&Object.keys(r).every(Q)?e(r.payload,t):e(r,t)};return(null)(t)?(n(t),t):createNextState3(t,n)}}function em(e,t){return t(e)}function eg(e){return Array.isArray(e)||(e=Object.values(e)),e}var eO=class{constructor(e){this.code=e,this.message=`task cancelled (reason: ${e})`}name="TaskAbortError";message},eE=(e,t)=>{if("function"!=typeof e)throw TypeError(eV(32))},eS=()=>{},eP=(e,t=eS)=>(e.catch(t),e),ej=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),ex=(e,t)=>{let r=e.signal;!r.aborted&&("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},eT=e=>{if(e.aborted){let{reason:t}=e;throw new eO(t)}};function eN(e,t){let r=eS;return new Promise((n,o)=>{let i=()=>o(new eO(e.reason));if(e.aborted){i();return}r=ej(e,i),t.finally(()=>r()).then(n,o)}).finally(()=>{r=eS})}var eC=async(e,t)=>{try{await Promise.resolve();let t=await e();return{status:"ok",value:t}}catch(e){return{status:e instanceof eO?"cancelled":"rejected",error:e}}finally{t?.()}},ek=e=>t=>eP(eN(e,t).then(t=>(eT(e),t))),eA=e=>{let t=ek(e);return e=>t(new Promise(t=>setTimeout(t,e)))},{assign:eD}=Object,eR="listenerMiddleware",eM=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=H(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(o);else throw Error(eV(21));return eE(i,"options.listener"),{predicate:o,type:t,effect:i}},ez=eD(e=>{let{type:t,predicate:r,effect:n}=eM(e);return{id:ec(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(eV(22))}}},{withTypes:()=>ez}),e$=e=>{e.pending.forEach(e=>{ex(e,null)})},eF=eD(H(`${eR}/add`),{withTypes:()=>eF}),eI=eD(H(`${eR}/remove`),{withTypes:()=>eI}),eW=e=>"reducerPath"in e&&"string"==typeof e.reducerPath,eL=Symbol.for("rtk-state-proxy-original"),eU=e=>!!e&&!!e[eL],eK=new WeakMap;function eV(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}}}]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/testing.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/peerjs/dist sync recursive":
/*!***************************************!*\
  !*** ./node_modules/peerjs/dist sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/peerjs/dist sync recursive";

/***/ }),

/***/ "./node_modules/peerjs/dist/peerjs.min.js":
/*!************************************************!*\
  !*** ./node_modules/peerjs/dist/peerjs.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if( true&&"string"==typeof n)return __webpack_require__("./node_modules/peerjs/dist sync recursive")(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]); true?module.exports=c:undefined}return u}({"vHo1":[function(require,module,exports) {
var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch(e){return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return 0===new Blob([new Uint8Array([])]).size}catch(e){return!0}}(),module.exports.binaryFeatures=e;var r=module.exports.BlobBuilder;function t(){this._pieces=[],this._parts=[]}"undefined"!=typeof window&&(r=module.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder),t.prototype.append=function(e){"number"==typeof e?this._pieces.push(e):(this.flush(),this._parts.push(e))},t.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},t.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var t=new r,i=0,u=this._parts.length;i<u;i++)t.append(this._parts[i]);return t.getBlob()}return new Blob(this._parts)},module.exports.BufferBuilder=t;
},{}],"lHOc":[function(require,module,exports) {
var t=require("./bufferbuilder").BufferBuilder,e=require("./bufferbuilder").binaryFeatures,i={unpack:function(t){return new r(t).unpack()},pack:function(t){var e=new n;return e.pack(t),e.getBuffer()}};function r(t){this.index=0,this.dataBuffer=t,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}function n(){this.bufferBuilder=new t}function u(t){var e=t.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function a(t){return t.length>600?new Blob([t]).size:t.replace(/[^\u0000-\u007F]/g,u).length}module.exports=i,r.prototype.unpack=function(){var t,e=this.unpack_uint8();if(e<128)return e;if((224^e)<32)return(224^e)-32;if((t=160^e)<=15)return this.unpack_raw(t);if((t=176^e)<=15)return this.unpack_string(t);if((t=144^e)<=15)return this.unpack_array(t);if((t=128^e)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:case 213:case 214:case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}},r.prototype.unpack_uint8=function(){var t=255&this.dataView[this.index];return this.index++,t},r.prototype.unpack_uint16=function(){var t=this.read(2),e=256*(255&t[0])+(255&t[1]);return this.index+=2,e},r.prototype.unpack_uint32=function(){var t=this.read(4),e=256*(256*(256*t[0]+t[1])+t[2])+t[3];return this.index+=4,e},r.prototype.unpack_uint64=function(){var t=this.read(8),e=256*(256*(256*(256*(256*(256*(256*t[0]+t[1])+t[2])+t[3])+t[4])+t[5])+t[6])+t[7];return this.index+=8,e},r.prototype.unpack_int8=function(){var t=this.unpack_uint8();return t<128?t:t-256},r.prototype.unpack_int16=function(){var t=this.unpack_uint16();return t<32768?t:t-65536},r.prototype.unpack_int32=function(){var t=this.unpack_uint32();return t<Math.pow(2,31)?t:t-Math.pow(2,32)},r.prototype.unpack_int64=function(){var t=this.unpack_uint64();return t<Math.pow(2,63)?t:t-Math.pow(2,64)},r.prototype.unpack_raw=function(t){if(this.length<this.index+t)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+t+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+t);return this.index+=t,e},r.prototype.unpack_string=function(t){for(var e,i,r=this.read(t),n=0,u="";n<t;)(e=r[n])<128?(u+=String.fromCharCode(e),n++):(192^e)<32?(i=(192^e)<<6|63&r[n+1],u+=String.fromCharCode(i),n+=2):(i=(15&e)<<12|(63&r[n+1])<<6|63&r[n+2],u+=String.fromCharCode(i),n+=3);return this.index+=t,u},r.prototype.unpack_array=function(t){for(var e=new Array(t),i=0;i<t;i++)e[i]=this.unpack();return e},r.prototype.unpack_map=function(t){for(var e={},i=0;i<t;i++){var r=this.unpack(),n=this.unpack();e[r]=n}return e},r.prototype.unpack_float=function(){var t=this.unpack_uint32(),e=(t>>23&255)-127;return(0==t>>31?1:-1)*(8388607&t|8388608)*Math.pow(2,e-23)},r.prototype.unpack_double=function(){var t=this.unpack_uint32(),e=this.unpack_uint32(),i=(t>>20&2047)-1023;return(0==t>>31?1:-1)*((1048575&t|1048576)*Math.pow(2,i-20)+e*Math.pow(2,i-52))},r.prototype.read=function(t){var e=this.index;if(e+t<=this.length)return this.dataView.subarray(e,e+t);throw new Error("BinaryPackFailure: read index out of range")},n.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()},n.prototype.pack=function(t){var i=typeof t;if("string"==i)this.pack_string(t);else if("number"==i)Math.floor(t)===t?this.pack_integer(t):this.pack_double(t);else if("boolean"==i)!0===t?this.bufferBuilder.append(195):!1===t&&this.bufferBuilder.append(194);else if("undefined"==i)this.bufferBuilder.append(192);else{if("object"!=i)throw new Error('Type "'+i+'" not yet supported');if(null===t)this.bufferBuilder.append(192);else{var r=t.constructor;if(r==Array)this.pack_array(t);else if(r==Blob||r==File)this.pack_bin(t);else if(r==ArrayBuffer)e.useArrayBufferView?this.pack_bin(new Uint8Array(t)):this.pack_bin(t);else if("BYTES_PER_ELEMENT"in t)e.useArrayBufferView?this.pack_bin(new Uint8Array(t.buffer)):this.pack_bin(t.buffer);else if(r==Object)this.pack_object(t);else if(r==Date)this.pack_string(t.toString());else{if("function"!=typeof t.toBinaryPack)throw new Error('Type "'+r.toString()+'" not yet supported');this.bufferBuilder.append(t.toBinaryPack())}}}this.bufferBuilder.flush()},n.prototype.pack_bin=function(t){var e=t.length||t.byteLength||t.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(219),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_string=function(t){var e=a(t);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(217),this.pack_uint32(e)}this.bufferBuilder.append(t)},n.prototype.pack_array=function(t){var e=t.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(221),this.pack_uint32(e)}for(var i=0;i<e;i++)this.pack(t[i])},n.prototype.pack_integer=function(t){if(-32<=t&&t<=127)this.bufferBuilder.append(255&t);else if(0<=t&&t<=255)this.bufferBuilder.append(204),this.pack_uint8(t);else if(-128<=t&&t<=127)this.bufferBuilder.append(208),this.pack_int8(t);else if(0<=t&&t<=65535)this.bufferBuilder.append(205),this.pack_uint16(t);else if(-32768<=t&&t<=32767)this.bufferBuilder.append(209),this.pack_int16(t);else if(0<=t&&t<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(t);else if(-2147483648<=t&&t<=2147483647)this.bufferBuilder.append(210),this.pack_int32(t);else if(-0x8000000000000000<=t&&t<=0x8000000000000000)this.bufferBuilder.append(211),this.pack_int64(t);else{if(!(0<=t&&t<=0x10000000000000000))throw new Error("Invalid integer");this.bufferBuilder.append(207),this.pack_uint64(t)}},n.prototype.pack_double=function(t){var e=0;t<0&&(e=1,t=-t);var i=Math.floor(Math.log(t)/Math.LN2),r=t/Math.pow(2,i)-1,n=Math.floor(r*Math.pow(2,52)),u=Math.pow(2,32),a=e<<31|i+1023<<20|n/u&1048575,p=n%u;this.bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(p)},n.prototype.pack_object=function(t){var e=Object.keys(t).length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else{if(!(e<=4294967295))throw new Error("Invalid length");this.bufferBuilder.append(223),this.pack_uint32(e)}for(var i in t)t.hasOwnProperty(i)&&(this.pack(i),this.pack(t[i]))},n.prototype.pack_uint8=function(t){this.bufferBuilder.append(t)},n.prototype.pack_uint16=function(t){this.bufferBuilder.append(t>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_uint32=function(t){var e=4294967295&t;this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e)},n.prototype.pack_uint64=function(t){var e=t/Math.pow(2,32),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)},n.prototype.pack_int8=function(t){this.bufferBuilder.append(255&t)},n.prototype.pack_int16=function(t){this.bufferBuilder.append((65280&t)>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int32=function(t){this.bufferBuilder.append(t>>>24&255),this.bufferBuilder.append((16711680&t)>>>16),this.bufferBuilder.append((65280&t)>>>8),this.bufferBuilder.append(255&t)},n.prototype.pack_int64=function(t){var e=Math.floor(t/Math.pow(2,32)),i=t%Math.pow(2,32);this.bufferBuilder.append((4278190080&e)>>>24),this.bufferBuilder.append((16711680&e)>>>16),this.bufferBuilder.append((65280&e)>>>8),this.bufferBuilder.append(255&e),this.bufferBuilder.append((4278190080&i)>>>24),this.bufferBuilder.append((16711680&i)>>>16),this.bufferBuilder.append((65280&i)>>>8),this.bufferBuilder.append(255&i)};
},{"./bufferbuilder":"vHo1"}],"sXtV":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.RTCSessionDescription=window.RTCSessionDescription||window.mozRTCSessionDescription,exports.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,exports.RTCIceCandidate=window.RTCIceCandidate||window.mozRTCIceCandidate;
},{}],"BHXf":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},o=1,n=t(require("js-binarypack")),a=require("./adapter");exports.util={noop:function(){},CLOUD_HOST:"0.peerjs.com",CLOUD_PORT:443,chunkedBrowsers:{Chrome:1},chunkedMTU:16300,logLevel:0,setLogLevel:function(e){var t=parseInt(e,10);isNaN(parseInt(e,10))?exports.util.logLevel=e?3:0:exports.util.logLevel=t,exports.util.log=exports.util.warn=exports.util.error=exports.util.noop,exports.util.logLevel>0&&(exports.util.error=exports.util._printWith("ERROR")),exports.util.logLevel>1&&(exports.util.warn=exports.util._printWith("WARNING")),exports.util.logLevel>2&&(exports.util.log=exports.util._print)},setLogFunction:function(e){e.constructor!==Function?exports.util.warn("The log function you passed in is not a function. Defaulting to regular logs."):exports.util._print=e},_printWith:function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e),exports.util._print.apply(exports.util,t)}},_print:function(){var e=!1,t=Array.prototype.slice.call(arguments);t.unshift("PeerJS: ");for(var r=0,o=t.length;r<o;r++)t[r]instanceof Error&&(t[r]="("+t[r].name+") "+t[r].message,e=!0);e?console.error.apply(console,t):console.log.apply(console,t)},defaultConfig:r,browser:window.mozRTCPeerConnection?"Firefox":window.webkitRTCPeerConnection?"Chrome":window.RTCPeerConnection?"Supported":"Unsupported",supports:function(){if(void 0===a.RTCPeerConnection)return{};var e,t,o=!0,n=!0,i=!1,u=!1,l=!!window.webkitRTCPeerConnection;try{e=new a.RTCPeerConnection(r,{optional:[{RtpDataChannels:!0}]})}catch(c){o=!1,n=!1}if(o)try{t=e.createDataChannel("_PEERJSTEST")}catch(c){o=!1}if(o){try{t.binaryType="blob",i=!0}catch(c){}var s=new a.RTCPeerConnection(r,{});try{u=s.createDataChannel("_PEERJSRELIABLETEST",{}).reliable}catch(c){}s.close()}return n&&(n=!!e.addStream),e&&e.close(),{audioVideo:n,data:o,binaryBlob:i,binary:u,reliable:u,sctp:u,onnegotiationneeded:l}}(),validateId:function(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.exec(e)},validateKey:function(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.exec(e)},debug:!1,inherits:function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},extend:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},pack:n.default.pack,unpack:n.default.unpack,log:function(){if(exports.util.debug){var e=!1,t=Array.prototype.slice.call(arguments);t.unshift("PeerJS: ");for(var r=0,o=t.length;r<o;r++)t[r]instanceof Error&&(t[r]="("+t[r].name+") "+t[r].message,e=!0);e?console.error.apply(console,t):console.log.apply(console,t)}},setZeroTimeout:function(e){var t=[],r="zero-timeout-message";function o(o){o.source==e&&o.data==r&&(o.stopPropagation&&o.stopPropagation(),t.length&&t.shift()())}return e.addEventListener?e.addEventListener("message",o,!0):e.attachEvent&&e.attachEvent("onmessage",o),function(o){t.push(o),e.postMessage(r,"*")}}(window),chunk:function(e){for(var t,r=[],n=e.size,a=t=0,i=Math.ceil(n/exports.util.chunkedMTU);a<n;){var u=Math.min(n,a+exports.util.chunkedMTU),l=e.slice(a,u),s={__peerData:o,n:t,data:l,total:i};r.push(s),a=u,t+=1}return o+=1,r},blobToArrayBuffer:function(e,t){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.readAsArrayBuffer(e)},blobToBinaryString:function(e,t){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.readAsBinaryString(e)},binaryStringToArrayBuffer:function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=255&e.charCodeAt(r);return t.buffer},randomToken:function(){return Math.random().toString(36).substr(2)},isSecure:function(){return"https:"===location.protocol}};
},{"js-binarypack":"lHOc","./adapter":"sXtV"}],"2JJl":[function(require,module,exports) {
"use strict";function t(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function e(){}e.prototype._events=void 0,e.prototype.listeners=function(t){if(!this._events||!this._events[t])return[];if(this._events[t].fn)return[this._events[t].fn];for(var e=0,n=this._events[t].length,s=new Array(n);e<n;e++)s[e]=this._events[t][e].fn;return s},e.prototype.emit=function(t,e,n,s,r,i){if(!this._events||!this._events[t])return!1;var o,h,f=this._events[t],v=arguments.length;if("function"==typeof f.fn){switch(f.once&&this.removeListener(t,f.fn,!0),v){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,e),!0;case 3:return f.fn.call(f.context,e,n),!0;case 4:return f.fn.call(f.context,e,n,s),!0;case 5:return f.fn.call(f.context,e,n,s,r),!0;case 6:return f.fn.call(f.context,e,n,s,r,i),!0}for(h=1,o=new Array(v-1);h<v;h++)o[h-1]=arguments[h];f.fn.apply(f.context,o)}else{var c,a=f.length;for(h=0;h<a;h++)switch(f[h].once&&this.removeListener(t,f[h].fn,!0),v){case 1:f[h].fn.call(f[h].context);break;case 2:f[h].fn.call(f[h].context,e);break;case 3:f[h].fn.call(f[h].context,e,n);break;default:if(!o)for(c=1,o=new Array(v-1);c<v;c++)o[c-1]=arguments[c];f[h].fn.apply(f[h].context,o)}}return!0},e.prototype.on=function(e,n,s){var r=new t(n,s||this);return this._events||(this._events={}),this._events[e]?this._events[e].fn?this._events[e]=[this._events[e],r]:this._events[e].push(r):this._events[e]=r,this},e.prototype.once=function(e,n,s){var r=new t(n,s||this,!0);return this._events||(this._events={}),this._events[e]?this._events[e].fn?this._events[e]=[this._events[e],r]:this._events[e].push(r):this._events[e]=r,this},e.prototype.removeListener=function(t,e,n){if(!this._events||!this._events[t])return this;var s=this._events[t],r=[];if(e&&(s.fn&&(s.fn!==e||n&&!s.once)&&r.push(s),!s.fn))for(var i=0,o=s.length;i<o;i++)(s[i].fn!==e||n&&!s[i].once)&&r.push(s[i]);return r.length?this._events[t]=1===r.length?r[0]:r:delete this._events[t],this},e.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[t]:this._events={},this):this},e.prototype.off=e.prototype.removeListener,e.prototype.addListener=e.prototype.on,e.prototype.setMaxListeners=function(){return this},e.EventEmitter=e,e.EventEmitter2=e,e.EventEmitter3=e,module.exports=e;
},{}],"wJlv":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("./util"),e=require("eventemitter3");function s(t,i,o,n,r,h){if(!(this instanceof s))return new s(t,i,o,n,r,h);h=h||o,e.EventEmitter.call(this),this.disconnected=!1,this._queue=[];var a=t?"https://":"http://",u=t?"wss://":"ws://";this._httpUrl=a+i+":"+o+n+r,this._wsUrl=u+i+":"+h+n+"peerjs?key="+r}exports.Socket=s,t.util.inherits(s,e.EventEmitter),s.prototype.start=function(t,e){this.id=t,this._httpUrl+="/"+t+"/"+e,this._wsUrl+="&id="+t+"&token="+e,this._startXhrStream(),this._startWebSocket()},s.prototype._startWebSocket=function(e){var s=this;this._socket||(this._socket=new WebSocket(this._wsUrl),this._socket.onmessage=function(e){try{var i=JSON.parse(e.data)}catch(o){return void t.util.log("Invalid server message",e.data)}s.emit("message",i)},this._socket.onclose=function(e){t.util.log("Socket closed."),s.disconnected=!0,s.emit("disconnected")},this._socket.onopen=function(){s._timeout&&(clearTimeout(s._timeout),setTimeout(function(){s._http.abort(),s._http=null},5e3)),s._sendQueuedMessages(),t.util.log("Socket open")})},s.prototype._startXhrStream=function(e){try{var s=this;this._http=new XMLHttpRequest,this._http._index=1,this._http._streamIndex=e||0,this._http.open("post",this._httpUrl+"/id?i="+this._http._streamIndex,!0),this._http.onerror=function(){clearTimeout(s._timeout),s.emit("disconnected")},this._http.onreadystatechange=function(){2==this.readyState&&this.old?(this.old.abort(),delete this.old):this.readyState>2&&200===this.status&&this.responseText&&s._handleStream(this)},this._http.send(null),this._setHTTPTimeout()}catch(i){t.util.log("XMLHttpRequest not available; defaulting to WebSockets")}},s.prototype._handleStream=function(e){var s=e.responseText.split("\n");if(e._buffer)for(;e._buffer.length>0;){var i=e._buffer.shift(),o=s[i];try{o=JSON.parse(o)}catch(r){e._buffer.shift(i);break}this.emit("message",o)}var n=s[e._index];if(n)if(e._index+=1,e._index===s.length)e._buffer||(e._buffer=[]),e._buffer.push(e._index-1);else{try{n=JSON.parse(n)}catch(r){return void t.util.log("Invalid server message",n)}this.emit("message",n)}},s.prototype._setHTTPTimeout=function(){var t=this;this._timeout=setTimeout(function(){var e=t._http;t._wsOpen()?e.abort():(t._startXhrStream(e._streamIndex+1),t._http.old=e)},25e3)},s.prototype._wsOpen=function(){return this._socket&&1==this._socket.readyState},s.prototype._sendQueuedMessages=function(){for(var t=0,e=this._queue.length;t<e;t+=1)this.send(this._queue[t])},s.prototype.send=function(t){if(!this.disconnected)if(this.id)if(t.type){var e=JSON.stringify(t);if(this._wsOpen())this._socket.send(e);else{var s=new XMLHttpRequest,i=this._httpUrl+"/"+t.type.toLowerCase();s.open("post",i,!0),s.setRequestHeader("Content-Type","application/json"),s.send(e)}}else this.emit("error","Invalid message");else this._queue.push(t)},s.prototype.close=function(){!this.disconnected&&this._wsOpen()&&(this._socket.close(),this.disconnected=!0)};
},{"./util":"BHXf","eventemitter3":"2JJl"}],"HCdX":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./util"),t=require("./adapter");function o(e,t){"addTrack"in t?e.getTracks().forEach(function(o){t.addTrack(o,e)}):"addStream"in t&&t.addStream(e)}exports.Negotiator={pcs:{data:{},media:{}},queue:[]},exports.Negotiator._idPrefix="pc_",exports.Negotiator.startConnection=function(t,i){var r=exports.Negotiator._getPeerConnection(t,i);if(t.pc=t.peerConnection=r,"media"===t.type&&i._stream&&o(i._stream,r),i.originator){if("data"===t.type){var n={};e.util.supports.sctp||(n={reliable:i.reliable});var a=r.createDataChannel(t.label,n);t.initialize(a)}exports.Negotiator._makeOffer(t)}else exports.Negotiator.handleSDP("OFFER",t,i.sdp)},exports.Negotiator._getPeerConnection=function(t,o){exports.Negotiator.pcs[t.type]||e.util.error(t.type+" is not a valid connection type. Maybe you overrode the `type` property somewhere."),exports.Negotiator.pcs[t.type][t.peer]||(exports.Negotiator.pcs[t.type][t.peer]={});var i;exports.Negotiator.pcs[t.type][t.peer];return o.pc&&(i=exports.Negotiator.pcs[t.type][t.peer][o.pc]),i&&"stable"===i.signalingState||(i=exports.Negotiator._startPeerConnection(t)),i},exports.Negotiator._startPeerConnection=function(o){e.util.log("Creating RTCPeerConnection.");var i=exports.Negotiator._idPrefix+e.util.randomToken(),r={};"data"!==o.type||e.util.supports.sctp?"media"===o.type&&(r={optional:[{DtlsSrtpKeyAgreement:!0}]}):r={optional:[{RtpDataChannels:!0}]};var n=new t.RTCPeerConnection(o.provider.options.config,r);return exports.Negotiator.pcs[o.type][o.peer][i]=n,exports.Negotiator._setupListeners(o,n,i),n},exports.Negotiator._setupListeners=function(t,i,r){var n=t.peer,a=t.id,c=t.provider;e.util.log("Listening for ICE candidates."),i.onicecandidate=function(o){o.candidate&&(e.util.log("Received ICE candidates for:",t.peer),c.socket.send({type:"CANDIDATE",payload:{candidate:o.candidate,type:t.type,connectionId:t.id},dst:n}))},i.oniceconnectionstatechange=function(){switch(i.iceConnectionState){case"failed":e.util.log("iceConnectionState is disconnected, closing connections to "+n),t.emit("error",new Error("Negotiation of connection to "+n+" failed.")),t.close();break;case"disconnected":e.util.log("iceConnectionState is disconnected, closing connections to "+n);break;case"completed":i.onicecandidate=e.util.noop}},i.onicechange=i.oniceconnectionstatechange,e.util.log("Listening for data channel"),i.ondatachannel=function(t){e.util.log("Received data channel");var o=t.channel;c.getConnection(n,a).initialize(o)},e.util.log("Listening for remote stream"),i.ontrack=function(t){e.util.log("Received remote stream");var i=t.streams[0],r=c.getConnection(n,a);"media"===r.type&&o(i,r)}},exports.Negotiator.cleanup=function(t){e.util.log("Cleaning up PeerConnection to "+t.peer);var o=t.pc;o&&(o.readyState&&"closed"!==o.readyState||"closed"!==o.signalingState)&&(o.close(),t.pc=null)},exports.Negotiator._makeOffer=function(t){var o=t.pc,i=function(i){e.util.log("Created offer."),!e.util.supports.sctp&&"data"===t.type&&t.reliable&&(i.sdp=Reliable.higherBandwidthSDP(i.sdp));o.setLocalDescription(i).then(function(){return e.util.log("Set localDescription: offer","for:",t.peer),void t.provider.socket.send({type:"OFFER",payload:{sdp:i,type:t.type,label:t.label,connectionId:t.id,reliable:t.reliable,serialization:t.serialization,metadata:t.metadata,browser:e.util.browser},dst:t.peer})}).catch(function(o){return function(o){"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=o&&(t.provider.emitError("webrtc",o),e.util.log("Failed to setLocalDescription, ",o))}(o)})};o.createOffer(t.options.constraints).then(function(e){return i(e)}).catch(function(o){return function(o){t.provider.emitError("webrtc",o),e.util.log("Failed to createOffer, ",o)}(o)})},exports.Negotiator._makeAnswer=function(t){var o=t.pc,i=function(i){e.util.log("Created answer."),!e.util.supports.sctp&&"data"===t.type&&t.reliable&&(i.sdp=Reliable.higherBandwidthSDP(i.sdp));o.setLocalDescription(i).then(function(){return e.util.log("Set localDescription: answer","for:",t.peer),void t.provider.socket.send({type:"ANSWER",payload:{sdp:i,type:t.type,connectionId:t.id,browser:e.util.browser},dst:t.peer})}).catch(function(o){t.provider.emitError("webrtc",o),e.util.log("Failed to setLocalDescription, ",o)})};o.createAnswer().then(function(e){return i(e)}).catch(function(o){t.provider.emitError("webrtc",o),e.util.log("Failed to create answer, ",o)})},exports.Negotiator.handleSDP=function(o,i,r){r=new t.RTCSessionDescription(r);var n=i.pc;e.util.log("Setting remote description",r);n.setRemoteDescription(r).then(function(){return e.util.log("Set remoteDescription:",o,"for:",i.peer),void("OFFER"===o&&exports.Negotiator._makeAnswer(i))}).catch(function(t){i.provider.emitError("webrtc",t),e.util.log("Failed to setRemoteDescription, ",t)})},exports.Negotiator.handleCandidate=function(o,i){var r=i.candidate,n=i.sdpMLineIndex;o.pc.addIceCandidate(new t.RTCIceCandidate({sdpMLineIndex:n,candidate:r})),e.util.log("Added ICE candidate for:",o.peer)};
},{"./util":"BHXf","./adapter":"sXtV"}],"dbHP":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("./util"),e=require("eventemitter3"),i=require("./negotiator");function o(s,a,r){if(!(this instanceof o))return new o(s,a,r);e.EventEmitter.call(this),this.options=t.util.extend({},r),this.open=!1,this.type="media",this.peer=s,this.provider=a,this.metadata=this.options.metadata,this.localStream=this.options._stream,this.id=this.options.connectionId||o._idPrefix+t.util.randomToken(),this.localStream&&i.Negotiator.startConnection(this,{_stream:this.localStream,originator:!0})}exports.MediaConnection=o,t.util.inherits(o,e.EventEmitter),o._idPrefix="mc_",o.prototype.addStream=function(e){t.util.log("Receiving stream",e),this.remoteStream=e,this.emit("stream",e)},o.prototype.handleMessage=function(e){var o=e.payload;switch(e.type){case"ANSWER":i.Negotiator.handleSDP(e.type,this,o.sdp),this.open=!0;break;case"CANDIDATE":i.Negotiator.handleCandidate(this,o.candidate);break;default:t.util.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},o.prototype.answer=function(e){if(this.localStream)t.util.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this.options._payload._stream=e,this.localStream=e,i.Negotiator.startConnection(this,this.options._payload);for(var o=this.provider._getMessages(this.id),s=0,a=o.length;s<a;s+=1)this.handleMessage(o[s]);this.open=!0}},o.prototype.close=function(){this.open&&(this.open=!1,i.Negotiator.cleanup(this),this.emit("close"))};
},{"./util":"BHXf","eventemitter3":"2JJl","./negotiator":"HCdX"}],"T9kO":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],r=require("js-binarypack"),t={debug:!1,inherits:function(e,r){e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},extend:function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);return e},pack:r.pack,unpack:r.unpack,log:function(){if(t.debug){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.unshift("Reliable: "),console.log.apply(console,e)}},setZeroTimeout:function(e){var r=[],t="zero-timeout-message";function n(n){n.source==e&&n.data==t&&(n.stopPropagation&&n.stopPropagation(),r.length&&r.shift()())}return e.addEventListener?e.addEventListener("message",n,!0):e.attachEvent&&e.attachEvent("onmessage",n),function(n){r.push(n),e.postMessage(t,"*")}}(this),blobToArrayBuffer:function(e,r){var t=new FileReader;t.onload=function(e){r(e.target.result)},t.readAsArrayBuffer(e)},blobToBinaryString:function(e,r){var t=new FileReader;t.onload=function(e){r(e.target.result)},t.readAsBinaryString(e)},binaryStringToArrayBuffer:function(e){for(var r=new Uint8Array(e.length),t=0;t<e.length;t++)r[t]=255&e.charCodeAt(t);return r.buffer},randomToken:function(){return Math.random().toString(36).substr(2)}};module.exports=t;
},{"js-binarypack":"lHOc"}],"aYFJ":[function(require,module,exports) {
var t=require("./util");function e(n,i){if(!(this instanceof e))return new e(n);this._dc=n,t.debug=i,this._outgoing={},this._incoming={},this._received={},this._window=1e3,this._mtu=500,this._interval=0,this._count=0,this._queue=[],this._setupDC()}e.prototype.send=function(e){var n=t.pack(e);n.size<this._mtu?this._handleSend(["no",n]):(this._outgoing[this._count]={ack:0,chunks:this._chunk(n)},t.debug&&(this._outgoing[this._count].timer=new Date),this._sendWindowedChunks(this._count),this._count+=1)},e.prototype._setupInterval=function(){var t=this;this._timeout=setInterval(function(){var e=t._queue.shift();if(e._multiple)for(var n=0,i=e.length;n<i;n+=1)t._intervalSend(e[n]);else t._intervalSend(e)},this._interval)},e.prototype._intervalSend=function(e){var n=this;e=t.pack(e),t.blobToBinaryString(e,function(t){n._dc.send(t)}),0===n._queue.length&&(clearTimeout(n._timeout),n._timeout=null)},e.prototype._processAcks=function(){for(var t in this._outgoing)this._outgoing.hasOwnProperty(t)&&this._sendWindowedChunks(t)},e.prototype._handleSend=function(t){for(var e=!0,n=0,i=this._queue.length;n<i;n+=1){var o=this._queue[n];o===t?e=!1:o._multiple&&-1!==o.indexOf(t)&&(e=!1)}e&&(this._queue.push(t),this._timeout||this._setupInterval())},e.prototype._setupDC=function(){var e=this;this._dc.onmessage=function(n){var i=n.data;if(i.constructor===String){var o=t.binaryStringToArrayBuffer(i);i=t.unpack(o),e._handleMessage(i)}}},e.prototype._handleMessage=function(e){var n,i=e[1],o=this._incoming[i],s=this._outgoing[i];switch(e[0]){case"no":var a=i;a&&this.onmessage(t.unpack(a));break;case"end":if(n=o,this._received[i]=e[2],!n)break;this._ack(i);break;case"ack":if(n=s){var h=e[2];n.ack=Math.max(h,n.ack),n.ack>=n.chunks.length?(t.log("Time: ",new Date-n.timer),delete this._outgoing[i]):this._processAcks()}break;case"chunk":if(!(n=o)){if(!0===this._received[i])break;n={ack:["ack",i,0],chunks:[]},this._incoming[i]=n}var r=e[2],u=e[3];n.chunks[r]=new Uint8Array(u),r===n.ack[2]&&this._calculateNextAck(i),this._ack(i);break;default:this._handleSend(e)}},e.prototype._chunk=function(e){for(var n=[],i=e.size,o=0;o<i;){var s=Math.min(i,o+this._mtu),a={payload:e.slice(o,s)};n.push(a),o=s}return t.log("Created",n.length,"chunks."),n},e.prototype._ack=function(t){var e=this._incoming[t].ack;this._received[t]===e[2]&&(this._complete(t),this._received[t]=!0),this._handleSend(e)},e.prototype._calculateNextAck=function(t){for(var e=this._incoming[t],n=e.chunks,i=0,o=n.length;i<o;i+=1)if(void 0===n[i])return void(e.ack[2]=i);e.ack[2]=n.length},e.prototype._sendWindowedChunks=function(e){t.log("sendWindowedChunks for: ",e);for(var n=this._outgoing[e],i=n.chunks,o=[],s=Math.min(n.ack+this._window,i.length),a=n.ack;a<s;a+=1)i[a].sent&&a!==n.ack||(i[a].sent=!0,o.push(["chunk",e,a,i[a].payload]));n.ack+this._window>=i.length&&o.push(["end",e,i.length]),o._multiple=!0,this._handleSend(o)},e.prototype._complete=function(e){t.log("Completed called for",e);var n=this,i=this._incoming[e].chunks,o=new Blob(i);t.blobToArrayBuffer(o,function(e){n.onmessage(t.unpack(e))}),delete this._incoming[e]},e.higherBandwidthSDP=function(t){var e=navigator.appVersion.match(/Chrome\/(.*?) /);if(e&&(e=parseInt(e[1].split(".").shift()))<31){var n=t.split("b=AS:30");if(n.length>1)return n[0]+"b=AS:102400"+n[1]}return t},e.prototype.onmessage=function(t){},module.exports.Reliable=e;
},{"./util":"T9kO"}],"GBTQ":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=require("./util"),e=require("eventemitter3"),i=require("./negotiator"),n=require("reliable");function s(n,r,a){if(!(this instanceof s))return new s(n,r,a);e.EventEmitter.call(this),this.options=t.util.extend({serialization:"binary",reliable:!1},a),this.open=!1,this.type="data",this.peer=n,this.provider=r,this.id=this.options.connectionId||s._idPrefix+t.util.randomToken(),this.label=this.options.label||this.id,this.metadata=this.options.metadata,this.serialization=this.options.serialization,this.reliable=this.options.reliable,this._buffer=[],this._buffering=!1,this.bufferSize=0,this._chunkedData={},this.options._payload&&(this._peerBrowser=this.options._payload.browser),i.Negotiator.startConnection(this,this.options._payload||{originator:!0})}exports.DataConnection=s,t.util.inherits(s,e.EventEmitter),s._idPrefix="dc_",s.prototype.initialize=function(t){this._dc=this.dataChannel=t,this._configureDataChannel()},s.prototype._configureDataChannel=function(){var e=this;t.util.supports.sctp&&(this._dc.binaryType="arraybuffer"),this._dc.onopen=function(){t.util.log("Data channel connection success"),e.open=!0,e.emit("open")},!t.util.supports.sctp&&this.reliable&&(this._reliable=new n.Reliable(this._dc,t.util.debug)),this._reliable?this._reliable.onmessage=function(t){e.emit("data",t)}:this._dc.onmessage=function(t){e._handleDataMessage(t)},this._dc.onclose=function(i){t.util.log("DataChannel closed for:",e.peer),e.close()}},s.prototype._handleDataMessage=function(e){var i=this,n=e.data,s=n.constructor;if("binary"===this.serialization||"binary-utf8"===this.serialization){if(s===Blob)return void t.util.blobToArrayBuffer(n,function(e){n=t.util.unpack(e),i.emit("data",n)});if(s===ArrayBuffer)n=t.util.unpack(n);else if(s===String){var r=t.util.binaryStringToArrayBuffer(n);n=t.util.unpack(r)}}else"json"===this.serialization&&(n=JSON.parse(n));if(n.__peerData){var a=n.__peerData,o=this._chunkedData[a]||{data:[],count:0,total:n.total};return o.data[n.n]=n.data,o.count+=1,o.total===o.count&&(delete this._chunkedData[a],n=new Blob(o.data),this._handleDataMessage({data:n})),void(this._chunkedData[a]=o)}this.emit("data",n)},s.prototype.close=function(){this.open&&(this.open=!1,i.Negotiator.cleanup(this),this.emit("close"))},s.prototype.send=function(e,i){if(this.open)if(this._reliable)this._reliable.send(e);else{var n=this;if("json"===this.serialization)this._bufferedSend(JSON.stringify(e));else if("binary"===this.serialization||"binary-utf8"===this.serialization){var s=t.util.pack(e);if((t.util.chunkedBrowsers[this._peerBrowser]||t.util.chunkedBrowsers[t.util.browser])&&!i&&s.size>t.util.chunkedMTU)return void this._sendChunks(s);t.util.supports.sctp?t.util.supports.binaryBlob?this._bufferedSend(s):t.util.blobToArrayBuffer(s,function(t){n._bufferedSend(t)}):t.util.blobToBinaryString(s,function(t){n._bufferedSend(t)})}else this._bufferedSend(e)}else this.emit("error",new Error("Connection is not open. You should listen for the `open` event before sending messages."))},s.prototype._bufferedSend=function(t){!this._buffering&&this._trySend(t)||(this._buffer.push(t),this.bufferSize=this._buffer.length)},s.prototype._trySend=function(t){try{this._dc.send(t)}catch(i){this._buffering=!0;var e=this;return setTimeout(function(){e._buffering=!1,e._tryBuffer()},100),!1}return!0},s.prototype._tryBuffer=function(){if(0!==this._buffer.length){var t=this._buffer[0];this._trySend(t)&&(this._buffer.shift(),this.bufferSize=this._buffer.length,this._tryBuffer())}},s.prototype._sendChunks=function(e){for(var i=t.util.chunk(e),n=0,s=i.length;n<s;n+=1){e=i[n];this.send(e,!0)}},s.prototype.handleMessage=function(e){var n=e.payload;switch(e.type){case"ANSWER":this._peerBrowser=n.browser,i.Negotiator.handleSDP(e.type,this,n.sdp);break;case"CANDIDATE":i.Negotiator.handleCandidate(this,n.candidate);break;default:t.util.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}};
},{"./util":"BHXf","eventemitter3":"2JJl","./negotiator":"HCdX","reliable":"aYFJ"}],"Hxpd":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./util"),t=require("eventemitter3"),o=require("./socket"),n=require("./mediaconnection"),i=require("./dataconnection");function s(o,n){if(!(this instanceof s))return new s(o,n);t.EventEmitter.call(this),o&&o.constructor==Object?(n=o,o=void 0):o&&(o=o.toString()),(n=e.util.extend({debug:0,host:e.util.CLOUD_HOST,port:e.util.CLOUD_PORT,path:"/",token:e.util.randomToken(),config:e.util.defaultConfig},n)).key="peerjs",this.options=n,"/"===n.host&&(n.host=window.location.hostname),"/"!==n.path[0]&&(n.path="/"+n.path),"/"!==n.path[n.path.length-1]&&(n.path+="/"),void 0===n.secure&&n.host!==e.util.CLOUD_HOST?n.secure=e.util.isSecure():n.host==e.util.CLOUD_HOST&&(n.secure=!0),n.logFunction&&e.util.setLogFunction(n.logFunction),e.util.setLogLevel(n.debug),e.util.supports.audioVideo||e.util.supports.data?e.util.validateId(o)?(this.destroyed=!1,this.disconnected=!1,this.open=!1,this.connections={},this._lostMessages={},this._initializeServerConnection(),o?this._initialize(o):this._retrieveId()):this._delayedAbort("invalid-id",'ID "'+o+'" is invalid'):this._delayedAbort("browser-incompatible","The current browser does not support WebRTC")}exports.Peer=s,e.util.inherits(s,t.EventEmitter),s.prototype._initializeServerConnection=function(){var e=this;this.socket=new o.Socket(this.options.secure,this.options.host,this.options.port,this.options.path,this.options.key,this.options.wsport),this.socket.on("message",function(t){e._handleMessage(t)}),this.socket.on("error",function(t){e._abort("socket-error",t)}),this.socket.on("disconnected",function(){e.disconnected||(e.emitError("network","Lost connection to server."),e.disconnect())}),this.socket.on("close",function(){e.disconnected||e._abort("socket-closed","Underlying socket is already closed.")})},s.prototype._retrieveId=function(t){var o=this,n=new XMLHttpRequest,i=(this.options.secure?"https://":"http://")+this.options.host+":"+this.options.port+this.options.path+this.options.key+"/id";i+="?ts="+(new Date).getTime()+Math.random(),n.open("get",i,!0),n.onerror=function(t){e.util.error("Error retrieving ID",t);var n="";"/"===o.options.path&&o.options.host!==e.util.CLOUD_HOST&&(n=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),o._abort("server-error","Could not get an ID from the server."+n)},n.onreadystatechange=function(){4===n.readyState&&(200===n.status?o._initialize(n.responseText):n.onerror())},n.send(null)},s.prototype._initialize=function(e){this.id=e,this.socket.start(this.id,this.options.token)},s.prototype._handleMessage=function(t){var o,s=t.type,r=t.payload,a=t.src;switch(s){case"OPEN":this.emit("open",this.id),this.open=!0;break;case"ERROR":this._abort("server-error",r.msg);break;case"ID-TAKEN":this._abort("unavailable-id","ID `"+this.id+"` is taken");break;case"INVALID-KEY":this._abort("invalid-key",'API KEY "'+this.options.key+'" is invalid');break;case"LEAVE":e.util.log("Received leave message from",a),this._cleanupPeer(a);break;case"EXPIRE":this.emitError("peer-unavailable","Could not connect to peer "+a);break;case"OFFER":var c=r.connectionId;if((o=this.getConnection(a,c))&&(o.close(),e.util.warn("Offer received for existing Connection ID:",c)),"media"===r.type)o=new n.MediaConnection(a,this,{connectionId:c,_payload:r,metadata:r.metadata}),this._addConnection(a,o),this.emit("call",o);else{if("data"!==r.type)return void e.util.warn("Received malformed connection type:",r.type);o=new i.DataConnection(a,this,{connectionId:c,_payload:r,metadata:r.metadata,label:r.label,serialization:r.serialization,reliable:r.reliable}),this._addConnection(a,o),this.emit("connection",o)}for(var h=this._getMessages(c),d=0,l=h.length;d<l;d+=1)o.handleMessage(h[d]);break;default:if(!r)return void e.util.warn("You received a malformed message from "+a+" of type "+s);var u=r.connectionId;(o=this.getConnection(a,u))&&o.pc?o.handleMessage(t):u?this._storeMessage(u,t):e.util.warn("You received an unrecognized message:",t)}},s.prototype._storeMessage=function(e,t){this._lostMessages[e]||(this._lostMessages[e]=[]),this._lostMessages[e].push(t)},s.prototype._getMessages=function(e){var t=this._lostMessages[e];return t?(delete this._lostMessages[e],t):[]},s.prototype.connect=function(t,o){if(this.disconnected)return e.util.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError("disconnected","Cannot connect to new Peer after disconnecting from server.");var n=new i.DataConnection(t,this,o);return this._addConnection(t,n),n},s.prototype.call=function(t,o,i){if(this.disconnected)return e.util.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError("disconnected","Cannot connect to new Peer after disconnecting from server.");if(o){(i=i||{})._stream=o;var s=new n.MediaConnection(t,this,i);return this._addConnection(t,s),s}e.util.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},s.prototype._addConnection=function(e,t){this.connections[e]||(this.connections[e]=[]),this.connections[e].push(t)},s.prototype.getConnection=function(e,t){var o=this.connections[e];if(!o)return null;for(var n=0,i=o.length;n<i;n++)if(o[n].id===t)return o[n];return null},s.prototype._delayedAbort=function(t,o){var n=this;e.util.setZeroTimeout(function(){n._abort(t,o)})},s.prototype._abort=function(t,o){e.util.error("Aborting!"),this._lastServerId?this.disconnect():this.destroy(),this.emitError(t,o)},s.prototype.emitError=function(t,o){e.util.error("Error:",o),"string"==typeof o&&(o=new Error(o)),o.type=t,this.emit("error",o)},s.prototype.destroy=function(){this.destroyed||(this._cleanup(),this.disconnect(),this.destroyed=!0)},s.prototype._cleanup=function(){if(this.connections)for(var e=Object.keys(this.connections),t=0,o=e.length;t<o;t++)this._cleanupPeer(e[t]);this.emit("close")},s.prototype._cleanupPeer=function(e){for(var t=this.connections[e],o=0,n=t.length;o<n;o+=1)t[o].close()},s.prototype.disconnect=function(){var t=this;e.util.setZeroTimeout(function(){t.disconnected||(t.disconnected=!0,t.open=!1,t.socket&&t.socket.close(),t.emit("disconnected",t.id),t._lastServerId=t.id,t.id=null)})},s.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)e.util.log("Attempting reconnection to server with ID "+this._lastServerId),this.disconnected=!1,this._initializeServerConnection(),this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");e.util.error("In a hurry? We're still trying to make the initial connection!")}},s.prototype.listAllPeers=function(t){t=t||function(){};var o=this,n=new XMLHttpRequest,i=(this.options.secure?"https://":"http://")+this.options.host+":"+this.options.port+this.options.path+this.options.key+"/peers";i+="?ts="+(new Date).getTime()+Math.random(),n.open("get",i,!0),n.onerror=function(e){o._abort("server-error","Could not get peers from the server."),t([])},n.onreadystatechange=function(){if(4===n.readyState){if(401===n.status){var i="";throw i=o.options.host!==e.util.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",t([]),new Error("It doesn't look like you have permission to list peers IDs. "+i)}200!==n.status?t([]):t(JSON.parse(n.responseText))}},n.send(null)};
},{"./util":"BHXf","eventemitter3":"2JJl","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ"}],"iTK6":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var i=require("./util"),n=require("./adapter"),o=require("./socket"),t=require("./mediaconnection"),r=require("./dataconnection"),a=require("./peer"),d=require("./negotiator"),c=e(require("js-binarypack"));window.Socket=o.Socket,window.MediaConnection=t.MediaConnection,window.DataConnection=r.DataConnection,window.Peer=a.Peer,window.RTCPeerConnection=n.RTCPeerConnection,window.RTCSessionDescription=n.RTCSessionDescription,window.RTCIceCandidate=n.RTCIceCandidate,window.Negotiator=d.Negotiator,window.util=i.util,window.BinaryPack=c.default,exports.default=a.Peer;
},{"./util":"BHXf","./adapter":"sXtV","./socket":"wJlv","./mediaconnection":"dbHP","./dataconnection":"GBTQ","./peer":"Hxpd","./negotiator":"HCdX","js-binarypack":"lHOc"}]},{},["iTK6"], null)
//# sourceMappingURL=/peerjs.min.map

/***/ }),

/***/ "./node_modules/randomcolor/randomColor.js":
/*!*************************************************!*\
  !*** ./node_modules/randomcolor/randomColor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else {}

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        // Since we're generating multiple colors,
        // incremement the seed. Otherwise we'd just
        // generate the same color each time...
        if (seed && options.seed) options.seed += 1;

        colors.push(randomColor(options));
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = String(data);
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
   true && module,    // present in node.js
  __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//

// Detect the global object, even if operating in strict mode.
// http://stackoverflow.com/a/14387057/265298
var global = (0, eval)('this'),
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ( true && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(/*! crypto */ 0);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/game/ball.ts":
/*!**************************!*\
  !*** ./src/game/ball.ts ***!
  \**************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/game/entity.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/game/player.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(x, y) {
        var _this = _super.call(this) || this;
        _this.radius = 20;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Ball.prototype.draw = function (ctx) {
        // let values = Object.values(this.collided_with)
        ctx.fillStyle = this.collidedWith ? this.collidedWith.colour : 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.collidedWith ? ctx.fill() : ctx.stroke();
        // let division = 2*Math.PI/values.length;
        // for (let i = 0; i < values.length; i++) {
        // 	ctx.fillStyle = values[i].colour
        // 	ctx.beginPath();
        // 	ctx.arc(this.x, this.y, this.radius, i*division, (i+1)*division);
        // 	ctx.fill();
        // }
    };
    Ball.prototype.collision_interaction = function (e2) {
        if (e2 instanceof _player__WEBPACK_IMPORTED_MODULE_1__["Player"] || e2 instanceof _player__WEBPACK_IMPORTED_MODULE_1__["OtherPlayer"]) {
            this.collidedWith = e2;
        }
    };
    return Ball;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));

// eslint-disable-next-line
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
applyMixins(Ball, [_entity__WEBPACK_IMPORTED_MODULE_0__["Movable"], _entity__WEBPACK_IMPORTED_MODULE_0__["ElasticCollision"], _entity__WEBPACK_IMPORTED_MODULE_0__["Collidable"]]);


/***/ }),

/***/ "./src/game/entity.ts":
/*!****************************!*\
  !*** ./src/game/entity.ts ***!
  \****************************/
/*! exports provided: Entity, Movable, Collidable, ElasticCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movable", function() { return Movable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collidable", function() { return Collidable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElasticCollision", function() { return ElasticCollision; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game/game.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Entity = /** @class */ (function () {
    function Entity() {
        this.id = -1;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.id = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].entity_id++;
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    Entity.prototype.update = function (canvas) { };
    Entity.prototype.draw = function (ctx) { };
    Entity.prototype.collides = function (e2) {
        return false;
    };
    Entity.prototype.collision = function (e2) { };
    Entity.prototype.collision_interaction = function (e2) { };
    return Entity;
}());

var Movable = /** @class */ (function (_super) {
    __extends(Movable, _super);
    function Movable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Movable.prototype.update = function (canvas) {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.995;
        this.vy *= 0.995;
        if (this.x < this.radius) {
            this.x = this.radius;
            this.vx = -this.vx * 0.9;
        }
        if (this.x > canvas.width - this.radius) {
            this.x = canvas.width - this.radius;
            this.vx = -this.vx * 0.9;
        }
        if (this.y < this.radius) {
            this.y = this.radius;
            this.vy = -this.vy * 0.9;
        }
        if (this.y > canvas.height - this.radius) {
            this.y = canvas.height - this.radius;
            this.vy = -this.vy * 0.9;
        }
    };
    return Movable;
}(Entity));

//TODO: This should be eventually replaced with Shapes
var Collidable = /** @class */ (function (_super) {
    __extends(Collidable, _super);
    function Collidable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collidable.prototype.collides = function (e2) {
        var dx = this.x - e2.x;
        var dy = this.y - e2.y;
        return Math.sqrt(dx * dx + dy * dy) < this.radius + e2.radius;
    };
    return Collidable;
}(Entity));

var ElasticCollision = /** @class */ (function (_super) {
    __extends(ElasticCollision, _super);
    function ElasticCollision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElasticCollision.prototype.collision = function (e2) {
        var dx = e2.x - this.x;
        var dy = e2.y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.radius + e2.radius) {
            var normalx = dx / distance;
            var normaly = dy / distance;
            var midx = (this.x + e2.x) / 2;
            var midy = (this.y + e2.y) / 2;
            this.x = midx - normalx * this.radius;
            this.y = midy - normaly * this.radius;
            e2.x = midx + normalx * e2.radius;
            e2.y = midy + normaly * e2.radius;
            var vdx = this.vx - e2.vx;
            var vdy = this.vy - e2.vy;
            var dot = vdx * normalx + vdy * normaly;
            var dvx = dot * normalx;
            var dvy = dot * normaly;
            this.vx -= dvx;
            this.vy -= dvy;
            e2.vx += dvx;
            e2.vy += dvy;
        }
    };
    return ElasticCollision;
}(Entity));



/***/ }),

/***/ "./src/game/game.ts":
/*!**************************!*\
  !*** ./src/game/game.ts ***!
  \**************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/game/player.ts");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/game/ball.ts");
/* harmony import */ var _network_unreliable_packets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network/unreliable_packets */ "./src/network/unreliable_packets.ts");
/* harmony import */ var _network_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network/buffer */ "./src/network/buffer.ts");
/* harmony import */ var _network_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../network/network */ "./src/network/network.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");






var Game = /** @class */ (function () {
    function Game() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    }
    Game.prototype.setup = function () {
        var _this = this;
        Game.game += 1;
        Game.frame = 0;
        Game.entity_id = 0;
        this.current_input = new _network_unreliable_packets__WEBPACK_IMPORTED_MODULE_2__["InputPacket"](0, Game.game, false, false, false, false);
        this.input_buffer = new _network_buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"]();
        this.old_input_buffer = new _network_buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"]();
        this.other_players = [];
        var sorted_mapping = Array.from(_network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].mapping.keys())
            .concat(_network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].local_id)
            .sort();
        var random_range = function (min, max) {
            return Math.floor(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["Random"])() * (max - min) + min);
        };
        for (var _i = 0, sorted_mapping_1 = sorted_mapping; _i < sorted_mapping_1.length; _i++) {
            var client = sorted_mapping_1[_i];
            console.log('Making player for', client);
            var x = random_range(_player__WEBPACK_IMPORTED_MODULE_0__["Player"].RADIUS, this.canvas.width - _player__WEBPACK_IMPORTED_MODULE_0__["Player"].RADIUS);
            var y = random_range(this.canvas.height / 2, this.canvas.height - _player__WEBPACK_IMPORTED_MODULE_0__["Player"].RADIUS);
            if (client === _network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].local_id)
                this.local_player = new _player__WEBPACK_IMPORTED_MODULE_0__["Player"](x, y);
            else
                this.other_players[_network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].mapping.get(client)] = new _player__WEBPACK_IMPORTED_MODULE_0__["OtherPlayer"](x, y);
        }
        this.entities = [];
        this.entities.push(this.local_player);
        this.entities = this.entities.concat(this.other_players);
        this.score_tallied = false;
        this.scores = new Map();
        for (var _a = 0, _b = this.entities; _a < _b.length; _a++) {
            var entity = _b[_a];
            this.scores.set(entity.id, 0);
        }
        this.max_scores = [-1];
        var sp = 2;
        var br = 20;
        var balls = [new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](400, 250)];
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x - br - sp, balls[0].y - br * 2));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x + br + sp, balls[0].y - br * 2));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x - br * 2 - sp, balls[0].y - br * 4));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x, balls[0].y - br * 4));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x + br * 2 + sp, balls[0].y - br * 4));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x - br - sp, balls[0].y - br * 6));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x - br * 3 - sp * 2, balls[0].y - br * 6));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x + br + sp, balls[0].y - br * 6));
        balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"](balls[0].x + br * 3 + sp * 2, balls[0].y - br * 6));
        this.balls = balls;
        this.entities = this.entities.concat(balls);
        window.onkeydown = function (e) {
            if (e.key === 'ArrowUp')
                _this.current_input.up = true;
            if (e.key === 'ArrowDown')
                _this.current_input.down = true;
            if (e.key === 'ArrowLeft')
                _this.current_input.left = true;
            if (e.key === 'ArrowRight')
                _this.current_input.right = true;
        };
        window.onkeyup = function (e) {
            if (e.key === 'ArrowUp')
                _this.current_input.up = false;
            if (e.key === 'ArrowDown')
                _this.current_input.down = false;
            if (e.key === 'ArrowLeft')
                _this.current_input.left = false;
            if (e.key === 'ArrowRight')
                _this.current_input.right = false;
        };
    };
    Game.prototype.simulate = function (other_inputs) {
        // console.log("Simulating frame: ", Game.frame)
        var v = this.input_buffer.popleft();
        var frame = Game.frame * Game.FPS;
        var start = Game.GAME_START_COUNTDOWN;
        var end = start + Game.GAME_END_COUNTDOWN;
        var restart = end + Game.GAME_END_SCORE_COUNTDOWN;
        if (frame <= start) {
            //Nothing interesting
        }
        else if (frame < end) {
            //Run the game
            this.local_player.input(v);
            for (var i = 0; i < other_inputs.length; i++)
                this.other_players[i].input(other_inputs[i]);
            this.update();
        }
        else if (frame <= restart) {
            //Tally the score
            if (!this.score_tallied) {
                this.score_tallied = true;
                for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
                    var ball = _a[_i];
                    if (!ball.collidedWith)
                        continue;
                    var score = this.scores.get(ball.collidedWith.id) + 1;
                    this.scores.set(ball.collidedWith.id, score);
                    if (score === this.max_scores[0]) {
                        this.max_scores.push();
                    }
                    else if (score > this.max_scores[0]) {
                        this.max_scores = [score];
                    }
                }
            }
        }
        else {
            //Restart the game
            _network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].reset();
            this.setup();
        }
        Game.frame++;
    };
    Game.prototype.update = function () {
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.update(this.canvas);
        }
        for (var _b = 0, _c = this.entities; _b < _c.length; _b++) {
            var entity = _c[_b];
            // Ignore players for the moment
            if (entity instanceof _player__WEBPACK_IMPORTED_MODULE_0__["Player"])
                continue;
            for (var _d = 0, _e = this.entities; _d < _e.length; _d++) {
                var other_entity = _e[_d];
                if (entity === other_entity)
                    continue;
                if (entity.collides(other_entity)) {
                    entity.collision(other_entity);
                    entity.collision_interaction(other_entity);
                }
            }
        }
    };
    Game.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.draw(this.ctx);
        }
        var hw = this.canvas.width / 2;
        var hh = this.canvas.height / 2;
        var frame = Game.frame * Game.FPS;
        var start = Game.GAME_START_COUNTDOWN;
        var end = start + Game.GAME_END_COUNTDOWN;
        var restart = end + Game.GAME_END_SCORE_COUNTDOWN;
        this.ctx.fillStyle = 'black';
        if (frame <= start) {
            var seconds = (start - frame) / 1000.0;
            this.ctx.textAlign = 'center';
            this.ctx.font = '32px Ubuntu';
            this.ctx.fillText("Game will start in " + seconds.toFixed(2) + " seconds", hw, hh);
        }
        else if (frame <= end) {
            var seconds = (end - frame) / 1000.0;
            this.ctx.textAlign = 'left';
            this.ctx.font = '16px Ubuntu';
            this.ctx.fillText("Game will end in " + seconds.toFixed(2) + " seconds", 20, 30);
        }
        else {
            this.ctx.textAlign = 'center';
            this.ctx.font = '32px Ubuntu';
            if (this.max_scores.length > 1) {
                this.ctx.fillText('You Tied!', hw, hh);
            }
            else if (this.scores.get(this.local_player.id) == this.max_scores[0]) {
                this.ctx.fillText('You WON!', hw, hh);
            }
            else {
                this.ctx.fillText("You Lost :'(", hw, hh);
            }
            var seconds = (restart - frame) / 1000.0;
            this.ctx.fillText("Game will restart in " + seconds.toFixed(2) + " seconds", hw, hh + 40);
            this.ctx.textAlign = 'left';
            this.ctx.font = '16px Ubuntu';
            var _loop_1 = function (i) {
                var y = hh + 70 + 30 * i;
                var key = Array.from(this_1.scores.keys())[i];
                var score = this_1.scores.get(key);
                var entity = this_1.entities.find(function (e) { return e.id === key; });
                this_1.ctx.fillStyle = entity.colour;
                this_1.ctx.beginPath();
                this_1.ctx.arc(hw - 70, y, 10, 0, 2 * Math.PI);
                this_1.ctx.stroke();
                this_1.ctx.fill();
                this_1.ctx.fillText("- had a score of " + score, hw - 50, y + 5);
            };
            var this_1 = this;
            for (var i = 0; i < this.scores.size; i++) {
                _loop_1(i);
            }
        }
    };
    Game.prototype.add_input = function () {
        if (this.input_buffer.length() < _network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].BUFFER_SIZE) {
            // console.log('Adding frame:', this.current_input.raw())
            var input_copy = Object.create(this.current_input);
            input_copy = Object.assign(input_copy, this.current_input);
            this.input_buffer.add(input_copy);
            var input_copy2 = Object.create(this.current_input);
            input_copy2 = Object.assign(input_copy2, this.current_input);
            this.old_input_buffer.add(input_copy2);
            this.current_input.frame++;
        }
    };
    Game.FPS = Math.floor(1000 / 60);
    Game.GAME_START_COUNTDOWN = 3000;
    Game.GAME_END_COUNTDOWN = 10000;
    Game.GAME_END_SCORE_COUNTDOWN = 2000;
    //TODO: Make this not a static variable?
    Game.game = 0;
    return Game;
}());



/***/ }),

/***/ "./src/game/game_testing.ts":
/*!**********************************!*\
  !*** ./src/game/game_testing.ts ***!
  \**********************************/
/*! exports provided: GameTesting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTesting", function() { return GameTesting; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game/game.ts");
/* harmony import */ var _network_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/network */ "./src/network/network.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GameTesting = /** @class */ (function (_super) {
    __extends(GameTesting, _super);
    function GameTesting() {
        var _this = _super.call(this) || this;
        _this.canvas = Object.create(HTMLCanvasElement);
        _this.canvas.width = 800;
        _this.canvas.height = 700;
        return _this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    GameTesting.prototype.simulate = function (_) {
        this.input_buffer.popleft();
        var frame = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].frame * _game__WEBPACK_IMPORTED_MODULE_0__["Game"].FPS;
        var start = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].GAME_START_COUNTDOWN;
        var end = start + _game__WEBPACK_IMPORTED_MODULE_0__["Game"].GAME_END_COUNTDOWN;
        var restart = end + _game__WEBPACK_IMPORTED_MODULE_0__["Game"].GAME_END_SCORE_COUNTDOWN;
        if (frame > restart) {
            //Restart the game
            _network_network__WEBPACK_IMPORTED_MODULE_1__["Network"].reset();
            this.setup();
        }
        _game__WEBPACK_IMPORTED_MODULE_0__["Game"].frame++;
    };
    GameTesting.prototype.draw = function () { };
    return GameTesting;
}(_game__WEBPACK_IMPORTED_MODULE_0__["Game"]));



/***/ }),

/***/ "./src/game/player.ts":
/*!****************************!*\
  !*** ./src/game/player.ts ***!
  \****************************/
/*! exports provided: Player, OtherPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherPlayer", function() { return OtherPlayer; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/game/entity.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(x, y) {
        var _this = _super.call(this) || this;
        _this.radius = Player.RADIUS;
        _this.speed = 0.5;
        _this.x = x;
        _this.y = y;
        _this.colour = randomcolor__WEBPACK_IMPORTED_MODULE_2___default()({ luminosity: 'dark', seed: _utils__WEBPACK_IMPORTED_MODULE_1__["Random"].int32() });
        return _this;
    }
    Player.prototype.input = function (i) {
        if (i.up)
            this.vy -= this.speed;
        if (i.down)
            this.vy += this.speed;
        if (i.left)
            this.vx -= this.speed;
        if (i.right)
            this.vx += this.speed;
    };
    Player.prototype.draw = function (ctx) {
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    };
    Player.RADIUS = 20;
    return Player;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));

var OtherPlayer = /** @class */ (function (_super) {
    __extends(OtherPlayer, _super);
    function OtherPlayer(x, y) {
        return _super.call(this, x, y) || this;
    }
    return OtherPlayer;
}(Player));

// eslint-disable-next-line
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
applyMixins(Player, [_entity__WEBPACK_IMPORTED_MODULE_0__["Movable"], _entity__WEBPACK_IMPORTED_MODULE_0__["ElasticCollision"], _entity__WEBPACK_IMPORTED_MODULE_0__["Collidable"]]);
applyMixins(OtherPlayer, [_entity__WEBPACK_IMPORTED_MODULE_0__["Movable"], _entity__WEBPACK_IMPORTED_MODULE_0__["ElasticCollision"], _entity__WEBPACK_IMPORTED_MODULE_0__["Collidable"]]);


/***/ }),

/***/ "./src/network/buffer.ts":
/*!*******************************!*\
  !*** ./src/network/buffer.ts ***!
  \*******************************/
/*! exports provided: Buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffer", function() { return Buffer; });
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network */ "./src/network/network.ts");

var Buffer = /** @class */ (function () {
    function Buffer() {
        this.buffer = [];
        this.filled = false;
    }
    Buffer.prototype.items = function () {
        return this.buffer;
    };
    Buffer.prototype.length = function () {
        return this.buffer.length;
    };
    Buffer.prototype.clear = function () {
        this.buffer = [];
        this.filled = false;
    };
    Buffer.prototype.add = function (data) {
        //TODO: Replace this with a more efficient SortedSet
        if (!this.buffer.map(function (v) { return v.frame; }).includes(data.frame))
            this.buffer.push(data);
        this.buffer = this.buffer.sort(function (a, b) { return a.frame - b.frame; });
        if (this.buffer.length > _network__WEBPACK_IMPORTED_MODULE_0__["Network"].BUFFER_SIZE)
            this.filled = true;
    };
    //TODO: Replace this with a more efficient method
    Buffer.prototype.find_lowest = function (game_frame) {
        if (this.buffer.length <= 0)
            throw 'Buffer is empty, when trying to find lowest';
        for (var i = 0; i < this.buffer.length; i++) {
            if (this.buffer[i].frame != game_frame + i) {
                return game_frame + i;
            }
        }
        return this.buffer[this.buffer.length - 1].frame + 1;
    };
    Buffer.prototype.remove_old = function (frame) {
        var index = this.buffer.findIndex(function (v) { return v.frame === frame; });
        if (index === -1)
            return; // We haven't generated this frame yet
        // console.log(`Found frame:`, frame)
        // console.log(`Removing ${index} packets`)
        // console.log(this.buffer.map(v => v.frame).join())
        this.buffer.splice(0, index);
    };
    Buffer.prototype.popleft = function () {
        return this.buffer.shift();
    };
    Buffer.prototype.popright = function () {
        return this.buffer.pop();
    };
    Buffer.prototype.peek = function () {
        return this.buffer[0];
    };
    return Buffer;
}());



/***/ }),

/***/ "./src/network/network.ts":
/*!********************************!*\
  !*** ./src/network/network.ts ***!
  \********************************/
/*! exports provided: Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./src/network/buffer.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/game */ "./src/game/game.ts");
/* harmony import */ var _reliable_packets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reliable_packets */ "./src/network/reliable_packets.ts");
/* harmony import */ var _unreliable_packets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unreliable_packets */ "./src/network/unreliable_packets.ts");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/dist/peerjs.min.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var peer = new peerjs__WEBPACK_IMPORTED_MODULE_4___default.a(null);
var Network = /** @class */ (function () {
    function Network() {
    }
    Network.reset = function () {
        this.frame_we_are_missing = [];
        this.frame_they_are_missing = [];
        for (var _i = 0, _a = this.buffers; _i < _a.length; _i++) {
            var buffer = _a[_i];
            buffer.clear();
            this.frame_we_are_missing.push(0);
            this.frame_they_are_missing.push(0);
        }
    };
    Network.open_socket = function () {
        return new Promise(function (resolve) {
            peer.on('open', function (id) {
                console.log('My peer id is: ' + id);
                Network.local_id = id;
                resolve(id);
            });
            peer.on('connection', Network.connection_opened);
        });
    };
    Network.connection_setup = function (peer_id) {
        return new Promise(function (resolve) {
            Network.mapping.set(peer_id, Network.index++);
            Network.buffers.push(new _buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"]());
            Network.frame_we_are_missing.push(0);
            Network.frame_they_are_missing.push(0);
            resolve();
        });
    };
    Network.connection_opened = function (conn) {
        console.log((conn.reliable ? 'Reliable' : 'Unreliable') + " Connection opened with " + conn.peer);
        var index = Network.mapping.get(conn.peer);
        if (index === undefined) {
            index = Network.index;
            Network.connection_setup(conn.peer);
            // Javascript is weird (let a = []; a[2] = 4; a == [empty,empty,4])
            // Network.reliable_connections.push(null)
            // Network.unreliable_connections.push(null)
        }
        if (conn.reliable) {
            // Network.reliable_connections[index] = conn
            Network.reliable_connections.push(conn); //[index] = conn
            conn.on('open', function () {
                conn.on('data', function (data) {
                    Network.receive_reliable(conn.peer, data);
                });
                // Tell the other client about all the others clients we are connected to
                if (Network.reliable_connections.length - 1 > 0) {
                    var packet = new _reliable_packets__WEBPACK_IMPORTED_MODULE_2__["OtherClientsPacket"](Network.reliable_connections.slice(0, -1).map(function (e) { return e.peer; }));
                    conn.send(packet.raw());
                }
            });
        }
        else {
            Network.unreliable_connections.push(conn);
            conn.on('open', function () {
                conn.on('data', function (data) {
                    Network.receive_unreliable(conn.peer, data);
                });
            });
        }
    };
    Network.full_connect = function (peer_id) {
        console.log("Making a connection with " + peer_id);
        if (Network.local_id === peer_id) {
            console.log('Trying to make a connection with ourself');
            return;
        }
        if (Network.mapping.has(peer_id)) {
            console.log("Network connection with " + peer_id + " already opened");
            return;
        }
        Network.connection_setup(peer_id)
            .then(function () { return Network.open_reliable(peer_id); })
            .then(function () { return Network.open_unreliable(peer_id); })
            .then(function () { return console.log("Connection made with " + peer_id); })
            .catch(function () {
            console.log("Unable to make connection made with " + peer_id);
            Network.mapping.delete(peer_id);
            Network.index--;
        });
    };
    Network.open_reliable = function (peer_id) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var conn;
            return __generator(this, function (_a) {
                conn = peer.connect(peer_id, { reliable: true });
                conn.on('open', function () {
                    Network.reliable_connections.push(conn);
                    conn.on('data', function (data) {
                        Network.receive_reliable(conn.peer, data);
                    });
                    resolve();
                });
                conn.on('error', function (error) {
                    throw new Error("Unable to make reliable connection: " + error);
                });
                return [2 /*return*/];
            });
        }); });
    };
    Network.open_unreliable = function (peer_id) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var conn;
            return __generator(this, function (_a) {
                conn = peer.connect(peer_id);
                conn.on('open', function () {
                    Network.unreliable_connections.push(conn);
                    conn.on('data', function (data) {
                        Network.receive_unreliable(conn.peer, data);
                    });
                    resolve();
                });
                conn.on('error', function (error) {
                    throw new Error("Unable to make unreliable connection: " + error);
                });
                return [2 /*return*/];
            });
        }); });
    };
    Network.receive_reliable = function (peer_id, data) {
        console.log('Received reliable: ', data);
        data = _reliable_packets__WEBPACK_IMPORTED_MODULE_2__["ReliablePacket"].convert(data);
        if (data instanceof _reliable_packets__WEBPACK_IMPORTED_MODULE_2__["OtherClientsPacket"]) {
            for (var _i = 0, _a = data.others; _i < _a.length; _i++) {
                var peer_id_1 = _a[_i];
                Network.full_connect(peer_id_1);
            }
        }
        for (var _b = 0, _c = Network.reliable_callbacks; _b < _c.length; _b++) {
            var callback = _c[_b];
            callback(peer_id, data);
        }
    };
    Network.receive_unreliable = function (peer_id, data) {
        data = _unreliable_packets__WEBPACK_IMPORTED_MODULE_3__["UnreliablePacket"].convert(data);
        if (data instanceof _unreliable_packets__WEBPACK_IMPORTED_MODULE_3__["InputPacket"]) {
            if (data.game < _game_game__WEBPACK_IMPORTED_MODULE_1__["Game"].game)
                return;
            if (data.frame < _game_game__WEBPACK_IMPORTED_MODULE_1__["Game"].frame)
                return;
            var index = Network.mapping.get(peer_id);
            var buffer = Network.buffers[index];
            buffer.add(data);
            Network.frame_we_are_missing[index] = buffer.find_lowest(_game_game__WEBPACK_IMPORTED_MODULE_1__["Game"].frame);
        }
        else if (data instanceof _unreliable_packets__WEBPACK_IMPORTED_MODULE_3__["AckPacket"]) {
            //TODO: We should come up with a better system of removing old packets
            var index = Network.mapping.get(peer_id);
            var v = Network.frame_they_are_missing[index];
            if (v === data.ack)
                Network.frame_they_are_missing[index] += 1;
        }
        for (var _i = 0, _a = Network.unreliable_callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(peer_id, data);
        }
    };
    Network.send_all_reliable = function (data) {
        var raw_data = data.raw();
        for (var _i = 0, _a = Network.reliable_connections; _i < _a.length; _i++) {
            var conn = _a[_i];
            //TODO: Find out why the connection is not stabilizing here
            if (conn)
                conn.send(raw_data);
        }
    };
    Network.send_input_buffer = function (buffer, packet_loss) {
        if (packet_loss === void 0) { packet_loss = 0; }
        var data = buffer.items().map(function (v) { return v.raw(); });
        for (var index = 0; index < Network.unreliable_connections.length; index++) {
            var conn = Network.unreliable_connections[index];
            var lowest_ack = Network.frame_they_are_missing[index];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var input = data_1[_i];
                if (input.frame >= lowest_ack) {
                    if (Math.random() >= packet_loss)
                        conn.send(input);
                    else
                        console.log('Simulating a lost packet');
                }
            }
            var lowest_frame = Network.frame_we_are_missing[index] || 0;
            conn.send(new _unreliable_packets__WEBPACK_IMPORTED_MODULE_3__["AckPacket"](lowest_frame).raw());
        }
        // console.log(Network.frame_they_are_missing.join())
        var lowest_frame_r = Math.min.apply(Math, Network.frame_they_are_missing);
        buffer.remove_old(lowest_frame_r);
    };
    Network.BUFFER_SIZE = 8;
    Network.RETRY_AMOUNT = 5;
    Network.reliable_callbacks = [];
    Network.unreliable_callbacks = [];
    Network.mapping = new Map();
    Network.index = 0;
    Network.buffers = [];
    Network.reliable_connections = [];
    Network.unreliable_connections = [];
    Network.frame_we_are_missing = [];
    Network.frame_they_are_missing = [];
    return Network;
}());



/***/ }),

/***/ "./src/network/reliable_packets.ts":
/*!*****************************************!*\
  !*** ./src/network/reliable_packets.ts ***!
  \*****************************************/
/*! exports provided: ReliablePacket, StartPacket, PlayerPacket, OtherClientsPacket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReliablePacket", function() { return ReliablePacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPacket", function() { return StartPacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPacket", function() { return PlayerPacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherClientsPacket", function() { return OtherClientsPacket; });
/* harmony import */ var _reliable_packets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reliable_packets */ "./src/network/reliable_packets.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-parameter-properties */
var ReliablePacket = /** @class */ (function () {
    function ReliablePacket() {
    }
    ReliablePacket.prototype.raw = function () {
        return Object.assign({ type: this.constructor.name }, this);
    };
    ReliablePacket.convert = function (data) {
        var object = Object.create(_reliable_packets__WEBPACK_IMPORTED_MODULE_0__[data.type].prototype);
        return Object.assign(object, data);
    };
    return ReliablePacket;
}());

var StartPacket = /** @class */ (function (_super) {
    __extends(StartPacket, _super);
    function StartPacket(seed) {
        var _this = _super.call(this) || this;
        _this.seed = seed;
        return _this;
    }
    return StartPacket;
}(ReliablePacket));

var PlayerPacket = /** @class */ (function (_super) {
    __extends(PlayerPacket, _super);
    function PlayerPacket() {
        return _super.call(this) || this;
    }
    return PlayerPacket;
}(ReliablePacket));

var OtherClientsPacket = /** @class */ (function (_super) {
    __extends(OtherClientsPacket, _super);
    function OtherClientsPacket(others) {
        var _this = _super.call(this) || this;
        _this.others = others;
        return _this;
    }
    return OtherClientsPacket;
}(ReliablePacket));



/***/ }),

/***/ "./src/network/unreliable_packets.ts":
/*!*******************************************!*\
  !*** ./src/network/unreliable_packets.ts ***!
  \*******************************************/
/*! exports provided: UnreliablePacket, InputPacket, AckPacket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreliablePacket", function() { return UnreliablePacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPacket", function() { return InputPacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AckPacket", function() { return AckPacket; });
/* harmony import */ var _unreliable_packets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unreliable_packets */ "./src/network/unreliable_packets.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-parameter-properties */
var UnreliablePacket = /** @class */ (function () {
    function UnreliablePacket() {
    }
    UnreliablePacket.prototype.raw = function () {
        return Object.assign({ type: this.constructor.name }, this);
    };
    UnreliablePacket.convert = function (data) {
        var object = Object.create(_unreliable_packets__WEBPACK_IMPORTED_MODULE_0__[data.type].prototype);
        return Object.assign(object, data);
    };
    return UnreliablePacket;
}());

var InputPacket = /** @class */ (function (_super) {
    __extends(InputPacket, _super);
    function InputPacket(frame, game, up, down, left, right) {
        var _this = _super.call(this) || this;
        _this.frame = frame;
        _this.game = game;
        _this.up = up;
        _this.down = down;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    return InputPacket;
}(UnreliablePacket));

var AckPacket = /** @class */ (function (_super) {
    __extends(AckPacket, _super);
    function AckPacket(ack) {
        var _this = _super.call(this) || this;
        _this.ack = ack;
        return _this;
    }
    return AckPacket;
}(UnreliablePacket));



/***/ }),

/***/ "./src/testing.ts":
/*!************************!*\
  !*** ./src/testing.ts ***!
  \************************/
/*! exports provided: Random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/* harmony import */ var _network_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network/network */ "./src/network/network.ts");
/* harmony import */ var _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network/reliable_packets */ "./src/network/reliable_packets.ts");
/* harmony import */ var _game_game_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game_testing */ "./src/game/game_testing.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game */ "./src/game/game.ts");





var Random;
console.log('Starting up');
_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].open_socket();
var connect_button = document.getElementById('connect-button');
connect_button.addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].full_connect(textbox.value.trim());
});
var game = new _game_game_testing__WEBPACK_IMPORTED_MODULE_2__["GameTesting"]();
var loop = function () {
    setTimeout(function () {
        game.add_input();
        _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].send_input_buffer(game.old_input_buffer);
        if (_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].buffers.map(function (b) { return b.peek(); }).every(function (v) { return v && v.frame === _game_game__WEBPACK_IMPORTED_MODULE_4__["Game"].frame; })) {
            game.simulate(_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].buffers.map(function (b) { return b.popleft(); }));
        }
        window.requestAnimationFrame(loop);
    }, _game_game__WEBPACK_IMPORTED_MODULE_4__["Game"].FPS);
};
var other_players = 0;
var setup_not_run = true;
_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].reliable_callbacks.push(function (_, data) {
    if (data instanceof _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__["StartPacket"]) {
        console.log('Received start command with seed:', data.seed);
        _utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].set_random_seed(data.seed);
        //Acknowledge receiving the start packet
        _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].send_all_reliable(new _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__["PlayerPacket"]());
    }
    else if (data instanceof _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__["PlayerPacket"]) {
        console.log('Received PlayerPacket acknowledgement command');
        other_players += 1;
        // We have got everyones elses positions, now we can start the game
        if (other_players >= _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].mapping.size && setup_not_run) {
            setup_not_run = false;
            game.setup();
            loop();
        }
    }
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: Random, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Random", function() { return Random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_0__);

var Random;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.set_random_seed = function (seed) {
        Random = seedrandom__WEBPACK_IMPORTED_MODULE_0___default()(seed);
    };
    return Utils;
}());



/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlZXJqcy9kaXN0IHN5bmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlZXJqcy9kaXN0L3BlZXJqcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhbmRvbWNvbG9yL3JhbmRvbUNvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi9hbGVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi90eWNoZWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yNDA5Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yc2hpZnQ3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vc2VlZHJhbmRvbS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWVfdGVzdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvYnVmZmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL25ldHdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvcmVsaWFibGVfcGFja2V0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29yay91bnJlbGlhYmxlX3BhY2tldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLHFFOzs7Ozs7Ozs7OztBQ1JBLDRDQUFnQyw0RkFBNEYsZ0JB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Qzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsNEJBQTRCOztBQUUvQztBQUNB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S0FBbUIsVUFBYSxFQUFiLFNBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWE7WUFBM0IsSUFBSSxNQUFNO1lBQW1CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQUE7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLElBQUksRUFBRSxHQUFHLENBQUM7UUFDVixJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLDBDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFM0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxXQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTO2dCQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLElBQUk7WUFDckQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFdBQVc7Z0JBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUN6RCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssV0FBVztnQkFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ3pELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxZQUFZO2dCQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUk7UUFDNUQsQ0FBQztRQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUztnQkFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxLQUFLO1lBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxXQUFXO2dCQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUs7WUFDMUQsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFdBQVc7Z0JBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSztZQUMxRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssWUFBWTtnQkFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQzdELENBQUM7SUFDRixDQUFDO0lBRU0sdUJBQVEsR0FBZixVQUFnQixZQUEyQjtRQUMxQyxnREFBZ0Q7UUFFaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7UUFFbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3JDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCO1FBQ3pDLElBQUksT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsd0JBQXdCO1FBRWpELElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtZQUNuQixxQkFBcUI7U0FDckI7YUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDdkIsY0FBYztZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDYjthQUFNLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUM1QixpQkFBaUI7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFpQixVQUFVLEVBQVYsU0FBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVSxFQUFFO29CQUF4QixJQUFJLElBQUk7b0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO3dCQUFFLFNBQVE7b0JBRWhDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO29CQUM1QyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtxQkFDdEI7eUJBQU0sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQztxQkFDekI7aUJBQ0Q7YUFDRDtTQUNEO2FBQU07WUFDTixrQkFBa0I7WUFDbEIsd0RBQU8sQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxFQUFFO1NBQ1o7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO0lBQ2IsQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFDQyxLQUFtQixVQUFhLEVBQWIsU0FBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYTtZQUEzQixJQUFJLE1BQU07WUFBbUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQUE7UUFFNUQsS0FBbUIsVUFBYSxFQUFiLFNBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWEsRUFBRTtZQUE3QixJQUFJLE1BQU07WUFDZCxnQ0FBZ0M7WUFDaEMsSUFBSSxNQUFNLFlBQVksOENBQU07Z0JBQUUsU0FBUTtZQUV0QyxLQUF5QixVQUFhLEVBQWIsU0FBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO2dCQUFuQyxJQUFJLFlBQVk7Z0JBQ3BCLElBQUksTUFBTSxLQUFLLFlBQVk7b0JBQUUsU0FBUTtnQkFDckMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztvQkFDOUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQztpQkFDMUM7YUFDRDtTQUNEO0lBQ0YsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRS9ELEtBQW1CLFVBQWEsRUFBYixTQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO1lBQTNCLElBQUksTUFBTTtZQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FBQTtRQUV2RCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQzlCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7UUFFL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRztRQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CO1FBQ3JDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCO1FBQ3pDLElBQUksT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsd0JBQXdCO1FBRWpELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU87UUFDNUIsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ25CLElBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU07WUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUTtZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxhQUFhO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLHdCQUFzQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUM3RTthQUFNLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUN4QixJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU07WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsYUFBYTtZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxzQkFBb0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDM0U7YUFBTTtZQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVE7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsYUFBYTtZQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3pDO1lBRUQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsTUFBTTtZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQywwQkFBd0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBRXBGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU07WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsYUFBYTtvQ0FDcEIsQ0FBQztnQkFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUN4QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQUssTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEtBQUssR0FBRyxPQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxJQUFJLE1BQU0sR0FBRyxPQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFaLENBQVksQ0FBVztnQkFFNUQsT0FBSyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNO2dCQUNsQyxPQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLE9BQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUM1QyxPQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQUssR0FBRyxDQUFDLElBQUksRUFBRTtnQkFFZixPQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsc0JBQW9CLEtBQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7OztZQVovRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO3dCQUFoQyxDQUFDO2FBYVQ7U0FDRDtJQUNGLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyx3REFBTyxDQUFDLFdBQVcsRUFBRTtZQUNyRCx5REFBeUQ7WUFDekQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2xELFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUVqQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbkQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFFdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7U0FDMUI7SUFDRixDQUFDO0lBaE9hLFFBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0IseUJBQW9CLEdBQUcsSUFBSTtJQUMzQix1QkFBa0IsR0FBRyxLQUFLO0lBQzFCLDZCQUF3QixHQUFHLElBQUk7SUFFN0Msd0NBQXdDO0lBQzFCLFNBQUksR0FBVyxDQUFDLENBQUM7SUEyTmhDLFdBQUM7Q0FBQTtBQWxPZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JhO0FBQ2U7QUFHN0M7SUFBaUMsK0JBQUk7SUFFcEM7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFIQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOztJQUMxQixDQUFDO0lBRUQsNkRBQTZEO0lBQ3RELDhCQUFRLEdBQWYsVUFBZ0IsQ0FBZ0I7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7UUFFM0IsSUFBSSxLQUFLLEdBQUcsMENBQUksQ0FBQyxLQUFLLEdBQUcsMENBQUksQ0FBQyxHQUFHO1FBQ2pDLElBQUksS0FBSyxHQUFHLDBDQUFJLENBQUMsb0JBQW9CO1FBQ3JDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRywwQ0FBSSxDQUFDLGtCQUFrQjtRQUN6QyxJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsMENBQUksQ0FBQyx3QkFBd0I7UUFFakQsSUFBSSxLQUFLLEdBQUcsT0FBTyxFQUFFO1lBQ3BCLGtCQUFrQjtZQUNsQix3REFBTyxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEVBQUU7U0FDWjtRQUVELDBDQUFJLENBQUMsS0FBSyxFQUFFO0lBQ2IsQ0FBQztJQUVNLDBCQUFJLEdBQVgsY0FBcUIsQ0FBQztJQUN2QixrQkFBQztBQUFELENBQUMsQ0E1QmdDLDBDQUFJLEdBNEJwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDdUU7QUFFdkM7QUFDSTtBQUVyQztJQUE0QiwwQkFBTTtJQU9qQyxnQkFBbUIsQ0FBUyxFQUFFLENBQVM7UUFBdkMsWUFDQyxpQkFBTyxTQUlQO1FBVE0sWUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNO1FBQ3RCLFdBQUssR0FBRyxHQUFHO1FBS2pCLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLEtBQUksQ0FBQyxNQUFNLEdBQUcsa0RBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDZDQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQzs7SUFDeEUsQ0FBQztJQUVNLHNCQUFLLEdBQVosVUFBYSxDQUFjO1FBQzFCLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQy9CLElBQUksQ0FBQyxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLO0lBQ25DLENBQUM7SUFFTSxxQkFBSSxHQUFYLFVBQVksR0FBNkI7UUFDeEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUMzQixHQUFHLENBQUMsU0FBUyxFQUFFO1FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEQsR0FBRyxDQUFDLElBQUksRUFBRTtJQUNYLENBQUM7SUF6QmEsYUFBTSxHQUFHLEVBQUU7SUEwQjFCLGFBQUM7Q0FBQSxDQTNCMkIsOENBQU0sR0EyQmpDO0FBM0JrQjtBQTZCbkI7SUFBaUMsK0JBQU07SUFDdEMscUJBQW1CLENBQVMsRUFBRSxDQUFTO2VBQ3RDLGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLENBSmdDLE1BQU0sR0FJdEM7O0FBRUQsMkJBQTJCO0FBQzNCLFNBQVMsV0FBVyxDQUFDLFdBQWdCLEVBQUUsU0FBZ0I7SUFDdEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtRQUN6QixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQzFELE1BQU0sQ0FBQyxjQUFjLENBQ3BCLFdBQVcsQ0FBQyxTQUFTLEVBQ3JCLElBQUksRUFDSixNQUFNLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FDekQ7UUFDRixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSCxDQUFDO0FBQ0QsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLCtDQUFPLEVBQUUsd0RBQWdCLEVBQUUsa0RBQVUsQ0FBQyxDQUFDO0FBQzVELFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQywrQ0FBTyxFQUFFLHdEQUFnQixFQUFFLGtEQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JEakU7QUFBQTtBQUFBO0FBQW1DO0FBR25DO0lBSUM7UUFIUSxXQUFNLEdBQWtCLEVBQUU7UUFDM0IsV0FBTSxHQUFHLEtBQUs7SUFFQyxDQUFDO0lBRWhCLHNCQUFLLEdBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNO0lBQ25CLENBQUM7SUFFTSx1QkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07SUFDMUIsQ0FBQztJQUVNLHNCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO0lBQ3BCLENBQUM7SUFFTSxvQkFBRyxHQUFWLFVBQVcsSUFBaUI7UUFDM0Isb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxnREFBTyxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUk7SUFDakUsQ0FBQztJQUVELGlEQUFpRDtJQUMxQyw0QkFBVyxHQUFsQixVQUFtQixVQUFrQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxNQUFNLDZDQUE2QztRQUVoRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQyxPQUFPLFVBQVUsR0FBRyxDQUFDO2FBQ3JCO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDJCQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFqQixDQUFpQixDQUFDO1FBQ3pELElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxzQ0FBc0M7UUFFaEUscUNBQXFDO1FBQ3JDLDJDQUEyQztRQUMzQyxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sd0JBQU8sR0FBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDM0IsQ0FBQztJQUVNLHlCQUFRLEdBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO0lBQ3pCLENBQUM7SUFFTSxxQkFBSSxHQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0YsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEZ0M7QUFDRTtBQUNvQztBQUNRO0FBRXBEO0FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksNkNBQU0sQ0FBQyxJQUFJLENBQUM7QUFDM0I7SUFBQTtJQXdNQSxDQUFDO0lBdExjLGFBQUssR0FBbkI7UUFDQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRTtRQUM5QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRTtRQUNoQyxLQUFtQixVQUFZLEVBQVosU0FBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWSxFQUFFO1lBQTVCLElBQUksTUFBTTtZQUNkLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDRixDQUFDO0lBRWEsbUJBQVcsR0FBekI7UUFDQyxPQUFPLElBQUksT0FBTyxDQUFDLGlCQUFPO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBVTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRTtnQkFDckIsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRWMsd0JBQWdCLEdBQS9CLFVBQWdDLE9BQWU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxpQkFBTztZQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksOENBQU0sRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRWMseUJBQWlCLEdBQWhDLFVBQWlDLElBQW9CO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksaUNBQTJCLElBQUksQ0FBQyxJQUFNLENBQUM7UUFDL0YsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDeEIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1lBQ3JCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRW5DLG1FQUFtRTtZQUNuRSwwQ0FBMEM7WUFDMUMsNENBQTRDO1NBQzVDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLDZDQUE2QztZQUM3QyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO1lBQ3pELElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsSUFBb0I7b0JBQ3BDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDMUMsQ0FBQyxDQUFDO2dCQUVGLHlFQUF5RTtnQkFDekUsSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hELElBQUksTUFBTSxHQUFHLElBQUksb0VBQWtCLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7b0JBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN2QjtZQUNGLENBQUMsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQXNCO29CQUN0QyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQzVDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQztTQUNGO0lBQ0YsQ0FBQztJQUVhLG9CQUFZLEdBQTFCLFVBQTJCLE9BQWU7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBNEIsT0FBUyxDQUFDO1FBQ2xELElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQztZQUN2RCxPQUFNO1NBQ047UUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTJCLE9BQU8sb0JBQWlCLENBQUM7WUFDaEUsT0FBTTtTQUNOO1FBRUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzthQUMvQixJQUFJLENBQUMsY0FBTSxjQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixDQUFDO2FBQzFDLElBQUksQ0FBQyxjQUFNLGNBQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQWhDLENBQWdDLENBQUM7YUFDNUMsSUFBSSxDQUFDLGNBQU0sY0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsT0FBUyxDQUFDLEVBQTlDLENBQThDLENBQUM7YUFDMUQsS0FBSyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBdUMsT0FBUyxDQUFDO1lBQzdELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUMvQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVjLHFCQUFhLEdBQTVCLFVBQTZCLE9BQWU7UUFBNUMsaUJBY0M7UUFiQSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQU0sT0FBTzs7O2dCQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO29CQUNmLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQW9CO3dCQUNwQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7b0JBQzFDLENBQUMsQ0FBQztvQkFDRixPQUFPLEVBQUU7Z0JBQ1YsQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBYTtvQkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBdUMsS0FBTyxDQUFDO2dCQUNoRSxDQUFDLENBQUM7OzthQUNGLENBQUM7SUFDSCxDQUFDO0lBRWMsdUJBQWUsR0FBOUIsVUFBK0IsT0FBZTtRQUE5QyxpQkFjQztRQWJBLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBTSxPQUFPOzs7Z0JBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsSUFBc0I7d0JBQ3RDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztvQkFDNUMsQ0FBQyxDQUFDO29CQUNGLE9BQU8sRUFBRTtnQkFDVixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFhO29CQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUF5QyxLQUFPLENBQUM7Z0JBQ2xFLENBQUMsQ0FBQzs7O2FBQ0YsQ0FBQztJQUNILENBQUM7SUFFYyx3QkFBZ0IsR0FBL0IsVUFBZ0MsT0FBZSxFQUFFLElBQW9CO1FBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO1FBQ3hDLElBQUksR0FBRyxnRUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFbkMsSUFBSSxJQUFJLFlBQVksb0VBQWtCLEVBQUU7WUFDdkMsS0FBb0IsVUFBVyxFQUFYLFNBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVc7Z0JBQTFCLElBQUksU0FBTztnQkFBaUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFPLENBQUM7YUFBQTtTQUM5RDtRQUNELEtBQXFCLFVBQTBCLEVBQTFCLFlBQU8sQ0FBQyxrQkFBa0IsRUFBMUIsY0FBMEIsRUFBMUIsSUFBMEI7WUFBMUMsSUFBSSxRQUFRO1lBQWdDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQUE7SUFDekUsQ0FBQztJQUVjLDBCQUFrQixHQUFqQyxVQUFrQyxPQUFlLEVBQUUsSUFBc0I7UUFDeEUsSUFBSSxHQUFHLG9FQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBSSxJQUFJLFlBQVksK0RBQVcsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsK0NBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU07WUFDakMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLCtDQUFJLENBQUMsS0FBSztnQkFBRSxPQUFNO1lBRW5DLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNoQixPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQywrQ0FBSSxDQUFDLEtBQUssQ0FBQztTQUNwRTthQUFNLElBQUksSUFBSSxZQUFZLDZEQUFTLEVBQUU7WUFDckMsc0VBQXNFO1lBQ3RFLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHO2dCQUFFLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQzlEO1FBRUQsS0FBcUIsVUFBNEIsRUFBNUIsWUFBTyxDQUFDLG9CQUFvQixFQUE1QixjQUE0QixFQUE1QixJQUE0QjtZQUE1QyxJQUFJLFFBQVE7WUFBa0MsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7U0FBQTtJQUMzRSxDQUFDO0lBRWEseUJBQWlCLEdBQS9CLFVBQWdDLElBQW9CO1FBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDekIsS0FBaUIsVUFBNEIsRUFBNUIsWUFBTyxDQUFDLG9CQUFvQixFQUE1QixjQUE0QixFQUE1QixJQUE0QixFQUFFO1lBQTFDLElBQUksSUFBSTtZQUNaLDJEQUEyRDtZQUMzRCxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBRWEseUJBQWlCLEdBQS9CLFVBQWdDLE1BQWMsRUFBRSxXQUF1QjtRQUF2Qiw2Q0FBdUI7UUFFdEUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFQLENBQU8sQ0FBQztRQUMzQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzRSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1lBRWhELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7WUFDdEQsS0FBa0IsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtnQkFBbkIsSUFBSSxLQUFLO2dCQUNiLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxVQUFVLEVBQUU7b0JBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLFdBQVc7d0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O3dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO2lCQUM1QzthQUNEO1lBRUQsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDZEQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDNUM7UUFFRCxxREFBcUQ7UUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLEVBQVEsT0FBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO0lBQ2xDLENBQUM7SUF0TWEsbUJBQVcsR0FBRyxDQUFDO0lBQ2Ysb0JBQVksR0FBRyxDQUFDO0lBRWhCLDBCQUFrQixHQUFlLEVBQUU7SUFDbkMsNEJBQW9CLEdBQWUsRUFBRTtJQUNyQyxlQUFPLEdBQXdCLElBQUksR0FBRyxFQUFFO0lBRXZDLGFBQUssR0FBRyxDQUFDO0lBRVYsZUFBTyxHQUFhLEVBQUU7SUFFckIsNEJBQW9CLEdBQXFCLEVBQUU7SUFDM0MsOEJBQXNCLEdBQXFCLEVBQUU7SUFFN0MsNEJBQW9CLEdBQWEsRUFBRTtJQUNuQyw4QkFBc0IsR0FBYSxFQUFFO0lBd0xyRCxjQUFDO0NBQUE7QUF4TW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IyQjtBQUUvQyx1REFBdUQ7QUFDdkQsK0RBQStEO0FBQy9EO0lBQUE7SUFXQSxDQUFDO0lBUk8sNEJBQUcsR0FBVjtRQUNDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRWEsc0JBQU8sR0FBckIsVUFBc0IsSUFBb0I7UUFDekMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBRSw4Q0FBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ25FLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFDRixxQkFBQztBQUFELENBQUM7O0FBRUQ7SUFBaUMsK0JBQWM7SUFDOUMscUJBQTBCLElBQVk7UUFBdEMsWUFDQyxpQkFBTyxTQUNQO1FBRnlCLFVBQUksR0FBSixJQUFJLENBQVE7O0lBRXRDLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQ0FKZ0MsY0FBYyxHQUk5Qzs7QUFFRDtJQUFrQyxnQ0FBYztJQUMvQztlQUNDLGlCQUFPO0lBQ1IsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FBQyxDQUppQyxjQUFjLEdBSS9DOztBQUVEO0lBQXdDLHNDQUFjO0lBQ3JELDRCQUEwQixNQUFnQjtRQUExQyxZQUNDLGlCQUFPLFNBQ1A7UUFGeUIsWUFBTSxHQUFOLE1BQU0sQ0FBVTs7SUFFMUMsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxDQUp1QyxjQUFjLEdBSXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZ0Q7QUFFakQsdURBQXVEO0FBQ3ZELCtEQUErRDtBQUMvRDtJQUFBO0lBV0EsQ0FBQztJQVJPLDhCQUFHLEdBQVY7UUFDQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVhLHdCQUFPLEdBQXJCLFVBQXNCLElBQXNCO1FBQzNDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUUsZ0RBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNuRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDOztBQUVEO0lBQWlDLCtCQUFnQjtJQUNoRCxxQkFDUSxLQUFhLEVBQ2IsSUFBWSxFQUNaLEVBQVcsRUFDWCxJQUFhLEVBQ2IsSUFBYSxFQUNiLEtBQWM7UUFOdEIsWUFRQyxpQkFBTyxTQUNQO1FBUk8sV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixRQUFFLEdBQUYsRUFBRSxDQUFTO1FBQ1gsVUFBSSxHQUFKLElBQUksQ0FBUztRQUNiLFVBQUksR0FBSixJQUFJLENBQVM7UUFDYixXQUFLLEdBQUwsS0FBSyxDQUFTOztJQUd0QixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLENBWGdDLGdCQUFnQixHQVdoRDs7QUFFRDtJQUErQiw2QkFBZ0I7SUFDOUMsbUJBQTBCLEdBQVc7UUFBckMsWUFDQyxpQkFBTyxTQUNQO1FBRnlCLFNBQUcsR0FBSCxHQUFHLENBQVE7O0lBRXJDLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQ0FKOEIsZ0JBQWdCLEdBSTlDOzs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUMyQztBQUVwQztBQUNsQjtBQUNHO0FBRTVCLElBQUksTUFBdUI7QUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDMUIsd0RBQU8sQ0FBQyxXQUFXLEVBQUU7QUFDckIsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5RCxjQUFjLENBQUMsZ0JBQWdCLENBQzlCLE9BQU8sRUFDUDtJQUNDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFxQjtJQUNwRSx3REFBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNDLENBQUMsQ0FDRDtBQUVELElBQUksSUFBSSxHQUFHLElBQUksOERBQVcsRUFBRTtBQUM1QixJQUFJLElBQUksR0FBRztJQUNWLFVBQVUsQ0FBQztRQUNWLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDaEIsd0RBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFaEQsSUFBSSx3REFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLCtDQUFJLENBQUMsS0FBSyxFQUEzQixDQUEyQixDQUFDLEVBQUU7WUFDL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyx3REFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztTQUNwRDtRQUVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQyxFQUFFLCtDQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELElBQUksYUFBYSxHQUFHLENBQUM7QUFDckIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLHdEQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUyxFQUFFLElBQW9CO0lBQy9ELElBQUksSUFBSSxZQUFZLHFFQUFXLEVBQUU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNELDRDQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFaEMsd0NBQXdDO1FBQ3hDLHdEQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxzRUFBWSxFQUFFLENBQUM7S0FDN0M7U0FBTSxJQUFJLElBQUksWUFBWSxzRUFBWSxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUM7UUFFNUQsYUFBYSxJQUFJLENBQUM7UUFDbEIsbUVBQW1FO1FBQ25FLElBQUksYUFBYSxJQUFJLHdEQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDM0QsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxFQUFFO1NBQ047S0FDRDtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBRTdCLElBQUksTUFBdUIsQ0FBQztBQUVuQztJQUFBO0lBSUEsQ0FBQztJQUhpQixxQkFBZSxHQUE3QixVQUE4QixJQUFZO1FBQ3RDLE1BQU0sR0FBRyxpREFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JELGUiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Rlc3RpbmcudHNcIik7XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvcGVlcmpzL2Rpc3Qgc3luYyByZWN1cnNpdmVcIjsiLCJwYXJjZWxSZXF1aXJlPWZ1bmN0aW9uKGUscixuLHQpe3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHBhcmNlbFJlcXVpcmUmJnBhcmNlbFJlcXVpcmUsbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2Z1bmN0aW9uIHUobix0KXtpZighcltuXSl7aWYoIWVbbl0pe3ZhciBmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHBhcmNlbFJlcXVpcmUmJnBhcmNlbFJlcXVpcmU7aWYoIXQmJmYpcmV0dXJuIGYobiwhMCk7aWYoaSlyZXR1cm4gaShuLCEwKTtpZihvJiZcInN0cmluZ1wiPT10eXBlb2YgbilyZXR1cm4gbyhuKTt2YXIgYz1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK24rXCInXCIpO3Rocm93IGMuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixjfXAucmVzb2x2ZT1mdW5jdGlvbihyKXtyZXR1cm4gZVtuXVsxXVtyXXx8cn0scC5jYWNoZT17fTt2YXIgbD1yW25dPW5ldyB1Lk1vZHVsZShuKTtlW25dWzBdLmNhbGwobC5leHBvcnRzLHAsbCxsLmV4cG9ydHMsdGhpcyl9cmV0dXJuIHJbbl0uZXhwb3J0cztmdW5jdGlvbiBwKGUpe3JldHVybiB1KHAucmVzb2x2ZShlKSl9fXUuaXNQYXJjZWxSZXF1aXJlPSEwLHUuTW9kdWxlPWZ1bmN0aW9uKGUpe3RoaXMuaWQ9ZSx0aGlzLmJ1bmRsZT11LHRoaXMuZXhwb3J0cz17fX0sdS5tb2R1bGVzPWUsdS5jYWNoZT1yLHUucGFyZW50PWksdS5yZWdpc3Rlcj1mdW5jdGlvbihyLG4pe2Vbcl09W2Z1bmN0aW9uKGUscil7ci5leHBvcnRzPW59LHt9XX07Zm9yKHZhciBmPTA7ZjxuLmxlbmd0aDtmKyspdShuW2ZdKTtpZihuLmxlbmd0aCl7dmFyIGM9dShuW24ubGVuZ3RoLTFdKTtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1jOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gY30pOnQmJih0aGlzW3RdPWMpfXJldHVybiB1fSh7XCJ2SG8xXCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcbnZhciBlPXt9O2UudXNlQmxvYkJ1aWxkZXI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBCbG9iKFtdKSwhMX1jYXRjaChlKXtyZXR1cm4hMH19KCksZS51c2VBcnJheUJ1ZmZlclZpZXc9IWUudXNlQmxvYkJ1aWxkZXImJmZ1bmN0aW9uKCl7dHJ5e3JldHVybiAwPT09bmV3IEJsb2IoW25ldyBVaW50OEFycmF5KFtdKV0pLnNpemV9Y2F0Y2goZSl7cmV0dXJuITB9fSgpLG1vZHVsZS5leHBvcnRzLmJpbmFyeUZlYXR1cmVzPWU7dmFyIHI9bW9kdWxlLmV4cG9ydHMuQmxvYkJ1aWxkZXI7ZnVuY3Rpb24gdCgpe3RoaXMuX3BpZWNlcz1bXSx0aGlzLl9wYXJ0cz1bXX1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYocj1tb2R1bGUuZXhwb3J0cy5CbG9iQnVpbGRlcj13aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXJ8fHdpbmRvdy5Nb3pCbG9iQnVpbGRlcnx8d2luZG93Lk1TQmxvYkJ1aWxkZXJ8fHdpbmRvdy5CbG9iQnVpbGRlciksdC5wcm90b3R5cGUuYXBwZW5kPWZ1bmN0aW9uKGUpe1wibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuX3BpZWNlcy5wdXNoKGUpOih0aGlzLmZsdXNoKCksdGhpcy5fcGFydHMucHVzaChlKSl9LHQucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7aWYodGhpcy5fcGllY2VzLmxlbmd0aD4wKXt2YXIgcj1uZXcgVWludDhBcnJheSh0aGlzLl9waWVjZXMpO2UudXNlQXJyYXlCdWZmZXJWaWV3fHwocj1yLmJ1ZmZlciksdGhpcy5fcGFydHMucHVzaChyKSx0aGlzLl9waWVjZXM9W119fSx0LnByb3RvdHlwZS5nZXRCdWZmZXI9ZnVuY3Rpb24oKXtpZih0aGlzLmZsdXNoKCksZS51c2VCbG9iQnVpbGRlcil7Zm9yKHZhciB0PW5ldyByLGk9MCx1PXRoaXMuX3BhcnRzLmxlbmd0aDtpPHU7aSsrKXQuYXBwZW5kKHRoaXMuX3BhcnRzW2ldKTtyZXR1cm4gdC5nZXRCbG9iKCl9cmV0dXJuIG5ldyBCbG9iKHRoaXMuX3BhcnRzKX0sbW9kdWxlLmV4cG9ydHMuQnVmZmVyQnVpbGRlcj10O1xufSx7fV0sXCJsSE9jXCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcbnZhciB0PXJlcXVpcmUoXCIuL2J1ZmZlcmJ1aWxkZXJcIikuQnVmZmVyQnVpbGRlcixlPXJlcXVpcmUoXCIuL2J1ZmZlcmJ1aWxkZXJcIikuYmluYXJ5RmVhdHVyZXMsaT17dW5wYWNrOmZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0KS51bnBhY2soKX0scGFjazpmdW5jdGlvbih0KXt2YXIgZT1uZXcgbjtyZXR1cm4gZS5wYWNrKHQpLGUuZ2V0QnVmZmVyKCl9fTtmdW5jdGlvbiByKHQpe3RoaXMuaW5kZXg9MCx0aGlzLmRhdGFCdWZmZXI9dCx0aGlzLmRhdGFWaWV3PW5ldyBVaW50OEFycmF5KHRoaXMuZGF0YUJ1ZmZlciksdGhpcy5sZW5ndGg9dGhpcy5kYXRhQnVmZmVyLmJ5dGVMZW5ndGh9ZnVuY3Rpb24gbigpe3RoaXMuYnVmZmVyQnVpbGRlcj1uZXcgdH1mdW5jdGlvbiB1KHQpe3ZhciBlPXQuY2hhckNvZGVBdCgwKTtyZXR1cm4gZTw9MjA0Nz9cIjAwXCI6ZTw9NjU1MzU/XCIwMDBcIjplPD0yMDk3MTUxP1wiMDAwMFwiOmU8PTY3MTA4ODYzP1wiMDAwMDBcIjpcIjAwMDAwMFwifWZ1bmN0aW9uIGEodCl7cmV0dXJuIHQubGVuZ3RoPjYwMD9uZXcgQmxvYihbdF0pLnNpemU6dC5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3Rl0vZyx1KS5sZW5ndGh9bW9kdWxlLmV4cG9ydHM9aSxyLnByb3RvdHlwZS51bnBhY2s9ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMudW5wYWNrX3VpbnQ4KCk7aWYoZTwxMjgpcmV0dXJuIGU7aWYoKDIyNF5lKTwzMilyZXR1cm4oMjI0XmUpLTMyO2lmKCh0PTE2MF5lKTw9MTUpcmV0dXJuIHRoaXMudW5wYWNrX3Jhdyh0KTtpZigodD0xNzZeZSk8PTE1KXJldHVybiB0aGlzLnVucGFja19zdHJpbmcodCk7aWYoKHQ9MTQ0XmUpPD0xNSlyZXR1cm4gdGhpcy51bnBhY2tfYXJyYXkodCk7aWYoKHQ9MTI4XmUpPD0xNSlyZXR1cm4gdGhpcy51bnBhY2tfbWFwKHQpO3N3aXRjaChlKXtjYXNlIDE5MjpyZXR1cm4gbnVsbDtjYXNlIDE5MzpyZXR1cm47Y2FzZSAxOTQ6cmV0dXJuITE7Y2FzZSAxOTU6cmV0dXJuITA7Y2FzZSAyMDI6cmV0dXJuIHRoaXMudW5wYWNrX2Zsb2F0KCk7Y2FzZSAyMDM6cmV0dXJuIHRoaXMudW5wYWNrX2RvdWJsZSgpO2Nhc2UgMjA0OnJldHVybiB0aGlzLnVucGFja191aW50OCgpO2Nhc2UgMjA1OnJldHVybiB0aGlzLnVucGFja191aW50MTYoKTtjYXNlIDIwNjpyZXR1cm4gdGhpcy51bnBhY2tfdWludDMyKCk7Y2FzZSAyMDc6cmV0dXJuIHRoaXMudW5wYWNrX3VpbnQ2NCgpO2Nhc2UgMjA4OnJldHVybiB0aGlzLnVucGFja19pbnQ4KCk7Y2FzZSAyMDk6cmV0dXJuIHRoaXMudW5wYWNrX2ludDE2KCk7Y2FzZSAyMTA6cmV0dXJuIHRoaXMudW5wYWNrX2ludDMyKCk7Y2FzZSAyMTE6cmV0dXJuIHRoaXMudW5wYWNrX2ludDY0KCk7Y2FzZSAyMTI6Y2FzZSAyMTM6Y2FzZSAyMTQ6Y2FzZSAyMTU6cmV0dXJuO2Nhc2UgMjE2OnJldHVybiB0PXRoaXMudW5wYWNrX3VpbnQxNigpLHRoaXMudW5wYWNrX3N0cmluZyh0KTtjYXNlIDIxNzpyZXR1cm4gdD10aGlzLnVucGFja191aW50MzIoKSx0aGlzLnVucGFja19zdHJpbmcodCk7Y2FzZSAyMTg6cmV0dXJuIHQ9dGhpcy51bnBhY2tfdWludDE2KCksdGhpcy51bnBhY2tfcmF3KHQpO2Nhc2UgMjE5OnJldHVybiB0PXRoaXMudW5wYWNrX3VpbnQzMigpLHRoaXMudW5wYWNrX3Jhdyh0KTtjYXNlIDIyMDpyZXR1cm4gdD10aGlzLnVucGFja191aW50MTYoKSx0aGlzLnVucGFja19hcnJheSh0KTtjYXNlIDIyMTpyZXR1cm4gdD10aGlzLnVucGFja191aW50MzIoKSx0aGlzLnVucGFja19hcnJheSh0KTtjYXNlIDIyMjpyZXR1cm4gdD10aGlzLnVucGFja191aW50MTYoKSx0aGlzLnVucGFja19tYXAodCk7Y2FzZSAyMjM6cmV0dXJuIHQ9dGhpcy51bnBhY2tfdWludDMyKCksdGhpcy51bnBhY2tfbWFwKHQpfX0sci5wcm90b3R5cGUudW5wYWNrX3VpbnQ4PWZ1bmN0aW9uKCl7dmFyIHQ9MjU1JnRoaXMuZGF0YVZpZXdbdGhpcy5pbmRleF07cmV0dXJuIHRoaXMuaW5kZXgrKyx0fSxyLnByb3RvdHlwZS51bnBhY2tfdWludDE2PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkKDIpLGU9MjU2KigyNTUmdFswXSkrKDI1NSZ0WzFdKTtyZXR1cm4gdGhpcy5pbmRleCs9MixlfSxyLnByb3RvdHlwZS51bnBhY2tfdWludDMyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkKDQpLGU9MjU2KigyNTYqKDI1Nip0WzBdK3RbMV0pK3RbMl0pK3RbM107cmV0dXJuIHRoaXMuaW5kZXgrPTQsZX0sci5wcm90b3R5cGUudW5wYWNrX3VpbnQ2ND1mdW5jdGlvbigpe3ZhciB0PXRoaXMucmVhZCg4KSxlPTI1NiooMjU2KigyNTYqKDI1NiooMjU2KigyNTYqKDI1Nip0WzBdK3RbMV0pK3RbMl0pK3RbM10pK3RbNF0pK3RbNV0pK3RbNl0pK3RbN107cmV0dXJuIHRoaXMuaW5kZXgrPTgsZX0sci5wcm90b3R5cGUudW5wYWNrX2ludDg9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnVucGFja191aW50OCgpO3JldHVybiB0PDEyOD90OnQtMjU2fSxyLnByb3RvdHlwZS51bnBhY2tfaW50MTY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnVucGFja191aW50MTYoKTtyZXR1cm4gdDwzMjc2OD90OnQtNjU1MzZ9LHIucHJvdG90eXBlLnVucGFja19pbnQzMj1mdW5jdGlvbigpe3ZhciB0PXRoaXMudW5wYWNrX3VpbnQzMigpO3JldHVybiB0PE1hdGgucG93KDIsMzEpP3Q6dC1NYXRoLnBvdygyLDMyKX0sci5wcm90b3R5cGUudW5wYWNrX2ludDY0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy51bnBhY2tfdWludDY0KCk7cmV0dXJuIHQ8TWF0aC5wb3coMiw2Myk/dDp0LU1hdGgucG93KDIsNjQpfSxyLnByb3RvdHlwZS51bnBhY2tfcmF3PWZ1bmN0aW9uKHQpe2lmKHRoaXMubGVuZ3RoPHRoaXMuaW5kZXgrdCl0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnlQYWNrRmFpbHVyZTogaW5kZXggaXMgb3V0IG9mIHJhbmdlIFwiK3RoaXMuaW5kZXgrXCIgXCIrdCtcIiBcIit0aGlzLmxlbmd0aCk7dmFyIGU9dGhpcy5kYXRhQnVmZmVyLnNsaWNlKHRoaXMuaW5kZXgsdGhpcy5pbmRleCt0KTtyZXR1cm4gdGhpcy5pbmRleCs9dCxlfSxyLnByb3RvdHlwZS51bnBhY2tfc3RyaW5nPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxpLHI9dGhpcy5yZWFkKHQpLG49MCx1PVwiXCI7bjx0OykoZT1yW25dKTwxMjg/KHUrPVN0cmluZy5mcm9tQ2hhckNvZGUoZSksbisrKTooMTkyXmUpPDMyPyhpPSgxOTJeZSk8PDZ8NjMmcltuKzFdLHUrPVN0cmluZy5mcm9tQ2hhckNvZGUoaSksbis9Mik6KGk9KDE1JmUpPDwxMnwoNjMmcltuKzFdKTw8Nnw2MyZyW24rMl0sdSs9U3RyaW5nLmZyb21DaGFyQ29kZShpKSxuKz0zKTtyZXR1cm4gdGhpcy5pbmRleCs9dCx1fSxyLnByb3RvdHlwZS51bnBhY2tfYXJyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBBcnJheSh0KSxpPTA7aTx0O2krKyllW2ldPXRoaXMudW5wYWNrKCk7cmV0dXJuIGV9LHIucHJvdG90eXBlLnVucGFja19tYXA9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LGk9MDtpPHQ7aSsrKXt2YXIgcj10aGlzLnVucGFjaygpLG49dGhpcy51bnBhY2soKTtlW3JdPW59cmV0dXJuIGV9LHIucHJvdG90eXBlLnVucGFja19mbG9hdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMudW5wYWNrX3VpbnQzMigpLGU9KHQ+PjIzJjI1NSktMTI3O3JldHVybigwPT10Pj4zMT8xOi0xKSooODM4ODYwNyZ0fDgzODg2MDgpKk1hdGgucG93KDIsZS0yMyl9LHIucHJvdG90eXBlLnVucGFja19kb3VibGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnVucGFja191aW50MzIoKSxlPXRoaXMudW5wYWNrX3VpbnQzMigpLGk9KHQ+PjIwJjIwNDcpLTEwMjM7cmV0dXJuKDA9PXQ+PjMxPzE6LTEpKigoMTA0ODU3NSZ0fDEwNDg1NzYpKk1hdGgucG93KDIsaS0yMCkrZSpNYXRoLnBvdygyLGktNTIpKX0sci5wcm90b3R5cGUucmVhZD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmluZGV4O2lmKGUrdDw9dGhpcy5sZW5ndGgpcmV0dXJuIHRoaXMuZGF0YVZpZXcuc3ViYXJyYXkoZSxlK3QpO3Rocm93IG5ldyBFcnJvcihcIkJpbmFyeVBhY2tGYWlsdXJlOiByZWFkIGluZGV4IG91dCBvZiByYW5nZVwiKX0sbi5wcm90b3R5cGUuZ2V0QnVmZmVyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYnVmZmVyQnVpbGRlci5nZXRCdWZmZXIoKX0sbi5wcm90b3R5cGUucGFjaz1mdW5jdGlvbih0KXt2YXIgaT10eXBlb2YgdDtpZihcInN0cmluZ1wiPT1pKXRoaXMucGFja19zdHJpbmcodCk7ZWxzZSBpZihcIm51bWJlclwiPT1pKU1hdGguZmxvb3IodCk9PT10P3RoaXMucGFja19pbnRlZ2VyKHQpOnRoaXMucGFja19kb3VibGUodCk7ZWxzZSBpZihcImJvb2xlYW5cIj09aSkhMD09PXQ/dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgxOTUpOiExPT09dCYmdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgxOTQpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIj09aSl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDE5Mik7ZWxzZXtpZihcIm9iamVjdFwiIT1pKXRocm93IG5ldyBFcnJvcignVHlwZSBcIicraSsnXCIgbm90IHlldCBzdXBwb3J0ZWQnKTtpZihudWxsPT09dCl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDE5Mik7ZWxzZXt2YXIgcj10LmNvbnN0cnVjdG9yO2lmKHI9PUFycmF5KXRoaXMucGFja19hcnJheSh0KTtlbHNlIGlmKHI9PUJsb2J8fHI9PUZpbGUpdGhpcy5wYWNrX2Jpbih0KTtlbHNlIGlmKHI9PUFycmF5QnVmZmVyKWUudXNlQXJyYXlCdWZmZXJWaWV3P3RoaXMucGFja19iaW4obmV3IFVpbnQ4QXJyYXkodCkpOnRoaXMucGFja19iaW4odCk7ZWxzZSBpZihcIkJZVEVTX1BFUl9FTEVNRU5UXCJpbiB0KWUudXNlQXJyYXlCdWZmZXJWaWV3P3RoaXMucGFja19iaW4obmV3IFVpbnQ4QXJyYXkodC5idWZmZXIpKTp0aGlzLnBhY2tfYmluKHQuYnVmZmVyKTtlbHNlIGlmKHI9PU9iamVjdCl0aGlzLnBhY2tfb2JqZWN0KHQpO2Vsc2UgaWYocj09RGF0ZSl0aGlzLnBhY2tfc3RyaW5nKHQudG9TdHJpbmcoKSk7ZWxzZXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnRvQmluYXJ5UGFjayl0aHJvdyBuZXcgRXJyb3IoJ1R5cGUgXCInK3IudG9TdHJpbmcoKSsnXCIgbm90IHlldCBzdXBwb3J0ZWQnKTt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKHQudG9CaW5hcnlQYWNrKCkpfX19dGhpcy5idWZmZXJCdWlsZGVyLmZsdXNoKCl9LG4ucHJvdG90eXBlLnBhY2tfYmluPWZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RofHx0LmJ5dGVMZW5ndGh8fHQuc2l6ZTtpZihlPD0xNSl0aGlzLnBhY2tfdWludDgoMTYwK2UpO2Vsc2UgaWYoZTw9NjU1MzUpdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMTgpLHRoaXMucGFja191aW50MTYoZSk7ZWxzZXtpZighKGU8PTQyOTQ5NjcyOTUpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGVuZ3RoXCIpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjE5KSx0aGlzLnBhY2tfdWludDMyKGUpfXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodCl9LG4ucHJvdG90eXBlLnBhY2tfc3RyaW5nPWZ1bmN0aW9uKHQpe3ZhciBlPWEodCk7aWYoZTw9MTUpdGhpcy5wYWNrX3VpbnQ4KDE3NitlKTtlbHNlIGlmKGU8PTY1NTM1KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjE2KSx0aGlzLnBhY2tfdWludDE2KGUpO2Vsc2V7aWYoIShlPD00Mjk0OTY3Mjk1KSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxlbmd0aFwiKTt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIxNyksdGhpcy5wYWNrX3VpbnQzMihlKX10aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKHQpfSxuLnByb3RvdHlwZS5wYWNrX2FycmF5PWZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoO2lmKGU8PTE1KXRoaXMucGFja191aW50OCgxNDQrZSk7ZWxzZSBpZihlPD02NTUzNSl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIyMCksdGhpcy5wYWNrX3VpbnQxNihlKTtlbHNle2lmKCEoZTw9NDI5NDk2NzI5NSkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsZW5ndGhcIik7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMjEpLHRoaXMucGFja191aW50MzIoZSl9Zm9yKHZhciBpPTA7aTxlO2krKyl0aGlzLnBhY2sodFtpXSl9LG4ucHJvdG90eXBlLnBhY2tfaW50ZWdlcj1mdW5jdGlvbih0KXtpZigtMzI8PXQmJnQ8PTEyNyl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDI1NSZ0KTtlbHNlIGlmKDA8PXQmJnQ8PTI1NSl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIwNCksdGhpcy5wYWNrX3VpbnQ4KHQpO2Vsc2UgaWYoLTEyODw9dCYmdDw9MTI3KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjA4KSx0aGlzLnBhY2tfaW50OCh0KTtlbHNlIGlmKDA8PXQmJnQ8PTY1NTM1KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjA1KSx0aGlzLnBhY2tfdWludDE2KHQpO2Vsc2UgaWYoLTMyNzY4PD10JiZ0PD0zMjc2Nyl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIwOSksdGhpcy5wYWNrX2ludDE2KHQpO2Vsc2UgaWYoMDw9dCYmdDw9NDI5NDk2NzI5NSl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIwNiksdGhpcy5wYWNrX3VpbnQzMih0KTtlbHNlIGlmKC0yMTQ3NDgzNjQ4PD10JiZ0PD0yMTQ3NDgzNjQ3KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjEwKSx0aGlzLnBhY2tfaW50MzIodCk7ZWxzZSBpZigtMHg4MDAwMDAwMDAwMDAwMDAwPD10JiZ0PD0weDgwMDAwMDAwMDAwMDAwMDApdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMTEpLHRoaXMucGFja19pbnQ2NCh0KTtlbHNle2lmKCEoMDw9dCYmdDw9MHgxMDAwMDAwMDAwMDAwMDAwMCkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyXCIpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjA3KSx0aGlzLnBhY2tfdWludDY0KHQpfX0sbi5wcm90b3R5cGUucGFja19kb3VibGU9ZnVuY3Rpb24odCl7dmFyIGU9MDt0PDAmJihlPTEsdD0tdCk7dmFyIGk9TWF0aC5mbG9vcihNYXRoLmxvZyh0KS9NYXRoLkxOMikscj10L01hdGgucG93KDIsaSktMSxuPU1hdGguZmxvb3IocipNYXRoLnBvdygyLDUyKSksdT1NYXRoLnBvdygyLDMyKSxhPWU8PDMxfGkrMTAyMzw8MjB8bi91JjEwNDg1NzUscD1uJXU7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMDMpLHRoaXMucGFja19pbnQzMihhKSx0aGlzLnBhY2tfaW50MzIocCl9LG4ucHJvdG90eXBlLnBhY2tfb2JqZWN0PWZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5rZXlzKHQpLmxlbmd0aDtpZihlPD0xNSl0aGlzLnBhY2tfdWludDgoMTI4K2UpO2Vsc2UgaWYoZTw9NjU1MzUpdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMjIpLHRoaXMucGFja191aW50MTYoZSk7ZWxzZXtpZighKGU8PTQyOTQ5NjcyOTUpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGVuZ3RoXCIpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjIzKSx0aGlzLnBhY2tfdWludDMyKGUpfWZvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJih0aGlzLnBhY2soaSksdGhpcy5wYWNrKHRbaV0pKX0sbi5wcm90b3R5cGUucGFja191aW50OD1mdW5jdGlvbih0KXt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKHQpfSxuLnByb3RvdHlwZS5wYWNrX3VpbnQxNj1mdW5jdGlvbih0KXt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKHQ+PjgpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JnQpfSxuLnByb3RvdHlwZS5wYWNrX3VpbnQzMj1mdW5jdGlvbih0KXt2YXIgZT00Mjk0OTY3Mjk1JnQ7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNDI3ODE5MDA4MCZlKT4+PjI0KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCgxNjcxMTY4MCZlKT4+PjE2KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg2NTI4MCZlKT4+PjgpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JmUpfSxuLnByb3RvdHlwZS5wYWNrX3VpbnQ2ND1mdW5jdGlvbih0KXt2YXIgZT10L01hdGgucG93KDIsMzIpLGk9dCVNYXRoLnBvdygyLDMyKTt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg0Mjc4MTkwMDgwJmUpPj4+MjQpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDE2NzExNjgwJmUpPj4+MTYpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDY1MjgwJmUpPj4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmZSksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNDI3ODE5MDA4MCZpKT4+PjI0KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCgxNjcxMTY4MCZpKT4+PjE2KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg2NTI4MCZpKT4+PjgpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JmkpfSxuLnByb3RvdHlwZS5wYWNrX2ludDg9ZnVuY3Rpb24odCl7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmdCl9LG4ucHJvdG90eXBlLnBhY2tfaW50MTY9ZnVuY3Rpb24odCl7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNjUyODAmdCk+PjgpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JnQpfSxuLnByb3RvdHlwZS5wYWNrX2ludDMyPWZ1bmN0aW9uKHQpe3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodD4+PjI0JjI1NSksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoMTY3MTE2ODAmdCk+Pj4xNiksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNjUyODAmdCk+Pj44KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDI1NSZ0KX0sbi5wcm90b3R5cGUucGFja19pbnQ2ND1mdW5jdGlvbih0KXt2YXIgZT1NYXRoLmZsb29yKHQvTWF0aC5wb3coMiwzMikpLGk9dCVNYXRoLnBvdygyLDMyKTt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg0Mjc4MTkwMDgwJmUpPj4+MjQpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDE2NzExNjgwJmUpPj4+MTYpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDY1MjgwJmUpPj4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmZSksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNDI3ODE5MDA4MCZpKT4+PjI0KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCgxNjcxMTY4MCZpKT4+PjE2KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg2NTI4MCZpKT4+PjgpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JmkpfTtcbn0se1wiLi9idWZmZXJidWlsZGVyXCI6XCJ2SG8xXCJ9XSxcInNYdFZcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xuXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPSEwLGV4cG9ydHMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uPXdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb258fHdpbmRvdy5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb24sZXhwb3J0cy5SVENQZWVyQ29ubmVjdGlvbj13aW5kb3cuUlRDUGVlckNvbm5lY3Rpb258fHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbnx8d2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLGV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlPXdpbmRvdy5SVENJY2VDYW5kaWRhdGV8fHdpbmRvdy5tb3pSVENJY2VDYW5kaWRhdGU7XG59LHt9XSxcIkJIWGZcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xudmFyIGdsb2JhbCA9IGFyZ3VtZW50c1szXTtcbnZhciBlPWFyZ3VtZW50c1szXSx0PXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O2V4cG9ydHMuX19lc01vZHVsZT0hMDt2YXIgcj17aWNlU2VydmVyczpbe3VybHM6XCJzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyXCJ9XX0sbz0xLG49dChyZXF1aXJlKFwianMtYmluYXJ5cGFja1wiKSksYT1yZXF1aXJlKFwiLi9hZGFwdGVyXCIpO2V4cG9ydHMudXRpbD17bm9vcDpmdW5jdGlvbigpe30sQ0xPVURfSE9TVDpcIjAucGVlcmpzLmNvbVwiLENMT1VEX1BPUlQ6NDQzLGNodW5rZWRCcm93c2Vyczp7Q2hyb21lOjF9LGNodW5rZWRNVFU6MTYzMDAsbG9nTGV2ZWw6MCxzZXRMb2dMZXZlbDpmdW5jdGlvbihlKXt2YXIgdD1wYXJzZUludChlLDEwKTtpc05hTihwYXJzZUludChlLDEwKSk/ZXhwb3J0cy51dGlsLmxvZ0xldmVsPWU/MzowOmV4cG9ydHMudXRpbC5sb2dMZXZlbD10LGV4cG9ydHMudXRpbC5sb2c9ZXhwb3J0cy51dGlsLndhcm49ZXhwb3J0cy51dGlsLmVycm9yPWV4cG9ydHMudXRpbC5ub29wLGV4cG9ydHMudXRpbC5sb2dMZXZlbD4wJiYoZXhwb3J0cy51dGlsLmVycm9yPWV4cG9ydHMudXRpbC5fcHJpbnRXaXRoKFwiRVJST1JcIikpLGV4cG9ydHMudXRpbC5sb2dMZXZlbD4xJiYoZXhwb3J0cy51dGlsLndhcm49ZXhwb3J0cy51dGlsLl9wcmludFdpdGgoXCJXQVJOSU5HXCIpKSxleHBvcnRzLnV0aWwubG9nTGV2ZWw+MiYmKGV4cG9ydHMudXRpbC5sb2c9ZXhwb3J0cy51dGlsLl9wcmludCl9LHNldExvZ0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe2UuY29uc3RydWN0b3IhPT1GdW5jdGlvbj9leHBvcnRzLnV0aWwud2FybihcIlRoZSBsb2cgZnVuY3Rpb24geW91IHBhc3NlZCBpbiBpcyBub3QgYSBmdW5jdGlvbi4gRGVmYXVsdGluZyB0byByZWd1bGFyIGxvZ3MuXCIpOmV4cG9ydHMudXRpbC5fcHJpbnQ9ZX0sX3ByaW50V2l0aDpmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO3QudW5zaGlmdChlKSxleHBvcnRzLnV0aWwuX3ByaW50LmFwcGx5KGV4cG9ydHMudXRpbCx0KX19LF9wcmludDpmdW5jdGlvbigpe3ZhciBlPSExLHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt0LnVuc2hpZnQoXCJQZWVySlM6IFwiKTtmb3IodmFyIHI9MCxvPXQubGVuZ3RoO3I8bztyKyspdFtyXWluc3RhbmNlb2YgRXJyb3ImJih0W3JdPVwiKFwiK3Rbcl0ubmFtZStcIikgXCIrdFtyXS5tZXNzYWdlLGU9ITApO2U/Y29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLHQpOmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsdCl9LGRlZmF1bHRDb25maWc6cixicm93c2VyOndpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbj9cIkZpcmVmb3hcIjp3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24/XCJDaHJvbWVcIjp3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24/XCJTdXBwb3J0ZWRcIjpcIlVuc3VwcG9ydGVkXCIsc3VwcG9ydHM6ZnVuY3Rpb24oKXtpZih2b2lkIDA9PT1hLlJUQ1BlZXJDb25uZWN0aW9uKXJldHVybnt9O3ZhciBlLHQsbz0hMCxuPSEwLGk9ITEsdT0hMSxsPSEhd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uO3RyeXtlPW5ldyBhLlJUQ1BlZXJDb25uZWN0aW9uKHIse29wdGlvbmFsOlt7UnRwRGF0YUNoYW5uZWxzOiEwfV19KX1jYXRjaChjKXtvPSExLG49ITF9aWYobyl0cnl7dD1lLmNyZWF0ZURhdGFDaGFubmVsKFwiX1BFRVJKU1RFU1RcIil9Y2F0Y2goYyl7bz0hMX1pZihvKXt0cnl7dC5iaW5hcnlUeXBlPVwiYmxvYlwiLGk9ITB9Y2F0Y2goYyl7fXZhciBzPW5ldyBhLlJUQ1BlZXJDb25uZWN0aW9uKHIse30pO3RyeXt1PXMuY3JlYXRlRGF0YUNoYW5uZWwoXCJfUEVFUkpTUkVMSUFCTEVURVNUXCIse30pLnJlbGlhYmxlfWNhdGNoKGMpe31zLmNsb3NlKCl9cmV0dXJuIG4mJihuPSEhZS5hZGRTdHJlYW0pLGUmJmUuY2xvc2UoKSx7YXVkaW9WaWRlbzpuLGRhdGE6byxiaW5hcnlCbG9iOmksYmluYXJ5OnUscmVsaWFibGU6dSxzY3RwOnUsb25uZWdvdGlhdGlvbm5lZWRlZDpsfX0oKSx2YWxpZGF0ZUlkOmZ1bmN0aW9uKGUpe3JldHVybiFlfHwvXltBLVphLXowLTldKyg/OlsgXy1dW0EtWmEtejAtOV0rKSokLy5leGVjKGUpfSx2YWxpZGF0ZUtleTpmdW5jdGlvbihlKXtyZXR1cm4hZXx8L15bQS1aYS16MC05XSsoPzpbIF8tXVtBLVphLXowLTldKykqJC8uZXhlYyhlKX0sZGVidWc6ITEsaW5oZXJpdHM6ZnVuY3Rpb24oZSx0KXtlLnN1cGVyXz10LGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pfSxleHRlbmQ6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYoZVtyXT10W3JdKTtyZXR1cm4gZX0scGFjazpuLmRlZmF1bHQucGFjayx1bnBhY2s6bi5kZWZhdWx0LnVucGFjayxsb2c6ZnVuY3Rpb24oKXtpZihleHBvcnRzLnV0aWwuZGVidWcpe3ZhciBlPSExLHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt0LnVuc2hpZnQoXCJQZWVySlM6IFwiKTtmb3IodmFyIHI9MCxvPXQubGVuZ3RoO3I8bztyKyspdFtyXWluc3RhbmNlb2YgRXJyb3ImJih0W3JdPVwiKFwiK3Rbcl0ubmFtZStcIikgXCIrdFtyXS5tZXNzYWdlLGU9ITApO2U/Y29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLHQpOmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsdCl9fSxzZXRaZXJvVGltZW91dDpmdW5jdGlvbihlKXt2YXIgdD1bXSxyPVwiemVyby10aW1lb3V0LW1lc3NhZ2VcIjtmdW5jdGlvbiBvKG8pe28uc291cmNlPT1lJiZvLmRhdGE9PXImJihvLnN0b3BQcm9wYWdhdGlvbiYmby5zdG9wUHJvcGFnYXRpb24oKSx0Lmxlbmd0aCYmdC5zaGlmdCgpKCkpfXJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG8sITApOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixvKSxmdW5jdGlvbihvKXt0LnB1c2gobyksZS5wb3N0TWVzc2FnZShyLFwiKlwiKX19KHdpbmRvdyksY2h1bms6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LHI9W10sbj1lLnNpemUsYT10PTAsaT1NYXRoLmNlaWwobi9leHBvcnRzLnV0aWwuY2h1bmtlZE1UVSk7YTxuOyl7dmFyIHU9TWF0aC5taW4obixhK2V4cG9ydHMudXRpbC5jaHVua2VkTVRVKSxsPWUuc2xpY2UoYSx1KSxzPXtfX3BlZXJEYXRhOm8sbjp0LGRhdGE6bCx0b3RhbDppfTtyLnB1c2gocyksYT11LHQrPTF9cmV0dXJuIG8rPTEscn0sYmxvYlRvQXJyYXlCdWZmZXI6ZnVuY3Rpb24oZSx0KXt2YXIgcj1uZXcgRmlsZVJlYWRlcjtyLm9ubG9hZD1mdW5jdGlvbihlKXt0KGUudGFyZ2V0LnJlc3VsdCl9LHIucmVhZEFzQXJyYXlCdWZmZXIoZSl9LGJsb2JUb0JpbmFyeVN0cmluZzpmdW5jdGlvbihlLHQpe3ZhciByPW5ldyBGaWxlUmVhZGVyO3Iub25sb2FkPWZ1bmN0aW9uKGUpe3QoZS50YXJnZXQucmVzdWx0KX0sci5yZWFkQXNCaW5hcnlTdHJpbmcoZSl9LGJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW5ldyBVaW50OEFycmF5KGUubGVuZ3RoKSxyPTA7cjxlLmxlbmd0aDtyKyspdFtyXT0yNTUmZS5jaGFyQ29kZUF0KHIpO3JldHVybiB0LmJ1ZmZlcn0scmFuZG9tVG9rZW46ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpfSxpc1NlY3VyZTpmdW5jdGlvbigpe3JldHVyblwiaHR0cHM6XCI9PT1sb2NhdGlvbi5wcm90b2NvbH19O1xufSx7XCJqcy1iaW5hcnlwYWNrXCI6XCJsSE9jXCIsXCIuL2FkYXB0ZXJcIjpcInNYdFZcIn1dLFwiMkpKbFwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsZSxuKXt0aGlzLmZuPXQsdGhpcy5jb250ZXh0PWUsdGhpcy5vbmNlPW58fCExfWZ1bmN0aW9uIGUoKXt9ZS5wcm90b3R5cGUuX2V2ZW50cz12b2lkIDAsZS5wcm90b3R5cGUubGlzdGVuZXJzPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLl9ldmVudHN8fCF0aGlzLl9ldmVudHNbdF0pcmV0dXJuW107aWYodGhpcy5fZXZlbnRzW3RdLmZuKXJldHVyblt0aGlzLl9ldmVudHNbdF0uZm5dO2Zvcih2YXIgZT0wLG49dGhpcy5fZXZlbnRzW3RdLmxlbmd0aCxzPW5ldyBBcnJheShuKTtlPG47ZSsrKXNbZV09dGhpcy5fZXZlbnRzW3RdW2VdLmZuO3JldHVybiBzfSxlLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKHQsZSxuLHMscixpKXtpZighdGhpcy5fZXZlbnRzfHwhdGhpcy5fZXZlbnRzW3RdKXJldHVybiExO3ZhciBvLGgsZj10aGlzLl9ldmVudHNbdF0sdj1hcmd1bWVudHMubGVuZ3RoO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGYuZm4pe3N3aXRjaChmLm9uY2UmJnRoaXMucmVtb3ZlTGlzdGVuZXIodCxmLmZuLCEwKSx2KXtjYXNlIDE6cmV0dXJuIGYuZm4uY2FsbChmLmNvbnRleHQpLCEwO2Nhc2UgMjpyZXR1cm4gZi5mbi5jYWxsKGYuY29udGV4dCxlKSwhMDtjYXNlIDM6cmV0dXJuIGYuZm4uY2FsbChmLmNvbnRleHQsZSxuKSwhMDtjYXNlIDQ6cmV0dXJuIGYuZm4uY2FsbChmLmNvbnRleHQsZSxuLHMpLCEwO2Nhc2UgNTpyZXR1cm4gZi5mbi5jYWxsKGYuY29udGV4dCxlLG4scyxyKSwhMDtjYXNlIDY6cmV0dXJuIGYuZm4uY2FsbChmLmNvbnRleHQsZSxuLHMscixpKSwhMH1mb3IoaD0xLG89bmV3IEFycmF5KHYtMSk7aDx2O2grKylvW2gtMV09YXJndW1lbnRzW2hdO2YuZm4uYXBwbHkoZi5jb250ZXh0LG8pfWVsc2V7dmFyIGMsYT1mLmxlbmd0aDtmb3IoaD0wO2g8YTtoKyspc3dpdGNoKGZbaF0ub25jZSYmdGhpcy5yZW1vdmVMaXN0ZW5lcih0LGZbaF0uZm4sITApLHYpe2Nhc2UgMTpmW2hdLmZuLmNhbGwoZltoXS5jb250ZXh0KTticmVhaztjYXNlIDI6ZltoXS5mbi5jYWxsKGZbaF0uY29udGV4dCxlKTticmVhaztjYXNlIDM6ZltoXS5mbi5jYWxsKGZbaF0uY29udGV4dCxlLG4pO2JyZWFrO2RlZmF1bHQ6aWYoIW8pZm9yKGM9MSxvPW5ldyBBcnJheSh2LTEpO2M8djtjKyspb1tjLTFdPWFyZ3VtZW50c1tjXTtmW2hdLmZuLmFwcGx5KGZbaF0uY29udGV4dCxvKX19cmV0dXJuITB9LGUucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGUsbixzKXt2YXIgcj1uZXcgdChuLHN8fHRoaXMpO3JldHVybiB0aGlzLl9ldmVudHN8fCh0aGlzLl9ldmVudHM9e30pLHRoaXMuX2V2ZW50c1tlXT90aGlzLl9ldmVudHNbZV0uZm4/dGhpcy5fZXZlbnRzW2VdPVt0aGlzLl9ldmVudHNbZV0scl06dGhpcy5fZXZlbnRzW2VdLnB1c2gocik6dGhpcy5fZXZlbnRzW2VdPXIsdGhpc30sZS5wcm90b3R5cGUub25jZT1mdW5jdGlvbihlLG4scyl7dmFyIHI9bmV3IHQobixzfHx0aGlzLCEwKTtyZXR1cm4gdGhpcy5fZXZlbnRzfHwodGhpcy5fZXZlbnRzPXt9KSx0aGlzLl9ldmVudHNbZV0/dGhpcy5fZXZlbnRzW2VdLmZuP3RoaXMuX2V2ZW50c1tlXT1bdGhpcy5fZXZlbnRzW2VdLHJdOnRoaXMuX2V2ZW50c1tlXS5wdXNoKHIpOnRoaXMuX2V2ZW50c1tlXT1yLHRoaXN9LGUucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKHQsZSxuKXtpZighdGhpcy5fZXZlbnRzfHwhdGhpcy5fZXZlbnRzW3RdKXJldHVybiB0aGlzO3ZhciBzPXRoaXMuX2V2ZW50c1t0XSxyPVtdO2lmKGUmJihzLmZuJiYocy5mbiE9PWV8fG4mJiFzLm9uY2UpJiZyLnB1c2gocyksIXMuZm4pKWZvcih2YXIgaT0wLG89cy5sZW5ndGg7aTxvO2krKykoc1tpXS5mbiE9PWV8fG4mJiFzW2ldLm9uY2UpJiZyLnB1c2goc1tpXSk7cmV0dXJuIHIubGVuZ3RoP3RoaXMuX2V2ZW50c1t0XT0xPT09ci5sZW5ndGg/clswXTpyOmRlbGV0ZSB0aGlzLl9ldmVudHNbdF0sdGhpc30sZS5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9ldmVudHM/KHQ/ZGVsZXRlIHRoaXMuX2V2ZW50c1t0XTp0aGlzLl9ldmVudHM9e30sdGhpcyk6dGhpc30sZS5wcm90b3R5cGUub2ZmPWUucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLGUucHJvdG90eXBlLmFkZExpc3RlbmVyPWUucHJvdG90eXBlLm9uLGUucHJvdG90eXBlLnNldE1heExpc3RlbmVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlLkV2ZW50RW1pdHRlcj1lLGUuRXZlbnRFbWl0dGVyMj1lLGUuRXZlbnRFbWl0dGVyMz1lLG1vZHVsZS5leHBvcnRzPWU7XG59LHt9XSxcIndKbHZcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xuXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPSEwO3ZhciB0PXJlcXVpcmUoXCIuL3V0aWxcIiksZT1yZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKTtmdW5jdGlvbiBzKHQsaSxvLG4scixoKXtpZighKHRoaXMgaW5zdGFuY2VvZiBzKSlyZXR1cm4gbmV3IHModCxpLG8sbixyLGgpO2g9aHx8byxlLkV2ZW50RW1pdHRlci5jYWxsKHRoaXMpLHRoaXMuZGlzY29ubmVjdGVkPSExLHRoaXMuX3F1ZXVlPVtdO3ZhciBhPXQ/XCJodHRwczovL1wiOlwiaHR0cDovL1wiLHU9dD9cIndzczovL1wiOlwid3M6Ly9cIjt0aGlzLl9odHRwVXJsPWEraStcIjpcIitvK24rcix0aGlzLl93c1VybD11K2krXCI6XCIraCtuK1wicGVlcmpzP2tleT1cIityfWV4cG9ydHMuU29ja2V0PXMsdC51dGlsLmluaGVyaXRzKHMsZS5FdmVudEVtaXR0ZXIpLHMucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKHQsZSl7dGhpcy5pZD10LHRoaXMuX2h0dHBVcmwrPVwiL1wiK3QrXCIvXCIrZSx0aGlzLl93c1VybCs9XCImaWQ9XCIrdCtcIiZ0b2tlbj1cIitlLHRoaXMuX3N0YXJ0WGhyU3RyZWFtKCksdGhpcy5fc3RhcnRXZWJTb2NrZXQoKX0scy5wcm90b3R5cGUuX3N0YXJ0V2ViU29ja2V0PWZ1bmN0aW9uKGUpe3ZhciBzPXRoaXM7dGhpcy5fc29ja2V0fHwodGhpcy5fc29ja2V0PW5ldyBXZWJTb2NrZXQodGhpcy5fd3NVcmwpLHRoaXMuX3NvY2tldC5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dHJ5e3ZhciBpPUpTT04ucGFyc2UoZS5kYXRhKX1jYXRjaChvKXtyZXR1cm4gdm9pZCB0LnV0aWwubG9nKFwiSW52YWxpZCBzZXJ2ZXIgbWVzc2FnZVwiLGUuZGF0YSl9cy5lbWl0KFwibWVzc2FnZVwiLGkpfSx0aGlzLl9zb2NrZXQub25jbG9zZT1mdW5jdGlvbihlKXt0LnV0aWwubG9nKFwiU29ja2V0IGNsb3NlZC5cIikscy5kaXNjb25uZWN0ZWQ9ITAscy5lbWl0KFwiZGlzY29ubmVjdGVkXCIpfSx0aGlzLl9zb2NrZXQub25vcGVuPWZ1bmN0aW9uKCl7cy5fdGltZW91dCYmKGNsZWFyVGltZW91dChzLl90aW1lb3V0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cy5faHR0cC5hYm9ydCgpLHMuX2h0dHA9bnVsbH0sNWUzKSkscy5fc2VuZFF1ZXVlZE1lc3NhZ2VzKCksdC51dGlsLmxvZyhcIlNvY2tldCBvcGVuXCIpfSl9LHMucHJvdG90eXBlLl9zdGFydFhoclN0cmVhbT1mdW5jdGlvbihlKXt0cnl7dmFyIHM9dGhpczt0aGlzLl9odHRwPW5ldyBYTUxIdHRwUmVxdWVzdCx0aGlzLl9odHRwLl9pbmRleD0xLHRoaXMuX2h0dHAuX3N0cmVhbUluZGV4PWV8fDAsdGhpcy5faHR0cC5vcGVuKFwicG9zdFwiLHRoaXMuX2h0dHBVcmwrXCIvaWQ/aT1cIit0aGlzLl9odHRwLl9zdHJlYW1JbmRleCwhMCksdGhpcy5faHR0cC5vbmVycm9yPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHMuX3RpbWVvdXQpLHMuZW1pdChcImRpc2Nvbm5lY3RlZFwiKX0sdGhpcy5faHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXsyPT10aGlzLnJlYWR5U3RhdGUmJnRoaXMub2xkPyh0aGlzLm9sZC5hYm9ydCgpLGRlbGV0ZSB0aGlzLm9sZCk6dGhpcy5yZWFkeVN0YXRlPjImJjIwMD09PXRoaXMuc3RhdHVzJiZ0aGlzLnJlc3BvbnNlVGV4dCYmcy5faGFuZGxlU3RyZWFtKHRoaXMpfSx0aGlzLl9odHRwLnNlbmQobnVsbCksdGhpcy5fc2V0SFRUUFRpbWVvdXQoKX1jYXRjaChpKXt0LnV0aWwubG9nKFwiWE1MSHR0cFJlcXVlc3Qgbm90IGF2YWlsYWJsZTsgZGVmYXVsdGluZyB0byBXZWJTb2NrZXRzXCIpfX0scy5wcm90b3R5cGUuX2hhbmRsZVN0cmVhbT1mdW5jdGlvbihlKXt2YXIgcz1lLnJlc3BvbnNlVGV4dC5zcGxpdChcIlxcblwiKTtpZihlLl9idWZmZXIpZm9yKDtlLl9idWZmZXIubGVuZ3RoPjA7KXt2YXIgaT1lLl9idWZmZXIuc2hpZnQoKSxvPXNbaV07dHJ5e289SlNPTi5wYXJzZShvKX1jYXRjaChyKXtlLl9idWZmZXIuc2hpZnQoaSk7YnJlYWt9dGhpcy5lbWl0KFwibWVzc2FnZVwiLG8pfXZhciBuPXNbZS5faW5kZXhdO2lmKG4paWYoZS5faW5kZXgrPTEsZS5faW5kZXg9PT1zLmxlbmd0aCllLl9idWZmZXJ8fChlLl9idWZmZXI9W10pLGUuX2J1ZmZlci5wdXNoKGUuX2luZGV4LTEpO2Vsc2V7dHJ5e249SlNPTi5wYXJzZShuKX1jYXRjaChyKXtyZXR1cm4gdm9pZCB0LnV0aWwubG9nKFwiSW52YWxpZCBzZXJ2ZXIgbWVzc2FnZVwiLG4pfXRoaXMuZW1pdChcIm1lc3NhZ2VcIixuKX19LHMucHJvdG90eXBlLl9zZXRIVFRQVGltZW91dD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fdGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGU9dC5faHR0cDt0Ll93c09wZW4oKT9lLmFib3J0KCk6KHQuX3N0YXJ0WGhyU3RyZWFtKGUuX3N0cmVhbUluZGV4KzEpLHQuX2h0dHAub2xkPWUpfSwyNWUzKX0scy5wcm90b3R5cGUuX3dzT3Blbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9zb2NrZXQmJjE9PXRoaXMuX3NvY2tldC5yZWFkeVN0YXRlfSxzLnByb3RvdHlwZS5fc2VuZFF1ZXVlZE1lc3NhZ2VzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT10aGlzLl9xdWV1ZS5sZW5ndGg7dDxlO3QrPTEpdGhpcy5zZW5kKHRoaXMuX3F1ZXVlW3RdKX0scy5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbih0KXtpZighdGhpcy5kaXNjb25uZWN0ZWQpaWYodGhpcy5pZClpZih0LnR5cGUpe3ZhciBlPUpTT04uc3RyaW5naWZ5KHQpO2lmKHRoaXMuX3dzT3BlbigpKXRoaXMuX3NvY2tldC5zZW5kKGUpO2Vsc2V7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LGk9dGhpcy5faHR0cFVybCtcIi9cIit0LnR5cGUudG9Mb3dlckNhc2UoKTtzLm9wZW4oXCJwb3N0XCIsaSwhMCkscy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpLHMuc2VuZChlKX19ZWxzZSB0aGlzLmVtaXQoXCJlcnJvclwiLFwiSW52YWxpZCBtZXNzYWdlXCIpO2Vsc2UgdGhpcy5fcXVldWUucHVzaCh0KX0scy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXshdGhpcy5kaXNjb25uZWN0ZWQmJnRoaXMuX3dzT3BlbigpJiYodGhpcy5fc29ja2V0LmNsb3NlKCksdGhpcy5kaXNjb25uZWN0ZWQ9ITApfTtcbn0se1wiLi91dGlsXCI6XCJCSFhmXCIsXCJldmVudGVtaXR0ZXIzXCI6XCIySkpsXCJ9XSxcIkhDZFhcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xuXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPSEwO3ZhciBlPXJlcXVpcmUoXCIuL3V0aWxcIiksdD1yZXF1aXJlKFwiLi9hZGFwdGVyXCIpO2Z1bmN0aW9uIG8oZSx0KXtcImFkZFRyYWNrXCJpbiB0P2UuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbihvKXt0LmFkZFRyYWNrKG8sZSl9KTpcImFkZFN0cmVhbVwiaW4gdCYmdC5hZGRTdHJlYW0oZSl9ZXhwb3J0cy5OZWdvdGlhdG9yPXtwY3M6e2RhdGE6e30sbWVkaWE6e319LHF1ZXVlOltdfSxleHBvcnRzLk5lZ290aWF0b3IuX2lkUHJlZml4PVwicGNfXCIsZXhwb3J0cy5OZWdvdGlhdG9yLnN0YXJ0Q29ubmVjdGlvbj1mdW5jdGlvbih0LGkpe3ZhciByPWV4cG9ydHMuTmVnb3RpYXRvci5fZ2V0UGVlckNvbm5lY3Rpb24odCxpKTtpZih0LnBjPXQucGVlckNvbm5lY3Rpb249cixcIm1lZGlhXCI9PT10LnR5cGUmJmkuX3N0cmVhbSYmbyhpLl9zdHJlYW0sciksaS5vcmlnaW5hdG9yKXtpZihcImRhdGFcIj09PXQudHlwZSl7dmFyIG49e307ZS51dGlsLnN1cHBvcnRzLnNjdHB8fChuPXtyZWxpYWJsZTppLnJlbGlhYmxlfSk7dmFyIGE9ci5jcmVhdGVEYXRhQ2hhbm5lbCh0LmxhYmVsLG4pO3QuaW5pdGlhbGl6ZShhKX1leHBvcnRzLk5lZ290aWF0b3IuX21ha2VPZmZlcih0KX1lbHNlIGV4cG9ydHMuTmVnb3RpYXRvci5oYW5kbGVTRFAoXCJPRkZFUlwiLHQsaS5zZHApfSxleHBvcnRzLk5lZ290aWF0b3IuX2dldFBlZXJDb25uZWN0aW9uPWZ1bmN0aW9uKHQsbyl7ZXhwb3J0cy5OZWdvdGlhdG9yLnBjc1t0LnR5cGVdfHxlLnV0aWwuZXJyb3IodC50eXBlK1wiIGlzIG5vdCBhIHZhbGlkIGNvbm5lY3Rpb24gdHlwZS4gTWF5YmUgeW91IG92ZXJyb2RlIHRoZSBgdHlwZWAgcHJvcGVydHkgc29tZXdoZXJlLlwiKSxleHBvcnRzLk5lZ290aWF0b3IucGNzW3QudHlwZV1bdC5wZWVyXXx8KGV4cG9ydHMuTmVnb3RpYXRvci5wY3NbdC50eXBlXVt0LnBlZXJdPXt9KTt2YXIgaTtleHBvcnRzLk5lZ290aWF0b3IucGNzW3QudHlwZV1bdC5wZWVyXTtyZXR1cm4gby5wYyYmKGk9ZXhwb3J0cy5OZWdvdGlhdG9yLnBjc1t0LnR5cGVdW3QucGVlcl1bby5wY10pLGkmJlwic3RhYmxlXCI9PT1pLnNpZ25hbGluZ1N0YXRlfHwoaT1leHBvcnRzLk5lZ290aWF0b3IuX3N0YXJ0UGVlckNvbm5lY3Rpb24odCkpLGl9LGV4cG9ydHMuTmVnb3RpYXRvci5fc3RhcnRQZWVyQ29ubmVjdGlvbj1mdW5jdGlvbihvKXtlLnV0aWwubG9nKFwiQ3JlYXRpbmcgUlRDUGVlckNvbm5lY3Rpb24uXCIpO3ZhciBpPWV4cG9ydHMuTmVnb3RpYXRvci5faWRQcmVmaXgrZS51dGlsLnJhbmRvbVRva2VuKCkscj17fTtcImRhdGFcIiE9PW8udHlwZXx8ZS51dGlsLnN1cHBvcnRzLnNjdHA/XCJtZWRpYVwiPT09by50eXBlJiYocj17b3B0aW9uYWw6W3tEdGxzU3J0cEtleUFncmVlbWVudDohMH1dfSk6cj17b3B0aW9uYWw6W3tSdHBEYXRhQ2hhbm5lbHM6ITB9XX07dmFyIG49bmV3IHQuUlRDUGVlckNvbm5lY3Rpb24oby5wcm92aWRlci5vcHRpb25zLmNvbmZpZyxyKTtyZXR1cm4gZXhwb3J0cy5OZWdvdGlhdG9yLnBjc1tvLnR5cGVdW28ucGVlcl1baV09bixleHBvcnRzLk5lZ290aWF0b3IuX3NldHVwTGlzdGVuZXJzKG8sbixpKSxufSxleHBvcnRzLk5lZ290aWF0b3IuX3NldHVwTGlzdGVuZXJzPWZ1bmN0aW9uKHQsaSxyKXt2YXIgbj10LnBlZXIsYT10LmlkLGM9dC5wcm92aWRlcjtlLnV0aWwubG9nKFwiTGlzdGVuaW5nIGZvciBJQ0UgY2FuZGlkYXRlcy5cIiksaS5vbmljZWNhbmRpZGF0ZT1mdW5jdGlvbihvKXtvLmNhbmRpZGF0ZSYmKGUudXRpbC5sb2coXCJSZWNlaXZlZCBJQ0UgY2FuZGlkYXRlcyBmb3I6XCIsdC5wZWVyKSxjLnNvY2tldC5zZW5kKHt0eXBlOlwiQ0FORElEQVRFXCIscGF5bG9hZDp7Y2FuZGlkYXRlOm8uY2FuZGlkYXRlLHR5cGU6dC50eXBlLGNvbm5lY3Rpb25JZDp0LmlkfSxkc3Q6bn0pKX0saS5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3N3aXRjaChpLmljZUNvbm5lY3Rpb25TdGF0ZSl7Y2FzZVwiZmFpbGVkXCI6ZS51dGlsLmxvZyhcImljZUNvbm5lY3Rpb25TdGF0ZSBpcyBkaXNjb25uZWN0ZWQsIGNsb3NpbmcgY29ubmVjdGlvbnMgdG8gXCIrbiksdC5lbWl0KFwiZXJyb3JcIixuZXcgRXJyb3IoXCJOZWdvdGlhdGlvbiBvZiBjb25uZWN0aW9uIHRvIFwiK24rXCIgZmFpbGVkLlwiKSksdC5jbG9zZSgpO2JyZWFrO2Nhc2VcImRpc2Nvbm5lY3RlZFwiOmUudXRpbC5sb2coXCJpY2VDb25uZWN0aW9uU3RhdGUgaXMgZGlzY29ubmVjdGVkLCBjbG9zaW5nIGNvbm5lY3Rpb25zIHRvIFwiK24pO2JyZWFrO2Nhc2VcImNvbXBsZXRlZFwiOmkub25pY2VjYW5kaWRhdGU9ZS51dGlsLm5vb3B9fSxpLm9uaWNlY2hhbmdlPWkub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UsZS51dGlsLmxvZyhcIkxpc3RlbmluZyBmb3IgZGF0YSBjaGFubmVsXCIpLGkub25kYXRhY2hhbm5lbD1mdW5jdGlvbih0KXtlLnV0aWwubG9nKFwiUmVjZWl2ZWQgZGF0YSBjaGFubmVsXCIpO3ZhciBvPXQuY2hhbm5lbDtjLmdldENvbm5lY3Rpb24obixhKS5pbml0aWFsaXplKG8pfSxlLnV0aWwubG9nKFwiTGlzdGVuaW5nIGZvciByZW1vdGUgc3RyZWFtXCIpLGkub250cmFjaz1mdW5jdGlvbih0KXtlLnV0aWwubG9nKFwiUmVjZWl2ZWQgcmVtb3RlIHN0cmVhbVwiKTt2YXIgaT10LnN0cmVhbXNbMF0scj1jLmdldENvbm5lY3Rpb24obixhKTtcIm1lZGlhXCI9PT1yLnR5cGUmJm8oaSxyKX19LGV4cG9ydHMuTmVnb3RpYXRvci5jbGVhbnVwPWZ1bmN0aW9uKHQpe2UudXRpbC5sb2coXCJDbGVhbmluZyB1cCBQZWVyQ29ubmVjdGlvbiB0byBcIit0LnBlZXIpO3ZhciBvPXQucGM7byYmKG8ucmVhZHlTdGF0ZSYmXCJjbG9zZWRcIiE9PW8ucmVhZHlTdGF0ZXx8XCJjbG9zZWRcIiE9PW8uc2lnbmFsaW5nU3RhdGUpJiYoby5jbG9zZSgpLHQucGM9bnVsbCl9LGV4cG9ydHMuTmVnb3RpYXRvci5fbWFrZU9mZmVyPWZ1bmN0aW9uKHQpe3ZhciBvPXQucGMsaT1mdW5jdGlvbihpKXtlLnV0aWwubG9nKFwiQ3JlYXRlZCBvZmZlci5cIiksIWUudXRpbC5zdXBwb3J0cy5zY3RwJiZcImRhdGFcIj09PXQudHlwZSYmdC5yZWxpYWJsZSYmKGkuc2RwPVJlbGlhYmxlLmhpZ2hlckJhbmR3aWR0aFNEUChpLnNkcCkpO28uc2V0TG9jYWxEZXNjcmlwdGlvbihpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGUudXRpbC5sb2coXCJTZXQgbG9jYWxEZXNjcmlwdGlvbjogb2ZmZXJcIixcImZvcjpcIix0LnBlZXIpLHZvaWQgdC5wcm92aWRlci5zb2NrZXQuc2VuZCh7dHlwZTpcIk9GRkVSXCIscGF5bG9hZDp7c2RwOmksdHlwZTp0LnR5cGUsbGFiZWw6dC5sYWJlbCxjb25uZWN0aW9uSWQ6dC5pZCxyZWxpYWJsZTp0LnJlbGlhYmxlLHNlcmlhbGl6YXRpb246dC5zZXJpYWxpemF0aW9uLG1ldGFkYXRhOnQubWV0YWRhdGEsYnJvd3NlcjplLnV0aWwuYnJvd3Nlcn0sZHN0OnQucGVlcn0pfSkuY2F0Y2goZnVuY3Rpb24obyl7cmV0dXJuIGZ1bmN0aW9uKG8pe1wiT3BlcmF0aW9uRXJyb3I6IEZhaWxlZCB0byBzZXQgbG9jYWwgb2ZmZXIgc2RwOiBDYWxsZWQgaW4gd3Jvbmcgc3RhdGU6IGtIYXZlUmVtb3RlT2ZmZXJcIiE9byYmKHQucHJvdmlkZXIuZW1pdEVycm9yKFwid2VicnRjXCIsbyksZS51dGlsLmxvZyhcIkZhaWxlZCB0byBzZXRMb2NhbERlc2NyaXB0aW9uLCBcIixvKSl9KG8pfSl9O28uY3JlYXRlT2ZmZXIodC5vcHRpb25zLmNvbnN0cmFpbnRzKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBpKGUpfSkuY2F0Y2goZnVuY3Rpb24obyl7cmV0dXJuIGZ1bmN0aW9uKG8pe3QucHJvdmlkZXIuZW1pdEVycm9yKFwid2VicnRjXCIsbyksZS51dGlsLmxvZyhcIkZhaWxlZCB0byBjcmVhdGVPZmZlciwgXCIsbyl9KG8pfSl9LGV4cG9ydHMuTmVnb3RpYXRvci5fbWFrZUFuc3dlcj1mdW5jdGlvbih0KXt2YXIgbz10LnBjLGk9ZnVuY3Rpb24oaSl7ZS51dGlsLmxvZyhcIkNyZWF0ZWQgYW5zd2VyLlwiKSwhZS51dGlsLnN1cHBvcnRzLnNjdHAmJlwiZGF0YVwiPT09dC50eXBlJiZ0LnJlbGlhYmxlJiYoaS5zZHA9UmVsaWFibGUuaGlnaGVyQmFuZHdpZHRoU0RQKGkuc2RwKSk7by5zZXRMb2NhbERlc2NyaXB0aW9uKGkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS51dGlsLmxvZyhcIlNldCBsb2NhbERlc2NyaXB0aW9uOiBhbnN3ZXJcIixcImZvcjpcIix0LnBlZXIpLHZvaWQgdC5wcm92aWRlci5zb2NrZXQuc2VuZCh7dHlwZTpcIkFOU1dFUlwiLHBheWxvYWQ6e3NkcDppLHR5cGU6dC50eXBlLGNvbm5lY3Rpb25JZDp0LmlkLGJyb3dzZXI6ZS51dGlsLmJyb3dzZXJ9LGRzdDp0LnBlZXJ9KX0pLmNhdGNoKGZ1bmN0aW9uKG8pe3QucHJvdmlkZXIuZW1pdEVycm9yKFwid2VicnRjXCIsbyksZS51dGlsLmxvZyhcIkZhaWxlZCB0byBzZXRMb2NhbERlc2NyaXB0aW9uLCBcIixvKX0pfTtvLmNyZWF0ZUFuc3dlcigpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSl9KS5jYXRjaChmdW5jdGlvbihvKXt0LnByb3ZpZGVyLmVtaXRFcnJvcihcIndlYnJ0Y1wiLG8pLGUudXRpbC5sb2coXCJGYWlsZWQgdG8gY3JlYXRlIGFuc3dlciwgXCIsbyl9KX0sZXhwb3J0cy5OZWdvdGlhdG9yLmhhbmRsZVNEUD1mdW5jdGlvbihvLGkscil7cj1uZXcgdC5SVENTZXNzaW9uRGVzY3JpcHRpb24ocik7dmFyIG49aS5wYztlLnV0aWwubG9nKFwiU2V0dGluZyByZW1vdGUgZGVzY3JpcHRpb25cIixyKTtuLnNldFJlbW90ZURlc2NyaXB0aW9uKHIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS51dGlsLmxvZyhcIlNldCByZW1vdGVEZXNjcmlwdGlvbjpcIixvLFwiZm9yOlwiLGkucGVlciksdm9pZChcIk9GRkVSXCI9PT1vJiZleHBvcnRzLk5lZ290aWF0b3IuX21ha2VBbnN3ZXIoaSkpfSkuY2F0Y2goZnVuY3Rpb24odCl7aS5wcm92aWRlci5lbWl0RXJyb3IoXCJ3ZWJydGNcIix0KSxlLnV0aWwubG9nKFwiRmFpbGVkIHRvIHNldFJlbW90ZURlc2NyaXB0aW9uLCBcIix0KX0pfSxleHBvcnRzLk5lZ290aWF0b3IuaGFuZGxlQ2FuZGlkYXRlPWZ1bmN0aW9uKG8saSl7dmFyIHI9aS5jYW5kaWRhdGUsbj1pLnNkcE1MaW5lSW5kZXg7by5wYy5hZGRJY2VDYW5kaWRhdGUobmV3IHQuUlRDSWNlQ2FuZGlkYXRlKHtzZHBNTGluZUluZGV4Om4sY2FuZGlkYXRlOnJ9KSksZS51dGlsLmxvZyhcIkFkZGVkIElDRSBjYW5kaWRhdGUgZm9yOlwiLG8ucGVlcil9O1xufSx7XCIuL3V0aWxcIjpcIkJIWGZcIixcIi4vYWRhcHRlclwiOlwic1h0VlwifV0sXCJkYkhQXCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcblwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT0hMDt2YXIgdD1yZXF1aXJlKFwiLi91dGlsXCIpLGU9cmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIiksaT1yZXF1aXJlKFwiLi9uZWdvdGlhdG9yXCIpO2Z1bmN0aW9uIG8ocyxhLHIpe2lmKCEodGhpcyBpbnN0YW5jZW9mIG8pKXJldHVybiBuZXcgbyhzLGEscik7ZS5FdmVudEVtaXR0ZXIuY2FsbCh0aGlzKSx0aGlzLm9wdGlvbnM9dC51dGlsLmV4dGVuZCh7fSxyKSx0aGlzLm9wZW49ITEsdGhpcy50eXBlPVwibWVkaWFcIix0aGlzLnBlZXI9cyx0aGlzLnByb3ZpZGVyPWEsdGhpcy5tZXRhZGF0YT10aGlzLm9wdGlvbnMubWV0YWRhdGEsdGhpcy5sb2NhbFN0cmVhbT10aGlzLm9wdGlvbnMuX3N0cmVhbSx0aGlzLmlkPXRoaXMub3B0aW9ucy5jb25uZWN0aW9uSWR8fG8uX2lkUHJlZml4K3QudXRpbC5yYW5kb21Ub2tlbigpLHRoaXMubG9jYWxTdHJlYW0mJmkuTmVnb3RpYXRvci5zdGFydENvbm5lY3Rpb24odGhpcyx7X3N0cmVhbTp0aGlzLmxvY2FsU3RyZWFtLG9yaWdpbmF0b3I6ITB9KX1leHBvcnRzLk1lZGlhQ29ubmVjdGlvbj1vLHQudXRpbC5pbmhlcml0cyhvLGUuRXZlbnRFbWl0dGVyKSxvLl9pZFByZWZpeD1cIm1jX1wiLG8ucHJvdG90eXBlLmFkZFN0cmVhbT1mdW5jdGlvbihlKXt0LnV0aWwubG9nKFwiUmVjZWl2aW5nIHN0cmVhbVwiLGUpLHRoaXMucmVtb3RlU3RyZWFtPWUsdGhpcy5lbWl0KFwic3RyZWFtXCIsZSl9LG8ucHJvdG90eXBlLmhhbmRsZU1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIG89ZS5wYXlsb2FkO3N3aXRjaChlLnR5cGUpe2Nhc2VcIkFOU1dFUlwiOmkuTmVnb3RpYXRvci5oYW5kbGVTRFAoZS50eXBlLHRoaXMsby5zZHApLHRoaXMub3Blbj0hMDticmVhaztjYXNlXCJDQU5ESURBVEVcIjppLk5lZ290aWF0b3IuaGFuZGxlQ2FuZGlkYXRlKHRoaXMsby5jYW5kaWRhdGUpO2JyZWFrO2RlZmF1bHQ6dC51dGlsLndhcm4oXCJVbnJlY29nbml6ZWQgbWVzc2FnZSB0eXBlOlwiLGUudHlwZSxcImZyb20gcGVlcjpcIix0aGlzLnBlZXIpfX0sby5wcm90b3R5cGUuYW5zd2VyPWZ1bmN0aW9uKGUpe2lmKHRoaXMubG9jYWxTdHJlYW0pdC51dGlsLndhcm4oXCJMb2NhbCBzdHJlYW0gYWxyZWFkeSBleGlzdHMgb24gdGhpcyBNZWRpYUNvbm5lY3Rpb24uIEFyZSB5b3UgYW5zd2VyaW5nIGEgY2FsbCB0d2ljZT9cIik7ZWxzZXt0aGlzLm9wdGlvbnMuX3BheWxvYWQuX3N0cmVhbT1lLHRoaXMubG9jYWxTdHJlYW09ZSxpLk5lZ290aWF0b3Iuc3RhcnRDb25uZWN0aW9uKHRoaXMsdGhpcy5vcHRpb25zLl9wYXlsb2FkKTtmb3IodmFyIG89dGhpcy5wcm92aWRlci5fZ2V0TWVzc2FnZXModGhpcy5pZCkscz0wLGE9by5sZW5ndGg7czxhO3MrPTEpdGhpcy5oYW5kbGVNZXNzYWdlKG9bc10pO3RoaXMub3Blbj0hMH19LG8ucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5vcGVuJiYodGhpcy5vcGVuPSExLGkuTmVnb3RpYXRvci5jbGVhbnVwKHRoaXMpLHRoaXMuZW1pdChcImNsb3NlXCIpKX07XG59LHtcIi4vdXRpbFwiOlwiQkhYZlwiLFwiZXZlbnRlbWl0dGVyM1wiOlwiMkpKbFwiLFwiLi9uZWdvdGlhdG9yXCI6XCJIQ2RYXCJ9XSxcIlQ5a09cIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xudmFyIGdsb2JhbCA9IGFyZ3VtZW50c1szXTtcbnZhciBlPWFyZ3VtZW50c1szXSxyPXJlcXVpcmUoXCJqcy1iaW5hcnlwYWNrXCIpLHQ9e2RlYnVnOiExLGluaGVyaXRzOmZ1bmN0aW9uKGUscil7ZS5zdXBlcl89cixlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHIucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KX0sZXh0ZW5kOmZ1bmN0aW9uKGUscil7Zm9yKHZhciB0IGluIHIpci5oYXNPd25Qcm9wZXJ0eSh0KSYmKGVbdF09clt0XSk7cmV0dXJuIGV9LHBhY2s6ci5wYWNrLHVucGFjazpyLnVucGFjayxsb2c6ZnVuY3Rpb24oKXtpZih0LmRlYnVnKXtmb3IodmFyIGU9W10scj0wO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspZVtyXT1hcmd1bWVudHNbcl07ZS51bnNoaWZ0KFwiUmVsaWFibGU6IFwiKSxjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLGUpfX0sc2V0WmVyb1RpbWVvdXQ6ZnVuY3Rpb24oZSl7dmFyIHI9W10sdD1cInplcm8tdGltZW91dC1tZXNzYWdlXCI7ZnVuY3Rpb24gbihuKXtuLnNvdXJjZT09ZSYmbi5kYXRhPT10JiYobi5zdG9wUHJvcGFnYXRpb24mJm4uc3RvcFByb3BhZ2F0aW9uKCksci5sZW5ndGgmJnIuc2hpZnQoKSgpKX1yZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixuLCEwKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsbiksZnVuY3Rpb24obil7ci5wdXNoKG4pLGUucG9zdE1lc3NhZ2UodCxcIipcIil9fSh0aGlzKSxibG9iVG9BcnJheUJ1ZmZlcjpmdW5jdGlvbihlLHIpe3ZhciB0PW5ldyBGaWxlUmVhZGVyO3Qub25sb2FkPWZ1bmN0aW9uKGUpe3IoZS50YXJnZXQucmVzdWx0KX0sdC5yZWFkQXNBcnJheUJ1ZmZlcihlKX0sYmxvYlRvQmluYXJ5U3RyaW5nOmZ1bmN0aW9uKGUscil7dmFyIHQ9bmV3IEZpbGVSZWFkZXI7dC5vbmxvYWQ9ZnVuY3Rpb24oZSl7cihlLnRhcmdldC5yZXN1bHQpfSx0LnJlYWRBc0JpbmFyeVN0cmluZyhlKX0sYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcjpmdW5jdGlvbihlKXtmb3IodmFyIHI9bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpLHQ9MDt0PGUubGVuZ3RoO3QrKylyW3RdPTI1NSZlLmNoYXJDb2RlQXQodCk7cmV0dXJuIHIuYnVmZmVyfSxyYW5kb21Ub2tlbjpmdW5jdGlvbigpe3JldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMil9fTttb2R1bGUuZXhwb3J0cz10O1xufSx7XCJqcy1iaW5hcnlwYWNrXCI6XCJsSE9jXCJ9XSxcImFZRkpcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xudmFyIHQ9cmVxdWlyZShcIi4vdXRpbFwiKTtmdW5jdGlvbiBlKG4saSl7aWYoISh0aGlzIGluc3RhbmNlb2YgZSkpcmV0dXJuIG5ldyBlKG4pO3RoaXMuX2RjPW4sdC5kZWJ1Zz1pLHRoaXMuX291dGdvaW5nPXt9LHRoaXMuX2luY29taW5nPXt9LHRoaXMuX3JlY2VpdmVkPXt9LHRoaXMuX3dpbmRvdz0xZTMsdGhpcy5fbXR1PTUwMCx0aGlzLl9pbnRlcnZhbD0wLHRoaXMuX2NvdW50PTAsdGhpcy5fcXVldWU9W10sdGhpcy5fc2V0dXBEQygpfWUucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZSl7dmFyIG49dC5wYWNrKGUpO24uc2l6ZTx0aGlzLl9tdHU/dGhpcy5faGFuZGxlU2VuZChbXCJub1wiLG5dKToodGhpcy5fb3V0Z29pbmdbdGhpcy5fY291bnRdPXthY2s6MCxjaHVua3M6dGhpcy5fY2h1bmsobil9LHQuZGVidWcmJih0aGlzLl9vdXRnb2luZ1t0aGlzLl9jb3VudF0udGltZXI9bmV3IERhdGUpLHRoaXMuX3NlbmRXaW5kb3dlZENodW5rcyh0aGlzLl9jb3VudCksdGhpcy5fY291bnQrPTEpfSxlLnByb3RvdHlwZS5fc2V0dXBJbnRlcnZhbD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fdGltZW91dD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3ZhciBlPXQuX3F1ZXVlLnNoaWZ0KCk7aWYoZS5fbXVsdGlwbGUpZm9yKHZhciBuPTAsaT1lLmxlbmd0aDtuPGk7bis9MSl0Ll9pbnRlcnZhbFNlbmQoZVtuXSk7ZWxzZSB0Ll9pbnRlcnZhbFNlbmQoZSl9LHRoaXMuX2ludGVydmFsKX0sZS5wcm90b3R5cGUuX2ludGVydmFsU2VuZD1mdW5jdGlvbihlKXt2YXIgbj10aGlzO2U9dC5wYWNrKGUpLHQuYmxvYlRvQmluYXJ5U3RyaW5nKGUsZnVuY3Rpb24odCl7bi5fZGMuc2VuZCh0KX0pLDA9PT1uLl9xdWV1ZS5sZW5ndGgmJihjbGVhclRpbWVvdXQobi5fdGltZW91dCksbi5fdGltZW91dD1udWxsKX0sZS5wcm90b3R5cGUuX3Byb2Nlc3NBY2tzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMuX291dGdvaW5nKXRoaXMuX291dGdvaW5nLmhhc093blByb3BlcnR5KHQpJiZ0aGlzLl9zZW5kV2luZG93ZWRDaHVua3ModCl9LGUucHJvdG90eXBlLl9oYW5kbGVTZW5kPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0hMCxuPTAsaT10aGlzLl9xdWV1ZS5sZW5ndGg7bjxpO24rPTEpe3ZhciBvPXRoaXMuX3F1ZXVlW25dO289PT10P2U9ITE6by5fbXVsdGlwbGUmJi0xIT09by5pbmRleE9mKHQpJiYoZT0hMSl9ZSYmKHRoaXMuX3F1ZXVlLnB1c2godCksdGhpcy5fdGltZW91dHx8dGhpcy5fc2V0dXBJbnRlcnZhbCgpKX0sZS5wcm90b3R5cGUuX3NldHVwREM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuX2RjLm9ubWVzc2FnZT1mdW5jdGlvbihuKXt2YXIgaT1uLmRhdGE7aWYoaS5jb25zdHJ1Y3Rvcj09PVN0cmluZyl7dmFyIG89dC5iaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGkpO2k9dC51bnBhY2sobyksZS5faGFuZGxlTWVzc2FnZShpKX19fSxlLnByb3RvdHlwZS5faGFuZGxlTWVzc2FnZT1mdW5jdGlvbihlKXt2YXIgbixpPWVbMV0sbz10aGlzLl9pbmNvbWluZ1tpXSxzPXRoaXMuX291dGdvaW5nW2ldO3N3aXRjaChlWzBdKXtjYXNlXCJub1wiOnZhciBhPWk7YSYmdGhpcy5vbm1lc3NhZ2UodC51bnBhY2soYSkpO2JyZWFrO2Nhc2VcImVuZFwiOmlmKG49byx0aGlzLl9yZWNlaXZlZFtpXT1lWzJdLCFuKWJyZWFrO3RoaXMuX2FjayhpKTticmVhaztjYXNlXCJhY2tcIjppZihuPXMpe3ZhciBoPWVbMl07bi5hY2s9TWF0aC5tYXgoaCxuLmFjayksbi5hY2s+PW4uY2h1bmtzLmxlbmd0aD8odC5sb2coXCJUaW1lOiBcIixuZXcgRGF0ZS1uLnRpbWVyKSxkZWxldGUgdGhpcy5fb3V0Z29pbmdbaV0pOnRoaXMuX3Byb2Nlc3NBY2tzKCl9YnJlYWs7Y2FzZVwiY2h1bmtcIjppZighKG49bykpe2lmKCEwPT09dGhpcy5fcmVjZWl2ZWRbaV0pYnJlYWs7bj17YWNrOltcImFja1wiLGksMF0sY2h1bmtzOltdfSx0aGlzLl9pbmNvbWluZ1tpXT1ufXZhciByPWVbMl0sdT1lWzNdO24uY2h1bmtzW3JdPW5ldyBVaW50OEFycmF5KHUpLHI9PT1uLmFja1syXSYmdGhpcy5fY2FsY3VsYXRlTmV4dEFjayhpKSx0aGlzLl9hY2soaSk7YnJlYWs7ZGVmYXVsdDp0aGlzLl9oYW5kbGVTZW5kKGUpfX0sZS5wcm90b3R5cGUuX2NodW5rPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbj1bXSxpPWUuc2l6ZSxvPTA7bzxpOyl7dmFyIHM9TWF0aC5taW4oaSxvK3RoaXMuX210dSksYT17cGF5bG9hZDplLnNsaWNlKG8scyl9O24ucHVzaChhKSxvPXN9cmV0dXJuIHQubG9nKFwiQ3JlYXRlZFwiLG4ubGVuZ3RoLFwiY2h1bmtzLlwiKSxufSxlLnByb3RvdHlwZS5fYWNrPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2luY29taW5nW3RdLmFjazt0aGlzLl9yZWNlaXZlZFt0XT09PWVbMl0mJih0aGlzLl9jb21wbGV0ZSh0KSx0aGlzLl9yZWNlaXZlZFt0XT0hMCksdGhpcy5faGFuZGxlU2VuZChlKX0sZS5wcm90b3R5cGUuX2NhbGN1bGF0ZU5leHRBY2s9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMuX2luY29taW5nW3RdLG49ZS5jaHVua3MsaT0wLG89bi5sZW5ndGg7aTxvO2krPTEpaWYodm9pZCAwPT09bltpXSlyZXR1cm4gdm9pZChlLmFja1syXT1pKTtlLmFja1syXT1uLmxlbmd0aH0sZS5wcm90b3R5cGUuX3NlbmRXaW5kb3dlZENodW5rcz1mdW5jdGlvbihlKXt0LmxvZyhcInNlbmRXaW5kb3dlZENodW5rcyBmb3I6IFwiLGUpO2Zvcih2YXIgbj10aGlzLl9vdXRnb2luZ1tlXSxpPW4uY2h1bmtzLG89W10scz1NYXRoLm1pbihuLmFjayt0aGlzLl93aW5kb3csaS5sZW5ndGgpLGE9bi5hY2s7YTxzO2ErPTEpaVthXS5zZW50JiZhIT09bi5hY2t8fChpW2FdLnNlbnQ9ITAsby5wdXNoKFtcImNodW5rXCIsZSxhLGlbYV0ucGF5bG9hZF0pKTtuLmFjayt0aGlzLl93aW5kb3c+PWkubGVuZ3RoJiZvLnB1c2goW1wiZW5kXCIsZSxpLmxlbmd0aF0pLG8uX211bHRpcGxlPSEwLHRoaXMuX2hhbmRsZVNlbmQobyl9LGUucHJvdG90eXBlLl9jb21wbGV0ZT1mdW5jdGlvbihlKXt0LmxvZyhcIkNvbXBsZXRlZCBjYWxsZWQgZm9yXCIsZSk7dmFyIG49dGhpcyxpPXRoaXMuX2luY29taW5nW2VdLmNodW5rcyxvPW5ldyBCbG9iKGkpO3QuYmxvYlRvQXJyYXlCdWZmZXIobyxmdW5jdGlvbihlKXtuLm9ubWVzc2FnZSh0LnVucGFjayhlKSl9KSxkZWxldGUgdGhpcy5faW5jb21pbmdbZV19LGUuaGlnaGVyQmFuZHdpZHRoU0RQPWZ1bmN0aW9uKHQpe3ZhciBlPW5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9DaHJvbWVcXC8oLio/KSAvKTtpZihlJiYoZT1wYXJzZUludChlWzFdLnNwbGl0KFwiLlwiKS5zaGlmdCgpKSk8MzEpe3ZhciBuPXQuc3BsaXQoXCJiPUFTOjMwXCIpO2lmKG4ubGVuZ3RoPjEpcmV0dXJuIG5bMF0rXCJiPUFTOjEwMjQwMFwiK25bMV19cmV0dXJuIHR9LGUucHJvdG90eXBlLm9ubWVzc2FnZT1mdW5jdGlvbih0KXt9LG1vZHVsZS5leHBvcnRzLlJlbGlhYmxlPWU7XG59LHtcIi4vdXRpbFwiOlwiVDlrT1wifV0sXCJHQlRRXCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcblwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT0hMDt2YXIgdD1yZXF1aXJlKFwiLi91dGlsXCIpLGU9cmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIiksaT1yZXF1aXJlKFwiLi9uZWdvdGlhdG9yXCIpLG49cmVxdWlyZShcInJlbGlhYmxlXCIpO2Z1bmN0aW9uIHMobixyLGEpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHMpKXJldHVybiBuZXcgcyhuLHIsYSk7ZS5FdmVudEVtaXR0ZXIuY2FsbCh0aGlzKSx0aGlzLm9wdGlvbnM9dC51dGlsLmV4dGVuZCh7c2VyaWFsaXphdGlvbjpcImJpbmFyeVwiLHJlbGlhYmxlOiExfSxhKSx0aGlzLm9wZW49ITEsdGhpcy50eXBlPVwiZGF0YVwiLHRoaXMucGVlcj1uLHRoaXMucHJvdmlkZXI9cix0aGlzLmlkPXRoaXMub3B0aW9ucy5jb25uZWN0aW9uSWR8fHMuX2lkUHJlZml4K3QudXRpbC5yYW5kb21Ub2tlbigpLHRoaXMubGFiZWw9dGhpcy5vcHRpb25zLmxhYmVsfHx0aGlzLmlkLHRoaXMubWV0YWRhdGE9dGhpcy5vcHRpb25zLm1ldGFkYXRhLHRoaXMuc2VyaWFsaXphdGlvbj10aGlzLm9wdGlvbnMuc2VyaWFsaXphdGlvbix0aGlzLnJlbGlhYmxlPXRoaXMub3B0aW9ucy5yZWxpYWJsZSx0aGlzLl9idWZmZXI9W10sdGhpcy5fYnVmZmVyaW5nPSExLHRoaXMuYnVmZmVyU2l6ZT0wLHRoaXMuX2NodW5rZWREYXRhPXt9LHRoaXMub3B0aW9ucy5fcGF5bG9hZCYmKHRoaXMuX3BlZXJCcm93c2VyPXRoaXMub3B0aW9ucy5fcGF5bG9hZC5icm93c2VyKSxpLk5lZ290aWF0b3Iuc3RhcnRDb25uZWN0aW9uKHRoaXMsdGhpcy5vcHRpb25zLl9wYXlsb2FkfHx7b3JpZ2luYXRvcjohMH0pfWV4cG9ydHMuRGF0YUNvbm5lY3Rpb249cyx0LnV0aWwuaW5oZXJpdHMocyxlLkV2ZW50RW1pdHRlcikscy5faWRQcmVmaXg9XCJkY19cIixzLnByb3RvdHlwZS5pbml0aWFsaXplPWZ1bmN0aW9uKHQpe3RoaXMuX2RjPXRoaXMuZGF0YUNoYW5uZWw9dCx0aGlzLl9jb25maWd1cmVEYXRhQ2hhbm5lbCgpfSxzLnByb3RvdHlwZS5fY29uZmlndXJlRGF0YUNoYW5uZWw9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3QudXRpbC5zdXBwb3J0cy5zY3RwJiYodGhpcy5fZGMuYmluYXJ5VHlwZT1cImFycmF5YnVmZmVyXCIpLHRoaXMuX2RjLm9ub3Blbj1mdW5jdGlvbigpe3QudXRpbC5sb2coXCJEYXRhIGNoYW5uZWwgY29ubmVjdGlvbiBzdWNjZXNzXCIpLGUub3Blbj0hMCxlLmVtaXQoXCJvcGVuXCIpfSwhdC51dGlsLnN1cHBvcnRzLnNjdHAmJnRoaXMucmVsaWFibGUmJih0aGlzLl9yZWxpYWJsZT1uZXcgbi5SZWxpYWJsZSh0aGlzLl9kYyx0LnV0aWwuZGVidWcpKSx0aGlzLl9yZWxpYWJsZT90aGlzLl9yZWxpYWJsZS5vbm1lc3NhZ2U9ZnVuY3Rpb24odCl7ZS5lbWl0KFwiZGF0YVwiLHQpfTp0aGlzLl9kYy5vbm1lc3NhZ2U9ZnVuY3Rpb24odCl7ZS5faGFuZGxlRGF0YU1lc3NhZ2UodCl9LHRoaXMuX2RjLm9uY2xvc2U9ZnVuY3Rpb24oaSl7dC51dGlsLmxvZyhcIkRhdGFDaGFubmVsIGNsb3NlZCBmb3I6XCIsZS5wZWVyKSxlLmNsb3NlKCl9fSxzLnByb3RvdHlwZS5faGFuZGxlRGF0YU1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcyxuPWUuZGF0YSxzPW4uY29uc3RydWN0b3I7aWYoXCJiaW5hcnlcIj09PXRoaXMuc2VyaWFsaXphdGlvbnx8XCJiaW5hcnktdXRmOFwiPT09dGhpcy5zZXJpYWxpemF0aW9uKXtpZihzPT09QmxvYilyZXR1cm4gdm9pZCB0LnV0aWwuYmxvYlRvQXJyYXlCdWZmZXIobixmdW5jdGlvbihlKXtuPXQudXRpbC51bnBhY2soZSksaS5lbWl0KFwiZGF0YVwiLG4pfSk7aWYocz09PUFycmF5QnVmZmVyKW49dC51dGlsLnVucGFjayhuKTtlbHNlIGlmKHM9PT1TdHJpbmcpe3ZhciByPXQudXRpbC5iaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKG4pO249dC51dGlsLnVucGFjayhyKX19ZWxzZVwianNvblwiPT09dGhpcy5zZXJpYWxpemF0aW9uJiYobj1KU09OLnBhcnNlKG4pKTtpZihuLl9fcGVlckRhdGEpe3ZhciBhPW4uX19wZWVyRGF0YSxvPXRoaXMuX2NodW5rZWREYXRhW2FdfHx7ZGF0YTpbXSxjb3VudDowLHRvdGFsOm4udG90YWx9O3JldHVybiBvLmRhdGFbbi5uXT1uLmRhdGEsby5jb3VudCs9MSxvLnRvdGFsPT09by5jb3VudCYmKGRlbGV0ZSB0aGlzLl9jaHVua2VkRGF0YVthXSxuPW5ldyBCbG9iKG8uZGF0YSksdGhpcy5faGFuZGxlRGF0YU1lc3NhZ2Uoe2RhdGE6bn0pKSx2b2lkKHRoaXMuX2NodW5rZWREYXRhW2FdPW8pfXRoaXMuZW1pdChcImRhdGFcIixuKX0scy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLm9wZW4mJih0aGlzLm9wZW49ITEsaS5OZWdvdGlhdG9yLmNsZWFudXAodGhpcyksdGhpcy5lbWl0KFwiY2xvc2VcIikpfSxzLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGUsaSl7aWYodGhpcy5vcGVuKWlmKHRoaXMuX3JlbGlhYmxlKXRoaXMuX3JlbGlhYmxlLnNlbmQoZSk7ZWxzZXt2YXIgbj10aGlzO2lmKFwianNvblwiPT09dGhpcy5zZXJpYWxpemF0aW9uKXRoaXMuX2J1ZmZlcmVkU2VuZChKU09OLnN0cmluZ2lmeShlKSk7ZWxzZSBpZihcImJpbmFyeVwiPT09dGhpcy5zZXJpYWxpemF0aW9ufHxcImJpbmFyeS11dGY4XCI9PT10aGlzLnNlcmlhbGl6YXRpb24pe3ZhciBzPXQudXRpbC5wYWNrKGUpO2lmKCh0LnV0aWwuY2h1bmtlZEJyb3dzZXJzW3RoaXMuX3BlZXJCcm93c2VyXXx8dC51dGlsLmNodW5rZWRCcm93c2Vyc1t0LnV0aWwuYnJvd3Nlcl0pJiYhaSYmcy5zaXplPnQudXRpbC5jaHVua2VkTVRVKXJldHVybiB2b2lkIHRoaXMuX3NlbmRDaHVua3Mocyk7dC51dGlsLnN1cHBvcnRzLnNjdHA/dC51dGlsLnN1cHBvcnRzLmJpbmFyeUJsb2I/dGhpcy5fYnVmZmVyZWRTZW5kKHMpOnQudXRpbC5ibG9iVG9BcnJheUJ1ZmZlcihzLGZ1bmN0aW9uKHQpe24uX2J1ZmZlcmVkU2VuZCh0KX0pOnQudXRpbC5ibG9iVG9CaW5hcnlTdHJpbmcocyxmdW5jdGlvbih0KXtuLl9idWZmZXJlZFNlbmQodCl9KX1lbHNlIHRoaXMuX2J1ZmZlcmVkU2VuZChlKX1lbHNlIHRoaXMuZW1pdChcImVycm9yXCIsbmV3IEVycm9yKFwiQ29ubmVjdGlvbiBpcyBub3Qgb3Blbi4gWW91IHNob3VsZCBsaXN0ZW4gZm9yIHRoZSBgb3BlbmAgZXZlbnQgYmVmb3JlIHNlbmRpbmcgbWVzc2FnZXMuXCIpKX0scy5wcm90b3R5cGUuX2J1ZmZlcmVkU2VuZD1mdW5jdGlvbih0KXshdGhpcy5fYnVmZmVyaW5nJiZ0aGlzLl90cnlTZW5kKHQpfHwodGhpcy5fYnVmZmVyLnB1c2godCksdGhpcy5idWZmZXJTaXplPXRoaXMuX2J1ZmZlci5sZW5ndGgpfSxzLnByb3RvdHlwZS5fdHJ5U2VuZD1mdW5jdGlvbih0KXt0cnl7dGhpcy5fZGMuc2VuZCh0KX1jYXRjaChpKXt0aGlzLl9idWZmZXJpbmc9ITA7dmFyIGU9dGhpcztyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2UuX2J1ZmZlcmluZz0hMSxlLl90cnlCdWZmZXIoKX0sMTAwKSwhMX1yZXR1cm4hMH0scy5wcm90b3R5cGUuX3RyeUJ1ZmZlcj1mdW5jdGlvbigpe2lmKDAhPT10aGlzLl9idWZmZXIubGVuZ3RoKXt2YXIgdD10aGlzLl9idWZmZXJbMF07dGhpcy5fdHJ5U2VuZCh0KSYmKHRoaXMuX2J1ZmZlci5zaGlmdCgpLHRoaXMuYnVmZmVyU2l6ZT10aGlzLl9idWZmZXIubGVuZ3RoLHRoaXMuX3RyeUJ1ZmZlcigpKX19LHMucHJvdG90eXBlLl9zZW5kQ2h1bmtzPWZ1bmN0aW9uKGUpe2Zvcih2YXIgaT10LnV0aWwuY2h1bmsoZSksbj0wLHM9aS5sZW5ndGg7bjxzO24rPTEpe2U9aVtuXTt0aGlzLnNlbmQoZSwhMCl9fSxzLnByb3RvdHlwZS5oYW5kbGVNZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciBuPWUucGF5bG9hZDtzd2l0Y2goZS50eXBlKXtjYXNlXCJBTlNXRVJcIjp0aGlzLl9wZWVyQnJvd3Nlcj1uLmJyb3dzZXIsaS5OZWdvdGlhdG9yLmhhbmRsZVNEUChlLnR5cGUsdGhpcyxuLnNkcCk7YnJlYWs7Y2FzZVwiQ0FORElEQVRFXCI6aS5OZWdvdGlhdG9yLmhhbmRsZUNhbmRpZGF0ZSh0aGlzLG4uY2FuZGlkYXRlKTticmVhaztkZWZhdWx0OnQudXRpbC53YXJuKFwiVW5yZWNvZ25pemVkIG1lc3NhZ2UgdHlwZTpcIixlLnR5cGUsXCJmcm9tIHBlZXI6XCIsdGhpcy5wZWVyKX19O1xufSx7XCIuL3V0aWxcIjpcIkJIWGZcIixcImV2ZW50ZW1pdHRlcjNcIjpcIjJKSmxcIixcIi4vbmVnb3RpYXRvclwiOlwiSENkWFwiLFwicmVsaWFibGVcIjpcImFZRkpcIn1dLFwiSHhwZFwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG5cInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9ITA7dmFyIGU9cmVxdWlyZShcIi4vdXRpbFwiKSx0PXJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpLG89cmVxdWlyZShcIi4vc29ja2V0XCIpLG49cmVxdWlyZShcIi4vbWVkaWFjb25uZWN0aW9uXCIpLGk9cmVxdWlyZShcIi4vZGF0YWNvbm5lY3Rpb25cIik7ZnVuY3Rpb24gcyhvLG4pe2lmKCEodGhpcyBpbnN0YW5jZW9mIHMpKXJldHVybiBuZXcgcyhvLG4pO3QuRXZlbnRFbWl0dGVyLmNhbGwodGhpcyksbyYmby5jb25zdHJ1Y3Rvcj09T2JqZWN0PyhuPW8sbz12b2lkIDApOm8mJihvPW8udG9TdHJpbmcoKSksKG49ZS51dGlsLmV4dGVuZCh7ZGVidWc6MCxob3N0OmUudXRpbC5DTE9VRF9IT1NULHBvcnQ6ZS51dGlsLkNMT1VEX1BPUlQscGF0aDpcIi9cIix0b2tlbjplLnV0aWwucmFuZG9tVG9rZW4oKSxjb25maWc6ZS51dGlsLmRlZmF1bHRDb25maWd9LG4pKS5rZXk9XCJwZWVyanNcIix0aGlzLm9wdGlvbnM9bixcIi9cIj09PW4uaG9zdCYmKG4uaG9zdD13aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpLFwiL1wiIT09bi5wYXRoWzBdJiYobi5wYXRoPVwiL1wiK24ucGF0aCksXCIvXCIhPT1uLnBhdGhbbi5wYXRoLmxlbmd0aC0xXSYmKG4ucGF0aCs9XCIvXCIpLHZvaWQgMD09PW4uc2VjdXJlJiZuLmhvc3QhPT1lLnV0aWwuQ0xPVURfSE9TVD9uLnNlY3VyZT1lLnV0aWwuaXNTZWN1cmUoKTpuLmhvc3Q9PWUudXRpbC5DTE9VRF9IT1NUJiYobi5zZWN1cmU9ITApLG4ubG9nRnVuY3Rpb24mJmUudXRpbC5zZXRMb2dGdW5jdGlvbihuLmxvZ0Z1bmN0aW9uKSxlLnV0aWwuc2V0TG9nTGV2ZWwobi5kZWJ1ZyksZS51dGlsLnN1cHBvcnRzLmF1ZGlvVmlkZW98fGUudXRpbC5zdXBwb3J0cy5kYXRhP2UudXRpbC52YWxpZGF0ZUlkKG8pPyh0aGlzLmRlc3Ryb3llZD0hMSx0aGlzLmRpc2Nvbm5lY3RlZD0hMSx0aGlzLm9wZW49ITEsdGhpcy5jb25uZWN0aW9ucz17fSx0aGlzLl9sb3N0TWVzc2FnZXM9e30sdGhpcy5faW5pdGlhbGl6ZVNlcnZlckNvbm5lY3Rpb24oKSxvP3RoaXMuX2luaXRpYWxpemUobyk6dGhpcy5fcmV0cmlldmVJZCgpKTp0aGlzLl9kZWxheWVkQWJvcnQoXCJpbnZhbGlkLWlkXCIsJ0lEIFwiJytvKydcIiBpcyBpbnZhbGlkJyk6dGhpcy5fZGVsYXllZEFib3J0KFwiYnJvd3Nlci1pbmNvbXBhdGlibGVcIixcIlRoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWJSVENcIil9ZXhwb3J0cy5QZWVyPXMsZS51dGlsLmluaGVyaXRzKHMsdC5FdmVudEVtaXR0ZXIpLHMucHJvdG90eXBlLl9pbml0aWFsaXplU2VydmVyQ29ubmVjdGlvbj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5zb2NrZXQ9bmV3IG8uU29ja2V0KHRoaXMub3B0aW9ucy5zZWN1cmUsdGhpcy5vcHRpb25zLmhvc3QsdGhpcy5vcHRpb25zLnBvcnQsdGhpcy5vcHRpb25zLnBhdGgsdGhpcy5vcHRpb25zLmtleSx0aGlzLm9wdGlvbnMud3Nwb3J0KSx0aGlzLnNvY2tldC5vbihcIm1lc3NhZ2VcIixmdW5jdGlvbih0KXtlLl9oYW5kbGVNZXNzYWdlKHQpfSksdGhpcy5zb2NrZXQub24oXCJlcnJvclwiLGZ1bmN0aW9uKHQpe2UuX2Fib3J0KFwic29ja2V0LWVycm9yXCIsdCl9KSx0aGlzLnNvY2tldC5vbihcImRpc2Nvbm5lY3RlZFwiLGZ1bmN0aW9uKCl7ZS5kaXNjb25uZWN0ZWR8fChlLmVtaXRFcnJvcihcIm5ldHdvcmtcIixcIkxvc3QgY29ubmVjdGlvbiB0byBzZXJ2ZXIuXCIpLGUuZGlzY29ubmVjdCgpKX0pLHRoaXMuc29ja2V0Lm9uKFwiY2xvc2VcIixmdW5jdGlvbigpe2UuZGlzY29ubmVjdGVkfHxlLl9hYm9ydChcInNvY2tldC1jbG9zZWRcIixcIlVuZGVybHlpbmcgc29ja2V0IGlzIGFscmVhZHkgY2xvc2VkLlwiKX0pfSxzLnByb3RvdHlwZS5fcmV0cmlldmVJZD1mdW5jdGlvbih0KXt2YXIgbz10aGlzLG49bmV3IFhNTEh0dHBSZXF1ZXN0LGk9KHRoaXMub3B0aW9ucy5zZWN1cmU/XCJodHRwczovL1wiOlwiaHR0cDovL1wiKSt0aGlzLm9wdGlvbnMuaG9zdCtcIjpcIit0aGlzLm9wdGlvbnMucG9ydCt0aGlzLm9wdGlvbnMucGF0aCt0aGlzLm9wdGlvbnMua2V5K1wiL2lkXCI7aSs9XCI/dHM9XCIrKG5ldyBEYXRlKS5nZXRUaW1lKCkrTWF0aC5yYW5kb20oKSxuLm9wZW4oXCJnZXRcIixpLCEwKSxuLm9uZXJyb3I9ZnVuY3Rpb24odCl7ZS51dGlsLmVycm9yKFwiRXJyb3IgcmV0cmlldmluZyBJRFwiLHQpO3ZhciBuPVwiXCI7XCIvXCI9PT1vLm9wdGlvbnMucGF0aCYmby5vcHRpb25zLmhvc3QhPT1lLnV0aWwuQ0xPVURfSE9TVCYmKG49XCIgSWYgeW91IHBhc3NlZCBpbiBhIGBwYXRoYCB0byB5b3VyIHNlbGYtaG9zdGVkIFBlZXJTZXJ2ZXIsIHlvdSdsbCBhbHNvIG5lZWQgdG8gcGFzcyBpbiB0aGF0IHNhbWUgcGF0aCB3aGVuIGNyZWF0aW5nIGEgbmV3IFBlZXIuXCIpLG8uX2Fib3J0KFwic2VydmVyLWVycm9yXCIsXCJDb3VsZCBub3QgZ2V0IGFuIElEIGZyb20gdGhlIHNlcnZlci5cIituKX0sbi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09bi5yZWFkeVN0YXRlJiYoMjAwPT09bi5zdGF0dXM/by5faW5pdGlhbGl6ZShuLnJlc3BvbnNlVGV4dCk6bi5vbmVycm9yKCkpfSxuLnNlbmQobnVsbCl9LHMucHJvdG90eXBlLl9pbml0aWFsaXplPWZ1bmN0aW9uKGUpe3RoaXMuaWQ9ZSx0aGlzLnNvY2tldC5zdGFydCh0aGlzLmlkLHRoaXMub3B0aW9ucy50b2tlbil9LHMucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlPWZ1bmN0aW9uKHQpe3ZhciBvLHM9dC50eXBlLHI9dC5wYXlsb2FkLGE9dC5zcmM7c3dpdGNoKHMpe2Nhc2VcIk9QRU5cIjp0aGlzLmVtaXQoXCJvcGVuXCIsdGhpcy5pZCksdGhpcy5vcGVuPSEwO2JyZWFrO2Nhc2VcIkVSUk9SXCI6dGhpcy5fYWJvcnQoXCJzZXJ2ZXItZXJyb3JcIixyLm1zZyk7YnJlYWs7Y2FzZVwiSUQtVEFLRU5cIjp0aGlzLl9hYm9ydChcInVuYXZhaWxhYmxlLWlkXCIsXCJJRCBgXCIrdGhpcy5pZCtcImAgaXMgdGFrZW5cIik7YnJlYWs7Y2FzZVwiSU5WQUxJRC1LRVlcIjp0aGlzLl9hYm9ydChcImludmFsaWQta2V5XCIsJ0FQSSBLRVkgXCInK3RoaXMub3B0aW9ucy5rZXkrJ1wiIGlzIGludmFsaWQnKTticmVhaztjYXNlXCJMRUFWRVwiOmUudXRpbC5sb2coXCJSZWNlaXZlZCBsZWF2ZSBtZXNzYWdlIGZyb21cIixhKSx0aGlzLl9jbGVhbnVwUGVlcihhKTticmVhaztjYXNlXCJFWFBJUkVcIjp0aGlzLmVtaXRFcnJvcihcInBlZXItdW5hdmFpbGFibGVcIixcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHBlZXIgXCIrYSk7YnJlYWs7Y2FzZVwiT0ZGRVJcIjp2YXIgYz1yLmNvbm5lY3Rpb25JZDtpZigobz10aGlzLmdldENvbm5lY3Rpb24oYSxjKSkmJihvLmNsb3NlKCksZS51dGlsLndhcm4oXCJPZmZlciByZWNlaXZlZCBmb3IgZXhpc3RpbmcgQ29ubmVjdGlvbiBJRDpcIixjKSksXCJtZWRpYVwiPT09ci50eXBlKW89bmV3IG4uTWVkaWFDb25uZWN0aW9uKGEsdGhpcyx7Y29ubmVjdGlvbklkOmMsX3BheWxvYWQ6cixtZXRhZGF0YTpyLm1ldGFkYXRhfSksdGhpcy5fYWRkQ29ubmVjdGlvbihhLG8pLHRoaXMuZW1pdChcImNhbGxcIixvKTtlbHNle2lmKFwiZGF0YVwiIT09ci50eXBlKXJldHVybiB2b2lkIGUudXRpbC53YXJuKFwiUmVjZWl2ZWQgbWFsZm9ybWVkIGNvbm5lY3Rpb24gdHlwZTpcIixyLnR5cGUpO289bmV3IGkuRGF0YUNvbm5lY3Rpb24oYSx0aGlzLHtjb25uZWN0aW9uSWQ6YyxfcGF5bG9hZDpyLG1ldGFkYXRhOnIubWV0YWRhdGEsbGFiZWw6ci5sYWJlbCxzZXJpYWxpemF0aW9uOnIuc2VyaWFsaXphdGlvbixyZWxpYWJsZTpyLnJlbGlhYmxlfSksdGhpcy5fYWRkQ29ubmVjdGlvbihhLG8pLHRoaXMuZW1pdChcImNvbm5lY3Rpb25cIixvKX1mb3IodmFyIGg9dGhpcy5fZ2V0TWVzc2FnZXMoYyksZD0wLGw9aC5sZW5ndGg7ZDxsO2QrPTEpby5oYW5kbGVNZXNzYWdlKGhbZF0pO2JyZWFrO2RlZmF1bHQ6aWYoIXIpcmV0dXJuIHZvaWQgZS51dGlsLndhcm4oXCJZb3UgcmVjZWl2ZWQgYSBtYWxmb3JtZWQgbWVzc2FnZSBmcm9tIFwiK2ErXCIgb2YgdHlwZSBcIitzKTt2YXIgdT1yLmNvbm5lY3Rpb25JZDsobz10aGlzLmdldENvbm5lY3Rpb24oYSx1KSkmJm8ucGM/by5oYW5kbGVNZXNzYWdlKHQpOnU/dGhpcy5fc3RvcmVNZXNzYWdlKHUsdCk6ZS51dGlsLndhcm4oXCJZb3UgcmVjZWl2ZWQgYW4gdW5yZWNvZ25pemVkIG1lc3NhZ2U6XCIsdCl9fSxzLnByb3RvdHlwZS5fc3RvcmVNZXNzYWdlPWZ1bmN0aW9uKGUsdCl7dGhpcy5fbG9zdE1lc3NhZ2VzW2VdfHwodGhpcy5fbG9zdE1lc3NhZ2VzW2VdPVtdKSx0aGlzLl9sb3N0TWVzc2FnZXNbZV0ucHVzaCh0KX0scy5wcm90b3R5cGUuX2dldE1lc3NhZ2VzPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX2xvc3RNZXNzYWdlc1tlXTtyZXR1cm4gdD8oZGVsZXRlIHRoaXMuX2xvc3RNZXNzYWdlc1tlXSx0KTpbXX0scy5wcm90b3R5cGUuY29ubmVjdD1mdW5jdGlvbih0LG8pe2lmKHRoaXMuZGlzY29ubmVjdGVkKXJldHVybiBlLnV0aWwud2FybihcIllvdSBjYW5ub3QgY29ubmVjdCB0byBhIG5ldyBQZWVyIGJlY2F1c2UgeW91IGNhbGxlZCAuZGlzY29ubmVjdCgpIG9uIHRoaXMgUGVlciBhbmQgZW5kZWQgeW91ciBjb25uZWN0aW9uIHdpdGggdGhlIHNlcnZlci4gWW91IGNhbiBjcmVhdGUgYSBuZXcgUGVlciB0byByZWNvbm5lY3QsIG9yIGNhbGwgcmVjb25uZWN0IG9uIHRoaXMgcGVlciBpZiB5b3UgYmVsaWV2ZSBpdHMgSUQgdG8gc3RpbGwgYmUgYXZhaWxhYmxlLlwiKSx2b2lkIHRoaXMuZW1pdEVycm9yKFwiZGlzY29ubmVjdGVkXCIsXCJDYW5ub3QgY29ubmVjdCB0byBuZXcgUGVlciBhZnRlciBkaXNjb25uZWN0aW5nIGZyb20gc2VydmVyLlwiKTt2YXIgbj1uZXcgaS5EYXRhQ29ubmVjdGlvbih0LHRoaXMsbyk7cmV0dXJuIHRoaXMuX2FkZENvbm5lY3Rpb24odCxuKSxufSxzLnByb3RvdHlwZS5jYWxsPWZ1bmN0aW9uKHQsbyxpKXtpZih0aGlzLmRpc2Nvbm5lY3RlZClyZXR1cm4gZS51dGlsLndhcm4oXCJZb3UgY2Fubm90IGNvbm5lY3QgdG8gYSBuZXcgUGVlciBiZWNhdXNlIHlvdSBjYWxsZWQgLmRpc2Nvbm5lY3QoKSBvbiB0aGlzIFBlZXIgYW5kIGVuZGVkIHlvdXIgY29ubmVjdGlvbiB3aXRoIHRoZSBzZXJ2ZXIuIFlvdSBjYW4gY3JlYXRlIGEgbmV3IFBlZXIgdG8gcmVjb25uZWN0LlwiKSx2b2lkIHRoaXMuZW1pdEVycm9yKFwiZGlzY29ubmVjdGVkXCIsXCJDYW5ub3QgY29ubmVjdCB0byBuZXcgUGVlciBhZnRlciBkaXNjb25uZWN0aW5nIGZyb20gc2VydmVyLlwiKTtpZihvKXsoaT1pfHx7fSkuX3N0cmVhbT1vO3ZhciBzPW5ldyBuLk1lZGlhQ29ubmVjdGlvbih0LHRoaXMsaSk7cmV0dXJuIHRoaXMuX2FkZENvbm5lY3Rpb24odCxzKSxzfWUudXRpbC5lcnJvcihcIlRvIGNhbGwgYSBwZWVyLCB5b3UgbXVzdCBwcm92aWRlIGEgc3RyZWFtIGZyb20geW91ciBicm93c2VyJ3MgYGdldFVzZXJNZWRpYWAuXCIpfSxzLnByb3RvdHlwZS5fYWRkQ29ubmVjdGlvbj1mdW5jdGlvbihlLHQpe3RoaXMuY29ubmVjdGlvbnNbZV18fCh0aGlzLmNvbm5lY3Rpb25zW2VdPVtdKSx0aGlzLmNvbm5lY3Rpb25zW2VdLnB1c2godCl9LHMucHJvdG90eXBlLmdldENvbm5lY3Rpb249ZnVuY3Rpb24oZSx0KXt2YXIgbz10aGlzLmNvbm5lY3Rpb25zW2VdO2lmKCFvKXJldHVybiBudWxsO2Zvcih2YXIgbj0wLGk9by5sZW5ndGg7bjxpO24rKylpZihvW25dLmlkPT09dClyZXR1cm4gb1tuXTtyZXR1cm4gbnVsbH0scy5wcm90b3R5cGUuX2RlbGF5ZWRBYm9ydD1mdW5jdGlvbih0LG8pe3ZhciBuPXRoaXM7ZS51dGlsLnNldFplcm9UaW1lb3V0KGZ1bmN0aW9uKCl7bi5fYWJvcnQodCxvKX0pfSxzLnByb3RvdHlwZS5fYWJvcnQ9ZnVuY3Rpb24odCxvKXtlLnV0aWwuZXJyb3IoXCJBYm9ydGluZyFcIiksdGhpcy5fbGFzdFNlcnZlcklkP3RoaXMuZGlzY29ubmVjdCgpOnRoaXMuZGVzdHJveSgpLHRoaXMuZW1pdEVycm9yKHQsbyl9LHMucHJvdG90eXBlLmVtaXRFcnJvcj1mdW5jdGlvbih0LG8pe2UudXRpbC5lcnJvcihcIkVycm9yOlwiLG8pLFwic3RyaW5nXCI9PXR5cGVvZiBvJiYobz1uZXcgRXJyb3IobykpLG8udHlwZT10LHRoaXMuZW1pdChcImVycm9yXCIsbyl9LHMucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmRlc3Ryb3llZHx8KHRoaXMuX2NsZWFudXAoKSx0aGlzLmRpc2Nvbm5lY3QoKSx0aGlzLmRlc3Ryb3llZD0hMCl9LHMucHJvdG90eXBlLl9jbGVhbnVwPWZ1bmN0aW9uKCl7aWYodGhpcy5jb25uZWN0aW9ucylmb3IodmFyIGU9T2JqZWN0LmtleXModGhpcy5jb25uZWN0aW9ucyksdD0wLG89ZS5sZW5ndGg7dDxvO3QrKyl0aGlzLl9jbGVhbnVwUGVlcihlW3RdKTt0aGlzLmVtaXQoXCJjbG9zZVwiKX0scy5wcm90b3R5cGUuX2NsZWFudXBQZWVyPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLmNvbm5lY3Rpb25zW2VdLG89MCxuPXQubGVuZ3RoO288bjtvKz0xKXRbb10uY2xvc2UoKX0scy5wcm90b3R5cGUuZGlzY29ubmVjdD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7ZS51dGlsLnNldFplcm9UaW1lb3V0KGZ1bmN0aW9uKCl7dC5kaXNjb25uZWN0ZWR8fCh0LmRpc2Nvbm5lY3RlZD0hMCx0Lm9wZW49ITEsdC5zb2NrZXQmJnQuc29ja2V0LmNsb3NlKCksdC5lbWl0KFwiZGlzY29ubmVjdGVkXCIsdC5pZCksdC5fbGFzdFNlcnZlcklkPXQuaWQsdC5pZD1udWxsKX0pfSxzLnByb3RvdHlwZS5yZWNvbm5lY3Q9ZnVuY3Rpb24oKXtpZih0aGlzLmRpc2Nvbm5lY3RlZCYmIXRoaXMuZGVzdHJveWVkKWUudXRpbC5sb2coXCJBdHRlbXB0aW5nIHJlY29ubmVjdGlvbiB0byBzZXJ2ZXIgd2l0aCBJRCBcIit0aGlzLl9sYXN0U2VydmVySWQpLHRoaXMuZGlzY29ubmVjdGVkPSExLHRoaXMuX2luaXRpYWxpemVTZXJ2ZXJDb25uZWN0aW9uKCksdGhpcy5faW5pdGlhbGl6ZSh0aGlzLl9sYXN0U2VydmVySWQpO2Vsc2V7aWYodGhpcy5kZXN0cm95ZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBwZWVyIGNhbm5vdCByZWNvbm5lY3QgdG8gdGhlIHNlcnZlci4gSXQgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWQuXCIpO2lmKHRoaXMuZGlzY29ubmVjdGVkfHx0aGlzLm9wZW4pdGhyb3cgbmV3IEVycm9yKFwiUGVlciBcIit0aGlzLmlkK1wiIGNhbm5vdCByZWNvbm5lY3QgYmVjYXVzZSBpdCBpcyBub3QgZGlzY29ubmVjdGVkIGZyb20gdGhlIHNlcnZlciFcIik7ZS51dGlsLmVycm9yKFwiSW4gYSBodXJyeT8gV2UncmUgc3RpbGwgdHJ5aW5nIHRvIG1ha2UgdGhlIGluaXRpYWwgY29ubmVjdGlvbiFcIil9fSxzLnByb3RvdHlwZS5saXN0QWxsUGVlcnM9ZnVuY3Rpb24odCl7dD10fHxmdW5jdGlvbigpe307dmFyIG89dGhpcyxuPW5ldyBYTUxIdHRwUmVxdWVzdCxpPSh0aGlzLm9wdGlvbnMuc2VjdXJlP1wiaHR0cHM6Ly9cIjpcImh0dHA6Ly9cIikrdGhpcy5vcHRpb25zLmhvc3QrXCI6XCIrdGhpcy5vcHRpb25zLnBvcnQrdGhpcy5vcHRpb25zLnBhdGgrdGhpcy5vcHRpb25zLmtleStcIi9wZWVyc1wiO2krPVwiP3RzPVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpK01hdGgucmFuZG9tKCksbi5vcGVuKFwiZ2V0XCIsaSwhMCksbi5vbmVycm9yPWZ1bmN0aW9uKGUpe28uX2Fib3J0KFwic2VydmVyLWVycm9yXCIsXCJDb3VsZCBub3QgZ2V0IHBlZXJzIGZyb20gdGhlIHNlcnZlci5cIiksdChbXSl9LG4ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09PW4ucmVhZHlTdGF0ZSl7aWYoNDAxPT09bi5zdGF0dXMpe3ZhciBpPVwiXCI7dGhyb3cgaT1vLm9wdGlvbnMuaG9zdCE9PWUudXRpbC5DTE9VRF9IT1NUP1wiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNsb3VkIHNlcnZlci4gWW91IGNhbiBlbWFpbCB0ZWFtQHBlZXJqcy5jb20gdG8gZW5hYmxlIHBlZXIgbGlzdGluZyBmb3IgeW91ciBBUEkga2V5LlwiOlwiWW91IG5lZWQgdG8gZW5hYmxlIGBhbGxvd19kaXNjb3ZlcnlgIG9uIHlvdXIgc2VsZi1ob3N0ZWQgUGVlclNlcnZlciB0byB1c2UgdGhpcyBmZWF0dXJlLlwiLHQoW10pLG5ldyBFcnJvcihcIkl0IGRvZXNuJ3QgbG9vayBsaWtlIHlvdSBoYXZlIHBlcm1pc3Npb24gdG8gbGlzdCBwZWVycyBJRHMuIFwiK2kpfTIwMCE9PW4uc3RhdHVzP3QoW10pOnQoSlNPTi5wYXJzZShuLnJlc3BvbnNlVGV4dCkpfX0sbi5zZW5kKG51bGwpfTtcbn0se1wiLi91dGlsXCI6XCJCSFhmXCIsXCJldmVudGVtaXR0ZXIzXCI6XCIySkpsXCIsXCIuL3NvY2tldFwiOlwid0psdlwiLFwiLi9tZWRpYWNvbm5lY3Rpb25cIjpcImRiSFBcIixcIi4vZGF0YWNvbm5lY3Rpb25cIjpcIkdCVFFcIn1dLFwiaVRLNlwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG5cInVzZSBzdHJpY3RcIjt2YXIgZT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtleHBvcnRzLl9fZXNNb2R1bGU9ITA7dmFyIGk9cmVxdWlyZShcIi4vdXRpbFwiKSxuPXJlcXVpcmUoXCIuL2FkYXB0ZXJcIiksbz1yZXF1aXJlKFwiLi9zb2NrZXRcIiksdD1yZXF1aXJlKFwiLi9tZWRpYWNvbm5lY3Rpb25cIikscj1yZXF1aXJlKFwiLi9kYXRhY29ubmVjdGlvblwiKSxhPXJlcXVpcmUoXCIuL3BlZXJcIiksZD1yZXF1aXJlKFwiLi9uZWdvdGlhdG9yXCIpLGM9ZShyZXF1aXJlKFwianMtYmluYXJ5cGFja1wiKSk7d2luZG93LlNvY2tldD1vLlNvY2tldCx3aW5kb3cuTWVkaWFDb25uZWN0aW9uPXQuTWVkaWFDb25uZWN0aW9uLHdpbmRvdy5EYXRhQ29ubmVjdGlvbj1yLkRhdGFDb25uZWN0aW9uLHdpbmRvdy5QZWVyPWEuUGVlcix3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb249bi5SVENQZWVyQ29ubmVjdGlvbix3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uPW4uUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLHdpbmRvdy5SVENJY2VDYW5kaWRhdGU9bi5SVENJY2VDYW5kaWRhdGUsd2luZG93Lk5lZ290aWF0b3I9ZC5OZWdvdGlhdG9yLHdpbmRvdy51dGlsPWkudXRpbCx3aW5kb3cuQmluYXJ5UGFjaz1jLmRlZmF1bHQsZXhwb3J0cy5kZWZhdWx0PWEuUGVlcjtcbn0se1wiLi91dGlsXCI6XCJCSFhmXCIsXCIuL2FkYXB0ZXJcIjpcInNYdFZcIixcIi4vc29ja2V0XCI6XCJ3Smx2XCIsXCIuL21lZGlhY29ubmVjdGlvblwiOlwiZGJIUFwiLFwiLi9kYXRhY29ubmVjdGlvblwiOlwiR0JUUVwiLFwiLi9wZWVyXCI6XCJIeHBkXCIsXCIuL25lZ290aWF0b3JcIjpcIkhDZFhcIixcImpzLWJpbmFyeXBhY2tcIjpcImxIT2NcIn1dfSx7fSxbXCJpVEs2XCJdLCBudWxsKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9L3BlZXJqcy5taW4ubWFwIiwiLy8gcmFuZG9tQ29sb3IgYnkgRGF2aWQgTWVyZmllbGQgdW5kZXIgdGhlIENDMCBsaWNlbnNlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRtZXJmaWVsZC9yYW5kb21Db2xvci9cblxuOyhmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgLy8gU3VwcG9ydCBDb21tb25KU1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuXG4gICAgLy8gU3VwcG9ydCBOb2RlSlMgJiBDb21wb25lbnQsIHdoaWNoIGFsbG93IG1vZHVsZS5leHBvcnRzIHRvIGJlIGEgZnVuY3Rpb25cbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IENvbW1vbkpTIDEuMS4xIHNwZWNcbiAgICBleHBvcnRzLnJhbmRvbUNvbG9yID0gcmFuZG9tQ29sb3I7XG5cbiAgLy8gU3VwcG9ydCBBTURcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuXG4gIC8vIFN1cHBvcnQgdmFuaWxsYSBzY3JpcHQgbG9hZGluZ1xuICB9IGVsc2Uge1xuICAgIHJvb3QucmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuICAvLyBTZWVkIHRvIGdldCByZXBlYXRhYmxlIGNvbG9yc1xuICB2YXIgc2VlZCA9IG51bGw7XG5cbiAgLy8gU2hhcmVkIGNvbG9yIGRpY3Rpb25hcnlcbiAgdmFyIGNvbG9yRGljdGlvbmFyeSA9IHt9O1xuXG4gIC8vIFBvcHVsYXRlIHRoZSBjb2xvciBkaWN0aW9uYXJ5XG4gIGxvYWRDb2xvckJvdW5kcygpO1xuXG4gIC8vIGNoZWNrIGlmIGEgcmFuZ2UgaXMgdGFrZW5cbiAgdmFyIGNvbG9yUmFuZ2VzID0gW107XG5cbiAgdmFyIHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzZWVkIGFuZCBlbnN1cmUgaXQncyBhblxuICAgIC8vIGludGVnZXIuIE90aGVyd2lzZSwgcmVzZXQgdGhlIHNlZWQgdmFsdWUuXG4gICAgaWYgKG9wdGlvbnMuc2VlZCAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuc2VlZCAhPT0gbnVsbCAmJiBvcHRpb25zLnNlZWQgPT09IHBhcnNlSW50KG9wdGlvbnMuc2VlZCwgMTApKSB7XG4gICAgICBzZWVkID0gb3B0aW9ucy5zZWVkO1xuXG4gICAgLy8gQSBzdHJpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnNlZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWVkID0gc3RyaW5nVG9JbnRlZ2VyKG9wdGlvbnMuc2VlZCk7XG5cbiAgICAvLyBTb21ldGhpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWQgYnV0IGl0IHdhc24ndCBhbiBpbnRlZ2VyIG9yIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZWVkICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5zZWVkICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc2VlZCB2YWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgb3Igc3RyaW5nJyk7XG5cbiAgICAvLyBObyBzZWVkLCByZXNldCB0aGUgdmFsdWUgb3V0c2lkZS5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIEgsUyxCO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBnZW5lcmF0ZSBtdWx0aXBsZSBjb2xvcnNcbiAgICBpZiAob3B0aW9ucy5jb3VudCAhPT0gbnVsbCAmJiBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgdmFyIHRvdGFsQ29sb3JzID0gb3B0aW9ucy5jb3VudCxcbiAgICAgICAgICBjb2xvcnMgPSBbXTtcbiAgICAgIC8vIFZhbHVlIGZhbHNlIGF0IGluZGV4IGkgbWVhbnMgdGhlIHJhbmdlIGkgaXMgbm90IHRha2VuIHlldC5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbG9yUmFuZ2VzLnB1c2goZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIG9wdGlvbnMuY291bnQgPSBudWxsO1xuXG4gICAgICB3aGlsZSAodG90YWxDb2xvcnMgPiBjb2xvcnMubGVuZ3RoKSB7XG5cbiAgICAgICAgLy8gU2luY2Ugd2UncmUgZ2VuZXJhdGluZyBtdWx0aXBsZSBjb2xvcnMsXG4gICAgICAgIC8vIGluY3JlbWVtZW50IHRoZSBzZWVkLiBPdGhlcndpc2Ugd2UnZCBqdXN0XG4gICAgICAgIC8vIGdlbmVyYXRlIHRoZSBzYW1lIGNvbG9yIGVhY2ggdGltZS4uLlxuICAgICAgICBpZiAoc2VlZCAmJiBvcHRpb25zLnNlZWQpIG9wdGlvbnMuc2VlZCArPSAxO1xuXG4gICAgICAgIGNvbG9ycy5wdXNoKHJhbmRvbUNvbG9yKG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5jb3VudCA9IHRvdGFsQ29sb3JzO1xuXG4gICAgICByZXR1cm4gY29sb3JzO1xuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIHBpY2sgYSBodWUgKEgpXG4gICAgSCA9IHBpY2tIdWUob3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHVzZSBIIHRvIGRldGVybWluZSBzYXR1cmF0aW9uIChTKVxuICAgIFMgPSBwaWNrU2F0dXJhdGlvbihILCBvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gdXNlIFMgYW5kIEggdG8gZGV0ZXJtaW5lIGJyaWdodG5lc3MgKEIpLlxuICAgIEIgPSBwaWNrQnJpZ2h0bmVzcyhILCBTLCBvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gd2UgcmV0dXJuIHRoZSBIU0IgY29sb3IgaW4gdGhlIGRlc2lyZWQgZm9ybWF0XG4gICAgcmV0dXJuIHNldEZvcm1hdChbSCxTLEJdLCBvcHRpb25zKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwaWNrSHVlKG9wdGlvbnMpIHtcbiAgICBpZiAoY29sb3JSYW5nZXMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGh1ZVJhbmdlID0gZ2V0UmVhbEh1ZVJhbmdlKG9wdGlvbnMuaHVlKVxuXG4gICAgICB2YXIgaHVlID0gcmFuZG9tV2l0aGluKGh1ZVJhbmdlKVxuXG4gICAgICAvL0VhY2ggb2YgY29sb3JSYW5nZXMubGVuZ3RoIHJhbmdlcyBoYXMgYSBsZW5ndGggZXF1YWwgYXBwcm94aW1hdGVsbHkgb25lIHN0ZXBcbiAgICAgIHZhciBzdGVwID0gKGh1ZVJhbmdlWzFdIC0gaHVlUmFuZ2VbMF0pIC8gY29sb3JSYW5nZXMubGVuZ3RoXG5cbiAgICAgIHZhciBqID0gcGFyc2VJbnQoKGh1ZSAtIGh1ZVJhbmdlWzBdKSAvIHN0ZXApXG5cbiAgICAgIC8vQ2hlY2sgaWYgdGhlIHJhbmdlIGogaXMgdGFrZW5cbiAgICAgIGlmIChjb2xvclJhbmdlc1tqXSA9PT0gdHJ1ZSkge1xuICAgICAgICBqID0gKGogKyAyKSAlIGNvbG9yUmFuZ2VzLmxlbmd0aFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbG9yUmFuZ2VzW2pdID0gdHJ1ZVxuICAgICAgICAgICB9XG5cbiAgICAgIHZhciBtaW4gPSAoaHVlUmFuZ2VbMF0gKyBqICogc3RlcCkgJSAzNTksXG4gICAgICAgICAgbWF4ID0gKGh1ZVJhbmdlWzBdICsgKGogKyAxKSAqIHN0ZXApICUgMzU5O1xuXG4gICAgICBodWVSYW5nZSA9IFttaW4sIG1heF1cblxuICAgICAgaHVlID0gcmFuZG9tV2l0aGluKGh1ZVJhbmdlKVxuXG4gICAgICBpZiAoaHVlIDwgMCkge2h1ZSA9IDM2MCArIGh1ZTt9XG4gICAgICByZXR1cm4gaHVlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGh1ZVJhbmdlID0gZ2V0SHVlUmFuZ2Uob3B0aW9ucy5odWUpXG5cbiAgICAgIGh1ZSA9IHJhbmRvbVdpdGhpbihodWVSYW5nZSk7XG4gICAgICAvLyBJbnN0ZWFkIG9mIHN0b3JpbmcgcmVkIGFzIHR3byBzZXBlcmF0ZSByYW5nZXMsXG4gICAgICAvLyB3ZSBncm91cCB0aGVtLCB1c2luZyBuZWdhdGl2ZSBudW1iZXJzXG4gICAgICBpZiAoaHVlIDwgMCkge1xuICAgICAgICBodWUgPSAzNjAgKyBodWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBodWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGlja1NhdHVyYXRpb24gKGh1ZSwgb3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnMuaHVlID09PSAnbW9ub2Nocm9tZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmx1bWlub3NpdHkgPT09ICdyYW5kb20nKSB7XG4gICAgICByZXR1cm4gcmFuZG9tV2l0aGluKFswLDEwMF0pO1xuICAgIH1cblxuICAgIHZhciBzYXR1cmF0aW9uUmFuZ2UgPSBnZXRTYXR1cmF0aW9uUmFuZ2UoaHVlKTtcblxuICAgIHZhciBzTWluID0gc2F0dXJhdGlvblJhbmdlWzBdLFxuICAgICAgICBzTWF4ID0gc2F0dXJhdGlvblJhbmdlWzFdO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnYnJpZ2h0JzpcbiAgICAgICAgc01pbiA9IDU1O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIHNNaW4gPSBzTWF4IC0gMTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIHNNYXggPSA1NTtcbiAgICAgICAgYnJlYWs7XG4gICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtzTWluLCBzTWF4XSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tCcmlnaHRuZXNzIChILCBTLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgYk1pbiA9IGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpLFxuICAgICAgICBiTWF4ID0gMTAwO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIGJNYXggPSBiTWluICsgMjA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIGJNaW4gPSAoYk1heCArIGJNaW4pLzI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyYW5kb20nOlxuICAgICAgICBiTWluID0gMDtcbiAgICAgICAgYk1heCA9IDEwMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbYk1pbiwgYk1heF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Rm9ybWF0IChoc3YsIG9wdGlvbnMpIHtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5mb3JtYXQpIHtcblxuICAgICAgY2FzZSAnaHN2QXJyYXknOlxuICAgICAgICByZXR1cm4gaHN2O1xuXG4gICAgICBjYXNlICdoc2xBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b0hTTChoc3YpO1xuXG4gICAgICBjYXNlICdoc2wnOlxuICAgICAgICB2YXIgaHNsID0gSFNWdG9IU0woaHN2KTtcbiAgICAgICAgcmV0dXJuICdoc2woJytoc2xbMF0rJywgJytoc2xbMV0rJyUsICcraHNsWzJdKyclKSc7XG5cbiAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICB2YXIgaHNsQ29sb3IgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICB2YXIgYWxwaGEgPSBvcHRpb25zLmFscGhhIHx8IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIHJldHVybiAnaHNsYSgnK2hzbENvbG9yWzBdKycsICcraHNsQ29sb3JbMV0rJyUsICcraHNsQ29sb3JbMl0rJyUsICcgKyBhbHBoYSArICcpJztcblxuICAgICAgY2FzZSAncmdiQXJyYXknOlxuICAgICAgICByZXR1cm4gSFNWdG9SR0IoaHN2KTtcblxuICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCAnKSArICcpJztcblxuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIHZhciByZ2JDb2xvciA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHZhciBhbHBoYSA9IG9wdGlvbnMuYWxwaGEgfHwgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JDb2xvci5qb2luKCcsICcpICsgJywgJyArIGFscGhhICsgJyknO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gSFNWdG9IZXgoaHN2KTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpIHtcblxuICAgIHZhciBsb3dlckJvdW5kcyA9IGdldENvbG9ySW5mbyhIKS5sb3dlckJvdW5kcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG93ZXJCb3VuZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cbiAgICAgIHZhciBzMSA9IGxvd2VyQm91bmRzW2ldWzBdLFxuICAgICAgICAgIHYxID0gbG93ZXJCb3VuZHNbaV1bMV07XG5cbiAgICAgIHZhciBzMiA9IGxvd2VyQm91bmRzW2krMV1bMF0sXG4gICAgICAgICAgdjIgPSBsb3dlckJvdW5kc1tpKzFdWzFdO1xuXG4gICAgICBpZiAoUyA+PSBzMSAmJiBTIDw9IHMyKSB7XG5cbiAgICAgICAgIHZhciBtID0gKHYyIC0gdjEpLyhzMiAtIHMxKSxcbiAgICAgICAgICAgICBiID0gdjEgLSBtKnMxO1xuXG4gICAgICAgICByZXR1cm4gbSpTICsgYjtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SHVlUmFuZ2UgKGNvbG9ySW5wdXQpIHtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VJbnQoY29sb3JJbnB1dCkgPT09ICdudW1iZXInKSB7XG5cbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludChjb2xvcklucHV0KTtcblxuICAgICAgaWYgKG51bWJlciA8IDM2MCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvcklucHV0ID09PSAnc3RyaW5nJykge1xuXG4gICAgICBpZiAoY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvcklucHV0XTtcbiAgICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlKSB7cmV0dXJuIGNvbG9yLmh1ZVJhbmdlO31cbiAgICAgIH0gZWxzZSBpZiAoY29sb3JJbnB1dC5tYXRjaCgvXiM/KFswLTlBLUZdezN9fFswLTlBLUZdezZ9KSQvaSkpIHtcbiAgICAgICAgdmFyIGh1ZSA9IEhleFRvSFNCKGNvbG9ySW5wdXQpWzBdO1xuICAgICAgICByZXR1cm4gWyBodWUsIGh1ZSBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbMCwzNjBdO1xuXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXR1cmF0aW9uUmFuZ2UgKGh1ZSkge1xuICAgIHJldHVybiBnZXRDb2xvckluZm8oaHVlKS5zYXR1cmF0aW9uUmFuZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb2xvckluZm8gKGh1ZSkge1xuXG4gICAgLy8gTWFwcyByZWQgY29sb3JzIHRvIG1ha2UgcGlja2luZyBodWUgZWFzaWVyXG4gICAgaWYgKGh1ZSA+PSAzMzQgJiYgaHVlIDw9IDM2MCkge1xuICAgICAgaHVlLT0gMzYwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNvbG9yTmFtZSBpbiBjb2xvckRpY3Rpb25hcnkpIHtcbiAgICAgICB2YXIgY29sb3IgPSBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UgJiZcbiAgICAgICAgICAgaHVlID49IGNvbG9yLmh1ZVJhbmdlWzBdICYmXG4gICAgICAgICAgIGh1ZSA8PSBjb2xvci5odWVSYW5nZVsxXSkge1xuICAgICAgICAgIHJldHVybiBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICB9XG4gICAgfSByZXR1cm4gJ0NvbG9yIG5vdCBmb3VuZCc7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21XaXRoaW4gKHJhbmdlKSB7XG4gICAgaWYgKHNlZWQgPT09IG51bGwpIHtcbiAgICAgIC8vZ2VuZXJhdGUgcmFuZG9tIGV2ZW5seSBkZXN0aW5jdCBudW1iZXIgZnJvbSA6IGh0dHBzOi8vbWFydGluLmFua2VybC5jb20vMjAwOS8xMi8wOS9ob3ctdG8tY3JlYXRlLXJhbmRvbS1jb2xvcnMtcHJvZ3JhbW1hdGljYWxseS9cbiAgICAgIHZhciBnb2xkZW5fcmF0aW8gPSAwLjYxODAzMzk4ODc0OTg5NVxuICAgICAgdmFyIHI9TWF0aC5yYW5kb20oKVxuICAgICAgciArPSBnb2xkZW5fcmF0aW9cbiAgICAgIHIgJT0gMVxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZ2VbMF0gKyByKihyYW5nZVsxXSArIDEgLSByYW5nZVswXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL1NlZWRlZCByYW5kb20gYWxnb3JpdGhtIGZyb20gaHR0cDovL2luZGllZ2Ftci5jb20vZ2VuZXJhdGUtcmVwZWF0YWJsZS1yYW5kb20tbnVtYmVycy1pbi1qcy9cbiAgICAgIHZhciBtYXggPSByYW5nZVsxXSB8fCAxO1xuICAgICAgdmFyIG1pbiA9IHJhbmdlWzBdIHx8IDA7XG4gICAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgICAgdmFyIHJuZCA9IHNlZWQgLyAyMzMyODAuMDtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIHJuZCAqIChtYXggLSBtaW4pKTtcbn1cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSGV4IChoc3Ype1xuXG4gICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gICAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gJyMnICsgY29tcG9uZW50VG9IZXgocmdiWzBdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsxXSkgKyBjb21wb25lbnRUb0hleChyZ2JbMl0pO1xuXG4gICAgcmV0dXJuIGhleDtcblxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lQ29sb3IgKG5hbWUsIGh1ZVJhbmdlLCBsb3dlckJvdW5kcykge1xuXG4gICAgdmFyIHNNaW4gPSBsb3dlckJvdW5kc1swXVswXSxcbiAgICAgICAgc01heCA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzBdLFxuXG4gICAgICAgIGJNaW4gPSBsb3dlckJvdW5kc1tsb3dlckJvdW5kcy5sZW5ndGggLSAxXVsxXSxcbiAgICAgICAgYk1heCA9IGxvd2VyQm91bmRzWzBdWzFdO1xuXG4gICAgY29sb3JEaWN0aW9uYXJ5W25hbWVdID0ge1xuICAgICAgaHVlUmFuZ2U6IGh1ZVJhbmdlLFxuICAgICAgbG93ZXJCb3VuZHM6IGxvd2VyQm91bmRzLFxuICAgICAgc2F0dXJhdGlvblJhbmdlOiBbc01pbiwgc01heF0sXG4gICAgICBicmlnaHRuZXNzUmFuZ2U6IFtiTWluLCBiTWF4XVxuICAgIH07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRDb2xvckJvdW5kcyAoKSB7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdtb25vY2hyb21lJyxcbiAgICAgIG51bGwsXG4gICAgICBbWzAsMF0sWzEwMCwwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncmVkJyxcbiAgICAgIFstMjYsMThdLFxuICAgICAgW1syMCwxMDBdLFszMCw5Ml0sWzQwLDg5XSxbNTAsODVdLFs2MCw3OF0sWzcwLDcwXSxbODAsNjBdLFs5MCw1NV0sWzEwMCw1MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ29yYW5nZScsXG4gICAgICBbMTksNDZdLFxuICAgICAgW1syMCwxMDBdLFszMCw5M10sWzQwLDg4XSxbNTAsODZdLFs2MCw4NV0sWzcwLDcwXSxbMTAwLDcwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAneWVsbG93JyxcbiAgICAgIFs0Nyw2Ml0sXG4gICAgICBbWzI1LDEwMF0sWzQwLDk0XSxbNTAsODldLFs2MCw4Nl0sWzcwLDg0XSxbODAsODJdLFs5MCw4MF0sWzEwMCw3NV1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2dyZWVuJyxcbiAgICAgIFs2MywxNzhdLFxuICAgICAgW1szMCwxMDBdLFs0MCw5MF0sWzUwLDg1XSxbNjAsODFdLFs3MCw3NF0sWzgwLDY0XSxbOTAsNTBdLFsxMDAsNDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdibHVlJyxcbiAgICAgIFsxNzksIDI1N10sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg2XSxbNDAsODBdLFs1MCw3NF0sWzYwLDYwXSxbNzAsNTJdLFs4MCw0NF0sWzkwLDM5XSxbMTAwLDM1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncHVycGxlJyxcbiAgICAgIFsyNTgsIDI4Ml0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg3XSxbNDAsNzldLFs1MCw3MF0sWzYwLDY1XSxbNzAsNTldLFs4MCw1Ml0sWzkwLDQ1XSxbMTAwLDQyXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncGluaycsXG4gICAgICBbMjgzLCAzMzRdLFxuICAgICAgW1syMCwxMDBdLFszMCw5MF0sWzQwLDg2XSxbNjAsODRdLFs4MCw4MF0sWzkwLDc1XSxbMTAwLDczXV1cbiAgICApO1xuXG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b1JHQiAoaHN2KSB7XG5cbiAgICAvLyB0aGlzIGRvZXNuJ3Qgd29yayBmb3IgdGhlIHZhbHVlcyBvZiAwIGFuZCAzNjBcbiAgICAvLyBoZXJlJ3MgdGhlIGhhY2t5IGZpeFxuICAgIHZhciBoID0gaHN2WzBdO1xuICAgIGlmIChoID09PSAwKSB7aCA9IDE7fVxuICAgIGlmIChoID09PSAzNjApIHtoID0gMzU5O31cblxuICAgIC8vIFJlYmFzZSB0aGUgaCxzLHYgdmFsdWVzXG4gICAgaCA9IGgvMzYwO1xuICAgIHZhciBzID0gaHN2WzFdLzEwMCxcbiAgICAgICAgdiA9IGhzdlsyXS8xMDA7XG5cbiAgICB2YXIgaF9pID0gTWF0aC5mbG9vcihoKjYpLFxuICAgICAgZiA9IGggKiA2IC0gaF9pLFxuICAgICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgICAgcSA9IHYgKiAoMSAtIGYqcyksXG4gICAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSpzKSxcbiAgICAgIHIgPSAyNTYsXG4gICAgICBnID0gMjU2LFxuICAgICAgYiA9IDI1NjtcblxuICAgIHN3aXRjaChoX2kpIHtcbiAgICAgIGNhc2UgMDogciA9IHY7IGcgPSB0OyBiID0gcDsgIGJyZWFrO1xuICAgICAgY2FzZSAxOiByID0gcTsgZyA9IHY7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDI6IHIgPSBwOyBnID0gdjsgYiA9IHQ7ICBicmVhaztcbiAgICAgIGNhc2UgMzogciA9IHA7IGcgPSBxOyBiID0gdjsgIGJyZWFrO1xuICAgICAgY2FzZSA0OiByID0gdDsgZyA9IHA7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDU6IHIgPSB2OyBnID0gcDsgYiA9IHE7ICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW01hdGguZmxvb3IocioyNTUpLCBNYXRoLmZsb29yKGcqMjU1KSwgTWF0aC5mbG9vcihiKjI1NSldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBIZXhUb0hTQiAoaGV4KSB7XG4gICAgaGV4ID0gaGV4LnJlcGxhY2UoL14jLywgJycpO1xuICAgIGhleCA9IGhleC5sZW5ndGggPT09IDMgPyBoZXgucmVwbGFjZSgvKC4pL2csICckMSQxJykgOiBoZXg7XG5cbiAgICB2YXIgcmVkID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpIC8gMjU1LFxuICAgICAgICAgIGdyZWVuID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpIC8gMjU1LFxuICAgICAgICAgIGJsdWUgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNikgLyAyNTU7XG5cbiAgICB2YXIgY01heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpLFxuICAgICAgICAgIGRlbHRhID0gY01heCAtIE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpLFxuICAgICAgICAgIHNhdHVyYXRpb24gPSBjTWF4ID8gKGRlbHRhIC8gY01heCkgOiAwO1xuXG4gICAgc3dpdGNoIChjTWF4KSB7XG4gICAgICBjYXNlIHJlZDogcmV0dXJuIFsgNjAgKiAoKChncmVlbiAtIGJsdWUpIC8gZGVsdGEpICUgNikgfHwgMCwgc2F0dXJhdGlvbiwgY01heCBdO1xuICAgICAgY2FzZSBncmVlbjogcmV0dXJuIFsgNjAgKiAoKChibHVlIC0gcmVkKSAvIGRlbHRhKSArIDIpIHx8IDAsIHNhdHVyYXRpb24sIGNNYXggXTtcbiAgICAgIGNhc2UgYmx1ZTogcmV0dXJuIFsgNjAgKiAoKChyZWQgLSBncmVlbikgLyBkZWx0YSkgKyA0KSB8fCAwLCBzYXR1cmF0aW9uLCBjTWF4IF07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IU0wgKGhzdikge1xuICAgIHZhciBoID0gaHN2WzBdLFxuICAgICAgcyA9IGhzdlsxXS8xMDAsXG4gICAgICB2ID0gaHN2WzJdLzEwMCxcbiAgICAgIGsgPSAoMi1zKSp2O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGgsXG4gICAgICBNYXRoLnJvdW5kKHMqdiAvIChrPDEgPyBrIDogMi1rKSAqIDEwMDAwKSAvIDEwMCxcbiAgICAgIGsvMiAqIDEwMFxuICAgIF07XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdUb0ludGVnZXIgKHN0cmluZykge1xuICAgIHZhciB0b3RhbCA9IDBcbiAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG90YWwgPj0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIGJyZWFrO1xuICAgICAgdG90YWwgKz0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsXG4gIH1cblxuICAvLyBnZXQgVGhlIHJhbmdlIG9mIGdpdmVuIGh1ZSB3aGVuIG9wdGlvbnMuY291bnQhPTBcbiAgZnVuY3Rpb24gZ2V0UmVhbEh1ZVJhbmdlKGNvbG9ySHVlKVxuICB7IGlmICghaXNOYU4oY29sb3JIdWUpKSB7XG4gICAgdmFyIG51bWJlciA9IHBhcnNlSW50KGNvbG9ySHVlKTtcblxuICAgIGlmIChudW1iZXIgPCAzNjAgJiYgbnVtYmVyID4gMCkge1xuICAgICAgcmV0dXJuIGdldENvbG9ySW5mbyhjb2xvckh1ZSkuaHVlUmFuZ2VcbiAgICB9XG4gIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29sb3JIdWUgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgIGlmIChjb2xvckRpY3Rpb25hcnlbY29sb3JIdWVdKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvckh1ZV07XG5cbiAgICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbG9yLmh1ZVJhbmdlXG4gICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29sb3JIdWUubWF0Y2goL14jPyhbMC05QS1GXXszfXxbMC05QS1GXXs2fSkkL2kpKSB7XG4gICAgICAgIHZhciBodWUgPSBIZXhUb0hTQihjb2xvckh1ZSlbMF1cbiAgICAgICAgcmV0dXJuIGdldENvbG9ySW5mbyhodWUpLmh1ZVJhbmdlXG4gICAgfVxuICB9XG5cbiAgICByZXR1cm4gWzAsMzYwXVxufVxuICByZXR1cm4gcmFuZG9tQ29sb3I7XG59KSk7XG4iLCIvLyBBIGxpYnJhcnkgb2Ygc2VlZGFibGUgUk5HcyBpbXBsZW1lbnRlZCBpbiBKYXZhc2NyaXB0LlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciBzZWVkcmFuZG9tID0gcmVxdWlyZSgnc2VlZHJhbmRvbScpO1xuLy8gdmFyIHJhbmRvbSA9IHNlZWRyYW5kb20oMSk7IC8vIG9yIGFueSBzZWVkLlxuLy8gdmFyIHggPSByYW5kb20oKTsgICAgICAgLy8gMCA8PSB4IDwgMS4gIEV2ZXJ5IGJpdCBpcyByYW5kb20uXG4vLyB2YXIgeCA9IHJhbmRvbS5xdWljaygpOyAvLyAwIDw9IHggPCAxLiAgMzIgYml0cyBvZiByYW5kb21uZXNzLlxuXG4vLyBhbGVhLCBhIDUzLWJpdCBtdWx0aXBseS13aXRoLWNhcnJ5IGdlbmVyYXRvciBieSBKb2hhbm5lcyBCYWFnw7hlLlxuLy8gUGVyaW9kOiB+Ml4xMTZcbi8vIFJlcG9ydGVkIHRvIHBhc3MgYWxsIEJpZ0NydXNoIHRlc3RzLlxudmFyIGFsZWEgPSByZXF1aXJlKCcuL2xpYi9hbGVhJyk7XG5cbi8vIHhvcjEyOCwgYSBwdXJlIHhvci1zaGlmdCBnZW5lcmF0b3IgYnkgR2VvcmdlIE1hcnNhZ2xpYS5cbi8vIFBlcmlvZDogMl4xMjgtMS5cbi8vIFJlcG9ydGVkIHRvIGZhaWw6IE1hdHJpeFJhbmsgYW5kIExpbmVhckNvbXAuXG52YXIgeG9yMTI4ID0gcmVxdWlyZSgnLi9saWIveG9yMTI4Jyk7XG5cbi8vIHhvcndvdywgR2VvcmdlIE1hcnNhZ2xpYSdzIDE2MC1iaXQgeG9yLXNoaWZ0IGNvbWJpbmVkIHBsdXMgd2V5bC5cbi8vIFBlcmlvZDogMl4xOTItMl4zMlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogQ29sbGlzaW9uT3ZlciwgU2ltcFBva2VyLCBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3J3b3cgPSByZXF1aXJlKCcuL2xpYi94b3J3b3cnKTtcblxuLy8geG9yc2hpZnQ3LCBieSBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllciwgdGFrZXNcbi8vIGEgZGlmZmVyZW50IGFwcHJvYWNoOiBpdCBhZGRzIHJvYnVzdG5lc3MgYnkgYWxsb3dpbmcgbW9yZSBzaGlmdHNcbi8vIHRoYW4gTWFyc2FnbGlhJ3Mgb3JpZ2luYWwgdGhyZWUuICBJdCBpcyBhIDctc2hpZnQgZ2VuZXJhdG9yXG4vLyB3aXRoIDI1NiBiaXRzLCB0aGF0IHBhc3NlcyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RtYXRpYyBmYWlsdXJlcy5cbi8vIFBlcmlvZCAyXjI1Ni0xLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3JzaGlmdDcgPSByZXF1aXJlKCcuL2xpYi94b3JzaGlmdDcnKTtcblxuLy8geG9yNDA5NiwgYnkgUmljaGFyZCBCcmVudCwgaXMgYSA0MDk2LWJpdCB4b3Itc2hpZnQgd2l0aCBhXG4vLyB2ZXJ5IGxvbmcgcGVyaW9kIHRoYXQgYWxzbyBhZGRzIGEgV2V5bCBnZW5lcmF0b3IuIEl0IGFsc28gcGFzc2VzXG4vLyBCaWdDcnVzaCB3aXRoIG5vIHN5c3RlbWF0aWMgZmFpbHVyZXMuICBJdHMgbG9uZyBwZXJpb2QgbWF5XG4vLyBiZSB1c2VmdWwgaWYgeW91IGhhdmUgbWFueSBnZW5lcmF0b3JzIGFuZCBuZWVkIHRvIGF2b2lkXG4vLyBjb2xsaXNpb25zLlxuLy8gUGVyaW9kOiAyXjQxMjgtMl4zMi5cbi8vIE5vIHN5c3RlbWF0aWMgQmlnQ3J1c2ggZmFpbHVyZXMgcmVwb3J0ZWQuXG52YXIgeG9yNDA5NiA9IHJlcXVpcmUoJy4vbGliL3hvcjQwOTYnKTtcblxuLy8gVHljaGUtaSwgYnkgU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLCBpcyBhIGJpdC1zaGlmdGluZyByYW5kb21cbi8vIG51bWJlciBnZW5lcmF0b3IgZGVyaXZlZCBmcm9tIENoYUNoYSwgYSBtb2Rlcm4gc3RyZWFtIGNpcGhlci5cbi8vIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG4vLyBQZXJpb2Q6IH4yXjEyN1xuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB0eWNoZWkgPSByZXF1aXJlKCcuL2xpYi90eWNoZWknKTtcblxuLy8gVGhlIG9yaWdpbmFsIEFSQzQtYmFzZWQgcHJuZyBpbmNsdWRlZCBpbiB0aGlzIGxpYnJhcnkuXG4vLyBQZXJpb2Q6IH4yXjE2MDBcbnZhciBzciA9IHJlcXVpcmUoJy4vc2VlZHJhbmRvbScpO1xuXG5zci5hbGVhID0gYWxlYTtcbnNyLnhvcjEyOCA9IHhvcjEyODtcbnNyLnhvcndvdyA9IHhvcndvdztcbnNyLnhvcnNoaWZ0NyA9IHhvcnNoaWZ0NztcbnNyLnhvcjQwOTYgPSB4b3I0MDk2O1xuc3IudHljaGVpID0gdHljaGVpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNyO1xuIiwiLy8gQSBwb3J0IG9mIGFuIGFsZ29yaXRobSBieSBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbi8vIGh0dHA6Ly9iYWFnb2UuY29tL2VuL1JhbmRvbU11c2luZ3MvamF2YXNjcmlwdC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ucXVpbmxhbi9iZXR0ZXItcmFuZG9tLW51bWJlcnMtZm9yLWphdmFzY3JpcHQtbWlycm9yXG4vLyBPcmlnaW5hbCB3b3JrIGlzIHVuZGVyIE1JVCBsaWNlbnNlIC1cblxuLy8gQ29weXJpZ2h0IChDKSAyMDEwIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2Uub3JnPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cblxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBBbGVhKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgbWFzaCA9IE1hc2goKTtcblxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAyMDkxNjM5ICogbWUuczAgKyBtZS5jICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICBtZS5zMCA9IG1lLnMxO1xuICAgIG1lLnMxID0gbWUuczI7XG4gICAgcmV0dXJuIG1lLnMyID0gdCAtIChtZS5jID0gdCB8IDApO1xuICB9O1xuXG4gIC8vIEFwcGx5IHRoZSBzZWVkaW5nIGFsZ29yaXRobSBmcm9tIEJhYWdvZS5cbiAgbWUuYyA9IDE7XG4gIG1lLnMwID0gbWFzaCgnICcpO1xuICBtZS5zMSA9IG1hc2goJyAnKTtcbiAgbWUuczIgPSBtYXNoKCcgJyk7XG4gIG1lLnMwIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMCA8IDApIHsgbWUuczAgKz0gMTsgfVxuICBtZS5zMSAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczEgPCAwKSB7IG1lLnMxICs9IDE7IH1cbiAgbWUuczIgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMyIDwgMCkgeyBtZS5zMiArPSAxOyB9XG4gIG1hc2ggPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5jID0gZi5jO1xuICB0LnMwID0gZi5zMDtcbiAgdC5zMSA9IGYuczE7XG4gIHQuczIgPSBmLnMyO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBBbGVhKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0geGcubmV4dDtcbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSAqIDB4MTAwMDAwMDAwKSB8IDA7IH1cbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcHJuZygpICsgKHBybmcoKSAqIDB4MjAwMDAwIHwgMCkgKiAxLjExMDIyMzAyNDYyNTE1NjVlLTE2OyAvLyAyXi01M1xuICB9O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuZnVuY3Rpb24gTWFzaCgpIHtcbiAgdmFyIG4gPSAweGVmYzgyNDlkO1xuXG4gIHZhciBtYXNoID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGRhdGEgPSBTdHJpbmcoZGF0YSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICBuID0gaCA+Pj4gMDtcbiAgICAgIGggLT0gbjtcbiAgICAgIGggKj0gbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICB9XG4gICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gIH07XG5cbiAgcmV0dXJuIG1hc2g7XG59XG5cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5hbGVhID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJUeWNoZS1pXCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIFNhbXVlbCBOZXZlcyBhbmQgRmlsaXBlIEFyYXVqby5cbi8vIFNlZSBodHRwczovL2VkZW4uZGVpLnVjLnB0L35zbmV2ZXMvcHVicy8yMDExLXNuZmEyLnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBiID0gbWUuYiwgYyA9IG1lLmMsIGQgPSBtZS5kLCBhID0gbWUuYTtcbiAgICBiID0gKGIgPDwgMjUpIF4gKGIgPj4+IDcpIF4gYztcbiAgICBjID0gKGMgLSBkKSB8IDA7XG4gICAgZCA9IChkIDw8IDI0KSBeIChkID4+PiA4KSBeIGE7XG4gICAgYSA9IChhIC0gYikgfCAwO1xuICAgIG1lLmIgPSBiID0gKGIgPDwgMjApIF4gKGIgPj4+IDEyKSBeIGM7XG4gICAgbWUuYyA9IGMgPSAoYyAtIGQpIHwgMDtcbiAgICBtZS5kID0gKGQgPDwgMTYpIF4gKGMgPj4+IDE2KSBeIGE7XG4gICAgcmV0dXJuIG1lLmEgPSAoYSAtIGIpIHwgMDtcbiAgfTtcblxuICAvKiBUaGUgZm9sbG93aW5nIGlzIG5vbi1pbnZlcnRlZCB0eWNoZSwgd2hpY2ggaGFzIGJldHRlciBpbnRlcm5hbFxuICAgKiBiaXQgZGlmZnVzaW9uLCBidXQgd2hpY2ggaXMgYWJvdXQgMjUlIHNsb3dlciB0aGFuIHR5Y2hlLWkgaW4gSlMuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG1lLmEsIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQ7XG4gICAgYSA9IChtZS5hICsgbWUuYiB8IDApID4+PiAwO1xuICAgIGQgPSBtZS5kIF4gYTsgZCA9IGQgPDwgMTYgXiBkID4+PiAxNjtcbiAgICBjID0gbWUuYyArIGQgfCAwO1xuICAgIGIgPSBtZS5iIF4gYzsgYiA9IGIgPDwgMTIgXiBkID4+PiAyMDtcbiAgICBtZS5hID0gYSA9IGEgKyBiIHwgMDtcbiAgICBkID0gZCBeIGE7IG1lLmQgPSBkID0gZCA8PCA4IF4gZCA+Pj4gMjQ7XG4gICAgbWUuYyA9IGMgPSBjICsgZCB8IDA7XG4gICAgYiA9IGIgXiBjO1xuICAgIHJldHVybiBtZS5iID0gKGIgPDwgNyBeIGIgPj4+IDI1KTtcbiAgfVxuICAqL1xuXG4gIG1lLmEgPSAwO1xuICBtZS5iID0gMDtcbiAgbWUuYyA9IDI2NTQ0MzU3NjkgfCAwO1xuICBtZS5kID0gMTM2NzEzMDU1MTtcblxuICBpZiAoc2VlZCA9PT0gTWF0aC5mbG9vcihzZWVkKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS5hID0gKHNlZWQgLyAweDEwMDAwMDAwMCkgfCAwO1xuICAgIG1lLmIgPSBzZWVkIHwgMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDIwOyBrKyspIHtcbiAgICBtZS5iIF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmEgPSBmLmE7XG4gIHQuYiA9IGYuYjtcbiAgdC5jID0gZi5jO1xuICB0LmQgPSBmLmQ7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy50eWNoZWkgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcjEyOFwiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBtZS54IF4gKG1lLnggPDwgMTEpO1xuICAgIG1lLnggPSBtZS55O1xuICAgIG1lLnkgPSBtZS56O1xuICAgIG1lLnogPSBtZS53O1xuICAgIHJldHVybiBtZS53IF49IChtZS53ID4+PiAxOSkgXiB0IF4gKHQgPj4+IDgpO1xuICB9O1xuXG4gIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLnggPSBzZWVkO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgNjQ7IGsrKykge1xuICAgIG1lLnggXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQueCA9IGYueDtcbiAgdC55ID0gZi55O1xuICB0LnogPSBmLno7XG4gIHQudyA9IGYudztcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yMTI4ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiBSaWNoYXJkIEJyZW50J3MgWG9yZ2VucyB4b3I0MDk2IGFsZ29yaXRobS5cbi8vXG4vLyBUaGlzIGZhc3Qgbm9uLWNyeXB0b2dyYXBoaWMgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgaXMgZGVzaWduZWQgZm9yXG4vLyB1c2UgaW4gTW9udGUtQ2FybG8gYWxnb3JpdGhtcy4gSXQgY29tYmluZXMgYSBsb25nLXBlcmlvZCB4b3JzaGlmdFxuLy8gZ2VuZXJhdG9yIHdpdGggYSBXZXlsIGdlbmVyYXRvciwgYW5kIGl0IHBhc3NlcyBhbGwgY29tbW9uIGJhdHRlcmllc1xuLy8gb2Ygc3Rhc3RpY2lhbCB0ZXN0cyBmb3IgcmFuZG9tbmVzcyB3aGlsZSBjb25zdW1pbmcgb25seSBhIGZldyBuYW5vc2Vjb25kc1xuLy8gZm9yIGVhY2ggcHJuZyBnZW5lcmF0ZWQuICBGb3IgYmFja2dyb3VuZCBvbiB0aGUgZ2VuZXJhdG9yLCBzZWUgQnJlbnQnc1xuLy8gcGFwZXI6IFwiU29tZSBsb25nLXBlcmlvZCByYW5kb20gbnVtYmVyIGdlbmVyYXRvcnMgdXNpbmcgc2hpZnRzIGFuZCB4b3JzLlwiXG4vLyBodHRwOi8vYXJ4aXYub3JnL3BkZi8xMDA0LjMxMTV2MS5wZGZcbi8vXG4vLyBVc2FnZTpcbi8vXG4vLyB2YXIgeG9yNDA5NiA9IHJlcXVpcmUoJ3hvcjQwOTYnKTtcbi8vIHJhbmRvbSA9IHhvcjQwOTYoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZCB3aXRoIGludDMyIG9yIHN0cmluZy5cbi8vIGFzc2VydC5lcXVhbChyYW5kb20oKSwgMC4xNTIwNDM2NDUwNTM4NTQ3KTsgLy8gKDAsIDEpIHJhbmdlLCA1MyBiaXRzLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbS5pbnQzMigpLCAxODA2NTM0ODk3KTsgICAvLyBzaWduZWQgaW50MzIsIDMyIGJpdHMuXG4vL1xuLy8gRm9yIG5vbnplcm8gbnVtZXJpYyBrZXlzLCB0aGlzIGltcGVsZW1lbnRhdGlvbiBwcm92aWRlcyBhIHNlcXVlbmNlXG4vLyBpZGVudGljYWwgdG8gdGhhdCBieSBCcmVudCdzIHhvcmdlbnMgMyBpbXBsZW1lbnRhaW9uIGluIEMuICBUaGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBhbHNvIHByb3ZpZGVzIGZvciBpbml0YWxpemluZyB0aGUgZ2VuZXJhdG9yIHdpdGhcbi8vIHN0cmluZyBzZWVkcywgb3IgZm9yIHNhdmluZyBhbmQgcmVzdG9yaW5nIHRoZSBzdGF0ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuLy9cbi8vIE9uIENocm9tZSwgdGhpcyBwcm5nIGJlbmNobWFya3MgYWJvdXQgMi4xIHRpbWVzIHNsb3dlciB0aGFuXG4vLyBKYXZhc2NyaXB0J3MgYnVpbHQtaW4gTWF0aC5yYW5kb20oKS5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHcgPSBtZS53LFxuICAgICAgICBYID0gbWUuWCwgaSA9IG1lLmksIHQsIHY7XG4gICAgLy8gVXBkYXRlIFdleWwgZ2VuZXJhdG9yLlxuICAgIG1lLncgPSB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdiA9IFhbKGkgKyAzNCkgJiAxMjddO1xuICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgIHYgXj0gdiA8PCAxMztcbiAgICB0IF49IHQgPDwgMTc7XG4gICAgdiBePSB2ID4+PiAxNTtcbiAgICB0IF49IHQgPj4+IDEyO1xuICAgIC8vIFVwZGF0ZSBYb3IgZ2VuZXJhdG9yIGFycmF5IHN0YXRlLlxuICAgIHYgPSBYW2ldID0gdiBeIHQ7XG4gICAgbWUuaSA9IGk7XG4gICAgLy8gUmVzdWx0IGlzIHRoZSBjb21iaW5hdGlvbi5cbiAgICByZXR1cm4gKHYgKyAodyBeICh3ID4+PiAxNikpKSB8IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gaW5pdChtZSwgc2VlZCkge1xuICAgIHZhciB0LCB2LCBpLCBqLCB3LCBYID0gW10sIGxpbWl0ID0gMTI4O1xuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBOdW1lcmljIHNlZWRzIGluaXRpYWxpemUgdiwgd2hpY2ggaXMgdXNlZCB0byBnZW5lcmF0ZXMgWC5cbiAgICAgIHYgPSBzZWVkO1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0cmluZyBzZWVkcyBhcmUgbWl4ZWQgaW50byB2IGFuZCBYIG9uZSBjaGFyYWN0ZXIgYXQgYSB0aW1lLlxuICAgICAgc2VlZCA9IHNlZWQgKyAnXFwwJztcbiAgICAgIHYgPSAwO1xuICAgICAgbGltaXQgPSBNYXRoLm1heChsaW1pdCwgc2VlZC5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIGNpcmN1bGFyIGFycmF5IGFuZCB3ZXlsIHZhbHVlLlxuICAgIGZvciAoaSA9IDAsIGogPSAtMzI7IGogPCBsaW1pdDsgKytqKSB7XG4gICAgICAvLyBQdXQgdGhlIHVuaWNvZGUgY2hhcmFjdGVycyBpbnRvIHRoZSBhcnJheSwgYW5kIHNodWZmbGUgdGhlbS5cbiAgICAgIGlmIChzZWVkKSB2IF49IHNlZWQuY2hhckNvZGVBdCgoaiArIDMyKSAlIHNlZWQubGVuZ3RoKTtcbiAgICAgIC8vIEFmdGVyIDMyIHNodWZmbGVzLCB0YWtlIHYgYXMgdGhlIHN0YXJ0aW5nIHcgdmFsdWUuXG4gICAgICBpZiAoaiA9PT0gMCkgdyA9IHY7XG4gICAgICB2IF49IHYgPDwgMTA7XG4gICAgICB2IF49IHYgPj4+IDE1O1xuICAgICAgdiBePSB2IDw8IDQ7XG4gICAgICB2IF49IHYgPj4+IDEzO1xuICAgICAgaWYgKGogPj0gMCkge1xuICAgICAgICB3ID0gKHcgKyAweDYxYzg4NjQ3KSB8IDA7ICAgICAvLyBXZXlsLlxuICAgICAgICB0ID0gKFhbaiAmIDEyN10gXj0gKHYgKyB3KSk7ICAvLyBDb21iaW5lIHhvciBhbmQgd2V5bCB0byBpbml0IGFycmF5LlxuICAgICAgICBpID0gKDAgPT0gdCkgPyBpICsgMSA6IDA7ICAgICAvLyBDb3VudCB6ZXJvZXMuXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgZGV0ZWN0ZWQgYWxsIHplcm9lczsgbWFrZSB0aGUga2V5IG5vbnplcm8uXG4gICAgaWYgKGkgPj0gMTI4KSB7XG4gICAgICBYWyhzZWVkICYmIHNlZWQubGVuZ3RoIHx8IDApICYgMTI3XSA9IC0xO1xuICAgIH1cbiAgICAvLyBSdW4gdGhlIGdlbmVyYXRvciA1MTIgdGltZXMgdG8gZnVydGhlciBtaXggdGhlIHN0YXRlIGJlZm9yZSB1c2luZyBpdC5cbiAgICAvLyBGYWN0b3JpbmcgdGhpcyBhcyBhIGZ1bmN0aW9uIHNsb3dzIHRoZSBtYWluIGdlbmVyYXRvciwgc28gaXQgaXMganVzdFxuICAgIC8vIHVucm9sbGVkIGhlcmUuICBUaGUgd2V5bCBnZW5lcmF0b3IgaXMgbm90IGFkdmFuY2VkIHdoaWxlIHdhcm1pbmcgdXAuXG4gICAgaSA9IDEyNztcbiAgICBmb3IgKGogPSA0ICogMTI4OyBqID4gMDsgLS1qKSB7XG4gICAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgICB0ID0gWFtpID0gKChpICsgMSkgJiAxMjcpXTtcbiAgICAgIHYgXj0gdiA8PCAxMztcbiAgICAgIHQgXj0gdCA8PCAxNztcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB0IF49IHQgPj4+IDEyO1xuICAgICAgWFtpXSA9IHYgXiB0O1xuICAgIH1cbiAgICAvLyBTdG9yaW5nIHN0YXRlIGFzIG9iamVjdCBtZW1iZXJzIGlzIGZhc3RlciB0aGFuIHVzaW5nIGNsb3N1cmUgdmFyaWFibGVzLlxuICAgIG1lLncgPSB3O1xuICAgIG1lLlggPSBYO1xuICAgIG1lLmkgPSBpO1xuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmkgPSBmLmk7XG4gIHQudyA9IGYudztcbiAgdC5YID0gZi5YLnNsaWNlKCk7XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuWCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcjQwOTYgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IG9iamVjdCBvciBnbG9iYWxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yc2hpZnQ3XCIgYWxnb3JpdGhtIGJ5XG4vLyBGcmFuw6dvaXMgUGFubmV0b24gYW5kIFBpZXJyZSBMJ2VjdXllcjpcbi8vIFwiT24gdGhlIFhvcmdzaGlmdCBSYW5kb20gTnVtYmVyIEdlbmVyYXRvcnNcIlxuLy8gaHR0cDovL3NhbHVjLmVuZ3IudWNvbm4uZWR1L3JlZnMvY3J5cHRvL3JuZy9wYW5uZXRvbjA1b250aGV4b3JzaGlmdC5wZGZcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXBkYXRlIHhvciBnZW5lcmF0b3IuXG4gICAgdmFyIFggPSBtZS54LCBpID0gbWUuaSwgdCwgdiwgdztcbiAgICB0ID0gWFtpXTsgdCBePSAodCA+Pj4gNyk7IHYgPSB0IF4gKHQgPDwgMjQpO1xuICAgIHQgPSBYWyhpICsgMSkgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDEwKTtcbiAgICB0ID0gWFsoaSArIDMpICYgN107IHYgXj0gdCBeICh0ID4+PiAzKTtcbiAgICB0ID0gWFsoaSArIDQpICYgN107IHYgXj0gdCBeICh0IDw8IDcpO1xuICAgIHQgPSBYWyhpICsgNykgJiA3XTsgdCA9IHQgXiAodCA8PCAxMyk7IHYgXj0gdCBeICh0IDw8IDkpO1xuICAgIFhbaV0gPSB2O1xuICAgIG1lLmkgPSAoaSArIDEpICYgNztcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIGosIHcsIFggPSBbXTtcblxuICAgIGlmIChzZWVkID09PSAoc2VlZCB8IDApKSB7XG4gICAgICAvLyBTZWVkIHN0YXRlIGFycmF5IHVzaW5nIGEgMzItYml0IGludGVnZXIuXG4gICAgICB3ID0gWFswXSA9IHNlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgdXNpbmcgYSBzdHJpbmcuXG4gICAgICBzZWVkID0gJycgKyBzZWVkO1xuICAgICAgZm9yIChqID0gMDsgaiA8IHNlZWQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgWFtqICYgN10gPSAoWFtqICYgN10gPDwgMTUpIF5cbiAgICAgICAgICAgIChzZWVkLmNoYXJDb2RlQXQoaikgKyBYWyhqICsgMSkgJiA3XSA8PCAxMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVuZm9yY2UgYW4gYXJyYXkgbGVuZ3RoIG9mIDgsIG5vdCBhbGwgemVyb2VzLlxuICAgIHdoaWxlIChYLmxlbmd0aCA8IDgpIFgucHVzaCgwKTtcbiAgICBmb3IgKGogPSAwOyBqIDwgOCAmJiBYW2pdID09PSAwOyArK2opO1xuICAgIGlmIChqID09IDgpIHcgPSBYWzddID0gLTE7IGVsc2UgdyA9IFhbal07XG5cbiAgICBtZS54ID0gWDtcbiAgICBtZS5pID0gMDtcblxuICAgIC8vIERpc2NhcmQgYW4gaW5pdGlhbCAyNTYgdmFsdWVzLlxuICAgIGZvciAoaiA9IDI1NjsgaiA+IDA7IC0taikge1xuICAgICAgbWUubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQobWUsIHNlZWQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54LnNsaWNlKCk7XG4gIHQuaSA9IGYuaTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICBpZiAoc2VlZCA9PSBudWxsKSBzZWVkID0gKyhuZXcgRGF0ZSk7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLngpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3JzaGlmdDcgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3J3b3dcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gR2VvcmdlIE1hcnNhZ2xpYS4gIFNlZSBodHRwOi8vd3d3LmpzdGF0c29mdC5vcmcvdjA4L2kxNC9wYXBlclxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBzdHJzZWVkID0gJyc7XG5cbiAgLy8gU2V0IHVwIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gKG1lLnggXiAobWUueCA+Pj4gMikpO1xuICAgIG1lLnggPSBtZS55OyBtZS55ID0gbWUuejsgbWUueiA9IG1lLnc7IG1lLncgPSBtZS52O1xuICAgIHJldHVybiAobWUuZCA9IChtZS5kICsgMzYyNDM3IHwgMCkpICtcbiAgICAgICAobWUudiA9IChtZS52IF4gKG1lLnYgPDwgNCkpIF4gKHQgXiAodCA8PCAxKSkpIHwgMDtcbiAgfTtcblxuICBtZS54ID0gMDtcbiAgbWUueSA9IDA7XG4gIG1lLnogPSAwO1xuICBtZS53ID0gMDtcbiAgbWUudiA9IDA7XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIGlmIChrID09IHN0cnNlZWQubGVuZ3RoKSB7XG4gICAgICBtZS5kID0gbWUueCA8PCAxMCBeIG1lLnggPj4+IDQ7XG4gICAgfVxuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICB0LnYgPSBmLnY7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGltcGwoc2VlZCwgb3B0cykge1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICh0eXBlb2Yoc3RhdGUpID09ICdvYmplY3QnKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yd293ID0gaW1wbDtcbn1cblxufSkoXG4gIHRoaXMsXG4gICh0eXBlb2YgbW9kdWxlKSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUsICAgIC8vIHByZXNlbnQgaW4gbm9kZS5qc1xuICAodHlwZW9mIGRlZmluZSkgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUgICAvLyBwcmVzZW50IHdpdGggYW4gQU1EIGxvYWRlclxuKTtcblxuXG4iLCIvKlxuQ29weXJpZ2h0IDIwMTQgRGF2aWQgQmF1LlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5FWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbk1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbklOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG5DTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcblNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG4oZnVuY3Rpb24gKHBvb2wsIG1hdGgpIHtcbi8vXG4vLyBUaGUgZm9sbG93aW5nIGNvbnN0YW50cyBhcmUgcmVsYXRlZCB0byBJRUVFIDc1NCBsaW1pdHMuXG4vL1xuXG4vLyBEZXRlY3QgdGhlIGdsb2JhbCBvYmplY3QsIGV2ZW4gaWYgb3BlcmF0aW5nIGluIHN0cmljdCBtb2RlLlxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODcwNTcvMjY1Mjk4XG52YXIgZ2xvYmFsID0gKDAsIGV2YWwpKCd0aGlzJyksXG4gICAgd2lkdGggPSAyNTYsICAgICAgICAvLyBlYWNoIFJDNCBvdXRwdXQgaXMgMCA8PSB4IDwgMjU2XG4gICAgY2h1bmtzID0gNiwgICAgICAgICAvLyBhdCBsZWFzdCBzaXggUkM0IG91dHB1dHMgZm9yIGVhY2ggZG91YmxlXG4gICAgZGlnaXRzID0gNTIsICAgICAgICAvLyB0aGVyZSBhcmUgNTIgc2lnbmlmaWNhbnQgZGlnaXRzIGluIGEgZG91YmxlXG4gICAgcm5nbmFtZSA9ICdyYW5kb20nLCAvLyBybmduYW1lOiBuYW1lIGZvciBNYXRoLnJhbmRvbSBhbmQgTWF0aC5zZWVkcmFuZG9tXG4gICAgc3RhcnRkZW5vbSA9IG1hdGgucG93KHdpZHRoLCBjaHVua3MpLFxuICAgIHNpZ25pZmljYW5jZSA9IG1hdGgucG93KDIsIGRpZ2l0cyksXG4gICAgb3ZlcmZsb3cgPSBzaWduaWZpY2FuY2UgKiAyLFxuICAgIG1hc2sgPSB3aWR0aCAtIDEsXG4gICAgbm9kZWNyeXB0bzsgICAgICAgICAvLyBub2RlLmpzIGNyeXB0byBtb2R1bGUsIGluaXRpYWxpemVkIGF0IHRoZSBib3R0b20uXG5cbi8vXG4vLyBzZWVkcmFuZG9tKClcbi8vIFRoaXMgaXMgdGhlIHNlZWRyYW5kb20gZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlLlxuLy9cbmZ1bmN0aW9uIHNlZWRyYW5kb20oc2VlZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGtleSA9IFtdO1xuICBvcHRpb25zID0gKG9wdGlvbnMgPT0gdHJ1ZSkgPyB7IGVudHJvcHk6IHRydWUgfSA6IChvcHRpb25zIHx8IHt9KTtcblxuICAvLyBGbGF0dGVuIHRoZSBzZWVkIHN0cmluZyBvciBidWlsZCBvbmUgZnJvbSBsb2NhbCBlbnRyb3B5IGlmIG5lZWRlZC5cbiAgdmFyIHNob3J0c2VlZCA9IG1peGtleShmbGF0dGVuKFxuICAgIG9wdGlvbnMuZW50cm9weSA/IFtzZWVkLCB0b3N0cmluZyhwb29sKV0gOlxuICAgIChzZWVkID09IG51bGwpID8gYXV0b3NlZWQoKSA6IHNlZWQsIDMpLCBrZXkpO1xuXG4gIC8vIFVzZSB0aGUgc2VlZCB0byBpbml0aWFsaXplIGFuIEFSQzQgZ2VuZXJhdG9yLlxuICB2YXIgYXJjNCA9IG5ldyBBUkM0KGtleSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgcmFuZG9tIGRvdWJsZSBpbiBbMCwgMSkgdGhhdCBjb250YWluc1xuICAvLyByYW5kb21uZXNzIGluIGV2ZXJ5IGJpdCBvZiB0aGUgbWFudGlzc2Egb2YgdGhlIElFRUUgNzU0IHZhbHVlLlxuICB2YXIgcHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gYXJjNC5nKGNodW5rcyksICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBudW1lcmF0b3IgbiA8IDIgXiA0OFxuICAgICAgICBkID0gc3RhcnRkZW5vbSwgICAgICAgICAgICAgICAgIC8vICAgYW5kIGRlbm9taW5hdG9yIGQgPSAyIF4gNDguXG4gICAgICAgIHggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBhbmQgbm8gJ2V4dHJhIGxhc3QgYnl0ZScuXG4gICAgd2hpbGUgKG4gPCBzaWduaWZpY2FuY2UpIHsgICAgICAgICAgLy8gRmlsbCB1cCBhbGwgc2lnbmlmaWNhbnQgZGlnaXRzIGJ5XG4gICAgICBuID0gKG4gKyB4KSAqIHdpZHRoOyAgICAgICAgICAgICAgLy8gICBzaGlmdGluZyBudW1lcmF0b3IgYW5kXG4gICAgICBkICo9IHdpZHRoOyAgICAgICAgICAgICAgICAgICAgICAgLy8gICBkZW5vbWluYXRvciBhbmQgZ2VuZXJhdGluZyBhXG4gICAgICB4ID0gYXJjNC5nKDEpOyAgICAgICAgICAgICAgICAgICAgLy8gICBuZXcgbGVhc3Qtc2lnbmlmaWNhbnQtYnl0ZS5cbiAgICB9XG4gICAgd2hpbGUgKG4gPj0gb3ZlcmZsb3cpIHsgICAgICAgICAgICAgLy8gVG8gYXZvaWQgcm91bmRpbmcgdXAsIGJlZm9yZSBhZGRpbmdcbiAgICAgIG4gLz0gMjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGxhc3QgYnl0ZSwgc2hpZnQgZXZlcnl0aGluZ1xuICAgICAgZCAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmlnaHQgdXNpbmcgaW50ZWdlciBtYXRoIHVudGlsXG4gICAgICB4ID4+Pj0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB3ZSBoYXZlIGV4YWN0bHkgdGhlIGRlc2lyZWQgYml0cy5cbiAgICB9XG4gICAgcmV0dXJuIChuICsgeCkgLyBkOyAgICAgICAgICAgICAgICAgLy8gRm9ybSB0aGUgbnVtYmVyIHdpdGhpbiBbMCwgMSkuXG4gIH07XG5cbiAgcHJuZy5pbnQzMiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJjNC5nKDQpIHwgMDsgfVxuICBwcm5nLnF1aWNrID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgLyAweDEwMDAwMDAwMDsgfVxuICBwcm5nLmRvdWJsZSA9IHBybmc7XG5cbiAgLy8gTWl4IHRoZSByYW5kb21uZXNzIGludG8gYWNjdW11bGF0ZWQgZW50cm9weS5cbiAgbWl4a2V5KHRvc3RyaW5nKGFyYzQuUyksIHBvb2wpO1xuXG4gIC8vIENhbGxpbmcgY29udmVudGlvbjogd2hhdCB0byByZXR1cm4gYXMgYSBmdW5jdGlvbiBvZiBwcm5nLCBzZWVkLCBpc19tYXRoLlxuICByZXR1cm4gKG9wdGlvbnMucGFzcyB8fCBjYWxsYmFjayB8fFxuICAgICAgZnVuY3Rpb24ocHJuZywgc2VlZCwgaXNfbWF0aF9jYWxsLCBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAvLyBMb2FkIHRoZSBhcmM0IHN0YXRlIGZyb20gdGhlIGdpdmVuIHN0YXRlIGlmIGl0IGhhcyBhbiBTIGFycmF5LlxuICAgICAgICAgIGlmIChzdGF0ZS5TKSB7IGNvcHkoc3RhdGUsIGFyYzQpOyB9XG4gICAgICAgICAgLy8gT25seSBwcm92aWRlIHRoZSAuc3RhdGUgbWV0aG9kIGlmIHJlcXVlc3RlZCB2aWEgb3B0aW9ucy5zdGF0ZS5cbiAgICAgICAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KGFyYzQsIHt9KTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgY2FsbGVkIGFzIGEgbWV0aG9kIG9mIE1hdGggKE1hdGguc2VlZHJhbmRvbSgpKSwgbXV0YXRlXG4gICAgICAgIC8vIE1hdGgucmFuZG9tIGJlY2F1c2UgdGhhdCBpcyBob3cgc2VlZHJhbmRvbS5qcyBoYXMgd29ya2VkIHNpbmNlIHYxLjAuXG4gICAgICAgIGlmIChpc19tYXRoX2NhbGwpIHsgbWF0aFtybmduYW1lXSA9IHBybmc7IHJldHVybiBzZWVkOyB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCBpcyBhIG5ld2VyIGNhbGxpbmcgY29udmVudGlvbiwgc28gcmV0dXJuIHRoZVxuICAgICAgICAvLyBwcm5nIGRpcmVjdGx5LlxuICAgICAgICBlbHNlIHJldHVybiBwcm5nO1xuICAgICAgfSkoXG4gIHBybmcsXG4gIHNob3J0c2VlZCxcbiAgJ2dsb2JhbCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuZ2xvYmFsIDogKHRoaXMgPT0gbWF0aCksXG4gIG9wdGlvbnMuc3RhdGUpO1xufVxuXG4vL1xuLy8gQVJDNFxuLy9cbi8vIEFuIEFSQzQgaW1wbGVtZW50YXRpb24uICBUaGUgY29uc3RydWN0b3IgdGFrZXMgYSBrZXkgaW4gdGhlIGZvcm0gb2Zcbi8vIGFuIGFycmF5IG9mIGF0IG1vc3QgKHdpZHRoKSBpbnRlZ2VycyB0aGF0IHNob3VsZCBiZSAwIDw9IHggPCAod2lkdGgpLlxuLy9cbi8vIFRoZSBnKGNvdW50KSBtZXRob2QgcmV0dXJucyBhIHBzZXVkb3JhbmRvbSBpbnRlZ2VyIHRoYXQgY29uY2F0ZW5hdGVzXG4vLyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgZnJvbSBBUkM0LiAgSXRzIHJldHVybiB2YWx1ZSBpcyBhIG51bWJlciB4XG4vLyB0aGF0IGlzIGluIHRoZSByYW5nZSAwIDw9IHggPCAod2lkdGggXiBjb3VudCkuXG4vL1xuZnVuY3Rpb24gQVJDNChrZXkpIHtcbiAgdmFyIHQsIGtleWxlbiA9IGtleS5sZW5ndGgsXG4gICAgICBtZSA9IHRoaXMsIGkgPSAwLCBqID0gbWUuaSA9IG1lLmogPSAwLCBzID0gbWUuUyA9IFtdO1xuXG4gIC8vIFRoZSBlbXB0eSBrZXkgW10gaXMgdHJlYXRlZCBhcyBbMF0uXG4gIGlmICgha2V5bGVuKSB7IGtleSA9IFtrZXlsZW4rK107IH1cblxuICAvLyBTZXQgdXAgUyB1c2luZyB0aGUgc3RhbmRhcmQga2V5IHNjaGVkdWxpbmcgYWxnb3JpdGhtLlxuICB3aGlsZSAoaSA8IHdpZHRoKSB7XG4gICAgc1tpXSA9IGkrKztcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyBrZXlbaSAlIGtleWxlbl0gKyAodCA9IHNbaV0pKV07XG4gICAgc1tqXSA9IHQ7XG4gIH1cblxuICAvLyBUaGUgXCJnXCIgbWV0aG9kIHJldHVybnMgdGhlIG5leHQgKGNvdW50KSBvdXRwdXRzIGFzIG9uZSBudW1iZXIuXG4gIChtZS5nID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICAvLyBVc2luZyBpbnN0YW5jZSBtZW1iZXJzIGluc3RlYWQgb2YgY2xvc3VyZSBzdGF0ZSBuZWFybHkgZG91YmxlcyBzcGVlZC5cbiAgICB2YXIgdCwgciA9IDAsXG4gICAgICAgIGkgPSBtZS5pLCBqID0gbWUuaiwgcyA9IG1lLlM7XG4gICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgIHQgPSBzW2kgPSBtYXNrICYgKGkgKyAxKV07XG4gICAgICByID0gciAqIHdpZHRoICsgc1ttYXNrICYgKChzW2ldID0gc1tqID0gbWFzayAmIChqICsgdCldKSArIChzW2pdID0gdCkpXTtcbiAgICB9XG4gICAgbWUuaSA9IGk7IG1lLmogPSBqO1xuICAgIHJldHVybiByO1xuICAgIC8vIEZvciByb2J1c3QgdW5wcmVkaWN0YWJpbGl0eSwgdGhlIGZ1bmN0aW9uIGNhbGwgYmVsb3cgYXV0b21hdGljYWxseVxuICAgIC8vIGRpc2NhcmRzIGFuIGluaXRpYWwgYmF0Y2ggb2YgdmFsdWVzLiAgVGhpcyBpcyBjYWxsZWQgUkM0LWRyb3BbMjU2XS5cbiAgICAvLyBTZWUgaHR0cDovL2dvb2dsZS5jb20vc2VhcmNoP3E9cnNhK2ZsdWhyZXIrcmVzcG9uc2UmYnRuSVxuICB9KSh3aWR0aCk7XG59XG5cbi8vXG4vLyBjb3B5KClcbi8vIENvcGllcyBpbnRlcm5hbCBzdGF0ZSBvZiBBUkM0IHRvIG9yIGZyb20gYSBwbGFpbiBvYmplY3QuXG4vL1xuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC5qID0gZi5qO1xuICB0LlMgPSBmLlMuc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG4vL1xuLy8gZmxhdHRlbigpXG4vLyBDb252ZXJ0cyBhbiBvYmplY3QgdHJlZSB0byBuZXN0ZWQgYXJyYXlzIG9mIHN0cmluZ3MuXG4vL1xuZnVuY3Rpb24gZmxhdHRlbihvYmosIGRlcHRoKSB7XG4gIHZhciByZXN1bHQgPSBbXSwgdHlwID0gKHR5cGVvZiBvYmopLCBwcm9wO1xuICBpZiAoZGVwdGggJiYgdHlwID09ICdvYmplY3QnKSB7XG4gICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgdHJ5IHsgcmVzdWx0LnB1c2goZmxhdHRlbihvYmpbcHJvcF0sIGRlcHRoIC0gMSkpOyB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuICByZXR1cm4gKHJlc3VsdC5sZW5ndGggPyByZXN1bHQgOiB0eXAgPT0gJ3N0cmluZycgPyBvYmogOiBvYmogKyAnXFwwJyk7XG59XG5cbi8vXG4vLyBtaXhrZXkoKVxuLy8gTWl4ZXMgYSBzdHJpbmcgc2VlZCBpbnRvIGEga2V5IHRoYXQgaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMsIGFuZFxuLy8gcmV0dXJucyBhIHNob3J0ZW5lZCBzdHJpbmcgc2VlZCB0aGF0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHJlc3VsdCBrZXkuXG4vL1xuZnVuY3Rpb24gbWl4a2V5KHNlZWQsIGtleSkge1xuICB2YXIgc3RyaW5nc2VlZCA9IHNlZWQgKyAnJywgc21lYXIsIGogPSAwO1xuICB3aGlsZSAoaiA8IHN0cmluZ3NlZWQubGVuZ3RoKSB7XG4gICAga2V5W21hc2sgJiBqXSA9XG4gICAgICBtYXNrICYgKChzbWVhciBePSBrZXlbbWFzayAmIGpdICogMTkpICsgc3RyaW5nc2VlZC5jaGFyQ29kZUF0KGorKykpO1xuICB9XG4gIHJldHVybiB0b3N0cmluZyhrZXkpO1xufVxuXG4vL1xuLy8gYXV0b3NlZWQoKVxuLy8gUmV0dXJucyBhbiBvYmplY3QgZm9yIGF1dG9zZWVkaW5nLCB1c2luZyB3aW5kb3cuY3J5cHRvIGFuZCBOb2RlIGNyeXB0b1xuLy8gbW9kdWxlIGlmIGF2YWlsYWJsZS5cbi8vXG5mdW5jdGlvbiBhdXRvc2VlZCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3V0O1xuICAgIGlmIChub2RlY3J5cHRvICYmIChvdXQgPSBub2RlY3J5cHRvLnJhbmRvbUJ5dGVzKSkge1xuICAgICAgLy8gVGhlIHVzZSBvZiAnb3V0JyB0byByZW1lbWJlciByYW5kb21CeXRlcyBtYWtlcyB0aWdodCBtaW5pZmllZCBjb2RlLlxuICAgICAgb3V0ID0gb3V0KHdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ID0gbmV3IFVpbnQ4QXJyYXkod2lkdGgpO1xuICAgICAgKGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMob3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRvc3RyaW5nKG91dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgYnJvd3NlciA9IGdsb2JhbC5uYXZpZ2F0b3IsXG4gICAgICAgIHBsdWdpbnMgPSBicm93c2VyICYmIGJyb3dzZXIucGx1Z2lucztcbiAgICByZXR1cm4gWytuZXcgRGF0ZSwgZ2xvYmFsLCBwbHVnaW5zLCBnbG9iYWwuc2NyZWVuLCB0b3N0cmluZyhwb29sKV07XG4gIH1cbn1cblxuLy9cbi8vIHRvc3RyaW5nKClcbi8vIENvbnZlcnRzIGFuIGFycmF5IG9mIGNoYXJjb2RlcyB0byBhIHN0cmluZ1xuLy9cbmZ1bmN0aW9uIHRvc3RyaW5nKGEpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoMCwgYSk7XG59XG5cbi8vXG4vLyBXaGVuIHNlZWRyYW5kb20uanMgaXMgbG9hZGVkLCB3ZSBpbW1lZGlhdGVseSBtaXggYSBmZXcgYml0c1xuLy8gZnJvbSB0aGUgYnVpbHQtaW4gUk5HIGludG8gdGhlIGVudHJvcHkgcG9vbC4gIEJlY2F1c2Ugd2UgZG9cbi8vIG5vdCB3YW50IHRvIGludGVyZmVyZSB3aXRoIGRldGVybWluaXN0aWMgUFJORyBzdGF0ZSBsYXRlcixcbi8vIHNlZWRyYW5kb20gd2lsbCBub3QgY2FsbCBtYXRoLnJhbmRvbSBvbiBpdHMgb3duIGFnYWluIGFmdGVyXG4vLyBpbml0aWFsaXphdGlvbi5cbi8vXG5taXhrZXkobWF0aC5yYW5kb20oKSwgcG9vbCk7XG5cbi8vXG4vLyBOb2RlanMgYW5kIEFNRCBzdXBwb3J0OiBleHBvcnQgdGhlIGltcGxlbWVudGF0aW9uIGFzIGEgbW9kdWxlIHVzaW5nXG4vLyBlaXRoZXIgY29udmVudGlvbi5cbi8vXG5pZiAoKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gc2VlZHJhbmRvbTtcbiAgLy8gV2hlbiBpbiBub2RlLmpzLCB0cnkgdXNpbmcgY3J5cHRvIHBhY2thZ2UgZm9yIGF1dG9zZWVkaW5nLlxuICB0cnkge1xuICAgIG5vZGVjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgfSBjYXRjaCAoZXgpIHt9XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VlZHJhbmRvbTsgfSk7XG59IGVsc2Uge1xuICAvLyBXaGVuIGluY2x1ZGVkIGFzIGEgcGxhaW4gc2NyaXB0LCBzZXQgdXAgTWF0aC5zZWVkcmFuZG9tIGdsb2JhbC5cbiAgbWF0aFsnc2VlZCcgKyBybmduYW1lXSA9IHNlZWRyYW5kb207XG59XG5cblxuLy8gRW5kIGFub255bW91cyBzY29wZSwgYW5kIHBhc3MgaW5pdGlhbCB2YWx1ZXMuXG59KShcbiAgW10sICAgICAvLyBwb29sOiBlbnRyb3B5IHBvb2wgc3RhcnRzIGVtcHR5XG4gIE1hdGggICAgLy8gbWF0aDogcGFja2FnZSBjb250YWluaW5nIHJhbmRvbSwgcG93LCBhbmQgc2VlZHJhbmRvbVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcbn07XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHsgRW50aXR5LCBNb3ZhYmxlLCBFbGFzdGljQ29sbGlzaW9uLCBDb2xsaWRhYmxlIH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBQbGF5ZXIsIE90aGVyUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBjbGFzcyBCYWxsIGV4dGVuZHMgRW50aXR5IGltcGxlbWVudHMgTW92YWJsZSwgRWxhc3RpY0NvbGxpc2lvbiwgQ29sbGlkYWJsZSB7XG5cdHB1YmxpYyByYWRpdXMgPSAyMFxuXG5cdC8vVE9ETzogS2VlcCBhIGhpc3Rvcnkgb2Ygd2hhdCBiYWxscyB0aGUgcGxheWVyIGhhcyBjb2xsaWRlZCB3aXRoP1xuXHQvL2NvbGxpZGVkX3dpdGg6IHtbaWQ6IHN0cmluZ106IFBsYXllcn0gPSB7fVxuXHRwdWJsaWMgY29sbGlkZWRXaXRoOiBQbGF5ZXJcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy54ID0geFxuXHRcdHRoaXMueSA9IHlcblx0fVxuXG5cdHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG5cdFx0Ly8gbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5jb2xsaWRlZF93aXRoKVxuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sbGlkZWRXaXRoID8gdGhpcy5jb2xsaWRlZFdpdGguY29sb3VyIDogJ2JsdWUnXG5cdFx0Y3R4LmJlZ2luUGF0aCgpXG5cdFx0Y3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuXHRcdHRoaXMuY29sbGlkZWRXaXRoID8gY3R4LmZpbGwoKSA6IGN0eC5zdHJva2UoKVxuXG5cdFx0Ly8gbGV0IGRpdmlzaW9uID0gMipNYXRoLlBJL3ZhbHVlcy5sZW5ndGg7XG5cdFx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdGN0eC5maWxsU3R5bGUgPSB2YWx1ZXNbaV0uY29sb3VyXG5cdFx0Ly8gXHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Ly8gXHRjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgaSpkaXZpc2lvbiwgKGkrMSkqZGl2aXNpb24pO1xuXHRcdC8vIFx0Y3R4LmZpbGwoKTtcblx0XHQvLyB9XG5cdH1cblxuXHRwdWJsaWMgY29sbGlzaW9uX2ludGVyYWN0aW9uKGUyOiBFbnRpdHkpOiB2b2lkIHtcblx0XHRpZiAoZTIgaW5zdGFuY2VvZiBQbGF5ZXIgfHwgZTIgaW5zdGFuY2VvZiBPdGhlclBsYXllcikge1xuXHRcdFx0dGhpcy5jb2xsaWRlZFdpdGggPSBlMlxuXHRcdH1cblx0fVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yOiBhbnksIGJhc2VDdG9yczogYW55W10pOiB2b2lkIHtcblx0YmFzZUN0b3JzLmZvckVhY2goYmFzZUN0b3IgPT4ge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2VDdG9yLnByb3RvdHlwZSkuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0ZGVyaXZlZEN0b3IucHJvdG90eXBlLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2VDdG9yLnByb3RvdHlwZSwgbmFtZSlcblx0XHRcdClcblx0XHR9KVxuXHR9KVxufVxuYXBwbHlNaXhpbnMoQmFsbCwgW01vdmFibGUsIEVsYXN0aWNDb2xsaXNpb24sIENvbGxpZGFibGVdKVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSdcblxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XG5cdHB1YmxpYyBpZDogbnVtYmVyID0gLTFcblx0cHVibGljIHg6IG51bWJlciA9IDBcblx0cHVibGljIHk6IG51bWJlciA9IDBcblx0cHVibGljIHZ4OiBudW1iZXIgPSAwXG5cdHB1YmxpYyB2eTogbnVtYmVyID0gMFxuXHRwdWJsaWMgcmFkaXVzOiBudW1iZXJcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pZCA9IEdhbWUuZW50aXR5X2lkKytcblx0fVxuXG5cdC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuXHRwdWJsaWMgdXBkYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHt9XG5cdHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7fVxuXG5cdHB1YmxpYyBjb2xsaWRlcyhlMjogRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0cHVibGljIGNvbGxpc2lvbihlMjogRW50aXR5KTogdm9pZCB7fVxuXHRwdWJsaWMgY29sbGlzaW9uX2ludGVyYWN0aW9uKGUyOiBFbnRpdHkpOiB2b2lkIHt9XG5cdC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgRW50aXR5IHtcblx0cHVibGljIHVwZGF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogdm9pZCB7XG5cdFx0dGhpcy54ICs9IHRoaXMudnhcblx0XHR0aGlzLnkgKz0gdGhpcy52eVxuXG5cdFx0dGhpcy52eCAqPSAwLjk5NVxuXHRcdHRoaXMudnkgKj0gMC45OTVcblxuXHRcdGlmICh0aGlzLnggPCB0aGlzLnJhZGl1cykge1xuXHRcdFx0dGhpcy54ID0gdGhpcy5yYWRpdXNcblx0XHRcdHRoaXMudnggPSAtdGhpcy52eCAqIDAuOVxuXHRcdH1cblx0XHRpZiAodGhpcy54ID4gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcblx0XHRcdHRoaXMueCA9IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzXG5cdFx0XHR0aGlzLnZ4ID0gLXRoaXMudnggKiAwLjlcblx0XHR9XG5cdFx0aWYgKHRoaXMueSA8IHRoaXMucmFkaXVzKSB7XG5cdFx0XHR0aGlzLnkgPSB0aGlzLnJhZGl1c1xuXHRcdFx0dGhpcy52eSA9IC10aGlzLnZ5ICogMC45XG5cdFx0fVxuXHRcdGlmICh0aGlzLnkgPiBjYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcblx0XHRcdHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1c1xuXHRcdFx0dGhpcy52eSA9IC10aGlzLnZ5ICogMC45XG5cdFx0fVxuXHR9XG59XG5cbi8vVE9ETzogVGhpcyBzaG91bGQgYmUgZXZlbnR1YWxseSByZXBsYWNlZCB3aXRoIFNoYXBlc1xuZXhwb3J0IGNsYXNzIENvbGxpZGFibGUgZXh0ZW5kcyBFbnRpdHkge1xuXHRwdWJsaWMgY29sbGlkZXMoZTI6IEVudGl0eSk6IGJvb2xlYW4ge1xuXHRcdGxldCBkeCA9IHRoaXMueCAtIGUyLnhcblx0XHRsZXQgZHkgPSB0aGlzLnkgLSBlMi55XG5cdFx0cmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLnJhZGl1cyArIGUyLnJhZGl1c1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBFbGFzdGljQ29sbGlzaW9uIGV4dGVuZHMgRW50aXR5IHtcblx0cHVibGljIGNvbGxpc2lvbihlMjogRW50aXR5KTogdm9pZCB7XG5cdFx0bGV0IGR4ID0gZTIueCAtIHRoaXMueFxuXHRcdGxldCBkeSA9IGUyLnkgLSB0aGlzLnlcblx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG5cdFx0aWYgKGRpc3RhbmNlIDwgdGhpcy5yYWRpdXMgKyBlMi5yYWRpdXMpIHtcblx0XHRcdGxldCBub3JtYWx4ID0gZHggLyBkaXN0YW5jZVxuXHRcdFx0bGV0IG5vcm1hbHkgPSBkeSAvIGRpc3RhbmNlXG5cblx0XHRcdGxldCBtaWR4ID0gKHRoaXMueCArIGUyLngpIC8gMlxuXHRcdFx0bGV0IG1pZHkgPSAodGhpcy55ICsgZTIueSkgLyAyXG5cdFx0XHR0aGlzLnggPSBtaWR4IC0gbm9ybWFseCAqIHRoaXMucmFkaXVzXG5cdFx0XHR0aGlzLnkgPSBtaWR5IC0gbm9ybWFseSAqIHRoaXMucmFkaXVzXG5cdFx0XHRlMi54ID0gbWlkeCArIG5vcm1hbHggKiBlMi5yYWRpdXNcblx0XHRcdGUyLnkgPSBtaWR5ICsgbm9ybWFseSAqIGUyLnJhZGl1c1xuXG5cdFx0XHRsZXQgdmR4ID0gdGhpcy52eCAtIGUyLnZ4XG5cdFx0XHRsZXQgdmR5ID0gdGhpcy52eSAtIGUyLnZ5XG5cblx0XHRcdGxldCBkb3QgPSB2ZHggKiBub3JtYWx4ICsgdmR5ICogbm9ybWFseVxuXHRcdFx0bGV0IGR2eCA9IGRvdCAqIG5vcm1hbHhcblx0XHRcdGxldCBkdnkgPSBkb3QgKiBub3JtYWx5XG5cblx0XHRcdHRoaXMudnggLT0gZHZ4XG5cdFx0XHR0aGlzLnZ5IC09IGR2eVxuXHRcdFx0ZTIudnggKz0gZHZ4XG5cdFx0XHRlMi52eSArPSBkdnlcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5J1xuaW1wb3J0IHsgUGxheWVyLCBPdGhlclBsYXllciB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IHsgQmFsbCB9IGZyb20gJy4vYmFsbCdcbmltcG9ydCB7IElucHV0UGFja2V0IH0gZnJvbSAnLi4vbmV0d29yay91bnJlbGlhYmxlX3BhY2tldHMnXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICcuLi9uZXR3b3JrL2J1ZmZlcidcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuLi9uZXR3b3JrL25ldHdvcmsnXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblx0cHVibGljIHN0YXRpYyBGUFMgPSBNYXRoLmZsb29yKDEwMDAgLyA2MClcblx0cHVibGljIHN0YXRpYyBHQU1FX1NUQVJUX0NPVU5URE9XTiA9IDMwMDBcblx0cHVibGljIHN0YXRpYyBHQU1FX0VORF9DT1VOVERPV04gPSAxMDAwMFxuXHRwdWJsaWMgc3RhdGljIEdBTUVfRU5EX1NDT1JFX0NPVU5URE9XTiA9IDIwMDBcblxuXHQvL1RPRE86IE1ha2UgdGhpcyBub3QgYSBzdGF0aWMgdmFyaWFibGU/XG5cdHB1YmxpYyBzdGF0aWMgZ2FtZTogbnVtYmVyID0gMDtcblx0cHVibGljIHN0YXRpYyBmcmFtZTogbnVtYmVyO1xuXHRwdWJsaWMgc3RhdGljIGVudGl0eV9pZDogbnVtYmVyXG5cblx0cHJpdmF0ZSBlbnRpdGllczogRW50aXR5W11cblx0cHJvdGVjdGVkIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcblx0cHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IHRoaXMuY2FudmFzID8gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSA6IG51bGxcblxuXHRwcm90ZWN0ZWQgY3VycmVudF9pbnB1dDogSW5wdXRQYWNrZXRcblx0cHJvdGVjdGVkIGlucHV0X2J1ZmZlcjogQnVmZmVyXG5cdHB1YmxpYyBvbGRfaW5wdXRfYnVmZmVyOiBCdWZmZXJcblxuXHRwcml2YXRlIGxvY2FsX3BsYXllcjogUGxheWVyXG5cdHByaXZhdGUgb3RoZXJfcGxheWVyczogT3RoZXJQbGF5ZXJbXVxuXHRwcml2YXRlIGJhbGxzOiBCYWxsW11cblxuXHRwcml2YXRlIHNjb3JlX3RhbGxpZWQ6IGJvb2xlYW47XG5cdHByaXZhdGUgc2NvcmVzOiBNYXA8bnVtYmVyLCBudW1iZXI+XG5cdHByaXZhdGUgbWF4X3Njb3JlczogbnVtYmVyW11cblxuXHRwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG5cdFx0R2FtZS5nYW1lICs9IDE7XG5cdFx0R2FtZS5mcmFtZSA9IDBcblx0XHRHYW1lLmVudGl0eV9pZCA9IDBcblxuXHRcdHRoaXMuY3VycmVudF9pbnB1dCA9IG5ldyBJbnB1dFBhY2tldCgwLCBHYW1lLmdhbWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKVxuXHRcdHRoaXMuaW5wdXRfYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG5cdFx0dGhpcy5vbGRfaW5wdXRfYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG5cblx0XHR0aGlzLm90aGVyX3BsYXllcnMgPSBbXVxuXHRcdGxldCBzb3J0ZWRfbWFwcGluZyA9IEFycmF5LmZyb20oTmV0d29yay5tYXBwaW5nLmtleXMoKSlcblx0XHRcdC5jb25jYXQoTmV0d29yay5sb2NhbF9pZClcblx0XHRcdC5zb3J0KClcblxuXHRcdGxldCByYW5kb21fcmFuZ2UgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKFJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pXG5cdFx0fVxuXHRcdGZvciAobGV0IGNsaWVudCBvZiBzb3J0ZWRfbWFwcGluZykge1xuXHRcdFx0Y29uc29sZS5sb2coJ01ha2luZyBwbGF5ZXIgZm9yJywgY2xpZW50KVxuXHRcdFx0bGV0IHggPSByYW5kb21fcmFuZ2UoUGxheWVyLlJBRElVUywgdGhpcy5jYW52YXMud2lkdGggLSBQbGF5ZXIuUkFESVVTKVxuXHRcdFx0bGV0IHkgPSByYW5kb21fcmFuZ2UodGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gUGxheWVyLlJBRElVUylcblxuXHRcdFx0aWYgKGNsaWVudCA9PT0gTmV0d29yay5sb2NhbF9pZCkgdGhpcy5sb2NhbF9wbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHkpXG5cdFx0XHRlbHNlIHRoaXMub3RoZXJfcGxheWVyc1tOZXR3b3JrLm1hcHBpbmcuZ2V0KGNsaWVudCldID0gbmV3IE90aGVyUGxheWVyKHgsIHkpXG5cdFx0fVxuXG5cdFx0dGhpcy5lbnRpdGllcyA9IFtdXG5cdFx0dGhpcy5lbnRpdGllcy5wdXNoKHRoaXMubG9jYWxfcGxheWVyKVxuXHRcdHRoaXMuZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzLmNvbmNhdCh0aGlzLm90aGVyX3BsYXllcnMpXG5cblx0XHR0aGlzLnNjb3JlX3RhbGxpZWQgPSBmYWxzZTtcblx0XHR0aGlzLnNjb3JlcyA9IG5ldyBNYXAoKVxuXHRcdGZvciAobGV0IGVudGl0eSBvZiB0aGlzLmVudGl0aWVzKSB0aGlzLnNjb3Jlcy5zZXQoZW50aXR5LmlkLCAwKVxuXHRcdHRoaXMubWF4X3Njb3JlcyA9IFstMV1cblxuXHRcdGxldCBzcCA9IDJcblx0XHRsZXQgYnIgPSAyMFxuXHRcdGxldCBiYWxscyA9IFtuZXcgQmFsbCg0MDAsIDI1MCldXG5cblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLnggLSBiciAtIHNwLCBiYWxsc1swXS55IC0gYnIgKiAyKSlcblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLnggKyBiciArIHNwLCBiYWxsc1swXS55IC0gYnIgKiAyKSlcblxuXHRcdGJhbGxzLnB1c2gobmV3IEJhbGwoYmFsbHNbMF0ueCAtIGJyICogMiAtIHNwLCBiYWxsc1swXS55IC0gYnIgKiA0KSlcblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLngsIGJhbGxzWzBdLnkgLSBiciAqIDQpKVxuXHRcdGJhbGxzLnB1c2gobmV3IEJhbGwoYmFsbHNbMF0ueCArIGJyICogMiArIHNwLCBiYWxsc1swXS55IC0gYnIgKiA0KSlcblxuXHRcdGJhbGxzLnB1c2gobmV3IEJhbGwoYmFsbHNbMF0ueCAtIGJyIC0gc3AsIGJhbGxzWzBdLnkgLSBiciAqIDYpKVxuXHRcdGJhbGxzLnB1c2gobmV3IEJhbGwoYmFsbHNbMF0ueCAtIGJyICogMyAtIHNwICogMiwgYmFsbHNbMF0ueSAtIGJyICogNikpXG5cdFx0YmFsbHMucHVzaChuZXcgQmFsbChiYWxsc1swXS54ICsgYnIgKyBzcCwgYmFsbHNbMF0ueSAtIGJyICogNikpXG5cdFx0YmFsbHMucHVzaChuZXcgQmFsbChiYWxsc1swXS54ICsgYnIgKiAzICsgc3AgKiAyLCBiYWxsc1swXS55IC0gYnIgKiA2KSlcblxuXHRcdHRoaXMuYmFsbHMgPSBiYWxsc1xuXHRcdHRoaXMuZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzLmNvbmNhdChiYWxscylcblxuXHRcdHdpbmRvdy5vbmtleWRvd24gPSBlID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB0aGlzLmN1cnJlbnRfaW5wdXQudXAgPSB0cnVlXG5cdFx0XHRpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB0aGlzLmN1cnJlbnRfaW5wdXQuZG93biA9IHRydWVcblx0XHRcdGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHRoaXMuY3VycmVudF9pbnB1dC5sZWZ0ID0gdHJ1ZVxuXHRcdFx0aWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHRoaXMuY3VycmVudF9pbnB1dC5yaWdodCA9IHRydWVcblx0XHR9XG5cblx0XHR3aW5kb3cub25rZXl1cCA9IGUgPT4ge1xuXHRcdFx0aWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHRoaXMuY3VycmVudF9pbnB1dC51cCA9IGZhbHNlXG5cdFx0XHRpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB0aGlzLmN1cnJlbnRfaW5wdXQuZG93biA9IGZhbHNlXG5cdFx0XHRpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB0aGlzLmN1cnJlbnRfaW5wdXQubGVmdCA9IGZhbHNlXG5cdFx0XHRpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0JykgdGhpcy5jdXJyZW50X2lucHV0LnJpZ2h0ID0gZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2ltdWxhdGUob3RoZXJfaW5wdXRzOiBJbnB1dFBhY2tldFtdKTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJTaW11bGF0aW5nIGZyYW1lOiBcIiwgR2FtZS5mcmFtZSlcblxuXHRcdGxldCB2ID0gdGhpcy5pbnB1dF9idWZmZXIucG9wbGVmdCgpXG5cblx0XHRsZXQgZnJhbWUgPSBHYW1lLmZyYW1lICogR2FtZS5GUFNcblx0XHRsZXQgc3RhcnQgPSBHYW1lLkdBTUVfU1RBUlRfQ09VTlRET1dOXG5cdFx0bGV0IGVuZCA9IHN0YXJ0ICsgR2FtZS5HQU1FX0VORF9DT1VOVERPV05cblx0XHRsZXQgcmVzdGFydCA9IGVuZCArIEdhbWUuR0FNRV9FTkRfU0NPUkVfQ09VTlRET1dOXG5cblx0XHRpZiAoZnJhbWUgPD0gc3RhcnQpIHtcblx0XHRcdC8vTm90aGluZyBpbnRlcmVzdGluZ1xuXHRcdH0gZWxzZSBpZiAoZnJhbWUgPCBlbmQpIHtcblx0XHRcdC8vUnVuIHRoZSBnYW1lXG5cdFx0XHR0aGlzLmxvY2FsX3BsYXllci5pbnB1dCh2KVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlcl9pbnB1dHMubGVuZ3RoOyBpKyspIHRoaXMub3RoZXJfcGxheWVyc1tpXS5pbnB1dChvdGhlcl9pbnB1dHNbaV0pXG5cdFx0XHR0aGlzLnVwZGF0ZSgpXG5cdFx0fSBlbHNlIGlmIChmcmFtZSA8PSByZXN0YXJ0KSB7XG5cdFx0XHQvL1RhbGx5IHRoZSBzY29yZVxuXHRcdFx0aWYgKCF0aGlzLnNjb3JlX3RhbGxpZWQpIHtcblx0XHRcdFx0dGhpcy5zY29yZV90YWxsaWVkID0gdHJ1ZTtcblx0XHRcdFx0Zm9yIChsZXQgYmFsbCBvZiB0aGlzLmJhbGxzKSB7XG5cdFx0XHRcdFx0aWYgKCFiYWxsLmNvbGxpZGVkV2l0aCkgY29udGludWVcblxuXHRcdFx0XHRcdGxldCBzY29yZSA9IHRoaXMuc2NvcmVzLmdldChiYWxsLmNvbGxpZGVkV2l0aC5pZCkgKyAxXG5cdFx0XHRcdFx0dGhpcy5zY29yZXMuc2V0KGJhbGwuY29sbGlkZWRXaXRoLmlkLCBzY29yZSlcblx0XHRcdFx0XHRpZiAoc2NvcmUgPT09IHRoaXMubWF4X3Njb3Jlc1swXSkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXhfc2NvcmVzLnB1c2goKVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2NvcmUgPiB0aGlzLm1heF9zY29yZXNbMF0pIHtcblx0XHRcdFx0XHRcdHRoaXMubWF4X3Njb3JlcyA9IFtzY29yZV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9SZXN0YXJ0IHRoZSBnYW1lXG5cdFx0XHROZXR3b3JrLnJlc2V0KClcblx0XHRcdHRoaXMuc2V0dXAoKVxuXHRcdH1cblxuXHRcdEdhbWUuZnJhbWUrK1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcblx0XHRmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcykgZW50aXR5LnVwZGF0ZSh0aGlzLmNhbnZhcylcblxuXHRcdGZvciAobGV0IGVudGl0eSBvZiB0aGlzLmVudGl0aWVzKSB7XG5cdFx0XHQvLyBJZ25vcmUgcGxheWVycyBmb3IgdGhlIG1vbWVudFxuXHRcdFx0aWYgKGVudGl0eSBpbnN0YW5jZW9mIFBsYXllcikgY29udGludWVcblxuXHRcdFx0Zm9yIChsZXQgb3RoZXJfZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIHtcblx0XHRcdFx0aWYgKGVudGl0eSA9PT0gb3RoZXJfZW50aXR5KSBjb250aW51ZVxuXHRcdFx0XHRpZiAoZW50aXR5LmNvbGxpZGVzKG90aGVyX2VudGl0eSkpIHtcblx0XHRcdFx0XHRlbnRpdHkuY29sbGlzaW9uKG90aGVyX2VudGl0eSlcblx0XHRcdFx0XHRlbnRpdHkuY29sbGlzaW9uX2ludGVyYWN0aW9uKG90aGVyX2VudGl0eSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBkcmF3KCk6IHZvaWQge1xuXHRcdHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG5cdFx0Zm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIGVudGl0eS5kcmF3KHRoaXMuY3R4KVxuXG5cdFx0bGV0IGh3ID0gdGhpcy5jYW52YXMud2lkdGggLyAyXG5cdFx0bGV0IGhoID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMlxuXG5cdFx0bGV0IGZyYW1lID0gR2FtZS5mcmFtZSAqIEdhbWUuRlBTXG5cdFx0bGV0IHN0YXJ0ID0gR2FtZS5HQU1FX1NUQVJUX0NPVU5URE9XTlxuXHRcdGxldCBlbmQgPSBzdGFydCArIEdhbWUuR0FNRV9FTkRfQ09VTlRET1dOXG5cdFx0bGV0IHJlc3RhcnQgPSBlbmQgKyBHYW1lLkdBTUVfRU5EX1NDT1JFX0NPVU5URE9XTlxuXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJ1xuXHRcdGlmIChmcmFtZSA8PSBzdGFydCkge1xuXHRcdFx0bGV0IHNlY29uZHMgPSAoc3RhcnQgLSBmcmFtZSkgLyAxMDAwLjBcblx0XHRcdHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXG5cdFx0XHR0aGlzLmN0eC5mb250ID0gJzMycHggVWJ1bnR1J1xuXHRcdFx0dGhpcy5jdHguZmlsbFRleHQoYEdhbWUgd2lsbCBzdGFydCBpbiAke3NlY29uZHMudG9GaXhlZCgyKX0gc2Vjb25kc2AsIGh3LCBoaClcblx0XHR9IGVsc2UgaWYgKGZyYW1lIDw9IGVuZCkge1xuXHRcdFx0bGV0IHNlY29uZHMgPSAoZW5kIC0gZnJhbWUpIC8gMTAwMC4wXG5cdFx0XHR0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCdcblx0XHRcdHRoaXMuY3R4LmZvbnQgPSAnMTZweCBVYnVudHUnXG5cdFx0XHR0aGlzLmN0eC5maWxsVGV4dChgR2FtZSB3aWxsIGVuZCBpbiAke3NlY29uZHMudG9GaXhlZCgyKX0gc2Vjb25kc2AsIDIwLCAzMClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcidcblx0XHRcdHRoaXMuY3R4LmZvbnQgPSAnMzJweCBVYnVudHUnXG5cdFx0XHRpZiAodGhpcy5tYXhfc2NvcmVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dGhpcy5jdHguZmlsbFRleHQoJ1lvdSBUaWVkIScsIGh3LCBoaClcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zY29yZXMuZ2V0KHRoaXMubG9jYWxfcGxheWVyLmlkKSA9PSB0aGlzLm1heF9zY29yZXNbMF0pIHtcblx0XHRcdFx0dGhpcy5jdHguZmlsbFRleHQoJ1lvdSBXT04hJywgaHcsIGhoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdHguZmlsbFRleHQoXCJZb3UgTG9zdCA6JyhcIiwgaHcsIGhoKVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgc2Vjb25kcyA9IChyZXN0YXJ0IC0gZnJhbWUpIC8gMTAwMC4wXG5cdFx0XHR0aGlzLmN0eC5maWxsVGV4dChgR2FtZSB3aWxsIHJlc3RhcnQgaW4gJHtzZWNvbmRzLnRvRml4ZWQoMil9IHNlY29uZHNgLCBodywgaGggKyA0MClcblxuXHRcdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnXG5cdFx0XHR0aGlzLmN0eC5mb250ID0gJzE2cHggVWJ1bnR1J1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjb3Jlcy5zaXplOyBpKyspIHtcblx0XHRcdFx0bGV0IHkgPSBoaCArIDcwICsgMzAgKiBpXG5cdFx0XHRcdGxldCBrZXkgPSBBcnJheS5mcm9tKHRoaXMuc2NvcmVzLmtleXMoKSlbaV1cblx0XHRcdFx0bGV0IHNjb3JlID0gdGhpcy5zY29yZXMuZ2V0KGtleSlcblx0XHRcdFx0bGV0IGVudGl0eSA9IHRoaXMuZW50aXRpZXMuZmluZChlID0+IGUuaWQgPT09IGtleSkgYXMgUGxheWVyXG5cblx0XHRcdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gZW50aXR5LmNvbG91clxuXHRcdFx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKVxuXHRcdFx0XHR0aGlzLmN0eC5hcmMoaHcgLSA3MCwgeSwgMTAsIDAsIDIgKiBNYXRoLlBJKVxuXHRcdFx0XHR0aGlzLmN0eC5zdHJva2UoKVxuXHRcdFx0XHR0aGlzLmN0eC5maWxsKClcblxuXHRcdFx0XHR0aGlzLmN0eC5maWxsVGV4dChgLSBoYWQgYSBzY29yZSBvZiAke3Njb3JlfWAsIGh3IC0gNTAsIHkgKyA1KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhZGRfaW5wdXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaW5wdXRfYnVmZmVyLmxlbmd0aCgpIDwgTmV0d29yay5CVUZGRVJfU0laRSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0FkZGluZyBmcmFtZTonLCB0aGlzLmN1cnJlbnRfaW5wdXQucmF3KCkpXG5cdFx0XHRsZXQgaW5wdXRfY29weSA9IE9iamVjdC5jcmVhdGUodGhpcy5jdXJyZW50X2lucHV0KVxuXHRcdFx0aW5wdXRfY29weSA9IE9iamVjdC5hc3NpZ24oaW5wdXRfY29weSwgdGhpcy5jdXJyZW50X2lucHV0KVxuXHRcdFx0dGhpcy5pbnB1dF9idWZmZXIuYWRkKGlucHV0X2NvcHkpXG5cblx0XHRcdGxldCBpbnB1dF9jb3B5MiA9IE9iamVjdC5jcmVhdGUodGhpcy5jdXJyZW50X2lucHV0KVxuXHRcdFx0aW5wdXRfY29weTIgPSBPYmplY3QuYXNzaWduKGlucHV0X2NvcHkyLCB0aGlzLmN1cnJlbnRfaW5wdXQpXG5cdFx0XHR0aGlzLm9sZF9pbnB1dF9idWZmZXIuYWRkKGlucHV0X2NvcHkyKVxuXG5cdFx0XHR0aGlzLmN1cnJlbnRfaW5wdXQuZnJhbWUrK1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tIFwiLi4vbmV0d29yay9uZXR3b3JrXCI7XG5pbXBvcnQgeyBJbnB1dFBhY2tldCB9IGZyb20gXCIuLi9uZXR3b3JrL3VucmVsaWFibGVfcGFja2V0c1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVRlc3RpbmcgZXh0ZW5kcyBHYW1lIHtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNhbnZhcyA9IE9iamVjdC5jcmVhdGUoSFRNTENhbnZhc0VsZW1lbnQpO1xuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gODAwO1xuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IDcwMDtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0cHVibGljIHNpbXVsYXRlKF86IElucHV0UGFja2V0W10pOiB2b2lkIHtcblx0XHR0aGlzLmlucHV0X2J1ZmZlci5wb3BsZWZ0KClcblxuXHRcdGxldCBmcmFtZSA9IEdhbWUuZnJhbWUgKiBHYW1lLkZQU1xuXHRcdGxldCBzdGFydCA9IEdhbWUuR0FNRV9TVEFSVF9DT1VOVERPV05cblx0XHRsZXQgZW5kID0gc3RhcnQgKyBHYW1lLkdBTUVfRU5EX0NPVU5URE9XTlxuXHRcdGxldCByZXN0YXJ0ID0gZW5kICsgR2FtZS5HQU1FX0VORF9TQ09SRV9DT1VOVERPV05cblxuXHRcdGlmIChmcmFtZSA+IHJlc3RhcnQpIHtcblx0XHRcdC8vUmVzdGFydCB0aGUgZ2FtZVxuXHRcdFx0TmV0d29yay5yZXNldCgpXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRHYW1lLmZyYW1lKytcblx0fVxuXG5cdHB1YmxpYyBkcmF3KCk6IHZvaWQge31cbn0iLCJpbXBvcnQgeyBFbnRpdHksIE1vdmFibGUsIEVsYXN0aWNDb2xsaXNpb24sIENvbGxpZGFibGUgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IElucHV0UGFja2V0IH0gZnJvbSAnLi4vbmV0d29yay91bnJlbGlhYmxlX3BhY2tldHMnXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tICcuLi91dGlscydcbmltcG9ydCByYW5kb21Db2xvciBmcm9tICdyYW5kb21jb2xvcidcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEVudGl0eSBpbXBsZW1lbnRzIE1vdmFibGUsIEVsYXN0aWNDb2xsaXNpb24sIENvbGxpZGFibGUge1xuXHRwdWJsaWMgc3RhdGljIFJBRElVUyA9IDIwXG5cblx0cHVibGljIHJhZGl1cyA9IFBsYXllci5SQURJVVNcblx0cHVibGljIHNwZWVkID0gMC41XG5cdHB1YmxpYyBjb2xvdXI6IHN0cmluZ1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnggPSB4XG5cdFx0dGhpcy55ID0geVxuXHRcdHRoaXMuY29sb3VyID0gcmFuZG9tQ29sb3IoeyBsdW1pbm9zaXR5OiAnZGFyaycsIHNlZWQ6IFJhbmRvbS5pbnQzMigpIH0pXG5cdH1cblxuXHRwdWJsaWMgaW5wdXQoaTogSW5wdXRQYWNrZXQpOiB2b2lkIHtcblx0XHRpZiAoaS51cCkgdGhpcy52eSAtPSB0aGlzLnNwZWVkXG5cdFx0aWYgKGkuZG93bikgdGhpcy52eSArPSB0aGlzLnNwZWVkXG5cdFx0aWYgKGkubGVmdCkgdGhpcy52eCAtPSB0aGlzLnNwZWVkXG5cdFx0aWYgKGkucmlnaHQpIHRoaXMudnggKz0gdGhpcy5zcGVlZFxuXHR9XG5cblx0cHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcblx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvdXJcblx0XHRjdHguYmVnaW5QYXRoKClcblx0XHRjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG5cdFx0Y3R4LmZpbGwoKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPdGhlclBsYXllciBleHRlbmRzIFBsYXllciB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuXHRcdHN1cGVyKHgsIHkpXG5cdH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5mdW5jdGlvbiBhcHBseU1peGlucyhkZXJpdmVkQ3RvcjogYW55LCBiYXNlQ3RvcnM6IGFueVtdKTogdm9pZCB7XG5cdGJhc2VDdG9ycy5mb3JFYWNoKGJhc2VDdG9yID0+IHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdGRlcml2ZWRDdG9yLnByb3RvdHlwZSxcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlQ3Rvci5wcm90b3R5cGUsIG5hbWUpXG5cdFx0XHQpXG5cdFx0fSlcblx0fSlcbn1cbmFwcGx5TWl4aW5zKFBsYXllciwgW01vdmFibGUsIEVsYXN0aWNDb2xsaXNpb24sIENvbGxpZGFibGVdKVxuYXBwbHlNaXhpbnMoT3RoZXJQbGF5ZXIsIFtNb3ZhYmxlLCBFbGFzdGljQ29sbGlzaW9uLCBDb2xsaWRhYmxlXSlcbiIsImltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICcuL25ldHdvcmsnXG5pbXBvcnQgeyBJbnB1dFBhY2tldCB9IGZyb20gJy4vdW5yZWxpYWJsZV9wYWNrZXRzJ1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyIHtcblx0cHJpdmF0ZSBidWZmZXI6IElucHV0UGFja2V0W10gPSBbXVxuXHRwdWJsaWMgZmlsbGVkID0gZmFsc2VcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxuXG5cdHB1YmxpYyBpdGVtcygpOiBJbnB1dFBhY2tldFtdIHtcblx0XHRyZXR1cm4gdGhpcy5idWZmZXJcblx0fVxuXG5cdHB1YmxpYyBsZW5ndGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIubGVuZ3RoXG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXVxuXHRcdHRoaXMuZmlsbGVkID0gZmFsc2Vcblx0fVxuXG5cdHB1YmxpYyBhZGQoZGF0YTogSW5wdXRQYWNrZXQpOiB2b2lkIHtcblx0XHQvL1RPRE86IFJlcGxhY2UgdGhpcyB3aXRoIGEgbW9yZSBlZmZpY2llbnQgU29ydGVkU2V0XG5cdFx0aWYgKCF0aGlzLmJ1ZmZlci5tYXAodiA9PiB2LmZyYW1lKS5pbmNsdWRlcyhkYXRhLmZyYW1lKSkgdGhpcy5idWZmZXIucHVzaChkYXRhKVxuXHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuc29ydCgoYSwgYikgPT4gYS5mcmFtZSAtIGIuZnJhbWUpXG5cblx0XHRpZiAodGhpcy5idWZmZXIubGVuZ3RoID4gTmV0d29yay5CVUZGRVJfU0laRSkgdGhpcy5maWxsZWQgPSB0cnVlXG5cdH1cblxuXHQvL1RPRE86IFJlcGxhY2UgdGhpcyB3aXRoIGEgbW9yZSBlZmZpY2llbnQgbWV0aG9kXG5cdHB1YmxpYyBmaW5kX2xvd2VzdChnYW1lX2ZyYW1lOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPD0gMCkgdGhyb3cgJ0J1ZmZlciBpcyBlbXB0eSwgd2hlbiB0cnlpbmcgdG8gZmluZCBsb3dlc3QnXG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5idWZmZXJbaV0uZnJhbWUgIT0gZ2FtZV9mcmFtZSArIGkpIHtcblx0XHRcdFx0cmV0dXJuIGdhbWVfZnJhbWUgKyBpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmJ1ZmZlclt0aGlzLmJ1ZmZlci5sZW5ndGggLSAxXS5mcmFtZSsxXG5cdH1cblxuXHRwdWJsaWMgcmVtb3ZlX29sZChmcmFtZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0bGV0IGluZGV4ID0gdGhpcy5idWZmZXIuZmluZEluZGV4KHYgPT4gdi5mcmFtZSA9PT0gZnJhbWUpXG5cdFx0aWYgKGluZGV4ID09PSAtMSkgcmV0dXJuOyAvLyBXZSBoYXZlbid0IGdlbmVyYXRlZCB0aGlzIGZyYW1lIHlldFxuXG5cdFx0Ly8gY29uc29sZS5sb2coYEZvdW5kIGZyYW1lOmAsIGZyYW1lKVxuXHRcdC8vIGNvbnNvbGUubG9nKGBSZW1vdmluZyAke2luZGV4fSBwYWNrZXRzYClcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmJ1ZmZlci5tYXAodiA9PiB2LmZyYW1lKS5qb2luKCkpXG5cdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIGluZGV4KVxuXHR9XG5cblx0cHVibGljIHBvcGxlZnQoKTogSW5wdXRQYWNrZXQge1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5zaGlmdCgpXG5cdH1cblxuXHRwdWJsaWMgcG9wcmlnaHQoKTogSW5wdXRQYWNrZXQge1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5wb3AoKVxuXHR9XG5cblx0cHVibGljIHBlZWsoKTogSW5wdXRQYWNrZXQge1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlclswXVxuXHR9XG59XG4iLCJpbXBvcnQgeyBEYXRhQ29ubmVjdGlvbiB9IGZyb20gJ3BlZXJqcydcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJy4vYnVmZmVyJ1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uL2dhbWUvZ2FtZSdcbmltcG9ydCB7IE90aGVyQ2xpZW50c1BhY2tldCwgUmVsaWFibGVQYWNrZXQgfSBmcm9tICcuL3JlbGlhYmxlX3BhY2tldHMnXG5pbXBvcnQgeyBVbnJlbGlhYmxlUGFja2V0LCBBY2tQYWNrZXQsIElucHV0UGFja2V0IH0gZnJvbSAnLi91bnJlbGlhYmxlX3BhY2tldHMnXG5cbmltcG9ydCBQZWVySnMgZnJvbSAncGVlcmpzJ1xubGV0IHBlZXIgPSBuZXcgUGVlckpzKG51bGwpXG5leHBvcnQgY2xhc3MgTmV0d29yayB7XG5cdHB1YmxpYyBzdGF0aWMgQlVGRkVSX1NJWkUgPSA4XG5cdHB1YmxpYyBzdGF0aWMgUkVUUllfQU1PVU5UID0gNVxuXG5cdHB1YmxpYyBzdGF0aWMgcmVsaWFibGVfY2FsbGJhY2tzOiBGdW5jdGlvbltdID0gW11cblx0cHVibGljIHN0YXRpYyB1bnJlbGlhYmxlX2NhbGxiYWNrczogRnVuY3Rpb25bXSA9IFtdXG5cdHB1YmxpYyBzdGF0aWMgbWFwcGluZzogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKVxuXG5cdHByaXZhdGUgc3RhdGljIGluZGV4ID0gMFxuXHRwdWJsaWMgc3RhdGljIGxvY2FsX2lkOiBzdHJpbmdcblx0cHVibGljIHN0YXRpYyBidWZmZXJzOiBCdWZmZXJbXSA9IFtdXG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVsaWFibGVfY29ubmVjdGlvbnM6IERhdGFDb25uZWN0aW9uW10gPSBbXVxuXHRwcml2YXRlIHN0YXRpYyB1bnJlbGlhYmxlX2Nvbm5lY3Rpb25zOiBEYXRhQ29ubmVjdGlvbltdID0gW11cblxuXHRwcml2YXRlIHN0YXRpYyBmcmFtZV93ZV9hcmVfbWlzc2luZzogbnVtYmVyW10gPSBbXVxuXHRwcml2YXRlIHN0YXRpYyBmcmFtZV90aGV5X2FyZV9taXNzaW5nOiBudW1iZXJbXSA9IFtdXG5cblx0cHVibGljIHN0YXRpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmZyYW1lX3dlX2FyZV9taXNzaW5nID0gW11cblx0XHR0aGlzLmZyYW1lX3RoZXlfYXJlX21pc3NpbmcgPSBbXVxuXHRcdGZvciAobGV0IGJ1ZmZlciBvZiB0aGlzLmJ1ZmZlcnMpIHtcblx0XHRcdGJ1ZmZlci5jbGVhcigpXG5cdFx0XHR0aGlzLmZyYW1lX3dlX2FyZV9taXNzaW5nLnB1c2goMCk7XG5cdFx0XHR0aGlzLmZyYW1lX3RoZXlfYXJlX21pc3NpbmcucHVzaCgwKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG9wZW5fc29ja2V0KCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0cGVlci5vbignb3BlbicsIChpZDogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdNeSBwZWVyIGlkIGlzOiAnICsgaWQpXG5cdFx0XHRcdE5ldHdvcmsubG9jYWxfaWQgPSBpZFxuXHRcdFx0XHRyZXNvbHZlKGlkKVxuXHRcdFx0fSlcblx0XHRcdHBlZXIub24oJ2Nvbm5lY3Rpb24nLCBOZXR3b3JrLmNvbm5lY3Rpb25fb3BlbmVkKVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBjb25uZWN0aW9uX3NldHVwKHBlZXJfaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdE5ldHdvcmsubWFwcGluZy5zZXQocGVlcl9pZCwgTmV0d29yay5pbmRleCsrKVxuXHRcdFx0TmV0d29yay5idWZmZXJzLnB1c2gobmV3IEJ1ZmZlcigpKVxuXHRcdFx0TmV0d29yay5mcmFtZV93ZV9hcmVfbWlzc2luZy5wdXNoKDApXG5cdFx0XHROZXR3b3JrLmZyYW1lX3RoZXlfYXJlX21pc3NpbmcucHVzaCgwKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbl9vcGVuZWQoY29ubjogRGF0YUNvbm5lY3Rpb24pOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhgJHtjb25uLnJlbGlhYmxlID8gJ1JlbGlhYmxlJyA6ICdVbnJlbGlhYmxlJ30gQ29ubmVjdGlvbiBvcGVuZWQgd2l0aCAke2Nvbm4ucGVlcn1gKVxuXHRcdGxldCBpbmRleCA9IE5ldHdvcmsubWFwcGluZy5nZXQoY29ubi5wZWVyKVxuXHRcdGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpbmRleCA9IE5ldHdvcmsuaW5kZXhcblx0XHRcdE5ldHdvcmsuY29ubmVjdGlvbl9zZXR1cChjb25uLnBlZXIpXG5cblx0XHRcdC8vIEphdmFzY3JpcHQgaXMgd2VpcmQgKGxldCBhID0gW107IGFbMl0gPSA0OyBhID09IFtlbXB0eSxlbXB0eSw0XSlcblx0XHRcdC8vIE5ldHdvcmsucmVsaWFibGVfY29ubmVjdGlvbnMucHVzaChudWxsKVxuXHRcdFx0Ly8gTmV0d29yay51bnJlbGlhYmxlX2Nvbm5lY3Rpb25zLnB1c2gobnVsbClcblx0XHR9XG5cblx0XHRpZiAoY29ubi5yZWxpYWJsZSkge1xuXHRcdFx0Ly8gTmV0d29yay5yZWxpYWJsZV9jb25uZWN0aW9uc1tpbmRleF0gPSBjb25uXG5cdFx0XHROZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zLnB1c2goY29ubik7IC8vW2luZGV4XSA9IGNvbm5cblx0XHRcdGNvbm4ub24oJ29wZW4nLCAoKSA9PiB7XG5cdFx0XHRcdGNvbm4ub24oJ2RhdGEnLCAoZGF0YTogUmVsaWFibGVQYWNrZXQpID0+IHtcblx0XHRcdFx0XHROZXR3b3JrLnJlY2VpdmVfcmVsaWFibGUoY29ubi5wZWVyLCBkYXRhKVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIFRlbGwgdGhlIG90aGVyIGNsaWVudCBhYm91dCBhbGwgdGhlIG90aGVycyBjbGllbnRzIHdlIGFyZSBjb25uZWN0ZWQgdG9cblx0XHRcdFx0aWYgKE5ldHdvcmsucmVsaWFibGVfY29ubmVjdGlvbnMubGVuZ3RoIC0gMSA+IDApIHtcblx0XHRcdFx0XHRsZXQgcGFja2V0ID0gbmV3IE90aGVyQ2xpZW50c1BhY2tldChOZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zLnNsaWNlKDAsIC0xKS5tYXAoZSA9PiBlLnBlZXIpKVxuXHRcdFx0XHRcdGNvbm4uc2VuZChwYWNrZXQucmF3KCkpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdE5ldHdvcmsudW5yZWxpYWJsZV9jb25uZWN0aW9ucy5wdXNoKGNvbm4pXG5cdFx0XHRjb25uLm9uKCdvcGVuJywgKCkgPT4ge1xuXHRcdFx0XHRjb25uLm9uKCdkYXRhJywgKGRhdGE6IFVucmVsaWFibGVQYWNrZXQpID0+IHtcblx0XHRcdFx0XHROZXR3b3JrLnJlY2VpdmVfdW5yZWxpYWJsZShjb25uLnBlZXIsIGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZnVsbF9jb25uZWN0KHBlZXJfaWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGBNYWtpbmcgYSBjb25uZWN0aW9uIHdpdGggJHtwZWVyX2lkfWApXG5cdFx0aWYgKE5ldHdvcmsubG9jYWxfaWQgPT09IHBlZXJfaWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdUcnlpbmcgdG8gbWFrZSBhIGNvbm5lY3Rpb24gd2l0aCBvdXJzZWxmJylcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChOZXR3b3JrLm1hcHBpbmcuaGFzKHBlZXJfaWQpKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgTmV0d29yayBjb25uZWN0aW9uIHdpdGggJHtwZWVyX2lkfSBhbHJlYWR5IG9wZW5lZGApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHROZXR3b3JrLmNvbm5lY3Rpb25fc2V0dXAocGVlcl9pZClcblx0XHRcdC50aGVuKCgpID0+IE5ldHdvcmsub3Blbl9yZWxpYWJsZShwZWVyX2lkKSlcblx0XHRcdC50aGVuKCgpID0+IE5ldHdvcmsub3Blbl91bnJlbGlhYmxlKHBlZXJfaWQpKVxuXHRcdFx0LnRoZW4oKCkgPT4gY29uc29sZS5sb2coYENvbm5lY3Rpb24gbWFkZSB3aXRoICR7cGVlcl9pZH1gKSlcblx0XHRcdC5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBVbmFibGUgdG8gbWFrZSBjb25uZWN0aW9uIG1hZGUgd2l0aCAke3BlZXJfaWR9YClcblx0XHRcdFx0TmV0d29yay5tYXBwaW5nLmRlbGV0ZShwZWVyX2lkKVxuXHRcdFx0XHROZXR3b3JrLmluZGV4LS07XG5cdFx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgb3Blbl9yZWxpYWJsZShwZWVyX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG5cdFx0XHRsZXQgY29ubiA9IHBlZXIuY29ubmVjdChwZWVyX2lkLCB7IHJlbGlhYmxlOiB0cnVlIH0pXG5cdFx0XHRjb25uLm9uKCdvcGVuJywgKCkgPT4ge1xuXHRcdFx0XHROZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zLnB1c2goY29ubilcblx0XHRcdFx0Y29ubi5vbignZGF0YScsIChkYXRhOiBSZWxpYWJsZVBhY2tldCkgPT4ge1xuXHRcdFx0XHRcdE5ldHdvcmsucmVjZWl2ZV9yZWxpYWJsZShjb25uLnBlZXIsIGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSlcblx0XHRcdGNvbm4ub24oJ2Vycm9yJywgKGVycm9yOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbWFrZSByZWxpYWJsZSBjb25uZWN0aW9uOiAke2Vycm9yfWApXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBvcGVuX3VucmVsaWFibGUocGVlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xuXHRcdFx0bGV0IGNvbm4gPSBwZWVyLmNvbm5lY3QocGVlcl9pZClcblx0XHRcdGNvbm4ub24oJ29wZW4nLCAoKSA9PiB7XG5cdFx0XHRcdE5ldHdvcmsudW5yZWxpYWJsZV9jb25uZWN0aW9ucy5wdXNoKGNvbm4pXG5cdFx0XHRcdGNvbm4ub24oJ2RhdGEnLCAoZGF0YTogVW5yZWxpYWJsZVBhY2tldCkgPT4ge1xuXHRcdFx0XHRcdE5ldHdvcmsucmVjZWl2ZV91bnJlbGlhYmxlKGNvbm4ucGVlciwgZGF0YSlcblx0XHRcdFx0fSlcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KVxuXHRcdFx0Y29ubi5vbignZXJyb3InLCAoZXJyb3I6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBtYWtlIHVucmVsaWFibGUgY29ubmVjdGlvbjogJHtlcnJvcn1gKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZV9yZWxpYWJsZShwZWVyX2lkOiBzdHJpbmcsIGRhdGE6IFJlbGlhYmxlUGFja2V0KTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIHJlbGlhYmxlOiAnLCBkYXRhKVxuXHRcdGRhdGEgPSBSZWxpYWJsZVBhY2tldC5jb252ZXJ0KGRhdGEpXG5cblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE90aGVyQ2xpZW50c1BhY2tldCkge1xuXHRcdFx0Zm9yIChsZXQgcGVlcl9pZCBvZiBkYXRhLm90aGVycykgTmV0d29yay5mdWxsX2Nvbm5lY3QocGVlcl9pZClcblx0XHR9XG5cdFx0Zm9yIChsZXQgY2FsbGJhY2sgb2YgTmV0d29yay5yZWxpYWJsZV9jYWxsYmFja3MpIGNhbGxiYWNrKHBlZXJfaWQsIGRhdGEpXG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWNlaXZlX3VucmVsaWFibGUocGVlcl9pZDogc3RyaW5nLCBkYXRhOiBVbnJlbGlhYmxlUGFja2V0KTogdm9pZCB7XG5cdFx0ZGF0YSA9IFVucmVsaWFibGVQYWNrZXQuY29udmVydChkYXRhKVxuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgSW5wdXRQYWNrZXQpIHtcblx0XHRcdGlmIChkYXRhLmdhbWUgPCBHYW1lLmdhbWUpIHJldHVyblxuXHRcdFx0aWYgKGRhdGEuZnJhbWUgPCBHYW1lLmZyYW1lKSByZXR1cm5cblxuXHRcdFx0bGV0IGluZGV4ID0gTmV0d29yay5tYXBwaW5nLmdldChwZWVyX2lkKVxuXHRcdFx0bGV0IGJ1ZmZlciA9IE5ldHdvcmsuYnVmZmVyc1tpbmRleF1cblx0XHRcdGJ1ZmZlci5hZGQoZGF0YSlcblx0XHRcdE5ldHdvcmsuZnJhbWVfd2VfYXJlX21pc3NpbmdbaW5kZXhdID0gYnVmZmVyLmZpbmRfbG93ZXN0KEdhbWUuZnJhbWUpXG5cdFx0fSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQWNrUGFja2V0KSB7XG5cdFx0XHQvL1RPRE86IFdlIHNob3VsZCBjb21lIHVwIHdpdGggYSBiZXR0ZXIgc3lzdGVtIG9mIHJlbW92aW5nIG9sZCBwYWNrZXRzXG5cdFx0XHRsZXQgaW5kZXggPSBOZXR3b3JrLm1hcHBpbmcuZ2V0KHBlZXJfaWQpXG5cdFx0XHRsZXQgdiA9IE5ldHdvcmsuZnJhbWVfdGhleV9hcmVfbWlzc2luZ1tpbmRleF1cblx0XHRcdGlmICh2ID09PSBkYXRhLmFjaykgTmV0d29yay5mcmFtZV90aGV5X2FyZV9taXNzaW5nW2luZGV4XSArPSAxXG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgY2FsbGJhY2sgb2YgTmV0d29yay51bnJlbGlhYmxlX2NhbGxiYWNrcykgY2FsbGJhY2socGVlcl9pZCwgZGF0YSlcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgc2VuZF9hbGxfcmVsaWFibGUoZGF0YTogUmVsaWFibGVQYWNrZXQpOiB2b2lkIHtcblx0XHRsZXQgcmF3X2RhdGEgPSBkYXRhLnJhdygpXG5cdFx0Zm9yIChsZXQgY29ubiBvZiBOZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zKSB7XG5cdFx0XHQvL1RPRE86IEZpbmQgb3V0IHdoeSB0aGUgY29ubmVjdGlvbiBpcyBub3Qgc3RhYmlsaXppbmcgaGVyZVxuXHRcdFx0aWYgKGNvbm4pIGNvbm4uc2VuZChyYXdfZGF0YSlcblx0XHR9IFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBzZW5kX2lucHV0X2J1ZmZlcihidWZmZXI6IEJ1ZmZlciwgcGFja2V0X2xvc3M6IG51bWJlciA9IDApOiB2b2lkIHtcblxuXHRcdGxldCBkYXRhID0gYnVmZmVyLml0ZW1zKCkubWFwKHYgPT4gdi5yYXcoKSlcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgTmV0d29yay51bnJlbGlhYmxlX2Nvbm5lY3Rpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0bGV0IGNvbm4gPSBOZXR3b3JrLnVucmVsaWFibGVfY29ubmVjdGlvbnNbaW5kZXhdXG5cblx0XHRcdGxldCBsb3dlc3RfYWNrID0gTmV0d29yay5mcmFtZV90aGV5X2FyZV9taXNzaW5nW2luZGV4XVxuXHRcdFx0Zm9yIChsZXQgaW5wdXQgb2YgZGF0YSkge1xuXHRcdFx0XHRpZiAoaW5wdXQuZnJhbWUgPj0gbG93ZXN0X2Fjaykge1xuXHRcdFx0XHRcdGlmIChNYXRoLnJhbmRvbSgpID49IHBhY2tldF9sb3NzKSBjb25uLnNlbmQoaW5wdXQpXG5cdFx0XHRcdFx0ZWxzZSBjb25zb2xlLmxvZygnU2ltdWxhdGluZyBhIGxvc3QgcGFja2V0Jylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgbG93ZXN0X2ZyYW1lID0gTmV0d29yay5mcmFtZV93ZV9hcmVfbWlzc2luZ1tpbmRleF0gfHwgMFxuXHRcdFx0Y29ubi5zZW5kKG5ldyBBY2tQYWNrZXQobG93ZXN0X2ZyYW1lKS5yYXcoKSlcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhOZXR3b3JrLmZyYW1lX3RoZXlfYXJlX21pc3Npbmcuam9pbigpKVxuXHRcdGxldCBsb3dlc3RfZnJhbWVfciA9IE1hdGgubWluKC4uLk5ldHdvcmsuZnJhbWVfdGhleV9hcmVfbWlzc2luZylcblx0XHRidWZmZXIucmVtb3ZlX29sZChsb3dlc3RfZnJhbWVfcilcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgbmFtZXNwYWNlIGZyb20gJy4vcmVsaWFibGVfcGFja2V0cydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXBhcmFtZXRlci1wcm9wZXJ0aWVzICovXG5leHBvcnQgY2xhc3MgUmVsaWFibGVQYWNrZXQge1xuXHRwdWJsaWMgdHlwZTogc3RyaW5nXG5cblx0cHVibGljIHJhdygpOiBhbnkge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHsgdHlwZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lIH0sIHRoaXMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGNvbnZlcnQoZGF0YTogUmVsaWFibGVQYWNrZXQpOiBhbnkge1xuXHRcdGxldCBvYmplY3QgPSBPYmplY3QuY3JlYXRlKChuYW1lc3BhY2UgYXMgYW55KVtkYXRhLnR5cGVdLnByb3RvdHlwZSlcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihvYmplY3QsIGRhdGEpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXJ0UGFja2V0IGV4dGVuZHMgUmVsaWFibGVQYWNrZXQge1xuXHRwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHNlZWQ6IHN0cmluZykge1xuXHRcdHN1cGVyKClcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyUGFja2V0IGV4dGVuZHMgUmVsaWFibGVQYWNrZXQge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPdGhlckNsaWVudHNQYWNrZXQgZXh0ZW5kcyBSZWxpYWJsZVBhY2tldCB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgb3RoZXJzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKClcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgbmFtZXNwYWNlIGZyb20gJy4vdW5yZWxpYWJsZV9wYWNrZXRzJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcGFyYW1ldGVyLXByb3BlcnRpZXMgKi9cbmV4cG9ydCBjbGFzcyBVbnJlbGlhYmxlUGFja2V0IHtcblx0cHVibGljIHR5cGU6IHN0cmluZ1xuXG5cdHB1YmxpYyByYXcoKTogYW55IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7IHR5cGU6IHRoaXMuY29uc3RydWN0b3IubmFtZSB9LCB0aGlzKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb252ZXJ0KGRhdGE6IFVucmVsaWFibGVQYWNrZXQpOiBhbnkge1xuXHRcdGxldCBvYmplY3QgPSBPYmplY3QuY3JlYXRlKChuYW1lc3BhY2UgYXMgYW55KVtkYXRhLnR5cGVdLnByb3RvdHlwZSlcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihvYmplY3QsIGRhdGEpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0UGFja2V0IGV4dGVuZHMgVW5yZWxpYWJsZVBhY2tldCB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgZnJhbWU6IG51bWJlcixcblx0XHRwdWJsaWMgZ2FtZTogbnVtYmVyLFxuXHRcdHB1YmxpYyB1cDogYm9vbGVhbixcblx0XHRwdWJsaWMgZG93bjogYm9vbGVhbixcblx0XHRwdWJsaWMgbGVmdDogYm9vbGVhbixcblx0XHRwdWJsaWMgcmlnaHQ6IGJvb2xlYW5cblx0KSB7XG5cdFx0c3VwZXIoKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2tQYWNrZXQgZXh0ZW5kcyBVbnJlbGlhYmxlUGFja2V0IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBhY2s6IG51bWJlcikge1xuXHRcdHN1cGVyKClcblx0fVxufVxuIiwiaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJy4vbmV0d29yay9uZXR3b3JrJ1xuaW1wb3J0IHsgU3RhcnRQYWNrZXQsIFBsYXllclBhY2tldCwgUmVsaWFibGVQYWNrZXQgfSBmcm9tICcuL25ldHdvcmsvcmVsaWFibGVfcGFja2V0cydcbmltcG9ydCAqIGFzIHNlZWRyYW5kb20gZnJvbSAnc2VlZHJhbmRvbSdcbmltcG9ydCB7IEdhbWVUZXN0aW5nIH0gZnJvbSAnLi9nYW1lL2dhbWVfdGVzdGluZyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZS9nYW1lJztcblxuZXhwb3J0IHZhciBSYW5kb206IHNlZWRyYW5kb20ucHJuZ1xuXG5jb25zb2xlLmxvZygnU3RhcnRpbmcgdXAnKVxuTmV0d29yay5vcGVuX3NvY2tldCgpXG5sZXQgY29ubmVjdF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ubmVjdC1idXR0b24nKVxuY29ubmVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcblx0J2NsaWNrJyxcblx0KCk6IHZvaWQgPT4ge1xuXHRcdGxldCB0ZXh0Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRib3gnKSBhcyBIVE1MSW5wdXRFbGVtZW50XG5cdFx0TmV0d29yay5mdWxsX2Nvbm5lY3QodGV4dGJveC52YWx1ZS50cmltKCkpXG5cdH1cbilcblxubGV0IGdhbWUgPSBuZXcgR2FtZVRlc3RpbmcoKVxubGV0IGxvb3AgPSAoKTogdm9pZCA9PiB7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGdhbWUuYWRkX2lucHV0KClcblx0XHROZXR3b3JrLnNlbmRfaW5wdXRfYnVmZmVyKGdhbWUub2xkX2lucHV0X2J1ZmZlcilcblxuXHRcdGlmIChOZXR3b3JrLmJ1ZmZlcnMubWFwKGIgPT4gYi5wZWVrKCkpLmV2ZXJ5KHYgPT4gdiAmJiB2LmZyYW1lID09PSBHYW1lLmZyYW1lKSkge1xuXHRcdFx0Z2FtZS5zaW11bGF0ZShOZXR3b3JrLmJ1ZmZlcnMubWFwKGIgPT4gYi5wb3BsZWZ0KCkpKVxuXHRcdH1cblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblx0fSwgR2FtZS5GUFMpXG59XG5cbmxldCBvdGhlcl9wbGF5ZXJzID0gMFxubGV0IHNldHVwX25vdF9ydW4gPSB0cnVlO1xuTmV0d29yay5yZWxpYWJsZV9jYWxsYmFja3MucHVzaCgoXzogc3RyaW5nLCBkYXRhOiBSZWxpYWJsZVBhY2tldCkgPT4ge1xuXHRpZiAoZGF0YSBpbnN0YW5jZW9mIFN0YXJ0UGFja2V0KSB7XG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIHN0YXJ0IGNvbW1hbmQgd2l0aCBzZWVkOicsIGRhdGEuc2VlZClcblx0XHRVdGlscy5zZXRfcmFuZG9tX3NlZWQoZGF0YS5zZWVkKVxuXG5cdFx0Ly9BY2tub3dsZWRnZSByZWNlaXZpbmcgdGhlIHN0YXJ0IHBhY2tldFxuXHRcdE5ldHdvcmsuc2VuZF9hbGxfcmVsaWFibGUobmV3IFBsYXllclBhY2tldCgpKVxuXHR9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBQbGF5ZXJQYWNrZXQpIHtcblx0XHRjb25zb2xlLmxvZygnUmVjZWl2ZWQgUGxheWVyUGFja2V0IGFja25vd2xlZGdlbWVudCBjb21tYW5kJylcblxuXHRcdG90aGVyX3BsYXllcnMgKz0gMVxuXHRcdC8vIFdlIGhhdmUgZ290IGV2ZXJ5b25lcyBlbHNlcyBwb3NpdGlvbnMsIG5vdyB3ZSBjYW4gc3RhcnQgdGhlIGdhbWVcblx0XHRpZiAob3RoZXJfcGxheWVycyA+PSBOZXR3b3JrLm1hcHBpbmcuc2l6ZSAmJiBzZXR1cF9ub3RfcnVuKSB7XG5cdFx0XHRzZXR1cF9ub3RfcnVuID0gZmFsc2U7XG5cdFx0XHRnYW1lLnNldHVwKClcblx0XHRcdGxvb3AoKVxuXHRcdH1cblx0fVxufSlcblxuIiwiaW1wb3J0IHNlZWRyYW5kb20gZnJvbSBcInNlZWRyYW5kb21cIjtcclxuXHJcbmV4cG9ydCB2YXIgUmFuZG9tOiBzZWVkcmFuZG9tLnBybmc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfcmFuZG9tX3NlZWQoc2VlZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUmFuZG9tID0gc2VlZHJhbmRvbShzZWVkKTtcclxuICAgIH1cclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
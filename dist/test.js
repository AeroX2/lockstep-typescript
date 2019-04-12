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
    Game.prototype.setup = function (testing) {
        var _this = this;
        if (testing === void 0) { testing = true; }
        if (testing) {
            Game.game += 1;
        }
        else {
            Game.game = 0;
        }
        Game.frame = 0;
        Game.entity_id = 0;
        this.current_input = new _network_unreliable_packets__WEBPACK_IMPORTED_MODULE_2__["InputPacket"](0, Game.game, false, false, false, false);
        this.input_buffer = new _network_buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"]();
        this.old_input_buffer = new _network_buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"]();
        this.other_players = [];
        var sorted_mapping = Array.from(_network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].mapping.keys())
            .concat(_network_network__WEBPACK_IMPORTED_MODULE_4__["Network"].local_id)
            .sort();
        for (var _i = 0, sorted_mapping_1 = sorted_mapping; _i < sorted_mapping_1.length; _i++) {
            var client = sorted_mapping_1[_i];
            var random_range = function (min, max) {
                return Math.floor(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["Random"])() * (max - min) + min);
            };
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
            console.log('Adding frame:', this.current_input.raw());
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
    GameTesting.prototype.add_input = function () {
        if (this.input_buffer.length() < _network_network__WEBPACK_IMPORTED_MODULE_1__["Network"].BUFFER_SIZE) {
            console.log('Adding frame:', this.current_input.raw());
            var input_copy = Object.create(this.current_input);
            input_copy = Object.assign(input_copy, this.current_input);
            this.input_buffer.add(input_copy);
            var input_copy2 = Object.create(this.current_input);
            input_copy2 = Object.assign(input_copy2, this.current_input);
            this.old_input_buffer.add(input_copy2);
            this.current_input.frame++;
        }
    };
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
        return this.buffer[this.buffer.length - 1].frame;
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
            Network.reliable_connections[index] = conn;
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
            Network.unreliable_connections[index] = conn;
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
            var index = Network.mapping.get(peer_id);
            Network.frame_they_are_missing[index] = data.ack;
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
            var lowest_frame = Network.frame_we_are_missing[index];
            conn.send(new _unreliable_packets__WEBPACK_IMPORTED_MODULE_3__["AckPacket"](lowest_frame).raw());
        }
        // console.log(Network.frame_they_are_missing.toString())
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
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game_game_testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game_testing */ "./src/game/game_testing.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");





var Random;
console.log('Starting up');
_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].open_socket();
var connect_button = document.getElementById('connect-button');
connect_button.addEventListener('click', function () {
    var textbox = document.getElementById('textbox');
    _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].full_connect(textbox.value.trim());
});
var game = new _game_game_testing__WEBPACK_IMPORTED_MODULE_3__["GameTesting"]();
var loop = function () {
    setTimeout(function () {
        game.add_input();
        _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].send_input_buffer(game.old_input_buffer);
        if (_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].buffers.map(function (b) { return b.peek(); }).every(function (v) { return v && v.frame === _game_game_testing__WEBPACK_IMPORTED_MODULE_3__["GameTesting"].frame; })) {
            game.simulate(_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].buffers.map(function (b) { return b.popleft(); }));
        }
        window.requestAnimationFrame(loop);
    }, _game_game_testing__WEBPACK_IMPORTED_MODULE_3__["GameTesting"].FPS);
};
//TODO: Probably a nicer way of doing this, instead of callbacks
var other_players = 0;
_network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].reliable_callbacks.push(function (_, data) {
    if (data instanceof _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__["StartPacket"]) {
        console.log('Received start command');
        _utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].set_random(seedrandom__WEBPACK_IMPORTED_MODULE_2__(data.seed));
        //Acknowledge receiving the start packet
        _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].send_all_reliable(new _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__["PlayerPacket"]());
    }
    else if (data instanceof _network_reliable_packets__WEBPACK_IMPORTED_MODULE_1__["PlayerPacket"]) {
        console.log('Received PlayerPacket acknowledgement command');
        other_players += 1;
        // We have got everyones elses positions, now we can start the game
        if (other_players >= _network_network__WEBPACK_IMPORTED_MODULE_0__["Network"].mapping.size) {
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
var Random;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.set_random = function (random) {
        Random = random;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlZXJqcy9kaXN0IHN5bmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BlZXJqcy9kaXN0L3BlZXJqcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JhbmRvbWNvbG9yL3JhbmRvbUNvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi9hbGVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi90eWNoZWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vbGliL3hvcjEyOC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yNDA5Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbS9saWIveG9yc2hpZnQ3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWVkcmFuZG9tL2xpYi94b3J3b3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NlZWRyYW5kb20vc2VlZHJhbmRvbS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9iYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWVfdGVzdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvYnVmZmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL25ldHdvcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvcmVsaWFibGVfcGFja2V0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29yay91bnJlbGlhYmxlX3BhY2tldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLHFFOzs7Ozs7Ozs7OztBQ1JBLDRDQUFnQyw0RkFBNEYsZ0JB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Qzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsNEJBQTRCOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsT0FBTyx5Q0FBeUMsRUFBRSxVQUFVLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU8sT0FBTztBQUNsQyxvQkFBb0IsT0FBTyxPQUFPO0FBQ2xDLG9CQUFvQixPQUFPLE9BQU87QUFDbEMsb0JBQW9CLE9BQU8sT0FBTztBQUNsQyxvQkFBb0IsT0FBTyxPQUFPO0FBQ2xDLG9CQUFvQixPQUFPLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQXVDLEVBQUUsVUFBVSxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0Z0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHlEQUFZOztBQUUvQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1CQUFPLENBQUMsNkRBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyw2REFBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsbUVBQWlCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywrREFBZTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyw2REFBYzs7QUFFbkM7QUFDQTtBQUNBLFNBQVMsbUJBQU8sQ0FBQyw2REFBYzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNDQUFzQztBQUNqRTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVLDhGQUFNLElBQUksZ0dBQVU7QUFDL0IsRUFBRSxtQ0FBTyxZQUFZLGFBQWEsRUFBRTtBQUFBLG9HQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLEVBQUUsS0FBMkI7QUFDN0IsRUFBRSw4RkFBdUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSw4RkFBTSxJQUFJLGdHQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxvR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsOEZBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSw4RkFBTSxJQUFJLGdHQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxvR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsOEZBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBd0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CLEVBQUU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLFVBQVUsOEZBQU0sSUFBSSxnR0FBVTtBQUMvQixFQUFFLG1DQUFPLFlBQVksYUFBYSxFQUFFO0FBQUEsb0dBQUM7QUFDckMsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0EsRUFBRSxLQUEyQjtBQUM3QixFQUFFLDhGQUF1QztBQUN6Qzs7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyw4QkFBOEI7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSw4RkFBTSxJQUFJLGdHQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxvR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsOEZBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWEsYUFBYTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUF3QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsVUFBVSw4RkFBTSxJQUFJLGdHQUFVO0FBQy9CLEVBQUUsbUNBQU8sWUFBWSxhQUFhLEVBQUU7QUFBQSxvR0FBQztBQUNyQyxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQSxFQUFFLEtBQTJCO0FBQzdCLEVBQUUsOEZBQXVDO0FBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0IsaUJBQWlCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsOEJBQThCO0FBQzlCLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBLDJCQUEyQixzQkFBc0I7QUFDakQsMkJBQTJCLGdDQUFnQztBQUMzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0EsbUNBQW1DLHFCQUFxQixFQUFFO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCLGFBQWE7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGtCQUFrQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBNEMsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsZUFBUTtBQUNqQyxHQUFHO0FBQ0gsQ0FBQyxVQUFVLElBQTJDO0FBQ3RELEVBQUUsbUNBQU8sWUFBWSxtQkFBbUIsRUFBRTtBQUFBLG9HQUFDO0FBQzNDLENBQUMsTUFBTSxFQUdOOzs7QUFHRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVQQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCd0U7QUFDMUI7QUFFOUM7SUFBMEIsd0JBQU07SUFPL0IsY0FBbUIsQ0FBUyxFQUFFLENBQVM7UUFBdkMsWUFDQyxpQkFBTyxTQUdQO1FBVk0sWUFBTSxHQUFHLEVBQUU7UUFRakIsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1YsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDOztJQUNYLENBQUM7SUFFTSxtQkFBSSxHQUFYLFVBQVksR0FBNkI7UUFDeEMsaURBQWlEO1FBRWpELEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDckUsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUU3QywwQ0FBMEM7UUFDMUMsNENBQTRDO1FBQzVDLG9DQUFvQztRQUNwQyxvQkFBb0I7UUFDcEIscUVBQXFFO1FBQ3JFLGVBQWU7UUFDZixJQUFJO0lBQ0wsQ0FBQztJQUVNLG9DQUFxQixHQUE1QixVQUE2QixFQUFVO1FBQ3RDLElBQUksRUFBRSxZQUFZLDhDQUFNLElBQUksRUFBRSxZQUFZLG1EQUFXLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFO1NBQ3RCO0lBQ0YsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQUFDLENBbkN5Qiw4Q0FBTSxHQW1DL0I7O0FBRUQsMkJBQTJCO0FBQzNCLFNBQVMsV0FBVyxDQUFDLFdBQWdCLEVBQUUsU0FBZ0I7SUFDdEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtRQUN6QixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQzFELE1BQU0sQ0FBQyxjQUFjLENBQ3BCLFdBQVcsQ0FBQyxTQUFTLEVBQ3JCLElBQUksRUFDSixNQUFNLENBQUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FDekQ7UUFDRixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSCxDQUFDO0FBQ0QsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLCtDQUFPLEVBQUUsd0RBQWdCLEVBQUUsa0RBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEN0I7QUFFN0I7SUFRQztRQVBPLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFDZixNQUFDLEdBQVcsQ0FBQztRQUNiLE1BQUMsR0FBVyxDQUFDO1FBQ2IsT0FBRSxHQUFXLENBQUM7UUFDZCxPQUFFLEdBQVcsQ0FBQztRQUlwQixJQUFJLENBQUMsRUFBRSxHQUFHLDBDQUFJLENBQUMsU0FBUyxFQUFFO0lBQzNCLENBQUM7SUFFRCxzREFBc0Q7SUFDL0MsdUJBQU0sR0FBYixVQUFjLE1BQXlCLElBQVMsQ0FBQztJQUMxQyxxQkFBSSxHQUFYLFVBQVksR0FBNkIsSUFBUyxDQUFDO0lBRTVDLHlCQUFRLEdBQWYsVUFBZ0IsRUFBVTtRQUN6QixPQUFPLEtBQUs7SUFDYixDQUFDO0lBQ00sMEJBQVMsR0FBaEIsVUFBaUIsRUFBVSxJQUFTLENBQUM7SUFDOUIsc0NBQXFCLEdBQTVCLFVBQTZCLEVBQVUsSUFBUyxDQUFDO0lBRWxELGFBQUM7QUFBRCxDQUFDOztBQUVEO0lBQTZCLDJCQUFNO0lBQW5DOztJQXlCQSxDQUFDO0lBeEJPLHdCQUFNLEdBQWIsVUFBYyxNQUF5QjtRQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7UUFFakIsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLO1FBQ2hCLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSztRQUVoQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUc7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07WUFDcEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRztTQUN4QjtJQUNGLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQyxDQXpCNEIsTUFBTSxHQXlCbEM7O0FBRUQsc0RBQXNEO0FBQ3REO0lBQWdDLDhCQUFNO0lBQXRDOztJQU1BLENBQUM7SUFMTyw2QkFBUSxHQUFmLFVBQWdCLEVBQVU7UUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNO0lBQzlELENBQUM7SUFDRixpQkFBQztBQUFELENBQUMsQ0FOK0IsTUFBTSxHQU1yQzs7QUFFRDtJQUFzQyxvQ0FBTTtJQUE1Qzs7SUE2QkEsQ0FBQztJQTVCTyxvQ0FBUyxHQUFoQixVQUFpQixFQUFVO1FBQzFCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxPQUFPLEdBQUcsRUFBRSxHQUFHLFFBQVE7WUFDM0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxHQUFHLFFBQVE7WUFFM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzlCLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU07WUFDckMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTTtZQUNqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU07WUFFakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBRXpCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU87WUFDdkMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU87WUFDdkIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLE9BQU87WUFFdkIsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHO1lBQ2QsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHO1lBQ2QsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHO1lBQ1osRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHO1NBQ1o7SUFDRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLENBN0JxQyxNQUFNLEdBNkIzQzs7Ozs7Ozs7Ozs7Ozs7QUMxRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNqQjtBQUM4QjtBQUNqQjtBQUNFO0FBQ1Y7QUFFbEM7SUFBQTtRQVlXLFdBQU0sR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXNCO1FBQ3BGLFFBQUcsR0FBNkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7SUF3TjFGLENBQUM7SUExTU8sb0JBQUssR0FBWixVQUFhLE9BQVk7UUFBekIsaUJBc0VDO1FBdEVZLHdDQUFZO1FBQ3hCLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztRQUVsQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksdUVBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDOUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNEQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksc0RBQU0sRUFBRTtRQUVwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUU7UUFDdkIsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyx3REFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyRCxNQUFNLENBQUMsd0RBQU8sQ0FBQyxRQUFRLENBQUM7YUFDeEIsSUFBSSxFQUFFO1FBQ1IsS0FBbUIsVUFBYyxFQUFkLGlDQUFjLEVBQWQsNEJBQWMsRUFBZCxJQUFjLEVBQUU7WUFBOUIsSUFBSSxNQUFNO1lBQ2QsSUFBSSxZQUFZLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVztnQkFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHFEQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDaEQsQ0FBQztZQUNELElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyw4Q0FBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyw4Q0FBTSxDQUFDLE1BQU0sQ0FBQztZQUN0RSxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLDhDQUFNLENBQUMsTUFBTSxDQUFDO1lBRWhGLElBQUksTUFBTSxLQUFLLHdEQUFPLENBQUMsUUFBUTtnQkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksOENBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztnQkFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3REFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLG1EQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RTtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV4RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1FBQ3ZCLEtBQW1CLFVBQWEsRUFBYixTQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO1lBQTNCLElBQUksTUFBTTtZQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFBO1FBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QixJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQ1YsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNYLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVoQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRS9ELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRW5FLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7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QUFDLGlCQUFpQixDQUFDLElBQUksc0VBQVksRUFBRSxDQUFDO0tBQzdDO1NBQU0sSUFBSSxJQUFJLFlBQVksc0VBQVksRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDO1FBRTVELGFBQWEsSUFBSSxDQUFDO1FBQ2xCLG1FQUFtRTtRQUNuRSxJQUFJLGFBQWEsSUFBSSx3REFBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksRUFBRTtTQUNOO0tBQ0Q7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwREY7QUFBQTtBQUFBO0FBQU8sSUFBSSxNQUF1QixDQUFDO0FBRW5DO0lBQUE7SUFJQSxDQUFDO0lBSGlCLGdCQUFVLEdBQXhCLFVBQXlCLE1BQXVCO1FBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTkQsZSIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdGVzdGluZy50c1wiKTtcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9wZWVyanMvZGlzdCBzeW5jIHJlY3Vyc2l2ZVwiOyIsInBhcmNlbFJlcXVpcmU9ZnVuY3Rpb24oZSxyLG4sdCl7dmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcGFyY2VsUmVxdWlyZSYmcGFyY2VsUmVxdWlyZSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7ZnVuY3Rpb24gdShuLHQpe2lmKCFyW25dKXtpZighZVtuXSl7dmFyIGY9XCJmdW5jdGlvblwiPT10eXBlb2YgcGFyY2VsUmVxdWlyZSYmcGFyY2VsUmVxdWlyZTtpZighdCYmZilyZXR1cm4gZihuLCEwKTtpZihpKXJldHVybiBpKG4sITApO2lmKG8mJlwic3RyaW5nXCI9PXR5cGVvZiBuKXJldHVybiBvKG4pO3ZhciBjPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbitcIidcIik7dGhyb3cgYy5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGN9cC5yZXNvbHZlPWZ1bmN0aW9uKHIpe3JldHVybiBlW25dWzFdW3JdfHxyfSxwLmNhY2hlPXt9O3ZhciBsPXJbbl09bmV3IHUuTW9kdWxlKG4pO2Vbbl1bMF0uY2FsbChsLmV4cG9ydHMscCxsLGwuZXhwb3J0cyx0aGlzKX1yZXR1cm4gcltuXS5leHBvcnRzO2Z1bmN0aW9uIHAoZSl7cmV0dXJuIHUocC5yZXNvbHZlKGUpKX19dS5pc1BhcmNlbFJlcXVpcmU9ITAsdS5Nb2R1bGU9ZnVuY3Rpb24oZSl7dGhpcy5pZD1lLHRoaXMuYnVuZGxlPXUsdGhpcy5leHBvcnRzPXt9fSx1Lm1vZHVsZXM9ZSx1LmNhY2hlPXIsdS5wYXJlbnQ9aSx1LnJlZ2lzdGVyPWZ1bmN0aW9uKHIsbil7ZVtyXT1bZnVuY3Rpb24oZSxyKXtyLmV4cG9ydHM9bn0se31dfTtmb3IodmFyIGY9MDtmPG4ubGVuZ3RoO2YrKyl1KG5bZl0pO2lmKG4ubGVuZ3RoKXt2YXIgYz11KG5bbi5sZW5ndGgtMV0pO1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWM6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBjfSk6dCYmKHRoaXNbdF09Yyl9cmV0dXJuIHV9KHtcInZIbzFcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xudmFyIGU9e307ZS51c2VCbG9iQnVpbGRlcj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEJsb2IoW10pLCExfWNhdGNoKGUpe3JldHVybiEwfX0oKSxlLnVzZUFycmF5QnVmZmVyVmlldz0hZS51c2VCbG9iQnVpbGRlciYmZnVuY3Rpb24oKXt0cnl7cmV0dXJuIDA9PT1uZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoW10pXSkuc2l6ZX1jYXRjaChlKXtyZXR1cm4hMH19KCksbW9kdWxlLmV4cG9ydHMuYmluYXJ5RmVhdHVyZXM9ZTt2YXIgcj1tb2R1bGUuZXhwb3J0cy5CbG9iQnVpbGRlcjtmdW5jdGlvbiB0KCl7dGhpcy5fcGllY2VzPVtdLHRoaXMuX3BhcnRzPVtdfVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJihyPW1vZHVsZS5leHBvcnRzLkJsb2JCdWlsZGVyPXdpbmRvdy5XZWJLaXRCbG9iQnVpbGRlcnx8d2luZG93Lk1vekJsb2JCdWlsZGVyfHx3aW5kb3cuTVNCbG9iQnVpbGRlcnx8d2luZG93LkJsb2JCdWlsZGVyKSx0LnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24oZSl7XCJudW1iZXJcIj09dHlwZW9mIGU/dGhpcy5fcGllY2VzLnB1c2goZSk6KHRoaXMuZmx1c2goKSx0aGlzLl9wYXJ0cy5wdXNoKGUpKX0sdC5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtpZih0aGlzLl9waWVjZXMubGVuZ3RoPjApe3ZhciByPW5ldyBVaW50OEFycmF5KHRoaXMuX3BpZWNlcyk7ZS51c2VBcnJheUJ1ZmZlclZpZXd8fChyPXIuYnVmZmVyKSx0aGlzLl9wYXJ0cy5wdXNoKHIpLHRoaXMuX3BpZWNlcz1bXX19LHQucHJvdG90eXBlLmdldEJ1ZmZlcj1mdW5jdGlvbigpe2lmKHRoaXMuZmx1c2goKSxlLnVzZUJsb2JCdWlsZGVyKXtmb3IodmFyIHQ9bmV3IHIsaT0wLHU9dGhpcy5fcGFydHMubGVuZ3RoO2k8dTtpKyspdC5hcHBlbmQodGhpcy5fcGFydHNbaV0pO3JldHVybiB0LmdldEJsb2IoKX1yZXR1cm4gbmV3IEJsb2IodGhpcy5fcGFydHMpfSxtb2R1bGUuZXhwb3J0cy5CdWZmZXJCdWlsZGVyPXQ7XG59LHt9XSxcImxIT2NcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xudmFyIHQ9cmVxdWlyZShcIi4vYnVmZmVyYnVpbGRlclwiKS5CdWZmZXJCdWlsZGVyLGU9cmVxdWlyZShcIi4vYnVmZmVyYnVpbGRlclwiKS5iaW5hcnlGZWF0dXJlcyxpPXt1bnBhY2s6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyByKHQpLnVucGFjaygpfSxwYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBuO3JldHVybiBlLnBhY2sodCksZS5nZXRCdWZmZXIoKX19O2Z1bmN0aW9uIHIodCl7dGhpcy5pbmRleD0wLHRoaXMuZGF0YUJ1ZmZlcj10LHRoaXMuZGF0YVZpZXc9bmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhQnVmZmVyKSx0aGlzLmxlbmd0aD10aGlzLmRhdGFCdWZmZXIuYnl0ZUxlbmd0aH1mdW5jdGlvbiBuKCl7dGhpcy5idWZmZXJCdWlsZGVyPW5ldyB0fWZ1bmN0aW9uIHUodCl7dmFyIGU9dC5jaGFyQ29kZUF0KDApO3JldHVybiBlPD0yMDQ3P1wiMDBcIjplPD02NTUzNT9cIjAwMFwiOmU8PTIwOTcxNTE/XCIwMDAwXCI6ZTw9NjcxMDg4NjM/XCIwMDAwMFwiOlwiMDAwMDAwXCJ9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdC5sZW5ndGg+NjAwP25ldyBCbG9iKFt0XSkuc2l6ZTp0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdGXS9nLHUpLmxlbmd0aH1tb2R1bGUuZXhwb3J0cz1pLHIucHJvdG90eXBlLnVucGFjaz1mdW5jdGlvbigpe3ZhciB0LGU9dGhpcy51bnBhY2tfdWludDgoKTtpZihlPDEyOClyZXR1cm4gZTtpZigoMjI0XmUpPDMyKXJldHVybigyMjReZSktMzI7aWYoKHQ9MTYwXmUpPD0xNSlyZXR1cm4gdGhpcy51bnBhY2tfcmF3KHQpO2lmKCh0PTE3Nl5lKTw9MTUpcmV0dXJuIHRoaXMudW5wYWNrX3N0cmluZyh0KTtpZigodD0xNDReZSk8PTE1KXJldHVybiB0aGlzLnVucGFja19hcnJheSh0KTtpZigodD0xMjheZSk8PTE1KXJldHVybiB0aGlzLnVucGFja19tYXAodCk7c3dpdGNoKGUpe2Nhc2UgMTkyOnJldHVybiBudWxsO2Nhc2UgMTkzOnJldHVybjtjYXNlIDE5NDpyZXR1cm4hMTtjYXNlIDE5NTpyZXR1cm4hMDtjYXNlIDIwMjpyZXR1cm4gdGhpcy51bnBhY2tfZmxvYXQoKTtjYXNlIDIwMzpyZXR1cm4gdGhpcy51bnBhY2tfZG91YmxlKCk7Y2FzZSAyMDQ6cmV0dXJuIHRoaXMudW5wYWNrX3VpbnQ4KCk7Y2FzZSAyMDU6cmV0dXJuIHRoaXMudW5wYWNrX3VpbnQxNigpO2Nhc2UgMjA2OnJldHVybiB0aGlzLnVucGFja191aW50MzIoKTtjYXNlIDIwNzpyZXR1cm4gdGhpcy51bnBhY2tfdWludDY0KCk7Y2FzZSAyMDg6cmV0dXJuIHRoaXMudW5wYWNrX2ludDgoKTtjYXNlIDIwOTpyZXR1cm4gdGhpcy51bnBhY2tfaW50MTYoKTtjYXNlIDIxMDpyZXR1cm4gdGhpcy51bnBhY2tfaW50MzIoKTtjYXNlIDIxMTpyZXR1cm4gdGhpcy51bnBhY2tfaW50NjQoKTtjYXNlIDIxMjpjYXNlIDIxMzpjYXNlIDIxNDpjYXNlIDIxNTpyZXR1cm47Y2FzZSAyMTY6cmV0dXJuIHQ9dGhpcy51bnBhY2tfdWludDE2KCksdGhpcy51bnBhY2tfc3RyaW5nKHQpO2Nhc2UgMjE3OnJldHVybiB0PXRoaXMudW5wYWNrX3VpbnQzMigpLHRoaXMudW5wYWNrX3N0cmluZyh0KTtjYXNlIDIxODpyZXR1cm4gdD10aGlzLnVucGFja191aW50MTYoKSx0aGlzLnVucGFja19yYXcodCk7Y2FzZSAyMTk6cmV0dXJuIHQ9dGhpcy51bnBhY2tfdWludDMyKCksdGhpcy51bnBhY2tfcmF3KHQpO2Nhc2UgMjIwOnJldHVybiB0PXRoaXMudW5wYWNrX3VpbnQxNigpLHRoaXMudW5wYWNrX2FycmF5KHQpO2Nhc2UgMjIxOnJldHVybiB0PXRoaXMudW5wYWNrX3VpbnQzMigpLHRoaXMudW5wYWNrX2FycmF5KHQpO2Nhc2UgMjIyOnJldHVybiB0PXRoaXMudW5wYWNrX3VpbnQxNigpLHRoaXMudW5wYWNrX21hcCh0KTtjYXNlIDIyMzpyZXR1cm4gdD10aGlzLnVucGFja191aW50MzIoKSx0aGlzLnVucGFja19tYXAodCl9fSxyLnByb3RvdHlwZS51bnBhY2tfdWludDg9ZnVuY3Rpb24oKXt2YXIgdD0yNTUmdGhpcy5kYXRhVmlld1t0aGlzLmluZGV4XTtyZXR1cm4gdGhpcy5pbmRleCsrLHR9LHIucHJvdG90eXBlLnVucGFja191aW50MTY9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnJlYWQoMiksZT0yNTYqKDI1NSZ0WzBdKSsoMjU1JnRbMV0pO3JldHVybiB0aGlzLmluZGV4Kz0yLGV9LHIucHJvdG90eXBlLnVucGFja191aW50MzI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnJlYWQoNCksZT0yNTYqKDI1NiooMjU2KnRbMF0rdFsxXSkrdFsyXSkrdFszXTtyZXR1cm4gdGhpcy5pbmRleCs9NCxlfSxyLnByb3RvdHlwZS51bnBhY2tfdWludDY0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yZWFkKDgpLGU9MjU2KigyNTYqKDI1NiooMjU2KigyNTYqKDI1NiooMjU2KnRbMF0rdFsxXSkrdFsyXSkrdFszXSkrdFs0XSkrdFs1XSkrdFs2XSkrdFs3XTtyZXR1cm4gdGhpcy5pbmRleCs9OCxlfSxyLnByb3RvdHlwZS51bnBhY2tfaW50OD1mdW5jdGlvbigpe3ZhciB0PXRoaXMudW5wYWNrX3VpbnQ4KCk7cmV0dXJuIHQ8MTI4P3Q6dC0yNTZ9LHIucHJvdG90eXBlLnVucGFja19pbnQxNj1mdW5jdGlvbigpe3ZhciB0PXRoaXMudW5wYWNrX3VpbnQxNigpO3JldHVybiB0PDMyNzY4P3Q6dC02NTUzNn0sci5wcm90b3R5cGUudW5wYWNrX2ludDMyPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy51bnBhY2tfdWludDMyKCk7cmV0dXJuIHQ8TWF0aC5wb3coMiwzMSk/dDp0LU1hdGgucG93KDIsMzIpfSxyLnByb3RvdHlwZS51bnBhY2tfaW50NjQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnVucGFja191aW50NjQoKTtyZXR1cm4gdDxNYXRoLnBvdygyLDYzKT90OnQtTWF0aC5wb3coMiw2NCl9LHIucHJvdG90eXBlLnVucGFja19yYXc9ZnVuY3Rpb24odCl7aWYodGhpcy5sZW5ndGg8dGhpcy5pbmRleCt0KXRocm93IG5ldyBFcnJvcihcIkJpbmFyeVBhY2tGYWlsdXJlOiBpbmRleCBpcyBvdXQgb2YgcmFuZ2UgXCIrdGhpcy5pbmRleCtcIiBcIit0K1wiIFwiK3RoaXMubGVuZ3RoKTt2YXIgZT10aGlzLmRhdGFCdWZmZXIuc2xpY2UodGhpcy5pbmRleCx0aGlzLmluZGV4K3QpO3JldHVybiB0aGlzLmluZGV4Kz10LGV9LHIucHJvdG90eXBlLnVucGFja19zdHJpbmc9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGkscj10aGlzLnJlYWQodCksbj0wLHU9XCJcIjtuPHQ7KShlPXJbbl0pPDEyOD8odSs9U3RyaW5nLmZyb21DaGFyQ29kZShlKSxuKyspOigxOTJeZSk8MzI/KGk9KDE5Ml5lKTw8Nnw2MyZyW24rMV0sdSs9U3RyaW5nLmZyb21DaGFyQ29kZShpKSxuKz0yKTooaT0oMTUmZSk8PDEyfCg2MyZyW24rMV0pPDw2fDYzJnJbbisyXSx1Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpLG4rPTMpO3JldHVybiB0aGlzLmluZGV4Kz10LHV9LHIucHJvdG90eXBlLnVucGFja19hcnJheT1mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEFycmF5KHQpLGk9MDtpPHQ7aSsrKWVbaV09dGhpcy51bnBhY2soKTtyZXR1cm4gZX0sci5wcm90b3R5cGUudW5wYWNrX21hcD1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30saT0wO2k8dDtpKyspe3ZhciByPXRoaXMudW5wYWNrKCksbj10aGlzLnVucGFjaygpO2Vbcl09bn1yZXR1cm4gZX0sci5wcm90b3R5cGUudW5wYWNrX2Zsb2F0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy51bnBhY2tfdWludDMyKCksZT0odD4+MjMmMjU1KS0xMjc7cmV0dXJuKDA9PXQ+PjMxPzE6LTEpKig4Mzg4NjA3JnR8ODM4ODYwOCkqTWF0aC5wb3coMixlLTIzKX0sci5wcm90b3R5cGUudW5wYWNrX2RvdWJsZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMudW5wYWNrX3VpbnQzMigpLGU9dGhpcy51bnBhY2tfdWludDMyKCksaT0odD4+MjAmMjA0NyktMTAyMztyZXR1cm4oMD09dD4+MzE/MTotMSkqKCgxMDQ4NTc1JnR8MTA0ODU3NikqTWF0aC5wb3coMixpLTIwKStlKk1hdGgucG93KDIsaS01MikpfSxyLnByb3RvdHlwZS5yZWFkPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuaW5kZXg7aWYoZSt0PD10aGlzLmxlbmd0aClyZXR1cm4gdGhpcy5kYXRhVmlldy5zdWJhcnJheShlLGUrdCk7dGhyb3cgbmV3IEVycm9yKFwiQmluYXJ5UGFja0ZhaWx1cmU6IHJlYWQgaW5kZXggb3V0IG9mIHJhbmdlXCIpfSxuLnByb3RvdHlwZS5nZXRCdWZmZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5idWZmZXJCdWlsZGVyLmdldEJ1ZmZlcigpfSxuLnByb3RvdHlwZS5wYWNrPWZ1bmN0aW9uKHQpe3ZhciBpPXR5cGVvZiB0O2lmKFwic3RyaW5nXCI9PWkpdGhpcy5wYWNrX3N0cmluZyh0KTtlbHNlIGlmKFwibnVtYmVyXCI9PWkpTWF0aC5mbG9vcih0KT09PXQ/dGhpcy5wYWNrX2ludGVnZXIodCk6dGhpcy5wYWNrX2RvdWJsZSh0KTtlbHNlIGlmKFwiYm9vbGVhblwiPT1pKSEwPT09dD90aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDE5NSk6ITE9PT10JiZ0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDE5NCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiPT1pKXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMTkyKTtlbHNle2lmKFwib2JqZWN0XCIhPWkpdGhyb3cgbmV3IEVycm9yKCdUeXBlIFwiJytpKydcIiBub3QgeWV0IHN1cHBvcnRlZCcpO2lmKG51bGw9PT10KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMTkyKTtlbHNle3ZhciByPXQuY29uc3RydWN0b3I7aWYocj09QXJyYXkpdGhpcy5wYWNrX2FycmF5KHQpO2Vsc2UgaWYocj09QmxvYnx8cj09RmlsZSl0aGlzLnBhY2tfYmluKHQpO2Vsc2UgaWYocj09QXJyYXlCdWZmZXIpZS51c2VBcnJheUJ1ZmZlclZpZXc/dGhpcy5wYWNrX2JpbihuZXcgVWludDhBcnJheSh0KSk6dGhpcy5wYWNrX2Jpbih0KTtlbHNlIGlmKFwiQllURVNfUEVSX0VMRU1FTlRcImluIHQpZS51c2VBcnJheUJ1ZmZlclZpZXc/dGhpcy5wYWNrX2JpbihuZXcgVWludDhBcnJheSh0LmJ1ZmZlcikpOnRoaXMucGFja19iaW4odC5idWZmZXIpO2Vsc2UgaWYocj09T2JqZWN0KXRoaXMucGFja19vYmplY3QodCk7ZWxzZSBpZihyPT1EYXRlKXRoaXMucGFja19zdHJpbmcodC50b1N0cmluZygpKTtlbHNle2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQudG9CaW5hcnlQYWNrKXRocm93IG5ldyBFcnJvcignVHlwZSBcIicrci50b1N0cmluZygpKydcIiBub3QgeWV0IHN1cHBvcnRlZCcpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodC50b0JpbmFyeVBhY2soKSl9fX10aGlzLmJ1ZmZlckJ1aWxkZXIuZmx1c2goKX0sbi5wcm90b3R5cGUucGFja19iaW49ZnVuY3Rpb24odCl7dmFyIGU9dC5sZW5ndGh8fHQuYnl0ZUxlbmd0aHx8dC5zaXplO2lmKGU8PTE1KXRoaXMucGFja191aW50OCgxNjArZSk7ZWxzZSBpZihlPD02NTUzNSl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIxOCksdGhpcy5wYWNrX3VpbnQxNihlKTtlbHNle2lmKCEoZTw9NDI5NDk2NzI5NSkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsZW5ndGhcIik7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMTkpLHRoaXMucGFja191aW50MzIoZSl9dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCh0KX0sbi5wcm90b3R5cGUucGFja19zdHJpbmc9ZnVuY3Rpb24odCl7dmFyIGU9YSh0KTtpZihlPD0xNSl0aGlzLnBhY2tfdWludDgoMTc2K2UpO2Vsc2UgaWYoZTw9NjU1MzUpdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMTYpLHRoaXMucGFja191aW50MTYoZSk7ZWxzZXtpZighKGU8PTQyOTQ5NjcyOTUpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGVuZ3RoXCIpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjE3KSx0aGlzLnBhY2tfdWludDMyKGUpfXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodCl9LG4ucHJvdG90eXBlLnBhY2tfYXJyYXk9ZnVuY3Rpb24odCl7dmFyIGU9dC5sZW5ndGg7aWYoZTw9MTUpdGhpcy5wYWNrX3VpbnQ4KDE0NCtlKTtlbHNlIGlmKGU8PTY1NTM1KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjIwKSx0aGlzLnBhY2tfdWludDE2KGUpO2Vsc2V7aWYoIShlPD00Mjk0OTY3Mjk1KSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxlbmd0aFwiKTt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIyMSksdGhpcy5wYWNrX3VpbnQzMihlKX1mb3IodmFyIGk9MDtpPGU7aSsrKXRoaXMucGFjayh0W2ldKX0sbi5wcm90b3R5cGUucGFja19pbnRlZ2VyPWZ1bmN0aW9uKHQpe2lmKC0zMjw9dCYmdDw9MTI3KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JnQpO2Vsc2UgaWYoMDw9dCYmdDw9MjU1KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjA0KSx0aGlzLnBhY2tfdWludDgodCk7ZWxzZSBpZigtMTI4PD10JiZ0PD0xMjcpdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMDgpLHRoaXMucGFja19pbnQ4KHQpO2Vsc2UgaWYoMDw9dCYmdDw9NjU1MzUpdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMDUpLHRoaXMucGFja191aW50MTYodCk7ZWxzZSBpZigtMzI3Njg8PXQmJnQ8PTMyNzY3KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjA5KSx0aGlzLnBhY2tfaW50MTYodCk7ZWxzZSBpZigwPD10JiZ0PD00Mjk0OTY3Mjk1KXRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjA2KSx0aGlzLnBhY2tfdWludDMyKHQpO2Vsc2UgaWYoLTIxNDc0ODM2NDg8PXQmJnQ8PTIxNDc0ODM2NDcpdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMTApLHRoaXMucGFja19pbnQzMih0KTtlbHNlIGlmKC0weDgwMDAwMDAwMDAwMDAwMDA8PXQmJnQ8PTB4ODAwMDAwMDAwMDAwMDAwMCl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIxMSksdGhpcy5wYWNrX2ludDY0KHQpO2Vsc2V7aWYoISgwPD10JiZ0PD0weDEwMDAwMDAwMDAwMDAwMDAwKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXJcIik7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMDcpLHRoaXMucGFja191aW50NjQodCl9fSxuLnByb3RvdHlwZS5wYWNrX2RvdWJsZT1mdW5jdGlvbih0KXt2YXIgZT0wO3Q8MCYmKGU9MSx0PS10KTt2YXIgaT1NYXRoLmZsb29yKE1hdGgubG9nKHQpL01hdGguTE4yKSxyPXQvTWF0aC5wb3coMixpKS0xLG49TWF0aC5mbG9vcihyKk1hdGgucG93KDIsNTIpKSx1PU1hdGgucG93KDIsMzIpLGE9ZTw8MzF8aSsxMDIzPDwyMHxuL3UmMTA0ODU3NSxwPW4ldTt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIwMyksdGhpcy5wYWNrX2ludDMyKGEpLHRoaXMucGFja19pbnQzMihwKX0sbi5wcm90b3R5cGUucGFja19vYmplY3Q9ZnVuY3Rpb24odCl7dmFyIGU9T2JqZWN0LmtleXModCkubGVuZ3RoO2lmKGU8PTE1KXRoaXMucGFja191aW50OCgxMjgrZSk7ZWxzZSBpZihlPD02NTUzNSl0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDIyMiksdGhpcy5wYWNrX3VpbnQxNihlKTtlbHNle2lmKCEoZTw9NDI5NDk2NzI5NSkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsZW5ndGhcIik7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyMjMpLHRoaXMucGFja191aW50MzIoZSl9Zm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmKHRoaXMucGFjayhpKSx0aGlzLnBhY2sodFtpXSkpfSxuLnByb3RvdHlwZS5wYWNrX3VpbnQ4PWZ1bmN0aW9uKHQpe3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodCl9LG4ucHJvdG90eXBlLnBhY2tfdWludDE2PWZ1bmN0aW9uKHQpe3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodD4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmdCl9LG4ucHJvdG90eXBlLnBhY2tfdWludDMyPWZ1bmN0aW9uKHQpe3ZhciBlPTQyOTQ5NjcyOTUmdDt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg0Mjc4MTkwMDgwJmUpPj4+MjQpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDE2NzExNjgwJmUpPj4+MTYpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDY1MjgwJmUpPj4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmZSl9LG4ucHJvdG90eXBlLnBhY2tfdWludDY0PWZ1bmN0aW9uKHQpe3ZhciBlPXQvTWF0aC5wb3coMiwzMiksaT10JU1hdGgucG93KDIsMzIpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDQyNzgxOTAwODAmZSk+Pj4yNCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoMTY3MTE2ODAmZSk+Pj4xNiksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNjUyODAmZSk+Pj44KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDI1NSZlKSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg0Mjc4MTkwMDgwJmkpPj4+MjQpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDE2NzExNjgwJmkpPj4+MTYpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDY1MjgwJmkpPj4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmaSl9LG4ucHJvdG90eXBlLnBhY2tfaW50OD1mdW5jdGlvbih0KXt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDI1NSZ0KX0sbi5wcm90b3R5cGUucGFja19pbnQxNj1mdW5jdGlvbih0KXt0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg2NTI4MCZ0KT4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmdCl9LG4ucHJvdG90eXBlLnBhY2tfaW50MzI9ZnVuY3Rpb24odCl7dGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCh0Pj4+MjQmMjU1KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCgxNjcxMTY4MCZ0KT4+PjE2KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg2NTI4MCZ0KT4+PjgpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMjU1JnQpfSxuLnByb3RvdHlwZS5wYWNrX2ludDY0PWZ1bmN0aW9uKHQpe3ZhciBlPU1hdGguZmxvb3IodC9NYXRoLnBvdygyLDMyKSksaT10JU1hdGgucG93KDIsMzIpO3RoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDQyNzgxOTAwODAmZSk+Pj4yNCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoMTY3MTE2ODAmZSk+Pj4xNiksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoNjUyODAmZSk+Pj44KSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDI1NSZlKSx0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKCg0Mjc4MTkwMDgwJmkpPj4+MjQpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDE2NzExNjgwJmkpPj4+MTYpLHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKDY1MjgwJmkpPj4+OCksdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgyNTUmaSl9O1xufSx7XCIuL2J1ZmZlcmJ1aWxkZXJcIjpcInZIbzFcIn1dLFwic1h0VlwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG5cInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9ITAsZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb249d2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbnx8d2luZG93Lm1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbixleHBvcnRzLlJUQ1BlZXJDb25uZWN0aW9uPXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbnx8d2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9ufHx3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24sZXhwb3J0cy5SVENJY2VDYW5kaWRhdGU9d2luZG93LlJUQ0ljZUNhbmRpZGF0ZXx8d2luZG93Lm1velJUQ0ljZUNhbmRpZGF0ZTtcbn0se31dLFwiQkhYZlwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG52YXIgZ2xvYmFsID0gYXJndW1lbnRzWzNdO1xudmFyIGU9YXJndW1lbnRzWzNdLHQ9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07ZXhwb3J0cy5fX2VzTW9kdWxlPSEwO3ZhciByPXtpY2VTZXJ2ZXJzOlt7dXJsczpcInN0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDJcIn1dfSxvPTEsbj10KHJlcXVpcmUoXCJqcy1iaW5hcnlwYWNrXCIpKSxhPXJlcXVpcmUoXCIuL2FkYXB0ZXJcIik7ZXhwb3J0cy51dGlsPXtub29wOmZ1bmN0aW9uKCl7fSxDTE9VRF9IT1NUOlwiMC5wZWVyanMuY29tXCIsQ0xPVURfUE9SVDo0NDMsY2h1bmtlZEJyb3dzZXJzOntDaHJvbWU6MX0sY2h1bmtlZE1UVToxNjMwMCxsb2dMZXZlbDowLHNldExvZ0xldmVsOmZ1bmN0aW9uKGUpe3ZhciB0PXBhcnNlSW50KGUsMTApO2lzTmFOKHBhcnNlSW50KGUsMTApKT9leHBvcnRzLnV0aWwubG9nTGV2ZWw9ZT8zOjA6ZXhwb3J0cy51dGlsLmxvZ0xldmVsPXQsZXhwb3J0cy51dGlsLmxvZz1leHBvcnRzLnV0aWwud2Fybj1leHBvcnRzLnV0aWwuZXJyb3I9ZXhwb3J0cy51dGlsLm5vb3AsZXhwb3J0cy51dGlsLmxvZ0xldmVsPjAmJihleHBvcnRzLnV0aWwuZXJyb3I9ZXhwb3J0cy51dGlsLl9wcmludFdpdGgoXCJFUlJPUlwiKSksZXhwb3J0cy51dGlsLmxvZ0xldmVsPjEmJihleHBvcnRzLnV0aWwud2Fybj1leHBvcnRzLnV0aWwuX3ByaW50V2l0aChcIldBUk5JTkdcIikpLGV4cG9ydHMudXRpbC5sb2dMZXZlbD4yJiYoZXhwb3J0cy51dGlsLmxvZz1leHBvcnRzLnV0aWwuX3ByaW50KX0sc2V0TG9nRnVuY3Rpb246ZnVuY3Rpb24oZSl7ZS5jb25zdHJ1Y3RvciE9PUZ1bmN0aW9uP2V4cG9ydHMudXRpbC53YXJuKFwiVGhlIGxvZyBmdW5jdGlvbiB5b3UgcGFzc2VkIGluIGlzIG5vdCBhIGZ1bmN0aW9uLiBEZWZhdWx0aW5nIHRvIHJlZ3VsYXIgbG9ncy5cIik6ZXhwb3J0cy51dGlsLl9wcmludD1lfSxfcHJpbnRXaXRoOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7dC51bnNoaWZ0KGUpLGV4cG9ydHMudXRpbC5fcHJpbnQuYXBwbHkoZXhwb3J0cy51dGlsLHQpfX0sX3ByaW50OmZ1bmN0aW9uKCl7dmFyIGU9ITEsdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO3QudW5zaGlmdChcIlBlZXJKUzogXCIpO2Zvcih2YXIgcj0wLG89dC5sZW5ndGg7cjxvO3IrKyl0W3JdaW5zdGFuY2VvZiBFcnJvciYmKHRbcl09XCIoXCIrdFtyXS5uYW1lK1wiKSBcIit0W3JdLm1lc3NhZ2UsZT0hMCk7ZT9jb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsdCk6Y29uc29sZS5sb2cuYXBwbHkoY29uc29sZSx0KX0sZGVmYXVsdENvbmZpZzpyLGJyb3dzZXI6d2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uP1wiRmlyZWZveFwiOndpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbj9cIkNocm9tZVwiOndpbmRvdy5SVENQZWVyQ29ubmVjdGlvbj9cIlN1cHBvcnRlZFwiOlwiVW5zdXBwb3J0ZWRcIixzdXBwb3J0czpmdW5jdGlvbigpe2lmKHZvaWQgMD09PWEuUlRDUGVlckNvbm5lY3Rpb24pcmV0dXJue307dmFyIGUsdCxvPSEwLG49ITAsaT0hMSx1PSExLGw9ISF3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb247dHJ5e2U9bmV3IGEuUlRDUGVlckNvbm5lY3Rpb24ocix7b3B0aW9uYWw6W3tSdHBEYXRhQ2hhbm5lbHM6ITB9XX0pfWNhdGNoKGMpe289ITEsbj0hMX1pZihvKXRyeXt0PWUuY3JlYXRlRGF0YUNoYW5uZWwoXCJfUEVFUkpTVEVTVFwiKX1jYXRjaChjKXtvPSExfWlmKG8pe3RyeXt0LmJpbmFyeVR5cGU9XCJibG9iXCIsaT0hMH1jYXRjaChjKXt9dmFyIHM9bmV3IGEuUlRDUGVlckNvbm5lY3Rpb24ocix7fSk7dHJ5e3U9cy5jcmVhdGVEYXRhQ2hhbm5lbChcIl9QRUVSSlNSRUxJQUJMRVRFU1RcIix7fSkucmVsaWFibGV9Y2F0Y2goYyl7fXMuY2xvc2UoKX1yZXR1cm4gbiYmKG49ISFlLmFkZFN0cmVhbSksZSYmZS5jbG9zZSgpLHthdWRpb1ZpZGVvOm4sZGF0YTpvLGJpbmFyeUJsb2I6aSxiaW5hcnk6dSxyZWxpYWJsZTp1LHNjdHA6dSxvbm5lZ290aWF0aW9ubmVlZGVkOmx9fSgpLHZhbGlkYXRlSWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWV8fC9eW0EtWmEtejAtOV0rKD86WyBfLV1bQS1aYS16MC05XSspKiQvLmV4ZWMoZSl9LHZhbGlkYXRlS2V5OmZ1bmN0aW9uKGUpe3JldHVybiFlfHwvXltBLVphLXowLTldKyg/OlsgXy1dW0EtWmEtejAtOV0rKSokLy5leGVjKGUpfSxkZWJ1ZzohMSxpbmhlcml0czpmdW5jdGlvbihlLHQpe2Uuc3VwZXJfPXQsZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSl9LGV4dGVuZDpmdW5jdGlvbihlLHQpe2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihlW3JdPXRbcl0pO3JldHVybiBlfSxwYWNrOm4uZGVmYXVsdC5wYWNrLHVucGFjazpuLmRlZmF1bHQudW5wYWNrLGxvZzpmdW5jdGlvbigpe2lmKGV4cG9ydHMudXRpbC5kZWJ1Zyl7dmFyIGU9ITEsdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO3QudW5zaGlmdChcIlBlZXJKUzogXCIpO2Zvcih2YXIgcj0wLG89dC5sZW5ndGg7cjxvO3IrKyl0W3JdaW5zdGFuY2VvZiBFcnJvciYmKHRbcl09XCIoXCIrdFtyXS5uYW1lK1wiKSBcIit0W3JdLm1lc3NhZ2UsZT0hMCk7ZT9jb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsdCk6Y29uc29sZS5sb2cuYXBwbHkoY29uc29sZSx0KX19LHNldFplcm9UaW1lb3V0OmZ1bmN0aW9uKGUpe3ZhciB0PVtdLHI9XCJ6ZXJvLXRpbWVvdXQtbWVzc2FnZVwiO2Z1bmN0aW9uIG8obyl7by5zb3VyY2U9PWUmJm8uZGF0YT09ciYmKG8uc3RvcFByb3BhZ2F0aW9uJiZvLnN0b3BQcm9wYWdhdGlvbigpLHQubGVuZ3RoJiZ0LnNoaWZ0KCkoKSl9cmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbywhMCk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLG8pLGZ1bmN0aW9uKG8pe3QucHVzaChvKSxlLnBvc3RNZXNzYWdlKHIsXCIqXCIpfX0od2luZG93KSxjaHVuazpmdW5jdGlvbihlKXtmb3IodmFyIHQscj1bXSxuPWUuc2l6ZSxhPXQ9MCxpPU1hdGguY2VpbChuL2V4cG9ydHMudXRpbC5jaHVua2VkTVRVKTthPG47KXt2YXIgdT1NYXRoLm1pbihuLGErZXhwb3J0cy51dGlsLmNodW5rZWRNVFUpLGw9ZS5zbGljZShhLHUpLHM9e19fcGVlckRhdGE6byxuOnQsZGF0YTpsLHRvdGFsOml9O3IucHVzaChzKSxhPXUsdCs9MX1yZXR1cm4gbys9MSxyfSxibG9iVG9BcnJheUJ1ZmZlcjpmdW5jdGlvbihlLHQpe3ZhciByPW5ldyBGaWxlUmVhZGVyO3Iub25sb2FkPWZ1bmN0aW9uKGUpe3QoZS50YXJnZXQucmVzdWx0KX0sci5yZWFkQXNBcnJheUJ1ZmZlcihlKX0sYmxvYlRvQmluYXJ5U3RyaW5nOmZ1bmN0aW9uKGUsdCl7dmFyIHI9bmV3IEZpbGVSZWFkZXI7ci5vbmxvYWQ9ZnVuY3Rpb24oZSl7dChlLnRhcmdldC5yZXN1bHQpfSxyLnJlYWRBc0JpbmFyeVN0cmluZyhlKX0sYmluYXJ5U3RyaW5nVG9BcnJheUJ1ZmZlcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpLHI9MDtyPGUubGVuZ3RoO3IrKyl0W3JdPTI1NSZlLmNoYXJDb2RlQXQocik7cmV0dXJuIHQuYnVmZmVyfSxyYW5kb21Ub2tlbjpmdW5jdGlvbigpe3JldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMil9LGlzU2VjdXJlOmZ1bmN0aW9uKCl7cmV0dXJuXCJodHRwczpcIj09PWxvY2F0aW9uLnByb3RvY29sfX07XG59LHtcImpzLWJpbmFyeXBhY2tcIjpcImxIT2NcIixcIi4vYWRhcHRlclwiOlwic1h0VlwifV0sXCIySkpsXCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcblwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlLG4pe3RoaXMuZm49dCx0aGlzLmNvbnRleHQ9ZSx0aGlzLm9uY2U9bnx8ITF9ZnVuY3Rpb24gZSgpe31lLnByb3RvdHlwZS5fZXZlbnRzPXZvaWQgMCxlLnByb3RvdHlwZS5saXN0ZW5lcnM9ZnVuY3Rpb24odCl7aWYoIXRoaXMuX2V2ZW50c3x8IXRoaXMuX2V2ZW50c1t0XSlyZXR1cm5bXTtpZih0aGlzLl9ldmVudHNbdF0uZm4pcmV0dXJuW3RoaXMuX2V2ZW50c1t0XS5mbl07Zm9yKHZhciBlPTAsbj10aGlzLl9ldmVudHNbdF0ubGVuZ3RoLHM9bmV3IEFycmF5KG4pO2U8bjtlKyspc1tlXT10aGlzLl9ldmVudHNbdF1bZV0uZm47cmV0dXJuIHN9LGUucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24odCxlLG4scyxyLGkpe2lmKCF0aGlzLl9ldmVudHN8fCF0aGlzLl9ldmVudHNbdF0pcmV0dXJuITE7dmFyIG8saCxmPXRoaXMuX2V2ZW50c1t0XSx2PWFyZ3VtZW50cy5sZW5ndGg7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZi5mbil7c3dpdGNoKGYub25jZSYmdGhpcy5yZW1vdmVMaXN0ZW5lcih0LGYuZm4sITApLHYpe2Nhc2UgMTpyZXR1cm4gZi5mbi5jYWxsKGYuY29udGV4dCksITA7Y2FzZSAyOnJldHVybiBmLmZuLmNhbGwoZi5jb250ZXh0LGUpLCEwO2Nhc2UgMzpyZXR1cm4gZi5mbi5jYWxsKGYuY29udGV4dCxlLG4pLCEwO2Nhc2UgNDpyZXR1cm4gZi5mbi5jYWxsKGYuY29udGV4dCxlLG4scyksITA7Y2FzZSA1OnJldHVybiBmLmZuLmNhbGwoZi5jb250ZXh0LGUsbixzLHIpLCEwO2Nhc2UgNjpyZXR1cm4gZi5mbi5jYWxsKGYuY29udGV4dCxlLG4scyxyLGkpLCEwfWZvcihoPTEsbz1uZXcgQXJyYXkodi0xKTtoPHY7aCsrKW9baC0xXT1hcmd1bWVudHNbaF07Zi5mbi5hcHBseShmLmNvbnRleHQsbyl9ZWxzZXt2YXIgYyxhPWYubGVuZ3RoO2ZvcihoPTA7aDxhO2grKylzd2l0Y2goZltoXS5vbmNlJiZ0aGlzLnJlbW92ZUxpc3RlbmVyKHQsZltoXS5mbiwhMCksdil7Y2FzZSAxOmZbaF0uZm4uY2FsbChmW2hdLmNvbnRleHQpO2JyZWFrO2Nhc2UgMjpmW2hdLmZuLmNhbGwoZltoXS5jb250ZXh0LGUpO2JyZWFrO2Nhc2UgMzpmW2hdLmZuLmNhbGwoZltoXS5jb250ZXh0LGUsbik7YnJlYWs7ZGVmYXVsdDppZighbylmb3IoYz0xLG89bmV3IEFycmF5KHYtMSk7Yzx2O2MrKylvW2MtMV09YXJndW1lbnRzW2NdO2ZbaF0uZm4uYXBwbHkoZltoXS5jb250ZXh0LG8pfX1yZXR1cm4hMH0sZS5wcm90b3R5cGUub249ZnVuY3Rpb24oZSxuLHMpe3ZhciByPW5ldyB0KG4sc3x8dGhpcyk7cmV0dXJuIHRoaXMuX2V2ZW50c3x8KHRoaXMuX2V2ZW50cz17fSksdGhpcy5fZXZlbnRzW2VdP3RoaXMuX2V2ZW50c1tlXS5mbj90aGlzLl9ldmVudHNbZV09W3RoaXMuX2V2ZW50c1tlXSxyXTp0aGlzLl9ldmVudHNbZV0ucHVzaChyKTp0aGlzLl9ldmVudHNbZV09cix0aGlzfSxlLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGUsbixzKXt2YXIgcj1uZXcgdChuLHN8fHRoaXMsITApO3JldHVybiB0aGlzLl9ldmVudHN8fCh0aGlzLl9ldmVudHM9e30pLHRoaXMuX2V2ZW50c1tlXT90aGlzLl9ldmVudHNbZV0uZm4/dGhpcy5fZXZlbnRzW2VdPVt0aGlzLl9ldmVudHNbZV0scl06dGhpcy5fZXZlbnRzW2VdLnB1c2gocik6dGhpcy5fZXZlbnRzW2VdPXIsdGhpc30sZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24odCxlLG4pe2lmKCF0aGlzLl9ldmVudHN8fCF0aGlzLl9ldmVudHNbdF0pcmV0dXJuIHRoaXM7dmFyIHM9dGhpcy5fZXZlbnRzW3RdLHI9W107aWYoZSYmKHMuZm4mJihzLmZuIT09ZXx8biYmIXMub25jZSkmJnIucHVzaChzKSwhcy5mbikpZm9yKHZhciBpPTAsbz1zLmxlbmd0aDtpPG87aSsrKShzW2ldLmZuIT09ZXx8biYmIXNbaV0ub25jZSkmJnIucHVzaChzW2ldKTtyZXR1cm4gci5sZW5ndGg/dGhpcy5fZXZlbnRzW3RdPTE9PT1yLmxlbmd0aD9yWzBdOnI6ZGVsZXRlIHRoaXMuX2V2ZW50c1t0XSx0aGlzfSxlLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2V2ZW50cz8odD9kZWxldGUgdGhpcy5fZXZlbnRzW3RdOnRoaXMuX2V2ZW50cz17fSx0aGlzKTp0aGlzfSxlLnByb3RvdHlwZS5vZmY9ZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXI9ZS5wcm90b3R5cGUub24sZS5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGUuRXZlbnRFbWl0dGVyPWUsZS5FdmVudEVtaXR0ZXIyPWUsZS5FdmVudEVtaXR0ZXIzPWUsbW9kdWxlLmV4cG9ydHM9ZTtcbn0se31dLFwid0psdlwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG5cInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9ITA7dmFyIHQ9cmVxdWlyZShcIi4vdXRpbFwiKSxlPXJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpO2Z1bmN0aW9uIHModCxpLG8sbixyLGgpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHMpKXJldHVybiBuZXcgcyh0LGksbyxuLHIsaCk7aD1ofHxvLGUuRXZlbnRFbWl0dGVyLmNhbGwodGhpcyksdGhpcy5kaXNjb25uZWN0ZWQ9ITEsdGhpcy5fcXVldWU9W107dmFyIGE9dD9cImh0dHBzOi8vXCI6XCJodHRwOi8vXCIsdT10P1wid3NzOi8vXCI6XCJ3czovL1wiO3RoaXMuX2h0dHBVcmw9YStpK1wiOlwiK28rbityLHRoaXMuX3dzVXJsPXUraStcIjpcIitoK24rXCJwZWVyanM/a2V5PVwiK3J9ZXhwb3J0cy5Tb2NrZXQ9cyx0LnV0aWwuaW5oZXJpdHMocyxlLkV2ZW50RW1pdHRlcikscy5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24odCxlKXt0aGlzLmlkPXQsdGhpcy5faHR0cFVybCs9XCIvXCIrdCtcIi9cIitlLHRoaXMuX3dzVXJsKz1cIiZpZD1cIit0K1wiJnRva2VuPVwiK2UsdGhpcy5fc3RhcnRYaHJTdHJlYW0oKSx0aGlzLl9zdGFydFdlYlNvY2tldCgpfSxzLnByb3RvdHlwZS5fc3RhcnRXZWJTb2NrZXQ9ZnVuY3Rpb24oZSl7dmFyIHM9dGhpczt0aGlzLl9zb2NrZXR8fCh0aGlzLl9zb2NrZXQ9bmV3IFdlYlNvY2tldCh0aGlzLl93c1VybCksdGhpcy5fc29ja2V0Lm9ubWVzc2FnZT1mdW5jdGlvbihlKXt0cnl7dmFyIGk9SlNPTi5wYXJzZShlLmRhdGEpfWNhdGNoKG8pe3JldHVybiB2b2lkIHQudXRpbC5sb2coXCJJbnZhbGlkIHNlcnZlciBtZXNzYWdlXCIsZS5kYXRhKX1zLmVtaXQoXCJtZXNzYWdlXCIsaSl9LHRoaXMuX3NvY2tldC5vbmNsb3NlPWZ1bmN0aW9uKGUpe3QudXRpbC5sb2coXCJTb2NrZXQgY2xvc2VkLlwiKSxzLmRpc2Nvbm5lY3RlZD0hMCxzLmVtaXQoXCJkaXNjb25uZWN0ZWRcIil9LHRoaXMuX3NvY2tldC5vbm9wZW49ZnVuY3Rpb24oKXtzLl90aW1lb3V0JiYoY2xlYXJUaW1lb3V0KHMuX3RpbWVvdXQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtzLl9odHRwLmFib3J0KCkscy5faHR0cD1udWxsfSw1ZTMpKSxzLl9zZW5kUXVldWVkTWVzc2FnZXMoKSx0LnV0aWwubG9nKFwiU29ja2V0IG9wZW5cIil9KX0scy5wcm90b3R5cGUuX3N0YXJ0WGhyU3RyZWFtPWZ1bmN0aW9uKGUpe3RyeXt2YXIgcz10aGlzO3RoaXMuX2h0dHA9bmV3IFhNTEh0dHBSZXF1ZXN0LHRoaXMuX2h0dHAuX2luZGV4PTEsdGhpcy5faHR0cC5fc3RyZWFtSW5kZXg9ZXx8MCx0aGlzLl9odHRwLm9wZW4oXCJwb3N0XCIsdGhpcy5faHR0cFVybCtcIi9pZD9pPVwiK3RoaXMuX2h0dHAuX3N0cmVhbUluZGV4LCEwKSx0aGlzLl9odHRwLm9uZXJyb3I9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocy5fdGltZW91dCkscy5lbWl0KFwiZGlzY29ubmVjdGVkXCIpfSx0aGlzLl9odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezI9PXRoaXMucmVhZHlTdGF0ZSYmdGhpcy5vbGQ/KHRoaXMub2xkLmFib3J0KCksZGVsZXRlIHRoaXMub2xkKTp0aGlzLnJlYWR5U3RhdGU+MiYmMjAwPT09dGhpcy5zdGF0dXMmJnRoaXMucmVzcG9uc2VUZXh0JiZzLl9oYW5kbGVTdHJlYW0odGhpcyl9LHRoaXMuX2h0dHAuc2VuZChudWxsKSx0aGlzLl9zZXRIVFRQVGltZW91dCgpfWNhdGNoKGkpe3QudXRpbC5sb2coXCJYTUxIdHRwUmVxdWVzdCBub3QgYXZhaWxhYmxlOyBkZWZhdWx0aW5nIHRvIFdlYlNvY2tldHNcIil9fSxzLnByb3RvdHlwZS5faGFuZGxlU3RyZWFtPWZ1bmN0aW9uKGUpe3ZhciBzPWUucmVzcG9uc2VUZXh0LnNwbGl0KFwiXFxuXCIpO2lmKGUuX2J1ZmZlcilmb3IoO2UuX2J1ZmZlci5sZW5ndGg+MDspe3ZhciBpPWUuX2J1ZmZlci5zaGlmdCgpLG89c1tpXTt0cnl7bz1KU09OLnBhcnNlKG8pfWNhdGNoKHIpe2UuX2J1ZmZlci5zaGlmdChpKTticmVha310aGlzLmVtaXQoXCJtZXNzYWdlXCIsbyl9dmFyIG49c1tlLl9pbmRleF07aWYobilpZihlLl9pbmRleCs9MSxlLl9pbmRleD09PXMubGVuZ3RoKWUuX2J1ZmZlcnx8KGUuX2J1ZmZlcj1bXSksZS5fYnVmZmVyLnB1c2goZS5faW5kZXgtMSk7ZWxzZXt0cnl7bj1KU09OLnBhcnNlKG4pfWNhdGNoKHIpe3JldHVybiB2b2lkIHQudXRpbC5sb2coXCJJbnZhbGlkIHNlcnZlciBtZXNzYWdlXCIsbil9dGhpcy5lbWl0KFwibWVzc2FnZVwiLG4pfX0scy5wcm90b3R5cGUuX3NldEhUVFBUaW1lb3V0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT10Ll9odHRwO3QuX3dzT3BlbigpP2UuYWJvcnQoKToodC5fc3RhcnRYaHJTdHJlYW0oZS5fc3RyZWFtSW5kZXgrMSksdC5faHR0cC5vbGQ9ZSl9LDI1ZTMpfSxzLnByb3RvdHlwZS5fd3NPcGVuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NvY2tldCYmMT09dGhpcy5fc29ja2V0LnJlYWR5U3RhdGV9LHMucHJvdG90eXBlLl9zZW5kUXVldWVkTWVzc2FnZXM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPXRoaXMuX3F1ZXVlLmxlbmd0aDt0PGU7dCs9MSl0aGlzLnNlbmQodGhpcy5fcXVldWVbdF0pfSxzLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKHQpe2lmKCF0aGlzLmRpc2Nvbm5lY3RlZClpZih0aGlzLmlkKWlmKHQudHlwZSl7dmFyIGU9SlNPTi5zdHJpbmdpZnkodCk7aWYodGhpcy5fd3NPcGVuKCkpdGhpcy5fc29ja2V0LnNlbmQoZSk7ZWxzZXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3QsaT10aGlzLl9odHRwVXJsK1wiL1wiK3QudHlwZS50b0xvd2VyQ2FzZSgpO3Mub3BlbihcInBvc3RcIixpLCEwKSxzLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIikscy5zZW5kKGUpfX1lbHNlIHRoaXMuZW1pdChcImVycm9yXCIsXCJJbnZhbGlkIG1lc3NhZ2VcIik7ZWxzZSB0aGlzLl9xdWV1ZS5wdXNoKHQpfSxzLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpeyF0aGlzLmRpc2Nvbm5lY3RlZCYmdGhpcy5fd3NPcGVuKCkmJih0aGlzLl9zb2NrZXQuY2xvc2UoKSx0aGlzLmRpc2Nvbm5lY3RlZD0hMCl9O1xufSx7XCIuL3V0aWxcIjpcIkJIWGZcIixcImV2ZW50ZW1pdHRlcjNcIjpcIjJKSmxcIn1dLFwiSENkWFwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG5cInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9ITA7dmFyIGU9cmVxdWlyZShcIi4vdXRpbFwiKSx0PXJlcXVpcmUoXCIuL2FkYXB0ZXJcIik7ZnVuY3Rpb24gbyhlLHQpe1wiYWRkVHJhY2tcImluIHQ/ZS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKG8pe3QuYWRkVHJhY2sobyxlKX0pOlwiYWRkU3RyZWFtXCJpbiB0JiZ0LmFkZFN0cmVhbShlKX1leHBvcnRzLk5lZ290aWF0b3I9e3Bjczp7ZGF0YTp7fSxtZWRpYTp7fX0scXVldWU6W119LGV4cG9ydHMuTmVnb3RpYXRvci5faWRQcmVmaXg9XCJwY19cIixleHBvcnRzLk5lZ290aWF0b3Iuc3RhcnRDb25uZWN0aW9uPWZ1bmN0aW9uKHQsaSl7dmFyIHI9ZXhwb3J0cy5OZWdvdGlhdG9yLl9nZXRQZWVyQ29ubmVjdGlvbih0LGkpO2lmKHQucGM9dC5wZWVyQ29ubmVjdGlvbj1yLFwibWVkaWFcIj09PXQudHlwZSYmaS5fc3RyZWFtJiZvKGkuX3N0cmVhbSxyKSxpLm9yaWdpbmF0b3Ipe2lmKFwiZGF0YVwiPT09dC50eXBlKXt2YXIgbj17fTtlLnV0aWwuc3VwcG9ydHMuc2N0cHx8KG49e3JlbGlhYmxlOmkucmVsaWFibGV9KTt2YXIgYT1yLmNyZWF0ZURhdGFDaGFubmVsKHQubGFiZWwsbik7dC5pbml0aWFsaXplKGEpfWV4cG9ydHMuTmVnb3RpYXRvci5fbWFrZU9mZmVyKHQpfWVsc2UgZXhwb3J0cy5OZWdvdGlhdG9yLmhhbmRsZVNEUChcIk9GRkVSXCIsdCxpLnNkcCl9LGV4cG9ydHMuTmVnb3RpYXRvci5fZ2V0UGVlckNvbm5lY3Rpb249ZnVuY3Rpb24odCxvKXtleHBvcnRzLk5lZ290aWF0b3IucGNzW3QudHlwZV18fGUudXRpbC5lcnJvcih0LnR5cGUrXCIgaXMgbm90IGEgdmFsaWQgY29ubmVjdGlvbiB0eXBlLiBNYXliZSB5b3Ugb3ZlcnJvZGUgdGhlIGB0eXBlYCBwcm9wZXJ0eSBzb21ld2hlcmUuXCIpLGV4cG9ydHMuTmVnb3RpYXRvci5wY3NbdC50eXBlXVt0LnBlZXJdfHwoZXhwb3J0cy5OZWdvdGlhdG9yLnBjc1t0LnR5cGVdW3QucGVlcl09e30pO3ZhciBpO2V4cG9ydHMuTmVnb3RpYXRvci5wY3NbdC50eXBlXVt0LnBlZXJdO3JldHVybiBvLnBjJiYoaT1leHBvcnRzLk5lZ290aWF0b3IucGNzW3QudHlwZV1bdC5wZWVyXVtvLnBjXSksaSYmXCJzdGFibGVcIj09PWkuc2lnbmFsaW5nU3RhdGV8fChpPWV4cG9ydHMuTmVnb3RpYXRvci5fc3RhcnRQZWVyQ29ubmVjdGlvbih0KSksaX0sZXhwb3J0cy5OZWdvdGlhdG9yLl9zdGFydFBlZXJDb25uZWN0aW9uPWZ1bmN0aW9uKG8pe2UudXRpbC5sb2coXCJDcmVhdGluZyBSVENQZWVyQ29ubmVjdGlvbi5cIik7dmFyIGk9ZXhwb3J0cy5OZWdvdGlhdG9yLl9pZFByZWZpeCtlLnV0aWwucmFuZG9tVG9rZW4oKSxyPXt9O1wiZGF0YVwiIT09by50eXBlfHxlLnV0aWwuc3VwcG9ydHMuc2N0cD9cIm1lZGlhXCI9PT1vLnR5cGUmJihyPXtvcHRpb25hbDpbe0R0bHNTcnRwS2V5QWdyZWVtZW50OiEwfV19KTpyPXtvcHRpb25hbDpbe1J0cERhdGFDaGFubmVsczohMH1dfTt2YXIgbj1uZXcgdC5SVENQZWVyQ29ubmVjdGlvbihvLnByb3ZpZGVyLm9wdGlvbnMuY29uZmlnLHIpO3JldHVybiBleHBvcnRzLk5lZ290aWF0b3IucGNzW28udHlwZV1bby5wZWVyXVtpXT1uLGV4cG9ydHMuTmVnb3RpYXRvci5fc2V0dXBMaXN0ZW5lcnMobyxuLGkpLG59LGV4cG9ydHMuTmVnb3RpYXRvci5fc2V0dXBMaXN0ZW5lcnM9ZnVuY3Rpb24odCxpLHIpe3ZhciBuPXQucGVlcixhPXQuaWQsYz10LnByb3ZpZGVyO2UudXRpbC5sb2coXCJMaXN0ZW5pbmcgZm9yIElDRSBjYW5kaWRhdGVzLlwiKSxpLm9uaWNlY2FuZGlkYXRlPWZ1bmN0aW9uKG8pe28uY2FuZGlkYXRlJiYoZS51dGlsLmxvZyhcIlJlY2VpdmVkIElDRSBjYW5kaWRhdGVzIGZvcjpcIix0LnBlZXIpLGMuc29ja2V0LnNlbmQoe3R5cGU6XCJDQU5ESURBVEVcIixwYXlsb2FkOntjYW5kaWRhdGU6by5jYW5kaWRhdGUsdHlwZTp0LnR5cGUsY29ubmVjdGlvbklkOnQuaWR9LGRzdDpufSkpfSxpLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7c3dpdGNoKGkuaWNlQ29ubmVjdGlvblN0YXRlKXtjYXNlXCJmYWlsZWRcIjplLnV0aWwubG9nKFwiaWNlQ29ubmVjdGlvblN0YXRlIGlzIGRpc2Nvbm5lY3RlZCwgY2xvc2luZyBjb25uZWN0aW9ucyB0byBcIituKSx0LmVtaXQoXCJlcnJvclwiLG5ldyBFcnJvcihcIk5lZ290aWF0aW9uIG9mIGNvbm5lY3Rpb24gdG8gXCIrbitcIiBmYWlsZWQuXCIpKSx0LmNsb3NlKCk7YnJlYWs7Y2FzZVwiZGlzY29ubmVjdGVkXCI6ZS51dGlsLmxvZyhcImljZUNvbm5lY3Rpb25TdGF0ZSBpcyBkaXNjb25uZWN0ZWQsIGNsb3NpbmcgY29ubmVjdGlvbnMgdG8gXCIrbik7YnJlYWs7Y2FzZVwiY29tcGxldGVkXCI6aS5vbmljZWNhbmRpZGF0ZT1lLnV0aWwubm9vcH19LGkub25pY2VjaGFuZ2U9aS5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSxlLnV0aWwubG9nKFwiTGlzdGVuaW5nIGZvciBkYXRhIGNoYW5uZWxcIiksaS5vbmRhdGFjaGFubmVsPWZ1bmN0aW9uKHQpe2UudXRpbC5sb2coXCJSZWNlaXZlZCBkYXRhIGNoYW5uZWxcIik7dmFyIG89dC5jaGFubmVsO2MuZ2V0Q29ubmVjdGlvbihuLGEpLmluaXRpYWxpemUobyl9LGUudXRpbC5sb2coXCJMaXN0ZW5pbmcgZm9yIHJlbW90ZSBzdHJlYW1cIiksaS5vbnRyYWNrPWZ1bmN0aW9uKHQpe2UudXRpbC5sb2coXCJSZWNlaXZlZCByZW1vdGUgc3RyZWFtXCIpO3ZhciBpPXQuc3RyZWFtc1swXSxyPWMuZ2V0Q29ubmVjdGlvbihuLGEpO1wibWVkaWFcIj09PXIudHlwZSYmbyhpLHIpfX0sZXhwb3J0cy5OZWdvdGlhdG9yLmNsZWFudXA9ZnVuY3Rpb24odCl7ZS51dGlsLmxvZyhcIkNsZWFuaW5nIHVwIFBlZXJDb25uZWN0aW9uIHRvIFwiK3QucGVlcik7dmFyIG89dC5wYztvJiYoby5yZWFkeVN0YXRlJiZcImNsb3NlZFwiIT09by5yZWFkeVN0YXRlfHxcImNsb3NlZFwiIT09by5zaWduYWxpbmdTdGF0ZSkmJihvLmNsb3NlKCksdC5wYz1udWxsKX0sZXhwb3J0cy5OZWdvdGlhdG9yLl9tYWtlT2ZmZXI9ZnVuY3Rpb24odCl7dmFyIG89dC5wYyxpPWZ1bmN0aW9uKGkpe2UudXRpbC5sb2coXCJDcmVhdGVkIG9mZmVyLlwiKSwhZS51dGlsLnN1cHBvcnRzLnNjdHAmJlwiZGF0YVwiPT09dC50eXBlJiZ0LnJlbGlhYmxlJiYoaS5zZHA9UmVsaWFibGUuaGlnaGVyQmFuZHdpZHRoU0RQKGkuc2RwKSk7by5zZXRMb2NhbERlc2NyaXB0aW9uKGkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS51dGlsLmxvZyhcIlNldCBsb2NhbERlc2NyaXB0aW9uOiBvZmZlclwiLFwiZm9yOlwiLHQucGVlciksdm9pZCB0LnByb3ZpZGVyLnNvY2tldC5zZW5kKHt0eXBlOlwiT0ZGRVJcIixwYXlsb2FkOntzZHA6aSx0eXBlOnQudHlwZSxsYWJlbDp0LmxhYmVsLGNvbm5lY3Rpb25JZDp0LmlkLHJlbGlhYmxlOnQucmVsaWFibGUsc2VyaWFsaXphdGlvbjp0LnNlcmlhbGl6YXRpb24sbWV0YWRhdGE6dC5tZXRhZGF0YSxicm93c2VyOmUudXRpbC5icm93c2VyfSxkc3Q6dC5wZWVyfSl9KS5jYXRjaChmdW5jdGlvbihvKXtyZXR1cm4gZnVuY3Rpb24obyl7XCJPcGVyYXRpb25FcnJvcjogRmFpbGVkIHRvIHNldCBsb2NhbCBvZmZlciBzZHA6IENhbGxlZCBpbiB3cm9uZyBzdGF0ZToga0hhdmVSZW1vdGVPZmZlclwiIT1vJiYodC5wcm92aWRlci5lbWl0RXJyb3IoXCJ3ZWJydGNcIixvKSxlLnV0aWwubG9nKFwiRmFpbGVkIHRvIHNldExvY2FsRGVzY3JpcHRpb24sIFwiLG8pKX0obyl9KX07by5jcmVhdGVPZmZlcih0Lm9wdGlvbnMuY29uc3RyYWludHMpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIGkoZSl9KS5jYXRjaChmdW5jdGlvbihvKXtyZXR1cm4gZnVuY3Rpb24obyl7dC5wcm92aWRlci5lbWl0RXJyb3IoXCJ3ZWJydGNcIixvKSxlLnV0aWwubG9nKFwiRmFpbGVkIHRvIGNyZWF0ZU9mZmVyLCBcIixvKX0obyl9KX0sZXhwb3J0cy5OZWdvdGlhdG9yLl9tYWtlQW5zd2VyPWZ1bmN0aW9uKHQpe3ZhciBvPXQucGMsaT1mdW5jdGlvbihpKXtlLnV0aWwubG9nKFwiQ3JlYXRlZCBhbnN3ZXIuXCIpLCFlLnV0aWwuc3VwcG9ydHMuc2N0cCYmXCJkYXRhXCI9PT10LnR5cGUmJnQucmVsaWFibGUmJihpLnNkcD1SZWxpYWJsZS5oaWdoZXJCYW5kd2lkdGhTRFAoaS5zZHApKTtvLnNldExvY2FsRGVzY3JpcHRpb24oaSkudGhlbihmdW5jdGlvbigpe3JldHVybiBlLnV0aWwubG9nKFwiU2V0IGxvY2FsRGVzY3JpcHRpb246IGFuc3dlclwiLFwiZm9yOlwiLHQucGVlciksdm9pZCB0LnByb3ZpZGVyLnNvY2tldC5zZW5kKHt0eXBlOlwiQU5TV0VSXCIscGF5bG9hZDp7c2RwOmksdHlwZTp0LnR5cGUsY29ubmVjdGlvbklkOnQuaWQsYnJvd3NlcjplLnV0aWwuYnJvd3Nlcn0sZHN0OnQucGVlcn0pfSkuY2F0Y2goZnVuY3Rpb24obyl7dC5wcm92aWRlci5lbWl0RXJyb3IoXCJ3ZWJydGNcIixvKSxlLnV0aWwubG9nKFwiRmFpbGVkIHRvIHNldExvY2FsRGVzY3JpcHRpb24sIFwiLG8pfSl9O28uY3JlYXRlQW5zd2VyKCkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gaShlKX0pLmNhdGNoKGZ1bmN0aW9uKG8pe3QucHJvdmlkZXIuZW1pdEVycm9yKFwid2VicnRjXCIsbyksZS51dGlsLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgYW5zd2VyLCBcIixvKX0pfSxleHBvcnRzLk5lZ290aWF0b3IuaGFuZGxlU0RQPWZ1bmN0aW9uKG8saSxyKXtyPW5ldyB0LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbihyKTt2YXIgbj1pLnBjO2UudXRpbC5sb2coXCJTZXR0aW5nIHJlbW90ZSBkZXNjcmlwdGlvblwiLHIpO24uc2V0UmVtb3RlRGVzY3JpcHRpb24ocikudGhlbihmdW5jdGlvbigpe3JldHVybiBlLnV0aWwubG9nKFwiU2V0IHJlbW90ZURlc2NyaXB0aW9uOlwiLG8sXCJmb3I6XCIsaS5wZWVyKSx2b2lkKFwiT0ZGRVJcIj09PW8mJmV4cG9ydHMuTmVnb3RpYXRvci5fbWFrZUFuc3dlcihpKSl9KS5jYXRjaChmdW5jdGlvbih0KXtpLnByb3ZpZGVyLmVtaXRFcnJvcihcIndlYnJ0Y1wiLHQpLGUudXRpbC5sb2coXCJGYWlsZWQgdG8gc2V0UmVtb3RlRGVzY3JpcHRpb24sIFwiLHQpfSl9LGV4cG9ydHMuTmVnb3RpYXRvci5oYW5kbGVDYW5kaWRhdGU9ZnVuY3Rpb24obyxpKXt2YXIgcj1pLmNhbmRpZGF0ZSxuPWkuc2RwTUxpbmVJbmRleDtvLnBjLmFkZEljZUNhbmRpZGF0ZShuZXcgdC5SVENJY2VDYW5kaWRhdGUoe3NkcE1MaW5lSW5kZXg6bixjYW5kaWRhdGU6cn0pKSxlLnV0aWwubG9nKFwiQWRkZWQgSUNFIGNhbmRpZGF0ZSBmb3I6XCIsby5wZWVyKX07XG59LHtcIi4vdXRpbFwiOlwiQkhYZlwiLFwiLi9hZGFwdGVyXCI6XCJzWHRWXCJ9XSxcImRiSFBcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xuXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPSEwO3ZhciB0PXJlcXVpcmUoXCIuL3V0aWxcIiksZT1yZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKSxpPXJlcXVpcmUoXCIuL25lZ290aWF0b3JcIik7ZnVuY3Rpb24gbyhzLGEscil7aWYoISh0aGlzIGluc3RhbmNlb2YgbykpcmV0dXJuIG5ldyBvKHMsYSxyKTtlLkV2ZW50RW1pdHRlci5jYWxsKHRoaXMpLHRoaXMub3B0aW9ucz10LnV0aWwuZXh0ZW5kKHt9LHIpLHRoaXMub3Blbj0hMSx0aGlzLnR5cGU9XCJtZWRpYVwiLHRoaXMucGVlcj1zLHRoaXMucHJvdmlkZXI9YSx0aGlzLm1ldGFkYXRhPXRoaXMub3B0aW9ucy5tZXRhZGF0YSx0aGlzLmxvY2FsU3RyZWFtPXRoaXMub3B0aW9ucy5fc3RyZWFtLHRoaXMuaWQ9dGhpcy5vcHRpb25zLmNvbm5lY3Rpb25JZHx8by5faWRQcmVmaXgrdC51dGlsLnJhbmRvbVRva2VuKCksdGhpcy5sb2NhbFN0cmVhbSYmaS5OZWdvdGlhdG9yLnN0YXJ0Q29ubmVjdGlvbih0aGlzLHtfc3RyZWFtOnRoaXMubG9jYWxTdHJlYW0sb3JpZ2luYXRvcjohMH0pfWV4cG9ydHMuTWVkaWFDb25uZWN0aW9uPW8sdC51dGlsLmluaGVyaXRzKG8sZS5FdmVudEVtaXR0ZXIpLG8uX2lkUHJlZml4PVwibWNfXCIsby5wcm90b3R5cGUuYWRkU3RyZWFtPWZ1bmN0aW9uKGUpe3QudXRpbC5sb2coXCJSZWNlaXZpbmcgc3RyZWFtXCIsZSksdGhpcy5yZW1vdGVTdHJlYW09ZSx0aGlzLmVtaXQoXCJzdHJlYW1cIixlKX0sby5wcm90b3R5cGUuaGFuZGxlTWVzc2FnZT1mdW5jdGlvbihlKXt2YXIgbz1lLnBheWxvYWQ7c3dpdGNoKGUudHlwZSl7Y2FzZVwiQU5TV0VSXCI6aS5OZWdvdGlhdG9yLmhhbmRsZVNEUChlLnR5cGUsdGhpcyxvLnNkcCksdGhpcy5vcGVuPSEwO2JyZWFrO2Nhc2VcIkNBTkRJREFURVwiOmkuTmVnb3RpYXRvci5oYW5kbGVDYW5kaWRhdGUodGhpcyxvLmNhbmRpZGF0ZSk7YnJlYWs7ZGVmYXVsdDp0LnV0aWwud2FybihcIlVucmVjb2duaXplZCBtZXNzYWdlIHR5cGU6XCIsZS50eXBlLFwiZnJvbSBwZWVyOlwiLHRoaXMucGVlcil9fSxvLnByb3RvdHlwZS5hbnN3ZXI9ZnVuY3Rpb24oZSl7aWYodGhpcy5sb2NhbFN0cmVhbSl0LnV0aWwud2FybihcIkxvY2FsIHN0cmVhbSBhbHJlYWR5IGV4aXN0cyBvbiB0aGlzIE1lZGlhQ29ubmVjdGlvbi4gQXJlIHlvdSBhbnN3ZXJpbmcgYSBjYWxsIHR3aWNlP1wiKTtlbHNle3RoaXMub3B0aW9ucy5fcGF5bG9hZC5fc3RyZWFtPWUsdGhpcy5sb2NhbFN0cmVhbT1lLGkuTmVnb3RpYXRvci5zdGFydENvbm5lY3Rpb24odGhpcyx0aGlzLm9wdGlvbnMuX3BheWxvYWQpO2Zvcih2YXIgbz10aGlzLnByb3ZpZGVyLl9nZXRNZXNzYWdlcyh0aGlzLmlkKSxzPTAsYT1vLmxlbmd0aDtzPGE7cys9MSl0aGlzLmhhbmRsZU1lc3NhZ2Uob1tzXSk7dGhpcy5vcGVuPSEwfX0sby5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLm9wZW4mJih0aGlzLm9wZW49ITEsaS5OZWdvdGlhdG9yLmNsZWFudXAodGhpcyksdGhpcy5lbWl0KFwiY2xvc2VcIikpfTtcbn0se1wiLi91dGlsXCI6XCJCSFhmXCIsXCJldmVudGVtaXR0ZXIzXCI6XCIySkpsXCIsXCIuL25lZ290aWF0b3JcIjpcIkhDZFhcIn1dLFwiVDlrT1wiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG52YXIgZ2xvYmFsID0gYXJndW1lbnRzWzNdO1xudmFyIGU9YXJndW1lbnRzWzNdLHI9cmVxdWlyZShcImpzLWJpbmFyeXBhY2tcIiksdD17ZGVidWc6ITEsaW5oZXJpdHM6ZnVuY3Rpb24oZSxyKXtlLnN1cGVyXz1yLGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoci5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pfSxleHRlbmQ6ZnVuY3Rpb24oZSxyKXtmb3IodmFyIHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoZVt0XT1yW3RdKTtyZXR1cm4gZX0scGFjazpyLnBhY2ssdW5wYWNrOnIudW5wYWNrLGxvZzpmdW5jdGlvbigpe2lmKHQuZGVidWcpe2Zvcih2YXIgZT1bXSxyPTA7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyllW3JdPWFyZ3VtZW50c1tyXTtlLnVuc2hpZnQoXCJSZWxpYWJsZTogXCIpLGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsZSl9fSxzZXRaZXJvVGltZW91dDpmdW5jdGlvbihlKXt2YXIgcj1bXSx0PVwiemVyby10aW1lb3V0LW1lc3NhZ2VcIjtmdW5jdGlvbiBuKG4pe24uc291cmNlPT1lJiZuLmRhdGE9PXQmJihuLnN0b3BQcm9wYWdhdGlvbiYmbi5zdG9wUHJvcGFnYXRpb24oKSxyLmxlbmd0aCYmci5zaGlmdCgpKCkpfXJldHVybiBlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4sITApOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixuKSxmdW5jdGlvbihuKXtyLnB1c2gobiksZS5wb3N0TWVzc2FnZSh0LFwiKlwiKX19KHRoaXMpLGJsb2JUb0FycmF5QnVmZmVyOmZ1bmN0aW9uKGUscil7dmFyIHQ9bmV3IEZpbGVSZWFkZXI7dC5vbmxvYWQ9ZnVuY3Rpb24oZSl7cihlLnRhcmdldC5yZXN1bHQpfSx0LnJlYWRBc0FycmF5QnVmZmVyKGUpfSxibG9iVG9CaW5hcnlTdHJpbmc6ZnVuY3Rpb24oZSxyKXt2YXIgdD1uZXcgRmlsZVJlYWRlcjt0Lm9ubG9hZD1mdW5jdGlvbihlKXtyKGUudGFyZ2V0LnJlc3VsdCl9LHQucmVhZEFzQmluYXJ5U3RyaW5nKGUpfSxiaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgcj1uZXcgVWludDhBcnJheShlLmxlbmd0aCksdD0wO3Q8ZS5sZW5ndGg7dCsrKXJbdF09MjU1JmUuY2hhckNvZGVBdCh0KTtyZXR1cm4gci5idWZmZXJ9LHJhbmRvbVRva2VuOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKX19O21vZHVsZS5leHBvcnRzPXQ7XG59LHtcImpzLWJpbmFyeXBhY2tcIjpcImxIT2NcIn1dLFwiYVlGSlwiOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKSB7XG52YXIgdD1yZXF1aXJlKFwiLi91dGlsXCIpO2Z1bmN0aW9uIGUobixpKXtpZighKHRoaXMgaW5zdGFuY2VvZiBlKSlyZXR1cm4gbmV3IGUobik7dGhpcy5fZGM9bix0LmRlYnVnPWksdGhpcy5fb3V0Z29pbmc9e30sdGhpcy5faW5jb21pbmc9e30sdGhpcy5fcmVjZWl2ZWQ9e30sdGhpcy5fd2luZG93PTFlMyx0aGlzLl9tdHU9NTAwLHRoaXMuX2ludGVydmFsPTAsdGhpcy5fY291bnQ9MCx0aGlzLl9xdWV1ZT1bXSx0aGlzLl9zZXR1cERDKCl9ZS5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihlKXt2YXIgbj10LnBhY2soZSk7bi5zaXplPHRoaXMuX210dT90aGlzLl9oYW5kbGVTZW5kKFtcIm5vXCIsbl0pOih0aGlzLl9vdXRnb2luZ1t0aGlzLl9jb3VudF09e2FjazowLGNodW5rczp0aGlzLl9jaHVuayhuKX0sdC5kZWJ1ZyYmKHRoaXMuX291dGdvaW5nW3RoaXMuX2NvdW50XS50aW1lcj1uZXcgRGF0ZSksdGhpcy5fc2VuZFdpbmRvd2VkQ2h1bmtzKHRoaXMuX2NvdW50KSx0aGlzLl9jb3VudCs9MSl9LGUucHJvdG90eXBlLl9zZXR1cEludGVydmFsPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl90aW1lb3V0PXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIGU9dC5fcXVldWUuc2hpZnQoKTtpZihlLl9tdWx0aXBsZSlmb3IodmFyIG49MCxpPWUubGVuZ3RoO248aTtuKz0xKXQuX2ludGVydmFsU2VuZChlW25dKTtlbHNlIHQuX2ludGVydmFsU2VuZChlKX0sdGhpcy5faW50ZXJ2YWwpfSxlLnByb3RvdHlwZS5faW50ZXJ2YWxTZW5kPWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXM7ZT10LnBhY2soZSksdC5ibG9iVG9CaW5hcnlTdHJpbmcoZSxmdW5jdGlvbih0KXtuLl9kYy5zZW5kKHQpfSksMD09PW4uX3F1ZXVlLmxlbmd0aCYmKGNsZWFyVGltZW91dChuLl90aW1lb3V0KSxuLl90aW1lb3V0PW51bGwpfSxlLnByb3RvdHlwZS5fcHJvY2Vzc0Fja3M9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5fb3V0Z29pbmcpdGhpcy5fb3V0Z29pbmcuaGFzT3duUHJvcGVydHkodCkmJnRoaXMuX3NlbmRXaW5kb3dlZENodW5rcyh0KX0sZS5wcm90b3R5cGUuX2hhbmRsZVNlbmQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPSEwLG49MCxpPXRoaXMuX3F1ZXVlLmxlbmd0aDtuPGk7bis9MSl7dmFyIG89dGhpcy5fcXVldWVbbl07bz09PXQ/ZT0hMTpvLl9tdWx0aXBsZSYmLTEhPT1vLmluZGV4T2YodCkmJihlPSExKX1lJiYodGhpcy5fcXVldWUucHVzaCh0KSx0aGlzLl90aW1lb3V0fHx0aGlzLl9zZXR1cEludGVydmFsKCkpfSxlLnByb3RvdHlwZS5fc2V0dXBEQz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5fZGMub25tZXNzYWdlPWZ1bmN0aW9uKG4pe3ZhciBpPW4uZGF0YTtpZihpLmNvbnN0cnVjdG9yPT09U3RyaW5nKXt2YXIgbz10LmJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIoaSk7aT10LnVucGFjayhvKSxlLl9oYW5kbGVNZXNzYWdlKGkpfX19LGUucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciBuLGk9ZVsxXSxvPXRoaXMuX2luY29taW5nW2ldLHM9dGhpcy5fb3V0Z29pbmdbaV07c3dpdGNoKGVbMF0pe2Nhc2VcIm5vXCI6dmFyIGE9aTthJiZ0aGlzLm9ubWVzc2FnZSh0LnVucGFjayhhKSk7YnJlYWs7Y2FzZVwiZW5kXCI6aWYobj1vLHRoaXMuX3JlY2VpdmVkW2ldPWVbMl0sIW4pYnJlYWs7dGhpcy5fYWNrKGkpO2JyZWFrO2Nhc2VcImFja1wiOmlmKG49cyl7dmFyIGg9ZVsyXTtuLmFjaz1NYXRoLm1heChoLG4uYWNrKSxuLmFjaz49bi5jaHVua3MubGVuZ3RoPyh0LmxvZyhcIlRpbWU6IFwiLG5ldyBEYXRlLW4udGltZXIpLGRlbGV0ZSB0aGlzLl9vdXRnb2luZ1tpXSk6dGhpcy5fcHJvY2Vzc0Fja3MoKX1icmVhaztjYXNlXCJjaHVua1wiOmlmKCEobj1vKSl7aWYoITA9PT10aGlzLl9yZWNlaXZlZFtpXSlicmVhaztuPXthY2s6W1wiYWNrXCIsaSwwXSxjaHVua3M6W119LHRoaXMuX2luY29taW5nW2ldPW59dmFyIHI9ZVsyXSx1PWVbM107bi5jaHVua3Nbcl09bmV3IFVpbnQ4QXJyYXkodSkscj09PW4uYWNrWzJdJiZ0aGlzLl9jYWxjdWxhdGVOZXh0QWNrKGkpLHRoaXMuX2FjayhpKTticmVhaztkZWZhdWx0OnRoaXMuX2hhbmRsZVNlbmQoZSl9fSxlLnByb3RvdHlwZS5fY2h1bms9ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPVtdLGk9ZS5zaXplLG89MDtvPGk7KXt2YXIgcz1NYXRoLm1pbihpLG8rdGhpcy5fbXR1KSxhPXtwYXlsb2FkOmUuc2xpY2UobyxzKX07bi5wdXNoKGEpLG89c31yZXR1cm4gdC5sb2coXCJDcmVhdGVkXCIsbi5sZW5ndGgsXCJjaHVua3MuXCIpLG59LGUucHJvdG90eXBlLl9hY2s9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5faW5jb21pbmdbdF0uYWNrO3RoaXMuX3JlY2VpdmVkW3RdPT09ZVsyXSYmKHRoaXMuX2NvbXBsZXRlKHQpLHRoaXMuX3JlY2VpdmVkW3RdPSEwKSx0aGlzLl9oYW5kbGVTZW5kKGUpfSxlLnByb3RvdHlwZS5fY2FsY3VsYXRlTmV4dEFjaz1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy5faW5jb21pbmdbdF0sbj1lLmNodW5rcyxpPTAsbz1uLmxlbmd0aDtpPG87aSs9MSlpZih2b2lkIDA9PT1uW2ldKXJldHVybiB2b2lkKGUuYWNrWzJdPWkpO2UuYWNrWzJdPW4ubGVuZ3RofSxlLnByb3RvdHlwZS5fc2VuZFdpbmRvd2VkQ2h1bmtzPWZ1bmN0aW9uKGUpe3QubG9nKFwic2VuZFdpbmRvd2VkQ2h1bmtzIGZvcjogXCIsZSk7Zm9yKHZhciBuPXRoaXMuX291dGdvaW5nW2VdLGk9bi5jaHVua3Msbz1bXSxzPU1hdGgubWluKG4uYWNrK3RoaXMuX3dpbmRvdyxpLmxlbmd0aCksYT1uLmFjazthPHM7YSs9MSlpW2FdLnNlbnQmJmEhPT1uLmFja3x8KGlbYV0uc2VudD0hMCxvLnB1c2goW1wiY2h1bmtcIixlLGEsaVthXS5wYXlsb2FkXSkpO24uYWNrK3RoaXMuX3dpbmRvdz49aS5sZW5ndGgmJm8ucHVzaChbXCJlbmRcIixlLGkubGVuZ3RoXSksby5fbXVsdGlwbGU9ITAsdGhpcy5faGFuZGxlU2VuZChvKX0sZS5wcm90b3R5cGUuX2NvbXBsZXRlPWZ1bmN0aW9uKGUpe3QubG9nKFwiQ29tcGxldGVkIGNhbGxlZCBmb3JcIixlKTt2YXIgbj10aGlzLGk9dGhpcy5faW5jb21pbmdbZV0uY2h1bmtzLG89bmV3IEJsb2IoaSk7dC5ibG9iVG9BcnJheUJ1ZmZlcihvLGZ1bmN0aW9uKGUpe24ub25tZXNzYWdlKHQudW5wYWNrKGUpKX0pLGRlbGV0ZSB0aGlzLl9pbmNvbWluZ1tlXX0sZS5oaWdoZXJCYW5kd2lkdGhTRFA9ZnVuY3Rpb24odCl7dmFyIGU9bmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL0Nocm9tZVxcLyguKj8pIC8pO2lmKGUmJihlPXBhcnNlSW50KGVbMV0uc3BsaXQoXCIuXCIpLnNoaWZ0KCkpKTwzMSl7dmFyIG49dC5zcGxpdChcImI9QVM6MzBcIik7aWYobi5sZW5ndGg+MSlyZXR1cm4gblswXStcImI9QVM6MTAyNDAwXCIrblsxXX1yZXR1cm4gdH0sZS5wcm90b3R5cGUub25tZXNzYWdlPWZ1bmN0aW9uKHQpe30sbW9kdWxlLmV4cG9ydHMuUmVsaWFibGU9ZTtcbn0se1wiLi91dGlsXCI6XCJUOWtPXCJ9XSxcIkdCVFFcIjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cykge1xuXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPSEwO3ZhciB0PXJlcXVpcmUoXCIuL3V0aWxcIiksZT1yZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKSxpPXJlcXVpcmUoXCIuL25lZ290aWF0b3JcIiksbj1yZXF1aXJlKFwicmVsaWFibGVcIik7ZnVuY3Rpb24gcyhuLHIsYSl7aWYoISh0aGlzIGluc3RhbmNlb2YgcykpcmV0dXJuIG5ldyBzKG4scixhKTtlLkV2ZW50RW1pdHRlci5jYWxsKHRoaXMpLHRoaXMub3B0aW9ucz10LnV0aWwuZXh0ZW5kKHtzZXJpYWxpemF0aW9uOlwiYmluYXJ5XCIscmVsaWFibGU6ITF9LGEpLHRoaXMub3Blbj0hMSx0aGlzLnR5cGU9XCJkYXRhXCIsdGhpcy5wZWVyPW4sdGhpcy5wcm92aWRlcj1yLHRoaXMuaWQ9dGhpcy5vcHRpb25zLmNvbm5lY3Rpb25JZHx8cy5faWRQcmVmaXgrdC51dGlsLnJhbmRvbVRva2VuKCksdGhpcy5sYWJlbD10aGlzLm9wdGlvbnMubGFiZWx8fHRoaXMuaWQsdGhpcy5tZXRhZGF0YT10aGlzLm9wdGlvbnMubWV0YWRhdGEsdGhpcy5zZXJpYWxpemF0aW9uPXRoaXMub3B0aW9ucy5zZXJpYWxpemF0aW9uLHRoaXMucmVsaWFibGU9dGhpcy5vcHRpb25zLnJlbGlhYmxlLHRoaXMuX2J1ZmZlcj1bXSx0aGlzLl9idWZmZXJpbmc9ITEsdGhpcy5idWZmZXJTaXplPTAsdGhpcy5fY2h1bmtlZERhdGE9e30sdGhpcy5vcHRpb25zLl9wYXlsb2FkJiYodGhpcy5fcGVlckJyb3dzZXI9dGhpcy5vcHRpb25zLl9wYXlsb2FkLmJyb3dzZXIpLGkuTmVnb3RpYXRvci5zdGFydENvbm5lY3Rpb24odGhpcyx0aGlzLm9wdGlvbnMuX3BheWxvYWR8fHtvcmlnaW5hdG9yOiEwfSl9ZXhwb3J0cy5EYXRhQ29ubmVjdGlvbj1zLHQudXRpbC5pbmhlcml0cyhzLGUuRXZlbnRFbWl0dGVyKSxzLl9pZFByZWZpeD1cImRjX1wiLHMucHJvdG90eXBlLmluaXRpYWxpemU9ZnVuY3Rpb24odCl7dGhpcy5fZGM9dGhpcy5kYXRhQ2hhbm5lbD10LHRoaXMuX2NvbmZpZ3VyZURhdGFDaGFubmVsKCl9LHMucHJvdG90eXBlLl9jb25maWd1cmVEYXRhQ2hhbm5lbD1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dC51dGlsLnN1cHBvcnRzLnNjdHAmJih0aGlzLl9kYy5iaW5hcnlUeXBlPVwiYXJyYXlidWZmZXJcIiksdGhpcy5fZGMub25vcGVuPWZ1bmN0aW9uKCl7dC51dGlsLmxvZyhcIkRhdGEgY2hhbm5lbCBjb25uZWN0aW9uIHN1Y2Nlc3NcIiksZS5vcGVuPSEwLGUuZW1pdChcIm9wZW5cIil9LCF0LnV0aWwuc3VwcG9ydHMuc2N0cCYmdGhpcy5yZWxpYWJsZSYmKHRoaXMuX3JlbGlhYmxlPW5ldyBuLlJlbGlhYmxlKHRoaXMuX2RjLHQudXRpbC5kZWJ1ZykpLHRoaXMuX3JlbGlhYmxlP3RoaXMuX3JlbGlhYmxlLm9ubWVzc2FnZT1mdW5jdGlvbih0KXtlLmVtaXQoXCJkYXRhXCIsdCl9OnRoaXMuX2RjLm9ubWVzc2FnZT1mdW5jdGlvbih0KXtlLl9oYW5kbGVEYXRhTWVzc2FnZSh0KX0sdGhpcy5fZGMub25jbG9zZT1mdW5jdGlvbihpKXt0LnV0aWwubG9nKFwiRGF0YUNoYW5uZWwgY2xvc2VkIGZvcjpcIixlLnBlZXIpLGUuY2xvc2UoKX19LHMucHJvdG90eXBlLl9oYW5kbGVEYXRhTWVzc2FnZT1mdW5jdGlvbihlKXt2YXIgaT10aGlzLG49ZS5kYXRhLHM9bi5jb25zdHJ1Y3RvcjtpZihcImJpbmFyeVwiPT09dGhpcy5zZXJpYWxpemF0aW9ufHxcImJpbmFyeS11dGY4XCI9PT10aGlzLnNlcmlhbGl6YXRpb24pe2lmKHM9PT1CbG9iKXJldHVybiB2b2lkIHQudXRpbC5ibG9iVG9BcnJheUJ1ZmZlcihuLGZ1bmN0aW9uKGUpe249dC51dGlsLnVucGFjayhlKSxpLmVtaXQoXCJkYXRhXCIsbil9KTtpZihzPT09QXJyYXlCdWZmZXIpbj10LnV0aWwudW5wYWNrKG4pO2Vsc2UgaWYocz09PVN0cmluZyl7dmFyIHI9dC51dGlsLmJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIobik7bj10LnV0aWwudW5wYWNrKHIpfX1lbHNlXCJqc29uXCI9PT10aGlzLnNlcmlhbGl6YXRpb24mJihuPUpTT04ucGFyc2UobikpO2lmKG4uX19wZWVyRGF0YSl7dmFyIGE9bi5fX3BlZXJEYXRhLG89dGhpcy5fY2h1bmtlZERhdGFbYV18fHtkYXRhOltdLGNvdW50OjAsdG90YWw6bi50b3RhbH07cmV0dXJuIG8uZGF0YVtuLm5dPW4uZGF0YSxvLmNvdW50Kz0xLG8udG90YWw9PT1vLmNvdW50JiYoZGVsZXRlIHRoaXMuX2NodW5rZWREYXRhW2FdLG49bmV3IEJsb2Ioby5kYXRhKSx0aGlzLl9oYW5kbGVEYXRhTWVzc2FnZSh7ZGF0YTpufSkpLHZvaWQodGhpcy5fY2h1bmtlZERhdGFbYV09byl9dGhpcy5lbWl0KFwiZGF0YVwiLG4pfSxzLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMub3BlbiYmKHRoaXMub3Blbj0hMSxpLk5lZ290aWF0b3IuY2xlYW51cCh0aGlzKSx0aGlzLmVtaXQoXCJjbG9zZVwiKSl9LHMucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZSxpKXtpZih0aGlzLm9wZW4paWYodGhpcy5fcmVsaWFibGUpdGhpcy5fcmVsaWFibGUuc2VuZChlKTtlbHNle3ZhciBuPXRoaXM7aWYoXCJqc29uXCI9PT10aGlzLnNlcmlhbGl6YXRpb24pdGhpcy5fYnVmZmVyZWRTZW5kKEpTT04uc3RyaW5naWZ5KGUpKTtlbHNlIGlmKFwiYmluYXJ5XCI9PT10aGlzLnNlcmlhbGl6YXRpb258fFwiYmluYXJ5LXV0ZjhcIj09PXRoaXMuc2VyaWFsaXphdGlvbil7dmFyIHM9dC51dGlsLnBhY2soZSk7aWYoKHQudXRpbC5jaHVua2VkQnJvd3NlcnNbdGhpcy5fcGVlckJyb3dzZXJdfHx0LnV0aWwuY2h1bmtlZEJyb3dzZXJzW3QudXRpbC5icm93c2VyXSkmJiFpJiZzLnNpemU+dC51dGlsLmNodW5rZWRNVFUpcmV0dXJuIHZvaWQgdGhpcy5fc2VuZENodW5rcyhzKTt0LnV0aWwuc3VwcG9ydHMuc2N0cD90LnV0aWwuc3VwcG9ydHMuYmluYXJ5QmxvYj90aGlzLl9idWZmZXJlZFNlbmQocyk6dC51dGlsLmJsb2JUb0FycmF5QnVmZmVyKHMsZnVuY3Rpb24odCl7bi5fYnVmZmVyZWRTZW5kKHQpfSk6dC51dGlsLmJsb2JUb0JpbmFyeVN0cmluZyhzLGZ1bmN0aW9uKHQpe24uX2J1ZmZlcmVkU2VuZCh0KX0pfWVsc2UgdGhpcy5fYnVmZmVyZWRTZW5kKGUpfWVsc2UgdGhpcy5lbWl0KFwiZXJyb3JcIixuZXcgRXJyb3IoXCJDb25uZWN0aW9uIGlzIG5vdCBvcGVuLiBZb3Ugc2hvdWxkIGxpc3RlbiBmb3IgdGhlIGBvcGVuYCBldmVudCBiZWZvcmUgc2VuZGluZyBtZXNzYWdlcy5cIikpfSxzLnByb3RvdHlwZS5fYnVmZmVyZWRTZW5kPWZ1bmN0aW9uKHQpeyF0aGlzLl9idWZmZXJpbmcmJnRoaXMuX3RyeVNlbmQodCl8fCh0aGlzLl9idWZmZXIucHVzaCh0KSx0aGlzLmJ1ZmZlclNpemU9dGhpcy5fYnVmZmVyLmxlbmd0aCl9LHMucHJvdG90eXBlLl90cnlTZW5kPWZ1bmN0aW9uKHQpe3RyeXt0aGlzLl9kYy5zZW5kKHQpfWNhdGNoKGkpe3RoaXMuX2J1ZmZlcmluZz0hMDt2YXIgZT10aGlzO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5fYnVmZmVyaW5nPSExLGUuX3RyeUJ1ZmZlcigpfSwxMDApLCExfXJldHVybiEwfSxzLnByb3RvdHlwZS5fdHJ5QnVmZmVyPWZ1bmN0aW9uKCl7aWYoMCE9PXRoaXMuX2J1ZmZlci5sZW5ndGgpe3ZhciB0PXRoaXMuX2J1ZmZlclswXTt0aGlzLl90cnlTZW5kKHQpJiYodGhpcy5fYnVmZmVyLnNoaWZ0KCksdGhpcy5idWZmZXJTaXplPXRoaXMuX2J1ZmZlci5sZW5ndGgsdGhpcy5fdHJ5QnVmZmVyKCkpfX0scy5wcm90b3R5cGUuX3NlbmRDaHVua3M9ZnVuY3Rpb24oZSl7Zm9yKHZhciBpPXQudXRpbC5jaHVuayhlKSxuPTAscz1pLmxlbmd0aDtuPHM7bis9MSl7ZT1pW25dO3RoaXMuc2VuZChlLCEwKX19LHMucHJvdG90eXBlLmhhbmRsZU1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIG49ZS5wYXlsb2FkO3N3aXRjaChlLnR5cGUpe2Nhc2VcIkFOU1dFUlwiOnRoaXMuX3BlZXJCcm93c2VyPW4uYnJvd3NlcixpLk5lZ290aWF0b3IuaGFuZGxlU0RQKGUudHlwZSx0aGlzLG4uc2RwKTticmVhaztjYXNlXCJDQU5ESURBVEVcIjppLk5lZ290aWF0b3IuaGFuZGxlQ2FuZGlkYXRlKHRoaXMsbi5jYW5kaWRhdGUpO2JyZWFrO2RlZmF1bHQ6dC51dGlsLndhcm4oXCJVbnJlY29nbml6ZWQgbWVzc2FnZSB0eXBlOlwiLGUudHlwZSxcImZyb20gcGVlcjpcIix0aGlzLnBlZXIpfX07XG59LHtcIi4vdXRpbFwiOlwiQkhYZlwiLFwiZXZlbnRlbWl0dGVyM1wiOlwiMkpKbFwiLFwiLi9uZWdvdGlhdG9yXCI6XCJIQ2RYXCIsXCJyZWxpYWJsZVwiOlwiYVlGSlwifV0sXCJIeHBkXCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcblwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT0hMDt2YXIgZT1yZXF1aXJlKFwiLi91dGlsXCIpLHQ9cmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIiksbz1yZXF1aXJlKFwiLi9zb2NrZXRcIiksbj1yZXF1aXJlKFwiLi9tZWRpYWNvbm5lY3Rpb25cIiksaT1yZXF1aXJlKFwiLi9kYXRhY29ubmVjdGlvblwiKTtmdW5jdGlvbiBzKG8sbil7aWYoISh0aGlzIGluc3RhbmNlb2YgcykpcmV0dXJuIG5ldyBzKG8sbik7dC5FdmVudEVtaXR0ZXIuY2FsbCh0aGlzKSxvJiZvLmNvbnN0cnVjdG9yPT1PYmplY3Q/KG49byxvPXZvaWQgMCk6byYmKG89by50b1N0cmluZygpKSwobj1lLnV0aWwuZXh0ZW5kKHtkZWJ1ZzowLGhvc3Q6ZS51dGlsLkNMT1VEX0hPU1QscG9ydDplLnV0aWwuQ0xPVURfUE9SVCxwYXRoOlwiL1wiLHRva2VuOmUudXRpbC5yYW5kb21Ub2tlbigpLGNvbmZpZzplLnV0aWwuZGVmYXVsdENvbmZpZ30sbikpLmtleT1cInBlZXJqc1wiLHRoaXMub3B0aW9ucz1uLFwiL1wiPT09bi5ob3N0JiYobi5ob3N0PXdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSksXCIvXCIhPT1uLnBhdGhbMF0mJihuLnBhdGg9XCIvXCIrbi5wYXRoKSxcIi9cIiE9PW4ucGF0aFtuLnBhdGgubGVuZ3RoLTFdJiYobi5wYXRoKz1cIi9cIiksdm9pZCAwPT09bi5zZWN1cmUmJm4uaG9zdCE9PWUudXRpbC5DTE9VRF9IT1NUP24uc2VjdXJlPWUudXRpbC5pc1NlY3VyZSgpOm4uaG9zdD09ZS51dGlsLkNMT1VEX0hPU1QmJihuLnNlY3VyZT0hMCksbi5sb2dGdW5jdGlvbiYmZS51dGlsLnNldExvZ0Z1bmN0aW9uKG4ubG9nRnVuY3Rpb24pLGUudXRpbC5zZXRMb2dMZXZlbChuLmRlYnVnKSxlLnV0aWwuc3VwcG9ydHMuYXVkaW9WaWRlb3x8ZS51dGlsLnN1cHBvcnRzLmRhdGE/ZS51dGlsLnZhbGlkYXRlSWQobyk/KHRoaXMuZGVzdHJveWVkPSExLHRoaXMuZGlzY29ubmVjdGVkPSExLHRoaXMub3Blbj0hMSx0aGlzLmNvbm5lY3Rpb25zPXt9LHRoaXMuX2xvc3RNZXNzYWdlcz17fSx0aGlzLl9pbml0aWFsaXplU2VydmVyQ29ubmVjdGlvbigpLG8/dGhpcy5faW5pdGlhbGl6ZShvKTp0aGlzLl9yZXRyaWV2ZUlkKCkpOnRoaXMuX2RlbGF5ZWRBYm9ydChcImludmFsaWQtaWRcIiwnSUQgXCInK28rJ1wiIGlzIGludmFsaWQnKTp0aGlzLl9kZWxheWVkQWJvcnQoXCJicm93c2VyLWluY29tcGF0aWJsZVwiLFwiVGhlIGN1cnJlbnQgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYlJUQ1wiKX1leHBvcnRzLlBlZXI9cyxlLnV0aWwuaW5oZXJpdHMocyx0LkV2ZW50RW1pdHRlcikscy5wcm90b3R5cGUuX2luaXRpYWxpemVTZXJ2ZXJDb25uZWN0aW9uPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnNvY2tldD1uZXcgby5Tb2NrZXQodGhpcy5vcHRpb25zLnNlY3VyZSx0aGlzLm9wdGlvbnMuaG9zdCx0aGlzLm9wdGlvbnMucG9ydCx0aGlzLm9wdGlvbnMucGF0aCx0aGlzLm9wdGlvbnMua2V5LHRoaXMub3B0aW9ucy53c3BvcnQpLHRoaXMuc29ja2V0Lm9uKFwibWVzc2FnZVwiLGZ1bmN0aW9uKHQpe2UuX2hhbmRsZU1lc3NhZ2UodCl9KSx0aGlzLnNvY2tldC5vbihcImVycm9yXCIsZnVuY3Rpb24odCl7ZS5fYWJvcnQoXCJzb2NrZXQtZXJyb3JcIix0KX0pLHRoaXMuc29ja2V0Lm9uKFwiZGlzY29ubmVjdGVkXCIsZnVuY3Rpb24oKXtlLmRpc2Nvbm5lY3RlZHx8KGUuZW1pdEVycm9yKFwibmV0d29ya1wiLFwiTG9zdCBjb25uZWN0aW9uIHRvIHNlcnZlci5cIiksZS5kaXNjb25uZWN0KCkpfSksdGhpcy5zb2NrZXQub24oXCJjbG9zZVwiLGZ1bmN0aW9uKCl7ZS5kaXNjb25uZWN0ZWR8fGUuX2Fib3J0KFwic29ja2V0LWNsb3NlZFwiLFwiVW5kZXJseWluZyBzb2NrZXQgaXMgYWxyZWFkeSBjbG9zZWQuXCIpfSl9LHMucHJvdG90eXBlLl9yZXRyaWV2ZUlkPWZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMsbj1uZXcgWE1MSHR0cFJlcXVlc3QsaT0odGhpcy5vcHRpb25zLnNlY3VyZT9cImh0dHBzOi8vXCI6XCJodHRwOi8vXCIpK3RoaXMub3B0aW9ucy5ob3N0K1wiOlwiK3RoaXMub3B0aW9ucy5wb3J0K3RoaXMub3B0aW9ucy5wYXRoK3RoaXMub3B0aW9ucy5rZXkrXCIvaWRcIjtpKz1cIj90cz1cIisobmV3IERhdGUpLmdldFRpbWUoKStNYXRoLnJhbmRvbSgpLG4ub3BlbihcImdldFwiLGksITApLG4ub25lcnJvcj1mdW5jdGlvbih0KXtlLnV0aWwuZXJyb3IoXCJFcnJvciByZXRyaWV2aW5nIElEXCIsdCk7dmFyIG49XCJcIjtcIi9cIj09PW8ub3B0aW9ucy5wYXRoJiZvLm9wdGlvbnMuaG9zdCE9PWUudXRpbC5DTE9VRF9IT1NUJiYobj1cIiBJZiB5b3UgcGFzc2VkIGluIGEgYHBhdGhgIHRvIHlvdXIgc2VsZi1ob3N0ZWQgUGVlclNlcnZlciwgeW91J2xsIGFsc28gbmVlZCB0byBwYXNzIGluIHRoYXQgc2FtZSBwYXRoIHdoZW4gY3JlYXRpbmcgYSBuZXcgUGVlci5cIiksby5fYWJvcnQoXCJzZXJ2ZXItZXJyb3JcIixcIkNvdWxkIG5vdCBnZXQgYW4gSUQgZnJvbSB0aGUgc2VydmVyLlwiK24pfSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1uLnJlYWR5U3RhdGUmJigyMDA9PT1uLnN0YXR1cz9vLl9pbml0aWFsaXplKG4ucmVzcG9uc2VUZXh0KTpuLm9uZXJyb3IoKSl9LG4uc2VuZChudWxsKX0scy5wcm90b3R5cGUuX2luaXRpYWxpemU9ZnVuY3Rpb24oZSl7dGhpcy5pZD1lLHRoaXMuc29ja2V0LnN0YXJ0KHRoaXMuaWQsdGhpcy5vcHRpb25zLnRva2VuKX0scy5wcm90b3R5cGUuX2hhbmRsZU1lc3NhZ2U9ZnVuY3Rpb24odCl7dmFyIG8scz10LnR5cGUscj10LnBheWxvYWQsYT10LnNyYztzd2l0Y2gocyl7Y2FzZVwiT1BFTlwiOnRoaXMuZW1pdChcIm9wZW5cIix0aGlzLmlkKSx0aGlzLm9wZW49ITA7YnJlYWs7Y2FzZVwiRVJST1JcIjp0aGlzLl9hYm9ydChcInNlcnZlci1lcnJvclwiLHIubXNnKTticmVhaztjYXNlXCJJRC1UQUtFTlwiOnRoaXMuX2Fib3J0KFwidW5hdmFpbGFibGUtaWRcIixcIklEIGBcIit0aGlzLmlkK1wiYCBpcyB0YWtlblwiKTticmVhaztjYXNlXCJJTlZBTElELUtFWVwiOnRoaXMuX2Fib3J0KFwiaW52YWxpZC1rZXlcIiwnQVBJIEtFWSBcIicrdGhpcy5vcHRpb25zLmtleSsnXCIgaXMgaW52YWxpZCcpO2JyZWFrO2Nhc2VcIkxFQVZFXCI6ZS51dGlsLmxvZyhcIlJlY2VpdmVkIGxlYXZlIG1lc3NhZ2UgZnJvbVwiLGEpLHRoaXMuX2NsZWFudXBQZWVyKGEpO2JyZWFrO2Nhc2VcIkVYUElSRVwiOnRoaXMuZW1pdEVycm9yKFwicGVlci11bmF2YWlsYWJsZVwiLFwiQ291bGQgbm90IGNvbm5lY3QgdG8gcGVlciBcIithKTticmVhaztjYXNlXCJPRkZFUlwiOnZhciBjPXIuY29ubmVjdGlvbklkO2lmKChvPXRoaXMuZ2V0Q29ubmVjdGlvbihhLGMpKSYmKG8uY2xvc2UoKSxlLnV0aWwud2FybihcIk9mZmVyIHJlY2VpdmVkIGZvciBleGlzdGluZyBDb25uZWN0aW9uIElEOlwiLGMpKSxcIm1lZGlhXCI9PT1yLnR5cGUpbz1uZXcgbi5NZWRpYUNvbm5lY3Rpb24oYSx0aGlzLHtjb25uZWN0aW9uSWQ6YyxfcGF5bG9hZDpyLG1ldGFkYXRhOnIubWV0YWRhdGF9KSx0aGlzLl9hZGRDb25uZWN0aW9uKGEsbyksdGhpcy5lbWl0KFwiY2FsbFwiLG8pO2Vsc2V7aWYoXCJkYXRhXCIhPT1yLnR5cGUpcmV0dXJuIHZvaWQgZS51dGlsLndhcm4oXCJSZWNlaXZlZCBtYWxmb3JtZWQgY29ubmVjdGlvbiB0eXBlOlwiLHIudHlwZSk7bz1uZXcgaS5EYXRhQ29ubmVjdGlvbihhLHRoaXMse2Nvbm5lY3Rpb25JZDpjLF9wYXlsb2FkOnIsbWV0YWRhdGE6ci5tZXRhZGF0YSxsYWJlbDpyLmxhYmVsLHNlcmlhbGl6YXRpb246ci5zZXJpYWxpemF0aW9uLHJlbGlhYmxlOnIucmVsaWFibGV9KSx0aGlzLl9hZGRDb25uZWN0aW9uKGEsbyksdGhpcy5lbWl0KFwiY29ubmVjdGlvblwiLG8pfWZvcih2YXIgaD10aGlzLl9nZXRNZXNzYWdlcyhjKSxkPTAsbD1oLmxlbmd0aDtkPGw7ZCs9MSlvLmhhbmRsZU1lc3NhZ2UoaFtkXSk7YnJlYWs7ZGVmYXVsdDppZighcilyZXR1cm4gdm9pZCBlLnV0aWwud2FybihcIllvdSByZWNlaXZlZCBhIG1hbGZvcm1lZCBtZXNzYWdlIGZyb20gXCIrYStcIiBvZiB0eXBlIFwiK3MpO3ZhciB1PXIuY29ubmVjdGlvbklkOyhvPXRoaXMuZ2V0Q29ubmVjdGlvbihhLHUpKSYmby5wYz9vLmhhbmRsZU1lc3NhZ2UodCk6dT90aGlzLl9zdG9yZU1lc3NhZ2UodSx0KTplLnV0aWwud2FybihcIllvdSByZWNlaXZlZCBhbiB1bnJlY29nbml6ZWQgbWVzc2FnZTpcIix0KX19LHMucHJvdG90eXBlLl9zdG9yZU1lc3NhZ2U9ZnVuY3Rpb24oZSx0KXt0aGlzLl9sb3N0TWVzc2FnZXNbZV18fCh0aGlzLl9sb3N0TWVzc2FnZXNbZV09W10pLHRoaXMuX2xvc3RNZXNzYWdlc1tlXS5wdXNoKHQpfSxzLnByb3RvdHlwZS5fZ2V0TWVzc2FnZXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fbG9zdE1lc3NhZ2VzW2VdO3JldHVybiB0PyhkZWxldGUgdGhpcy5fbG9zdE1lc3NhZ2VzW2VdLHQpOltdfSxzLnByb3RvdHlwZS5jb25uZWN0PWZ1bmN0aW9uKHQsbyl7aWYodGhpcy5kaXNjb25uZWN0ZWQpcmV0dXJuIGUudXRpbC53YXJuKFwiWW91IGNhbm5vdCBjb25uZWN0IHRvIGEgbmV3IFBlZXIgYmVjYXVzZSB5b3UgY2FsbGVkIC5kaXNjb25uZWN0KCkgb24gdGhpcyBQZWVyIGFuZCBlbmRlZCB5b3VyIGNvbm5lY3Rpb24gd2l0aCB0aGUgc2VydmVyLiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBQZWVyIHRvIHJlY29ubmVjdCwgb3IgY2FsbCByZWNvbm5lY3Qgb24gdGhpcyBwZWVyIGlmIHlvdSBiZWxpZXZlIGl0cyBJRCB0byBzdGlsbCBiZSBhdmFpbGFibGUuXCIpLHZvaWQgdGhpcy5lbWl0RXJyb3IoXCJkaXNjb25uZWN0ZWRcIixcIkNhbm5vdCBjb25uZWN0IHRvIG5ldyBQZWVyIGFmdGVyIGRpc2Nvbm5lY3RpbmcgZnJvbSBzZXJ2ZXIuXCIpO3ZhciBuPW5ldyBpLkRhdGFDb25uZWN0aW9uKHQsdGhpcyxvKTtyZXR1cm4gdGhpcy5fYWRkQ29ubmVjdGlvbih0LG4pLG59LHMucHJvdG90eXBlLmNhbGw9ZnVuY3Rpb24odCxvLGkpe2lmKHRoaXMuZGlzY29ubmVjdGVkKXJldHVybiBlLnV0aWwud2FybihcIllvdSBjYW5ub3QgY29ubmVjdCB0byBhIG5ldyBQZWVyIGJlY2F1c2UgeW91IGNhbGxlZCAuZGlzY29ubmVjdCgpIG9uIHRoaXMgUGVlciBhbmQgZW5kZWQgeW91ciBjb25uZWN0aW9uIHdpdGggdGhlIHNlcnZlci4gWW91IGNhbiBjcmVhdGUgYSBuZXcgUGVlciB0byByZWNvbm5lY3QuXCIpLHZvaWQgdGhpcy5lbWl0RXJyb3IoXCJkaXNjb25uZWN0ZWRcIixcIkNhbm5vdCBjb25uZWN0IHRvIG5ldyBQZWVyIGFmdGVyIGRpc2Nvbm5lY3RpbmcgZnJvbSBzZXJ2ZXIuXCIpO2lmKG8peyhpPWl8fHt9KS5fc3RyZWFtPW87dmFyIHM9bmV3IG4uTWVkaWFDb25uZWN0aW9uKHQsdGhpcyxpKTtyZXR1cm4gdGhpcy5fYWRkQ29ubmVjdGlvbih0LHMpLHN9ZS51dGlsLmVycm9yKFwiVG8gY2FsbCBhIHBlZXIsIHlvdSBtdXN0IHByb3ZpZGUgYSBzdHJlYW0gZnJvbSB5b3VyIGJyb3dzZXIncyBgZ2V0VXNlck1lZGlhYC5cIil9LHMucHJvdG90eXBlLl9hZGRDb25uZWN0aW9uPWZ1bmN0aW9uKGUsdCl7dGhpcy5jb25uZWN0aW9uc1tlXXx8KHRoaXMuY29ubmVjdGlvbnNbZV09W10pLHRoaXMuY29ubmVjdGlvbnNbZV0ucHVzaCh0KX0scy5wcm90b3R5cGUuZ2V0Q29ubmVjdGlvbj1mdW5jdGlvbihlLHQpe3ZhciBvPXRoaXMuY29ubmVjdGlvbnNbZV07aWYoIW8pcmV0dXJuIG51bGw7Zm9yKHZhciBuPTAsaT1vLmxlbmd0aDtuPGk7bisrKWlmKG9bbl0uaWQ9PT10KXJldHVybiBvW25dO3JldHVybiBudWxsfSxzLnByb3RvdHlwZS5fZGVsYXllZEFib3J0PWZ1bmN0aW9uKHQsbyl7dmFyIG49dGhpcztlLnV0aWwuc2V0WmVyb1RpbWVvdXQoZnVuY3Rpb24oKXtuLl9hYm9ydCh0LG8pfSl9LHMucHJvdG90eXBlLl9hYm9ydD1mdW5jdGlvbih0LG8pe2UudXRpbC5lcnJvcihcIkFib3J0aW5nIVwiKSx0aGlzLl9sYXN0U2VydmVySWQ/dGhpcy5kaXNjb25uZWN0KCk6dGhpcy5kZXN0cm95KCksdGhpcy5lbWl0RXJyb3IodCxvKX0scy5wcm90b3R5cGUuZW1pdEVycm9yPWZ1bmN0aW9uKHQsbyl7ZS51dGlsLmVycm9yKFwiRXJyb3I6XCIsbyksXCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPW5ldyBFcnJvcihvKSksby50eXBlPXQsdGhpcy5lbWl0KFwiZXJyb3JcIixvKX0scy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuZGVzdHJveWVkfHwodGhpcy5fY2xlYW51cCgpLHRoaXMuZGlzY29ubmVjdCgpLHRoaXMuZGVzdHJveWVkPSEwKX0scy5wcm90b3R5cGUuX2NsZWFudXA9ZnVuY3Rpb24oKXtpZih0aGlzLmNvbm5lY3Rpb25zKWZvcih2YXIgZT1PYmplY3Qua2V5cyh0aGlzLmNvbm5lY3Rpb25zKSx0PTAsbz1lLmxlbmd0aDt0PG87dCsrKXRoaXMuX2NsZWFudXBQZWVyKGVbdF0pO3RoaXMuZW1pdChcImNsb3NlXCIpfSxzLnByb3RvdHlwZS5fY2xlYW51cFBlZXI9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMuY29ubmVjdGlvbnNbZV0sbz0wLG49dC5sZW5ndGg7bzxuO28rPTEpdFtvXS5jbG9zZSgpfSxzLnByb3RvdHlwZS5kaXNjb25uZWN0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztlLnV0aWwuc2V0WmVyb1RpbWVvdXQoZnVuY3Rpb24oKXt0LmRpc2Nvbm5lY3RlZHx8KHQuZGlzY29ubmVjdGVkPSEwLHQub3Blbj0hMSx0LnNvY2tldCYmdC5zb2NrZXQuY2xvc2UoKSx0LmVtaXQoXCJkaXNjb25uZWN0ZWRcIix0LmlkKSx0Ll9sYXN0U2VydmVySWQ9dC5pZCx0LmlkPW51bGwpfSl9LHMucHJvdG90eXBlLnJlY29ubmVjdD1mdW5jdGlvbigpe2lmKHRoaXMuZGlzY29ubmVjdGVkJiYhdGhpcy5kZXN0cm95ZWQpZS51dGlsLmxvZyhcIkF0dGVtcHRpbmcgcmVjb25uZWN0aW9uIHRvIHNlcnZlciB3aXRoIElEIFwiK3RoaXMuX2xhc3RTZXJ2ZXJJZCksdGhpcy5kaXNjb25uZWN0ZWQ9ITEsdGhpcy5faW5pdGlhbGl6ZVNlcnZlckNvbm5lY3Rpb24oKSx0aGlzLl9pbml0aWFsaXplKHRoaXMuX2xhc3RTZXJ2ZXJJZCk7ZWxzZXtpZih0aGlzLmRlc3Ryb3llZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHBlZXIgY2Fubm90IHJlY29ubmVjdCB0byB0aGUgc2VydmVyLiBJdCBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZC5cIik7aWYodGhpcy5kaXNjb25uZWN0ZWR8fHRoaXMub3Blbil0aHJvdyBuZXcgRXJyb3IoXCJQZWVyIFwiK3RoaXMuaWQrXCIgY2Fubm90IHJlY29ubmVjdCBiZWNhdXNlIGl0IGlzIG5vdCBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgc2VydmVyIVwiKTtlLnV0aWwuZXJyb3IoXCJJbiBhIGh1cnJ5PyBXZSdyZSBzdGlsbCB0cnlpbmcgdG8gbWFrZSB0aGUgaW5pdGlhbCBjb25uZWN0aW9uIVwiKX19LHMucHJvdG90eXBlLmxpc3RBbGxQZWVycz1mdW5jdGlvbih0KXt0PXR8fGZ1bmN0aW9uKCl7fTt2YXIgbz10aGlzLG49bmV3IFhNTEh0dHBSZXF1ZXN0LGk9KHRoaXMub3B0aW9ucy5zZWN1cmU/XCJodHRwczovL1wiOlwiaHR0cDovL1wiKSt0aGlzLm9wdGlvbnMuaG9zdCtcIjpcIit0aGlzLm9wdGlvbnMucG9ydCt0aGlzLm9wdGlvbnMucGF0aCt0aGlzLm9wdGlvbnMua2V5K1wiL3BlZXJzXCI7aSs9XCI/dHM9XCIrKG5ldyBEYXRlKS5nZXRUaW1lKCkrTWF0aC5yYW5kb20oKSxuLm9wZW4oXCJnZXRcIixpLCEwKSxuLm9uZXJyb3I9ZnVuY3Rpb24oZSl7by5fYWJvcnQoXCJzZXJ2ZXItZXJyb3JcIixcIkNvdWxkIG5vdCBnZXQgcGVlcnMgZnJvbSB0aGUgc2VydmVyLlwiKSx0KFtdKX0sbi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZig0PT09bi5yZWFkeVN0YXRlKXtpZig0MDE9PT1uLnN0YXR1cyl7dmFyIGk9XCJcIjt0aHJvdyBpPW8ub3B0aW9ucy5ob3N0IT09ZS51dGlsLkNMT1VEX0hPU1Q/XCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY2xvdWQgc2VydmVyLiBZb3UgY2FuIGVtYWlsIHRlYW1AcGVlcmpzLmNvbSB0byBlbmFibGUgcGVlciBsaXN0aW5nIGZvciB5b3VyIEFQSSBrZXkuXCI6XCJZb3UgbmVlZCB0byBlbmFibGUgYGFsbG93X2Rpc2NvdmVyeWAgb24geW91ciBzZWxmLWhvc3RlZCBQZWVyU2VydmVyIHRvIHVzZSB0aGlzIGZlYXR1cmUuXCIsdChbXSksbmV3IEVycm9yKFwiSXQgZG9lc24ndCBsb29rIGxpa2UgeW91IGhhdmUgcGVybWlzc2lvbiB0byBsaXN0IHBlZXJzIElEcy4gXCIraSl9MjAwIT09bi5zdGF0dXM/dChbXSk6dChKU09OLnBhcnNlKG4ucmVzcG9uc2VUZXh0KSl9fSxuLnNlbmQobnVsbCl9O1xufSx7XCIuL3V0aWxcIjpcIkJIWGZcIixcImV2ZW50ZW1pdHRlcjNcIjpcIjJKSmxcIixcIi4vc29ja2V0XCI6XCJ3Smx2XCIsXCIuL21lZGlhY29ubmVjdGlvblwiOlwiZGJIUFwiLFwiLi9kYXRhY29ubmVjdGlvblwiOlwiR0JUUVwifV0sXCJpVEs2XCI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpIHtcblwidXNlIHN0cmljdFwiO3ZhciBlPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O2V4cG9ydHMuX19lc01vZHVsZT0hMDt2YXIgaT1yZXF1aXJlKFwiLi91dGlsXCIpLG49cmVxdWlyZShcIi4vYWRhcHRlclwiKSxvPXJlcXVpcmUoXCIuL3NvY2tldFwiKSx0PXJlcXVpcmUoXCIuL21lZGlhY29ubmVjdGlvblwiKSxyPXJlcXVpcmUoXCIuL2RhdGFjb25uZWN0aW9uXCIpLGE9cmVxdWlyZShcIi4vcGVlclwiKSxkPXJlcXVpcmUoXCIuL25lZ290aWF0b3JcIiksYz1lKHJlcXVpcmUoXCJqcy1iaW5hcnlwYWNrXCIpKTt3aW5kb3cuU29ja2V0PW8uU29ja2V0LHdpbmRvdy5NZWRpYUNvbm5lY3Rpb249dC5NZWRpYUNvbm5lY3Rpb24sd2luZG93LkRhdGFDb25uZWN0aW9uPXIuRGF0YUNvbm5lY3Rpb24sd2luZG93LlBlZXI9YS5QZWVyLHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbj1uLlJUQ1BlZXJDb25uZWN0aW9uLHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb249bi5SVENTZXNzaW9uRGVzY3JpcHRpb24sd2luZG93LlJUQ0ljZUNhbmRpZGF0ZT1uLlJUQ0ljZUNhbmRpZGF0ZSx3aW5kb3cuTmVnb3RpYXRvcj1kLk5lZ290aWF0b3Isd2luZG93LnV0aWw9aS51dGlsLHdpbmRvdy5CaW5hcnlQYWNrPWMuZGVmYXVsdCxleHBvcnRzLmRlZmF1bHQ9YS5QZWVyO1xufSx7XCIuL3V0aWxcIjpcIkJIWGZcIixcIi4vYWRhcHRlclwiOlwic1h0VlwiLFwiLi9zb2NrZXRcIjpcIndKbHZcIixcIi4vbWVkaWFjb25uZWN0aW9uXCI6XCJkYkhQXCIsXCIuL2RhdGFjb25uZWN0aW9uXCI6XCJHQlRRXCIsXCIuL3BlZXJcIjpcIkh4cGRcIixcIi4vbmVnb3RpYXRvclwiOlwiSENkWFwiLFwianMtYmluYXJ5cGFja1wiOlwibEhPY1wifV19LHt9LFtcImlUSzZcIl0sIG51bGwpXG4vLyMgc291cmNlTWFwcGluZ1VSTD0vcGVlcmpzLm1pbi5tYXAiLCIvLyByYW5kb21Db2xvciBieSBEYXZpZCBNZXJmaWVsZCB1bmRlciB0aGUgQ0MwIGxpY2Vuc2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZG1lcmZpZWxkL3JhbmRvbUNvbG9yL1xuXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAvLyBTdXBwb3J0IENvbW1vbkpTXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG5cbiAgICAvLyBTdXBwb3J0IE5vZGVKUyAmIENvbXBvbmVudCwgd2hpY2ggYWxsb3cgbW9kdWxlLmV4cG9ydHMgdG8gYmUgYSBmdW5jdGlvblxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgQ29tbW9uSlMgMS4xLjEgc3BlY1xuICAgIGV4cG9ydHMucmFuZG9tQ29sb3IgPSByYW5kb21Db2xvcjtcblxuICAvLyBTdXBwb3J0IEFNRFxuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG5cbiAgLy8gU3VwcG9ydCB2YW5pbGxhIHNjcmlwdCBsb2FkaW5nXG4gIH0gZWxzZSB7XG4gICAgcm9vdC5yYW5kb21Db2xvciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gIC8vIFNlZWQgdG8gZ2V0IHJlcGVhdGFibGUgY29sb3JzXG4gIHZhciBzZWVkID0gbnVsbDtcblxuICAvLyBTaGFyZWQgY29sb3IgZGljdGlvbmFyeVxuICB2YXIgY29sb3JEaWN0aW9uYXJ5ID0ge307XG5cbiAgLy8gUG9wdWxhdGUgdGhlIGNvbG9yIGRpY3Rpb25hcnlcbiAgbG9hZENvbG9yQm91bmRzKCk7XG5cbiAgLy8gY2hlY2sgaWYgYSByYW5nZSBpcyB0YWtlblxuICB2YXIgY29sb3JSYW5nZXMgPSBbXTtcblxuICB2YXIgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNlZWQgYW5kIGVuc3VyZSBpdCdzIGFuXG4gICAgLy8gaW50ZWdlci4gT3RoZXJ3aXNlLCByZXNldCB0aGUgc2VlZCB2YWx1ZS5cbiAgICBpZiAob3B0aW9ucy5zZWVkICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5zZWVkICE9PSBudWxsICYmIG9wdGlvbnMuc2VlZCA9PT0gcGFyc2VJbnQob3B0aW9ucy5zZWVkLCAxMCkpIHtcbiAgICAgIHNlZWQgPSBvcHRpb25zLnNlZWQ7XG5cbiAgICAvLyBBIHN0cmluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuc2VlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlZWQgPSBzdHJpbmdUb0ludGVnZXIob3B0aW9ucy5zZWVkKTtcblxuICAgIC8vIFNvbWV0aGluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZCBidXQgaXQgd2Fzbid0IGFuIGludGVnZXIgb3Igc3RyaW5nXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlZWQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNlZWQgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzZWVkIHZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciBvciBzdHJpbmcnKTtcblxuICAgIC8vIE5vIHNlZWQsIHJlc2V0IHRoZSB2YWx1ZSBvdXRzaWRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgSCxTLEI7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGdlbmVyYXRlIG11bHRpcGxlIGNvbG9yc1xuICAgIGlmIChvcHRpb25zLmNvdW50ICE9PSBudWxsICYmIG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICB2YXIgdG90YWxDb2xvcnMgPSBvcHRpb25zLmNvdW50LFxuICAgICAgICAgIGNvbG9ycyA9IFtdO1xuICAgICAgLy8gVmFsdWUgZmFsc2UgYXQgaW5kZXggaSBtZWFucyB0aGUgcmFuZ2UgaSBpcyBub3QgdGFrZW4geWV0LlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29sb3JSYW5nZXMucHVzaChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgb3B0aW9ucy5jb3VudCA9IG51bGw7XG5cbiAgICAgIHdoaWxlICh0b3RhbENvbG9ycyA+IGNvbG9ycy5sZW5ndGgpIHtcblxuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnZW5lcmF0aW5nIG11bHRpcGxlIGNvbG9ycyxcbiAgICAgICAgLy8gaW5jcmVtZW1lbnQgdGhlIHNlZWQuIE90aGVyd2lzZSB3ZSdkIGp1c3RcbiAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIHNhbWUgY29sb3IgZWFjaCB0aW1lLi4uXG4gICAgICAgIGlmIChzZWVkICYmIG9wdGlvbnMuc2VlZCkgb3B0aW9ucy5zZWVkICs9IDE7XG5cbiAgICAgICAgY29sb3JzLnB1c2gocmFuZG9tQ29sb3Iob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmNvdW50ID0gdG90YWxDb2xvcnM7XG5cbiAgICAgIHJldHVybiBjb2xvcnM7XG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgcGljayBhIGh1ZSAoSClcbiAgICBIID0gcGlja0h1ZShvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gdXNlIEggdG8gZGV0ZXJtaW5lIHNhdHVyYXRpb24gKFMpXG4gICAgUyA9IHBpY2tTYXR1cmF0aW9uKEgsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgUyBhbmQgSCB0byBkZXRlcm1pbmUgYnJpZ2h0bmVzcyAoQikuXG4gICAgQiA9IHBpY2tCcmlnaHRuZXNzKEgsIFMsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB3ZSByZXR1cm4gdGhlIEhTQiBjb2xvciBpbiB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICByZXR1cm4gc2V0Rm9ybWF0KFtILFMsQl0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBpY2tIdWUob3B0aW9ucykge1xuICAgIGlmIChjb2xvclJhbmdlcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgaHVlUmFuZ2UgPSBnZXRSZWFsSHVlUmFuZ2Uob3B0aW9ucy5odWUpXG5cbiAgICAgIHZhciBodWUgPSByYW5kb21XaXRoaW4oaHVlUmFuZ2UpXG5cbiAgICAgIC8vRWFjaCBvZiBjb2xvclJhbmdlcy5sZW5ndGggcmFuZ2VzIGhhcyBhIGxlbmd0aCBlcXVhbCBhcHByb3hpbWF0ZWxseSBvbmUgc3RlcFxuICAgICAgdmFyIHN0ZXAgPSAoaHVlUmFuZ2VbMV0gLSBodWVSYW5nZVswXSkgLyBjb2xvclJhbmdlcy5sZW5ndGhcblxuICAgICAgdmFyIGogPSBwYXJzZUludCgoaHVlIC0gaHVlUmFuZ2VbMF0pIC8gc3RlcClcblxuICAgICAgLy9DaGVjayBpZiB0aGUgcmFuZ2UgaiBpcyB0YWtlblxuICAgICAgaWYgKGNvbG9yUmFuZ2VzW2pdID09PSB0cnVlKSB7XG4gICAgICAgIGogPSAoaiArIDIpICUgY29sb3JSYW5nZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sb3JSYW5nZXNbal0gPSB0cnVlXG4gICAgICAgICAgIH1cblxuICAgICAgdmFyIG1pbiA9IChodWVSYW5nZVswXSArIGogKiBzdGVwKSAlIDM1OSxcbiAgICAgICAgICBtYXggPSAoaHVlUmFuZ2VbMF0gKyAoaiArIDEpICogc3RlcCkgJSAzNTk7XG5cbiAgICAgIGh1ZVJhbmdlID0gW21pbiwgbWF4XVxuXG4gICAgICBodWUgPSByYW5kb21XaXRoaW4oaHVlUmFuZ2UpXG5cbiAgICAgIGlmIChodWUgPCAwKSB7aHVlID0gMzYwICsgaHVlO31cbiAgICAgIHJldHVybiBodWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgaHVlUmFuZ2UgPSBnZXRIdWVSYW5nZShvcHRpb25zLmh1ZSlcblxuICAgICAgaHVlID0gcmFuZG9tV2l0aGluKGh1ZVJhbmdlKTtcbiAgICAgIC8vIEluc3RlYWQgb2Ygc3RvcmluZyByZWQgYXMgdHdvIHNlcGVyYXRlIHJhbmdlcyxcbiAgICAgIC8vIHdlIGdyb3VwIHRoZW0sIHVzaW5nIG5lZ2F0aXZlIG51bWJlcnNcbiAgICAgIGlmIChodWUgPCAwKSB7XG4gICAgICAgIGh1ZSA9IDM2MCArIGh1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGh1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwaWNrU2F0dXJhdGlvbiAoaHVlLCBvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9ucy5odWUgPT09ICdtb25vY2hyb21lJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubHVtaW5vc2l0eSA9PT0gJ3JhbmRvbScpIHtcbiAgICAgIHJldHVybiByYW5kb21XaXRoaW4oWzAsMTAwXSk7XG4gICAgfVxuXG4gICAgdmFyIHNhdHVyYXRpb25SYW5nZSA9IGdldFNhdHVyYXRpb25SYW5nZShodWUpO1xuXG4gICAgdmFyIHNNaW4gPSBzYXR1cmF0aW9uUmFuZ2VbMF0sXG4gICAgICAgIHNNYXggPSBzYXR1cmF0aW9uUmFuZ2VbMV07XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdicmlnaHQnOlxuICAgICAgICBzTWluID0gNTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgc01pbiA9IHNNYXggLSAxMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgc01heCA9IDU1O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiByYW5kb21XaXRoaW4oW3NNaW4sIHNNYXhdKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja0JyaWdodG5lc3MgKEgsIFMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBiTWluID0gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUyksXG4gICAgICAgIGJNYXggPSAxMDA7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgYk1heCA9IGJNaW4gKyAyMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgYk1pbiA9IChiTWF4ICsgYk1pbikvMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgIGJNaW4gPSAwO1xuICAgICAgICBiTWF4ID0gMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtiTWluLCBiTWF4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtYXQgKGhzdiwgb3B0aW9ucykge1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmZvcm1hdCkge1xuXG4gICAgICBjYXNlICdoc3ZBcnJheSc6XG4gICAgICAgIHJldHVybiBoc3Y7XG5cbiAgICAgIGNhc2UgJ2hzbEFycmF5JzpcbiAgICAgICAgcmV0dXJuIEhTVnRvSFNMKGhzdik7XG5cbiAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgIHZhciBoc2wgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbCgnK2hzbFswXSsnLCAnK2hzbFsxXSsnJSwgJytoc2xbMl0rJyUpJztcblxuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIHZhciBoc2xDb2xvciA9IEhTVnRvSFNMKGhzdik7XG4gICAgICAgIHZhciBhbHBoYSA9IG9wdGlvbnMuYWxwaGEgfHwgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuICdoc2xhKCcraHNsQ29sb3JbMF0rJywgJytoc2xDb2xvclsxXSsnJSwgJytoc2xDb2xvclsyXSsnJSwgJyArIGFscGhhICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b1JHQihoc3YpO1xuXG4gICAgICBjYXNlICdyZ2InOlxuICAgICAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYi5qb2luKCcsICcpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JhJzpcbiAgICAgICAgdmFyIHJnYkNvbG9yID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgdmFyIGFscGhhID0gb3B0aW9ucy5hbHBoYSB8fCBNYXRoLnJhbmRvbSgpO1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHJnYkNvbG9yLmpvaW4oJywgJykgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBIU1Z0b0hleChoc3YpO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUykge1xuXG4gICAgdmFyIGxvd2VyQm91bmRzID0gZ2V0Q29sb3JJbmZvKEgpLmxvd2VyQm91bmRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb3dlckJvdW5kcy5sZW5ndGggLSAxOyBpKyspIHtcblxuICAgICAgdmFyIHMxID0gbG93ZXJCb3VuZHNbaV1bMF0sXG4gICAgICAgICAgdjEgPSBsb3dlckJvdW5kc1tpXVsxXTtcblxuICAgICAgdmFyIHMyID0gbG93ZXJCb3VuZHNbaSsxXVswXSxcbiAgICAgICAgICB2MiA9IGxvd2VyQm91bmRzW2krMV1bMV07XG5cbiAgICAgIGlmIChTID49IHMxICYmIFMgPD0gczIpIHtcblxuICAgICAgICAgdmFyIG0gPSAodjIgLSB2MSkvKHMyIC0gczEpLFxuICAgICAgICAgICAgIGIgPSB2MSAtIG0qczE7XG5cbiAgICAgICAgIHJldHVybiBtKlMgKyBiO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIdWVSYW5nZSAoY29sb3JJbnB1dCkge1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZUludChjb2xvcklucHV0KSA9PT0gJ251bWJlcicpIHtcblxuICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KGNvbG9ySW5wdXQpO1xuXG4gICAgICBpZiAobnVtYmVyIDwgMzYwICYmIG51bWJlciA+IDApIHtcbiAgICAgICAgcmV0dXJuIFtudW1iZXIsIG51bWJlcl07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9ySW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgIGlmIChjb2xvckRpY3Rpb25hcnlbY29sb3JJbnB1dF0pIHtcbiAgICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdO1xuICAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UpIHtyZXR1cm4gY29sb3IuaHVlUmFuZ2U7fVxuICAgICAgfSBlbHNlIGlmIChjb2xvcklucHV0Lm1hdGNoKC9eIz8oWzAtOUEtRl17M318WzAtOUEtRl17Nn0pJC9pKSkge1xuICAgICAgICB2YXIgaHVlID0gSGV4VG9IU0IoY29sb3JJbnB1dClbMF07XG4gICAgICAgIHJldHVybiBbIGh1ZSwgaHVlIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFswLDM2MF07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNhdHVyYXRpb25SYW5nZSAoaHVlKSB7XG4gICAgcmV0dXJuIGdldENvbG9ySW5mbyhodWUpLnNhdHVyYXRpb25SYW5nZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbG9ySW5mbyAoaHVlKSB7XG5cbiAgICAvLyBNYXBzIHJlZCBjb2xvcnMgdG8gbWFrZSBwaWNraW5nIGh1ZSBlYXNpZXJcbiAgICBpZiAoaHVlID49IDMzNCAmJiBodWUgPD0gMzYwKSB7XG4gICAgICBodWUtPSAzNjA7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY29sb3JOYW1lIGluIGNvbG9yRGljdGlvbmFyeSkge1xuICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvck5hbWVdO1xuICAgICAgIGlmIChjb2xvci5odWVSYW5nZSAmJlxuICAgICAgICAgICBodWUgPj0gY29sb3IuaHVlUmFuZ2VbMF0gJiZcbiAgICAgICAgICAgaHVlIDw9IGNvbG9yLmh1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbG9yRGljdGlvbmFyeVtjb2xvck5hbWVdO1xuICAgICAgIH1cbiAgICB9IHJldHVybiAnQ29sb3Igbm90IGZvdW5kJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbVdpdGhpbiAocmFuZ2UpIHtcbiAgICBpZiAoc2VlZCA9PT0gbnVsbCkge1xuICAgICAgLy9nZW5lcmF0ZSByYW5kb20gZXZlbmx5IGRlc3RpbmN0IG51bWJlciBmcm9tIDogaHR0cHM6Ly9tYXJ0aW4uYW5rZXJsLmNvbS8yMDA5LzEyLzA5L2hvdy10by1jcmVhdGUtcmFuZG9tLWNvbG9ycy1wcm9ncmFtbWF0aWNhbGx5L1xuICAgICAgdmFyIGdvbGRlbl9yYXRpbyA9IDAuNjE4MDMzOTg4NzQ5ODk1XG4gICAgICB2YXIgcj1NYXRoLnJhbmRvbSgpXG4gICAgICByICs9IGdvbGRlbl9yYXRpb1xuICAgICAgciAlPSAxXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5nZVswXSArIHIqKHJhbmdlWzFdICsgMSAtIHJhbmdlWzBdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vU2VlZGVkIHJhbmRvbSBhbGdvcml0aG0gZnJvbSBodHRwOi8vaW5kaWVnYW1yLmNvbS9nZW5lcmF0ZS1yZXBlYXRhYmxlLXJhbmRvbS1udW1iZXJzLWluLWpzL1xuICAgICAgdmFyIG1heCA9IHJhbmdlWzFdIHx8IDE7XG4gICAgICB2YXIgbWluID0gcmFuZ2VbMF0gfHwgMDtcbiAgICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICB2YXIgcm5kID0gc2VlZCAvIDIzMzI4MC4wO1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgcm5kICogKG1heCAtIG1pbikpO1xufVxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IZXggKGhzdil7XG5cbiAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gJzAnICsgaGV4IDogaGV4O1xuICAgIH1cblxuICAgIHZhciBoZXggPSAnIycgKyBjb21wb25lbnRUb0hleChyZ2JbMF0pICsgY29tcG9uZW50VG9IZXgocmdiWzFdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsyXSk7XG5cbiAgICByZXR1cm4gaGV4O1xuXG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVDb2xvciAobmFtZSwgaHVlUmFuZ2UsIGxvd2VyQm91bmRzKSB7XG5cbiAgICB2YXIgc01pbiA9IGxvd2VyQm91bmRzWzBdWzBdLFxuICAgICAgICBzTWF4ID0gbG93ZXJCb3VuZHNbbG93ZXJCb3VuZHMubGVuZ3RoIC0gMV1bMF0sXG5cbiAgICAgICAgYk1pbiA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzFdLFxuICAgICAgICBiTWF4ID0gbG93ZXJCb3VuZHNbMF1bMV07XG5cbiAgICBjb2xvckRpY3Rpb25hcnlbbmFtZV0gPSB7XG4gICAgICBodWVSYW5nZTogaHVlUmFuZ2UsXG4gICAgICBsb3dlckJvdW5kczogbG93ZXJCb3VuZHMsXG4gICAgICBzYXR1cmF0aW9uUmFuZ2U6IFtzTWluLCBzTWF4XSxcbiAgICAgIGJyaWdodG5lc3NSYW5nZTogW2JNaW4sIGJNYXhdXG4gICAgfTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZENvbG9yQm91bmRzICgpIHtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgbnVsbCxcbiAgICAgIFtbMCwwXSxbMTAwLDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdyZWQnLFxuICAgICAgWy0yNiwxOF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkyXSxbNDAsODldLFs1MCw4NV0sWzYwLDc4XSxbNzAsNzBdLFs4MCw2MF0sWzkwLDU1XSxbMTAwLDUwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnb3JhbmdlJyxcbiAgICAgIFsxOSw0Nl0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkzXSxbNDAsODhdLFs1MCw4Nl0sWzYwLDg1XSxbNzAsNzBdLFsxMDAsNzBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICd5ZWxsb3cnLFxuICAgICAgWzQ3LDYyXSxcbiAgICAgIFtbMjUsMTAwXSxbNDAsOTRdLFs1MCw4OV0sWzYwLDg2XSxbNzAsODRdLFs4MCw4Ml0sWzkwLDgwXSxbMTAwLDc1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnZ3JlZW4nLFxuICAgICAgWzYzLDE3OF0sXG4gICAgICBbWzMwLDEwMF0sWzQwLDkwXSxbNTAsODVdLFs2MCw4MV0sWzcwLDc0XSxbODAsNjRdLFs5MCw1MF0sWzEwMCw0MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2JsdWUnLFxuICAgICAgWzE3OSwgMjU3XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODZdLFs0MCw4MF0sWzUwLDc0XSxbNjAsNjBdLFs3MCw1Ml0sWzgwLDQ0XSxbOTAsMzldLFsxMDAsMzVdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwdXJwbGUnLFxuICAgICAgWzI1OCwgMjgyXSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODddLFs0MCw3OV0sWzUwLDcwXSxbNjAsNjVdLFs3MCw1OV0sWzgwLDUyXSxbOTAsNDVdLFsxMDAsNDJdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwaW5rJyxcbiAgICAgIFsyODMsIDMzNF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkwXSxbNDAsODZdLFs2MCw4NF0sWzgwLDgwXSxbOTAsNzVdLFsxMDAsNzNdXVxuICAgICk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvUkdCIChoc3YpIHtcblxuICAgIC8vIHRoaXMgZG9lc24ndCB3b3JrIGZvciB0aGUgdmFsdWVzIG9mIDAgYW5kIDM2MFxuICAgIC8vIGhlcmUncyB0aGUgaGFja3kgZml4XG4gICAgdmFyIGggPSBoc3ZbMF07XG4gICAgaWYgKGggPT09IDApIHtoID0gMTt9XG4gICAgaWYgKGggPT09IDM2MCkge2ggPSAzNTk7fVxuXG4gICAgLy8gUmViYXNlIHRoZSBoLHMsdiB2YWx1ZXNcbiAgICBoID0gaC8zNjA7XG4gICAgdmFyIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgICB2ID0gaHN2WzJdLzEwMDtcblxuICAgIHZhciBoX2kgPSBNYXRoLmZsb29yKGgqNiksXG4gICAgICBmID0gaCAqIDYgLSBoX2ksXG4gICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICBxID0gdiAqICgxIC0gZipzKSxcbiAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpKnMpLFxuICAgICAgciA9IDI1NixcbiAgICAgIGcgPSAyNTYsXG4gICAgICBiID0gMjU2O1xuXG4gICAgc3dpdGNoKGhfaSkge1xuICAgICAgY2FzZSAwOiByID0gdjsgZyA9IHQ7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHIgPSBxOyBnID0gdjsgYiA9IHA7ICBicmVhaztcbiAgICAgIGNhc2UgMjogciA9IHA7IGcgPSB2OyBiID0gdDsgIGJyZWFrO1xuICAgICAgY2FzZSAzOiByID0gcDsgZyA9IHE7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IHIgPSB0OyBnID0gcDsgYiA9IHY7ICBicmVhaztcbiAgICAgIGNhc2UgNTogciA9IHY7IGcgPSBwOyBiID0gcTsgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbTWF0aC5mbG9vcihyKjI1NSksIE1hdGguZmxvb3IoZyoyNTUpLCBNYXRoLmZsb29yKGIqMjU1KV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEhleFRvSFNCIChoZXgpIHtcbiAgICBoZXggPSBoZXgucmVwbGFjZSgvXiMvLCAnJyk7XG4gICAgaGV4ID0gaGV4Lmxlbmd0aCA9PT0gMyA/IGhleC5yZXBsYWNlKC8oLikvZywgJyQxJDEnKSA6IGhleDtcblxuICAgIHZhciByZWQgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNikgLyAyNTUsXG4gICAgICAgICAgZ3JlZW4gPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNikgLyAyNTUsXG4gICAgICAgICAgYmx1ZSA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KSAvIDI1NTtcblxuICAgIHZhciBjTWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSksXG4gICAgICAgICAgZGVsdGEgPSBjTWF4IC0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSksXG4gICAgICAgICAgc2F0dXJhdGlvbiA9IGNNYXggPyAoZGVsdGEgLyBjTWF4KSA6IDA7XG5cbiAgICBzd2l0Y2ggKGNNYXgpIHtcbiAgICAgIGNhc2UgcmVkOiByZXR1cm4gWyA2MCAqICgoKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSkgJSA2KSB8fCAwLCBzYXR1cmF0aW9uLCBjTWF4IF07XG4gICAgICBjYXNlIGdyZWVuOiByZXR1cm4gWyA2MCAqICgoKGJsdWUgLSByZWQpIC8gZGVsdGEpICsgMikgfHwgMCwgc2F0dXJhdGlvbiwgY01heCBdO1xuICAgICAgY2FzZSBibHVlOiByZXR1cm4gWyA2MCAqICgoKHJlZCAtIGdyZWVuKSAvIGRlbHRhKSArIDQpIHx8IDAsIHNhdHVyYXRpb24sIGNNYXggXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b0hTTCAoaHN2KSB7XG4gICAgdmFyIGggPSBoc3ZbMF0sXG4gICAgICBzID0gaHN2WzFdLzEwMCxcbiAgICAgIHYgPSBoc3ZbMl0vMTAwLFxuICAgICAgayA9ICgyLXMpKnY7XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCxcbiAgICAgIE1hdGgucm91bmQocyp2IC8gKGs8MSA/IGsgOiAyLWspICogMTAwMDApIC8gMTAwLFxuICAgICAgay8yICogMTAwXG4gICAgXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ1RvSW50ZWdlciAoc3RyaW5nKSB7XG4gICAgdmFyIHRvdGFsID0gMFxuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b3RhbCA+PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgYnJlYWs7XG4gICAgICB0b3RhbCArPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuICAgIH1cbiAgICByZXR1cm4gdG90YWxcbiAgfVxuXG4gIC8vIGdldCBUaGUgcmFuZ2Ugb2YgZ2l2ZW4gaHVlIHdoZW4gb3B0aW9ucy5jb3VudCE9MFxuICBmdW5jdGlvbiBnZXRSZWFsSHVlUmFuZ2UoY29sb3JIdWUpXG4gIHsgaWYgKCFpc05hTihjb2xvckh1ZSkpIHtcbiAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoY29sb3JIdWUpO1xuXG4gICAgaWYgKG51bWJlciA8IDM2MCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICByZXR1cm4gZ2V0Q29sb3JJbmZvKGNvbG9ySHVlKS5odWVSYW5nZVxuICAgIH1cbiAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb2xvckh1ZSA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgaWYgKGNvbG9yRGljdGlvbmFyeVtjb2xvckh1ZV0pIHtcbiAgICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9ySHVlXTtcblxuICAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UpIHtcbiAgICAgICAgICByZXR1cm4gY29sb3IuaHVlUmFuZ2VcbiAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2xvckh1ZS5tYXRjaCgvXiM/KFswLTlBLUZdezN9fFswLTlBLUZdezZ9KSQvaSkpIHtcbiAgICAgICAgdmFyIGh1ZSA9IEhleFRvSFNCKGNvbG9ySHVlKVswXVxuICAgICAgICByZXR1cm4gZ2V0Q29sb3JJbmZvKGh1ZSkuaHVlUmFuZ2VcbiAgICB9XG4gIH1cblxuICAgIHJldHVybiBbMCwzNjBdXG59XG4gIHJldHVybiByYW5kb21Db2xvcjtcbn0pKTtcbiIsIi8vIEEgbGlicmFyeSBvZiBzZWVkYWJsZSBSTkdzIGltcGxlbWVudGVkIGluIEphdmFzY3JpcHQuXG4vL1xuLy8gVXNhZ2U6XG4vL1xuLy8gdmFyIHNlZWRyYW5kb20gPSByZXF1aXJlKCdzZWVkcmFuZG9tJyk7XG4vLyB2YXIgcmFuZG9tID0gc2VlZHJhbmRvbSgxKTsgLy8gb3IgYW55IHNlZWQuXG4vLyB2YXIgeCA9IHJhbmRvbSgpOyAgICAgICAvLyAwIDw9IHggPCAxLiAgRXZlcnkgYml0IGlzIHJhbmRvbS5cbi8vIHZhciB4ID0gcmFuZG9tLnF1aWNrKCk7IC8vIDAgPD0geCA8IDEuICAzMiBiaXRzIG9mIHJhbmRvbW5lc3MuXG5cbi8vIGFsZWEsIGEgNTMtYml0IG11bHRpcGx5LXdpdGgtY2FycnkgZ2VuZXJhdG9yIGJ5IEpvaGFubmVzIEJhYWfDuGUuXG4vLyBQZXJpb2Q6IH4yXjExNlxuLy8gUmVwb3J0ZWQgdG8gcGFzcyBhbGwgQmlnQ3J1c2ggdGVzdHMuXG52YXIgYWxlYSA9IHJlcXVpcmUoJy4vbGliL2FsZWEnKTtcblxuLy8geG9yMTI4LCBhIHB1cmUgeG9yLXNoaWZ0IGdlbmVyYXRvciBieSBHZW9yZ2UgTWFyc2FnbGlhLlxuLy8gUGVyaW9kOiAyXjEyOC0xLlxuLy8gUmVwb3J0ZWQgdG8gZmFpbDogTWF0cml4UmFuayBhbmQgTGluZWFyQ29tcC5cbnZhciB4b3IxMjggPSByZXF1aXJlKCcuL2xpYi94b3IxMjgnKTtcblxuLy8geG9yd293LCBHZW9yZ2UgTWFyc2FnbGlhJ3MgMTYwLWJpdCB4b3Itc2hpZnQgY29tYmluZWQgcGx1cyB3ZXlsLlxuLy8gUGVyaW9kOiAyXjE5Mi0yXjMyXG4vLyBSZXBvcnRlZCB0byBmYWlsOiBDb2xsaXNpb25PdmVyLCBTaW1wUG9rZXIsIGFuZCBMaW5lYXJDb21wLlxudmFyIHhvcndvdyA9IHJlcXVpcmUoJy4vbGliL3hvcndvdycpO1xuXG4vLyB4b3JzaGlmdDcsIGJ5IEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyLCB0YWtlc1xuLy8gYSBkaWZmZXJlbnQgYXBwcm9hY2g6IGl0IGFkZHMgcm9idXN0bmVzcyBieSBhbGxvd2luZyBtb3JlIHNoaWZ0c1xuLy8gdGhhbiBNYXJzYWdsaWEncyBvcmlnaW5hbCB0aHJlZS4gIEl0IGlzIGEgNy1zaGlmdCBnZW5lcmF0b3Jcbi8vIHdpdGggMjU2IGJpdHMsIHRoYXQgcGFzc2VzIEJpZ0NydXNoIHdpdGggbm8gc3lzdG1hdGljIGZhaWx1cmVzLlxuLy8gUGVyaW9kIDJeMjU2LTEuXG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHhvcnNoaWZ0NyA9IHJlcXVpcmUoJy4vbGliL3hvcnNoaWZ0NycpO1xuXG4vLyB4b3I0MDk2LCBieSBSaWNoYXJkIEJyZW50LCBpcyBhIDQwOTYtYml0IHhvci1zaGlmdCB3aXRoIGFcbi8vIHZlcnkgbG9uZyBwZXJpb2QgdGhhdCBhbHNvIGFkZHMgYSBXZXlsIGdlbmVyYXRvci4gSXQgYWxzbyBwYXNzZXNcbi8vIEJpZ0NydXNoIHdpdGggbm8gc3lzdGVtYXRpYyBmYWlsdXJlcy4gIEl0cyBsb25nIHBlcmlvZCBtYXlcbi8vIGJlIHVzZWZ1bCBpZiB5b3UgaGF2ZSBtYW55IGdlbmVyYXRvcnMgYW5kIG5lZWQgdG8gYXZvaWRcbi8vIGNvbGxpc2lvbnMuXG4vLyBQZXJpb2Q6IDJeNDEyOC0yXjMyLlxuLy8gTm8gc3lzdGVtYXRpYyBCaWdDcnVzaCBmYWlsdXJlcyByZXBvcnRlZC5cbnZhciB4b3I0MDk2ID0gcmVxdWlyZSgnLi9saWIveG9yNDA5NicpO1xuXG4vLyBUeWNoZS1pLCBieSBTYW11ZWwgTmV2ZXMgYW5kIEZpbGlwZSBBcmF1am8sIGlzIGEgYml0LXNoaWZ0aW5nIHJhbmRvbVxuLy8gbnVtYmVyIGdlbmVyYXRvciBkZXJpdmVkIGZyb20gQ2hhQ2hhLCBhIG1vZGVybiBzdHJlYW0gY2lwaGVyLlxuLy8gaHR0cHM6Ly9lZGVuLmRlaS51Yy5wdC9+c25ldmVzL3B1YnMvMjAxMS1zbmZhMi5wZGZcbi8vIFBlcmlvZDogfjJeMTI3XG4vLyBObyBzeXN0ZW1hdGljIEJpZ0NydXNoIGZhaWx1cmVzIHJlcG9ydGVkLlxudmFyIHR5Y2hlaSA9IHJlcXVpcmUoJy4vbGliL3R5Y2hlaScpO1xuXG4vLyBUaGUgb3JpZ2luYWwgQVJDNC1iYXNlZCBwcm5nIGluY2x1ZGVkIGluIHRoaXMgbGlicmFyeS5cbi8vIFBlcmlvZDogfjJeMTYwMFxudmFyIHNyID0gcmVxdWlyZSgnLi9zZWVkcmFuZG9tJyk7XG5cbnNyLmFsZWEgPSBhbGVhO1xuc3IueG9yMTI4ID0geG9yMTI4O1xuc3IueG9yd293ID0geG9yd293O1xuc3IueG9yc2hpZnQ3ID0geG9yc2hpZnQ3O1xuc3IueG9yNDA5NiA9IHhvcjQwOTY7XG5zci50eWNoZWkgPSB0eWNoZWk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3I7XG4iLCIvLyBBIHBvcnQgb2YgYW4gYWxnb3JpdGhtIGJ5IEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2UuY29tPiwgMjAxMFxuLy8gaHR0cDovL2JhYWdvZS5jb20vZW4vUmFuZG9tTXVzaW5ncy9qYXZhc2NyaXB0L1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL25xdWlubGFuL2JldHRlci1yYW5kb20tbnVtYmVycy1mb3ItamF2YXNjcmlwdC1taXJyb3Jcbi8vIE9yaWdpbmFsIHdvcmsgaXMgdW5kZXIgTUlUIGxpY2Vuc2UgLVxuXG4vLyBDb3B5cmlnaHQgKEMpIDIwMTAgYnkgSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5vcmc+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIEFsZWEoc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzLCBtYXNoID0gTWFzaCgpO1xuXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IDIwOTE2MzkgKiBtZS5zMCArIG1lLmMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIG1lLnMwID0gbWUuczE7XG4gICAgbWUuczEgPSBtZS5zMjtcbiAgICByZXR1cm4gbWUuczIgPSB0IC0gKG1lLmMgPSB0IHwgMCk7XG4gIH07XG5cbiAgLy8gQXBwbHkgdGhlIHNlZWRpbmcgYWxnb3JpdGhtIGZyb20gQmFhZ29lLlxuICBtZS5jID0gMTtcbiAgbWUuczAgPSBtYXNoKCcgJyk7XG4gIG1lLnMxID0gbWFzaCgnICcpO1xuICBtZS5zMiA9IG1hc2goJyAnKTtcbiAgbWUuczAgLT0gbWFzaChzZWVkKTtcbiAgaWYgKG1lLnMwIDwgMCkgeyBtZS5zMCArPSAxOyB9XG4gIG1lLnMxIC09IG1hc2goc2VlZCk7XG4gIGlmIChtZS5zMSA8IDApIHsgbWUuczEgKz0gMTsgfVxuICBtZS5zMiAtPSBtYXNoKHNlZWQpO1xuICBpZiAobWUuczIgPCAwKSB7IG1lLnMyICs9IDE7IH1cbiAgbWFzaCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LmMgPSBmLmM7XG4gIHQuczAgPSBmLnMwO1xuICB0LnMxID0gZi5zMTtcbiAgdC5zMiA9IGYuczI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IEFsZWEoc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSB4Zy5uZXh0O1xuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpICogMHgxMDAwMDAwMDApIHwgMDsgfVxuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwcm5nKCkgKyAocHJuZygpICogMHgyMDAwMDAgfCAwKSAqIDEuMTEwMjIzMDI0NjI1MTU2NWUtMTY7IC8vIDJeLTUzXG4gIH07XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5mdW5jdGlvbiBNYXNoKCkge1xuICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG5cbiAgdmFyIG1hc2ggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YSA9IFN0cmluZyhkYXRhKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgaCAtPSBuO1xuICAgICAgaCAqPSBuO1xuICAgICAgbiA9IGggPj4+IDA7XG4gICAgICBoIC09IG47XG4gICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgIH1cbiAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgfTtcblxuICByZXR1cm4gbWFzaDtcbn1cblxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLmFsZWEgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcIlR5Y2hlLWlcIiBwcm5nIGFsZ29yaXRobSBieVxuLy8gU2FtdWVsIE5ldmVzIGFuZCBGaWxpcGUgQXJhdWpvLlxuLy8gU2VlIGh0dHBzOi8vZWRlbi5kZWkudWMucHQvfnNuZXZlcy9wdWJzLzIwMTEtc25mYTIucGRmXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGIgPSBtZS5iLCBjID0gbWUuYywgZCA9IG1lLmQsIGEgPSBtZS5hO1xuICAgIGIgPSAoYiA8PCAyNSkgXiAoYiA+Pj4gNykgXiBjO1xuICAgIGMgPSAoYyAtIGQpIHwgMDtcbiAgICBkID0gKGQgPDwgMjQpIF4gKGQgPj4+IDgpIF4gYTtcbiAgICBhID0gKGEgLSBiKSB8IDA7XG4gICAgbWUuYiA9IGIgPSAoYiA8PCAyMCkgXiAoYiA+Pj4gMTIpIF4gYztcbiAgICBtZS5jID0gYyA9IChjIC0gZCkgfCAwO1xuICAgIG1lLmQgPSAoZCA8PCAxNikgXiAoYyA+Pj4gMTYpIF4gYTtcbiAgICByZXR1cm4gbWUuYSA9IChhIC0gYikgfCAwO1xuICB9O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgaXMgbm9uLWludmVydGVkIHR5Y2hlLCB3aGljaCBoYXMgYmV0dGVyIGludGVybmFsXG4gICAqIGJpdCBkaWZmdXNpb24sIGJ1dCB3aGljaCBpcyBhYm91dCAyNSUgc2xvd2VyIHRoYW4gdHljaGUtaSBpbiBKUy5cbiAgbWUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gbWUuYSwgYiA9IG1lLmIsIGMgPSBtZS5jLCBkID0gbWUuZDtcbiAgICBhID0gKG1lLmEgKyBtZS5iIHwgMCkgPj4+IDA7XG4gICAgZCA9IG1lLmQgXiBhOyBkID0gZCA8PCAxNiBeIGQgPj4+IDE2O1xuICAgIGMgPSBtZS5jICsgZCB8IDA7XG4gICAgYiA9IG1lLmIgXiBjOyBiID0gYiA8PCAxMiBeIGQgPj4+IDIwO1xuICAgIG1lLmEgPSBhID0gYSArIGIgfCAwO1xuICAgIGQgPSBkIF4gYTsgbWUuZCA9IGQgPSBkIDw8IDggXiBkID4+PiAyNDtcbiAgICBtZS5jID0gYyA9IGMgKyBkIHwgMDtcbiAgICBiID0gYiBeIGM7XG4gICAgcmV0dXJuIG1lLmIgPSAoYiA8PCA3IF4gYiA+Pj4gMjUpO1xuICB9XG4gICovXG5cbiAgbWUuYSA9IDA7XG4gIG1lLmIgPSAwO1xuICBtZS5jID0gMjY1NDQzNTc2OSB8IDA7XG4gIG1lLmQgPSAxMzY3MTMwNTUxO1xuXG4gIGlmIChzZWVkID09PSBNYXRoLmZsb29yKHNlZWQpKSB7XG4gICAgLy8gSW50ZWdlciBzZWVkLlxuICAgIG1lLmEgPSAoc2VlZCAvIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgbWUuYiA9IHNlZWQgfCAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFN0cmluZyBzZWVkLlxuICAgIHN0cnNlZWQgKz0gc2VlZDtcbiAgfVxuXG4gIC8vIE1peCBpbiBzdHJpbmcgc2VlZCwgdGhlbiBkaXNjYXJkIGFuIGluaXRpYWwgYmF0Y2ggb2YgNjQgdmFsdWVzLlxuICBmb3IgKHZhciBrID0gMDsgayA8IHN0cnNlZWQubGVuZ3RoICsgMjA7IGsrKykge1xuICAgIG1lLmIgXj0gc3Ryc2VlZC5jaGFyQ29kZUF0KGspIHwgMDtcbiAgICBtZS5uZXh0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuYSA9IGYuYTtcbiAgdC5iID0gZi5iO1xuICB0LmMgPSBmLmM7XG4gIHQuZCA9IGYuZDtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAodHlwZW9mKHN0YXRlKSA9PSAnb2JqZWN0JykgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnR5Y2hlaSA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cblxuIiwiLy8gQSBKYXZhc2NyaXB0IGltcGxlbWVudGFpb24gb2YgdGhlIFwieG9yMTI4XCIgcHJuZyBhbGdvcml0aG0gYnlcbi8vIEdlb3JnZSBNYXJzYWdsaWEuICBTZWUgaHR0cDovL3d3dy5qc3RhdHNvZnQub3JnL3YwOC9pMTQvcGFwZXJcblxuKGZ1bmN0aW9uKGdsb2JhbCwgbW9kdWxlLCBkZWZpbmUpIHtcblxuZnVuY3Rpb24gWG9yR2VuKHNlZWQpIHtcbiAgdmFyIG1lID0gdGhpcywgc3Ryc2VlZCA9ICcnO1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IG1lLnggXiAobWUueCA8PCAxMSk7XG4gICAgbWUueCA9IG1lLnk7XG4gICAgbWUueSA9IG1lLno7XG4gICAgbWUueiA9IG1lLnc7XG4gICAgcmV0dXJuIG1lLncgXj0gKG1lLncgPj4+IDE5KSBeIHQgXiAodCA+Pj4gOCk7XG4gIH07XG5cbiAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAvLyBJbnRlZ2VyIHNlZWQuXG4gICAgbWUueCA9IHNlZWQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RyaW5nIHNlZWQuXG4gICAgc3Ryc2VlZCArPSBzZWVkO1xuICB9XG5cbiAgLy8gTWl4IGluIHN0cmluZyBzZWVkLCB0aGVuIGRpc2NhcmQgYW4gaW5pdGlhbCBiYXRjaCBvZiA2NCB2YWx1ZXMuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgc3Ryc2VlZC5sZW5ndGggKyA2NDsgaysrKSB7XG4gICAgbWUueCBePSBzdHJzZWVkLmNoYXJDb2RlQXQoaykgfCAwO1xuICAgIG1lLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC54ID0gZi54O1xuICB0LnkgPSBmLnk7XG4gIHQueiA9IGYuejtcbiAgdC53ID0gZi53O1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3IxMjggPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIFJpY2hhcmQgQnJlbnQncyBYb3JnZW5zIHhvcjQwOTYgYWxnb3JpdGhtLlxuLy9cbi8vIFRoaXMgZmFzdCBub24tY3J5cHRvZ3JhcGhpYyByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBpcyBkZXNpZ25lZCBmb3Jcbi8vIHVzZSBpbiBNb250ZS1DYXJsbyBhbGdvcml0aG1zLiBJdCBjb21iaW5lcyBhIGxvbmctcGVyaW9kIHhvcnNoaWZ0XG4vLyBnZW5lcmF0b3Igd2l0aCBhIFdleWwgZ2VuZXJhdG9yLCBhbmQgaXQgcGFzc2VzIGFsbCBjb21tb24gYmF0dGVyaWVzXG4vLyBvZiBzdGFzdGljaWFsIHRlc3RzIGZvciByYW5kb21uZXNzIHdoaWxlIGNvbnN1bWluZyBvbmx5IGEgZmV3IG5hbm9zZWNvbmRzXG4vLyBmb3IgZWFjaCBwcm5nIGdlbmVyYXRlZC4gIEZvciBiYWNrZ3JvdW5kIG9uIHRoZSBnZW5lcmF0b3IsIHNlZSBCcmVudCdzXG4vLyBwYXBlcjogXCJTb21lIGxvbmctcGVyaW9kIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycyB1c2luZyBzaGlmdHMgYW5kIHhvcnMuXCJcbi8vIGh0dHA6Ly9hcnhpdi5vcmcvcGRmLzEwMDQuMzExNXYxLnBkZlxuLy9cbi8vIFVzYWdlOlxuLy9cbi8vIHZhciB4b3I0MDk2ID0gcmVxdWlyZSgneG9yNDA5NicpO1xuLy8gcmFuZG9tID0geG9yNDA5NigxKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWVkIHdpdGggaW50MzIgb3Igc3RyaW5nLlxuLy8gYXNzZXJ0LmVxdWFsKHJhbmRvbSgpLCAwLjE1MjA0MzY0NTA1Mzg1NDcpOyAvLyAoMCwgMSkgcmFuZ2UsIDUzIGJpdHMuXG4vLyBhc3NlcnQuZXF1YWwocmFuZG9tLmludDMyKCksIDE4MDY1MzQ4OTcpOyAgIC8vIHNpZ25lZCBpbnQzMiwgMzIgYml0cy5cbi8vXG4vLyBGb3Igbm9uemVybyBudW1lcmljIGtleXMsIHRoaXMgaW1wZWxlbWVudGF0aW9uIHByb3ZpZGVzIGEgc2VxdWVuY2Vcbi8vIGlkZW50aWNhbCB0byB0aGF0IGJ5IEJyZW50J3MgeG9yZ2VucyAzIGltcGxlbWVudGFpb24gaW4gQy4gIFRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGFsc28gcHJvdmlkZXMgZm9yIGluaXRhbGl6aW5nIHRoZSBnZW5lcmF0b3Igd2l0aFxuLy8gc3RyaW5nIHNlZWRzLCBvciBmb3Igc2F2aW5nIGFuZCByZXN0b3JpbmcgdGhlIHN0YXRlIG9mIHRoZSBnZW5lcmF0b3IuXG4vL1xuLy8gT24gQ2hyb21lLCB0aGlzIHBybmcgYmVuY2htYXJrcyBhYm91dCAyLjEgdGltZXMgc2xvd2VyIHRoYW5cbi8vIEphdmFzY3JpcHQncyBidWlsdC1pbiBNYXRoLnJhbmRvbSgpLlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdyA9IG1lLncsXG4gICAgICAgIFggPSBtZS5YLCBpID0gbWUuaSwgdCwgdjtcbiAgICAvLyBVcGRhdGUgV2V5bCBnZW5lcmF0b3IuXG4gICAgbWUudyA9IHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2ID0gWFsoaSArIDM0KSAmIDEyN107XG4gICAgdCA9IFhbaSA9ICgoaSArIDEpICYgMTI3KV07XG4gICAgdiBePSB2IDw8IDEzO1xuICAgIHQgXj0gdCA8PCAxNztcbiAgICB2IF49IHYgPj4+IDE1O1xuICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgLy8gVXBkYXRlIFhvciBnZW5lcmF0b3IgYXJyYXkgc3RhdGUuXG4gICAgdiA9IFhbaV0gPSB2IF4gdDtcbiAgICBtZS5pID0gaTtcbiAgICAvLyBSZXN1bHQgaXMgdGhlIGNvbWJpbmF0aW9uLlxuICAgIHJldHVybiAodiArICh3IF4gKHcgPj4+IDE2KSkpIHwgMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KG1lLCBzZWVkKSB7XG4gICAgdmFyIHQsIHYsIGksIGosIHcsIFggPSBbXSwgbGltaXQgPSAxMjg7XG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIE51bWVyaWMgc2VlZHMgaW5pdGlhbGl6ZSB2LCB3aGljaCBpcyB1c2VkIHRvIGdlbmVyYXRlcyBYLlxuICAgICAgdiA9IHNlZWQ7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RyaW5nIHNlZWRzIGFyZSBtaXhlZCBpbnRvIHYgYW5kIFggb25lIGNoYXJhY3RlciBhdCBhIHRpbWUuXG4gICAgICBzZWVkID0gc2VlZCArICdcXDAnO1xuICAgICAgdiA9IDA7XG4gICAgICBsaW1pdCA9IE1hdGgubWF4KGxpbWl0LCBzZWVkLmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgY2lyY3VsYXIgYXJyYXkgYW5kIHdleWwgdmFsdWUuXG4gICAgZm9yIChpID0gMCwgaiA9IC0zMjsgaiA8IGxpbWl0OyArK2opIHtcbiAgICAgIC8vIFB1dCB0aGUgdW5pY29kZSBjaGFyYWN0ZXJzIGludG8gdGhlIGFycmF5LCBhbmQgc2h1ZmZsZSB0aGVtLlxuICAgICAgaWYgKHNlZWQpIHYgXj0gc2VlZC5jaGFyQ29kZUF0KChqICsgMzIpICUgc2VlZC5sZW5ndGgpO1xuICAgICAgLy8gQWZ0ZXIgMzIgc2h1ZmZsZXMsIHRha2UgdiBhcyB0aGUgc3RhcnRpbmcgdyB2YWx1ZS5cbiAgICAgIGlmIChqID09PSAwKSB3ID0gdjtcbiAgICAgIHYgXj0gdiA8PCAxMDtcbiAgICAgIHYgXj0gdiA+Pj4gMTU7XG4gICAgICB2IF49IHYgPDwgNDtcbiAgICAgIHYgXj0gdiA+Pj4gMTM7XG4gICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgIHcgPSAodyArIDB4NjFjODg2NDcpIHwgMDsgICAgIC8vIFdleWwuXG4gICAgICAgIHQgPSAoWFtqICYgMTI3XSBePSAodiArIHcpKTsgIC8vIENvbWJpbmUgeG9yIGFuZCB3ZXlsIHRvIGluaXQgYXJyYXkuXG4gICAgICAgIGkgPSAoMCA9PSB0KSA/IGkgKyAxIDogMDsgICAgIC8vIENvdW50IHplcm9lcy5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2UgaGF2ZSBkZXRlY3RlZCBhbGwgemVyb2VzOyBtYWtlIHRoZSBrZXkgbm9uemVyby5cbiAgICBpZiAoaSA+PSAxMjgpIHtcbiAgICAgIFhbKHNlZWQgJiYgc2VlZC5sZW5ndGggfHwgMCkgJiAxMjddID0gLTE7XG4gICAgfVxuICAgIC8vIFJ1biB0aGUgZ2VuZXJhdG9yIDUxMiB0aW1lcyB0byBmdXJ0aGVyIG1peCB0aGUgc3RhdGUgYmVmb3JlIHVzaW5nIGl0LlxuICAgIC8vIEZhY3RvcmluZyB0aGlzIGFzIGEgZnVuY3Rpb24gc2xvd3MgdGhlIG1haW4gZ2VuZXJhdG9yLCBzbyBpdCBpcyBqdXN0XG4gICAgLy8gdW5yb2xsZWQgaGVyZS4gIFRoZSB3ZXlsIGdlbmVyYXRvciBpcyBub3QgYWR2YW5jZWQgd2hpbGUgd2FybWluZyB1cC5cbiAgICBpID0gMTI3O1xuICAgIGZvciAoaiA9IDQgKiAxMjg7IGogPiAwOyAtLWopIHtcbiAgICAgIHYgPSBYWyhpICsgMzQpICYgMTI3XTtcbiAgICAgIHQgPSBYW2kgPSAoKGkgKyAxKSAmIDEyNyldO1xuICAgICAgdiBePSB2IDw8IDEzO1xuICAgICAgdCBePSB0IDw8IDE3O1xuICAgICAgdiBePSB2ID4+PiAxNTtcbiAgICAgIHQgXj0gdCA+Pj4gMTI7XG4gICAgICBYW2ldID0gdiBeIHQ7XG4gICAgfVxuICAgIC8vIFN0b3Jpbmcgc3RhdGUgYXMgb2JqZWN0IG1lbWJlcnMgaXMgZmFzdGVyIHRoYW4gdXNpbmcgY2xvc3VyZSB2YXJpYWJsZXMuXG4gICAgbWUudyA9IHc7XG4gICAgbWUuWCA9IFg7XG4gICAgbWUuaSA9IGk7XG4gIH1cblxuICBpbml0KG1lLCBzZWVkKTtcbn1cblxuZnVuY3Rpb24gY29weShmLCB0KSB7XG4gIHQuaSA9IGYuaTtcbiAgdC53ID0gZi53O1xuICB0LlggPSBmLlguc2xpY2UoKTtcbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBpbXBsKHNlZWQsIG9wdHMpIHtcbiAgaWYgKHNlZWQgPT0gbnVsbCkgc2VlZCA9ICsobmV3IERhdGUpO1xuICB2YXIgeGcgPSBuZXcgWG9yR2VuKHNlZWQpLFxuICAgICAgc3RhdGUgPSBvcHRzICYmIG9wdHMuc3RhdGUsXG4gICAgICBwcm5nID0gZnVuY3Rpb24oKSB7IHJldHVybiAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwOyB9O1xuICBwcm5nLmRvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRvIHtcbiAgICAgIHZhciB0b3AgPSB4Zy5uZXh0KCkgPj4+IDExLFxuICAgICAgICAgIGJvdCA9ICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDAsXG4gICAgICAgICAgcmVzdWx0ID0gKHRvcCArIGJvdCkgLyAoMSA8PCAyMSk7XG4gICAgfSB3aGlsZSAocmVzdWx0ID09PSAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBwcm5nLmludDMyID0geGcubmV4dDtcbiAgcHJuZy5xdWljayA9IHBybmc7XG4gIGlmIChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5YKSBjb3B5KHN0YXRlLCB4Zyk7XG4gICAgcHJuZy5zdGF0ZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29weSh4Zywge30pOyB9XG4gIH1cbiAgcmV0dXJuIHBybmc7XG59XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbXBsO1xufSBlbHNlIGlmIChkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBpbXBsOyB9KTtcbn0gZWxzZSB7XG4gIHRoaXMueG9yNDA5NiA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cgb2JqZWN0IG9yIGdsb2JhbFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG4iLCIvLyBBIEphdmFzY3JpcHQgaW1wbGVtZW50YWlvbiBvZiB0aGUgXCJ4b3JzaGlmdDdcIiBhbGdvcml0aG0gYnlcbi8vIEZyYW7Dp29pcyBQYW5uZXRvbiBhbmQgUGllcnJlIEwnZWN1eWVyOlxuLy8gXCJPbiB0aGUgWG9yZ3NoaWZ0IFJhbmRvbSBOdW1iZXIgR2VuZXJhdG9yc1wiXG4vLyBodHRwOi8vc2FsdWMuZW5nci51Y29ubi5lZHUvcmVmcy9jcnlwdG8vcm5nL3Bhbm5ldG9uMDVvbnRoZXhvcnNoaWZ0LnBkZlxuXG4oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUsIGRlZmluZSkge1xuXG5mdW5jdGlvbiBYb3JHZW4oc2VlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vIFNldCB1cCBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gIG1lLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgeG9yIGdlbmVyYXRvci5cbiAgICB2YXIgWCA9IG1lLngsIGkgPSBtZS5pLCB0LCB2LCB3O1xuICAgIHQgPSBYW2ldOyB0IF49ICh0ID4+PiA3KTsgdiA9IHQgXiAodCA8PCAyNCk7XG4gICAgdCA9IFhbKGkgKyAxKSAmIDddOyB2IF49IHQgXiAodCA+Pj4gMTApO1xuICAgIHQgPSBYWyhpICsgMykgJiA3XTsgdiBePSB0IF4gKHQgPj4+IDMpO1xuICAgIHQgPSBYWyhpICsgNCkgJiA3XTsgdiBePSB0IF4gKHQgPDwgNyk7XG4gICAgdCA9IFhbKGkgKyA3KSAmIDddOyB0ID0gdCBeICh0IDw8IDEzKTsgdiBePSB0IF4gKHQgPDwgOSk7XG4gICAgWFtpXSA9IHY7XG4gICAgbWUuaSA9IChpICsgMSkgJiA3O1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQobWUsIHNlZWQpIHtcbiAgICB2YXIgaiwgdywgWCA9IFtdO1xuXG4gICAgaWYgKHNlZWQgPT09IChzZWVkIHwgMCkpIHtcbiAgICAgIC8vIFNlZWQgc3RhdGUgYXJyYXkgdXNpbmcgYSAzMi1iaXQgaW50ZWdlci5cbiAgICAgIHcgPSBYWzBdID0gc2VlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2VlZCBzdGF0ZSB1c2luZyBhIHN0cmluZy5cbiAgICAgIHNlZWQgPSAnJyArIHNlZWQ7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgc2VlZC5sZW5ndGg7ICsraikge1xuICAgICAgICBYW2ogJiA3XSA9IChYW2ogJiA3XSA8PCAxNSkgXlxuICAgICAgICAgICAgKHNlZWQuY2hhckNvZGVBdChqKSArIFhbKGogKyAxKSAmIDddIDw8IDEzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5mb3JjZSBhbiBhcnJheSBsZW5ndGggb2YgOCwgbm90IGFsbCB6ZXJvZXMuXG4gICAgd2hpbGUgKFgubGVuZ3RoIDwgOCkgWC5wdXNoKDApO1xuICAgIGZvciAoaiA9IDA7IGogPCA4ICYmIFhbal0gPT09IDA7ICsraik7XG4gICAgaWYgKGogPT0gOCkgdyA9IFhbN10gPSAtMTsgZWxzZSB3ID0gWFtqXTtcblxuICAgIG1lLnggPSBYO1xuICAgIG1lLmkgPSAwO1xuXG4gICAgLy8gRGlzY2FyZCBhbiBpbml0aWFsIDI1NiB2YWx1ZXMuXG4gICAgZm9yIChqID0gMjU2OyBqID4gMDsgLS1qKSB7XG4gICAgICBtZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdChtZSwgc2VlZCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLnguc2xpY2UoKTtcbiAgdC5pID0gZi5pO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIGlmIChzZWVkID09IG51bGwpIHNlZWQgPSArKG5ldyBEYXRlKTtcbiAgdmFyIHhnID0gbmV3IFhvckdlbihzZWVkKSxcbiAgICAgIHN0YXRlID0gb3B0cyAmJiBvcHRzLnN0YXRlLFxuICAgICAgcHJuZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMDsgfTtcbiAgcHJuZy5kb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdG9wID0geGcubmV4dCgpID4+PiAxMSxcbiAgICAgICAgICBib3QgPSAoeGcubmV4dCgpID4+PiAwKSAvIDB4MTAwMDAwMDAwLFxuICAgICAgICAgIHJlc3VsdCA9ICh0b3AgKyBib3QpIC8gKDEgPDwgMjEpO1xuICAgIH0gd2hpbGUgKHJlc3VsdCA9PT0gMCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcHJuZy5pbnQzMiA9IHhnLm5leHQ7XG4gIHBybmcucXVpY2sgPSBwcm5nO1xuICBpZiAoc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUueCkgY29weShzdGF0ZSwgeGcpO1xuICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoeGcsIHt9KTsgfVxuICB9XG4gIHJldHVybiBwcm5nO1xufVxuXG5pZiAobW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gaW1wbDtcbn0gZWxzZSBpZiAoZGVmaW5lICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gaW1wbDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLnhvcnNoaWZ0NyA9IGltcGw7XG59XG5cbn0pKFxuICB0aGlzLFxuICAodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLCAgICAvLyBwcmVzZW50IGluIG5vZGUuanNcbiAgKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lICAgLy8gcHJlc2VudCB3aXRoIGFuIEFNRCBsb2FkZXJcbik7XG5cbiIsIi8vIEEgSmF2YXNjcmlwdCBpbXBsZW1lbnRhaW9uIG9mIHRoZSBcInhvcndvd1wiIHBybmcgYWxnb3JpdGhtIGJ5XG4vLyBHZW9yZ2UgTWFyc2FnbGlhLiAgU2VlIGh0dHA6Ly93d3cuanN0YXRzb2Z0Lm9yZy92MDgvaTE0L3BhcGVyXG5cbihmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSwgZGVmaW5lKSB7XG5cbmZ1bmN0aW9uIFhvckdlbihzZWVkKSB7XG4gIHZhciBtZSA9IHRoaXMsIHN0cnNlZWQgPSAnJztcblxuICAvLyBTZXQgdXAgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICBtZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSAobWUueCBeIChtZS54ID4+PiAyKSk7XG4gICAgbWUueCA9IG1lLnk7IG1lLnkgPSBtZS56OyBtZS56ID0gbWUudzsgbWUudyA9IG1lLnY7XG4gICAgcmV0dXJuIChtZS5kID0gKG1lLmQgKyAzNjI0MzcgfCAwKSkgK1xuICAgICAgIChtZS52ID0gKG1lLnYgXiAobWUudiA8PCA0KSkgXiAodCBeICh0IDw8IDEpKSkgfCAwO1xuICB9O1xuXG4gIG1lLnggPSAwO1xuICBtZS55ID0gMDtcbiAgbWUueiA9IDA7XG4gIG1lLncgPSAwO1xuICBtZS52ID0gMDtcblxuICBpZiAoc2VlZCA9PT0gKHNlZWQgfCAwKSkge1xuICAgIC8vIEludGVnZXIgc2VlZC5cbiAgICBtZS54ID0gc2VlZDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdHJpbmcgc2VlZC5cbiAgICBzdHJzZWVkICs9IHNlZWQ7XG4gIH1cblxuICAvLyBNaXggaW4gc3RyaW5nIHNlZWQsIHRoZW4gZGlzY2FyZCBhbiBpbml0aWFsIGJhdGNoIG9mIDY0IHZhbHVlcy5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBzdHJzZWVkLmxlbmd0aCArIDY0OyBrKyspIHtcbiAgICBtZS54IF49IHN0cnNlZWQuY2hhckNvZGVBdChrKSB8IDA7XG4gICAgaWYgKGsgPT0gc3Ryc2VlZC5sZW5ndGgpIHtcbiAgICAgIG1lLmQgPSBtZS54IDw8IDEwIF4gbWUueCA+Pj4gNDtcbiAgICB9XG4gICAgbWUubmV4dCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoZiwgdCkge1xuICB0LnggPSBmLng7XG4gIHQueSA9IGYueTtcbiAgdC56ID0gZi56O1xuICB0LncgPSBmLnc7XG4gIHQudiA9IGYudjtcbiAgdC5kID0gZi5kO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gaW1wbChzZWVkLCBvcHRzKSB7XG4gIHZhciB4ZyA9IG5ldyBYb3JHZW4oc2VlZCksXG4gICAgICBzdGF0ZSA9IG9wdHMgJiYgb3B0cy5zdGF0ZSxcbiAgICAgIHBybmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuICh4Zy5uZXh0KCkgPj4+IDApIC8gMHgxMDAwMDAwMDA7IH07XG4gIHBybmcuZG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRvcCA9IHhnLm5leHQoKSA+Pj4gMTEsXG4gICAgICAgICAgYm90ID0gKHhnLm5leHQoKSA+Pj4gMCkgLyAweDEwMDAwMDAwMCxcbiAgICAgICAgICByZXN1bHQgPSAodG9wICsgYm90KSAvICgxIDw8IDIxKTtcbiAgICB9IHdoaWxlIChyZXN1bHQgPT09IDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHBybmcuaW50MzIgPSB4Zy5uZXh0O1xuICBwcm5nLnF1aWNrID0gcHJuZztcbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZihzdGF0ZSkgPT0gJ29iamVjdCcpIGNvcHkoc3RhdGUsIHhnKTtcbiAgICBwcm5nLnN0YXRlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb3B5KHhnLCB7fSk7IH1cbiAgfVxuICByZXR1cm4gcHJuZztcbn1cblxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGltcGw7XG59IGVsc2UgaWYgKGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGltcGw7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy54b3J3b3cgPSBpbXBsO1xufVxuXG59KShcbiAgdGhpcyxcbiAgKHR5cGVvZiBtb2R1bGUpID09ICdvYmplY3QnICYmIG1vZHVsZSwgICAgLy8gcHJlc2VudCBpbiBub2RlLmpzXG4gICh0eXBlb2YgZGVmaW5lKSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZSAgIC8vIHByZXNlbnQgd2l0aCBhbiBBTUQgbG9hZGVyXG4pO1xuXG5cbiIsIi8qXG5Db3B5cmlnaHQgMjAxNCBEYXZpZCBCYXUuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG5cIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbndpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbmRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xucGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG50aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTllcbkNMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsXG5UT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRVxuU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbiovXG5cbihmdW5jdGlvbiAocG9vbCwgbWF0aCkge1xuLy9cbi8vIFRoZSBmb2xsb3dpbmcgY29uc3RhbnRzIGFyZSByZWxhdGVkIHRvIElFRUUgNzU0IGxpbWl0cy5cbi8vXG5cbi8vIERldGVjdCB0aGUgZ2xvYmFsIG9iamVjdCwgZXZlbiBpZiBvcGVyYXRpbmcgaW4gc3RyaWN0IG1vZGUuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDM4NzA1Ny8yNjUyOThcbnZhciBnbG9iYWwgPSAoMCwgZXZhbCkoJ3RoaXMnKSxcbiAgICB3aWR0aCA9IDI1NiwgICAgICAgIC8vIGVhY2ggUkM0IG91dHB1dCBpcyAwIDw9IHggPCAyNTZcbiAgICBjaHVua3MgPSA2LCAgICAgICAgIC8vIGF0IGxlYXN0IHNpeCBSQzQgb3V0cHV0cyBmb3IgZWFjaCBkb3VibGVcbiAgICBkaWdpdHMgPSA1MiwgICAgICAgIC8vIHRoZXJlIGFyZSA1MiBzaWduaWZpY2FudCBkaWdpdHMgaW4gYSBkb3VibGVcbiAgICBybmduYW1lID0gJ3JhbmRvbScsIC8vIHJuZ25hbWU6IG5hbWUgZm9yIE1hdGgucmFuZG9tIGFuZCBNYXRoLnNlZWRyYW5kb21cbiAgICBzdGFydGRlbm9tID0gbWF0aC5wb3cod2lkdGgsIGNodW5rcyksXG4gICAgc2lnbmlmaWNhbmNlID0gbWF0aC5wb3coMiwgZGlnaXRzKSxcbiAgICBvdmVyZmxvdyA9IHNpZ25pZmljYW5jZSAqIDIsXG4gICAgbWFzayA9IHdpZHRoIC0gMSxcbiAgICBub2RlY3J5cHRvOyAgICAgICAgIC8vIG5vZGUuanMgY3J5cHRvIG1vZHVsZSwgaW5pdGlhbGl6ZWQgYXQgdGhlIGJvdHRvbS5cblxuLy9cbi8vIHNlZWRyYW5kb20oKVxuLy8gVGhpcyBpcyB0aGUgc2VlZHJhbmRvbSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUuXG4vL1xuZnVuY3Rpb24gc2VlZHJhbmRvbShzZWVkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIga2V5ID0gW107XG4gIG9wdGlvbnMgPSAob3B0aW9ucyA9PSB0cnVlKSA/IHsgZW50cm9weTogdHJ1ZSB9IDogKG9wdGlvbnMgfHwge30pO1xuXG4gIC8vIEZsYXR0ZW4gdGhlIHNlZWQgc3RyaW5nIG9yIGJ1aWxkIG9uZSBmcm9tIGxvY2FsIGVudHJvcHkgaWYgbmVlZGVkLlxuICB2YXIgc2hvcnRzZWVkID0gbWl4a2V5KGZsYXR0ZW4oXG4gICAgb3B0aW9ucy5lbnRyb3B5ID8gW3NlZWQsIHRvc3RyaW5nKHBvb2wpXSA6XG4gICAgKHNlZWQgPT0gbnVsbCkgPyBhdXRvc2VlZCgpIDogc2VlZCwgMyksIGtleSk7XG5cbiAgLy8gVXNlIHRoZSBzZWVkIHRvIGluaXRpYWxpemUgYW4gQVJDNCBnZW5lcmF0b3IuXG4gIHZhciBhcmM0ID0gbmV3IEFSQzQoa2V5KTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSByYW5kb20gZG91YmxlIGluIFswLCAxKSB0aGF0IGNvbnRhaW5zXG4gIC8vIHJhbmRvbW5lc3MgaW4gZXZlcnkgYml0IG9mIHRoZSBtYW50aXNzYSBvZiB0aGUgSUVFRSA3NTQgdmFsdWUuXG4gIHZhciBwcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSBhcmM0LmcoY2h1bmtzKSwgICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBhIG51bWVyYXRvciBuIDwgMiBeIDQ4XG4gICAgICAgIGQgPSBzdGFydGRlbm9tLCAgICAgICAgICAgICAgICAgLy8gICBhbmQgZGVub21pbmF0b3IgZCA9IDIgXiA0OC5cbiAgICAgICAgeCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGFuZCBubyAnZXh0cmEgbGFzdCBieXRlJy5cbiAgICB3aGlsZSAobiA8IHNpZ25pZmljYW5jZSkgeyAgICAgICAgICAvLyBGaWxsIHVwIGFsbCBzaWduaWZpY2FudCBkaWdpdHMgYnlcbiAgICAgIG4gPSAobiArIHgpICogd2lkdGg7ICAgICAgICAgICAgICAvLyAgIHNoaWZ0aW5nIG51bWVyYXRvciBhbmRcbiAgICAgIGQgKj0gd2lkdGg7ICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGRlbm9taW5hdG9yIGFuZCBnZW5lcmF0aW5nIGFcbiAgICAgIHggPSBhcmM0LmcoMSk7ICAgICAgICAgICAgICAgICAgICAvLyAgIG5ldyBsZWFzdC1zaWduaWZpY2FudC1ieXRlLlxuICAgIH1cbiAgICB3aGlsZSAobiA+PSBvdmVyZmxvdykgeyAgICAgICAgICAgICAvLyBUbyBhdm9pZCByb3VuZGluZyB1cCwgYmVmb3JlIGFkZGluZ1xuICAgICAgbiAvPSAyOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbGFzdCBieXRlLCBzaGlmdCBldmVyeXRoaW5nXG4gICAgICBkIC89IDI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByaWdodCB1c2luZyBpbnRlZ2VyIG1hdGggdW50aWxcbiAgICAgIHggPj4+PSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdlIGhhdmUgZXhhY3RseSB0aGUgZGVzaXJlZCBiaXRzLlxuICAgIH1cbiAgICByZXR1cm4gKG4gKyB4KSAvIGQ7ICAgICAgICAgICAgICAgICAvLyBGb3JtIHRoZSBudW1iZXIgd2l0aGluIFswLCAxKS5cbiAgfTtcblxuICBwcm5nLmludDMyID0gZnVuY3Rpb24oKSB7IHJldHVybiBhcmM0LmcoNCkgfCAwOyB9XG4gIHBybmcucXVpY2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGFyYzQuZyg0KSAvIDB4MTAwMDAwMDAwOyB9XG4gIHBybmcuZG91YmxlID0gcHJuZztcblxuICAvLyBNaXggdGhlIHJhbmRvbW5lc3MgaW50byBhY2N1bXVsYXRlZCBlbnRyb3B5LlxuICBtaXhrZXkodG9zdHJpbmcoYXJjNC5TKSwgcG9vbCk7XG5cbiAgLy8gQ2FsbGluZyBjb252ZW50aW9uOiB3aGF0IHRvIHJldHVybiBhcyBhIGZ1bmN0aW9uIG9mIHBybmcsIHNlZWQsIGlzX21hdGguXG4gIHJldHVybiAob3B0aW9ucy5wYXNzIHx8IGNhbGxiYWNrIHx8XG4gICAgICBmdW5jdGlvbihwcm5nLCBzZWVkLCBpc19tYXRoX2NhbGwsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIC8vIExvYWQgdGhlIGFyYzQgc3RhdGUgZnJvbSB0aGUgZ2l2ZW4gc3RhdGUgaWYgaXQgaGFzIGFuIFMgYXJyYXkuXG4gICAgICAgICAgaWYgKHN0YXRlLlMpIHsgY29weShzdGF0ZSwgYXJjNCk7IH1cbiAgICAgICAgICAvLyBPbmx5IHByb3ZpZGUgdGhlIC5zdGF0ZSBtZXRob2QgaWYgcmVxdWVzdGVkIHZpYSBvcHRpb25zLnN0YXRlLlxuICAgICAgICAgIHBybmcuc3RhdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvcHkoYXJjNCwge30pOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBjYWxsZWQgYXMgYSBtZXRob2Qgb2YgTWF0aCAoTWF0aC5zZWVkcmFuZG9tKCkpLCBtdXRhdGVcbiAgICAgICAgLy8gTWF0aC5yYW5kb20gYmVjYXVzZSB0aGF0IGlzIGhvdyBzZWVkcmFuZG9tLmpzIGhhcyB3b3JrZWQgc2luY2UgdjEuMC5cbiAgICAgICAgaWYgKGlzX21hdGhfY2FsbCkgeyBtYXRoW3JuZ25hbWVdID0gcHJuZzsgcmV0dXJuIHNlZWQ7IH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIGl0IGlzIGEgbmV3ZXIgY2FsbGluZyBjb252ZW50aW9uLCBzbyByZXR1cm4gdGhlXG4gICAgICAgIC8vIHBybmcgZGlyZWN0bHkuXG4gICAgICAgIGVsc2UgcmV0dXJuIHBybmc7XG4gICAgICB9KShcbiAgcHJuZyxcbiAgc2hvcnRzZWVkLFxuICAnZ2xvYmFsJyBpbiBvcHRpb25zID8gb3B0aW9ucy5nbG9iYWwgOiAodGhpcyA9PSBtYXRoKSxcbiAgb3B0aW9ucy5zdGF0ZSk7XG59XG5cbi8vXG4vLyBBUkM0XG4vL1xuLy8gQW4gQVJDNCBpbXBsZW1lbnRhdGlvbi4gIFRoZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGtleSBpbiB0aGUgZm9ybSBvZlxuLy8gYW4gYXJyYXkgb2YgYXQgbW9zdCAod2lkdGgpIGludGVnZXJzIHRoYXQgc2hvdWxkIGJlIDAgPD0geCA8ICh3aWR0aCkuXG4vL1xuLy8gVGhlIGcoY291bnQpIG1ldGhvZCByZXR1cm5zIGEgcHNldWRvcmFuZG9tIGludGVnZXIgdGhhdCBjb25jYXRlbmF0ZXNcbi8vIHRoZSBuZXh0IChjb3VudCkgb3V0cHV0cyBmcm9tIEFSQzQuICBJdHMgcmV0dXJuIHZhbHVlIGlzIGEgbnVtYmVyIHhcbi8vIHRoYXQgaXMgaW4gdGhlIHJhbmdlIDAgPD0geCA8ICh3aWR0aCBeIGNvdW50KS5cbi8vXG5mdW5jdGlvbiBBUkM0KGtleSkge1xuICB2YXIgdCwga2V5bGVuID0ga2V5Lmxlbmd0aCxcbiAgICAgIG1lID0gdGhpcywgaSA9IDAsIGogPSBtZS5pID0gbWUuaiA9IDAsIHMgPSBtZS5TID0gW107XG5cbiAgLy8gVGhlIGVtcHR5IGtleSBbXSBpcyB0cmVhdGVkIGFzIFswXS5cbiAgaWYgKCFrZXlsZW4pIHsga2V5ID0gW2tleWxlbisrXTsgfVxuXG4gIC8vIFNldCB1cCBTIHVzaW5nIHRoZSBzdGFuZGFyZCBrZXkgc2NoZWR1bGluZyBhbGdvcml0aG0uXG4gIHdoaWxlIChpIDwgd2lkdGgpIHtcbiAgICBzW2ldID0gaSsrO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc1tpXSA9IHNbaiA9IG1hc2sgJiAoaiArIGtleVtpICUga2V5bGVuXSArICh0ID0gc1tpXSkpXTtcbiAgICBzW2pdID0gdDtcbiAgfVxuXG4gIC8vIFRoZSBcImdcIiBtZXRob2QgcmV0dXJucyB0aGUgbmV4dCAoY291bnQpIG91dHB1dHMgYXMgb25lIG51bWJlci5cbiAgKG1lLmcgPSBmdW5jdGlvbihjb3VudCkge1xuICAgIC8vIFVzaW5nIGluc3RhbmNlIG1lbWJlcnMgaW5zdGVhZCBvZiBjbG9zdXJlIHN0YXRlIG5lYXJseSBkb3VibGVzIHNwZWVkLlxuICAgIHZhciB0LCByID0gMCxcbiAgICAgICAgaSA9IG1lLmksIGogPSBtZS5qLCBzID0gbWUuUztcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgdCA9IHNbaSA9IG1hc2sgJiAoaSArIDEpXTtcbiAgICAgIHIgPSByICogd2lkdGggKyBzW21hc2sgJiAoKHNbaV0gPSBzW2ogPSBtYXNrICYgKGogKyB0KV0pICsgKHNbal0gPSB0KSldO1xuICAgIH1cbiAgICBtZS5pID0gaTsgbWUuaiA9IGo7XG4gICAgcmV0dXJuIHI7XG4gICAgLy8gRm9yIHJvYnVzdCB1bnByZWRpY3RhYmlsaXR5LCB0aGUgZnVuY3Rpb24gY2FsbCBiZWxvdyBhdXRvbWF0aWNhbGx5XG4gICAgLy8gZGlzY2FyZHMgYW4gaW5pdGlhbCBiYXRjaCBvZiB2YWx1ZXMuICBUaGlzIGlzIGNhbGxlZCBSQzQtZHJvcFsyNTZdLlxuICAgIC8vIFNlZSBodHRwOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1yc2ErZmx1aHJlcityZXNwb25zZSZidG5JXG4gIH0pKHdpZHRoKTtcbn1cblxuLy9cbi8vIGNvcHkoKVxuLy8gQ29waWVzIGludGVybmFsIHN0YXRlIG9mIEFSQzQgdG8gb3IgZnJvbSBhIHBsYWluIG9iamVjdC5cbi8vXG5mdW5jdGlvbiBjb3B5KGYsIHQpIHtcbiAgdC5pID0gZi5pO1xuICB0LmogPSBmLmo7XG4gIHQuUyA9IGYuUy5zbGljZSgpO1xuICByZXR1cm4gdDtcbn07XG5cbi8vXG4vLyBmbGF0dGVuKClcbi8vIENvbnZlcnRzIGFuIG9iamVjdCB0cmVlIHRvIG5lc3RlZCBhcnJheXMgb2Ygc3RyaW5ncy5cbi8vXG5mdW5jdGlvbiBmbGF0dGVuKG9iaiwgZGVwdGgpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLCB0eXAgPSAodHlwZW9mIG9iaiksIHByb3A7XG4gIGlmIChkZXB0aCAmJiB0eXAgPT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICB0cnkgeyByZXN1bHQucHVzaChmbGF0dGVuKG9ialtwcm9wXSwgZGVwdGggLSAxKSk7IH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAocmVzdWx0Lmxlbmd0aCA/IHJlc3VsdCA6IHR5cCA9PSAnc3RyaW5nJyA/IG9iaiA6IG9iaiArICdcXDAnKTtcbn1cblxuLy9cbi8vIG1peGtleSgpXG4vLyBNaXhlcyBhIHN0cmluZyBzZWVkIGludG8gYSBrZXkgdGhhdCBpcyBhbiBhcnJheSBvZiBpbnRlZ2VycywgYW5kXG4vLyByZXR1cm5zIGEgc2hvcnRlbmVkIHN0cmluZyBzZWVkIHRoYXQgaXMgZXF1aXZhbGVudCB0byB0aGUgcmVzdWx0IGtleS5cbi8vXG5mdW5jdGlvbiBtaXhrZXkoc2VlZCwga2V5KSB7XG4gIHZhciBzdHJpbmdzZWVkID0gc2VlZCArICcnLCBzbWVhciwgaiA9IDA7XG4gIHdoaWxlIChqIDwgc3RyaW5nc2VlZC5sZW5ndGgpIHtcbiAgICBrZXlbbWFzayAmIGpdID1cbiAgICAgIG1hc2sgJiAoKHNtZWFyIF49IGtleVttYXNrICYgal0gKiAxOSkgKyBzdHJpbmdzZWVkLmNoYXJDb2RlQXQoaisrKSk7XG4gIH1cbiAgcmV0dXJuIHRvc3RyaW5nKGtleSk7XG59XG5cbi8vXG4vLyBhdXRvc2VlZCgpXG4vLyBSZXR1cm5zIGFuIG9iamVjdCBmb3IgYXV0b3NlZWRpbmcsIHVzaW5nIHdpbmRvdy5jcnlwdG8gYW5kIE5vZGUgY3J5cHRvXG4vLyBtb2R1bGUgaWYgYXZhaWxhYmxlLlxuLy9cbmZ1bmN0aW9uIGF1dG9zZWVkKCkge1xuICB0cnkge1xuICAgIHZhciBvdXQ7XG4gICAgaWYgKG5vZGVjcnlwdG8gJiYgKG91dCA9IG5vZGVjcnlwdG8ucmFuZG9tQnl0ZXMpKSB7XG4gICAgICAvLyBUaGUgdXNlIG9mICdvdXQnIHRvIHJlbWVtYmVyIHJhbmRvbUJ5dGVzIG1ha2VzIHRpZ2h0IG1pbmlmaWVkIGNvZGUuXG4gICAgICBvdXQgPSBvdXQod2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgPSBuZXcgVWludDhBcnJheSh3aWR0aCk7XG4gICAgICAoZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdG9zdHJpbmcob3V0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBicm93c2VyID0gZ2xvYmFsLm5hdmlnYXRvcixcbiAgICAgICAgcGx1Z2lucyA9IGJyb3dzZXIgJiYgYnJvd3Nlci5wbHVnaW5zO1xuICAgIHJldHVybiBbK25ldyBEYXRlLCBnbG9iYWwsIHBsdWdpbnMsIGdsb2JhbC5zY3JlZW4sIHRvc3RyaW5nKHBvb2wpXTtcbiAgfVxufVxuXG4vL1xuLy8gdG9zdHJpbmcoKVxuLy8gQ29udmVydHMgYW4gYXJyYXkgb2YgY2hhcmNvZGVzIHRvIGEgc3RyaW5nXG4vL1xuZnVuY3Rpb24gdG9zdHJpbmcoYSkge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseSgwLCBhKTtcbn1cblxuLy9cbi8vIFdoZW4gc2VlZHJhbmRvbS5qcyBpcyBsb2FkZWQsIHdlIGltbWVkaWF0ZWx5IG1peCBhIGZldyBiaXRzXG4vLyBmcm9tIHRoZSBidWlsdC1pbiBSTkcgaW50byB0aGUgZW50cm9weSBwb29sLiAgQmVjYXVzZSB3ZSBkb1xuLy8gbm90IHdhbnQgdG8gaW50ZXJmZXJlIHdpdGggZGV0ZXJtaW5pc3RpYyBQUk5HIHN0YXRlIGxhdGVyLFxuLy8gc2VlZHJhbmRvbSB3aWxsIG5vdCBjYWxsIG1hdGgucmFuZG9tIG9uIGl0cyBvd24gYWdhaW4gYWZ0ZXJcbi8vIGluaXRpYWxpemF0aW9uLlxuLy9cbm1peGtleShtYXRoLnJhbmRvbSgpLCBwb29sKTtcblxuLy9cbi8vIE5vZGVqcyBhbmQgQU1EIHN1cHBvcnQ6IGV4cG9ydCB0aGUgaW1wbGVtZW50YXRpb24gYXMgYSBtb2R1bGUgdXNpbmdcbi8vIGVpdGhlciBjb252ZW50aW9uLlxuLy9cbmlmICgodHlwZW9mIG1vZHVsZSkgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBzZWVkcmFuZG9tO1xuICAvLyBXaGVuIGluIG5vZGUuanMsIHRyeSB1c2luZyBjcnlwdG8gcGFja2FnZSBmb3IgYXV0b3NlZWRpbmcuXG4gIHRyeSB7XG4gICAgbm9kZWNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuICB9IGNhdGNoIChleCkge31cbn0gZWxzZSBpZiAoKHR5cGVvZiBkZWZpbmUpID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBzZWVkcmFuZG9tOyB9KTtcbn0gZWxzZSB7XG4gIC8vIFdoZW4gaW5jbHVkZWQgYXMgYSBwbGFpbiBzY3JpcHQsIHNldCB1cCBNYXRoLnNlZWRyYW5kb20gZ2xvYmFsLlxuICBtYXRoWydzZWVkJyArIHJuZ25hbWVdID0gc2VlZHJhbmRvbTtcbn1cblxuXG4vLyBFbmQgYW5vbnltb3VzIHNjb3BlLCBhbmQgcGFzcyBpbml0aWFsIHZhbHVlcy5cbn0pKFxuICBbXSwgICAgIC8vIHBvb2w6IGVudHJvcHkgcG9vbCBzdGFydHMgZW1wdHlcbiAgTWF0aCAgICAvLyBtYXRoOiBwYWNrYWdlIGNvbnRhaW5pbmcgcmFuZG9tLCBwb3csIGFuZCBzZWVkcmFuZG9tXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xufTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyBFbnRpdHksIE1vdmFibGUsIEVsYXN0aWNDb2xsaXNpb24sIENvbGxpZGFibGUgfSBmcm9tICcuL2VudGl0eSdcbmltcG9ydCB7IFBsYXllciwgT3RoZXJQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IGNsYXNzIEJhbGwgZXh0ZW5kcyBFbnRpdHkgaW1wbGVtZW50cyBNb3ZhYmxlLCBFbGFzdGljQ29sbGlzaW9uLCBDb2xsaWRhYmxlIHtcblx0cHVibGljIHJhZGl1cyA9IDIwXG5cblx0Ly9UT0RPOiBLZWVwIGEgaGlzdG9yeSBvZiB3aGF0IGJhbGxzIHRoZSBwbGF5ZXIgaGFzIGNvbGxpZGVkIHdpdGg/XG5cdC8vY29sbGlkZWRfd2l0aDoge1tpZDogc3RyaW5nXTogUGxheWVyfSA9IHt9XG5cdHB1YmxpYyBjb2xsaWRlZFdpdGg6IFBsYXllclxuXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnggPSB4XG5cdFx0dGhpcy55ID0geVxuXHR9XG5cblx0cHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcblx0XHQvLyBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmNvbGxpZGVkX3dpdGgpXG5cblx0XHRjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xsaWRlZFdpdGggPyB0aGlzLmNvbGxpZGVkV2l0aC5jb2xvdXIgOiAnYmx1ZSdcblx0XHRjdHguYmVnaW5QYXRoKClcblx0XHRjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG5cdFx0dGhpcy5jb2xsaWRlZFdpdGggPyBjdHguZmlsbCgpIDogY3R4LnN0cm9rZSgpXG5cblx0XHQvLyBsZXQgZGl2aXNpb24gPSAyKk1hdGguUEkvdmFsdWVzLmxlbmd0aDtcblx0XHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0Y3R4LmZpbGxTdHlsZSA9IHZhbHVlc1tpXS5jb2xvdXJcblx0XHQvLyBcdGN0eC5iZWdpblBhdGgoKTtcblx0XHQvLyBcdGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCBpKmRpdmlzaW9uLCAoaSsxKSpkaXZpc2lvbik7XG5cdFx0Ly8gXHRjdHguZmlsbCgpO1xuXHRcdC8vIH1cblx0fVxuXG5cdHB1YmxpYyBjb2xsaXNpb25faW50ZXJhY3Rpb24oZTI6IEVudGl0eSk6IHZvaWQge1xuXHRcdGlmIChlMiBpbnN0YW5jZW9mIFBsYXllciB8fCBlMiBpbnN0YW5jZW9mIE90aGVyUGxheWVyKSB7XG5cdFx0XHR0aGlzLmNvbGxpZGVkV2l0aCA9IGUyXG5cdFx0fVxuXHR9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZnVuY3Rpb24gYXBwbHlNaXhpbnMoZGVyaXZlZEN0b3I6IGFueSwgYmFzZUN0b3JzOiBhbnlbXSk6IHZvaWQge1xuXHRiYXNlQ3RvcnMuZm9yRWFjaChiYXNlQ3RvciA9PiB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYmFzZUN0b3IucHJvdG90eXBlKS5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRkZXJpdmVkQ3Rvci5wcm90b3R5cGUsXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZUN0b3IucHJvdG90eXBlLCBuYW1lKVxuXHRcdFx0KVxuXHRcdH0pXG5cdH0pXG59XG5hcHBseU1peGlucyhCYWxsLCBbTW92YWJsZSwgRWxhc3RpY0NvbGxpc2lvbiwgQ29sbGlkYWJsZV0pXG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJ1xuXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcblx0cHVibGljIGlkOiBudW1iZXIgPSAtMVxuXHRwdWJsaWMgeDogbnVtYmVyID0gMFxuXHRwdWJsaWMgeTogbnVtYmVyID0gMFxuXHRwdWJsaWMgdng6IG51bWJlciA9IDBcblx0cHVibGljIHZ5OiBudW1iZXIgPSAwXG5cdHB1YmxpYyByYWRpdXM6IG51bWJlclxuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmlkID0gR2FtZS5lbnRpdHlfaWQrK1xuXHR9XG5cblx0LyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5cdHB1YmxpYyB1cGRhdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge31cblx0cHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHt9XG5cblx0cHVibGljIGNvbGxpZGVzKGUyOiBFbnRpdHkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRwdWJsaWMgY29sbGlzaW9uKGUyOiBFbnRpdHkpOiB2b2lkIHt9XG5cdHB1YmxpYyBjb2xsaXNpb25faW50ZXJhY3Rpb24oZTI6IEVudGl0eSk6IHZvaWQge31cblx0LyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmFibGUgZXh0ZW5kcyBFbnRpdHkge1xuXHRwdWJsaWMgdXBkYXRlKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcblx0XHR0aGlzLnggKz0gdGhpcy52eFxuXHRcdHRoaXMueSArPSB0aGlzLnZ5XG5cblx0XHR0aGlzLnZ4ICo9IDAuOTk1XG5cdFx0dGhpcy52eSAqPSAwLjk5NVxuXG5cdFx0aWYgKHRoaXMueCA8IHRoaXMucmFkaXVzKSB7XG5cdFx0XHR0aGlzLnggPSB0aGlzLnJhZGl1c1xuXHRcdFx0dGhpcy52eCA9IC10aGlzLnZ4ICogMC45XG5cdFx0fVxuXHRcdGlmICh0aGlzLnggPiBjYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cykge1xuXHRcdFx0dGhpcy54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXNcblx0XHRcdHRoaXMudnggPSAtdGhpcy52eCAqIDAuOVxuXHRcdH1cblx0XHRpZiAodGhpcy55IDwgdGhpcy5yYWRpdXMpIHtcblx0XHRcdHRoaXMueSA9IHRoaXMucmFkaXVzXG5cdFx0XHR0aGlzLnZ5ID0gLXRoaXMudnkgKiAwLjlcblx0XHR9XG5cdFx0aWYgKHRoaXMueSA+IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuXHRcdFx0dGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzXG5cdFx0XHR0aGlzLnZ5ID0gLXRoaXMudnkgKiAwLjlcblx0XHR9XG5cdH1cbn1cblxuLy9UT0RPOiBUaGlzIHNob3VsZCBiZSBldmVudHVhbGx5IHJlcGxhY2VkIHdpdGggU2hhcGVzXG5leHBvcnQgY2xhc3MgQ29sbGlkYWJsZSBleHRlbmRzIEVudGl0eSB7XG5cdHB1YmxpYyBjb2xsaWRlcyhlMjogRW50aXR5KTogYm9vbGVhbiB7XG5cdFx0bGV0IGR4ID0gdGhpcy54IC0gZTIueFxuXHRcdGxldCBkeSA9IHRoaXMueSAtIGUyLnlcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSA8IHRoaXMucmFkaXVzICsgZTIucmFkaXVzXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWNDb2xsaXNpb24gZXh0ZW5kcyBFbnRpdHkge1xuXHRwdWJsaWMgY29sbGlzaW9uKGUyOiBFbnRpdHkpOiB2b2lkIHtcblx0XHRsZXQgZHggPSBlMi54IC0gdGhpcy54XG5cdFx0bGV0IGR5ID0gZTIueSAtIHRoaXMueVxuXHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcblx0XHRpZiAoZGlzdGFuY2UgPCB0aGlzLnJhZGl1cyArIGUyLnJhZGl1cykge1xuXHRcdFx0bGV0IG5vcm1hbHggPSBkeCAvIGRpc3RhbmNlXG5cdFx0XHRsZXQgbm9ybWFseSA9IGR5IC8gZGlzdGFuY2VcblxuXHRcdFx0bGV0IG1pZHggPSAodGhpcy54ICsgZTIueCkgLyAyXG5cdFx0XHRsZXQgbWlkeSA9ICh0aGlzLnkgKyBlMi55KSAvIDJcblx0XHRcdHRoaXMueCA9IG1pZHggLSBub3JtYWx4ICogdGhpcy5yYWRpdXNcblx0XHRcdHRoaXMueSA9IG1pZHkgLSBub3JtYWx5ICogdGhpcy5yYWRpdXNcblx0XHRcdGUyLnggPSBtaWR4ICsgbm9ybWFseCAqIGUyLnJhZGl1c1xuXHRcdFx0ZTIueSA9IG1pZHkgKyBub3JtYWx5ICogZTIucmFkaXVzXG5cblx0XHRcdGxldCB2ZHggPSB0aGlzLnZ4IC0gZTIudnhcblx0XHRcdGxldCB2ZHkgPSB0aGlzLnZ5IC0gZTIudnlcblxuXHRcdFx0bGV0IGRvdCA9IHZkeCAqIG5vcm1hbHggKyB2ZHkgKiBub3JtYWx5XG5cdFx0XHRsZXQgZHZ4ID0gZG90ICogbm9ybWFseFxuXHRcdFx0bGV0IGR2eSA9IGRvdCAqIG5vcm1hbHlcblxuXHRcdFx0dGhpcy52eCAtPSBkdnhcblx0XHRcdHRoaXMudnkgLT0gZHZ5XG5cdFx0XHRlMi52eCArPSBkdnhcblx0XHRcdGUyLnZ5ICs9IGR2eVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBQbGF5ZXIsIE90aGVyUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgeyBCYWxsIH0gZnJvbSAnLi9iYWxsJ1xuaW1wb3J0IHsgSW5wdXRQYWNrZXQgfSBmcm9tICcuLi9uZXR3b3JrL3VucmVsaWFibGVfcGFja2V0cydcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJy4uL25ldHdvcmsvYnVmZmVyJ1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJy4uL25ldHdvcmsvbmV0d29yaydcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuXHRwdWJsaWMgc3RhdGljIEZQUyA9IE1hdGguZmxvb3IoMTAwMCAvIDYwKVxuXHRwdWJsaWMgc3RhdGljIEdBTUVfU1RBUlRfQ09VTlRET1dOID0gMzAwMFxuXHRwdWJsaWMgc3RhdGljIEdBTUVfRU5EX0NPVU5URE9XTiA9IDEwMDAwXG5cdHB1YmxpYyBzdGF0aWMgR0FNRV9FTkRfU0NPUkVfQ09VTlRET1dOID0gMjAwMFxuXG5cdC8vVE9ETzogTWFrZSB0aGlzIG5vdCBhIHN0YXRpYyB2YXJpYWJsZT9cblx0cHVibGljIHN0YXRpYyBnYW1lOiBudW1iZXIgPSAwO1xuXHRwdWJsaWMgc3RhdGljIGZyYW1lOiBudW1iZXI7XG5cdHB1YmxpYyBzdGF0aWMgZW50aXR5X2lkOiBudW1iZXJcblxuXHRwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlbXVxuXHRwcm90ZWN0ZWQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxuXHRwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIDogbnVsbFxuXG5cdHByb3RlY3RlZCBjdXJyZW50X2lucHV0OiBJbnB1dFBhY2tldFxuXHRwcm90ZWN0ZWQgaW5wdXRfYnVmZmVyOiBCdWZmZXJcblx0cHVibGljIG9sZF9pbnB1dF9idWZmZXI6IEJ1ZmZlclxuXG5cdHByaXZhdGUgbG9jYWxfcGxheWVyOiBQbGF5ZXJcblx0cHJpdmF0ZSBvdGhlcl9wbGF5ZXJzOiBPdGhlclBsYXllcltdXG5cdHByaXZhdGUgYmFsbHM6IEJhbGxbXVxuXG5cdHByaXZhdGUgc2NvcmVfdGFsbGllZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBzY29yZXM6IE1hcDxudW1iZXIsIG51bWJlcj5cblx0cHJpdmF0ZSBtYXhfc2NvcmVzOiBudW1iZXJbXVxuXG5cdHB1YmxpYyBzZXR1cCh0ZXN0aW5nPXRydWUpOiB2b2lkIHtcblx0XHRpZiAodGVzdGluZykge1xuXHRcdFx0R2FtZS5nYW1lICs9IDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEdhbWUuZ2FtZSA9IDA7XG5cdFx0fVxuXG5cdFx0R2FtZS5mcmFtZSA9IDBcblx0XHRHYW1lLmVudGl0eV9pZCA9IDBcblxuXHRcdHRoaXMuY3VycmVudF9pbnB1dCA9IG5ldyBJbnB1dFBhY2tldCgwLCBHYW1lLmdhbWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKVxuXHRcdHRoaXMuaW5wdXRfYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG5cdFx0dGhpcy5vbGRfaW5wdXRfYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG5cblx0XHR0aGlzLm90aGVyX3BsYXllcnMgPSBbXVxuXHRcdGxldCBzb3J0ZWRfbWFwcGluZyA9IEFycmF5LmZyb20oTmV0d29yay5tYXBwaW5nLmtleXMoKSlcblx0XHRcdC5jb25jYXQoTmV0d29yay5sb2NhbF9pZClcblx0XHRcdC5zb3J0KClcblx0XHRmb3IgKGxldCBjbGllbnQgb2Ygc29ydGVkX21hcHBpbmcpIHtcblx0XHRcdGxldCByYW5kb21fcmFuZ2UgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcblx0XHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoUmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbilcblx0XHRcdH1cblx0XHRcdGxldCB4ID0gcmFuZG9tX3JhbmdlKFBsYXllci5SQURJVVMsIHRoaXMuY2FudmFzLndpZHRoIC0gUGxheWVyLlJBRElVUylcblx0XHRcdGxldCB5ID0gcmFuZG9tX3JhbmdlKHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAtIFBsYXllci5SQURJVVMpXG5cblx0XHRcdGlmIChjbGllbnQgPT09IE5ldHdvcmsubG9jYWxfaWQpIHRoaXMubG9jYWxfcGxheWVyID0gbmV3IFBsYXllcih4LCB5KVxuXHRcdFx0ZWxzZSB0aGlzLm90aGVyX3BsYXllcnNbTmV0d29yay5tYXBwaW5nLmdldChjbGllbnQpXSA9IG5ldyBPdGhlclBsYXllcih4LCB5KVxuXHRcdH1cblxuXHRcdHRoaXMuZW50aXRpZXMgPSBbXVxuXHRcdHRoaXMuZW50aXRpZXMucHVzaCh0aGlzLmxvY2FsX3BsYXllcilcblx0XHR0aGlzLmVudGl0aWVzID0gdGhpcy5lbnRpdGllcy5jb25jYXQodGhpcy5vdGhlcl9wbGF5ZXJzKVxuXG5cdFx0dGhpcy5zY29yZV90YWxsaWVkID0gZmFsc2U7XG5cdFx0dGhpcy5zY29yZXMgPSBuZXcgTWFwKClcblx0XHRmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcykgdGhpcy5zY29yZXMuc2V0KGVudGl0eS5pZCwgMClcblx0XHR0aGlzLm1heF9zY29yZXMgPSBbLTFdXG5cblx0XHRsZXQgc3AgPSAyXG5cdFx0bGV0IGJyID0gMjBcblx0XHRsZXQgYmFsbHMgPSBbbmV3IEJhbGwoNDAwLCAyNTApXVxuXG5cdFx0YmFsbHMucHVzaChuZXcgQmFsbChiYWxsc1swXS54IC0gYnIgLSBzcCwgYmFsbHNbMF0ueSAtIGJyICogMikpXG5cdFx0YmFsbHMucHVzaChuZXcgQmFsbChiYWxsc1swXS54ICsgYnIgKyBzcCwgYmFsbHNbMF0ueSAtIGJyICogMikpXG5cblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLnggLSBiciAqIDIgLSBzcCwgYmFsbHNbMF0ueSAtIGJyICogNCkpXG5cdFx0YmFsbHMucHVzaChuZXcgQmFsbChiYWxsc1swXS54LCBiYWxsc1swXS55IC0gYnIgKiA0KSlcblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLnggKyBiciAqIDIgKyBzcCwgYmFsbHNbMF0ueSAtIGJyICogNCkpXG5cblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLnggLSBiciAtIHNwLCBiYWxsc1swXS55IC0gYnIgKiA2KSlcblx0XHRiYWxscy5wdXNoKG5ldyBCYWxsKGJhbGxzWzBdLnggLSBiciAqIDMgLSBzcCAqIDIsIGJhbGxzWzBdLnkgLSBiciAqIDYpKVxuXHRcdGJhbGxzLnB1c2gobmV3IEJhbGwoYmFsbHNbMF0ueCArIGJyICsgc3AsIGJhbGxzWzBdLnkgLSBiciAqIDYpKVxuXHRcdGJhbGxzLnB1c2gobmV3IEJhbGwoYmFsbHNbMF0ueCArIGJyICogMyArIHNwICogMiwgYmFsbHNbMF0ueSAtIGJyICogNikpXG5cblx0XHR0aGlzLmJhbGxzID0gYmFsbHNcblx0XHR0aGlzLmVudGl0aWVzID0gdGhpcy5lbnRpdGllcy5jb25jYXQoYmFsbHMpXG5cblx0XHR3aW5kb3cub25rZXlkb3duID0gZSA9PiB7XG5cdFx0XHRpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykgdGhpcy5jdXJyZW50X2lucHV0LnVwID0gdHJ1ZVxuXHRcdFx0aWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykgdGhpcy5jdXJyZW50X2lucHV0LmRvd24gPSB0cnVlXG5cdFx0XHRpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB0aGlzLmN1cnJlbnRfaW5wdXQubGVmdCA9IHRydWVcblx0XHRcdGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB0aGlzLmN1cnJlbnRfaW5wdXQucmlnaHQgPSB0cnVlXG5cdFx0fVxuXG5cdFx0d2luZG93Lm9ua2V5dXAgPSBlID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB0aGlzLmN1cnJlbnRfaW5wdXQudXAgPSBmYWxzZVxuXHRcdFx0aWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykgdGhpcy5jdXJyZW50X2lucHV0LmRvd24gPSBmYWxzZVxuXHRcdFx0aWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0JykgdGhpcy5jdXJyZW50X2lucHV0LmxlZnQgPSBmYWxzZVxuXHRcdFx0aWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHRoaXMuY3VycmVudF9pbnB1dC5yaWdodCA9IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNpbXVsYXRlKG90aGVyX2lucHV0czogSW5wdXRQYWNrZXRbXSk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiU2ltdWxhdGluZyBmcmFtZTogXCIsIEdhbWUuZnJhbWUpXG5cblx0XHRsZXQgdiA9IHRoaXMuaW5wdXRfYnVmZmVyLnBvcGxlZnQoKVxuXG5cdFx0bGV0IGZyYW1lID0gR2FtZS5mcmFtZSAqIEdhbWUuRlBTXG5cdFx0bGV0IHN0YXJ0ID0gR2FtZS5HQU1FX1NUQVJUX0NPVU5URE9XTlxuXHRcdGxldCBlbmQgPSBzdGFydCArIEdhbWUuR0FNRV9FTkRfQ09VTlRET1dOXG5cdFx0bGV0IHJlc3RhcnQgPSBlbmQgKyBHYW1lLkdBTUVfRU5EX1NDT1JFX0NPVU5URE9XTlxuXG5cdFx0aWYgKGZyYW1lIDw9IHN0YXJ0KSB7XG5cdFx0XHQvL05vdGhpbmcgaW50ZXJlc3Rpbmdcblx0XHR9IGVsc2UgaWYgKGZyYW1lIDwgZW5kKSB7XG5cdFx0XHQvL1J1biB0aGUgZ2FtZVxuXHRcdFx0dGhpcy5sb2NhbF9wbGF5ZXIuaW5wdXQodilcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJfaW5wdXRzLmxlbmd0aDsgaSsrKSB0aGlzLm90aGVyX3BsYXllcnNbaV0uaW5wdXQob3RoZXJfaW5wdXRzW2ldKVxuXHRcdFx0dGhpcy51cGRhdGUoKVxuXHRcdH0gZWxzZSBpZiAoZnJhbWUgPD0gcmVzdGFydCkge1xuXHRcdFx0Ly9UYWxseSB0aGUgc2NvcmVcblx0XHRcdGlmICghdGhpcy5zY29yZV90YWxsaWVkKSB7XG5cdFx0XHRcdHRoaXMuc2NvcmVfdGFsbGllZCA9IHRydWU7XG5cdFx0XHRcdGZvciAobGV0IGJhbGwgb2YgdGhpcy5iYWxscykge1xuXHRcdFx0XHRcdGlmICghYmFsbC5jb2xsaWRlZFdpdGgpIGNvbnRpbnVlXG5cblx0XHRcdFx0XHRsZXQgc2NvcmUgPSB0aGlzLnNjb3Jlcy5nZXQoYmFsbC5jb2xsaWRlZFdpdGguaWQpICsgMVxuXHRcdFx0XHRcdHRoaXMuc2NvcmVzLnNldChiYWxsLmNvbGxpZGVkV2l0aC5pZCwgc2NvcmUpXG5cdFx0XHRcdFx0aWYgKHNjb3JlID09PSB0aGlzLm1heF9zY29yZXNbMF0pIHtcblx0XHRcdFx0XHRcdHRoaXMubWF4X3Njb3Jlcy5wdXNoKClcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNjb3JlID4gdGhpcy5tYXhfc2NvcmVzWzBdKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm1heF9zY29yZXMgPSBbc2NvcmVdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vUmVzdGFydCB0aGUgZ2FtZVxuXHRcdFx0TmV0d29yay5yZXNldCgpXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRHYW1lLmZyYW1lKytcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIGVudGl0eS51cGRhdGUodGhpcy5jYW52YXMpXG5cblx0XHRmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcykge1xuXHRcdFx0Ly8gSWdub3JlIHBsYXllcnMgZm9yIHRoZSBtb21lbnRcblx0XHRcdGlmIChlbnRpdHkgaW5zdGFuY2VvZiBQbGF5ZXIpIGNvbnRpbnVlXG5cblx0XHRcdGZvciAobGV0IG90aGVyX2VudGl0eSBvZiB0aGlzLmVudGl0aWVzKSB7XG5cdFx0XHRcdGlmIChlbnRpdHkgPT09IG90aGVyX2VudGl0eSkgY29udGludWVcblx0XHRcdFx0aWYgKGVudGl0eS5jb2xsaWRlcyhvdGhlcl9lbnRpdHkpKSB7XG5cdFx0XHRcdFx0ZW50aXR5LmNvbGxpc2lvbihvdGhlcl9lbnRpdHkpXG5cdFx0XHRcdFx0ZW50aXR5LmNvbGxpc2lvbl9pbnRlcmFjdGlvbihvdGhlcl9lbnRpdHkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZHJhdygpOiB2b2lkIHtcblx0XHR0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuXHRcdGZvciAobGV0IGVudGl0eSBvZiB0aGlzLmVudGl0aWVzKSBlbnRpdHkuZHJhdyh0aGlzLmN0eClcblxuXHRcdGxldCBodyA9IHRoaXMuY2FudmFzLndpZHRoIC8gMlxuXHRcdGxldCBoaCA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDJcblxuXHRcdGxldCBmcmFtZSA9IEdhbWUuZnJhbWUgKiBHYW1lLkZQU1xuXHRcdGxldCBzdGFydCA9IEdhbWUuR0FNRV9TVEFSVF9DT1VOVERPV05cblx0XHRsZXQgZW5kID0gc3RhcnQgKyBHYW1lLkdBTUVfRU5EX0NPVU5URE9XTlxuXHRcdGxldCByZXN0YXJ0ID0gZW5kICsgR2FtZS5HQU1FX0VORF9TQ09SRV9DT1VOVERPV05cblxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjaydcblx0XHRpZiAoZnJhbWUgPD0gc3RhcnQpIHtcblx0XHRcdGxldCBzZWNvbmRzID0gKHN0YXJ0IC0gZnJhbWUpIC8gMTAwMC4wXG5cdFx0XHR0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuXHRcdFx0dGhpcy5jdHguZm9udCA9ICczMnB4IFVidW50dSdcblx0XHRcdHRoaXMuY3R4LmZpbGxUZXh0KGBHYW1lIHdpbGwgc3RhcnQgaW4gJHtzZWNvbmRzLnRvRml4ZWQoMil9IHNlY29uZHNgLCBodywgaGgpXG5cdFx0fSBlbHNlIGlmIChmcmFtZSA8PSBlbmQpIHtcblx0XHRcdGxldCBzZWNvbmRzID0gKGVuZCAtIGZyYW1lKSAvIDEwMDAuMFxuXHRcdFx0dGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnXG5cdFx0XHR0aGlzLmN0eC5mb250ID0gJzE2cHggVWJ1bnR1J1xuXHRcdFx0dGhpcy5jdHguZmlsbFRleHQoYEdhbWUgd2lsbCBlbmQgaW4gJHtzZWNvbmRzLnRvRml4ZWQoMil9IHNlY29uZHNgLCAyMCwgMzApXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInXG5cdFx0XHR0aGlzLmN0eC5mb250ID0gJzMycHggVWJ1bnR1J1xuXHRcdFx0aWYgKHRoaXMubWF4X3Njb3Jlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHRoaXMuY3R4LmZpbGxUZXh0KCdZb3UgVGllZCEnLCBodywgaGgpXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2NvcmVzLmdldCh0aGlzLmxvY2FsX3BsYXllci5pZCkgPT0gdGhpcy5tYXhfc2NvcmVzWzBdKSB7XG5cdFx0XHRcdHRoaXMuY3R4LmZpbGxUZXh0KCdZb3UgV09OIScsIGh3LCBoaClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3R4LmZpbGxUZXh0KFwiWW91IExvc3QgOicoXCIsIGh3LCBoaClcblx0XHRcdH1cblxuXHRcdFx0bGV0IHNlY29uZHMgPSAocmVzdGFydCAtIGZyYW1lKSAvIDEwMDAuMFxuXHRcdFx0dGhpcy5jdHguZmlsbFRleHQoYEdhbWUgd2lsbCByZXN0YXJ0IGluICR7c2Vjb25kcy50b0ZpeGVkKDIpfSBzZWNvbmRzYCwgaHcsIGhoICsgNDApXG5cblx0XHRcdHRoaXMuY3R4LnRleHRBbGlnbiA9ICdsZWZ0J1xuXHRcdFx0dGhpcy5jdHguZm9udCA9ICcxNnB4IFVidW50dSdcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY29yZXMuc2l6ZTsgaSsrKSB7XG5cdFx0XHRcdGxldCB5ID0gaGggKyA3MCArIDMwICogaVxuXHRcdFx0XHRsZXQga2V5ID0gQXJyYXkuZnJvbSh0aGlzLnNjb3Jlcy5rZXlzKCkpW2ldXG5cdFx0XHRcdGxldCBzY29yZSA9IHRoaXMuc2NvcmVzLmdldChrZXkpXG5cdFx0XHRcdGxldCBlbnRpdHkgPSB0aGlzLmVudGl0aWVzLmZpbmQoZSA9PiBlLmlkID09PSBrZXkpIGFzIFBsYXllclxuXG5cdFx0XHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IGVudGl0eS5jb2xvdXJcblx0XHRcdFx0dGhpcy5jdHguYmVnaW5QYXRoKClcblx0XHRcdFx0dGhpcy5jdHguYXJjKGh3IC0gNzAsIHksIDEwLCAwLCAyICogTWF0aC5QSSlcblx0XHRcdFx0dGhpcy5jdHguc3Ryb2tlKClcblx0XHRcdFx0dGhpcy5jdHguZmlsbCgpXG5cblx0XHRcdFx0dGhpcy5jdHguZmlsbFRleHQoYC0gaGFkIGEgc2NvcmUgb2YgJHtzY29yZX1gLCBodyAtIDUwLCB5ICsgNSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYWRkX2lucHV0KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlucHV0X2J1ZmZlci5sZW5ndGgoKSA8IE5ldHdvcmsuQlVGRkVSX1NJWkUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdBZGRpbmcgZnJhbWU6JywgdGhpcy5jdXJyZW50X2lucHV0LnJhdygpKVxuXHRcdFx0bGV0IGlucHV0X2NvcHkgPSBPYmplY3QuY3JlYXRlKHRoaXMuY3VycmVudF9pbnB1dClcblx0XHRcdGlucHV0X2NvcHkgPSBPYmplY3QuYXNzaWduKGlucHV0X2NvcHksIHRoaXMuY3VycmVudF9pbnB1dClcblx0XHRcdHRoaXMuaW5wdXRfYnVmZmVyLmFkZChpbnB1dF9jb3B5KVxuXG5cdFx0XHRsZXQgaW5wdXRfY29weTIgPSBPYmplY3QuY3JlYXRlKHRoaXMuY3VycmVudF9pbnB1dClcblx0XHRcdGlucHV0X2NvcHkyID0gT2JqZWN0LmFzc2lnbihpbnB1dF9jb3B5MiwgdGhpcy5jdXJyZW50X2lucHV0KVxuXHRcdFx0dGhpcy5vbGRfaW5wdXRfYnVmZmVyLmFkZChpbnB1dF9jb3B5MilcblxuXHRcdFx0dGhpcy5jdXJyZW50X2lucHV0LmZyYW1lKytcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSBcIi4uL25ldHdvcmsvbmV0d29ya1wiO1xuaW1wb3J0IHsgSW5wdXRQYWNrZXQgfSBmcm9tIFwiLi4vbmV0d29yay91bnJlbGlhYmxlX3BhY2tldHNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVUZXN0aW5nIGV4dGVuZHMgR2FtZSB7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jYW52YXMgPSBPYmplY3QuY3JlYXRlKEhUTUxDYW52YXNFbGVtZW50KTtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IDgwMDtcblx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSA3MDA7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdHB1YmxpYyBzaW11bGF0ZShfOiBJbnB1dFBhY2tldFtdKTogdm9pZCB7XG5cdFx0dGhpcy5pbnB1dF9idWZmZXIucG9wbGVmdCgpXG5cblx0XHRsZXQgZnJhbWUgPSBHYW1lLmZyYW1lICogR2FtZS5GUFNcblx0XHRsZXQgc3RhcnQgPSBHYW1lLkdBTUVfU1RBUlRfQ09VTlRET1dOXG5cdFx0bGV0IGVuZCA9IHN0YXJ0ICsgR2FtZS5HQU1FX0VORF9DT1VOVERPV05cblx0XHRsZXQgcmVzdGFydCA9IGVuZCArIEdhbWUuR0FNRV9FTkRfU0NPUkVfQ09VTlRET1dOXG5cblx0XHRpZiAoZnJhbWUgPiByZXN0YXJ0KSB7XG5cdFx0XHQvL1Jlc3RhcnQgdGhlIGdhbWVcblx0XHRcdE5ldHdvcmsucmVzZXQoKVxuXHRcdFx0dGhpcy5zZXR1cCgpXG5cdFx0fVxuXG5cdFx0R2FtZS5mcmFtZSsrXG5cdH1cblxuXHRwdWJsaWMgZHJhdygpOiB2b2lkIHt9XG5cblx0cHVibGljIGFkZF9pbnB1dCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pbnB1dF9idWZmZXIubGVuZ3RoKCkgPCBOZXR3b3JrLkJVRkZFUl9TSVpFKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQWRkaW5nIGZyYW1lOicsIHRoaXMuY3VycmVudF9pbnB1dC5yYXcoKSlcblx0XHRcdGxldCBpbnB1dF9jb3B5ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmN1cnJlbnRfaW5wdXQpXG5cdFx0XHRpbnB1dF9jb3B5ID0gT2JqZWN0LmFzc2lnbihpbnB1dF9jb3B5LCB0aGlzLmN1cnJlbnRfaW5wdXQpXG5cdFx0XHR0aGlzLmlucHV0X2J1ZmZlci5hZGQoaW5wdXRfY29weSlcblxuXHRcdFx0bGV0IGlucHV0X2NvcHkyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmN1cnJlbnRfaW5wdXQpXG5cdFx0XHRpbnB1dF9jb3B5MiA9IE9iamVjdC5hc3NpZ24oaW5wdXRfY29weTIsIHRoaXMuY3VycmVudF9pbnB1dClcblx0XHRcdHRoaXMub2xkX2lucHV0X2J1ZmZlci5hZGQoaW5wdXRfY29weTIpXG5cblx0XHRcdHRoaXMuY3VycmVudF9pbnB1dC5mcmFtZSsrXG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgRW50aXR5LCBNb3ZhYmxlLCBFbGFzdGljQ29sbGlzaW9uLCBDb2xsaWRhYmxlIH0gZnJvbSAnLi9lbnRpdHknXG5pbXBvcnQgeyBJbnB1dFBhY2tldCB9IGZyb20gJy4uL25ldHdvcmsvdW5yZWxpYWJsZV9wYWNrZXRzJ1xuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgcmFuZG9tQ29sb3IgZnJvbSAncmFuZG9tY29sb3InXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFbnRpdHkgaW1wbGVtZW50cyBNb3ZhYmxlLCBFbGFzdGljQ29sbGlzaW9uLCBDb2xsaWRhYmxlIHtcblx0cHVibGljIHN0YXRpYyBSQURJVVMgPSAyMFxuXG5cdHB1YmxpYyByYWRpdXMgPSBQbGF5ZXIuUkFESVVTXG5cdHB1YmxpYyBzcGVlZCA9IDAuNVxuXHRwdWJsaWMgY29sb3VyOiBzdHJpbmdcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy54ID0geFxuXHRcdHRoaXMueSA9IHlcblx0XHR0aGlzLmNvbG91ciA9IHJhbmRvbUNvbG9yKHsgbHVtaW5vc2l0eTogJ2RhcmsnLCBzZWVkOiBSYW5kb20uaW50MzIoKSB9KVxuXHR9XG5cblx0cHVibGljIGlucHV0KGk6IElucHV0UGFja2V0KTogdm9pZCB7XG5cdFx0aWYgKGkudXApIHRoaXMudnkgLT0gdGhpcy5zcGVlZFxuXHRcdGlmIChpLmRvd24pIHRoaXMudnkgKz0gdGhpcy5zcGVlZFxuXHRcdGlmIChpLmxlZnQpIHRoaXMudnggLT0gdGhpcy5zcGVlZFxuXHRcdGlmIChpLnJpZ2h0KSB0aGlzLnZ4ICs9IHRoaXMuc3BlZWRcblx0fVxuXG5cdHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpXG5cdFx0Y3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuXHRcdGN0eC5maWxsKClcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgT3RoZXJQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcblx0XHRzdXBlcih4LCB5KVxuXHR9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZnVuY3Rpb24gYXBwbHlNaXhpbnMoZGVyaXZlZEN0b3I6IGFueSwgYmFzZUN0b3JzOiBhbnlbXSk6IHZvaWQge1xuXHRiYXNlQ3RvcnMuZm9yRWFjaChiYXNlQ3RvciA9PiB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYmFzZUN0b3IucHJvdG90eXBlKS5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFxuXHRcdFx0XHRkZXJpdmVkQ3Rvci5wcm90b3R5cGUsXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZUN0b3IucHJvdG90eXBlLCBuYW1lKVxuXHRcdFx0KVxuXHRcdH0pXG5cdH0pXG59XG5hcHBseU1peGlucyhQbGF5ZXIsIFtNb3ZhYmxlLCBFbGFzdGljQ29sbGlzaW9uLCBDb2xsaWRhYmxlXSlcbmFwcGx5TWl4aW5zKE90aGVyUGxheWVyLCBbTW92YWJsZSwgRWxhc3RpY0NvbGxpc2lvbiwgQ29sbGlkYWJsZV0pXG4iLCJpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnLi9uZXR3b3JrJ1xuaW1wb3J0IHsgSW5wdXRQYWNrZXQgfSBmcm9tICcuL3VucmVsaWFibGVfcGFja2V0cydcblxuZXhwb3J0IGNsYXNzIEJ1ZmZlciB7XG5cdHByaXZhdGUgYnVmZmVyOiBJbnB1dFBhY2tldFtdID0gW11cblx0cHVibGljIGZpbGxlZCA9IGZhbHNlXG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge31cblxuXHRwdWJsaWMgaXRlbXMoKTogSW5wdXRQYWNrZXRbXSB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyXG5cdH1cblxuXHRwdWJsaWMgbGVuZ3RoKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmxlbmd0aFxuXHR9XG5cblx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuYnVmZmVyID0gW11cblx0XHR0aGlzLmZpbGxlZCA9IGZhbHNlXG5cdH1cblxuXHRwdWJsaWMgYWRkKGRhdGE6IElucHV0UGFja2V0KTogdm9pZCB7XG5cdFx0Ly9UT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCBhIG1vcmUgZWZmaWNpZW50IFNvcnRlZFNldFxuXHRcdGlmICghdGhpcy5idWZmZXIubWFwKHYgPT4gdi5mcmFtZSkuaW5jbHVkZXMoZGF0YS5mcmFtZSkpIHRoaXMuYnVmZmVyLnB1c2goZGF0YSlcblx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLnNvcnQoKGEsIGIpID0+IGEuZnJhbWUgLSBiLmZyYW1lKVxuXG5cdFx0aWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA+IE5ldHdvcmsuQlVGRkVSX1NJWkUpIHRoaXMuZmlsbGVkID0gdHJ1ZVxuXHR9XG5cblx0Ly9UT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCBhIG1vcmUgZWZmaWNpZW50IG1ldGhvZFxuXHRwdWJsaWMgZmluZF9sb3dlc3QoZ2FtZV9mcmFtZTogbnVtYmVyKTogbnVtYmVyIHtcblx0XHRpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IDApIHRocm93ICdCdWZmZXIgaXMgZW1wdHksIHdoZW4gdHJ5aW5nIHRvIGZpbmQgbG93ZXN0J1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1ZmZlci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuYnVmZmVyW2ldLmZyYW1lICE9IGdhbWVfZnJhbWUgKyBpKSB7XG5cdFx0XHRcdHJldHVybiBnYW1lX2ZyYW1lICsgaVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5idWZmZXJbdGhpcy5idWZmZXIubGVuZ3RoIC0gMV0uZnJhbWVcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVfb2xkKGZyYW1lOiBudW1iZXIpOiB2b2lkIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmJ1ZmZlci5maW5kSW5kZXgodiA9PiB2LmZyYW1lID09PSBmcmFtZSlcblx0XHRpZiAoaW5kZXggPT09IC0xKSByZXR1cm47IC8vIFdlIGhhdmVuJ3QgZ2VuZXJhdGVkIHRoaXMgZnJhbWUgeWV0XG5cblx0XHQvLyBjb25zb2xlLmxvZyhgRm91bmQgZnJhbWU6YCwgZnJhbWUpXG5cdFx0Ly8gY29uc29sZS5sb2coYFJlbW92aW5nICR7aW5kZXh9IHBhY2tldHNgKVxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYnVmZmVyLm1hcCh2ID0+IHYuZnJhbWUpLmpvaW4oKSlcblx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgaW5kZXgpXG5cdH1cblxuXHRwdWJsaWMgcG9wbGVmdCgpOiBJbnB1dFBhY2tldCB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLnNoaWZ0KClcblx0fVxuXG5cdHB1YmxpYyBwb3ByaWdodCgpOiBJbnB1dFBhY2tldCB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLnBvcCgpXG5cdH1cblxuXHRwdWJsaWMgcGVlaygpOiBJbnB1dFBhY2tldCB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyWzBdXG5cdH1cbn1cbiIsImltcG9ydCB7IERhdGFDb25uZWN0aW9uIH0gZnJvbSAncGVlcmpzJ1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnLi9idWZmZXInXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi4vZ2FtZS9nYW1lJ1xuaW1wb3J0IHsgT3RoZXJDbGllbnRzUGFja2V0LCBSZWxpYWJsZVBhY2tldCB9IGZyb20gJy4vcmVsaWFibGVfcGFja2V0cydcbmltcG9ydCB7IFVucmVsaWFibGVQYWNrZXQsIEFja1BhY2tldCwgSW5wdXRQYWNrZXQgfSBmcm9tICcuL3VucmVsaWFibGVfcGFja2V0cydcblxuaW1wb3J0IFBlZXJKcyBmcm9tICdwZWVyanMnXG5sZXQgcGVlciA9IG5ldyBQZWVySnMobnVsbClcbmV4cG9ydCBjbGFzcyBOZXR3b3JrIHtcblx0cHVibGljIHN0YXRpYyBCVUZGRVJfU0laRSA9IDhcblx0cHVibGljIHN0YXRpYyBSRVRSWV9BTU9VTlQgPSA1XG5cblx0cHVibGljIHN0YXRpYyByZWxpYWJsZV9jYWxsYmFja3M6IEZ1bmN0aW9uW10gPSBbXVxuXHRwdWJsaWMgc3RhdGljIHVucmVsaWFibGVfY2FsbGJhY2tzOiBGdW5jdGlvbltdID0gW11cblx0cHVibGljIHN0YXRpYyBtYXBwaW5nOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpXG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5kZXggPSAwXG5cdHB1YmxpYyBzdGF0aWMgbG9jYWxfaWQ6IHN0cmluZ1xuXHRwdWJsaWMgc3RhdGljIGJ1ZmZlcnM6IEJ1ZmZlcltdID0gW11cblxuXHRwcml2YXRlIHN0YXRpYyByZWxpYWJsZV9jb25uZWN0aW9uczogRGF0YUNvbm5lY3Rpb25bXSA9IFtdXG5cdHByaXZhdGUgc3RhdGljIHVucmVsaWFibGVfY29ubmVjdGlvbnM6IERhdGFDb25uZWN0aW9uW10gPSBbXVxuXG5cdHByaXZhdGUgc3RhdGljIGZyYW1lX3dlX2FyZV9taXNzaW5nOiBudW1iZXJbXSA9IFtdXG5cdHByaXZhdGUgc3RhdGljIGZyYW1lX3RoZXlfYXJlX21pc3Npbmc6IG51bWJlcltdID0gW11cblxuXHRwdWJsaWMgc3RhdGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuZnJhbWVfd2VfYXJlX21pc3NpbmcgPSBbXVxuXHRcdHRoaXMuZnJhbWVfdGhleV9hcmVfbWlzc2luZyA9IFtdXG5cdFx0Zm9yIChsZXQgYnVmZmVyIG9mIHRoaXMuYnVmZmVycykge1xuXHRcdFx0YnVmZmVyLmNsZWFyKClcblx0XHRcdHRoaXMuZnJhbWVfd2VfYXJlX21pc3NpbmcucHVzaCgwKTtcblx0XHRcdHRoaXMuZnJhbWVfdGhleV9hcmVfbWlzc2luZy5wdXNoKDApO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgb3Blbl9zb2NrZXQoKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHRwZWVyLm9uKCdvcGVuJywgKGlkOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ015IHBlZXIgaWQgaXM6ICcgKyBpZClcblx0XHRcdFx0TmV0d29yay5sb2NhbF9pZCA9IGlkXG5cdFx0XHRcdHJlc29sdmUoaWQpXG5cdFx0XHR9KVxuXHRcdFx0cGVlci5vbignY29ubmVjdGlvbicsIE5ldHdvcmsuY29ubmVjdGlvbl9vcGVuZWQpXG5cdFx0fSlcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGNvbm5lY3Rpb25fc2V0dXAocGVlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0TmV0d29yay5tYXBwaW5nLnNldChwZWVyX2lkLCBOZXR3b3JrLmluZGV4KyspXG5cdFx0XHROZXR3b3JrLmJ1ZmZlcnMucHVzaChuZXcgQnVmZmVyKCkpXG5cdFx0XHROZXR3b3JrLmZyYW1lX3dlX2FyZV9taXNzaW5nLnB1c2goMClcblx0XHRcdE5ldHdvcmsuZnJhbWVfdGhleV9hcmVfbWlzc2luZy5wdXNoKDApO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBjb25uZWN0aW9uX29wZW5lZChjb25uOiBEYXRhQ29ubmVjdGlvbik6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGAke2Nvbm4ucmVsaWFibGUgPyAnUmVsaWFibGUnIDogJ1VucmVsaWFibGUnfSBDb25uZWN0aW9uIG9wZW5lZCB3aXRoICR7Y29ubi5wZWVyfWApXG5cdFx0bGV0IGluZGV4ID0gTmV0d29yay5tYXBwaW5nLmdldChjb25uLnBlZXIpXG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGluZGV4ID0gTmV0d29yay5pbmRleFxuXHRcdFx0TmV0d29yay5jb25uZWN0aW9uX3NldHVwKGNvbm4ucGVlcilcblxuXHRcdFx0Ly8gSmF2YXNjcmlwdCBpcyB3ZWlyZCAobGV0IGEgPSBbXTsgYVsyXSA9IDQ7IGEgPT0gW2VtcHR5LGVtcHR5LDRdKVxuXHRcdFx0Ly8gTmV0d29yay5yZWxpYWJsZV9jb25uZWN0aW9ucy5wdXNoKG51bGwpXG5cdFx0XHQvLyBOZXR3b3JrLnVucmVsaWFibGVfY29ubmVjdGlvbnMucHVzaChudWxsKVxuXHRcdH1cblxuXHRcdGlmIChjb25uLnJlbGlhYmxlKSB7XG5cdFx0XHROZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zW2luZGV4XSA9IGNvbm5cblx0XHRcdGNvbm4ub24oJ29wZW4nLCAoKSA9PiB7XG5cdFx0XHRcdGNvbm4ub24oJ2RhdGEnLCAoZGF0YTogUmVsaWFibGVQYWNrZXQpID0+IHtcblx0XHRcdFx0XHROZXR3b3JrLnJlY2VpdmVfcmVsaWFibGUoY29ubi5wZWVyLCBkYXRhKVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIFRlbGwgdGhlIG90aGVyIGNsaWVudCBhYm91dCBhbGwgdGhlIG90aGVycyBjbGllbnRzIHdlIGFyZSBjb25uZWN0ZWQgdG9cblx0XHRcdFx0aWYgKE5ldHdvcmsucmVsaWFibGVfY29ubmVjdGlvbnMubGVuZ3RoIC0gMSA+IDApIHtcblx0XHRcdFx0XHRsZXQgcGFja2V0ID0gbmV3IE90aGVyQ2xpZW50c1BhY2tldChOZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zLnNsaWNlKDAsIC0xKS5tYXAoZSA9PiBlLnBlZXIpKVxuXHRcdFx0XHRcdGNvbm4uc2VuZChwYWNrZXQucmF3KCkpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdE5ldHdvcmsudW5yZWxpYWJsZV9jb25uZWN0aW9uc1tpbmRleF0gPSBjb25uXG5cdFx0XHRjb25uLm9uKCdvcGVuJywgKCkgPT4ge1xuXHRcdFx0XHRjb25uLm9uKCdkYXRhJywgKGRhdGE6IFVucmVsaWFibGVQYWNrZXQpID0+IHtcblx0XHRcdFx0XHROZXR3b3JrLnJlY2VpdmVfdW5yZWxpYWJsZShjb25uLnBlZXIsIGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZnVsbF9jb25uZWN0KHBlZXJfaWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKGBNYWtpbmcgYSBjb25uZWN0aW9uIHdpdGggJHtwZWVyX2lkfWApXG5cdFx0aWYgKE5ldHdvcmsubG9jYWxfaWQgPT09IHBlZXJfaWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdUcnlpbmcgdG8gbWFrZSBhIGNvbm5lY3Rpb24gd2l0aCBvdXJzZWxmJylcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChOZXR3b3JrLm1hcHBpbmcuaGFzKHBlZXJfaWQpKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhgTmV0d29yayBjb25uZWN0aW9uIHdpdGggJHtwZWVyX2lkfSBhbHJlYWR5IG9wZW5lZGApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHROZXR3b3JrLmNvbm5lY3Rpb25fc2V0dXAocGVlcl9pZClcblx0XHRcdC50aGVuKCgpID0+IE5ldHdvcmsub3Blbl9yZWxpYWJsZShwZWVyX2lkKSlcblx0XHRcdC50aGVuKCgpID0+IE5ldHdvcmsub3Blbl91bnJlbGlhYmxlKHBlZXJfaWQpKVxuXHRcdFx0LnRoZW4oKCkgPT4gY29uc29sZS5sb2coYENvbm5lY3Rpb24gbWFkZSB3aXRoICR7cGVlcl9pZH1gKSlcblx0XHRcdC5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBVbmFibGUgdG8gbWFrZSBjb25uZWN0aW9uIG1hZGUgd2l0aCAke3BlZXJfaWR9YClcblx0XHRcdFx0TmV0d29yay5tYXBwaW5nLmRlbGV0ZShwZWVyX2lkKVxuXHRcdFx0XHROZXR3b3JrLmluZGV4LS07XG5cdFx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgb3Blbl9yZWxpYWJsZShwZWVyX2lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG5cdFx0XHRsZXQgY29ubiA9IHBlZXIuY29ubmVjdChwZWVyX2lkLCB7IHJlbGlhYmxlOiB0cnVlIH0pXG5cdFx0XHRjb25uLm9uKCdvcGVuJywgKCkgPT4ge1xuXHRcdFx0XHROZXR3b3JrLnJlbGlhYmxlX2Nvbm5lY3Rpb25zLnB1c2goY29ubilcblx0XHRcdFx0Y29ubi5vbignZGF0YScsIChkYXRhOiBSZWxpYWJsZVBhY2tldCkgPT4ge1xuXHRcdFx0XHRcdE5ldHdvcmsucmVjZWl2ZV9yZWxpYWJsZShjb25uLnBlZXIsIGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSlcblx0XHRcdGNvbm4ub24oJ2Vycm9yJywgKGVycm9yOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbWFrZSByZWxpYWJsZSBjb25uZWN0aW9uOiAke2Vycm9yfWApXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyBvcGVuX3VucmVsaWFibGUocGVlcl9pZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xuXHRcdFx0bGV0IGNvbm4gPSBwZWVyLmNvbm5lY3QocGVlcl9pZClcblx0XHRcdGNvbm4ub24oJ29wZW4nLCAoKSA9PiB7XG5cdFx0XHRcdE5ldHdvcmsudW5yZWxpYWJsZV9jb25uZWN0aW9ucy5wdXNoKGNvbm4pXG5cdFx0XHRcdGNvbm4ub24oJ2RhdGEnLCAoZGF0YTogVW5yZWxpYWJsZVBhY2tldCkgPT4ge1xuXHRcdFx0XHRcdE5ldHdvcmsucmVjZWl2ZV91bnJlbGlhYmxlKGNvbm4ucGVlciwgZGF0YSlcblx0XHRcdFx0fSlcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KVxuXHRcdFx0Y29ubi5vbignZXJyb3InLCAoZXJyb3I6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBtYWtlIHVucmVsaWFibGUgY29ubmVjdGlvbjogJHtlcnJvcn1gKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZV9yZWxpYWJsZShwZWVyX2lkOiBzdHJpbmcsIGRhdGE6IFJlbGlhYmxlUGFja2V0KTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIHJlbGlhYmxlOiAnLCBkYXRhKVxuXHRcdGRhdGEgPSBSZWxpYWJsZVBhY2tldC5jb252ZXJ0KGRhdGEpXG5cblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE90aGVyQ2xpZW50c1BhY2tldCkge1xuXHRcdFx0Zm9yIChsZXQgcGVlcl9pZCBvZiBkYXRhLm90aGVycykgTmV0d29yay5mdWxsX2Nvbm5lY3QocGVlcl9pZClcblx0XHR9XG5cdFx0Zm9yIChsZXQgY2FsbGJhY2sgb2YgTmV0d29yay5yZWxpYWJsZV9jYWxsYmFja3MpIGNhbGxiYWNrKHBlZXJfaWQsIGRhdGEpXG5cdH1cblxuXHRwcml2YXRlIHN0YXRpYyByZWNlaXZlX3VucmVsaWFibGUocGVlcl9pZDogc3RyaW5nLCBkYXRhOiBVbnJlbGlhYmxlUGFja2V0KTogdm9pZCB7XG5cdFx0ZGF0YSA9IFVucmVsaWFibGVQYWNrZXQuY29udmVydChkYXRhKVxuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgSW5wdXRQYWNrZXQpIHtcblx0XHRcdGlmIChkYXRhLmdhbWUgPCBHYW1lLmdhbWUpIHJldHVyblxuXHRcdFx0aWYgKGRhdGEuZnJhbWUgPCBHYW1lLmZyYW1lKSByZXR1cm5cblxuXHRcdFx0bGV0IGluZGV4ID0gTmV0d29yay5tYXBwaW5nLmdldChwZWVyX2lkKVxuXHRcdFx0bGV0IGJ1ZmZlciA9IE5ldHdvcmsuYnVmZmVyc1tpbmRleF1cblx0XHRcdGJ1ZmZlci5hZGQoZGF0YSlcblx0XHRcdE5ldHdvcmsuZnJhbWVfd2VfYXJlX21pc3NpbmdbaW5kZXhdID0gYnVmZmVyLmZpbmRfbG93ZXN0KEdhbWUuZnJhbWUpXG5cdFx0fSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQWNrUGFja2V0KSB7XG5cdFx0XHRsZXQgaW5kZXggPSBOZXR3b3JrLm1hcHBpbmcuZ2V0KHBlZXJfaWQpXG5cdFx0XHROZXR3b3JrLmZyYW1lX3RoZXlfYXJlX21pc3NpbmdbaW5kZXhdID0gZGF0YS5hY2tcblx0XHR9XG5cblx0XHRmb3IgKGxldCBjYWxsYmFjayBvZiBOZXR3b3JrLnVucmVsaWFibGVfY2FsbGJhY2tzKSBjYWxsYmFjayhwZWVyX2lkLCBkYXRhKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBzZW5kX2FsbF9yZWxpYWJsZShkYXRhOiBSZWxpYWJsZVBhY2tldCk6IHZvaWQge1xuXHRcdGxldCByYXdfZGF0YSA9IGRhdGEucmF3KClcblx0XHRmb3IgKGxldCBjb25uIG9mIE5ldHdvcmsucmVsaWFibGVfY29ubmVjdGlvbnMpIGNvbm4uc2VuZChyYXdfZGF0YSlcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgc2VuZF9pbnB1dF9idWZmZXIoYnVmZmVyOiBCdWZmZXIsIHBhY2tldF9sb3NzOiBudW1iZXIgPSAwKTogdm9pZCB7XG5cblx0XHRsZXQgZGF0YSA9IGJ1ZmZlci5pdGVtcygpLm1hcCh2ID0+IHYucmF3KCkpXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IE5ldHdvcmsudW5yZWxpYWJsZV9jb25uZWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRcdGxldCBjb25uID0gTmV0d29yay51bnJlbGlhYmxlX2Nvbm5lY3Rpb25zW2luZGV4XVxuXG5cdFx0XHRsZXQgbG93ZXN0X2FjayA9IE5ldHdvcmsuZnJhbWVfdGhleV9hcmVfbWlzc2luZ1tpbmRleF1cblx0XHRcdGZvciAobGV0IGlucHV0IG9mIGRhdGEpIHtcblx0XHRcdFx0aWYgKGlucHV0LmZyYW1lID49IGxvd2VzdF9hY2spIHtcblx0XHRcdFx0XHRpZiAoTWF0aC5yYW5kb20oKSA+PSBwYWNrZXRfbG9zcykgY29ubi5zZW5kKGlucHV0KVxuXHRcdFx0XHRcdGVsc2UgY29uc29sZS5sb2coJ1NpbXVsYXRpbmcgYSBsb3N0IHBhY2tldCcpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IGxvd2VzdF9mcmFtZSA9IE5ldHdvcmsuZnJhbWVfd2VfYXJlX21pc3NpbmdbaW5kZXhdXG5cdFx0XHRjb25uLnNlbmQobmV3IEFja1BhY2tldChsb3dlc3RfZnJhbWUpLnJhdygpKVxuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKE5ldHdvcmsuZnJhbWVfdGhleV9hcmVfbWlzc2luZy50b1N0cmluZygpKVxuXHRcdGxldCBsb3dlc3RfZnJhbWVfciA9IE1hdGgubWluKC4uLk5ldHdvcmsuZnJhbWVfdGhleV9hcmVfbWlzc2luZylcblx0XHRidWZmZXIucmVtb3ZlX29sZChsb3dlc3RfZnJhbWVfcilcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgbmFtZXNwYWNlIGZyb20gJy4vcmVsaWFibGVfcGFja2V0cydcblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXBhcmFtZXRlci1wcm9wZXJ0aWVzICovXG5leHBvcnQgY2xhc3MgUmVsaWFibGVQYWNrZXQge1xuXHRwdWJsaWMgdHlwZTogc3RyaW5nXG5cblx0cHVibGljIHJhdygpOiBhbnkge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHsgdHlwZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lIH0sIHRoaXMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGNvbnZlcnQoZGF0YTogUmVsaWFibGVQYWNrZXQpOiBhbnkge1xuXHRcdGxldCBvYmplY3QgPSBPYmplY3QuY3JlYXRlKChuYW1lc3BhY2UgYXMgYW55KVtkYXRhLnR5cGVdLnByb3RvdHlwZSlcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihvYmplY3QsIGRhdGEpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YXJ0UGFja2V0IGV4dGVuZHMgUmVsaWFibGVQYWNrZXQge1xuXHRwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHNlZWQ6IHN0cmluZykge1xuXHRcdHN1cGVyKClcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyUGFja2V0IGV4dGVuZHMgUmVsaWFibGVQYWNrZXQge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBPdGhlckNsaWVudHNQYWNrZXQgZXh0ZW5kcyBSZWxpYWJsZVBhY2tldCB7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgb3RoZXJzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKClcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgbmFtZXNwYWNlIGZyb20gJy4vdW5yZWxpYWJsZV9wYWNrZXRzJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcGFyYW1ldGVyLXByb3BlcnRpZXMgKi9cbmV4cG9ydCBjbGFzcyBVbnJlbGlhYmxlUGFja2V0IHtcblx0cHVibGljIHR5cGU6IHN0cmluZ1xuXG5cdHB1YmxpYyByYXcoKTogYW55IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7IHR5cGU6IHRoaXMuY29uc3RydWN0b3IubmFtZSB9LCB0aGlzKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb252ZXJ0KGRhdGE6IFVucmVsaWFibGVQYWNrZXQpOiBhbnkge1xuXHRcdGxldCBvYmplY3QgPSBPYmplY3QuY3JlYXRlKChuYW1lc3BhY2UgYXMgYW55KVtkYXRhLnR5cGVdLnByb3RvdHlwZSlcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihvYmplY3QsIGRhdGEpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIElucHV0UGFja2V0IGV4dGVuZHMgVW5yZWxpYWJsZVBhY2tldCB7XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgZnJhbWU6IG51bWJlcixcblx0XHRwdWJsaWMgZ2FtZTogbnVtYmVyLFxuXHRcdHB1YmxpYyB1cDogYm9vbGVhbixcblx0XHRwdWJsaWMgZG93bjogYm9vbGVhbixcblx0XHRwdWJsaWMgbGVmdDogYm9vbGVhbixcblx0XHRwdWJsaWMgcmlnaHQ6IGJvb2xlYW5cblx0KSB7XG5cdFx0c3VwZXIoKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBY2tQYWNrZXQgZXh0ZW5kcyBVbnJlbGlhYmxlUGFja2V0IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBhY2s6IG51bWJlcikge1xuXHRcdHN1cGVyKClcblx0fVxufVxuIiwiaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJy4vbmV0d29yay9uZXR3b3JrJ1xuaW1wb3J0IHsgU3RhcnRQYWNrZXQsIFBsYXllclBhY2tldCwgUmVsaWFibGVQYWNrZXQgfSBmcm9tICcuL25ldHdvcmsvcmVsaWFibGVfcGFja2V0cydcbmltcG9ydCAqIGFzIHNlZWRyYW5kb20gZnJvbSAnc2VlZHJhbmRvbSdcbmltcG9ydCB7IEdhbWVUZXN0aW5nIH0gZnJvbSAnLi9nYW1lL2dhbWVfdGVzdGluZyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdmFyIFJhbmRvbTogc2VlZHJhbmRvbS5wcm5nXG5cbmNvbnNvbGUubG9nKCdTdGFydGluZyB1cCcpXG5OZXR3b3JrLm9wZW5fc29ja2V0KClcbmxldCBjb25uZWN0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25uZWN0LWJ1dHRvbicpXG5jb25uZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHQnY2xpY2snLFxuXHQoKTogdm9pZCA9PiB7XG5cdFx0bGV0IHRleHRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGJveCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcblx0XHROZXR3b3JrLmZ1bGxfY29ubmVjdCh0ZXh0Ym94LnZhbHVlLnRyaW0oKSlcblx0fVxuKVxuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lVGVzdGluZygpXG5sZXQgbG9vcCA9ICgpOiB2b2lkID0+IHtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Z2FtZS5hZGRfaW5wdXQoKVxuXHRcdE5ldHdvcmsuc2VuZF9pbnB1dF9idWZmZXIoZ2FtZS5vbGRfaW5wdXRfYnVmZmVyKVxuXG5cdFx0aWYgKE5ldHdvcmsuYnVmZmVycy5tYXAoYiA9PiBiLnBlZWsoKSkuZXZlcnkodiA9PiB2ICYmIHYuZnJhbWUgPT09IEdhbWVUZXN0aW5nLmZyYW1lKSkge1xuXHRcdFx0Z2FtZS5zaW11bGF0ZShOZXR3b3JrLmJ1ZmZlcnMubWFwKGIgPT4gYi5wb3BsZWZ0KCkpKVxuXHRcdH1cblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcClcblx0fSwgR2FtZVRlc3RpbmcuRlBTKVxufVxuXG4vL1RPRE86IFByb2JhYmx5IGEgbmljZXIgd2F5IG9mIGRvaW5nIHRoaXMsIGluc3RlYWQgb2YgY2FsbGJhY2tzXG5sZXQgb3RoZXJfcGxheWVycyA9IDBcbk5ldHdvcmsucmVsaWFibGVfY2FsbGJhY2tzLnB1c2goKF86IHN0cmluZywgZGF0YTogUmVsaWFibGVQYWNrZXQpID0+IHtcblx0aWYgKGRhdGEgaW5zdGFuY2VvZiBTdGFydFBhY2tldCkge1xuXHRcdGNvbnNvbGUubG9nKCdSZWNlaXZlZCBzdGFydCBjb21tYW5kJylcblx0XHRVdGlscy5zZXRfcmFuZG9tKHNlZWRyYW5kb20oZGF0YS5zZWVkKSlcblxuXHRcdC8vQWNrbm93bGVkZ2UgcmVjZWl2aW5nIHRoZSBzdGFydCBwYWNrZXRcblx0XHROZXR3b3JrLnNlbmRfYWxsX3JlbGlhYmxlKG5ldyBQbGF5ZXJQYWNrZXQoKSlcblx0fSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgUGxheWVyUGFja2V0KSB7XG5cdFx0Y29uc29sZS5sb2coJ1JlY2VpdmVkIFBsYXllclBhY2tldCBhY2tub3dsZWRnZW1lbnQgY29tbWFuZCcpXG5cblx0XHRvdGhlcl9wbGF5ZXJzICs9IDFcblx0XHQvLyBXZSBoYXZlIGdvdCBldmVyeW9uZXMgZWxzZXMgcG9zaXRpb25zLCBub3cgd2UgY2FuIHN0YXJ0IHRoZSBnYW1lXG5cdFx0aWYgKG90aGVyX3BsYXllcnMgPj0gTmV0d29yay5tYXBwaW5nLnNpemUpIHtcblx0XHRcdGdhbWUuc2V0dXAoKVxuXHRcdFx0bG9vcCgpXG5cdFx0fVxuXHR9XG59KSIsImV4cG9ydCB2YXIgUmFuZG9tOiBzZWVkcmFuZG9tLnBybmc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRfcmFuZG9tKHJhbmRvbTogc2VlZHJhbmRvbS5wcm5nKTogdm9pZCB7XHJcbiAgICAgICAgUmFuZG9tID0gcmFuZG9tO1xyXG4gICAgfVxyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
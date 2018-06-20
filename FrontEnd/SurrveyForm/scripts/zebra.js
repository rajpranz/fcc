!function(){"use strict";var t={},e=0,n=function(t,e,o){var r,i=[];if("string"==typeof t&&"body"===t.toLocaleLowerCase()&&(t=document.body),"string"==typeof t)if(0===t.indexOf("<")&&t.indexOf(">")>1&&t.length>2)(e=document.createElement("div")).innerHTML=t,i.push(e.firstChild);else if(e?"object"==typeof e&&e.version&&(e=e[0]):e=document,t.match(/^#[^s]+$/))i.push(e.getElementById(t.substr(1)));else if(o)try{i.push(e.querySelector(t))}catch(t){}else try{i=Array.prototype.slice.call(e.querySelectorAll(t))}catch(t){}else if("object"==typeof t&&(t instanceof Document||t instanceof Element||t instanceof Text||t instanceof Window))i.push(t);else if(t instanceof NodeList)i=Array.prototype.slice.call(t);else if(Array.isArray(t))i=i.concat(t);else if("object"==typeof t&&t.version)return t;for(r in n.fn)i[r]=n.fn[r];return i};n.fn={version:"1.0.0"},n.fn.addClass=function(t){return this._class("add",t)},n.fn.append=function(t){return this._dom_insert(t,"append")},n.fn.appendTo=function(t){return n(t)._dom_insert(this,"append")},n.fn.attr=function(t,e){if("object"==typeof t)this.forEach(function(e){for(var n in t)e.setAttribute(n,t[n])});else if("string"==typeof t){if(void 0===e)return this[0].getAttribute(t);this.forEach(function(n){!1===e||null===e?n.removeAttribute(t):n.setAttribute(t,e)})}return this},n.fn.css=function(t,e){var n;if("object"==typeof t)this.forEach(function(e){for(n in t)e.style[n]=t[n]});else{if(void 0===e)return window.getComputedStyle(this[0])[t];this.forEach(function(n){n.style[t]=!1===e||null===e?null:e})}return this},n.fn.data=function(t,e){if(void 0!==t)return t=t.replace(/-([a-z])/gi,function(){return arguments[1].toUpperCase()}).replace(/-/g,""),void 0!==e?(this.forEach(function(n){n.zjs||(n.zjs={}),n.zjs.data||(n.zjs.data={},Array.prototype.slice.call(n.attributes).forEach(function(t){if(0===t.name.indexOf("data-")){var e=t.name.replace(/^data-/,"").replace(/-([a-z])/gi,function(){return arguments[1].toUpperCase()}).replace(/-/g,"");n.zjs.data[e]=t.value}})),n.zjs.data[t]&&typeof e==typeof n.zjs.data[t]?"object"==typeof e&&"object"==typeof n.zjs.data[t]&&Object.keys(e).forEach(function(o){n.zjs.data[t][o]=e[o]}):n.zjs.data[t]=e}),this):this[0].zjs?this[0].zjs.data[t]:void 0},n.fn.each=function(t){for(var e=0;e<this.length;e++)if(!1===t.call(this[e],e,this[e]))return},n.fn.first=function(){return n(this[0])},n.fn.height=function(t){if(t)return this.css("height",t+(parseFloat(t)===t?"px":""));if(this[0]===window)return window.innerHeight;if(this[0]===document)return Math.max(document.body.offsetHeight,document.body.scrollHeight,document.documentElement.clientHeight,document.documentElement.offsetHeight,document.documentElement.scrollHeight);var e=window.getComputedStyle(this[0]),n=this[0].offsetHeight,o=parseFloat(e.borderTopWidth);return n-parseFloat(e.borderBottomWidth)-o-parseFloat(e.paddingTop)-parseFloat(e.paddingBottom)},n.fn.html=function(t){return t?(this.forEach(function(e){e.innerHTML=t}),this):this[0].innerHTML},n.fn._class=function(t,e){return e=e.split(" "),this.forEach(function(n){e.forEach(function(e){n.classList["add"===t||"toggle"===t&&!n.classList.contains(e)?"add":"remove"](e)})}),this},n.fn._dom_insert=function(t,e){var o=this;return t=n(t),this.forEach(function(n){t.forEach(function(t,r){switch(e){case"after":case"replace":case"wrap":n.parentNode.insertBefore(r<o.length-1?t.cloneNode(!0):t,n.nextSibling);break;case"append":n.appendChild(r<o.length-1?t.cloneNode(!0):t);break;case"before":n.parentNode.insertBefore(r<o.length-1?t.cloneNode(!0):t,n);break;case"prepend":n.insertBefore(r<o.length-1?t.cloneNode(!0):t,n.firstChild)}"wrap"!==e&&"replace"!==e||(n.parentNode.removeChild(n),"wrap"===e&&t.appendChild(n))})}),this},n.inArray=function(t,e){return e.indexOf(t)},Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),window.$=window.jQuery=n}();
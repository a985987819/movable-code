parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#demo"),r=document.querySelector("#style"),e="\n/*大家好，\n今天来给大家画一个太极图\n\n首先\n把背景色稍微加深一些*/\nbody{\n  background:#e3e3e3;\n}\n\n/*\n*然后\n*我要生成一个div\n*/\n#div1{\n  border:1px solid black;\n  width:200px;\n  height:200px;\n}\n\n/*\n接下来\n我要把这个div变成一个圆\n*/\n#div1{\n  border-radius:50%;\n  box-shadow:0 0 3px rgba(0,0,0,0.4);\n  border:none\n}\n\n/*\n* 太极是一黑一白的\n*/\n\n#div1{\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*\n*画出黑白两条鱼\n*/\n\n#div1::before{\n  width:100px;\n  height:100px;\n  top:0;\n  left:50%;\n  transform:translateX(-50%);\n  background:#000;\n  border-radius:50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n\n\n#div1::after{\n  width:100px;\n  height:100px;\n  bottom:0;\n  left:50%;\n  transform:translateX(-50%);\n  background:#ffffff;\n  border-radius:50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n",o="";console.log(e.length);var a=-1,d=function d(){setTimeout(function(){console.log(a),"\n"===e[a+=1]?o+="<br>":" "===e[a]?o+="&nbsp":o+=e[a],n.innerHTML=o,r.innerHTML=e.substring(0,a),window.scrollTo(0,999999),demo.scrollTo(0,999999),a<e.length-1&&d()},20)};d();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.9f33fbce.js.map
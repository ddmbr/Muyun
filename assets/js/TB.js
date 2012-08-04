/*!
* OpenTok JavaScript Library v0.91.59
* http://www.tokbox.com/
*
* Copyright (c) 2011 TokBox, Inc.
*
* Date: July 17 13:54:25 2012
*/
/*
*   SWFObject v2.2 
*    is released under the MIT License 
*    
*    Permission is hereby granted, free of charge, to any person obtaining a copy
*    of this software and associated documentation files (the "Software"), to deal
*    in the Software without restriction, including without limitation the rights
*    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*    copies of the Software, and to permit persons to whom the Software is
*    furnished to do so, subject to the following conditions:
*    
*    The above copyright notice and this permission notice shall be included in
*    all copies or substantial portions of the Software
*/
var swfobject = function() {
   var aq = "undefined", 
   aD = "object", ab = "Shockwave Flash", X = "ShockwaveFlash.ShockwaveFlash", aE = "application/x-shockwave-flash", ac = "SWFObjectExprInst", ax = "onreadystatechange", af = window, aL = document, aB = navigator, aa = false, Z = [aN], aG = [], ag = [], al = [], aJ, ad, ap, at, ak = false, aU = false, aH, an, aI = true, ah = function() {
      var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq, 
      e = aB.userAgent.toLowerCase(), c = aB.platform.toLowerCase(), h = c ?/win/.test(c) :/win/.test(e), j = c ?/mac/.test(c) :/mac/.test(e), g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,d=!+"\v1",f=[0,0,0],k=null;
      if(typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
         k = aB.plugins[ab].description; 
         if(k &&!(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] &&!aB.mimeTypes[aE].enabledPlugin)) {
            aa = true; 
            d = false; 
            k = k.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
            f[0] = parseInt(k.replace(/^(.*)\..*$/,"$1"),10);
            f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10);
            f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof af.ActiveXObject!=aq){try{var i=new ActiveXObject(X);
            if(i) {
               k = i.GetVariable("$version"); 
               if(k) {
                  d = true; 
                  k = k.split(" ")[1].split(","); 
                  f = [parseInt(k[0], 
                  10), 
                  parseInt(k[1], 
                  10), 
                  parseInt(k[2], 
                  10)]}
               }
            }
         catch(b) {
            }
         }
      }
   return {
      w3 : a, pv : f, wk : g, ie : d, win : h, mac : j}
   }
(), aK = function() {
   if(!ah.w3) {
      return}
   if((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
      aP()}
   if(!ak) {
      if(typeof aL.addEventListener != aq) {
         aL.addEventListener("DOMContentLoaded", 
         aP, false)}
      if(ah.ie && ah.win) {
         aL.attachEvent(ax, function() {
            if(aL.readyState == "complete") {
               aL.detachEvent(ax, 
               arguments.callee); aP()}
            }
         ); 
         if(af == top) {
            (function() {
               if(ak) {
                  return}
               try {
                  aL.documentElement.doScroll("left")}
               catch(a) {
                  setTimeout(arguments.callee, 
                  0); 
                  return}
               aP()}
            )()}
         }
      if(ah.wk) {
         (function() {
            if(ak) {
               return}
            if(!/loaded|complete/.test(aL.readyState)){setTimeout(arguments.callee,0);return}aP()})()}aC(aP)}}();
            function aP() {
               if(ak) {
                  return}
               try {
                  var b = aL.getElementsByTagName("body")[0].appendChild(ar("span")); 
                  b.parentNode.removeChild(b)}
               catch(a) {
                  return}
               ak = true; 
               var d = Z.length; 
               for(var c = 0; c < d; c++) {
                  Z[c]()}
               }
            function aj(a) {
               if(ak) {
                  a()}
               else {
                  Z[Z.length] = a}
               }
            function aC(a) {
               if(typeof af.addEventListener != aq) {
                  af.addEventListener("load", 
                  a, 
                  false)}
               else {
                  if(typeof aL.addEventListener != aq) {
                     aL.addEventListener("load", 
                     a, 
                     false)}
                  else {
                     if(typeof af.attachEvent != aq) {
                        aM(af, 
                        "onload", 
                        a)}
                     else {
                        if(typeof af.onload == "function") {
                           var b = af.onload; 
                           af.onload = function() {
                              b(); 
                              a()}
                           }
                        else {
                           af.onload = a}
                        }
                     }
                  }
               }
            function aN() {
               if(aa) {
                  Y()}
               else {
                  am()}
               }
            function Y() {
               var d = aL.getElementsByTagName("body")[0]; 
               var b = ar(aD); 
               b.setAttribute("type", 
               aE); 
               var a = d.appendChild(b); 
               if(a) {
                  var c = 0; 
                  (function() {
                     if(typeof a.GetVariable != aq) {
                        var e = a.GetVariable("$version"); if(e) {
                           e = e.split(" ")[1].split(","); ah.pv = [parseInt(e[0], 
                           10), 
                           parseInt(e[1], 
                           10), 
                           parseInt(e[2], 
                           10)]}
                        }
                     else {
                        if(c < 10) {
                           c++; setTimeout(arguments.callee, 
                           10); return}
                        }
                     d.removeChild(b); a = null; am()}
                  )()}
               else {
                  am()}
               }
            function am() {
               var g = aG.length; 
               if(g > 0) {
                  for(var h = 0; h < g; h++) {
                     var c = aG[h].id; 
                     var l = aG[h].callbackFn; 
                     var a = {
                        success : false, 
                        id : c}; 
                     if(ah.pv[0] > 0) {
                        var i = aS(c); 
                        if(i) {
                           if(ao(aG[h].swfVersion) &&!(ah.wk && ah.wk < 312)) {
                              ay(c, 
                              true); 
                              if(l) {
                                 a.success = true; 
                                 a.ref = av(c); 
                                 l(a)}
                              }
                           else {
                              if(aG[h].expressInstall && au()) {
                                 var e = {
                                    }; 
                                 e.data = aG[h].expressInstall; 
                                 e.width = i.getAttribute("width") || "0"; 
                                 e.height = i.getAttribute("height") || "0"; 
                                 if(i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class")}
                                 if(i.getAttribute("align")) {
                                    e.align = i.getAttribute("align")}
                                 var f = {
                                    }; 
                                 var d = i.getElementsByTagName("param"); 
                                 var k = d.length; 
                                 for(var j = 0; j < k; j++) {
                                    if(d[j].getAttribute("name").toLowerCase() != "movie") {
                                       f[d[j].getAttribute("name")] = d[j].getAttribute("value")}
                                    }
                                 ae(e, 
                                 f, 
                                 c, 
                                 l)}
                              else {
                                 aF(i); 
                                 if(l) {
                                    l(a)}
                                 }
                              }
                           }
                        }
                     else {
                        ay(c, 
                        true); 
                        if(l) {
                           var b = av(c); 
                           if(b && typeof b.SetVariable != aq) {
                              a.success = true; 
                              a.ref = b}
                           l(a)}
                        }
                     }
                  }
               }
            function av(b) {
               var d = null; 
               var c = aS(b); 
               if(c && c.nodeName == "OBJECT") {
                  if(typeof c.SetVariable != aq) {
                     d = c}
                  else {
                     var a = c.getElementsByTagName(aD)[0]; 
                     if(a) {
                        d = a}
                     }
                  }
               return d}
            function au() {
               return !aU && ao("6.0.65") && (ah.win || ah.mac) &&!(ah.wk && ah.wk < 312)}
            function ae(f, 
            d, h, e) {
               aU = true; 
               ap = e || null; 
               at = {
                  success : false, 
                  id : h}; 
               var a = aS(h); 
               if(a) {
                  if(a.nodeName == "OBJECT") {
                     aJ = aO(a); 
                     ad = null}
                  else {
                     aJ = a; 
                     ad = h}
                  f.id = ac; 
                  if(typeof f.width == aq || (!/%$/.test(f.width)&&parseInt(f.width,10)<310)){f.width="310"}if(typeof f.height==aq||(!/%$/.test(f.height)&&parseInt(f.height,10)<137)){f.height="137"}aL.title=aL.title.slice(0,47)+" - Flash Player Installation";
                  var b = ah.ie && ah.win ? "ActiveX" : "PlugIn", 
                  c = "MMredirectURL=" + af.location.toString().replace(/&/g,"%26")+"&MMplayerType="+b+"&MMdoctitle="+aL.title;
                  if(typeof d.flashvars != aq) {
                     d.flashvars += "&" + c}
                  else {
                     d.flashvars = c}
                  if(ah.ie && ah.win && a.readyState != 4) {
                     var g = ar("div"); 
                     h += "SWFObjectNew"; 
                     g.setAttribute("id", 
                     h); 
                     a.parentNode.insertBefore(g, 
                     a); 
                     a.style.display = "none"; 
                     (function() {
                        if(a.readyState == 4) {
                           a.parentNode.removeChild(a)}
                        else {
                           setTimeout(arguments.callee, 
                           10)}
                        }
                     )()}
                  aA(f, 
                  d, 
                  h)}
               }
            function aF(a) {
               if(ah.ie && ah.win && a.readyState != 4) {
                  var b = ar("div"); 
                  a.parentNode.insertBefore(b, 
                  a); 
                  b.parentNode.replaceChild(aO(a), 
                  b); 
                  a.style.display = "none"; 
                  (function() {
                     if(a.readyState == 4) {
                        a.parentNode.removeChild(a)}
                     else {
                        setTimeout(arguments.callee, 
                        10)}
                     }
                  )()}
               else {
                  a.parentNode.replaceChild(aO(a), 
                  a)}
               }
            function aO(b) {
               var d = ar("div"); 
               if(ah.win && ah.ie) {
                  d.innerHTML = b.innerHTML}
               else {
                  var e = b.getElementsByTagName(aD)[0]; 
                  if(e) {
                     var a = e.childNodes; 
                     if(a) {
                        var f = a.length; 
                        for(var c = 0; c < f; c++) {
                           if(!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") &&!(a[c].nodeType == 8)) {
                              d.appendChild(a[c].cloneNode(true))}
                           }
                        }
                     }
                  }
               return d}
            function aA(e, 
            g, c) {
               var d, 
               a = aS(c); 
               if(ah.wk && ah.wk < 312) {
                  return d}
               if(a) {
                  if(typeof e.id == aq) {
                     e.id = c}
                  if(ah.ie && ah.win) {
                     var f = ""; 
                     for(var i in e) {
                        if(e[i] != Object.prototype[i]) {
                           if(i.toLowerCase() == "data") {
                              g.movie = e[i]}
                           else {
                              if(i.toLowerCase() == "styleclass") {
                                 f += ' class="' + e[i] + '"'}
                              else {
                                 if(i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"'}
                                 }
                              }
                           }
                        }
                     var h = ""; 
                     for(var j in g) {
                        if(g[j] != Object.prototype[j]) {
                           h += '<param name="' + j + '" value="' + g[j] + '" />'}
                        }
                     a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>"; 
                     ag[ag.length] = e.id; 
                     d = aS(e.id)}
                  else {
                     var b = ar(aD); 
                     b.setAttribute("type", 
                     aE); 
                     for(var k in e) {
                        if(e[k] != Object.prototype[k]) {
                           if(k.toLowerCase() == "styleclass") {
                              b.setAttribute("class", 
                              e[k])}
                           else {
                              if(k.toLowerCase() != "classid") {
                                 b.setAttribute(k, 
                                 e[k])}
                              }
                           }
                        }
                     for(var l in g) {
                        if(g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                           aQ(b, 
                           l, 
                           g[l])}
                        }
                     a.parentNode.replaceChild(b, 
                     a); 
                     d = b}
                  }
               return d}
            function aQ(b, 
            d, c) {
               var a = ar("param"); 
               a.setAttribute("name", 
               d); 
               a.setAttribute("value", 
               c); 
               b.appendChild(a)}
            function aw(a) {
               var b = aS(a); 
               if(b && b.nodeName == "OBJECT") {
                  if(ah.ie && ah.win) {
                     b.style.display = "none"; 
                     (function() {
                        if(b.readyState == 4) {
                           aT(a)}
                        else {
                           setTimeout(arguments.callee, 
                           10)}
                        }
                     )()}
                  else {
                     b.parentNode.removeChild(b)}
                  }
               }
            function aT(a) {
               var b = aS(a); 
               if(b) {
                  for(var c in b) {
                     if(typeof b[c] == "function") {
                        b[c] = null}
                     }
                  b.parentNode.removeChild(b)}
               }
            function aS(a) {
               var c = null; 
               try {
                  c = aL.getElementById(a)}
               catch(b) {
                  }
               return c}
            function ar(a) {
               return aL.createElement(a)}
            function aM(a, 
            c, b) {
               a.attachEvent(c, 
               b); 
               al[al.length] = [a, 
               c, b]}
            function ao(a) {
               var b = ah.pv, 
               c = a.split("."); 
               c[0] = parseInt(c[0], 
               10); 
               c[1] = parseInt(c[1], 
               10) || 0; 
               c[2] = parseInt(c[2], 
               10) || 0; 
               return(b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true : false}
            function az(b, 
            f, a, c) {
               if(ah.ie && ah.mac) {
                  return}
               var e = aL.getElementsByTagName("head")[0]; 
               if(!e) {
                  return}
               var g = (a && typeof a == "string") ? a : "screen"; 
               if(c) {
                  aH = null; 
                  an = null}
               if(!aH || an != g) {
                  var d = ar("style"); 
                  d.setAttribute("type", 
                  "text/css"); 
                  d.setAttribute("media", 
                  g); 
                  aH = e.appendChild(d); 
                  if(ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                     aH = aL.styleSheets[aL.styleSheets.length - 1]}
                  an = g}
               if(ah.ie && ah.win) {
                  if(aH && typeof aH.addRule == aD) {
                     aH.addRule(b, 
                     f)}
                  }
               else {
                  if(aH && typeof aL.createTextNode != aq) {
                     aH.appendChild(aL.createTextNode(b + " {" + f + "}"))}
                  }
               }
            function ay(a, 
            c) {
               if(!aI) {
                  return}
               var b = c ? "visible" : "hidden"; 
               if(ak && aS(a)) {
                  aS(a).style.visibility = b}
               else {
                  az("#" + a, 
                  "visibility:" + b)}
               }
            function ai(b) {
               var a = /[\\\"<>\.;]/;
               var c = a.exec(b) != null; 
               return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b}
            var aR = function() {
               if(ah.ie && ah.win) {
                  window.attachEvent("onunload", 
                  function() {
                     var a = al.length; for(var b = 0; b < a; b++) {
                        al[b][0].detachEvent(al[b][1], 
                        al[b][2])}
                     var d = ag.length; for(var c = 0; c < d; c++) {
                        aw(ag[c])}
                     for(var e in ah) {
                        ah[e] = null}
                     ah = null; for(var f in swfobject) {
                        swfobject[f] = null}
                     swfobject = null}
                  )}
               }
            (); 
            return {
               registerObject : function(a, 
               e, c, b) {
                  if(ah.w3 && a && e) {
                     var d = {
                        }; 
                     d.id = a; 
                     d.swfVersion = e; 
                     d.expressInstall = c; 
                     d.callbackFn = b; 
                     aG[aG.length] = d; 
                     ay(a, 
                     false)}
                  else {
                     if(b) {
                        b( {
                           success : false, 
                           id : a}
                        )}
                     }
                  }
               , getObjectById : function(a) {
                  if(ah.w3) {
                     return av(a)}
                  }
               , embedSWF : function(k, e, h, f, c, a, b, i, g, j) {
                  var d = {
                     success : false, 
                     id : e}; 
                  if(ah.w3 &&!(ah.wk && ah.wk < 312) && k && e && h && f && c) {
                     ay(e, 
                     false); 
                     aj(function() {
                        h += ""; f += ""; var q = {
                           }; if(g && typeof g === aD) {
                           for(var o in g) {
                              q[o] = g[o]}
                           }
                        q.data = k; q.width = h; q.height = f; var n = {
                           }; if(i && typeof i === aD) {
                           for(var p in i) {
                              n[p] = i[p]}
                           }
                        if(b && typeof b === aD) {
                           for(var l in b) {
                              if(typeof n.flashvars != aq) {
                                 n.flashvars += "&" + l + "=" + b[l]}
                              else {
                                 n.flashvars = l + "=" + b[l]}
                              }
                           }
                        if(ao(c)) {
                           var m = aA(q, 
                           n, 
                           e); if(q.id == e) {
                              ay(e, 
                              true)}
                           d.success = true; d.ref = m}
                        else {
                           if(a && au()) {
                              q.data = a; ae(q, 
                              n, 
                              e, 
                              j); return}
                           else {
                              ay(e, 
                              true)}
                           }
                        if(j) {
                           j(d)}
                        }
                     )}
                  else {
                     if(j) {
                        j(d)}
                     }
                  }
               , switchOffAutoHideShow : function() {
                  aI = false}
               , ua : ah, getFlashPlayerVersion : function() {
                  return {
                     major : ah.pv[0], 
                     minor : ah.pv[1], 
                     release : ah.pv[2]}
                  }
               , hasFlashPlayerVersion : ao, createSWF : function(a, b, c) {
                  if(ah.w3) {
                     return aA(a, 
                     b, 
                     c)}
                  else {
                     return undefined}
                  }
               , showExpressInstall : function(b, a, d, c) {
                  if(ah.w3 && au()) {
                     ae(b, 
                     a, 
                     d, 
                     c)}
                  }
               , removeSWF : function(a) {
                  if(ah.w3) {
                     aw(a)}
                  }
               , createCSS : function(b, a, c, d) {
                  if(ah.w3) {
                     az(b, 
                     a, 
                     c, 
                     d)}
                  }
               , addDomLoadEvent : aj, addLoadEvent : aC, getQueryParamValue : function(b) {
                  var a = aL.location.search || aL.location.hash; 
                  if(a) {
                     if(/\?/.test(a)){a=a.split("?")[1]}if(b==null){return ai(a)}var c=a.split("&");
                     for(var d = 0; d < c.length; d++) {
                        if(c[d].substring(0, 
                        c[d].indexOf("=")) == b) {
                           return ai(c[d].substring((c[d].indexOf("=") + 1)))}
                        }
                     }
                  return""}
               , expressInstallCallback : function() {
                  if(aU) {
                     var a = aS(ac); 
                     if(a && aJ) {
                        a.parentNode.replaceChild(aJ, 
                        a); 
                        if(ad) {
                           ay(ad, 
                           true); 
                           if(ah.ie && ah.win) {
                              aJ.style.display = "block"}
                           }
                        if(ap) {
                           ap(at)}
                        }
                     aU = false}
                  }
               }
            }
         (); 
         /*
         * JavaScript Debug - v0.4 - 6/22/2010
         * http://benalman.com/projects/javascript-debug-console-log/
         * 
         * Copyright (c) 2010 "Cowboy" Ben Alman
         * Dual licensed under the MIT and GPL licenses.
         * http://benalman.com/about/license/
         * 
         * With lots of help from Paul Irish!
         * http://paulirish.com/
         */
         window.opentokdebug = (function() {
            var i = this, 
            m = i.document, 
            g = Array.prototype.slice, 
            f = i.console, h = {
               }
            , q, c, p = 0, s = ["error", "warn", "info", "debug", "log"], b = "assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "), j = b.length, n = false, d = m.createElement("div"), a = []; while(--j >= 0) {
               (function(t) {
                  h[t] = function() {
                     f = i.console; if(p !== 0 && f) {
                        if(f[t] && typeof(f[t].apply) != "undefined") {
                           f[t].apply(f, 
                           arguments)}
                        else {
                           var u = g.call(arguments); if(t.indexOf("group") !=- 1) {
                              u.unshift("[" + t + "]"); h.log(u.join(" "))}
                           }
                        }
                     }
                  }
               )(b[j])}
            j = s.length; while(--j >= 0) {
               (function(t, 
               u) {
                  h[u] = function() {
                     var w = g.call(arguments), 
                     v = [u, 
                     e()].concat(w); a.push(v); if(!k(t)) {
                        return}
                     if(n) {
                        var x = m.createTextNode(v); d.appendChild(x); d.appendChild(m.createElement("br"))}
                     r(v); f = i.console; if(!f &&!n) {
                        return}
                     f[u] ? o(u, 
                     w) : o("log", 
                     w)}
                  }
               )(j, s[j])}
            function o(u, 
            t) {
               if(typeof(f[u].apply) != "undefined") {
                  f[u].apply(f, 
                  t)}
               else {
                  f[u](t.join(" "))}
               }
            function r(t) {
               if(q && (c ||!f ||!f.log)) {
                  q.apply(i, 
                  t)}
               }
            h.setLevel = function(t) {
               p = typeof t === "number" ? t : 9}; function k(t) {
               return p > 0 ? p > t : s.length + p <= t}
            h.setCallback = function() {
               var u = g.call(arguments), 
               t = a.length, v = t; q = u.shift() || null; c = typeof u[0] === "boolean" ? u.shift() : false; v -= typeof u[0] === "number" ? u.shift() : t; while(v < t) {
                  r(a[v++])}
               }; h.getLogs = function() {
               return a.join("\n")}; h.setDomInsertion = function(u, 
            t) {
               n = u; if(u && m.body) {
                  m.body.appendChild(d); var v = "debug"; if(typeof(t) == "string") {
                     v = t}
                  d.className = v}
               else {
                  d.parentNode.removeChild(d)}
               }; function l(u) {
               try {
                  return u instanceof HTMLElement}
               catch(t) {
                  return(typeof u === "object") && (u.nodeType === 1) && (typeof u.style === "object") && (typeof u.ownerDocument === "object")}
               }
            function e() {
               var t = new Date(); return t.toLocaleTimeString() + t.getMilliseconds()}
            h.exportLogs = function(t) {
               if(l(t)) {
                  t.innerHTML = a.join("<br />")}
               }; return h}
         )(); 
         (function(aR) {
            var y = "10.0.0"; var av = 215; var j = 138; var u; var z; var a0; var aT = false; var J = false; var ae = {
               }; var M = "true"; var E = "http://static.opentok.com"; var au = E + "/opentok/assets/flash/expressInstall.swf"; if(M == "true" && aR.location.protocol == "https:") {
               E = "https://swww.tokbox.com"}
            var K; var F = {
               }; var am = {
               }; var aI = false; var x = false; var aF = false; var aW; var e = {
               1000 : "Failed To Load", 
               1004 : "Authentication error", 
               1005 : "Invalid Session ID", 
               1006 : "Connect Failed", 
               1007 : "Connect Rejected", 
               1008 : "Connect Time-out", 
               1009 : "Security Error", 
               1010 : "Not Connected", 
               1011 : "Invalid Parameter", 
               1012 : "Peer-to-peer Stream Play Failed", 
               1013 : "Peer-to-peer Connection Failed", 
               1014 : "API Response Failure", 
               2000 : "Internal Error", 
               2001 : "Embed Failed", 
               1500 : "Unable to Publish", 
               1510 : "Unable to Signal", 
               1520 : "Unable to Force Disconnect", 
               1530 : "Unable to Force Unpublish", 
               1540 : "Unable to record archive", 
               1550 : "Unable to play back archive", 
               1560 : "Unable to create archive", 
               1570 : "Unable to load archive", 
               3000 : "Archive load exception", 
               3001 : "Archive create exception", 
               3002 : "Playback stop exception", 
               3003 : "Playback start exception", 
               3004 : "Record start exception", 
               3005 : "Record stop exception", 
               3006 : "Archive load exception", 
               3007 : "Session recording in progress", 
               3008 : "Archive recording internal failure"}; function aY() {
               return aR.location.hostname}
            var Z = 1, 
            an = {
               }
            , c = (function() {
               var a2 = (function() {
                  var a3 = document.getElementsByTagName("script"); a3 = a3[a3.length - 1]; a3 = a3.getAttribute("src") || a3.src; return a3}
               )(); var a1 = a2.match(/[\?\&]apikey=([^&]+)/i);return a1?a1[1]:""})();function aB(){this._listeners={};this.addEventListener=function(a1,a2){if(!a1){throw new Error("EventDispatcher.addEventListener :: No type specified")}if(!a2){throw new Error("EventDispatcher.addEventListener :: No listener function specified")}if(!this._listeners.hasOwnProperty(a1)){this._listeners[a1]=[]}this.removeEventListener(a1,a2);t("TB.addEventListener("+a1+")");this._listeners[a1].push(a2)};this.removeEventListener=function(a2,a3){if(!a2){throw new Error("EventDispatcher.removeEventListener :: No type specified")}if(!a3){throw new Error("EventDispatcher.removeEventListener :: No listener function specified")}t("TB.removeEventListener("+a2+")");if(this._listeners.hasOwnProperty(a2)){for(var a1=0;a11){if(this._style.hasOwnProperty(a7)&&(a7=="backgroundImageURI"||(a3[a7].indexOf(ba)>-1))){t("setStyle::Setting "+a7+" to "+ba);this._style[a7]=ba}else{aZ("setStyle::Invalid style property passed "+a7+" : "+ba)}}else{for(var a6 in a7){this.setStyle(a6,a7[a6])}}this.modified=true}else{if(a5){try{a5.setStyle(a7,ba)}catch(a8){a9="Publisher.setStyle:: Failed to call setStyle. "+a8;aE(a9);throw new Error(a9)}}else{a9="Publisher.setStyle:: Publisher "+this.id+" does not exist.";aE(a9);throw new Error(a9)}}return this}}function v(a2,a1){ah.apply(this,arguments);this.getImgData=function(){return this._.callFlash("getImgData")}}function S(a5,a4,a3){a3=(a3)?aN(a3):{};if(a3.name!==undefined&&a3.name.length>1000){errorMsg="Session.publish :: name property longer than 1000 chars.";aE(errorMsg);throw new Error(errorMsg)}if(a3.data!==undefined&&a3.data.length>1000){errorMsg="Session.publish :: data property longer than 1000 chars.";aE(errorMsg);throw new Error(errorMsg)}a3.apiKey=a3.apiKey||c;if(!a3.apiKey){errorMsg="initPublisher :: apiKey missing.";aE(errorMsg);throw new Error(errorMsg)}v.apply(this,arguments);this._style={showMicButton:true,showSettingsButton:true,showCameraToggleButton:true,nameDisplayMode:"auto",buttonDisplayMode:"auto",backgroundImageURI:null};var a1=264;var a2=198;this.loaded=false;this.panelId=null;this.properties=k({microphoneGain:50,publishAudio:true,publishVideo:true},a3,{simulateMobile:b.simulateMobile,cameraSelected:aT,publisherId:this.id,startTime:(new Date()).getTime()});if(!this.properties.width||isNaN(this.properties.width)){this.properties.width=a1}if(!this.properties.height||isNaN(this.properties.height)){this.properties.height=a2}if(a3&&a3.hasOwnProperty("style")){this.setStyle(a3.style);this.properties.style=encodeURIComponent(T(this.properties.style));this.modified=true}if(this.properties.wmode){delete this.properties.wmode}if(this.properties.apikey){delete this.properties.apikey}this._.load({src:E+"/v0.91.59/flash/f_publishwidget.swf?partnerId="+a3.apiKey,attributes:{id:this.id,style:"outline:none;"},params:{allowscriptaccess:"always",cameraSelected:aT,wmode:a3.wmode||"transparent"}});this._.refresh=function(){this.parent.properties.startTime=(new Date()).getTime();this.callFlash("cleanupView",null,{once:true});this.parent.replacedDivId=this.parent.id;this.load()};this._.publishToSession=function(a8,a7,a6){this.callFlash("publishToSession",[a8,a7,a6]);return this.parent};this._.unpublishFromSession=function(a6){if(this.DOMcomponent){this.callFlash("unpublishFromSession",[a6])}return this.parent};this.setMicrophoneGain=function(a6){this.properties.microphoneGain=parseInt(a6,10);this._.callFlash("setMicGain",[a6],{debug:"Microphone gain adjustment on publisher "+this.id+" failed. "});return this};this.getMicrophoneGain=function(){return this._.callFlash("getMicGain",null,{debug:"Microphone gain request on publisher "+this.id+" failed. ",otherwise:this.properties.microphoneGain})};this.getEchoCancellationMode=function(){return this._.callFlash("getEchoCancellationMode",null,{debug:"Getting echo cancellation mode for publisher "+this.id+" failed. ",otherwise:"unknown"})};this.enableMicrophone=function(){this.publishAudio(true);return this};this.disableMicrophone=function(){this.publishAudio(false);return this};this.publishAudio=function(a6){t("Publisher.publishAudio()");this.properties.publishAudio=!!a6;this._.callFlash("setStreamProperty",["publishAudio",!!a6]);return this};this.publishVideo=function(a6){t("Publisher.publishVideo()");this.properties.publishVideo=!!a6;this._.callFlash("setStreamProperty",["publishVideo",!!a6]);return this};this.setCamera=function(a6){this.properties.cameraName=[typeof(a6)==="string"?a6:a6.name];this._.callFlash("setCamera",this.properties.cameraName);return this};this.setMicrophone=function(a6){this.properties.microphoneName=[typeof(a6)==="string"?a6:a6.name];this._.callFlash("setMicrophone",this.properties.microphoneName);return this};this.detectDevices=function(){if(!!this._.DOMcomponent){this._.callFlash("detectDevices")}else{t("The deviceDetected function is already triggered onload, not adding to defer Queue")}return this};this.detectMicActivity=function(a6){this._.callFlash("detectMicActivity",[a6!==false]);return this};this.destroy=function(){if(this._.DOMcomponent&&this._.DOMcomponent.parentNode){this._.callFlash("cleanupView");this._.DOMcomponent.parentNode.removeChild(this._.DOMcomponent);this._.DOMcomponent=null}else{t("The item doesn't exist to be detroyed")}return this};this._.signalRecording=function(a6){return this.callFlash(a6?"signalRecordingStarted":"signalRecordingStopped")}}function af(a5,a6,a4,a2){this.superClass=v;this.superClass(a6,a4);this._style={nameDisplayMode:"auto",buttonDisplayMode:"auto",backgroundImageURI:null};this.modified=false;if(a2&&a2.hasOwnProperty("style")){this.setStyle(a2.style);this.modified=true}this.stream=a5;this.properties=a2;this.loaded=false;this.audioVolume=50;var a1=true;var a3=true;if(a2){if(a2.hasOwnProperty("subscribeToAudio")&&(a2.subscribeToAudio==="false"||a2.subscribeToAudio==false)){a1=false}if(a2.hasOwnProperty("subscribeToVideo")&&(a2.subscribeToVideo==="false"||a2.subscribeToVideo==false)){a3=false}if(a2.hasOwnProperty("audioVolume")){this.audioVolume=parseInt(a2.audioVolume,10)}}this.enableAudio=function(){this.subscribeToAudio(true)};this.disableAudio=function(){this.subscribeToAudio(false)};this.setAudioVolume=function(ba){var a7=document.getElementById(this.id),a9;if(!this.loaded){this.audioVolume=ba}else{if(a7){try{a7.setAudioVolume(ba)}catch(a8){a9="Volume adjustment on subscriber "+this.id+" failed";aE(a9);throw new Error(a9)}}else{a9="Subscriber "+this.id+" does not exist.";aE(a9);throw new Error(a9)}}return this};this.getAudioVolume=function(){var a7=document.getElementById(this.id),a9;if(!this.loaded){return this.audioVolume}if(a7){try{return a7.getAudioVolume()}catch(a8){a9="Volume adjustment on subscriber "+this.id+" failed";aE(a9);throw new Error(a9)}}else{a9="Subscriber "+this.id+" does not exist.";aE(a9);throw new Error(a9)}return this};this._subscribeToAudio=function(a7,a8){t("Subscriber.subscribeToAudio()");if(!a8||a1){if(!this.loaded){this.audioSubscribed=a7;this.modified=true}else{l(this.id,"subscribeToAudio",a7)}}};this.subscribeToAudio=function(a7){a1=a7;this._subscribeToAudio(a1,false)};this._subscribeToVideo=function(a7,a8){t("Subscriber.subscribeToVideo()");if(!a8||a3){if(!this.loaded){this.videoSubscribed=a7;this.modified=true}else{l(this.id,"subscribeToVideo",a7)}}};this.subscribeToVideo=function(a7){a3=a7;this._subscribeToVideo(a3,false)};this.changeOrientation=function(a7){t("Subscriber.changeOrientation()");l(this.id,"changeOrientation",a7)}}function ar(a4,a3,a1,a2){this.superClass=ay;this.superClass(a4,a3);if(a1){this.publisher=a1;this.component=a1}else{this.publisher=null;this.component=a1}this.parentCreated=false;this.properties=a2}function aU(a2,a1){this.name=a2;this.status=a1}function aQ(a2,a1){this.name=a2;this.status=a1}function A(a3,a2,a6,a5,a1){this.archiveId=a3;this.type=a2;this.title=a6;this.sessionId=a5;var a4;if(a1=="sessionRecordingInProgress"){this.status="open"}else{this.status=a1}this.startPlayback=function(a8){if(!a8){a8=false}t("Archive.startPlayback() : "+a8);var bc="controller_"+a5,a9=b.sessions[a5].connection,bb;if(!am[a5][this.archiveId]){bb="Archive.startPlayback :: Archive not loaded.";aE(bb);throw new Error(bb)}if(bc&&a9&&a9.connectionId){try{var a7=document.getElementById(bc);a7.startPlayback(this.archiveId,a8)}catch(ba){bb="Archive.startPlayback :: "+ba;aE(bb);throw new Error(bb)}}else{bb="Archive.startPlayback :: Connection required to play back an archive.";aE(bb);throw new Error(bb)}};this.stopPlayback=function(){t("Archive.stopPlayback()");var bb="controller_"+a5,a8=b.sessions[a5].connection,ba;if(bb&&a8&&a8.connectionId){try{var a7=document.getElementById(bb);a7.stopPlayback(this.archiveId)}catch(a9){ba="Archive.stopPlayback :: "+a9;aE(ba);throw new Error(ba)}}else{ba="Archive.stopPlayback :: Connection required to stop playing back an archive.";aE(ba);throw new Error(ba)}};this.getStateManager=function(){t("Archive.getStateManager() "+a3);if(a4){return a4}else{var a9="controller_"+a5;var a7=b.sessions[a5].connection;if(a9&&a7&&a7.connectionId){a4=new R(a9,a3);return a4}}var a8="Archive.getStateManager :: Connection required to getStateManager. Make sure that this archive was loaded in a Session.";aE(a8);throw new Error(a8)}}function ao(a3,a2,a1){this.superClass=v;this.superClass(a3,a2);this._style={buttonDisplayMode:"auto",showCameraToggleButton:true,showControlBar:true,showMicButton:true,showPlayCounter:true,showRecordCounter:true,showSaveButton:true,showSettingsButton:true};this.id=a3;this.properties=a1;this.saveArchive=function(){var a4=document.getElementById(this.id);a4.save()};this.setCamera=function(a4){t("Recorder.setCamera("+a4+")");i(this.id,a4,true)};this.setMicrophone=function(a4){t("Recorder.setMicrophone("+a4+")");i(this.id,a4,false)};this.stopRecording=function(){recorderElement=document.getElementById(this.id);recorderElement.stopRecording()};this.startRecording=function(a4){recorderElement=document.getElementById(this.id);recorderElement.startRecording(a4)};this.startPlaying=function(){t("Recorder.startPlaying()");try{var a4=document.getElementById(this.id);a4.startPlaying()}catch(a6){var a5="Recorder.startPlaying :: "+a6;aE(a5);throw new Error(a5)}};this.stopPlaying=function(){t("Recorder.stopPlaying()");try{var a4=document.getElementById(this.id);a4.stopPlaying()}catch(a6){var a5="Recorder.stopPlaying :: "+a6;aE(a5);throw new Error(a5)}};this.setTitle=function(a7){var a4=document.getElementById(this.id),a6;if(!this.loaded){this._title=a7;this.modified=true}else{if(a4){try{a4.setTitle(a7)}catch(a5){a6="Setting archive title on Recorder "+this.id+" failed.";aE(a6);throw new Error(a6)}}else{a6="Recorder "+this.id+" does not exist.";aE(a6);throw new Error(a6)}}}}function aK(a3,a2,a1){this.superClass=v;this.superClass(a3,a2);this._style={showPlayButton:true,showStopButton:true,showSpeakerButton:true,showPreviewTime:true};this.id=a3;this.properties=a1;this.loadArchive=function(a7){var a6;if(a7){if(this.loaded){try{var a4=document.getElementById(this.id);a4.loadArchive(a7);this.archiveId=a7}catch(a5){a6="Player.loadArchive :: "+a5;aE(a6);throw new Error(a6)}}else{this._archiveId=a7}}else{a6="Player.loadArchive :: Archive id required to load an archive.";aE(a6);throw new Error(a6)}};this.play=function(){if(this.loaded){try{var a4=document.getElementById(this.id);a4.startPlayback()}catch(a6){var a5="Player.play :: "+a6;aE(a5);throw new Error(a5)}}else{this._play=true}};this.stop=function(){if(this.loaded){try{var a4=document.getElementById(this.id);a4.stopPlayback()}catch(a6){var a5="Player.stop :: "+a6;aE(a5);throw new Error(a5)}}else{this._play=false}};this.pause=function(){if(this.loaded){try{var a4=document.getElementById(this.id);a4.pausePlayback()}catch(a6){var a5="Player.pause :: "+a6;aE(a5);throw new Error(a5)}}else{this._play=false}}}function aS(a5){this.superClass=aB;this.superClass();this.apiKey=a5;this.panels={};this.showMicSettings=true;this.showCamSettings=true;var a2=360;var a4=270;var a1=340;var a3=230;this.detectDevices=function(){t("DeviceManager.detectDevices()");if(!a0){var ba={};ba.allowscriptaccess="always";a0="opentok_deviceDetector";var a6={};a6.id=a0;var a7={};aW.onLoad(function(){var bb=document.createElement("div");bb.setAttribute("id",a0);bb.style.display="none";document.body.appendChild(bb);swfobject.embedSWF(E+"/v0.91.59/flash/f_devicedetectorwidget.swf?partnerId="+a5,a0,1,1,"10.0.0",false,a7,ba,a6)})}else{try{var a8=document.getElementById(a0);a8.detectDevices()}catch(a9){aE(a9);throw new Error("DeviceManager.detectDevices() :: Failed to locate existing device detector "+a9)}}};this.displayPanel=function(a9,be,ba){t("DeviceManager.displayPanel("+a9+")");var bo;if(be){bo="displayPanel_"+be.id}else{bo="displayPanel_global"}if(be&&b.sessions){for(var bl in b.sessions){if(b.sessions[bl].hasOwnProperty("publishers")&&b.sessions[bl].publishers[be.id]){b.sessions[bl].publishers[be.id].panelId=bo}}}var bj=document.getElementById(bo);if(bj){aZ("DeviceManager.displayPanel :: there is already a device panel"+(be?" for this component":""));return this.panels[bo]}var bd=false;var bg=(ba)?aN(ba):{};var bm={};bm.allowscriptaccess="always";var bk=a2;var bi=a4;if("showCloseButton" in bg){if(bg.showCloseButton==false){bk=a1;bi=a3}}else{bg.showCloseButton=true}if(!("showMicSettings" in bg)){bg.showMicSettings=this.showMicSettings}if(!("showCamSettings" in bg)){bg.showCamSettings=this.showCamSettings}if(!a9){a9="devicePanel_replace_div";var bf=document.createElement("div");bf.setAttribute("id",a9);var a8=document.createElement("div");a8.setAttribute("id","devicePanel_parent_"+(be?be.id:"global"));a8.style.position="absolute";var bc=("pageYOffset" in aR&&typeof(aR.pageYOffset)=="number")?aR.pageYOffset:(document.body&&document.body.scrollTop)?document.body.scrollTop:(document.documentElement&&document.documentElement.scrollTop)?document.documentElement.scrollTop:0;var a7=("innerHeight" in aR)?aR.innerHeight:(document.documentElement&&document.documentElement.offsetHeight)?document.documentElement.offsetHeight:a4;bc+=(a7*0.2);a8.style.top=bc+"px";a8.style.left="50%";a8.style.width=bk+"px";a8.style.height=bi+"px";a8.style.marginLeft=(0-bk/2)+"px";a8.style.marginTop=(0-bi/4)+"px";if("zIndex" in bg){a8.style.zIndex=bg.zIndex;delete bg.zIndex}else{a8.style.zIndex=ad()+1}document.body.appendChild(a8);bd=true;a8.appendChild(bf)}var bh=document.getElementById(a9);if(!bh){var a6="DeviceManager.displayPanel :: replaceElementId does not exist in DOM.";aE(a6);throw new Error(a6)}var bn;if(this.panels[bo]){this.removePanel(this.panels[bo])}if(be){bn=new ar(bo,a9,be,bg)}else{bn=new ar(bo,a9,null,bg)}bn.parentCreated=bd;this.panels[bo]=bn;var bb={};bb.id=bn.id;bb.style="outline:none;";bg.devicePanelId=bo;if(bg.wmode){bm.wmode=bg.wmode;delete bg.wmode}else{bm.wmode="transparent"}V(E+"/v0.91.59/flash/f_devicewidget.swf?partnerId="+this.apiKey,a9,bk,bi,y,false,bg,bm,bb);return bn};this.removePanel=function(a7){var bd;if(!a7.hasOwnProperty("id")){bd="DeviceManager.removePanel :: invalid DevicePanel object";aE(bd);throw new Error(bd)}t("DeviceManager.removePanel("+a7.id+")");var bc=document.getElementById(a7.id);if(!bc){bd="DeviceManager.removePanel :: DevicePanel does not exist in DOM";aE(bd);throw new Error(bd)}var bf=bc.parentNode;var be=a7.parentCreated;for(var a9 in this.panels){if(this.panels[a9].hasOwnProperty("id")&&a9==a7.id){var a6=this.panels[a9];s(this.panels[a9]);delete this.panels[a9];var ba=function(){if(a6.publisher&&b.sessions){for(var bg in b.sessions){if(b.sessions[bg].hasOwnProperty("disconnect")&&b.sessions[bg].publishers[a6.publisher.id]){b.sessions[bg].publishers[a6.publisher.id].panelId=null}}}};setTimeout(ba,2)}}if(be){try{var bb=bf.parentNode;bb.removeChild(bf)}catch(a8){bd="Failed to clean up the parent of the device panel "+a8;aE(bd);throw new Error(bd)}}}}function aP(a6){var a1=1;var a5=1;this.recorders={};this.players={};this.apiKey=a6;var a2=320;var a3=271;var a4=31;this.displayRecorder=function(a7,bc,bb){if(!a7){errorMsg="RecorderManager.displayRecorder :: Token required to displayRecorder";aE(errorMsg);throw new Error(errorMsg)}var bf="recorder_"+a6+"_"+a1++;var ba=(bb)?aN(bb):{};ba.token=a7;ba.partnerId=a6;ba.recorderId=bf;if(ba.hasOwnProperty("style")){var be=ba.style.showControlBar;ba.style=encodeURIComponent(T(ba.style))}var a8={};a8.allowscriptaccess="always";if(ba.wmode){a8.wmode=ba.wmode;delete ba.wmode}else{a8.wmode="transparent"}var a9={};a9.id=bf;a9.style="outline:none;";if(!ba.width||isNaN(ba.width)){ba.width=a2}if(!ba.height||isNaN(ba.height)){ba.height=a3;if(be==false){ba.height-=a4}}var bd=false;if(!bc){bc="recorder_replace_"+a1;bd=true}aW.onLoad(function(){if(bd){var bg=document.createElement("div");bg.setAttribute("id",bc);document.body.appendChild(bg)}V(E+"/v0.91.59/flash/f_recordwidget.swf?partnerId="+a6,bc,ba.width,ba.height,y,false,ba,a8,a9)});this.recorders[bf]=new ao(bf,bc,ba);return this.recorders[bf]};this.removeRecorder=function(a7){if(!a7){var a8="Session.removeRecorder :: recorder cannot be null";aE(a8);throw new Error(a8)}t("Session.removeRecorder("+a7.id+")");s(a7);delete this.recorders[a7.id]};this.displayPlayer=function(bb,a7,be,bd){if(!bb){errorMsg="RecorderManager.displayPlayer :: Valid ArchiveId required";aE(errorMsg);throw new Error(errorMsg)}var a8="player_"+a6+"_"+a5++;var bc=(bd)?aN(bd):{};bc.token=a7;bc.archiveId=bb;bc.partnerId=a6;bc.playerId=a8;if(bc.hasOwnProperty("style")){var bg=bc.style.showControlBar;bc.style=encodeURIComponent(T(bc.style))}var a9={};a9.allowscriptaccess="always";if(bc.wmode){a9.wmode=bc.wmode;delete bc.wmode}else{a9.wmode="transparent"}var ba={};ba.id=a8;ba.style="outline:none;";if(!bc.width||isNaN(bc.width)){bc.width=a2}if(!bc.height||isNaN(bc.height)){bc.height=a3;if(bg==false){bc.height-=a4}}if(!bc.autoPlay){bc.autoPlay=false}var bf=false;if(!be){be="player_replace_"+a5;bf=true}aW.onLoad(function(){if(bf){var bh=document.createElement("div");bh.setAttribute("id",be);document.body.appendChild(bh)}V(E+"/v0.91.59/flash/f_playerwidget.swf?partnerId="+a6,be,bc.width,bc.height,y,false,bc,a9,ba)});this.players[a8]=new aK(a8,be,bc);return this.players[a8]};this.removePlayer=function(a7){if(!a7){var a8="Session.removePlayer :: player cannot be null";aE(a8);throw new Error(a8)}t("Session.removePlayer("+a7.id+")");s(a7);delete this.players[a7.id]}}function O(a6){this.superClass=aB;this.superClass();this.sessionId=a6;this.connection=null;this.subscribers={};this.publishers={};this.streams={};this.apiKey=null;this.capabilities=null;this.connected=false;this.connecting=false;var a4=1;var a1=264;var a2=198;var a3;var a5;this.connect=function(be,ba,a9){if(this.connecting){aZ("Session.connect :: Patience, please.");return}t("Session.connect("+be+")");var bb;if(!b.checkSystemRequirements()){bb="Session.connect :: Flash Player Version 10+ required";aE(bb);throw new Error(bb)}if(!be){bb="Session.connect :: API key required to connect";aE(bb);throw new Error(bb)}if(!ba){bb="Session.connect :: Token required to connect";aE(bb);throw new Error(bb)}if(this.connected){aZ("Session.connect :: Session already connected");return}if(ba=="moderator_token"||ba=="devtoken"){aZ('Session.connect :: "devtoken" and "moderator_token" are being deprecated soon. Please generate a token from http://www.tokbox.com/opentok/api/tools/generator')}this.connecting=true;var a7=(a9)?aN(a9):{};this.apiKey=be;this.token=ba;this.properties=a9;var bd={};bd.allowscriptaccess="always";if(a7.wmode){bd.wmode=a7.wmode;delete a7.wmode}if(a7.connectionData){a7.connectionData=encodeURIComponent(a7.connectionData)}a3="controller_"+this.sessionId;var a8={};a8.id=a3;a7.sessionId=this.sessionId;a7.token=this.token;var bc="replace_"+this.sessionId;aW.onLoad(function(){var bg=document.createElement("div");bg.setAttribute("id",bc);bg.style.display="none";document.body.appendChild(bg);var bf=new Date();a7.startTime=bf.getTime();swfobject.embedSWF(E+"/v0.91.59/flash/f_controllerwidget.swf?partnerId="+be,bc,1,1,y,false,a7,bd,a8)});if(aR.location.protocol=="file:"){setTimeout("TB.controllerLoadCheck()",8000)}};this.disconnect=function(){t("Session.disconnect()");if(!a3||this.connecting){aZ("Session.disconnect :: No connection to disconnect");return}var a7=document.getElementById(a3);if(a7){if(!isUnloading){try{a7.cleanupView()}catch(a9){var a8="Session.disconnect :: Failed to disconnect - "+a9;aE(a8);throw new Error(a8)}}}else{aZ("Session.disconnect :: No connection to disconnect")}};this.disconnectComponents=function(){t("Session.disconnectComponents() - disconnecting publishers and subscribers");for(var a9 in this.publishers){if(this.publishers[a9].hasOwnProperty("id")){try{this.unpublish(this.publishers[a9])}catch(a8){aZ("disconnectComponents:: Failed to unpublish publisher "+a9)}}}for(var a7 in this.subscribers){if(this.subscribers[a7].hasOwnProperty("id")){try{aq(this.subscribers[a7])}catch(a8){aZ("disconnectComponent:: Failed to disconnect subscriber "+a7)}}}};this.cleanup=function(){t("Session.cleanup()");for(var a9 in this.publishers){if(this.publishers[a9].hasOwnProperty("id")){try{this.unpublish(this.publishers[a9]);if(this.publishers[a9]._.DOMcomponent){this.publishers[a9].destroy()}}catch(a8){aZ("cleanup:: Failed to unpublish publisher "+a9)}}}for(var a7 in this.subscribers){if(this.subscribers[a7].hasOwnProperty("id")){this.unsubscribe(this.subscribers[a7])}}this.publishers={};this.subscribers={};a5=undefined};this.cleanupConnection=function(){t("Session.cleanupConnection() - removing controller");this.connection=null;if(!a3){aZ("Session.cleanup :: No connection to clean up");return}if(document.getElementById(a3)){setTimeout(function(){aD(a3,"TB.sessionDisconnected :: ");a3=null},0)}else{aZ("Session.cleanup :: No connection to clean up")}};this.publish=function(a9,a7){t("Session.publish("+a9+"):"+a7);var a8;if(!this.connection||!this.connection.connectionId){a8="Session.publish :: Connection required to publish";aE(a8);throw new Error(a8)}if(!a9||typeof(a9)==="string"){a9=b.initPublisher(this.apiKey,a9,k(a7,{sessionId:this.sessionId,connectionId:this.connection.connectionId,token:this.token}))}else{if(a9 instanceof S){if(a9.session&&"sessionId" in a9.session&&a9.session.sessionId===this.sessionId){aZ("Cannot publish "+a9.id+" again to "+this.sessionId+". Please call session.unpublish(publisher) first.");return a9}a9._.publishToSession(this.sessionId,this.connection.connectionId,this.token)}else{a8="Session.publish :: First parameter passed in is neither a string nor an instance of the Publisher";aE(a8);throw new Error(a8)}}this.publishers[a9.id]=a9;a9.session=this;return a9};this.unpublish=function(a7){if(!a7){throw new Error("Session.unpublish :: publisher parameter missing, publisher cannot be null")}else{if(!a7.hasOwnProperty("_")||!a7._.hasOwnProperty("unpublishFromSession")){throw new Error("Session.unpublish :: unknown publisher type, publisher must be created with TB.initPublisher()")}}if(a7.session&&a7.session.sessionId==this.sessionId){a7._.unpublishFromSession(this.sessionId)}else{if(!a7.session){a7.destroy()}else{if(a7.session.sessionId!=this.sessionId){aZ("The publisher "+a7.id+" is trying to unpublish from a session "+this.sessionId+" it is not attached to")}}}if(a7.panelId&&u&&u.panels[a7.panelId]){u.removePanel(u.panels[a7.panelId])}a7.session=null};this.forceUnpublish=function(bb){var ba,a9;if(bb&&typeof(bb)=="string"){ba=bb}else{if(bb&&typeof(bb)=="object"&&bb.hasOwnProperty("streamId")){ba=bb.streamId}else{a9="Session.forceUnpublish :: Invalid stream type";aE(a9);throw new Error(a9)}}t("Session.forceUnpublish("+ba+")");if(ba){try{var a7=document.getElementById(a3);a7.forceUnpublish(ba)}catch(a8){a9="Session.forceUnpublish :: "+a8;aE(a9);throw new Error(a9)}}else{a9="Session.forceUnpublish :: Stream does not exist.";aE(a9);throw new Error(a9)}};this.subscribe=function(bh,be,bd){var bc;if(!this.connection||!this.connection.connectionId){bc="Session.subscribe :: Connection required to subscribe";aE(bc);throw new Error(bc)}if(!bh){bc="Session.subscribe :: stream cannot be null";aE(bc);throw new Error(bc)}if(!bh.hasOwnProperty("streamId")){bc="Session.subscribe :: invalid stream object";aE(bc);throw new Error(bc)}t("Session.subscribe("+bh.streamId+")");if(!be){var a7=document.createElement("div");be="subscriber_replace_"+this.sessionId+"_"+a4;a7.setAttribute("id",be);document.body.appendChild(a7)}var a9=document.getElementById(be);if(!a9){bc="Session.subscribe :: replaceElementId does not exist in DOM.";aE(bc);throw new Error(bc)}var bb=(bd)?aN(bd):{};var bf="subscriber_"+bh.streamId+"_"+a4++;var bi=new af(bh,bf,be,bb);var a8={};a8.allowscriptaccess="always";if(bb.wmode){a8.wmode=bb.wmode;delete bb.wmode}else{a8.wmode="transparent"}if(bb.hasOwnProperty("style")){bb.style=encodeURIComponent(T(bb.style))}var ba={};ba.id=bi.id;ba.style="outline:none;";bb.subscriberId=bf;bb.connectionId=this.connection.connectionId;bb.sessionId=this.sessionId;bb.streamId=bh.streamId;bb.streamType=bh.type;bb.name=bh.name;bb.token=this.token;bb.simulateMobile=b.simulateMobile;bb.isPublishing=(Object.keys(this.publishers).length>0);if(!bh.hasAudio){bb.subscribeToAudio="false"}if(!bh.hasVideo){bb.subscribeToVideo="false"}bb.orientation=bh.orientation;bb.peerId=bh.peerId;if(!bb.width||isNaN(bb.width)){bb.width=a1}if(!bb.height||isNaN(bb.height)){bb.height=a2}this.subscribers[bi.id]=bi;var bg=new Date();bb.startTime=bg.getTime();V(E+"/v0.91.59/flash/f_subscribewidget.swf?partnerId="+this.apiKey,be,bb.width,bb.height,y,false,bb,a8,ba);return bi};this.unsubscribe=function(a7){if(!a7){var a8="Subscribe.unsubscribe :: subscriber cannot be null";aE(a8);throw new Error(a8)}t("Session.unsubscribe("+a7.id+")");s(a7);delete this.subscribers[a7.id]};this.signal=function(){t("Session.signal()");var a9;if(a3&&this.connection&&this.connection.connectionId){try{var a7=document.getElementById(a3);a7.sendSignal()}catch(a8){a9="Session.signal :: "+a8;aE(a9);throw new Error(a9)}}else{a9="Session.signal :: Connection required to signal.";aE(a9);throw new Error(a9)}};this.forceDisconnect=function(a8){if(a8){t("Session.forceDisconnect("+a8.connectionId+")")}var bb,ba;if(a8&&typeof(a8)=="string"){bb=a8}else{if(a8&&typeof(a8)=="object"&&a8.hasOwnProperty("connectionId")){bb=a8.connectionId}else{ba="Session.forceDisconnect :: Invalid connection type";aE(ba);throw new Error(ba)}}if(a3&&this.connection&&this.connection.connectionId){try{var a7=document.getElementById(a3);a7.forceDisconnect(bb)}catch(a9){ba="Session.forceDisconnect :: "+a9;aE(ba);throw new Error(ba)}}else{ba="Session.forceDisconnect :: Connection required to forceDisconnect.";aE(ba);throw new Error(ba)}};this.getSubscribersForStream=function(bb){var a7=null,a9;if(!bb){a9="Session.getSubscribersForStream :: stream cannot be null";aE(a9);throw new Error(a9)}else{var ba;if(typeof(bb)=="string"){ba=bb}else{if(typeof(bb)=="object"&&bb.hasOwnProperty("streamId")){ba=bb.streamId}else{a9="Session.getSubscribersForStream :: Invalid stream type";aE(a9);throw new Error(a9)}}a7=[];for(var a8 in this.subscribers){if(this.subscribers[a8].hasOwnProperty("stream")&&this.subscribers[a8].stream.streamId==ba){a7.push(this.subscribers[a8])}}}return a7};this.getPublisherForStream=function(bd){var bb;if(!bd){bb="Session.getPublisherForStream :: stream cannot be null";aE(bb);throw new Error(bb)}else{var bc;if(typeof(bd)=="string"){bc=bd}else{if(typeof(bd)=="object"&&bd.hasOwnProperty("streamId")){bc=bd.streamId}else{bb="Session.getPublisherForStream :: Invalid stream type";aE(bb);throw new Error(bb)}}for(var ba in this.publishers){var a9=this.publishers[ba];if(a9){try{var a7=a9._.callFlash("getStreamId");if(a7===bc){return this.publishers[ba]}}catch(a8){aZ("Failed to get streamId for publisher: "+this.publishers[ba].id);delete this.publishers[ba]}}else{aZ("Removing unknown publisher from stream");delete this.publishers[ba]}}}return null};this.createArchive=function(bb,a8,ba){t("Session.createArchive()");if(a3&&this.connection&&this.connection.connectionId){if(a8==b.PER_SESSION||a8==b.PER_STREAM){try{var a7=document.getElementById(a3);a7.createArchive(bb,a8,ba)}catch(a9){errorMsg="Session.createArchive :: "+a9;aE(errorMsg);throw new Error(errorMsg)}}else{errorMsg="Session.createArchive :: Invalid type specfied.";aE(errorMsg);throw new Error(errorMsg)}}else{errorMsg="Session.createArchive :: Connection required to create an archive.";aE(errorMsg);throw new Error(errorMsg)}};this.loadArchive=function(ba){t("Session.loadArchive()");var a9;if(a3&&this.connection&&this.connection.connectionId){try{var a7=document.getElementById(a3);a7.loadArchive(ba)}catch(a8){a9="Session.loadArchive :: "+a8;aE(a9);throw new Error(a9)}}else{a9="Session.loadArchive :: Connection required to load an archive.";aE(a9);throw new Error(a9)}};this.startRecording=function(a8){t("Session.startRecording()");a8=F[this.sessionId][a8.archiveId];var ba;if(!a8){ba="Session.startRecording :: Archive not created.";aE(ba);throw new Error(ba)}if(a8.type!=b.PER_SESSION){ba="Session.startRecording :: Trying to record per session on a "+a8.type+" archive";aE(ba);throw new Error(ba)}if(a3&&this.connection&&this.connection.connectionId){try{var a7=document.getElementById(a3);a7.startRecordingSession(a8.archiveId)}catch(a9){ba="Session.startRecording :: "+a9;aE(ba);throw new Error(ba)}}else{ba="Session.startRecording :: Connection required to record an archive.";aE(ba);throw new Error(ba)}};this.stopRecording=function(a8){t("Session.stopRecording()");a8=F[this.sessionId][a8.archiveId];var ba;if(!a8){ba="Session.stopRecording :: Archive not created.";aE(ba);throw new Error(ba)}if(a8.type!=b.PER_SESSION){ba="Session.stopRecording :: Trying to stop recording per session on a "+a8.type+" archive";aE(ba);throw new Error(ba)}if(a3&&this.connection&&this.connection.connectionId){try{var a7=document.getElementById(a3);a7.stopRecordingSession(a8.archiveId)}catch(a9){ba="Session.stopRecording :: "+a9;aE(ba);throw new Error(ba)}}else{ba="Session.stopRecording :: Connection required to record an archive.";aE(ba);throw new Error(ba)}};this.closeArchive=function(a8){t("Session.closeArchive()");var ba;if(a3&&this.connection&&this.connection.connectionId){try{var a7=document.getElementById(a3);a7.closeArchive(a8.archiveId)}catch(a9){ba="Session.closeArchive :: "+a9;aE(ba);throw new Error(ba)}}else{ba="Session.closeArchive :: Connection required to close an archive.";aE(ba);throw new Error(ba)}};this.getStateManager=function(){t("Session.getStateManager()");if(a5){return a5}else{if(a3&&this.connection&&this.connection.connectionId){a5=new R(a3);return a5}}var a7="Session.getStateManager :: Connection required to getState. Wait for sessionConnected before you getStateManager.";aE(a7);throw new Error(a7)}}function R(a2,a3){this.superClass=aB;this.superClass();var a1=20;this.archiveId=a3;this.set=function(a7,ba){var a6=a7,a9;if(a3){a9="StateManager.set :: not allowed on StateManager objects for archives.";aE(a9);throw new Error(a9)}if(typeof(a7)==="string"&&(typeof(ba)==="string"||ba==null)){a6={};a6[a7]=ba}else{if(typeof(a7)==="object"&&ba==null){if(Object.keys(a6).length>a1){aE("StateManager.set :: Maximum number of keys exceeded");this.dispatchEvent(new ap("changeFailed",405,"Maximum number of keys exceeded",a6));return}}else{a9="StateManager.set :: Invalid parameters passed. set() takes either two string parameters or one object of key value pairs.";aE(a9);throw new Error(a9)}}for(var a5 in a6){if(typeof(a6[a5])!=="string"&&a6[a5]!=null){aE("StateManager.set :: Invalid value "+a6[a5].toString()+" is not a string");this.dispatchEvent(new ap("changeFailed",403," Invalid value, value must be a string",a6));return}}if(a2){try{var a4=document.getElementById(a2);a4.setState(a6)}catch(a8){a9="StateManager.set :: "+a8;aE(a9);throw new Error(a9)}}};this.superAddEventListener=this.addEventListener;this.addEventListener=function(a8,bb){var a6=false;if(a8=="changed"){a6=null}else{if(a8.indexOf("changed:")===0){a6=a8.split(":")[1]}}if(a6!==false){if(a3){a6="TB_archive_"+a3+"_"}if(a2){try{var a5=document.getElementById(a2);var a4=a5.subscribeToKeyChange(a6);if(a4!=null){var a7=at(bb,new aj(a6?"changed:"+a6:"changed",a4));setTimeout(a7,1)}}catch(ba){var a9="StateManager.addEventListener :: "+ba;aE(a9);throw new Error(a9)}}}this.superAddEventListener(a8,bb)}}var Q=(function(){var a4="http://hlg.tokbox.com/prod/logging/ClientEvent",a6="opentok-logging-frame",a5={},a3={payloadType:"payload_type",streamId:"stream_id",sessiondId:"sessiond_id",connectionId:"connection_id",widgetType:"widget_type",widgetId:"widget_id"},a8=swfobject?swfobject.getFlashPlayerVersion():null,a1=a8?[a8.major,a8.minor,a8.release].join("."):"none",a2=function(bb){var ba=document.getElementById("opentok_analytics_logging");if(ba&&ba.parentNode){ba.parentNode.removeChild(ba)}ba=ai("form",{id:"opentok_analytics_logging",action:a4,method:"post",target:a6,style:"display:none;"});for(var a9 in bb){if(bb.hasOwnProperty(a9)){aX(ba,a9,bb[a9])}}document.body.appendChild(ba);return ba},a7=function(bc,bb,bd){if(!bd){return false}var a9=[bd,bb,bc].join("_"),ba=aM.get("exceptionLogging","messageLimitPerPartner",bd);if(ba===null||ba===undefined){return false}return(a5[a9]||0)<=ba};return{error:function(be,bc,bd,bb,ba){if(!ba){ba={}}var bg=ba.partnerId;if(aM.get("exceptionLogging","enabled",bg)!==true){return}if(a7(be,bc,bg)){b.log("ClientEvents.error has throttled an error of type "+bc+"."+be+" for partner "+(bg||"No Partner Id"));return}var a9=[bg,bc,be].join("_"),bf=this.escapePayload(B(bb,{message:bd,userAgent:navigator.userAgent,flashVersion:a1}));a5[a9]=typeof(a5[a9])!=="undefined"?a5[a9]+1:1;return this.log(B(ba,{action:bc+"."+be,payloadType:bf[0],payload:bf[1]}))},log:function(a9){var be=a9.partnerId;if(!a9){a9={}}var bb,bc=B({variation:"",guid:"",widgetId:"",sessionId:"",connectionId:"",streamId:"",partnerId:"",source:aR.location.href,section:"",build:""},a9),bd=function(){b.log("logged: {action: "+bc.action+", variation: "+bc.variation+", payload_type: "+bc.payload_type+", payload: "+bc.payload+"}")};for(var ba in a3){if(a3.hasOwnProperty(ba)&&bc[ba]){bc[a3[ba]]=bc[ba];delete bc[ba]}}bb=a2(bc);X(a6,bb,{removeFormOnComplete:true,onComplete:bd})},escapePayload:function(bc){var bb=[],a9=[];for(var ba in bc){if(bc.hasOwnProperty(ba)&&bc[ba]!==null&&bc[ba]!==undefined){bb.push(bc[ba]?bc[ba].toString().replace("|","\\|"):"");a9.push(ba.toString().replace("|","\\|"))}}return[a9.join("|"),bb.join("|")]}}})();function aC(){this.superClass=aB;this.superClass();var a2=false,a4=false,a1=this,a7=function(){return a4&&a2},a5=function(){if(a7()){a1.dispatchEvent(new L("envLoaded"))}},a8=function(){a4=true;aM.load();a5()},a3=function(){a2=true;aM.removeEventListener("dynamicConfigChanged",a3);aM.removeEventListener("dynamicConfigLoadFailed",a6);a5()},a6=function(){a3()};swfobject.addDomLoadEvent(a8);aM.addEventListener("dynamicConfigChanged",a3);aM.addEventListener("dynamicConfigLoadFailed",a6);this.onLoad=function(a9){if(a7()){a9();return}this.addEventListener("envLoaded",a9)}}function o(a1){if(!a1.success){aE("Failed to embed SWF "+a1.id);b.exceptionHandler("Failed to embed SWF "+a1.id,"Embed Failed",2001)}}function V(a4,a9,a6,a8,a1,a3,a2,a5,a7){if(!swfobject.hasFlashPlayerVersion(a1)){aE("Flash Player "+a1+" or higher required");b.exceptionHandler("Flash Player "+a1+" or higher required","Embed Failed",2001);return}swfobject.embedSWF(a4,a9,a6,a8,a1,a3,a2,a5,a7,o)}function at(a2,a1){return function(){if(a2!=null){a2(a1)}else{aE("Event handler is null")}}}function az(a1){aR.opentokdebug.debug("[FLASHDEBUG] opentok: "+a1)}function t(a1){aR.opentokdebug.debug("[DEBUG] opentok: "+a1)}function q(a1){aR.opentokdebug.info("[INFO] opentok: "+a1)}function aZ(a1){aR.opentokdebug.warn("[WARN] opentok: "+a1)}function aE(a1){aR.opentokdebug.error("[ERROR] opentok: "+a1)}function aL(a4,a2,a3){var a1=document.getElementById("opentok_console");if(a1){a1.innerHTML+=(a3+"
")}}function d(a1){if(ae.hasOwnProperty(a1)){return ae[a1]}else{return new P(a1,NaN,null)}}function C(a1,a4){var a3=a1.streamId;var a2=b.sessions[a4];if(a2){if(a2.streams[a3]){return a2.streams[a3]}else{var a5=new ac(a3,d(a1.connectionId),a1.name,a1.streamData,a1.type,a1.creationTime,a1.hasAudio,a1.hasVideo,a1.orientation,a4,a1.peerId,a1.quality);a2.streams[a3]=a5;return a5}}return null}function f(a2,a3){var a4=[];for(var a1=0;a1a6&&a9<=a4){a6=a9}}return a6}function Y(a4,a3){var a1,a5,a2=document.defaultView||aR;if(a4.nodeType==1){a1=a3.replace(/\-([a-z])/g,function(a7,a6){return a6.toUpperCase()});a5=a4.style[a1];if(!a5){if(a4.currentStyle){a5=a4.currentStyle[a1]}else{if(a2.getComputedStyle){a5=a2.getComputedStyle(a4,"").getPropertyValue(a3)}}}}return a5||""}function B(a1,a3){for(var a2 in a3){if(a3.hasOwnProperty(a2)){a1[a2]=a3[a2]}}return a1}function ai(a3,a2){var a4=document.createElement(a3);for(var a1 in a2){a4.setAttribute(a1,a2[a1])}return a4}function aX(a3,a2,a4){var a1=document.createElement("textarea");a1.setAttribute("name",a2);a1.value=a4;a1.style.display="none";a3.appendChild(a1)}function D(a6){var a3=[];var a5=new Array(48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70);var a7=45;var a4=a6||new Array(8,4,4,4,12);for(var a2=0;a21){a1=a1.substring(0,a1.length-2)+" }"}else{a1="{}"}return a1}function aN(a3){var a1=(a3 instanceof Array)?[]:{};for(var a2 in a3){if(a2=="clone"){continue}if(a3[a2]&&typeof a3[a2]=="object"){a1[a2]=aN(a3[a2])}else{a1[a2]=a3[a2]}}return a1}function k(a3,a2){var a1,a5={};if(typeof(a3)==="object"&&typeof(a2)==="object"){for(a1 in a3){if(a3.hasOwnProperty(a1)){a5[a1]=a3[a1];if(a1 in a2){a5[a1]=k(a3[a1],a2[a1])}}}for(a1 in a2){if(a2.hasOwnProperty(a1)){if(!(a1 in a3)){a5[a1]=a2[a1]}}}}else{a5=a2}if(arguments.length>2){var a4=Array.prototype.slice.call(arguments);a4=a4.slice(2);a4.unshift(a5);return k.apply(this,a4)}return a5}this.isUnloading=false;aR.onunload=function(){isUnloading=true;for(var a1 in b.sessions){if(b.sessions[a1].hasOwnProperty("disconnect")){b.sessionDisconnectedHandler=function(){};b.sessions[a1].disconnect();b.sessions[a1].cleanupConnection();b.sessions[a1].cleanup()}}};K=new aB();var p,h=document.location.hash;var b={sessions:{},LOG:5,DEBUG:4,INFO:3,WARN:2,ERROR:1,NONE:0,ACTIVE:"active",INACTIVE:"inactive",UNKNOWN:"unknown",PER_SESSION:"perSession",PER_STREAM:"perStream",EXCEPTION:"exception",ISSUE_REPORTED:"issueReported",SESSION_CONNECTED:"sessionConnected",SESSION_DISCONNECTED:"sessionDisconnected",STREAM_CREATED:"streamCreated",STREAM_DESTROYED:"streamDestroyed",CONNECTION_CREATED:"connectionCreated",CONNECTION_DESTROYED:"connectionDestroyed",SIGNAL_RECEIVED:"signalReceived",STREAM_PROPERTY_CHANGED:"streamPropertyChanged",MICROPHONE_LEVEL_CHANGED:"microphoneLevelChanged",ARCHIVE_CREATED:"archiveCreated",ARCHIVE_CLOSED:"archiveClosed",ARCHIVE_LOADED:"archiveLoaded",ARCHIVE_SAVED:"archiveSaved",SESSION_RECORDING_STARTED:"sessionRecordingStarted",SESSION_RECORDING_STOPPED:"sessionRecordingStopped",SESSION_RECORDING_IN_PROGRESS:"sessionRecordingInProgress",STREAM_RECORDING_IN_PROGRESS:"streamRecordingInProgress",SESSION_NOT_RECORDING:"sessionNotRecording",STREAM_NOT_RECORDING:"streamNotRecording",STREAM_RECORDING_STARTED:"streamRecordingStarted",STREAM_RECORDING_STOPPED:"streamRecordingStopped",PLAYBACK_STARTED:"playbackStarted",PLAYBACK_PAUSED:"playbackPaused",PLAYBACK_STOPPED:"playbackStopped",RECORDING_STARTED:"recordingStarted",RECORDING_STOPPED:"recordingStopped",RESIZE:"resize",SETTINGS_BUTTON_CLICK:"settingsButtonClick",DEVICE_INACTIVE:"deviceInactive",INVALID_DEVICE_NAME:"invalidDeviceName",ACCESS_ALLOWED:"accessAllowed",ACCESS_DENIED:"accessDenied",ECHO_CANCELLATION_MODE_CHANGED:"echoCancellationModeChanged",DEVICES_DETECTED:"devicesDetected",DEVICES_SELECTED:"devicesSelected",CLOSE_BUTTON_CLICK:"closeButtonClick",MICLEVEL:"microphoneActivityLevel",MICGAINCHANGED:"microphoneGainChanged",HAS_REQUIREMENTS:1,OLD_FLASH_VERSION:0,BASIC_STREAM:"basic",ARCHIVED:"archive",simulateMobile:false,setLogLevel:function(a1){aR.opentokdebug.setLevel(a1);if(a1==this.NONE){aR.opentokdebug.setCallback(null)}else{aR.opentokdebug.setCallback(aL,true,0);if(a1>=this.DEBUG&&!x){t("OpenTok JavaScript library v0.91.59");t("Release notes: http://www.tokbox.com/opentok/api/tools/js/documentation/overview/releaseNotes.html");t("Known issues: http://www.tokbox.com/opentok/api/tools/js/documentation/overview/releaseNotes.html#knownIssues");x=true}}t("TB.setLogLevel("+a1+")")},reportIssue:function(a2){if(aF){return}t("TB.reportIssue");var a3=D();if(a2&&a2.length>300){a2=a2.substr(0,300)}try{this.reportIssueHandler(a3,false,a2,true);aF=true}catch(a1){aF=false}},log:function(a1){aR.opentokdebug.log("[LOG] opentok: "+a1)},ClientEvents:Q,Config:{get:function(){return aM.get.apply(aM,arguments)}},initSession:function(a2){t("TB.initSession("+a2+")");if(a2==null||a2===""){var a1="TB.initSession :: sessionId cannot be null";aE(a1);throw new Error(a1)}if(!this.sessions.hasOwnProperty(a2)){this.sessions[a2]=new O(a2)}if(!an.hasOwnProperty(a2)){an[a2]=this.sessions[a2]}return this.sessions[a2]},initPublisher:function(a3,a1,a2){t("TB.initPublisher("+a1+")");if(!a2||typeof(a2)!=="object"){a2={}}a2.apiKey=a3;return new S("publisher_"+Z++,a1,a2)},initDeviceManager:function(a2){t("TB.initDeviceManager("+a2+")");if(!a2){var a1="TB.initDeviceManager :: apiKey cannot be null";aE(a1);throw new Error(a1)}if(!u){u=new aS(a2)}return u},initRecorderManager:function(a2){t("TB.initRecorderManager("+a2+")");if(!a2){var a1="TB.initRecorderManager :: apiKey cannot be null";aE(a1);throw new Error(a1)}if(!z){z=new aP(a2)}return z},addEventListener:function(a1,a2){t("TB.addEventListener("+a1+")");K.addEventListener(a1,a2)},removeEventListener:function(a1,a2){t("TB.removeEventListener("+a1+")");K.removeEventListener(a1,a2)},dispatchEvent:function(a1){t("TB.dispatchEvent()");a1.target=this;K.dispatchEvent(a1)},checkSystemRequirements:function(){t("TB.checkSystemRequirements()");var a1=y,a2=Array.prototype.slice.call(arguments),a4=["h264","aec"];for(var a3=0;a3-1){a1="11"}else{if(a2.indexOf("aec")>-1){a1="10.3"}}return swfobject.hasFlashPlayerVersion(a1)?this.HAS_REQUIREMENTS:this.OLD_FLASH_VERSION},upgradeSystemRequirements:function(){aW.onLoad(function(){var a1="_upgradeFlash";document.body.appendChild((function(){var a2=document.createElement("iframe");a2.id=a1;a2.style.position="absolute";a2.style.position="fixed";a2.style.height="100%";a2.style.width="100%";a2.style.top="0px";a2.style.left="0px";a2.style.right="0px";a2.style.bottom="0px";a2.src=E+"/v0.91.59/html/upgradeFlash.html#"+encodeURIComponent(document.location.href);return a2})());p&&clearInterval(p);p=setInterval(function(){var a3=document.location.hash,a2=/^#?\d+&/;if(a3!==h&&a2.test(a3)){h=a3;if(a3.replace(a2,"")==="close_window"){document.body.removeChild(document.getElementById(a1));document.location.hash=""}}},100)})},dynamicConfigLoadedHandler:function(a1){aM.replaceWith(a1)},_exceptionHandler:function(a1,a7,a5,a2){var a6=e[a5],a3=a2?aN(a2):{};aE("TB.exception :: title: "+a6+" ("+a5+") msg: "+a7);if(!a3.partnerId){if(u||z){a3.partnerId=(u||z).apiKey}if(!a3.partnerId){aE("TB._exceptionHandler called but could not find a partner ID.")}}try{Q.error(a5,"tb.exception",a6,{details:a7},a3);this.dispatchEvent(new I(this.EXCEPTION,a7,a6,a5,a1))}catch(a4){aE("TB.exception :: Failed to dispatch exception - "+a4.toString())}},handleJsException:function(a4,a3,a1){if(a1&&!a1.target){a1.target=null}var a2,a5=a1.session;if(a5){a2={sessionId:a5.sessionId,partnerId:a5.apiKey};if(a5.connected){a2.connectionId=a5.connection.connectionId}}this._exceptionHandler(a1.target,a4,a3,a2)},exceptionHandler:function(a2,a6,a1,a5,a3){var a4;if(a2){a4=an[a2];if(!a4){aZ("Could not find the component with component ID "+a2)}}this._exceptionHandler(a4,a6,a5,a3)},controllerLoadedHandler:function(){aI=true},controllerLoadCheck:function(a2){if(!aI){var a1="The connection timed out. Make sure that you have allowed this page in theFlash Player Global Settings Manager. Go to:";adobeURL="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html";prompt(a1,adobeURL)}},flashLogger:function(a1){az(a1)},sessionConnectedHandler:function(a8,a9,a1,a4,a2,bd,bb){t("TB.sessionConnected: "+a8+" - "+a9);var ba=this.sessions[a8],a3,a7;try{for(a7=0,len=a1.length;a7We\'re sorry to hear that something went wrong.

Please help us to debug your issue by providing a description of what happened.';ba.style.backgroundColor="#F7F7F7";ba.style.border="1px solid #CCC";ba.style.fontWeight="normal";ba.style.fontFamily="'Lucida Grande', 'Trebuchet MS', sans-serif";ba.style.color="#4c4c4c";ba.style.fontSize="13px";ba.appendChild(a3);document.body.appendChild(ba);J=true;closeForm=function(){document.body.removeChild(ba);J=false};bg.onclick=closeForm;a3.onsubmit=function(){aR.open("#","formresult","scrollbars=no,menubar=no,height=200,width=400,resizable=yes,toolbar=no,status=no");setTimeout(function(){closeForm()},1000)}}else{aX(a3,"description",bk);document.body.appendChild(a3);onHiddenPostSubmit=function(){if(a7){b.dispatchEvent(new ag(b.ISSUE_REPORTED,bm));clearTimeout(a4)}};var a4=setTimeout("hiddenPostTimeoutHandler()",7000);hiddenPostTimeoutHandler=function(){if(a7){b.dispatchEvent(new I(b.EXCEPTION,"The call to TB.reportIssue() did not succeed in sending the issue to the server.","Report Issue Failure",2010))}};X("formresult",a3,{removeFormOnComplete:true,onSubmit:onHiddenPostSubmit})}}if(a9){a3.onsubmit=function(){aR.open("#","formresult","scrollbars=no,menubar=no,height=200,width=400,resizable=yes,toolbar=no,status=no");setTimeout(function(){closeForm()},1000)};aX(a3,"showReport",true);document.body.appendChild(a3);a3.submit()}}};aR.TB=b;aW=new aC()})(window);
               if(!Object.keys) {
                  Object.keys = function(c) {
                     if(c !== Object(c)) {
                        throw new TypeError("Object.keys called on non-object")}
                     var a = [], 
                     b; 
                     for(b in c) {
                        if(Object.prototype.hasOwnProperty.call(c, 
                        b)) {
                           a.push(b)}
                        }
                     return a}
                  }
               if(!Array.prototype.indexOf) {
                  Array.prototype.indexOf = function(c) {
                     if(this === void 0 || this === null) {
                        throw new TypeError()}
                     var d = Object(this); 
                     var a = d.length >>> 0; 
                     if(a === 0) {
                        return - 1}
                     var e = 0; 
                     if(arguments.length > 0) {
                        e = Number(arguments[1]); 
                        if(e !== e) {
                           e = 0}
                        else {
                           if(e !== 0 && e !== Infinity && e !==- Infinity) {
                              e = (e > 0 ||- 1) * Math.floor(Math.abs(e))}
                           }
                        }
                     if(e >= a) {
                        return - 1}
                     var b = e >= 0 ? e : Math.max(a - Math.abs(e), 
                     0); 
                     for(; b < a; b++) {
                        if(b in d && d[b] === c) {
                           return b}
                        }
                     return - 1}
                  }; 

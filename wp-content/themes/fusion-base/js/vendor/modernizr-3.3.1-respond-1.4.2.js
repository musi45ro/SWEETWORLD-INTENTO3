/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-matchmedia-mediaqueries-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var c in T)
            if (T.hasOwnProperty(c)) {
                if (e = [], t = T[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), b.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = E.className,
            n = Modernizr._config.classPrefix || "";
        if (k && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), k ? E.className.baseVal = t : E.className = t)
    }

    function i(e, t) {
        if ("object" == typeof e)
            for (var n in e) z(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : k ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        var e = t.body;
        return e || (e = s(k ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, a) {
        var o, i, c, d, u = "modernizr",
            f = s("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) c = s("div"), c.id = a ? a[r] : u + (r + 1), f.appendChild(c);
        return o = s("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = d, E.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? f(a, n || t) : a);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(m(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + m(t[a]) + ":" + r + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function g(e, t, a, o) {
        function i() {
            u && (delete H.style, delete H.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var l = h(e, a);
            if (!r(l, "undefined")) return l
        }
        for (var u, f, p, m, g, v = ["modernizr", "tspan", "samp"]; !H.style && v.length;) u = !0, H.modElem = s(v.shift()), H.style = H.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (m = e[f], g = H.style[m], d(m, "-") && (m = c(m)), H.style[m] !== n) {
                if (o || r(a, "undefined")) return i(), "pfx" == t ? m : !0;
                try {
                    H.style[m] = a
                } catch (y) {}
                if (H.style[m] != g) return i(), "pfx" == t ? m : !0
            }
        return i(), !1
    }

    function v(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + q.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, a, o) : (s = (e + " " + P.join(i + " ") + i).split(" "), p(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var b = [],
        T = [],
        x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                T.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                T.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr, Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var w = !1;
    try {
        w = "WebSocket" in e && 2 === e.WebSocket.CLOSING
    } catch (S) {}
    Modernizr.addTest("websockets", w), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("websqldatabase", "openDatabase" in e), Modernizr.addTest("webworkers", "Worker" in e);
    var C = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = C;
    var E = t.documentElement,
        k = "svg" === E.nodeName.toLowerCase();
    k || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, d(t)
        }

        function o(e) {
            var t = y[e[g]];
            return t || (t = {}, v++, e[g] = v, y[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function d(e) {
            e || (e = t);
            var r = o(e);
            return !b.shivCSS || l || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
        }
        var l, u, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                l = !0, u = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = b, d(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t);
    var _ = "Moz O ms Webkit",
        P = x._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    x._domPrefixes = P;
    var z;
    ! function() {
        var e = {}.hasOwnProperty;
        z = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), x._l = {}, x.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, x._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        x.addTest = i
    });
    var N = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    x.hasEvent = N, Modernizr.addTest("hashchange", function() {
        return N("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }), Modernizr.addTest("audio", function() {
        var e = s("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof s("canvas").getContext("2d").fillText
    }), Modernizr.addTest("video", function() {
        var e = s("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("webgl", function() {
        var t = s("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = C.length - 1; o > a; a++) e = 0 === a ? "to " : "", r += t + C[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var i = s("a"),
            c = i.style;
        return c.cssText = r, ("" + c.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = s("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = s("a").style;
        return e.cssText = C.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var R = s("input"),
        $ = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        A = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) A[t[n]] = !!(t[n] in R);
        return A.list && (A.list = !(!s("datalist") || !e.HTMLDataListElement)), A
    }($);
    var M = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        O = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++) R.setAttribute("type", r = e[c]), o = "text" !== R.type && "style" in R, o && (R.value = s, R.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && R.style.WebkitAppearance !== n ? (E.appendChild(R), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(R, null).WebkitAppearance && 0 !== R.offsetHeight, E.removeChild(R)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? R.checkValidity && R.checkValidity() === !1 : R.value != s)), O[e[c]] = !!o;
        return O
    }(M), Modernizr.addTest("hsla", function() {
        var e = s("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", d(e.backgroundColor, "rgba") || d(e.backgroundColor, "hsla")
    });
    var j = "CSS" in e && "supports" in e.CSS,
        L = "supportsCSS" in e;
    Modernizr.addTest("supports", j || L);
    var B = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(B.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var F = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    x.mq = F, Modernizr.addTest("mediaqueries", F("only all"));
    var D = x.testStyles = u;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            D(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var I = function() {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            a = 533 > t && e.match(/android/gi);
        return n || a || r
    }();
    I ? Modernizr.addTest("fontface", !1) : D('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            a = r.sheet || r.styleSheet,
            o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), D('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    });
    var q = x._config.usePrefixes ? _.split(" ") : [];
    x._cssomPrefixes = q;
    var W = function(t) {
        var r, a = C.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = C[i],
                c = s.toUpperCase() + "_" + r;
            if (c in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = W;
    var V = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete V.elem
    });
    var H = {
        style: V.elem.style
    };
    Modernizr._q.unshift(function() {
        delete H.style
    });
    var U = x.testProp = function(e, t, r) {
        return g([e], n, t, r)
    };
    Modernizr.addTest("textshadow", U("textShadow", "1px 1px")), x.testAllProps = v;
    var G, J = x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? W(e) : (-1 != e.indexOf("-") && (e = c(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    try {
        G = J("indexedDB", e)
    } catch (S) {}
    Modernizr.addTest("indexeddb", !!G), G && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in G), Modernizr.addTest("matchmedia", !!J("matchMedia", e)), x.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", y("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = y("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)), Modernizr.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
        }), Modernizr.addTest("csstransforms3d", function() {
            var e = !!y("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in E.style)) {
                var n, r = "#modernizr{width:0;height:0}";
                Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", D(r + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), a(), o(b), delete x.addTest, delete x.addAsyncTest;
    for (var Z = 0; Z < Modernizr._q.length; Z++) Modernizr._q[Z]();
    e.Modernizr = Modernizr
}(window, document);

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

if (Modernizr.mq('only all') === false) {
    ! function(e) {
        "use strict";

        function t() {
            E(!0)
        }
        var a = {};
        e.respond = a, a.update = function() {};
        var n = [],
            r = function() {
                var t = !1;
                try {
                    t = new e.XMLHttpRequest
                } catch (a) {
                    t = new e.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function() {
                    return t
                }
            }(),
            s = function(e, t) {
                var a = r();
                a && (a.open("GET", e, !0), a.onreadystatechange = function() {
                    4 !== a.readyState || 200 !== a.status && 304 !== a.status || t(a.responseText)
                }, 4 !== a.readyState && a.send(null))
            },
            i = function(e) {
                return e.replace(a.regex.minmaxwh, "").match(a.regex.other)
            };
        if (a.ajax = s, a.queue = n, a.unsupportedmq = i, a.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                comments: /\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
                minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
                other: /\([^\)]*\)/g
            }, a.mediaQueriesSupported = e.matchMedia && null !== e.matchMedia("only all") && e.matchMedia("only all").matches, !a.mediaQueriesSupported) {
            var o, l, m, h = e.document,
                d = h.documentElement,
                u = [],
                c = [],
                p = [],
                f = {},
                g = 30,
                x = h.getElementsByTagName("head")[0] || d,
                y = h.getElementsByTagName("base")[0],
                v = x.getElementsByTagName("link"),
                w = function() {
                    var e, t = h.createElement("div"),
                        a = h.body,
                        n = d.style.fontSize,
                        r = a && a.style.fontSize,
                        s = !1;
                    return t.style.cssText = "position:absolute;font-size:1em;width:1em", a || (a = s = h.createElement("body"), a.style.background = "none"), d.style.fontSize = "100%", a.style.fontSize = "100%", a.appendChild(t), s && d.insertBefore(a, d.firstChild), e = t.offsetWidth, s ? d.removeChild(a) : a.removeChild(t), d.style.fontSize = n, r && (a.style.fontSize = r), e = m = parseFloat(e)
                },
                E = function(t) {
                    var a = "clientWidth",
                        n = d[a],
                        r = "CSS1Compat" === h.compatMode && n || h.body[a] || n,
                        s = {},
                        i = v[v.length - 1],
                        f = (new Date).getTime();
                    if (t && o && g > f - o) return e.clearTimeout(l), void(l = e.setTimeout(E, g));
                    o = f;
                    for (var y in u)
                        if (u.hasOwnProperty(y)) {
                            var S = u[y],
                                T = S.minw,
                                $ = S.maxw,
                                z = null === T,
                                b = null === $,
                                C = "em";
                            T && (T = parseFloat(T) * (T.indexOf(C) > -1 ? m || w() : 1)), $ && ($ = parseFloat($) * ($.indexOf(C) > -1 ? m || w() : 1)), S.hasquery && (z && b || !(z || r >= T) || !(b || $ >= r)) || (s[S.media] || (s[S.media] = []), s[S.media].push(c[S.rules]))
                        }
                    for (var R in p) p.hasOwnProperty(R) && p[R] && p[R].parentNode === x && x.removeChild(p[R]);
                    p.length = 0;
                    for (var O in s)
                        if (s.hasOwnProperty(O)) {
                            var M = h.createElement("style"),
                                k = s[O].join("\n");
                            M.type = "text/css", M.media = O, x.insertBefore(M, i.nextSibling), M.styleSheet ? M.styleSheet.cssText = k : M.appendChild(h.createTextNode(k)), p.push(M)
                        }
                },
                S = function(e, t, n) {
                    var r = e.replace(a.regex.comments, "").replace(a.regex.keyframes, "").match(a.regex.media),
                        s = r && r.length || 0;
                    t = t.substring(0, t.lastIndexOf("/"));
                    var o = function(e) {
                            return e.replace(a.regex.urls, "$1" + t + "$2$3")
                        },
                        l = !s && n;
                    t.length && (t += "/"), l && (s = 1);
                    for (var m = 0; s > m; m++) {
                        var h, d, p, f;
                        l ? (h = n, c.push(o(e))) : (h = r[m].match(a.regex.findStyles) && RegExp.$1, c.push(RegExp.$2 && o(RegExp.$2))), p = h.split(","), f = p.length;
                        for (var g = 0; f > g; g++) d = p[g], i(d) || u.push({
                            media: d.split("(")[0].match(a.regex.only) && RegExp.$2 || "all",
                            rules: c.length - 1,
                            hasquery: d.indexOf("(") > -1,
                            minw: d.match(a.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: d.match(a.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    E()
                },
                T = function() {
                    if (n.length) {
                        var t = n.shift();
                        s(t.href, function(a) {
                            S(a, t.href, t.media), f[t.href] = !0, e.setTimeout(function() {
                                T()
                            }, 0)
                        })
                    }
                },
                $ = function() {
                    for (var t = 0; t < v.length; t++) {
                        var a = v[t],
                            r = a.href,
                            s = a.media,
                            i = a.rel && "stylesheet" === a.rel.toLowerCase();
                        r && i && !f[r] && (a.styleSheet && a.styleSheet.rawCssText ? (S(a.styleSheet.rawCssText, r, s), f[r] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(r) && !y || r.replace(RegExp.$1, "").split("/")[0] === e.location.host) && ("//" === r.substring(0, 2) && (r = e.location.protocol + r), n.push({
                            href: r,
                            media: s
                        })))
                    }
                    T()
                };
            $(), a.update = $, a.getEmValue = w, e.addEventListener ? e.addEventListener("resize", t, !1) : e.attachEvent && e.attachEvent("onresize", t)
        }
    }(this);

}
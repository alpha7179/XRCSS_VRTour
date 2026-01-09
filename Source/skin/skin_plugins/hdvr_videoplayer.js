var krpanoplugin = function () {

    function S(a) { 
      return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase()) 
    } 
    
    function d(a, b, d, r, f) { 3 == a || 4 == a || 5 == a ? c[b] = d : c.registerattribute(b, d, r, f); J.push(b) } 
    
    function k(a, c, b, d) { a.addEventListener(c, b, d); K.push({ obj: a, eventname: c, callback: b, capture: d }) } 
    
    function D(a) { var c, b = K.length, d; for (c = 0; c < b; c++)if (d = K[c], null == a || d.obj === a) d.obj.removeEventListener(d.eventname, d.callback, d.capture), K.splice(c, 1), c-- , b-- } 
    
    function oa() {
  
      function a(a) {
        p = !0; 0 < n && (q.seek(n),
          n = -1)
      } 
      
      function d(a) { f && e && (T(e.src + " - loading failed"), e = null) } 
      
      function h(a) { 0 == y && (z(), q.paused = u = !0, F(null), 0 == c.iscomplete && (c.iscomplete = !0, g.call(c.onvideocomplete, c))) } 
      
      function r() {
        if (f && b && !(2 > b.readyState)) {
          var a = g.timertick, d = 0, v = Number(b.duration); isNaN(v) || 0 >= v || (e ? (u && !e.paused ? e.pause() : !u && e.paused && e.play(), d = e.currentTime) : u ? d = w : (0 == A && (A = a), d = w + G * Math.max(0, (a - A) / 1E3)), d >= v - .02 ? (d = v, y ? (w = 0, A = a + .1, e && (e.currentTime = 0)) : (z(), q.paused = u = !0, F(null), 0 == c.iscomplete && (c.iscomplete = !0,
            g.call(c.onvideocomplete, c)))) : c.iscomplete = !1, B = d, .01 < Math.abs(b.currentTime - B) && (b.currentTime = Number(B.toFixed(2))), b.autoplay = !0)
        }
      } 
      
      var q = this, u = q.paused = !0, m = null, e = null, l = null, p = !1, n = -1, A = 0, w = 0; 
      
      (function () {
        if (!0 !== window.krpanoHideiPhoneMediaControlsStyle) {
        window.krpanoHideiPhoneMediaControlsStyle = !0; var a = document.createElement("style"); a.type = "text/css"; a.innerHTML = "*::-webkit-media-controls-panel{display: none!important;-webkit-appearance:none;} *::--webkit-media-controls-play-button{display: none!important;-webkit-appearance:none;} *::-webkit-media-controls-start-playback-button{display: none!important;-webkit-appearance:none;}";
          document.getElementsByTagName("head")[0].appendChild(a)
        }
      })(); 
      
      q.start = function () { c.iPhoneMode = !0; b.autoplay = !0; b.pause(); b.style.webkitMediaControls = !1; var f = Z(c.videourl, ["m4a", "mp3"]), f = g.parsePath(f); n = -1; f ? (null == e && (l ? (e = l, l = null) : e = document.createElement("audio")), D(e), k(e, "canplay", a, !0), k(e, "error", d, !0), k(e, "ended", h, !0), e.loop = y, p = e.autoplay = !1, e.src = f, e.load(), e.pause()) : e && (e.src && (e.pause(), l = e), e = null); A = w = 0; u = c.pausedonstart; q.paused = u; m = setInterval(r, 1E3 / 60); b.currentTime = 0 }; q.play_audio =
        function () { e && e.play() }; q.play = function () { 1 == u && (u = q.paused = !1, c.iscomplete ? (c.iscomplete = !1, w = 0, e && (e.currentTime = 0)) : w = b.currentTime, A = g.timertick + .1, e && e.play(), F(null)) }; q.pause = function () { 0 == u && (e && e.pause(), w = b.currentTime, u = q.paused = !0, F(null)) }; q.seek = function (a) { e ? p ? (e.currentTime = a, n = -1) : n = a : (n = -1, A = 0, w = a) }; q.remove = function () { m && (clearInterval(m), m = null); e && (e.src && (e.pause(), l = e), e = null) }; q.setplaybackrate = function (a) { if (e) try { e.playbackRate = a } catch (c) { } }; q.setloop = function (a) {
          e && (e.loop =
            a)
        }; q.need_touchstart_play = function () { return null != e && e.paused }; q.try_touchstart_play = function () { return e ? (e.play(), 0 == e.paused) : !0 }
    } function T(a) { var b = c ? c.onerror : null; null != b && "" != b && "null" != ("" + b).toLowerCase() ? (c.videoerror = a, g.call(b, c)) : g.trace(3, a + "!") } function aa(a) { a = a.style; a.pointerEvents = "none"; a.position = "absolute"; a.width = "100%"; a.height = "100%"; a.left = 0; a.top = 0; a.opacity = 1; a.backgroundColor = "transparent"; a[H] = "translateZ(0)"; a[H + "Origin"] = "0 0" } function ba() {
      var a = null, a = document.createElement("video");
      if (!a || !a.play) return null; aa(a); return a
    } function U(a) { c && (a = document.visibilityState, !0 === document.hidden || "hidden" == a || "prerender" == a || "unloaded" == a ? 0 == c.ispaused && c.autopause && 0 == c.isautopaused && (c.isautopaused = !0, z()) : c.autoresume && c.isautopaused && (c.isautopaused = !1, L())) } function ca(a, b) { c.registercontentsize(a, b); c.forceresize = !0; c.videowidth = a; c.videoheight = b; c.havevideosize = !0; c.isvideoready = !0; if (c.onvideoreadyCB) c.onvideoreadyCB(); g.call(c.onvideoready, c) } function Z(a, b) {
      C = null; var d = ("" +
        a).split("|"); if (1 < d.length || b) {
          var f = p; b && (f = b); var h = f.length, k = d.length, g, e, l = []; for (g = 0; g < k; g++)if (e = d[g]) { var m = e; if (0 != e.indexOf("rtmp:")) { var n = e.indexOf("?"); 0 < n && (e = e.slice(0, n)); n = e.indexOf("#"); 0 < n && (e = e.slice(0, n)); n = e.lastIndexOf("."); if (1 < n) for (n = ("" + e.slice(n + 1)).toLowerCase(), e = 0; e < h; e++)if (n == f[e]) { if (b) return m; l.push({ type: n, inorder: g, url: m, used: !1 }); break } } } if (b) return null; if (0 < l.length) return "" != c.preferredformat && l.sort(function (a, b) {
            var d = a.type, e = b.type, f = "m3u" == d || "m3u8" ==
              d ? 0 : "mp4" == d || "m4v" == d ? 1 : "webm" == d ? 2 : 3, v = "m3u" == e || "m3u8" == e ? 0 : "mp4" == e || "m4v" == e ? 1 : "webm" == e ? 2 : 3, g = ("" + c.preferredformat).toLowerCase(); "" != g && (d == g && (f = -1), e == g && (v = -1)); return f > v ? 1 : f < v ? -1 : a.inorder > b.inorder ? 1 : a.inorder < b.inorder ? -1 : 0
          }), C = l, da()
        } return a
    } function da() { if (C) { var a, b; b = C.length; for (a = 0; a < b; a++)if (0 == C[a].used) return C[a].used = !0, C[a].url } return null } function V(a, b) {
      var c = !0; if (!m.android || !m.chrome) {
        var d = b.indexOf("://"); if (0 < d) {
          var f = document.domain, d = b.slice(d + 3, b.indexOf("/",
            d + 3)); f == d && (c = !1)
        }
      } c && ((c = g.security.cors) && "" != c || (c = "anonymous"), a.crossOrigin = c)
    } function ea(a, d, l, r) {
    c.videourl = void 0 === a || null == a || "" == a || "null" == ("" + a).toLowerCase() ? null : a; c.posterurl = void 0 === d || null == d || "" == d || "null" == ("" + d).toLowerCase() ? null : d; c.pausedonstart = S(l); r = Number(r); if (isNaN(r) || 0 > r) r = 0; B = r; I = 0 < r ? r : -1; a = Z(c.videourl); x = a = g.parsePath(a); c.isvideoready = !1; c.havevideosize = !1; c.isautopaused = !1; c.isvideoready = !1; c.isseeking = 0 < I && null == f; c.iscomplete = !1; c.ispaused = !0; c.loadedbytes =
      0; c.totalbytes = 0; c.totaltime = 0; c.videoerror = ""; null != a && (b && b.src ? f ? f.pause() : b.pause() : null == b && (b = ba(), c.videoDOM = b), c.posterurl && (c.pausedonstart || m.mobile || m.tablet) ? (null == h && (h = document.createElement("img"), k(h, "error", pa, !1), k(h, "load", qa, !1)), a = c.posterurl, W = a = g.parsePath(a), V(h, a), h.src = a) : fa())
    } function pa(a) { b && T(W + " - loading failed") } function qa(a) { if (b) { a = h.naturalWidth; var d = h.naturalHeight; aa(h); c.sprite && c.sprite.appendChild(h); c.posterDOM = h; ca(a, d); fa() } } function fa() {
    b && b.src ||
      !ga || 0 != X || (b.src = "data:", 0 == E && (E = !0, c.touchworkarounds && (k(document.body, "touchstart", ha, !0), k(document.body, "touchend", ha, !0)), c.needtouch = !0, g.call(c.onneedtouch, c))); D(b); t && (clearInterval(t), t = null); f && f.remove(); k(b, "loadedmetadata", l, !1); k(b, "loadeddata", l, !1); k(b, "canplay", l, !1); k(b, "canplaythrough", l, !1); k(b, "play", l, !1); k(b, "pause", l, !1); k(b, "playing", l, !1); k(b, "seeking", l, !1); k(b, "waiting", l, !1); k(b, "seeked", l, !1); k(b, "stalled", l, !1); k(b, "suspend", l, !1); k(b, "ended", l, !1); k(b, "timeupdate",
        l, !1); k(b, "emptied", l, !1); k(b, "progress", M, !1); m.ios && (t = setInterval(M, 500)); k(b, "error", ra, !1); b.loop = c.loop; b.autoplay = c.pausedonstart ? !1 : !0; b.preload = c.html5preload; b.controls = c.html5controls; 
        b.setAttribute("playsinline", ""); 
        b.setAttribute("x5-video-player-type", "h5"); 
        b.setAttribute("x5-video-player-fullscreen", "false");
        b.setAttribute("webkit-playsinline", ""); ia(N); ja(O); ka(G); la(P); V(b, x); b.src = x; b.load(); f ? f.start() : c.pausedonstart ? b.pause() : (b.play(), Q())
        console.log(b)
    } function ra(a) {
      if (b) {
        a = null; a = b.error ? b.error.code : 0; if (3 <= a) { var c = da(); if (c) { x = a = g.parsePath(c); V(b, x); b.src = x; b.load(); return } } switch (a) {
          case 1: a =
            "video loading aborted"; break; case 2: a = "network loading error"; break; case 3: a = "video decoding failed (corrupted data or unsupported codec)"; break; case 4: a = "loading video failed"; break; default: a = "unknown error"
        }a && T(x + " - " + a)
      }
    } function M(a) { null != t && a && "progress" == a.type && (clearInterval(t), t = null); if (b && b.buffered) { var d, f; d = b.buffered.length; f = b.duration; if (0 < f && (c.totaltime = f, 0 < d)) { var g = 0; for (a = 0; a < d; a++) { var h = b.buffered.end(a); h > g && (g = h) } c.loadedbytes = 1048576 * g | 0; c.totalbytes = 1048576 * f | 0 } } } function l(a) {
      if (b) switch (a.type) {
        case "loadedmetadata": case "loadeddata": 0 <
          I && (R(I), I = -1); M(); a = b.videoWidth; var d = b.videoHeight; 0 == c.havevideosize && 0 < a && 0 < d && ca(a, d); break; case "canplay": case "canplaythrough": M(); null == f ? 0 == c.pausedonstart && b.paused && (b.play(), Q()) : 0 == c.pausedonstart && f.need_touchstart_play() && (f.play_audio(), Q()); break; case "seeking": case "seeked": c.isseeking = f ? !1 : "seeking" == a.type; case "play": case "pause": case "playing": case "waiting": case "stalled": case "suspend": case "ended": case "timeupdate": F(a)
      }
    } function F(a) {
      a = !1; h && 2 <= b.readyState && (0 == b.paused ||
        f && 0 == f.paused) && (a = !0, m.chromemobile && 0 == b.currentTime && (a = !1)); a && (D(h), h.parentNode && h.parentNode.removeChild(h), h = W = c.posterDOM = null); c.isvideoready && (a = f ? f : b, c.ispaused != a.paused && (0 == a.paused ? (c.ispaused = !1, g.call(c.onvideoplay, c)) : (c.ispaused = !0, g.call(c.onvideopaused, c))), null == f && c.iscomplete != b.ended && (1 == b.ended ? (z(), 0 == c.iscomplete && (c.iscomplete = !0, g.call(c.onvideocomplete, c))) : c.iscomplete = !1))
    } function Q() {
    m.touch && (b.paused && !f || f && f.need_touchstart_play()) && 0 == E && (E = !0, c.touchworkarounds &&
      (k(document.body, "touchstart", ma, !0), k(document.body, "touchend", ma, !0)), c.needtouch = !0, g.call(c.onneedtouch, c))
    } function ha(a) { b && (b.src = x, Y()) } function Y() { E && (E = !1, D(document.body), c.needtouch = !1, g.call(c.ongottouch, c)) } function ma(a) { b && (a = !1, f ? a = f.try_touchstart_play() : (b.play(), a = 0 == b.paused), a && Y()) } function sa(a) { y = S(a); b && (b.loop = y); f && f.setloop(a) } function ta() { return y } function ua(a) { R(a) } function va() { if (b) { var a = Number(b.currentTime); if (!isNaN(a)) return a } return B } function ia(a) {
      a = Number(a);
      isNaN(a) ? a = 1 : 0 > a ? a = 0 : 1 < a && (a = 1); N = a; b && (b.volume = a)
    } function wa() { return N } function ja(a) { O = a; b && (b.muted = a) } function xa() { return O } function ka(a) { a = Number(a); if (isNaN(a) || 0 == a) a = 1; G = a; if (b) try { b.playbackRate = a } catch (c) { } f && f.setplaybackrate(a) } function ya() { return G } function la(a) { P = a = S(a); b && m.safari && (b.airplay = b["x-webkit-airplay"] = a ? "allow" : "disallow") } function za() { return P } function L() { f ? f.play() : b && b.play(); c.pausedonstart = !1; Q() } function z() { f ? f.pause() : b && b.pause(); c.pausedonstart = !0; Y() }
    function Aa() { b && (0 == b.paused || f && 0 == f.paused ? z() : L()) } function R(a) { if (b && b.src) { var c = 0, c = 0 < ("" + a).indexOf("%") && 0 < b.duration ? parseFloat(a) / 100 * b.duration : Number(a); isNaN(c) || (f ? f.seek(c) : b.currentTime = c) } } function Ba() { R(0); z() } function na() {
      b && (b.pause(), f && f.remove(), D(b), h && h.parentNode && h.parentNode.removeChild(h), b && b.parentNode && b.parentNode.removeChild(b), c.videoDOM = null, c.posterDOM = null, c.iPhoneMode = !1, b = h = null, c.videourl = null, c.isvideoready = !1, c.ispaused = !0, c.iscomplete = !1, c.isseeking =
        !1, c.isautopaused = !1, c.havevideosize = !1, c.videowidth = 0, c.videoheight = 0, c.loadedbytes = 0, c.totalbytes = 0, c.totaltime = 0, c.videoerror = "", B = 0)
    } this.name = "Videoplayer"; this.version = "1.19-pr8"; this.build = "2016-09-30"; var g = null, m = null, c = null, b = null, h = null, W = null, x = null, C = null, p = [], H = "transform", f = null, I = -1, E = !1, t = null, X = !1, ga = !1, y = !1, N = 1, O = !1, G = 1, P = !1, B = 0, J = [], K = []; this.registerplugin = function (a, l, t) {
      g = a; m = g.device; c = t; "1.19" > g.version || "2015-03-01" > g.build ? g.trace(3, "Videoplayer plugin - too old krpano version (min. 1.19)") :
        (H = g.browser.css.transform, (b = ba()) ? (void 0 !== b.canPlayType ? (b.canPlayType("video/mp4").match(/maybe|probably/i) && (p.push("mp4"), p.push("m4v"), p.push("mov"), p.push("3gp")), b.canPlayType("video/webm").match(/maybe|probably/i) && p.push("webm"), b.canPlayType("video/ogg").match(/maybe|probably/i) && (p.push("ogg"), p.push("ogv")), b.canPlayType("video/hls").match(/maybe|probably/i) && (p.push("m3u"), p.push("m3u8"))) : (p.push("mp4"), p.push("mov")), d(0, "videourl", null), d(0, "altvideourl", null), d(0, "posterurl", null),
          d(0, "panovideo", !1), d(0, "use_as_videopano", !1), d(0, "pausedonstart", !1), d(0, "autopause", !0), d(0, "autoresume", !1), d(0, "preferredformat", ""), d(0, "iphoneworkarounds", !0), d(0, "touchworkarounds", !0), d(0, "html5controls", !1), d(0, "html5preload", "auto"), d(1, "loop", y, sa, ta), d(1, "time", B, ua, va), d(1, "volume", N, ia, wa), d(1, "muted", O, ja, xa), d(1, "playbackrate", G, ka, ya), d(1, "airplay", P, la, za), d(2, "onvideoready", null), d(2, "onvideoplay", null), d(2, "onvideopaused", null), d(2, "onvideocomplete", null), d(2, "onerror", null),
          d(2, "onneedtouch", null), d(2, "ongottouch", null), d(3, "playvideo", ea), d(3, "play", L), d(3, "resume", L), d(3, "pause", z), d(3, "togglepause", Aa), d(3, "seek", R), d(3, "stop", Ba), d(3, "closevideo", na), d(4, "isvideoready", !1), d(4, "iswaiting", !1), d(4, "ispaused", !0), d(4, "iscomplete", !1), d(4, "isseeking", !1), d(4, "isautopaused", !1), d(4, "havevideosize", !1), d(4, "needtouch", !1), d(4, "videowidth", 0), d(4, "videoheight", 0), d(4, "loadedbytes", 0), d(4, "totalbytes", 0), d(4, "totaltime", 0), d(4, "videoerror", ""), d(5, "videoDOM", b), d(5, "posterDOM",
            h), d(5, "iPhoneMode", !1), k(window, "pagehide", U, !1), k(window, "pageshow", U, !1), k(document, "visibilitychange", U, !1), ga = m.ios && m.iphone && 10 <= m.iosversion, X = window.matchMedia("(-webkit-video-playable-inline)").matches, m.iphone && 1 == c.iphoneworkarounds && 0 == X && (f = new oa), c.sprite && (0 == c.use_as_videopano && 0 == c.panovideo || !m.panovideosupport) && !0 !== c.renderToBitmap && c.sprite.appendChild(b), ea(c.altvideourl ? c.altvideourl : c.videourl, c.posterurl, c.pausedonstart, c.time)) : g.trace(2, "Videoplayer plugin - HTML5 video is not supported by this browser!"))
    };
    this.unloadplugin = function () { na(); var a, b = J.length; for (a = 0; a < b; a++)delete c[J[a]]; J = null; D(null); t && (clearInterval(t), t = null); g = m = c = null }; this.onresize = function (a, d) {
      if (b && c && !0 !== c.renderToBitmap) {
        var f = b.videoWidth, k = b.videoHeight; if (0 < f && 0 < k) {
          var l = f + "px", m = k + "px", p = "hotspot" == c._type && c.distorted ? 1 : g.stagescale, f = "translateZ(0) scale(" + a * p / f + "," + d * p / k + ")"; h && (l != h.style.width && (h.style.width = l), m != h.style.width && (h.style.height = m), h.style[H] = f); l != b.style.width && (b.style.width = l); m != b.style.height &&
            (b.style.height = m); b.style[H] = f
        }
      } return !1
    }
  };
  
  krpanoplugin();
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["whepvideo.component"] = t())
    : (e["whepvideo.component"] = t());
})(self, () =>
  (() => {
    var e = {
        248: function (e, t) {
          !(function (e) {
            "use strict";
            function t(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                  (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  r.push.apply(r, i);
              }
              return r;
            }
            function r(e) {
              for (var r = 1; r < arguments.length; r++) {
                var i = null != arguments[r] ? arguments[r] : {};
                r % 2
                  ? t(Object(i), !0).forEach(function (t) {
                      s(e, t, i[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(i)
                    )
                  : t(Object(i)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(i, t)
                      );
                    });
              }
              return e;
            }
            function i(e) {
              return (
                (i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      }),
                i(e)
              );
            }
            function n(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function a(e, t) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            function o(e, t, r) {
              return (
                t && a(e.prototype, t),
                r && a(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
              );
            }
            function s(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            function c(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && u(e, t);
            }
            function l(e) {
              return (
                (l = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                l(e)
              );
            }
            function u(e, t) {
              return (
                (u =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
                u(e, t)
              );
            }
            function d(e, t) {
              if (t && ("object" == typeof t || "function" == typeof t))
                return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            }
            function h(e) {
              var t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var r,
                  i = l(e);
                if (t) {
                  var n = l(this).constructor;
                  r = Reflect.construct(i, arguments, n);
                } else r = i.apply(this, arguments);
                return d(this, r);
              };
            }
            function p(e) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return f(e);
                })(e) ||
                (function (e) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(e) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? f(e, t)
                        : void 0
                    );
                  }
                })(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function f(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
              return i;
            }
            function v() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                id: e.id || null,
                adId: e.adId || null,
                sequence: e.sequence || null,
                apiFramework: e.apiFramework || null,
                universalAdIds: [],
                creativeExtensions: [],
              };
            }
            var m = [
              "ADCATEGORIES",
              "ADCOUNT",
              "ADPLAYHEAD",
              "ADSERVINGID",
              "ADTYPE",
              "APIFRAMEWORKS",
              "APPBUNDLE",
              "ASSETURI",
              "BLOCKEDADCATEGORIES",
              "BREAKMAXADLENGTH",
              "BREAKMAXADS",
              "BREAKMAXDURATION",
              "BREAKMINADLENGTH",
              "BREAKMINDURATION",
              "BREAKPOSITION",
              "CLICKPOS",
              "CLICKTYPE",
              "CLIENTUA",
              "CONTENTID",
              "CONTENTPLAYHEAD",
              "CONTENTURI",
              "DEVICEIP",
              "DEVICEUA",
              "DOMAIN",
              "EXTENSIONS",
              "GDPRCONSENT",
              "IFA",
              "IFATYPE",
              "INVENTORYSTATE",
              "LATLONG",
              "LIMITADTRACKING",
              "MEDIAMIME",
              "MEDIAPLAYHEAD",
              "OMIDPARTNER",
              "PAGEURL",
              "PLACEMENTTYPE",
              "PLAYERCAPABILITIES",
              "PLAYERSIZE",
              "PLAYERSTATE",
              "PODSEQUENCE",
              "REGULATIONS",
              "SERVERSIDE",
              "SERVERUA",
              "TRANSACTIONID",
              "UNIVERSALADID",
              "VASTVERSIONS",
              "VERIFICATIONVENDORS",
            ];
            function g(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = [],
                n = A(e);
              for (var a in (!t.ERRORCODE ||
                r.isCustomCode ||
                /^[0-9]{3}$/.test(t.ERRORCODE) ||
                (t.ERRORCODE = 900),
              (t.CACHEBUSTING = R(Math.round(1e8 * Math.random()))),
              (t.TIMESTAMP = new Date().toISOString()),
              (t.RANDOM = t.random = t.CACHEBUSTING),
              t))
                t[a] = k(t[a]);
              for (var o in n) {
                var s = n[o];
                "string" == typeof s && i.push(y(s, t));
              }
              return i;
            }
            function y(e, t) {
              var r = (e = T(e, t)).match(/[^[\]]+(?=])/g);
              if (!r) return e;
              var i = r.filter(function (e) {
                return m.indexOf(e) > -1;
              });
              return 0 === i.length
                ? e
                : T(
                    e,
                    (i = i.reduce(function (e, t) {
                      return (e[t] = -1), e;
                    }, {}))
                  );
            }
            function T(e, t) {
              var r = e;
              for (var i in t) {
                var n = t[i];
                r = r.replace(
                  new RegExp("(?:\\[|%%)(".concat(i, ")(?:\\]|%%)"), "g"),
                  n
                );
              }
              return r;
            }
            function A(e) {
              return Array.isArray(e)
                ? e.map(function (e) {
                    return e && e.hasOwnProperty("url") ? e.url : e;
                  })
                : e;
            }
            function b(e, t) {
              for (var r = 0; r < t.length; r++) if (E(t[r], e)) return !0;
              return !1;
            }
            function E(e, t) {
              if (e && t) {
                var r = Object.getOwnPropertyNames(e),
                  i = Object.getOwnPropertyNames(t);
                return (
                  r.length === i.length && e.id === t.id && e.url === t.url
                );
              }
              return !1;
            }
            function k(e) {
              return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                return "%".concat(e.charCodeAt(0).toString(16));
              });
            }
            function R(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8;
              return e.toString().padStart(t, "0");
            }
            var w = {
              track: function (e, t, r) {
                g(e, t, r).forEach(function (e) {
                  "undefined" != typeof window &&
                    null !== window &&
                    (new Image().src = e);
                });
              },
              resolveURLTemplates: g,
              extractURLsFromTemplates: A,
              containsTemplateObject: b,
              isTemplateObjectEqual: E,
              encodeURIComponentRFC3986: k,
              replaceUrlMacros: y,
              isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
              },
              flatten: function e(t) {
                return t.reduce(function (t, r) {
                  return t.concat(Array.isArray(r) ? e(r) : r);
                }, []);
              },
              joinArrayOfUniqueTemplateObjs: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  r = Array.isArray(e) ? e : [],
                  i = Array.isArray(t) ? t : [];
                return r.concat(i).reduce(function (e, t) {
                  return b(t, e) || e.push(t), e;
                }, []);
              },
              isValidTimeValue: function (e) {
                return Number.isFinite(e) && e >= -2;
              },
              addLeadingZeros: R,
            };
            function C(e) {
              return -1 !== ["true", "TRUE", "True", "1"].indexOf(e);
            }
            var L = {
              childByName: function (e, t) {
                var r = e.childNodes;
                for (var i in r) {
                  var n = r[i];
                  if (n.nodeName === t) return n;
                }
              },
              childrenByName: function (e, t) {
                var r = [],
                  i = e.childNodes;
                for (var n in i) {
                  var a = i[n];
                  a.nodeName === t && r.push(a);
                }
                return r;
              },
              resolveVastAdTagURI: function (e, t) {
                if (!t) return e;
                if (0 === e.indexOf("//")) {
                  var r = location.protocol;
                  return "".concat(r).concat(e);
                }
                if (-1 === e.indexOf("://")) {
                  var i = t.slice(0, t.lastIndexOf("/"));
                  return "".concat(i, "/").concat(e);
                }
                return e;
              },
              parseBoolean: C,
              parseNodeText: function (e) {
                return e && (e.textContent || e.text || "").trim();
              },
              copyNodeAttribute: function (e, t, r) {
                var i = t.getAttribute(e);
                i && r.setAttribute(e, i);
              },
              parseAttributes: function (e) {
                for (var t = e.attributes, r = {}, i = 0; i < t.length; i++)
                  r[t[i].nodeName] = t[i].nodeValue;
                return r;
              },
              parseDuration: function (e) {
                if (null == e) return -1;
                if (w.isNumeric(e)) return parseInt(e);
                var t = e.split(":");
                if (3 !== t.length) return -1;
                var r = t[2].split("."),
                  i = parseInt(r[0]);
                2 === r.length && (i += parseFloat("0.".concat(r[1])));
                var n = parseInt(60 * t[1]),
                  a = parseInt(60 * t[0] * 60);
                return isNaN(a) || isNaN(n) || isNaN(i) || n > 3600 || i > 60
                  ? -1
                  : a + n + i;
              },
              splitVAST: function (e) {
                var t = [],
                  r = null;
                return (
                  e.forEach(function (i, n) {
                    if (
                      (i.sequence && (i.sequence = parseInt(i.sequence, 10)),
                      i.sequence > 1)
                    ) {
                      var a = e[n - 1];
                      if (a && a.sequence === i.sequence - 1)
                        return void (r && r.push(i));
                      delete i.sequence;
                    }
                    (r = [i]), t.push(r);
                  }),
                  t
                );
              },
              assignAttributes: function (e, t) {
                if (e)
                  for (var r in e) {
                    var i = e[r];
                    if (
                      i.nodeName &&
                      i.nodeValue &&
                      t.hasOwnProperty(i.nodeName)
                    ) {
                      var n = i.nodeValue;
                      "boolean" == typeof t[i.nodeName] && (n = C(n)),
                        (t[i.nodeName] = n);
                    }
                  }
              },
              mergeWrapperAdData: function (e, t) {
                (e.errorURLTemplates = t.errorURLTemplates.concat(
                  e.errorURLTemplates
                )),
                  (e.impressionURLTemplates = t.impressionURLTemplates.concat(
                    e.impressionURLTemplates
                  )),
                  (e.extensions = t.extensions.concat(e.extensions)),
                  t.viewableImpression.length > 0 &&
                    (e.viewableImpression = [].concat(
                      p(e.viewableImpression),
                      p(t.viewableImpression)
                    )),
                  (e.followAdditionalWrappers = t.followAdditionalWrappers),
                  (e.allowMultipleAds = t.allowMultipleAds),
                  (e.fallbackOnNoAd = t.fallbackOnNoAd);
                var r = (t.creatives || []).filter(function (e) {
                    return e && "companion" === e.type;
                  }),
                  i = r.reduce(function (e, t) {
                    return (
                      (t.variations || []).forEach(function (t) {
                        (t.companionClickTrackingURLTemplates || []).forEach(
                          function (t) {
                            w.containsTemplateObject(t, e) || e.push(t);
                          }
                        );
                      }),
                      e
                    );
                  }, []);
                e.creatives = r.concat(e.creatives);
                var n =
                    t.videoClickTrackingURLTemplates &&
                    t.videoClickTrackingURLTemplates.length,
                  a =
                    t.videoCustomClickURLTemplates &&
                    t.videoCustomClickURLTemplates.length;
                e.creatives.forEach(function (e) {
                  if (t.trackingEvents && t.trackingEvents[e.type])
                    for (var r in t.trackingEvents[e.type]) {
                      var o = t.trackingEvents[e.type][r];
                      Array.isArray(e.trackingEvents[r]) ||
                        (e.trackingEvents[r] = []),
                        (e.trackingEvents[r] = e.trackingEvents[r].concat(o));
                    }
                  "linear" === e.type &&
                    (n &&
                      (e.videoClickTrackingURLTemplates =
                        e.videoClickTrackingURLTemplates.concat(
                          t.videoClickTrackingURLTemplates
                        )),
                    a &&
                      (e.videoCustomClickURLTemplates =
                        e.videoCustomClickURLTemplates.concat(
                          t.videoCustomClickURLTemplates
                        )),
                    !t.videoClickThroughURLTemplate ||
                      (null !== e.videoClickThroughURLTemplate &&
                        void 0 !== e.videoClickThroughURLTemplate) ||
                      (e.videoClickThroughURLTemplate =
                        t.videoClickThroughURLTemplate)),
                    "companion" === e.type &&
                      i.length &&
                      (e.variations || []).forEach(function (e) {
                        e.companionClickTrackingURLTemplates =
                          w.joinArrayOfUniqueTemplateObjs(
                            e.companionClickTrackingURLTemplates,
                            i
                          );
                      });
                }),
                  t.adVerifications &&
                    (e.adVerifications = e.adVerifications.concat(
                      t.adVerifications
                    )),
                  t.blockedAdCategories &&
                    (e.blockedAdCategories = e.blockedAdCategories.concat(
                      t.blockedAdCategories
                    ));
              },
            };
            function S(e, t) {
              var r = (function () {
                var e = v(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                );
                return {
                  id: e.id,
                  adId: e.adId,
                  sequence: e.sequence,
                  apiFramework: e.apiFramework,
                  type: "companion",
                  required: null,
                  variations: [],
                };
              })(t);
              return (
                (r.required = e.getAttribute("required") || null),
                (r.variations = L.childrenByName(e, "Companion").map(function (
                  e
                ) {
                  var t = (function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      id: e.id || null,
                      adType: "companionAd",
                      width: e.width || 0,
                      height: e.height || 0,
                      assetWidth: e.assetWidth || null,
                      assetHeight: e.assetHeight || null,
                      expandedWidth: e.expandedWidth || null,
                      expandedHeight: e.expandedHeight || null,
                      apiFramework: e.apiFramework || null,
                      adSlotID: e.adSlotID || null,
                      pxratio: e.pxratio || "1",
                      renderingMode: e.renderingMode || "default",
                      staticResources: [],
                      htmlResources: [],
                      iframeResources: [],
                      adParameters: null,
                      xmlEncoded: null,
                      altText: null,
                      companionClickThroughURLTemplate: null,
                      companionClickTrackingURLTemplates: [],
                      trackingEvents: {},
                    };
                  })(L.parseAttributes(e));
                  (t.htmlResources = L.childrenByName(e, "HTMLResource").reduce(
                    function (e, t) {
                      var r = L.parseNodeText(t);
                      return r ? e.concat(r) : e;
                    },
                    []
                  )),
                    (t.iframeResources = L.childrenByName(
                      e,
                      "IFrameResource"
                    ).reduce(function (e, t) {
                      var r = L.parseNodeText(t);
                      return r ? e.concat(r) : e;
                    }, [])),
                    (t.staticResources = L.childrenByName(
                      e,
                      "StaticResource"
                    ).reduce(function (e, t) {
                      var r = L.parseNodeText(t);
                      return r
                        ? e.concat({
                            url: r,
                            creativeType:
                              t.getAttribute("creativeType") || null,
                          })
                        : e;
                    }, [])),
                    (t.altText =
                      L.parseNodeText(L.childByName(e, "AltText")) || null);
                  var r = L.childByName(e, "TrackingEvents");
                  r &&
                    L.childrenByName(r, "Tracking").forEach(function (e) {
                      var r = e.getAttribute("event"),
                        i = L.parseNodeText(e);
                      r &&
                        i &&
                        (Array.isArray(t.trackingEvents[r]) ||
                          (t.trackingEvents[r] = []),
                        t.trackingEvents[r].push(i));
                    }),
                    (t.companionClickTrackingURLTemplates = L.childrenByName(
                      e,
                      "CompanionClickTracking"
                    ).map(function (e) {
                      return {
                        id: e.getAttribute("id") || null,
                        url: L.parseNodeText(e),
                      };
                    })),
                    (t.companionClickThroughURLTemplate =
                      L.parseNodeText(
                        L.childByName(e, "CompanionClickThrough")
                      ) || null);
                  var i = L.childByName(e, "AdParameters");
                  return (
                    i &&
                      ((t.adParameters = L.parseNodeText(i)),
                      (t.xmlEncoded = i.getAttribute("xmlEncoded") || null)),
                    t
                  );
                })),
                r
              );
            }
            function N(e) {
              return "linear" === e.type;
            }
            function P(e, t) {
              var r,
                i = (function () {
                  var e = v(
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  );
                  return {
                    id: e.id,
                    adId: e.adId,
                    sequence: e.sequence,
                    apiFramework: e.apiFramework,
                    type: "linear",
                    duration: 0,
                    skipDelay: null,
                    mediaFiles: [],
                    mezzanine: null,
                    interactiveCreativeFile: null,
                    closedCaptionFiles: [],
                    videoClickThroughURLTemplate: null,
                    videoClickTrackingURLTemplates: [],
                    videoCustomClickURLTemplates: [],
                    adParameters: null,
                    icons: [],
                    trackingEvents: {},
                  };
                })(t);
              i.duration = L.parseDuration(
                L.parseNodeText(L.childByName(e, "Duration"))
              );
              var n = e.getAttribute("skipoffset");
              if (null == n) i.skipDelay = null;
              else if ("%" === n.charAt(n.length - 1) && -1 !== i.duration) {
                var a = parseInt(n, 10);
                i.skipDelay = i.duration * (a / 100);
              } else i.skipDelay = L.parseDuration(n);
              var o = L.childByName(e, "VideoClicks");
              if (o) {
                var s = L.childByName(o, "ClickThrough");
                (i.videoClickThroughURLTemplate = s
                  ? {
                      id: s.getAttribute("id") || null,
                      url: L.parseNodeText(s),
                    }
                  : null),
                  L.childrenByName(o, "ClickTracking").forEach(function (e) {
                    i.videoClickTrackingURLTemplates.push({
                      id: e.getAttribute("id") || null,
                      url: L.parseNodeText(e),
                    });
                  }),
                  L.childrenByName(o, "CustomClick").forEach(function (e) {
                    i.videoCustomClickURLTemplates.push({
                      id: e.getAttribute("id") || null,
                      url: L.parseNodeText(e),
                    });
                  });
              }
              var c = L.childByName(e, "AdParameters");
              c && (i.adParameters = L.parseNodeText(c)),
                L.childrenByName(e, "TrackingEvents").forEach(function (e) {
                  L.childrenByName(e, "Tracking").forEach(function (e) {
                    var t = e.getAttribute("event"),
                      n = L.parseNodeText(e);
                    if (t && n) {
                      if ("progress" === t) {
                        if (!(r = e.getAttribute("offset"))) return;
                        t =
                          "%" === r.charAt(r.length - 1)
                            ? "progress-".concat(r)
                            : "progress-".concat(
                                Math.round(L.parseDuration(r))
                              );
                      }
                      Array.isArray(i.trackingEvents[t]) ||
                        (i.trackingEvents[t] = []),
                        i.trackingEvents[t].push(n);
                    }
                  });
                }),
                L.childrenByName(e, "MediaFiles").forEach(function (e) {
                  L.childrenByName(e, "MediaFile").forEach(function (e) {
                    i.mediaFiles.push(
                      (function (e) {
                        var t = {
                          id: null,
                          fileURL: null,
                          fileSize: 0,
                          deliveryType: "progressive",
                          mimeType: null,
                          mediaType: null,
                          codec: null,
                          bitrate: 0,
                          minBitrate: 0,
                          maxBitrate: 0,
                          width: 0,
                          height: 0,
                          apiFramework: null,
                          scalable: null,
                          maintainAspectRatio: null,
                        };
                        (t.id = e.getAttribute("id")),
                          (t.fileURL = L.parseNodeText(e)),
                          (t.deliveryType = e.getAttribute("delivery")),
                          (t.codec = e.getAttribute("codec")),
                          (t.mimeType = e.getAttribute("type")),
                          (t.mediaType = e.getAttribute("mediaType") || "2D"),
                          (t.apiFramework = e.getAttribute("apiFramework")),
                          (t.fileSize = parseInt(
                            e.getAttribute("fileSize") || 0
                          )),
                          (t.bitrate = parseInt(
                            e.getAttribute("bitrate") || 0
                          )),
                          (t.minBitrate = parseInt(
                            e.getAttribute("minBitrate") || 0
                          )),
                          (t.maxBitrate = parseInt(
                            e.getAttribute("maxBitrate") || 0
                          )),
                          (t.width = parseInt(e.getAttribute("width") || 0)),
                          (t.height = parseInt(e.getAttribute("height") || 0));
                        var r = e.getAttribute("scalable");
                        r &&
                          "string" == typeof r &&
                          (t.scalable = L.parseBoolean(r));
                        var i = e.getAttribute("maintainAspectRatio");
                        return (
                          i &&
                            "string" == typeof i &&
                            (t.maintainAspectRatio = L.parseBoolean(i)),
                          t
                        );
                      })(e)
                    );
                  });
                  var t = L.childByName(e, "InteractiveCreativeFile");
                  t &&
                    (i.interactiveCreativeFile = (function (e) {
                      var t = (function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        return {
                          type: e.type || null,
                          apiFramework: e.apiFramework || null,
                          variableDuration: L.parseBoolean(e.variableDuration),
                          fileURL: null,
                        };
                      })(L.parseAttributes(e));
                      return (t.fileURL = L.parseNodeText(e)), t;
                    })(t));
                  var r = L.childByName(e, "ClosedCaptionFiles");
                  r &&
                    L.childrenByName(r, "ClosedCaptionFile").forEach(function (
                      e
                    ) {
                      var t = (function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        return {
                          type: e.type || null,
                          language: e.language || null,
                          fileURL: null,
                        };
                      })(L.parseAttributes(e));
                      (t.fileURL = L.parseNodeText(e)),
                        i.closedCaptionFiles.push(t);
                    });
                  var n,
                    a,
                    o,
                    s = L.childByName(e, "Mezzanine"),
                    c =
                      ((n = s),
                      (a = {}),
                      (o = !1),
                      ["delivery", "type", "width", "height"].forEach(function (
                        e
                      ) {
                        n && n.getAttribute(e)
                          ? (a[e] = n.getAttribute(e))
                          : (o = !0);
                      }),
                      o ? null : a);
                  if (c) {
                    var l = {
                      id: null,
                      fileURL: null,
                      delivery: null,
                      codec: null,
                      type: null,
                      width: 0,
                      height: 0,
                      fileSize: 0,
                      mediaType: "2D",
                    };
                    (l.id = s.getAttribute("id")),
                      (l.fileURL = L.parseNodeText(s)),
                      (l.delivery = c.delivery),
                      (l.codec = s.getAttribute("codec")),
                      (l.type = c.type),
                      (l.width = parseInt(c.width, 10)),
                      (l.height = parseInt(c.height, 10)),
                      (l.fileSize = parseInt(s.getAttribute("fileSize"), 10)),
                      (l.mediaType = s.getAttribute("mediaType") || "2D"),
                      (i.mezzanine = l);
                  }
                });
              var l = L.childByName(e, "Icons");
              return (
                l &&
                  L.childrenByName(l, "Icon").forEach(function (e) {
                    i.icons.push(
                      (function (e) {
                        var t = {
                          program: null,
                          height: 0,
                          width: 0,
                          xPosition: 0,
                          yPosition: 0,
                          apiFramework: null,
                          offset: null,
                          duration: 0,
                          type: null,
                          staticResource: null,
                          htmlResource: null,
                          iframeResource: null,
                          pxratio: "1",
                          iconClickThroughURLTemplate: null,
                          iconClickTrackingURLTemplates: [],
                          iconViewTrackingURLTemplate: null,
                        };
                        (t.program = e.getAttribute("program")),
                          (t.height = parseInt(e.getAttribute("height") || 0)),
                          (t.width = parseInt(e.getAttribute("width") || 0)),
                          (t.xPosition = (function (e) {
                            return -1 !== ["left", "right"].indexOf(e)
                              ? e
                              : parseInt(e || 0);
                          })(e.getAttribute("xPosition"))),
                          (t.yPosition = (function (e) {
                            return -1 !== ["top", "bottom"].indexOf(e)
                              ? e
                              : parseInt(e || 0);
                          })(e.getAttribute("yPosition"))),
                          (t.apiFramework = e.getAttribute("apiFramework")),
                          (t.pxratio = e.getAttribute("pxratio") || "1"),
                          (t.offset = L.parseDuration(
                            e.getAttribute("offset")
                          )),
                          (t.duration = L.parseDuration(
                            e.getAttribute("duration")
                          )),
                          L.childrenByName(e, "HTMLResource").forEach(function (
                            e
                          ) {
                            (t.type =
                              e.getAttribute("creativeType") || "text/html"),
                              (t.htmlResource = L.parseNodeText(e));
                          }),
                          L.childrenByName(e, "IFrameResource").forEach(
                            function (e) {
                              (t.type = e.getAttribute("creativeType") || 0),
                                (t.iframeResource = L.parseNodeText(e));
                            }
                          ),
                          L.childrenByName(e, "StaticResource").forEach(
                            function (e) {
                              (t.type = e.getAttribute("creativeType") || 0),
                                (t.staticResource = L.parseNodeText(e));
                            }
                          );
                        var r = L.childByName(e, "IconClicks");
                        return (
                          r &&
                            ((t.iconClickThroughURLTemplate = L.parseNodeText(
                              L.childByName(r, "IconClickThrough")
                            )),
                            L.childrenByName(r, "IconClickTracking").forEach(
                              function (e) {
                                t.iconClickTrackingURLTemplates.push({
                                  id: e.getAttribute("id") || null,
                                  url: L.parseNodeText(e),
                                });
                              }
                            )),
                          (t.iconViewTrackingURLTemplate = L.parseNodeText(
                            L.childByName(e, "IconViewTracking")
                          )),
                          t
                        );
                      })(e)
                    );
                  }),
                i
              );
            }
            function I(e, t) {
              var r = (function () {
                var e = v(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                );
                return {
                  id: e.id,
                  adId: e.adId,
                  sequence: e.sequence,
                  apiFramework: e.apiFramework,
                  type: "nonlinear",
                  variations: [],
                  trackingEvents: {},
                };
              })(t);
              return (
                L.childrenByName(e, "TrackingEvents").forEach(function (e) {
                  var t, i;
                  L.childrenByName(e, "Tracking").forEach(function (e) {
                    (t = e.getAttribute("event")),
                      (i = L.parseNodeText(e)),
                      t &&
                        i &&
                        (Array.isArray(r.trackingEvents[t]) ||
                          (r.trackingEvents[t] = []),
                        r.trackingEvents[t].push(i));
                  });
                }),
                L.childrenByName(e, "NonLinear").forEach(function (e) {
                  var t = {
                    id: null,
                    width: 0,
                    height: 0,
                    expandedWidth: 0,
                    expandedHeight: 0,
                    scalable: !0,
                    maintainAspectRatio: !0,
                    minSuggestedDuration: 0,
                    apiFramework: "static",
                    adType: "nonLinearAd",
                    type: null,
                    staticResource: null,
                    htmlResource: null,
                    iframeResource: null,
                    nonlinearClickThroughURLTemplate: null,
                    nonlinearClickTrackingURLTemplates: [],
                    adParameters: null,
                  };
                  (t.id = e.getAttribute("id") || null),
                    (t.width = e.getAttribute("width")),
                    (t.height = e.getAttribute("height")),
                    (t.expandedWidth = e.getAttribute("expandedWidth")),
                    (t.expandedHeight = e.getAttribute("expandedHeight")),
                    (t.scalable = L.parseBoolean(e.getAttribute("scalable"))),
                    (t.maintainAspectRatio = L.parseBoolean(
                      e.getAttribute("maintainAspectRatio")
                    )),
                    (t.minSuggestedDuration = L.parseDuration(
                      e.getAttribute("minSuggestedDuration")
                    )),
                    (t.apiFramework = e.getAttribute("apiFramework")),
                    L.childrenByName(e, "HTMLResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || "text/html"),
                        (t.htmlResource = L.parseNodeText(e));
                    }),
                    L.childrenByName(e, "IFrameResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || 0),
                        (t.iframeResource = L.parseNodeText(e));
                    }),
                    L.childrenByName(e, "StaticResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || 0),
                        (t.staticResource = L.parseNodeText(e));
                    });
                  var i = L.childByName(e, "AdParameters");
                  i && (t.adParameters = L.parseNodeText(i)),
                    (t.nonlinearClickThroughURLTemplate = L.parseNodeText(
                      L.childByName(e, "NonLinearClickThrough")
                    )),
                    L.childrenByName(e, "NonLinearClickTracking").forEach(
                      function (e) {
                        t.nonlinearClickTrackingURLTemplates.push({
                          id: e.getAttribute("id") || null,
                          url: L.parseNodeText(e),
                        });
                      }
                    ),
                    r.variations.push(t);
                }),
                r
              );
            }
            function O(e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  var r = U(e);
                  r && t.push(r);
                }),
                t
              );
            }
            function U(e) {
              if ("#comment" === e.nodeName) return null;
              var t,
                r = { name: null, value: null, attributes: {}, children: [] },
                i = e.attributes,
                n = e.childNodes;
              if (((r.name = e.nodeName), e.attributes))
                for (var a in i)
                  if (i.hasOwnProperty(a)) {
                    var o = i[a];
                    o.nodeName &&
                      o.nodeValue &&
                      (r.attributes[o.nodeName] = o.nodeValue);
                  }
              for (var s in n)
                if (n.hasOwnProperty(s)) {
                  var c = U(n[s]);
                  c && r.children.push(c);
                }
              if (
                0 === r.children.length ||
                (1 === r.children.length &&
                  ["#cdata-section", "#text"].indexOf(r.children[0].name) >= 0)
              ) {
                var l = L.parseNodeText(e);
                "" !== l && (r.value = l), (r.children = []);
              }
              return null === (t = r).value &&
                0 === Object.keys(t.attributes).length &&
                0 === t.children.length
                ? null
                : r;
            }
            function x(e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  var r,
                    i = {
                      id: e.getAttribute("id") || null,
                      adId: V(e),
                      sequence: e.getAttribute("sequence") || null,
                      apiFramework: e.getAttribute("apiFramework") || null,
                    },
                    n = [];
                  L.childrenByName(e, "UniversalAdId").forEach(function (e) {
                    var t = {
                      idRegistry: e.getAttribute("idRegistry") || "unknown",
                      value: L.parseNodeText(e),
                    };
                    n.push(t);
                  });
                  var a = L.childByName(e, "CreativeExtensions");
                  for (var o in (a &&
                    (r = O(L.childrenByName(a, "CreativeExtension"))),
                  e.childNodes)) {
                    var s = e.childNodes[o],
                      c = void 0;
                    switch (s.nodeName) {
                      case "Linear":
                        c = P(s, i);
                        break;
                      case "NonLinearAds":
                        c = I(s, i);
                        break;
                      case "CompanionAds":
                        c = S(s, i);
                    }
                    c &&
                      (n && (c.universalAdIds = n),
                      r && (c.creativeExtensions = r),
                      t.push(c));
                  }
                }),
                t
              );
            }
            function V(e) {
              return (
                e.getAttribute("AdID") ||
                e.getAttribute("adID") ||
                e.getAttribute("adId") ||
                null
              );
            }
            var D = {
              Wrapper: { subElements: ["VASTAdTagURI", "Impression"] },
              BlockedAdCategories: { attributes: ["authority"] },
              InLine: {
                subElements: [
                  "AdSystem",
                  "AdTitle",
                  "Impression",
                  "AdServingId",
                  "Creatives",
                ],
              },
              Category: { attributes: ["authority"] },
              Pricing: { attributes: ["model", "currency"] },
              Verification: {
                oneOfinLineResources: [
                  "JavaScriptResource",
                  "ExecutableResource",
                ],
                attributes: ["vendor"],
              },
              UniversalAdId: { attributes: ["idRegistry"] },
              JavaScriptResource: {
                attributes: ["apiFramework", "browserOptional"],
              },
              ExecutableResource: { attributes: ["apiFramework", "type"] },
              Tracking: { attributes: ["event"] },
              Creatives: { subElements: ["Creative"] },
              Creative: { subElements: ["UniversalAdId"] },
              Linear: { subElements: ["MediaFiles", "Duration"] },
              MediaFiles: { subElements: ["MediaFile"] },
              MediaFile: {
                attributes: ["delivery", "type", "width", "height"],
              },
              Mezzanine: {
                attributes: ["delivery", "type", "width", "height"],
              },
              NonLinear: {
                oneOfinLineResources: [
                  "StaticResource",
                  "IFrameResource",
                  "HTMLResource",
                ],
                attributes: ["width", "height"],
              },
              Companion: {
                oneOfinLineResources: [
                  "StaticResource",
                  "IFrameResource",
                  "HTMLResource",
                ],
                attributes: ["width", "height"],
              },
              StaticResource: { attributes: ["creativeType"] },
              Icons: { subElements: ["Icon"] },
              Icon: {
                oneOfinLineResources: [
                  "StaticResource",
                  "IFrameResource",
                  "HTMLResource",
                ],
              },
            };
            function M(e, t) {
              if (D[e.nodeName] && D[e.nodeName].attributes) {
                var r = D[e.nodeName].attributes.filter(function (t) {
                  return !e.getAttribute(t);
                });
                r.length > 0 &&
                  _(
                    {
                      name: e.nodeName,
                      parentName: e.parentNode.nodeName,
                      attributes: r,
                    },
                    t
                  );
              }
            }
            function B(e, t, r) {
              var i = D[e.nodeName],
                n = !r && "Wrapper" !== e.nodeName;
              if (i && !n) {
                if (i.subElements) {
                  var a = i.subElements.filter(function (t) {
                    return !L.childByName(e, t);
                  });
                  a.length > 0 &&
                    _(
                      {
                        name: e.nodeName,
                        parentName: e.parentNode.nodeName,
                        subElements: a,
                      },
                      t
                    );
                }
                r &&
                  i.oneOfinLineResources &&
                  (i.oneOfinLineResources.some(function (t) {
                    return L.childByName(e, t);
                  }) ||
                    _(
                      {
                        name: e.nodeName,
                        parentName: e.parentNode.nodeName,
                        oneOfResources: i.oneOfinLineResources,
                      },
                      t
                    ));
              }
            }
            function F(e) {
              return e.children && 0 !== e.children.length;
            }
            function _(e, t) {
              var r = e.name,
                i = e.parentName,
                n = e.attributes,
                a = e.subElements,
                o = e.oneOfResources,
                s = "Element '".concat(r, "'");
              t("VAST-warning", {
                message: (s += n
                  ? " missing required attribute(s) '".concat(
                      n.join(", "),
                      "' "
                    )
                  : a
                  ? " missing required sub element(s) '".concat(
                      a.join(", "),
                      "' "
                    )
                  : o
                  ? " must provide one of the following '".concat(
                      o.join(", "),
                      "' "
                    )
                  : " is empty"),
                parentElement: i,
                specVersion: 4.1,
              });
            }
            var j = function e(t, r, i) {
              if (t && t.nodeName)
                if (("InLine" === t.nodeName && (i = !0), M(t, r), F(t))) {
                  B(t, r, i);
                  for (var n = 0; n < t.children.length; n++)
                    e(t.children[n], r, i);
                } else
                  0 === L.parseNodeText(t).length &&
                    _(
                      { name: t.nodeName, parentName: t.parentNode.nodeName },
                      r
                    );
            };
            function W(e, t) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = r.allowMultipleAds,
                n = r.followAdditionalWrappers,
                a = e.childNodes;
              for (var o in a) {
                var s = a[o];
                if (
                  -1 !== ["Wrapper", "InLine"].indexOf(s.nodeName) &&
                  ("Wrapper" !== s.nodeName || !1 !== n)
                ) {
                  if (
                    (L.copyNodeAttribute("id", e, s),
                    L.copyNodeAttribute("sequence", e, s),
                    L.copyNodeAttribute("adType", e, s),
                    "Wrapper" === s.nodeName)
                  )
                    return { ad: q(s, t), type: "WRAPPER" };
                  if ("InLine" === s.nodeName)
                    return {
                      ad: H(s, t, { allowMultipleAds: i }),
                      type: "INLINE",
                    };
                }
              }
            }
            function H(e, t) {
              return !1 ===
                (arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
                ).allowMultipleAds && e.getAttribute("sequence")
                ? null
                : G(e, t);
            }
            function G(e, t) {
              var r = [];
              t && j(e, t);
              var i = e.childNodes,
                n = (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    id: e.id || null,
                    sequence: e.sequence || null,
                    adType: e.adType || null,
                    adServingId: null,
                    categories: [],
                    expires: null,
                    viewableImpression: [],
                    system: null,
                    title: null,
                    description: null,
                    advertiser: null,
                    pricing: null,
                    survey: null,
                    errorURLTemplates: [],
                    impressionURLTemplates: [],
                    creatives: [],
                    extensions: [],
                    adVerifications: [],
                    blockedAdCategories: [],
                    followAdditionalWrappers: !0,
                    allowMultipleAds: !1,
                    fallbackOnNoAd: null,
                  };
                })(L.parseAttributes(e));
              for (var a in i) {
                var o = i[a];
                switch (o.nodeName) {
                  case "Error":
                    n.errorURLTemplates.push(L.parseNodeText(o));
                    break;
                  case "Impression":
                    n.impressionURLTemplates.push({
                      id: o.getAttribute("id") || null,
                      url: L.parseNodeText(o),
                    });
                    break;
                  case "Creatives":
                    n.creatives = x(L.childrenByName(o, "Creative"));
                    break;
                  case "Extensions":
                    var s = L.childrenByName(o, "Extension");
                    (n.extensions = O(s)),
                      n.adVerifications.length || (r = z(s));
                    break;
                  case "AdVerifications":
                    n.adVerifications = K(L.childrenByName(o, "Verification"));
                    break;
                  case "AdSystem":
                    n.system = {
                      value: L.parseNodeText(o),
                      version: o.getAttribute("version") || null,
                    };
                    break;
                  case "AdTitle":
                    n.title = L.parseNodeText(o);
                    break;
                  case "AdServingId":
                    n.adServingId = L.parseNodeText(o);
                    break;
                  case "Category":
                    n.categories.push({
                      authority: o.getAttribute("authority") || null,
                      value: L.parseNodeText(o),
                    });
                    break;
                  case "Expires":
                    n.expires = parseInt(L.parseNodeText(o), 10);
                    break;
                  case "ViewableImpression":
                    n.viewableImpression.push(Y(o));
                    break;
                  case "Description":
                    n.description = L.parseNodeText(o);
                    break;
                  case "Advertiser":
                    n.advertiser = {
                      id: o.getAttribute("id") || null,
                      value: L.parseNodeText(o),
                    };
                    break;
                  case "Pricing":
                    n.pricing = {
                      value: L.parseNodeText(o),
                      model: o.getAttribute("model") || null,
                      currency: o.getAttribute("currency") || null,
                    };
                    break;
                  case "Survey":
                    n.survey = L.parseNodeText(o);
                    break;
                  case "BlockedAdCategories":
                    n.blockedAdCategories.push({
                      authority: o.getAttribute("authority") || null,
                      value: L.parseNodeText(o),
                    });
                }
              }
              return (
                r.length && (n.adVerifications = n.adVerifications.concat(r)), n
              );
            }
            function q(e, t) {
              var r = G(e, t),
                i = e.getAttribute("followAdditionalWrappers"),
                n = e.getAttribute("allowMultipleAds"),
                a = e.getAttribute("fallbackOnNoAd");
              (r.followAdditionalWrappers = !i || L.parseBoolean(i)),
                (r.allowMultipleAds = !!n && L.parseBoolean(n)),
                (r.fallbackOnNoAd = a ? L.parseBoolean(a) : null);
              var o = L.childByName(e, "VASTAdTagURI");
              if (
                (o
                  ? (r.nextWrapperURL = L.parseNodeText(o))
                  : (o = L.childByName(e, "VASTAdTagURL")) &&
                    (r.nextWrapperURL = L.parseNodeText(
                      L.childByName(o, "URL")
                    )),
                r.creatives.forEach(function (e) {
                  if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
                    if (e.trackingEvents) {
                      r.trackingEvents || (r.trackingEvents = {}),
                        r.trackingEvents[e.type] ||
                          (r.trackingEvents[e.type] = {});
                      var t = function (t) {
                        var i = e.trackingEvents[t];
                        Array.isArray(r.trackingEvents[e.type][t]) ||
                          (r.trackingEvents[e.type][t] = []),
                          i.forEach(function (i) {
                            r.trackingEvents[e.type][t].push(i);
                          });
                      };
                      for (var i in e.trackingEvents) t(i);
                    }
                    e.videoClickTrackingURLTemplates &&
                      (Array.isArray(r.videoClickTrackingURLTemplates) ||
                        (r.videoClickTrackingURLTemplates = []),
                      e.videoClickTrackingURLTemplates.forEach(function (e) {
                        r.videoClickTrackingURLTemplates.push(e);
                      })),
                      e.videoClickThroughURLTemplate &&
                        (r.videoClickThroughURLTemplate =
                          e.videoClickThroughURLTemplate),
                      e.videoCustomClickURLTemplates &&
                        (Array.isArray(r.videoCustomClickURLTemplates) ||
                          (r.videoCustomClickURLTemplates = []),
                        e.videoCustomClickURLTemplates.forEach(function (e) {
                          r.videoCustomClickURLTemplates.push(e);
                        }));
                  }
                }),
                r.nextWrapperURL)
              )
                return r;
            }
            function K(e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  var r = {
                      resource: null,
                      vendor: null,
                      browserOptional: !1,
                      apiFramework: null,
                      type: null,
                      parameters: null,
                      trackingEvents: {},
                    },
                    i = e.childNodes;
                  for (var n in (L.assignAttributes(e.attributes, r), i)) {
                    var a = i[n];
                    switch (a.nodeName) {
                      case "JavaScriptResource":
                      case "ExecutableResource":
                        (r.resource = L.parseNodeText(a)),
                          L.assignAttributes(a.attributes, r);
                        break;
                      case "VerificationParameters":
                        r.parameters = L.parseNodeText(a);
                    }
                  }
                  var o = L.childByName(e, "TrackingEvents");
                  o &&
                    L.childrenByName(o, "Tracking").forEach(function (e) {
                      var t = e.getAttribute("event"),
                        i = L.parseNodeText(e);
                      t &&
                        i &&
                        (Array.isArray(r.trackingEvents[t]) ||
                          (r.trackingEvents[t] = []),
                        r.trackingEvents[t].push(i));
                    }),
                    t.push(r);
                }),
                t
              );
            }
            function z(e) {
              var t = null,
                r = [];
              return (
                e.some(function (e) {
                  return (t = L.childByName(e, "AdVerifications"));
                }),
                t && (r = K(L.childrenByName(t, "Verification"))),
                r
              );
            }
            function Y(e) {
              var t = {};
              t.id = e.getAttribute("id") || null;
              var r = e.childNodes;
              for (var i in r) {
                var n = r[i],
                  a = n.nodeName,
                  o = L.parseNodeText(n);
                if (
                  ("Viewable" === a ||
                    "NotViewable" === a ||
                    "ViewUndetermined" === a) &&
                  o
                ) {
                  var s = a.toLowerCase();
                  Array.isArray(t[s]) || (t[s] = []), t[s].push(o);
                }
              }
              return t;
            }
            var Q = (function () {
                function e() {
                  n(this, e), (this._handlers = []);
                }
                return (
                  o(e, [
                    {
                      key: "on",
                      value: function (e, t) {
                        if ("function" != typeof t)
                          throw new TypeError(
                            "The handler argument must be of type Function. Received type ".concat(
                              i(t)
                            )
                          );
                        if (!e)
                          throw new TypeError(
                            "The event argument must be of type String. Received type ".concat(
                              i(e)
                            )
                          );
                        return (
                          this._handlers.push({ event: e, handler: t }), this
                        );
                      },
                    },
                    {
                      key: "once",
                      value: function (e, t) {
                        return this.on(
                          e,
                          (function (e, t, r) {
                            var i = { fired: !1, wrapFn: void 0 };
                            function n() {
                              i.fired ||
                                (e.off(t, i.wrapFn),
                                (i.fired = !0),
                                r.bind(e).apply(void 0, arguments));
                            }
                            return (i.wrapFn = n), n;
                          })(this, e, t)
                        );
                      },
                    },
                    {
                      key: "off",
                      value: function (e, t) {
                        return (
                          (this._handlers = this._handlers.filter(function (r) {
                            return r.event !== e || r.handler !== t;
                          })),
                          this
                        );
                      },
                    },
                    {
                      key: "emit",
                      value: function (e) {
                        for (
                          var t = arguments.length,
                            r = new Array(t > 1 ? t - 1 : 0),
                            i = 1;
                          i < t;
                          i++
                        )
                          r[i - 1] = arguments[i];
                        var n = !1;
                        return (
                          this._handlers.forEach(function (t) {
                            "*" === t.event &&
                              ((n = !0), t.handler.apply(t, [e].concat(r))),
                              t.event === e &&
                                ((n = !0), t.handler.apply(t, r));
                          }),
                          n
                        );
                      },
                    },
                    {
                      key: "removeAllListeners",
                      value: function (e) {
                        return e
                          ? ((this._handlers = this._handlers.filter(function (
                              t
                            ) {
                              return t.event !== e;
                            })),
                            this)
                          : ((this._handlers = []), this);
                      },
                    },
                    {
                      key: "listenerCount",
                      value: function (e) {
                        return this._handlers.filter(function (t) {
                          return t.event === e;
                        }).length;
                      },
                    },
                    {
                      key: "listeners",
                      value: function (e) {
                        return this._handlers.reduce(function (t, r) {
                          return r.event === e && t.push(r.handler), t;
                        }, []);
                      },
                    },
                    {
                      key: "eventNames",
                      value: function () {
                        return this._handlers.map(function (e) {
                          return e.event;
                        });
                      },
                    },
                  ]),
                  e
                );
              })(),
              X = function (e, t, r) {
                r(
                  new Error(
                    "Please bundle the library for node to use the node urlHandler"
                  )
                );
              },
              $ = 12e4;
            function J() {
              try {
                var e = new window.XMLHttpRequest();
                return "withCredentials" in e ? e : null;
              } catch (e) {
                return null;
              }
            }
            function Z(e, t, r) {
              var i = r ? 408 : e.status,
                n = r
                  ? "XHRURLHandler: Request timed out after "
                      .concat(e.timeout, " ms (")
                      .concat(i, ")")
                  : "XHRURLHandler: ".concat(e.statusText, " (").concat(i, ")");
              t(new Error(n), null, { statusCode: i });
            }
            var ee = function (e, t, r) {
                if (
                  "https:" === window.location.protocol &&
                  0 === e.indexOf("http://")
                )
                  return r(
                    new Error("XHRURLHandler: Cannot go from HTTPS to HTTP.")
                  );
                try {
                  var i = J();
                  i.open("GET", e),
                    (i.timeout = t.timeout || $),
                    (i.withCredentials = t.withCredentials || !1),
                    i.overrideMimeType && i.overrideMimeType("text/xml"),
                    (i.onload = function () {
                      return (function (e, t) {
                        200 === e.status
                          ? t(null, e.responseXML, {
                              byteLength: e.response.length,
                              statusCode: e.status,
                            })
                          : Z(e, t, !1);
                      })(i, r);
                    }),
                    (i.onerror = function () {
                      return Z(i, r, !1);
                    }),
                    (i.onabort = function () {
                      return Z(i, r, !1);
                    }),
                    (i.ontimeout = function () {
                      return Z(i, r, !0);
                    }),
                    i.send();
                } catch (e) {
                  r(new Error("XHRURLHandler: Unexpected error"));
                }
              },
              te = function () {
                return !!J();
              },
              re = {
                get: function (e, t, r) {
                  return (
                    r || ("function" == typeof t && (r = t), (t = {})),
                    "undefined" == typeof window || null === window
                      ? X(e, t, r)
                      : te()
                      ? ee(e, t, r)
                      : r(
                          new Error(
                            "Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"
                          )
                        )
                  );
                },
              },
              ie = 0,
              ne = 0,
              ae = function (e, t) {
                !e ||
                  !t ||
                  e <= 0 ||
                  t <= 0 ||
                  (ne = (ne * ie + (8 * e) / t) / ++ie);
              },
              oe = { ERRORCODE: 900, extensions: [] },
              se = (function (e) {
                c(r, e);
                var t = h(r);
                function r() {
                  var e;
                  return (
                    n(this, r),
                    ((e = t.call(this)).remainingAds = []),
                    (e.parentURLs = []),
                    (e.errorURLTemplates = []),
                    (e.rootErrorURLTemplates = []),
                    (e.maxWrapperDepth = null),
                    (e.URLTemplateFilters = []),
                    (e.fetchingOptions = {}),
                    (e.parsingOptions = {}),
                    e
                  );
                }
                return (
                  o(r, [
                    {
                      key: "addURLTemplateFilter",
                      value: function (e) {
                        "function" == typeof e &&
                          this.URLTemplateFilters.push(e);
                      },
                    },
                    {
                      key: "removeURLTemplateFilter",
                      value: function () {
                        this.URLTemplateFilters.pop();
                      },
                    },
                    {
                      key: "countURLTemplateFilters",
                      value: function () {
                        return this.URLTemplateFilters.length;
                      },
                    },
                    {
                      key: "clearURLTemplateFilters",
                      value: function () {
                        this.URLTemplateFilters = [];
                      },
                    },
                    {
                      key: "trackVastError",
                      value: function (e, t) {
                        for (
                          var r = arguments.length,
                            i = new Array(r > 2 ? r - 2 : 0),
                            n = 2;
                          n < r;
                          n++
                        )
                          i[n - 2] = arguments[n];
                        this.emit(
                          "VAST-error",
                          Object.assign.apply(Object, [{}, oe, t].concat(i))
                        ),
                          w.track(e, t);
                      },
                    },
                    {
                      key: "getErrorURLTemplates",
                      value: function () {
                        return this.rootErrorURLTemplates.concat(
                          this.errorURLTemplates
                        );
                      },
                    },
                    {
                      key: "getEstimatedBitrate",
                      value: function () {
                        return ne;
                      },
                    },
                    {
                      key: "fetchVAST",
                      value: function (e) {
                        var t = this,
                          r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          i =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : null,
                          n =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : null;
                        return new Promise(function (a, o) {
                          t.URLTemplateFilters.forEach(function (t) {
                            e = t(e);
                          }),
                            t.parentURLs.push(e);
                          var s = Date.now();
                          t.emit("VAST-resolving", {
                            url: e,
                            previousUrl: i,
                            wrapperDepth: r,
                            maxWrapperDepth: t.maxWrapperDepth,
                            timeout: t.fetchingOptions.timeout,
                            wrapperAd: n,
                          }),
                            t.urlHandler.get(
                              e,
                              t.fetchingOptions,
                              function (n, c) {
                                var l =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                      ? arguments[2]
                                      : {},
                                  u = Math.round(Date.now() - s),
                                  d = Object.assign(
                                    {
                                      url: e,
                                      previousUrl: i,
                                      wrapperDepth: r,
                                      error: n,
                                      duration: u,
                                    },
                                    l
                                  );
                                t.emit("VAST-resolved", d),
                                  ae(l.byteLength, u),
                                  n ? o(n) : a(c);
                              }
                            );
                        });
                      },
                    },
                    {
                      key: "initParsingStatus",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (this.errorURLTemplates = []),
                          (this.fetchingOptions = {
                            timeout: e.timeout || $,
                            withCredentials: e.withCredentials,
                          }),
                          (this.maxWrapperDepth = e.wrapperLimit || 10),
                          (this.parentURLs = []),
                          (this.parsingOptions = {
                            allowMultipleAds: e.allowMultipleAds,
                          }),
                          (this.remainingAds = []),
                          (this.rootErrorURLTemplates = []),
                          (this.rootURL = ""),
                          (this.urlHandler =
                            e.urlHandler || e.urlhandler || re),
                          (this.vastVersion = null),
                          ae(e.byteLength, e.requestDuration);
                      },
                    },
                    {
                      key: "getRemainingAds",
                      value: function (e) {
                        var t = this;
                        if (0 === this.remainingAds.length)
                          return Promise.reject(
                            new Error(
                              "No more ads are available for the given VAST"
                            )
                          );
                        var r = e
                          ? w.flatten(this.remainingAds)
                          : this.remainingAds.shift();
                        return (
                          (this.errorURLTemplates = []),
                          (this.parentURLs = []),
                          this.resolveAds(r, {
                            wrapperDepth: 0,
                            url: this.rootURL,
                          }).then(function (e) {
                            return t.buildVASTResponse(e);
                          })
                        );
                      },
                    },
                    {
                      key: "getAndParseVAST",
                      value: function (e) {
                        var t = this,
                          r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        return (
                          this.initParsingStatus(r),
                          this.URLTemplateFilters.forEach(function (t) {
                            e = t(e);
                          }),
                          (this.rootURL = e),
                          this.fetchVAST(e).then(function (i) {
                            return (
                              (r.previousUrl = e),
                              (r.isRootVAST = !0),
                              (r.url = e),
                              t.parse(i, r).then(function (e) {
                                return t.buildVASTResponse(e);
                              })
                            );
                          })
                        );
                      },
                    },
                    {
                      key: "parseVAST",
                      value: function (e) {
                        var t = this,
                          r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        return (
                          this.initParsingStatus(r),
                          (r.isRootVAST = !0),
                          this.parse(e, r).then(function (e) {
                            return t.buildVASTResponse(e);
                          })
                        );
                      },
                    },
                    {
                      key: "buildVASTResponse",
                      value: function (e) {
                        var t,
                          r = {
                            ads:
                              (t = {
                                ads: e,
                                errorURLTemplates: this.getErrorURLTemplates(),
                                version: this.vastVersion,
                              }).ads || [],
                            errorURLTemplates: t.errorURLTemplates || [],
                            version: t.version || null,
                          };
                        return this.completeWrapperResolving(r), r;
                      },
                    },
                    {
                      key: "parseVastXml",
                      value: function (e, t) {
                        var r = t.isRootVAST,
                          i = void 0 !== r && r,
                          n = t.url,
                          a = void 0 === n ? null : n,
                          o = t.wrapperDepth,
                          s = void 0 === o ? 0 : o,
                          c = t.allowMultipleAds,
                          l = t.followAdditionalWrappers;
                        if (
                          !e ||
                          !e.documentElement ||
                          "VAST" !== e.documentElement.nodeName
                        )
                          throw (
                            (this.emit("VAST-ad-parsed", {
                              type: "ERROR",
                              url: a,
                              wrapperDepth: s,
                            }),
                            new Error("Invalid VAST XMLDocument"))
                          );
                        var u = [],
                          d = e.documentElement.childNodes,
                          h = e.documentElement.getAttribute("version");
                        for (var p in (i && h && (this.vastVersion = h), d)) {
                          var f = d[p];
                          if ("Error" === f.nodeName) {
                            var v = L.parseNodeText(f);
                            i
                              ? this.rootErrorURLTemplates.push(v)
                              : this.errorURLTemplates.push(v);
                          } else if ("Ad" === f.nodeName) {
                            if (
                              this.vastVersion &&
                              parseFloat(this.vastVersion) < 3
                            )
                              c = !0;
                            else if (!1 === c && u.length > 1) break;
                            var m = W(f, this.emit.bind(this), {
                              allowMultipleAds: c,
                              followAdditionalWrappers: l,
                            });
                            m.ad
                              ? (u.push(m.ad),
                                this.emit("VAST-ad-parsed", {
                                  type: m.type,
                                  url: a,
                                  wrapperDepth: s,
                                  adIndex: u.length - 1,
                                  vastVersion: h,
                                }))
                              : this.trackVastError(
                                  this.getErrorURLTemplates(),
                                  { ERRORCODE: 101 }
                                );
                          }
                        }
                        return u;
                      },
                    },
                    {
                      key: "parse",
                      value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = t.url,
                          i = void 0 === r ? null : r,
                          n = t.resolveAll,
                          a = void 0 === n || n,
                          o = t.wrapperSequence,
                          s = void 0 === o ? null : o,
                          c = t.previousUrl,
                          l = void 0 === c ? null : c,
                          u = t.wrapperDepth,
                          d = void 0 === u ? 0 : u,
                          h = t.isRootVAST,
                          p = void 0 !== h && h,
                          f = t.followAdditionalWrappers,
                          v = t.allowMultipleAds,
                          m = [];
                        this.vastVersion &&
                          parseFloat(this.vastVersion) < 3 &&
                          p &&
                          (v = !0);
                        try {
                          m = this.parseVastXml(e, {
                            isRootVAST: p,
                            url: i,
                            wrapperDepth: d,
                            allowMultipleAds: v,
                            followAdditionalWrappers: f,
                          });
                        } catch (e) {
                          return Promise.reject(e);
                        }
                        return (
                          1 === m.length && null != s && (m[0].sequence = s),
                          !1 === a &&
                            ((this.remainingAds = L.splitVAST(m)),
                            (m = this.remainingAds.shift())),
                          this.resolveAds(m, {
                            wrapperDepth: d,
                            previousUrl: l,
                            url: i,
                          })
                        );
                      },
                    },
                    {
                      key: "resolveAds",
                      value: function () {
                        var e = this,
                          t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          r = arguments.length > 1 ? arguments[1] : void 0,
                          i = r.wrapperDepth,
                          n = r.previousUrl,
                          a = r.url,
                          o = [];
                        return (
                          (n = a),
                          t.forEach(function (t) {
                            var r = e.resolveWrappers(t, i, n);
                            o.push(r);
                          }),
                          Promise.all(o).then(function (t) {
                            var r = w.flatten(t);
                            if (!r && e.remainingAds.length > 0) {
                              var o = e.remainingAds.shift();
                              return e.resolveAds(o, {
                                wrapperDepth: i,
                                previousUrl: n,
                                url: a,
                              });
                            }
                            return r;
                          })
                        );
                      },
                    },
                    {
                      key: "resolveWrappers",
                      value: function (e, t, r) {
                        var i = this;
                        return new Promise(function (n) {
                          var a;
                          if ((t++, !e.nextWrapperURL))
                            return delete e.nextWrapperURL, n(e);
                          if (
                            t >= i.maxWrapperDepth ||
                            -1 !== i.parentURLs.indexOf(e.nextWrapperURL)
                          )
                            return (
                              (e.errorCode = 302), delete e.nextWrapperURL, n(e)
                            );
                          (e.nextWrapperURL = L.resolveVastAdTagURI(
                            e.nextWrapperURL,
                            r
                          )),
                            i.URLTemplateFilters.forEach(function (t) {
                              e.nextWrapperURL = t(e.nextWrapperURL);
                            });
                          var o =
                              null !==
                                (a = i.parsingOptions.allowMultipleAds) &&
                              void 0 !== a
                                ? a
                                : e.allowMultipleAds,
                            s = e.sequence;
                          i.fetchVAST(e.nextWrapperURL, t, r, e)
                            .then(function (a) {
                              return i
                                .parse(a, {
                                  url: e.nextWrapperURL,
                                  previousUrl: r,
                                  wrapperSequence: s,
                                  wrapperDepth: t,
                                  followAdditionalWrappers:
                                    e.followAdditionalWrappers,
                                  allowMultipleAds: o,
                                })
                                .then(function (t) {
                                  if ((delete e.nextWrapperURL, 0 === t.length))
                                    return (e.creatives = []), n(e);
                                  t.forEach(function (t) {
                                    t && L.mergeWrapperAdData(t, e);
                                  }),
                                    n(t);
                                });
                            })
                            .catch(function (t) {
                              (e.errorCode = 301),
                                (e.errorMessage = t.message),
                                n(e);
                            });
                        });
                      },
                    },
                    {
                      key: "completeWrapperResolving",
                      value: function (e) {
                        if (0 === e.ads.length)
                          this.trackVastError(e.errorURLTemplates, {
                            ERRORCODE: 303,
                          });
                        else
                          for (var t = e.ads.length - 1; t >= 0; t--) {
                            var r = e.ads[t];
                            (r.errorCode || 0 === r.creatives.length) &&
                              (this.trackVastError(
                                r.errorURLTemplates.concat(e.errorURLTemplates),
                                { ERRORCODE: r.errorCode || 303 },
                                { ERRORMESSAGE: r.errorMessage || "" },
                                { extensions: r.extensions },
                                { system: r.system }
                              ),
                              e.ads.splice(t, 1));
                          }
                      },
                    },
                  ]),
                  r
                );
              })(Q),
              ce = null,
              le = {
                data: {},
                length: 0,
                getItem: function (e) {
                  return this.data[e];
                },
                setItem: function (e, t) {
                  (this.data[e] = t),
                    (this.length = Object.keys(this.data).length);
                },
                removeItem: function (e) {
                  delete this.data[e],
                    (this.length = Object.keys(this.data).length);
                },
                clear: function () {
                  (this.data = {}), (this.length = 0);
                },
              },
              ue = (function () {
                function e() {
                  n(this, e), (this.storage = this.initStorage());
                }
                return (
                  o(e, [
                    {
                      key: "initStorage",
                      value: function () {
                        if (ce) return ce;
                        try {
                          ce =
                            "undefined" != typeof window && null !== window
                              ? window.localStorage || window.sessionStorage
                              : null;
                        } catch (e) {
                          ce = null;
                        }
                        return (
                          (ce && !this.isStorageDisabled(ce)) ||
                            (ce = le).clear(),
                          ce
                        );
                      },
                    },
                    {
                      key: "isStorageDisabled",
                      value: function (e) {
                        var t = "__VASTStorage__";
                        try {
                          if ((e.setItem(t, t), e.getItem(t) !== t))
                            return e.removeItem(t), !0;
                        } catch (e) {
                          return !0;
                        }
                        return e.removeItem(t), !1;
                      },
                    },
                    {
                      key: "getItem",
                      value: function (e) {
                        return this.storage.getItem(e);
                      },
                    },
                    {
                      key: "setItem",
                      value: function (e, t) {
                        return this.storage.setItem(e, t);
                      },
                    },
                    {
                      key: "removeItem",
                      value: function (e) {
                        return this.storage.removeItem(e);
                      },
                    },
                    {
                      key: "clear",
                      value: function () {
                        return this.storage.clear();
                      },
                    },
                  ]),
                  e
                );
              })(),
              de = (function () {
                function e(t, r, i) {
                  n(this, e),
                    (this.cappingFreeLunch = t || 0),
                    (this.cappingMinimumTimeInterval = r || 0),
                    (this.defaultOptions = { withCredentials: !1, timeout: 0 }),
                    (this.vastParser = new se()),
                    (this.storage = i || new ue()),
                    void 0 === this.lastSuccessfulAd &&
                      (this.lastSuccessfulAd = 0),
                    void 0 === this.totalCalls && (this.totalCalls = 0),
                    void 0 === this.totalCallsTimeout &&
                      (this.totalCallsTimeout = 0);
                }
                return (
                  o(e, [
                    {
                      key: "getParser",
                      value: function () {
                        return this.vastParser;
                      },
                    },
                    {
                      key: "lastSuccessfulAd",
                      get: function () {
                        return this.storage.getItem(
                          "vast-client-last-successful-ad"
                        );
                      },
                      set: function (e) {
                        this.storage.setItem(
                          "vast-client-last-successful-ad",
                          e
                        );
                      },
                    },
                    {
                      key: "totalCalls",
                      get: function () {
                        return this.storage.getItem("vast-client-total-calls");
                      },
                      set: function (e) {
                        this.storage.setItem("vast-client-total-calls", e);
                      },
                    },
                    {
                      key: "totalCallsTimeout",
                      get: function () {
                        return this.storage.getItem(
                          "vast-client-total-calls-timeout"
                        );
                      },
                      set: function (e) {
                        this.storage.setItem(
                          "vast-client-total-calls-timeout",
                          e
                        );
                      },
                    },
                    {
                      key: "hasRemainingAds",
                      value: function () {
                        return this.vastParser.remainingAds.length > 0;
                      },
                    },
                    {
                      key: "getNextAds",
                      value: function (e) {
                        return this.vastParser.getRemainingAds(e);
                      },
                    },
                    {
                      key: "get",
                      value: function (e) {
                        var t = this,
                          r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          i = Date.now();
                        return (
                          (r = Object.assign(
                            {},
                            this.defaultOptions,
                            r
                          )).hasOwnProperty("resolveAll") ||
                            (r.resolveAll = !1),
                          this.totalCallsTimeout < i
                            ? ((this.totalCalls = 1),
                              (this.totalCallsTimeout = i + 36e5))
                            : this.totalCalls++,
                          new Promise(function (n, a) {
                            if (t.cappingFreeLunch >= t.totalCalls)
                              return a(
                                new Error(
                                  "VAST call canceled – FreeLunch capping not reached yet "
                                    .concat(t.totalCalls, "/")
                                    .concat(t.cappingFreeLunch)
                                )
                              );
                            var o = i - t.lastSuccessfulAd;
                            if (o < 0) t.lastSuccessfulAd = 0;
                            else if (o < t.cappingMinimumTimeInterval)
                              return a(
                                new Error(
                                  "VAST call canceled – (".concat(
                                    t.cappingMinimumTimeInterval,
                                    ")ms minimum interval reached"
                                  )
                                )
                              );
                            t.vastParser
                              .getAndParseVAST(e, r)
                              .then(function (e) {
                                return n(e);
                              })
                              .catch(function (e) {
                                return a(e);
                              });
                          })
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              he = (function (e) {
                c(a, e);
                var t = h(a);
                function a(e, r, i) {
                  var o,
                    s =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null;
                  for (var c in (n(this, a),
                  ((o = t.call(this)).ad = r),
                  (o.creative = i),
                  (o.variation = s),
                  (o.muted = !1),
                  (o.impressed = !1),
                  (o.skippable = !1),
                  (o.trackingEvents = {}),
                  (o.lastPercentage = 0),
                  (o._alreadyTriggeredQuartiles = {}),
                  (o.emitAlwaysEvents = [
                    "creativeView",
                    "start",
                    "firstQuartile",
                    "midpoint",
                    "thirdQuartile",
                    "complete",
                    "resume",
                    "pause",
                    "rewind",
                    "skip",
                    "closeLinear",
                    "close",
                  ]),
                  o.creative.trackingEvents)) {
                    var l = o.creative.trackingEvents[c];
                    o.trackingEvents[c] = l.slice(0);
                  }
                  return (
                    N(o.creative)
                      ? o._initLinearTracking()
                      : o._initVariationTracking(),
                    e &&
                      o.on("start", function () {
                        e.lastSuccessfulAd = Date.now();
                      }),
                    o
                  );
                }
                return (
                  o(a, [
                    {
                      key: "_initLinearTracking",
                      value: function () {
                        (this.linear = !0),
                          (this.skipDelay = this.creative.skipDelay),
                          this.setDuration(this.creative.duration),
                          (this.clickThroughURLTemplate =
                            this.creative.videoClickThroughURLTemplate),
                          (this.clickTrackingURLTemplates =
                            this.creative.videoClickTrackingURLTemplates);
                      },
                    },
                    {
                      key: "_initVariationTracking",
                      value: function () {
                        if (
                          ((this.linear = !1),
                          (this.skipDelay = -1),
                          this.variation)
                        ) {
                          for (var e in this.variation.trackingEvents) {
                            var t = this.variation.trackingEvents[e];
                            this.trackingEvents[e]
                              ? (this.trackingEvents[e] = this.trackingEvents[
                                  e
                                ].concat(t.slice(0)))
                              : (this.trackingEvents[e] = t.slice(0));
                          }
                          "nonLinearAd" === this.variation.adType
                            ? ((this.clickThroughURLTemplate =
                                this.variation.nonlinearClickThroughURLTemplate),
                              (this.clickTrackingURLTemplates =
                                this.variation.nonlinearClickTrackingURLTemplates),
                              this.setDuration(
                                this.variation.minSuggestedDuration
                              ))
                            : (function (e) {
                                return "companionAd" === e.adType;
                              })(this.variation) &&
                              ((this.clickThroughURLTemplate =
                                this.variation.companionClickThroughURLTemplate),
                              (this.clickTrackingURLTemplates =
                                this.variation.companionClickTrackingURLTemplates));
                        }
                      },
                    },
                    {
                      key: "setDuration",
                      value: function (e) {
                        w.isValidTimeValue(e) &&
                          ((this.assetDuration = e),
                          (this.quartiles = {
                            firstQuartile:
                              Math.round(25 * this.assetDuration) / 100,
                            midpoint: Math.round(50 * this.assetDuration) / 100,
                            thirdQuartile:
                              Math.round(75 * this.assetDuration) / 100,
                          }));
                      },
                    },
                    {
                      key: "setProgress",
                      value: function (e) {
                        var t = this,
                          r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        if (w.isValidTimeValue(e) && "object" === i(r)) {
                          var n = this.skipDelay || -1;
                          if (
                            (-1 === n ||
                              this.skippable ||
                              (n > e
                                ? this.emit("skip-countdown", n - e)
                                : ((this.skippable = !0),
                                  this.emit("skip-countdown", 0))),
                            this.assetDuration > 0)
                          ) {
                            var a = Math.round((e / this.assetDuration) * 100),
                              o = [];
                            if (e > 0) {
                              o.push("start");
                              for (var s = this.lastPercentage; s < a; s++)
                                o.push("progress-".concat(s + 1, "%"));
                              for (var c in (o.push(
                                "progress-".concat(Math.round(e))
                              ),
                              this.quartiles))
                                this.isQuartileReached(
                                  c,
                                  this.quartiles[c],
                                  e
                                ) &&
                                  (o.push(c),
                                  (this._alreadyTriggeredQuartiles[c] = !0));
                              this.lastPercentage = a;
                            }
                            o.forEach(function (e) {
                              t.track(e, { macros: r, once: !0 });
                            }),
                              e < this.progress &&
                                this.track("rewind", { macros: r });
                          }
                          this.progress = e;
                        }
                      },
                    },
                    {
                      key: "isQuartileReached",
                      value: function (e, t, r) {
                        var i = !1;
                        return (
                          t <= r &&
                            !this._alreadyTriggeredQuartiles[e] &&
                            (i = !0),
                          i
                        );
                      },
                    },
                    {
                      key: "setMuted",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        "boolean" == typeof e &&
                          "object" === i(t) &&
                          (this.muted !== e &&
                            this.track(e ? "mute" : "unmute", { macros: t }),
                          (this.muted = e));
                      },
                    },
                    {
                      key: "setPaused",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        "boolean" == typeof e &&
                          "object" === i(t) &&
                          (this.paused !== e &&
                            this.track(e ? "pause" : "resume", { macros: t }),
                          (this.paused = e));
                      },
                    },
                    {
                      key: "setFullscreen",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        "boolean" == typeof e &&
                          "object" === i(t) &&
                          (this.fullscreen !== e &&
                            this.track(e ? "fullscreen" : "exitFullscreen", {
                              macros: t,
                            }),
                          (this.fullscreen = e));
                      },
                    },
                    {
                      key: "setExpand",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        "boolean" == typeof e &&
                          "object" === i(t) &&
                          (this.expanded !== e &&
                            (this.track(e ? "expand" : "collapse", {
                              macros: t,
                            }),
                            this.track(e ? "playerExpand" : "playerCollapse", {
                              macros: t,
                            })),
                          (this.expanded = e));
                      },
                    },
                    {
                      key: "setSkipDelay",
                      value: function (e) {
                        w.isValidTimeValue(e) && (this.skipDelay = e);
                      },
                    },
                    {
                      key: "trackImpression",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          (this.impressed ||
                            ((this.impressed = !0),
                            this.trackURLs(this.ad.impressionURLTemplates, e),
                            this.track("creativeView", { macros: e })));
                      },
                    },
                    {
                      key: "error",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                        "object" === i(e) &&
                          "boolean" == typeof t &&
                          this.trackURLs(this.ad.errorURLTemplates, e, {
                            isCustomCode: t,
                          });
                      },
                    },
                    {
                      key: "errorWithCode",
                      value: function (e) {
                        var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                        "string" == typeof e &&
                          "boolean" == typeof t &&
                          (this.error({ ERRORCODE: e }, t),
                          console.log(
                            "The method errorWithCode is deprecated, please use vast tracker error method instead"
                          ));
                      },
                    },
                    {
                      key: "complete",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("complete", { macros: e });
                      },
                    },
                    {
                      key: "notUsed",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          (this.track("notUsed", { macros: e }),
                          (this.trackingEvents = []));
                      },
                    },
                    {
                      key: "otherAdInteraction",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("otherAdInteraction", { macros: e });
                      },
                    },
                    {
                      key: "acceptInvitation",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("acceptInvitation", { macros: e });
                      },
                    },
                    {
                      key: "adExpand",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("adExpand", { macros: e });
                      },
                    },
                    {
                      key: "adCollapse",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("adCollapse", { macros: e });
                      },
                    },
                    {
                      key: "minimize",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("minimize", { macros: e });
                      },
                    },
                    {
                      key: "verificationNotExecuted",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        if ("string" == typeof e && "object" === i(t)) {
                          if (
                            !this.ad ||
                            !this.ad.adVerifications ||
                            !this.ad.adVerifications.length
                          )
                            throw new Error("No adVerifications provided");
                          if (!e)
                            throw new Error(
                              "No vendor provided, unable to find associated verificationNotExecuted"
                            );
                          var r = this.ad.adVerifications.find(function (t) {
                            return t.vendor === e;
                          });
                          if (!r)
                            throw new Error(
                              "No associated verification element found for vendor: ".concat(
                                e
                              )
                            );
                          var n = r.trackingEvents;
                          if (n && n.verificationNotExecuted) {
                            var a = n.verificationNotExecuted;
                            this.trackURLs(a, t),
                              this.emit("verificationNotExecuted", {
                                trackingURLTemplates: a,
                              });
                          }
                        }
                      },
                    },
                    {
                      key: "overlayViewDuration",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        "string" == typeof e &&
                          "object" === i(t) &&
                          ((t.ADPLAYHEAD = e),
                          this.track("overlayViewDuration", { macros: t }));
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track(this.linear ? "closeLinear" : "close", {
                            macros: e,
                          });
                      },
                    },
                    {
                      key: "skip",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) && this.track("skip", { macros: e });
                      },
                    },
                    {
                      key: "load",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        "object" === i(e) &&
                          this.track("loaded", { macros: e });
                      },
                    },
                    {
                      key: "click",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : null,
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        if (
                          (null === e || "string" == typeof e) &&
                          "object" === i(t)
                        ) {
                          this.clickTrackingURLTemplates &&
                            this.clickTrackingURLTemplates.length &&
                            this.trackURLs(this.clickTrackingURLTemplates, t);
                          var n = this.clickThroughURLTemplate || e,
                            a = r({}, t);
                          if (n) {
                            this.progress &&
                              (a.ADPLAYHEAD = this.progressFormatted());
                            var o = w.resolveURLTemplates([n], a)[0];
                            this.emit("clickthrough", o);
                          }
                        }
                      },
                    },
                    {
                      key: "track",
                      value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = t.macros,
                          n = void 0 === r ? {} : r,
                          a = t.once,
                          o = void 0 !== a && a;
                        if ("object" === i(n)) {
                          "closeLinear" === e &&
                            !this.trackingEvents[e] &&
                            this.trackingEvents.close &&
                            (e = "close");
                          var s = this.trackingEvents[e],
                            c = this.emitAlwaysEvents.indexOf(e) > -1;
                          s
                            ? (this.emit(e, { trackingURLTemplates: s }),
                              this.trackURLs(s, n))
                            : c && this.emit(e, null),
                            o &&
                              (delete this.trackingEvents[e],
                              c &&
                                this.emitAlwaysEvents.splice(
                                  this.emitAlwaysEvents.indexOf(e),
                                  1
                                ));
                        }
                      },
                    },
                    {
                      key: "trackURLs",
                      value: function (e) {
                        var t,
                          i,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          a = r(
                            {},
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {}
                          );
                        this.linear &&
                          (this.creative &&
                            this.creative.mediaFiles &&
                            this.creative.mediaFiles[0] &&
                            this.creative.mediaFiles[0].fileURL &&
                            (a.ASSETURI = this.creative.mediaFiles[0].fileURL),
                          this.progress &&
                            (a.ADPLAYHEAD = this.progressFormatted())),
                          null !== (t = this.creative) &&
                            void 0 !== t &&
                            null !== (i = t.universalAdIds) &&
                            void 0 !== i &&
                            i.length &&
                            (a.UNIVERSALADID = this.creative.universalAdIds
                              .map(function (e) {
                                return e.idRegistry.concat(" ", e.value);
                              })
                              .join(",")),
                          this.ad &&
                            (this.ad.sequence &&
                              (a.PODSEQUENCE = this.ad.sequence),
                            this.ad.adType && (a.ADTYPE = this.ad.adType),
                            this.ad.adServingId &&
                              (a.ADSERVINGID = this.ad.adServingId),
                            this.ad.categories &&
                              this.ad.categories.length &&
                              (a.ADCATEGORIES = this.ad.categories
                                .map(function (e) {
                                  return e.value;
                                })
                                .join(",")),
                            this.ad.blockedAdCategories &&
                              this.ad.blockedAdCategories.length &&
                              (a.BLOCKEDADCATEGORIES =
                                this.ad.blockedAdCategories)),
                          w.track(e, a, n);
                      },
                    },
                    {
                      key: "convertToTimecode",
                      value: function (e) {
                        if (!w.isValidTimeValue(e)) return "";
                        var t = 1e3 * e,
                          r = Math.floor(t / 36e5),
                          i = Math.floor((t / 6e4) % 60),
                          n = Math.floor((t / 1e3) % 60),
                          a = Math.floor(t % 1e3);
                        return ""
                          .concat(w.addLeadingZeros(r, 2), ":")
                          .concat(w.addLeadingZeros(i, 2), ":")
                          .concat(w.addLeadingZeros(n, 2), ".")
                          .concat(w.addLeadingZeros(a, 3));
                      },
                    },
                    {
                      key: "progressFormatted",
                      value: function () {
                        return this.convertToTimecode(this.progress);
                      },
                    },
                  ]),
                  a
                );
              })(Q);
            (e.VASTClient = de),
              (e.VASTParser = se),
              (e.VASTTracker = he),
              Object.defineProperty(e, "__esModule", { value: !0 });
          })(t);
        },
        228: (e, t, r) => {
          "use strict";
          r.r(t), r.d(t, { default: () => s });
          const i = class {
            constructor(e) {
              (this.id = e.getAttribute("id")),
                (this.allowMultipleAds = e.getAttribute("allowMultipleAds")),
                (this.followRedirects = e.getAttribute("followRedirects")),
                (this.vastAdData = null),
                (this.adTagURI = null),
                (this.customData = null);
              for (const t in e.childNodes) {
                const r = e.childNodes[t];
                switch (r.localName) {
                  case "AdTagURI":
                    this.adTagURI = {
                      templateType: r.getAttribute("templateType"),
                      uri: (r.textContent || r.text || "").trim(),
                    };
                    break;
                  case "VASTAdData":
                    for (
                      this.vastAdData = r.firstChild;
                      this.vastAdData && 1 !== this.vastAdData.nodeType;

                    )
                      this.vastAdData = this.vastAdData.nextSibling;
                    break;
                  case "CustomAdData":
                    this.customData = r;
                }
              }
            }
          };
          function n(e, t) {
            const r = [];
            for (const i in e.childNodes) {
              const n = e.childNodes[i];
              (n.nodeName !== t &&
                t !== `vmap:${n.nodeName}` &&
                n.nodeName !== `vmap:${t}`) ||
                r.push(n);
            }
            return r;
          }
          function a(e) {
            const t = { attributes: {}, children: {}, value: {} };
            t.value = (function (e) {
              if (!e || !e.childNodes) return {};
              const t = e.childNodes,
                r = [];
              for (const e in t) {
                const i = t[e];
                "#cdata-section" === i.nodeName && r.push(i);
              }
              if (r && r.length > 0)
                try {
                  return JSON.parse(r[0].data);
                } catch (e) {}
              let i = "";
              for (const e in t) {
                const r = t[e];
                switch (r.nodeName) {
                  case "#text":
                    i += r.textContent.trim();
                    break;
                  case "#cdata-section":
                    i += r.data;
                }
              }
              return i;
            })(e);
            const r = e.attributes;
            if (r)
              for (const e in r) {
                const i = r[e];
                i.nodeName &&
                  void 0 !== i.nodeValue &&
                  null !== i.nodeValue &&
                  (t.attributes[i.nodeName] = i.nodeValue);
              }
            const i = e.childNodes;
            if (i)
              for (const e in i) {
                const r = i[e];
                r.nodeName &&
                  "#" !== r.nodeName.substring(0, 1) &&
                  (t.children[r.nodeName] = a(r));
              }
            return t;
          }
          const o = class {
              constructor(e) {
                (this.timeOffset = e.getAttribute("timeOffset")),
                  (this.breakType = e.getAttribute("breakType")),
                  (this.breakId = e.getAttribute("breakId")),
                  (this.repeatAfter = e.getAttribute("repeatAfter")),
                  (this.adSource = null),
                  (this.trackingEvents = []),
                  (this.extensions = []);
                for (const t in e.childNodes) {
                  const r = e.childNodes[t];
                  switch (r.localName) {
                    case "AdSource":
                      this.adSource = new i(r);
                      break;
                    case "TrackingEvents":
                      for (const e in r.childNodes) {
                        const t = r.childNodes[e];
                        "Tracking" === t.localName &&
                          this.trackingEvents.push({
                            event: t.getAttribute("event"),
                            uri: (t.textContent || t.text || "").trim(),
                          });
                      }
                      break;
                    case "Extensions":
                      this.extensions = n(r, "Extension").map((e) => a(e));
                  }
                }
              }
              track(e, t) {
                for (const r in this.trackingEvents) {
                  const i = this.trackingEvents[r];
                  if (i.event === e) {
                    let { uri: e } = i;
                    "error" === i.event && (e = e.replace("[ERRORCODE]", t)),
                      this.tracker(e);
                  }
                }
              }
              tracker(e) {
                "undefined" != typeof window &&
                  null !== window &&
                  (new Image().src = e);
              }
            },
            s = class {
              constructor(e) {
                if (
                  !e ||
                  !e.documentElement ||
                  "VMAP" !== e.documentElement.localName
                )
                  throw new Error("Not a VMAP document");
                (this.version = e.documentElement.getAttribute("version")),
                  (this.adBreaks = []),
                  (this.extensions = []);
                for (const t in e.documentElement.childNodes) {
                  const r = e.documentElement.childNodes[t];
                  switch (r.localName) {
                    case "AdBreak":
                      this.adBreaks.push(new o(r));
                      break;
                    case "Extensions":
                      this.extensions = n(r, "Extension").map((e) => a(e));
                  }
                }
              }
            };
        },
        270: (e, t, r) => {
          var i = r(155),
            n = r(248),
            a = r(228),
            o = r(855);
          function s(e, t, r, i) {
            Object.defineProperty(e, t, {
              get: r,
              set: i,
              enumerable: !0,
              configurable: !0,
            });
          }
          function c(e) {
            return e && e.__esModule ? e.default : e;
          }
          s(e.exports, "AdBreakTrackingEvent", () => d),
            s(e.exports, "AdTrackingEvent", () => u);
          var l = {};
          s(
            l,
            "CSAIManager",
            () => N,
            (e) => (N = e)
          );
          var u,
            d,
            h,
            p,
            f,
            v = {};
          function m(e) {
            for (var t = e.split(":"), r = 0, i = 1; t.length > 0; )
              (r += i * parseInt(t.pop(), 10)), (i *= 60);
            return r;
          }
          s(
            v,
            "AdServerService",
            () => R,
            (e) => (R = e)
          ),
            (function (e) {
              (e.START = "start"),
                (e.IMPRESSION = "impression"),
                (e.EXPAND = "expand"),
                (e.MUTE = "mute"),
                (e.UNMUTE = "unmute"),
                (e.PAUSE = "pause"),
                (e.RESUME = "resume"),
                (e.REWIND = "rewind"),
                (e.CLOSE = "close"),
                (e.COMPLETE = "complete"),
                (e.FIRST_QUARTILE = "firstQuartile"),
                (e.MIDPOINT = "midpoint"),
                (e.THIRD_QUARTILE = "thirdQuartile"),
                (e.CLICK_THROUGH = "clickThrough"),
                (e.ERROR = "error");
            })(u || (u = {})),
            (function (e) {
              (e.BREAK_START = "breakStart"), (e.BREAK_END = "breakEnd");
            })(d || (d = {})),
            (function (e) {
              (e.ClientSide = "csai"), (e.ServerSide = "ssai");
            })(h || (h = {})),
            (function (e) {
              (e.Preroll = "preroll"),
                (e.Midroll = "midroll"),
                (e.Postroll = "postroll");
            })(p || (p = {})),
            (function (e) {
              (e.NORMAL = "NORMAL"),
                (e.SPONSOR = "BUMPER"),
                (e.VIGNETTE = "VIGNETTE"),
                (e.TRAILER = "TRAILER");
            })(f || (f = {}));
          var g,
            y,
            T,
            A = function () {
              return (
                (A =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                      for (var n in (t = arguments[r]))
                        Object.prototype.hasOwnProperty.call(t, n) &&
                          (e[n] = t[n]);
                    return e;
                  }),
                A.apply(this, arguments)
              );
            },
            b = function (e, t, r, i) {
              return new (r || (r = Promise))(function (n, a) {
                function o(e) {
                  try {
                    c(i.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    c(i.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? n(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(o, s);
                }
                c((i = i.apply(e, t || [])).next());
              });
            },
            E = function (e, t) {
              var r,
                i,
                n,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & n[0]) throw n[1];
                    return n[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (r)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((r = 1),
                          i &&
                            (n =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((n = i.return) && n.call(i), 0)
                                : i.next) &&
                            !(n = n.call(i, a[1])).done)
                        )
                          return n;
                        switch (
                          ((i = 0), n && (a = [2 & a[0], n.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            n = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (n =
                                  (n = o.trys).length > 0 && n[n.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!n || (a[1] > n[0] && a[1] < n[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < n[1]) {
                              (o.label = n[1]), (n = a);
                              break;
                            }
                            if (n && o.label < n[2]) {
                              (o.label = n[2]), o.ops.push(a);
                              break;
                            }
                            n[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (e) {
                        (a = [6, e]), (i = 0);
                      } finally {
                        r = n = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            },
            k = function (e, t, r) {
              if (r || 2 === arguments.length)
                for (var i, n = 0, a = t.length; n < a; n++)
                  (!i && n in t) ||
                    (i || (i = Array.prototype.slice.call(t, 0, n)),
                    (i[n] = t[n]));
              return e.concat(i || Array.prototype.slice.call(t));
            },
            R = (function () {
              function e(e) {
                void 0 === e && (e = !1),
                  (this.debug = !1),
                  (this.estimatedBandwidth = 500),
                  (this.debug = !!e),
                  (this.vastParser = new n.VASTParser());
              }
              return (
                (e.prototype.getVMAP = function (e) {
                  return b(this, void 0, Promise, function () {
                    var t, r;
                    return E(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            this.debug &&
                              console.debug("[CSAIManager] getVMAP", e),
                            [4, this.fetchAdsVMAP(e)]
                          );
                        case 1:
                          return (t = i.sent()), [4, this.resolveAds(t)];
                        case 2:
                          return (
                            (r = i.sent()),
                            this.debug &&
                              console.debug(
                                "[CSAIManager] resolved VMAP to ad breaks",
                                r
                              ),
                            [2, r]
                          );
                      }
                    });
                  });
                }),
                (e.prototype.getVASTs = function (e) {
                  return b(this, void 0, Promise, function () {
                    var t, r, i, n, a, o;
                    return E(this, function (s) {
                      switch (s.label) {
                        case 0:
                          this.debug &&
                            console.debug("[CSAIManager] getVASTs", e),
                            (t = []),
                            (r = 0),
                            (i = e),
                            (s.label = 1);
                        case 1:
                          return r < i.length
                            ? ((n = i[r]),
                              [4, this.vastParser.getAndParseVAST(n.vastUrl)])
                            : [3, 4];
                        case 2:
                          if (!(a = s.sent())) return [2];
                          (o = a.ads),
                            t.push(
                              this.mapAdBreakObject(
                                { timeOffset: n.timeOffset.toString() },
                                o
                              )
                            ),
                            (s.label = 3);
                        case 3:
                          return r++, [3, 1];
                        case 4:
                          return (
                            this.debug &&
                              console.debug(
                                "[CSAIManager] resolved VAST to ad break",
                                t
                              ),
                            [2, t]
                          );
                      }
                    });
                  });
                }),
                (e.prototype.getVast = function (e) {
                  return b(this, void 0, Promise, function () {
                    var t, r, i;
                    return E(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            this.debug &&
                              console.debug("[CSAIManager] get vast", e),
                            [4, this.vastParser.getAndParseVAST(e)]
                          );
                        case 1:
                          return (t = n.sent())
                            ? ((r = t.ads),
                              (i = this.mapAdBreakObject(
                                { timeOffset: "100" },
                                r
                              )),
                              this.debug &&
                                console.debug(
                                  "[CSAIManager] resolved vast to ad break",
                                  i
                                ),
                              [2, i])
                            : [2];
                      }
                    });
                  });
                }),
                (e.prototype.fetchAdsVMAP = function (e) {
                  return b(this, void 0, Promise, function () {
                    var t, r, i;
                    return E(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, fetch(e)];
                        case 1:
                          return [4, n.sent().text()];
                        case 2:
                          return (
                            (t = n.sent()),
                            (r = new DOMParser()),
                            (i = r.parseFromString(t, "text/xml")),
                            [2, new (c(a))(i)]
                          );
                      }
                    });
                  });
                }),
                (e.prototype.resolveAds = function (e) {
                  var t;
                  return b(this, void 0, Promise, function () {
                    var r, i, n, a, o, s, c;
                    return E(this, function (l) {
                      switch (l.label) {
                        case 0:
                          (r = []), (i = 0), (n = e.adBreaks), (l.label = 1);
                        case 1:
                          return i < n.length
                            ? "linear" !== (a = n[i]).breakType
                              ? [2, r]
                              : ((o =
                                  null === (t = a.adSource) || void 0 === t
                                    ? void 0
                                    : t.vastAdData),
                                (s = []),
                                o
                                  ? ((c = {
                                      isRootVAST: !0,
                                      timeout: 1e4,
                                      withCredentials: !0,
                                      wrapperLimit: 10,
                                      followAdditionalWrappers: !0,
                                    }),
                                    this.vastParser.initParsingStatus(c),
                                    [
                                      4,
                                      this.vastParser.parseVAST(
                                        { documentElement: o },
                                        c
                                      ),
                                    ])
                                  : [3, 3])
                            : [3, 5];
                        case 2:
                          (s = l.sent().ads),
                            (this.estimatedBandwidth =
                              this.vastParser.getEstimatedBitrate()),
                            (l.label = 3);
                        case 3:
                          r.push(this.mapAdBreakObject(a, s)), (l.label = 4);
                        case 4:
                          return i++, [3, 1];
                        case 5:
                          return [2, r];
                      }
                    });
                  });
                }),
                (e.prototype.mapAdBreakObject = function (e, t) {
                  var r,
                    i,
                    n,
                    a,
                    o = this;
                  return {
                    insertionType: h.ClientSide,
                    breakType:
                      "start" === e.timeOffset || "0" === e.timeOffset
                        ? p.Preroll
                        : p.Midroll,
                    timeOffset:
                      "start" === e.timeOffset || "0" === e.timeOffset
                        ? 0
                        : m(e.timeOffset),
                    ads:
                      null == t
                        ? void 0
                        : t
                            .map(function (e) {
                              return o.mapAdsObject(e);
                            })
                            .filter(function (e) {
                              return null !== e;
                            }),
                    trackingEvents: {
                      breakStart:
                        (null ===
                          (i =
                            null === (r = e.trackingEvents) || void 0 === r
                              ? void 0
                              : r.filter(function (e) {
                                  return e.event === d.BREAK_START;
                                })) || void 0 === i
                          ? void 0
                          : i.map(function (e) {
                              return e.uri;
                            })) || [],
                      breakEnd:
                        (null ===
                          (a =
                            null === (n = e.trackingEvents) || void 0 === n
                              ? void 0
                              : n.filter(function (e) {
                                  return e.event === d.BREAK_END;
                                })) || void 0 === a
                          ? void 0
                          : a.map(function (e) {
                              return e.uri;
                            })) || [],
                    },
                  };
                }),
                (e.prototype.mapAdsObject = function (e) {
                  var t,
                    r,
                    i,
                    n,
                    a,
                    o = this,
                    s = e.extensions.find(function (e) {
                      return "AdServer" === e.attributes.type;
                    }),
                    c =
                      (null ===
                        (r =
                          null ===
                            (t =
                              null == s
                                ? void 0
                                : s.children.find(function (e) {
                                    return "AdInfo" === e.name;
                                  })) || void 0 === t
                            ? void 0
                            : t.attributes) || void 0 === r
                        ? void 0
                        : r.customaid) || void 0,
                    l =
                      (null ===
                        (n =
                          null ===
                            (i =
                              null == s
                                ? void 0
                                : s.children.find(function (e) {
                                    return "AdInfo" === e.name;
                                  })) || void 0 === i
                            ? void 0
                            : i.attributes) || void 0 === n
                        ? void 0
                        : n.variant) || f.NORMAL,
                    u = this.findCreative(
                      e.creatives.map(function (e) {
                        return o.mapCreativeObject(e);
                      })
                    );
                  return u
                    ? {
                        id: e.id,
                        customAdId: c,
                        programmatic: "PROGRAMMATIC" === c,
                        system:
                          null === (a = e.system) || void 0 === a
                            ? void 0
                            : a.value,
                        sequence: e.sequence,
                        title: e.title,
                        variant: l,
                        creative: u,
                        errorUrlTemplates: e.errorURLTemplates,
                        impressionUrlTemplates: e.impressionURLTemplates.map(
                          function (e) {
                            return e.url;
                          }
                        ),
                      }
                    : null;
                }),
                (e.prototype.findCreative = function (e) {
                  return e.find(function (e) {
                    return "linear" === e.type && e.mediafiles.length > 0;
                  });
                }),
                (e.prototype.mapCreativeObject = function (e) {
                  var t,
                    r = this;
                  return {
                    id: e.id,
                    adId: e.adId,
                    type: e.type,
                    duration: e.duration,
                    mediafiles: this.filterMediaFiles(
                      e.mediaFiles.map(function (e) {
                        return r.mapMediaFileObject(e);
                      })
                    ),
                    trackingEvents: A(
                      ((t = {}),
                      (t[u.CLICK_THROUGH] = k(
                        [],
                        e.videoClickTrackingURLTemplates,
                        !0
                      )),
                      t),
                      e.trackingEvents
                    ),
                    clickThroughUrlTemplate: e.videoClickThroughURLTemplate,
                  };
                }),
                (e.prototype.filterMediaFiles = function (e) {
                  var t = this,
                    r = e.filter(function (e) {
                      return "video/mp4" === e.mimeType;
                    }),
                    i = r.filter(function (e) {
                      return (
                        "video/mp4" === e.mimeType &&
                        e.fileUrl.length > 0 &&
                        (!e.bitrate || e.bitrate < t.estimatedBandwidth)
                      );
                    });
                  return (
                    0 === i.length && (i = r),
                    i.sort(function (e, t) {
                      return e.bitrate && t.bitrate ? e.bitrate - t.bitrate : 0;
                    })
                  );
                }),
                (e.prototype.mapMediaFileObject = function (e) {
                  return {
                    id: e.id,
                    mimeType: e.mimeType,
                    fileUrl: e.fileURL,
                    bitrate: e.bitrate,
                    height: e.height,
                    width: e.width,
                  };
                }),
                e
              );
            })(),
            w = (function () {
              function e() {
                this.emitter = c(o)();
              }
              return (
                (e.prototype.on = function (e, t) {
                  this.emitter.on.apply(this, [e, t]);
                }),
                (e.prototype.off = function (e, t) {
                  this.emitter && this.emitter.off.apply(this, [e, t]);
                }),
                (e.prototype.clear = function () {
                  this.emitter.all.clear();
                }),
                (e.prototype.emit = function (e, t) {
                  this.emitter && this.emitter.emit.apply(this, [e, t]);
                }),
                e
              );
            })(),
            C =
              ((g = function (e, t) {
                return (g =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  })(e, t);
              }),
              function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Class extends value " +
                      String(t) +
                      " is not a constructor or null"
                  );
                function r() {
                  this.constructor = e;
                }
                g(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((r.prototype = t.prototype), new r()));
              }),
            L = function (e, t, r, i) {
              return new (r || (r = Promise))(function (n, a) {
                function o(e) {
                  try {
                    c(i.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    c(i.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? n(e.value)
                    : ((t = e.value),
                      t instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })).then(o, s);
                }
                c((i = i.apply(e, t || [])).next());
              });
            },
            S = function (e, t) {
              var r,
                i,
                n,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & n[0]) throw n[1];
                    return n[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (a = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this;
                  }),
                a
              );
              function s(a) {
                return function (s) {
                  return (function (a) {
                    if (r)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((r = 1),
                          i &&
                            (n =
                              2 & a[0]
                                ? i.return
                                : a[0]
                                ? i.throw || ((n = i.return) && n.call(i), 0)
                                : i.next) &&
                            !(n = n.call(i, a[1])).done)
                        )
                          return n;
                        switch (
                          ((i = 0), n && (a = [2 & a[0], n.value]), a[0])
                        ) {
                          case 0:
                          case 1:
                            n = a;
                            break;
                          case 4:
                            return o.label++, { value: a[1], done: !1 };
                          case 5:
                            o.label++, (i = a[1]), (a = [0]);
                            continue;
                          case 7:
                            (a = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (n =
                                  (n = o.trys).length > 0 && n[n.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === a[0] &&
                              (!n || (a[1] > n[0] && a[1] < n[3]))
                            ) {
                              o.label = a[1];
                              break;
                            }
                            if (6 === a[0] && o.label < n[1]) {
                              (o.label = n[1]), (n = a);
                              break;
                            }
                            if (n && o.label < n[2]) {
                              (o.label = n[2]), o.ops.push(a);
                              break;
                            }
                            n[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        a = t.call(e, o);
                      } catch (e) {
                        (a = [6, e]), (i = 0);
                      } finally {
                        r = n = 0;
                      }
                    if (5 & a[0]) throw a[1];
                    return { value: a[0] ? a[1] : void 0, done: !0 };
                  })([a, s]);
                };
              }
            },
            N = (function (e) {
              function t(t) {
                var r = e.call(this) || this;
                return (
                  (r.debug = !1),
                  (r.autoManagePlayback = !0),
                  (r.adBreaks = []),
                  (r.adMarkers = []),
                  (r.currentAdBreakVideos = []),
                  (r.validCurrentTime = 0),
                  (r.trackedAdBreaks = {}),
                  (r.trackedAds = {}),
                  (r.debug = !!t.debug),
                  (r.initOptions = t),
                  (r.state = "idle"),
                  (r.adServerService = new v.AdServerService(r.debug)),
                  (t = (function (e) {
                    var t;
                    return (
                      e.container ||
                        e.adVideoElement ||
                        (console.warn(
                          "[CSAIManager] container or adVideoElement is expected, choosing the parent of contentVideoElement as container"
                        ),
                        (e.container = e.contentVideoElement.parentElement)),
                      e.container &&
                        e.adVideoElement &&
                        (console.warn(
                          "[CSAIManager] either container or adVideoElement is expected, not both, choosing the adVideoElement"
                        ),
                        delete e.container),
                      e.isLive ||
                        e.vmapUrl ||
                        e.adBreakVASTList ||
                        console.error(
                          "[CSAIManager] vmapUrl or adBreakVASTList is required"
                        ),
                      e.vmapUrl &&
                        e.adBreakVASTList &&
                        (console.warn(
                          "[CSAIManager] either vmapUrl or adBreakVASTList is expected, not both, choosing the adBreakVASTList"
                        ),
                        delete e.vmapUrl),
                      e.isLive &&
                        (e.vmapUrl ||
                          (null === (t = e.adBreakVASTList) || void 0 === t
                            ? void 0
                            : t.length) > 1) &&
                        console.warn(
                          "[CSAIManager] isLive is true, vmapUrl and adBreakVASTList are not expected, ignoring them"
                        ),
                      e
                    );
                  })(t)),
                  r.autoManagePlayback && t.contentVideoElement.pause(),
                  (r.contentVideoElement = t.contentVideoElement),
                  (r.adVideoElement = r.setupAdVideoElement(t)),
                  (r.videoEventFilter = new i.VideoEventFilter(
                    r.adVideoElement
                  )),
                  (r.autoManagePlayback =
                    !t.autoManagePlayback || t.autoManagePlayback),
                  r.fetchAds(t),
                  r
                );
              }
              return (
                C(t, e),
                (t.prototype.setupAdVideoElement = function (e) {
                  if (e.adVideoElement) return e.adVideoElement;
                  if (e.container) {
                    var t = (function (e) {
                      var t = document.createElement("video");
                      return (
                        (t.style.position = "absolute"),
                        (t.style.top = "0"),
                        (t.style.left = "0"),
                        (t.style.width = "100%"),
                        (t.style.height = "100%"),
                        (t.style.backgroundColor = "black"),
                        (t.style.display = "none"),
                        e &&
                          ((t.playsInline = e.playsInline),
                          (t.muted = e.muted),
                          (t.volume = e.volume)),
                        t
                      );
                    })(this.contentVideoElement);
                    return e.container.appendChild(t), t;
                  }
                }),
                (t.prototype.fetchAds = function (e) {
                  var t;
                  return L(this, void 0, Promise, function () {
                    var r, i;
                    return S(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return e.isLive &&
                            (null === (t = e.adBreakVASTList) || void 0 === t
                              ? void 0
                              : t.length) > 1
                            ? [2]
                            : e.vmapUrl
                            ? ((r = this),
                              [4, this.adServerService.getVMAP(e.vmapUrl)])
                            : [3, 2];
                        case 1:
                          (r.adBreaks = n.sent()), (n.label = 2);
                        case 2:
                          return e.adBreakVASTList
                            ? ((i = this),
                              [
                                4,
                                this.adServerService.getVASTs(
                                  e.adBreakVASTList
                                ),
                              ])
                            : [3, 4];
                        case 3:
                          (i.adBreaks = n.sent()), (n.label = 4);
                        case 4:
                          return (
                            (this.adBreaks = this.adBreaks.sort(function (
                              e,
                              t
                            ) {
                              return e.timeOffset - t.timeOffset;
                            })),
                            (this.adMarkers = this.adBreaks.map(function (e) {
                              return e.timeOffset;
                            })),
                            this.start(),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.play = function () {
                  "idle" === this.state &&
                    ((this.state = "playing"), this.playNextVideo());
                }),
                (t.prototype.fetchAdBreak = function (e) {
                  return L(this, void 0, Promise, function () {
                    var t;
                    return S(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this.adServerService.getVast(e)];
                        case 1:
                          return (t = r.sent()) && this.adBreaks.push(t), [2];
                      }
                    });
                  });
                }),
                (t.prototype.triggerAdBreak = function () {
                  return L(this, void 0, Promise, function () {
                    return S(this, function (e) {
                      return this.adBreaks && 0 !== this.adBreaks.length
                        ? (this.playAdBreak(this.adBreaks.shift()), [2])
                        : [2];
                    });
                  });
                }),
                (t.prototype.start = function () {
                  var e = this;
                  if (0 === this.adMarkers[0])
                    this.adMarkers.shift(),
                      this.playAdBreak(this.adBreaks.shift());
                  else {
                    if (
                      !this.adMarkers.find(function (t) {
                        return t > e.contentVideoElement.currentTime;
                      })
                    )
                      return;
                    this.contentVideoElement.addEventListener(
                      "timeupdate",
                      (this.onContentTimeUpdateRef =
                        this.onContentTimeUpdate.bind(this))
                    );
                  }
                }),
                (t.prototype.playAdBreak = function (e) {
                  this.autoManagePlayback && this.contentVideoElement.pause(),
                    (this.currentAdBreak = e),
                    this.trackAdBreakEvent(this.currentAdBreak, d.BREAK_START);
                  for (var t = 0, r = e.ads; t < r.length; t++) {
                    var i = r[t];
                    this.currentAdBreakVideos.push(i);
                  }
                  this.playNextVideo();
                }),
                (t.prototype.playNextVideo = function () {
                  this.videoEventFilter.clear(),
                    this.adVideoElement.removeEventListener(
                      "seeking",
                      this.onAdSeekingRef
                    );
                  var e = this.currentAdBreakVideos.shift();
                  e ? this.playAd(e) : this.playContent();
                }),
                (t.prototype.playAd = function (e) {
                  var t = this,
                    r = e.creative.mediafiles[0].fileUrl;
                  if (
                    (this.debug && console.debug("[CSAIManager] play ad", e),
                    !r)
                  )
                    return this.playNextVideo();
                  (this.currentAd = e),
                    (this.adVideoElement.style.display = "block"),
                    (this.adVideoElement.src = r),
                    ("idle" !== this.state || this.initOptions.autoplay) &&
                      this.adVideoElement.play(),
                    this.adVideoElement.addEventListener(
                      "playing",
                      function () {
                        t.trackEvent(u.START, t.currentAd),
                          t.trackEvent(u.IMPRESSION, t.currentAd),
                          (t.state = "playing");
                      },
                      { once: !0 }
                    ),
                    this.adVideoElement.addEventListener(
                      "ended",
                      function () {
                        t.trackEvent(u.COMPLETE, t.currentAd),
                          (t.state = "ended"),
                          (t.validCurrentTime = 0),
                          t.playNextVideo();
                      },
                      { once: !0 }
                    ),
                    this.videoEventFilter.addEventListener(
                      i.PlayerEvents.TimeUpdate,
                      function () {
                        t.adVideoElement.seeking ||
                          (t.validCurrentTime = t.adVideoElement.currentTime),
                          t.monitorProgress();
                      }
                    ),
                    this.videoEventFilter.addEventListener(
                      i.PlayerEvents.Pause,
                      function () {
                        t.trackEvent(u.PAUSE, t.currentAd);
                      }
                    ),
                    this.videoEventFilter.addEventListener(
                      i.PlayerEvents.Resume,
                      function () {
                        t.trackEvent(u.RESUME, t.currentAd);
                      }
                    ),
                    this.videoEventFilter.addEventListener(
                      i.PlayerEvents.Error,
                      function () {
                        t.trackEvent(u.ERROR, t.currentAd);
                      }
                    ),
                    this.adVideoElement.addEventListener(
                      "seeking",
                      (this.onAdSeekingRef = function () {
                        var e =
                          t.adVideoElement.currentTime - t.validCurrentTime;
                        Math.abs(e) > 0.01 &&
                          (t.adVideoElement.currentTime = t.validCurrentTime);
                      })
                    );
                }),
                (t.prototype.playContent = function () {
                  var e = this;
                  this.debug && console.debug("[CSAIManager] play content"),
                    (this.adVideoElement.style.display = "none"),
                    (this.adVideoElement.src = ""),
                    this.currentAdBreak &&
                      (this.trackAdBreakEvent(this.currentAdBreak, d.BREAK_END),
                      (this.currentAdBreak = null)),
                    this.autoManagePlayback && this.contentVideoElement.play();
                  var t = this.adMarkers.find(function (t) {
                    return t > e.contentVideoElement.currentTime;
                  });
                  t &&
                    (this.debug &&
                      console.debug("[CSAIManager] waiting for next break", t),
                    this.contentVideoElement.addEventListener(
                      "timeupdate",
                      (this.onContentTimeUpdateRef =
                        this.onContentTimeUpdate.bind(this))
                    ));
                }),
                (t.prototype.onContentTimeUpdate = function () {
                  this.contentVideoElement.currentTime > this.adMarkers[0] &&
                    (this.contentVideoElement.removeEventListener(
                      "timeupdate",
                      this.onContentTimeUpdateRef
                    ),
                    this.adMarkers.shift(),
                    this.playAdBreak(this.adBreaks.shift()));
                }),
                (t.prototype.monitorProgress = function () {
                  var e = this,
                    t = this.adVideoElement.currentTime,
                    r = this.adVideoElement.duration;
                  if (this.currentAd) {
                    var i = r - t,
                      n = Math.round(100 - (100 * i) / r),
                      a = {
                        25: u.FIRST_QUARTILE,
                        50: u.MIDPOINT,
                        75: u.THIRD_QUARTILE,
                      };
                    Object.keys(a).map(function (t) {
                      var r = a[t];
                      n > parseInt(t, 10) &&
                        e.currentAd &&
                        e.trackEvent(r, e.currentAd);
                    });
                  }
                }),
                (t.prototype.trackAdBreakEvent = function (e, t) {
                  var r = this;
                  e &&
                    e.trackingEvents &&
                    t &&
                    (!this.trackedAdBreaks[e.timeOffset] ||
                      !0 !== this.trackedAdBreaks[e.timeOffset][t]) &&
                    (this.trackedAdBreaks[e.timeOffset] ||
                      (this.trackedAdBreaks[e.timeOffset] = {}),
                    this.emit(t, e),
                    (e.trackingEvents[t] || []).forEach(function (e) {
                      return L(r, void 0, void 0, function () {
                        return S(this, function (r) {
                          return (
                            this.debug &&
                              console.debug(
                                "[CSAIManager] ad break tracking event -> ".concat(
                                  t
                                ),
                                e
                              ),
                            (new Image().src = e),
                            [2]
                          );
                        });
                      });
                    }),
                    (this.trackedAdBreaks[e.timeOffset][t] = !0));
                }),
                (t.prototype.trackEvent = function (e, t) {
                  var r = this;
                  if (
                    t &&
                    e &&
                    (!this.trackedAds[t.id] || !0 !== this.trackedAds[t.id][e])
                  ) {
                    this.trackedAds[t.id] || (this.trackedAds[t.id] = {});
                    var i = [];
                    switch (e) {
                      case u.IMPRESSION:
                        i = t.impressionUrlTemplates || [];
                        break;
                      case u.ERROR:
                        i = t.errorUrlTemplates || [];
                        break;
                      default:
                        i = t.creative.trackingEvents[e] || [];
                    }
                    this.emit(e, t),
                      null == i ||
                        i.forEach(function (t) {
                          return L(r, void 0, void 0, function () {
                            return S(this, function (r) {
                              return (
                                this.debug &&
                                  console.debug(
                                    "[CSAIManager] ad tracking event -> ".concat(
                                      e
                                    ),
                                    t
                                  ),
                                (new Image().src = t),
                                [2]
                              );
                            });
                          });
                        }),
                      (this.trackedAds[t.id][e] = !0);
                  }
                }),
                (t.prototype.destroy = function () {
                  (this.adBreaks = []),
                    (this.adMarkers = []),
                    (this.currentAd = null),
                    (this.currentAdBreak = null),
                    (this.currentAdBreakVideos = []),
                    (this.onContentTimeUpdateRef = null),
                    (this.onAdSeekingRef = null),
                    (this.trackedAdBreaks = {}),
                    (this.trackedAds = {}),
                    this.videoEventFilter.clear(),
                    this.videoEventFilter.destroy(),
                    this.initOptions.adVideoElement ||
                      this.adVideoElement.remove();
                }),
                t
              );
            })(w);
          (y = e.exports),
            (T = l),
            Object.keys(T).forEach(function (e) {
              "default" === e ||
                "__esModule" === e ||
                y.hasOwnProperty(e) ||
                Object.defineProperty(y, e, {
                  enumerable: !0,
                  get: function () {
                    return T[e];
                  },
                });
            });
        },
        155: (e, t, r) => {
          var i = r(734);
          function n(e, t, r, i) {
            Object.defineProperty(e, t, {
              get: r,
              set: i,
              enumerable: !0,
              configurable: !0,
            });
          }
          n(e.exports, "VideoEventFilter", () => a.VideoEventFilter),
            n(e.exports, "PlayerEvents", () => a.PlayerEvents),
            n(e.exports, "PlayerState", () => a.PlayerState);
          var a = {};
          n(
            a,
            "PlayerState",
            () => s,
            (e) => (s = e)
          ),
            n(
              a,
              "PlayerEvents",
              () => c,
              (e) => (c = e)
            ),
            n(
              a,
              "VideoEventFilter",
              () => v,
              (e) => (v = e)
            );
          var o,
            s,
            c,
            l,
            u,
            d,
            h,
            p = (function () {
              function e() {
                var e;
                this.emitter = ((e = i) && e.__esModule ? e.default : e)();
              }
              return (
                (e.prototype.addEventListener = function (e, t) {
                  this.emitter.on.apply(this, [e, t]);
                }),
                (e.prototype.removeEventListener = function (e, t) {
                  this.emitter && this.emitter.off.apply(this, [e, t]);
                }),
                (e.prototype.clear = function () {
                  this.emitter.all.clear();
                }),
                (e.prototype.emit = function (e, t) {
                  this.emitter && this.emitter.emit.apply(this, [e, t]);
                }),
                (e.prototype.destroy = function () {
                  this.emitter.all.clear(), (this.emitter = null);
                }),
                e
              );
            })(),
            f =
              ((o = function (e, t) {
                return (o =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  })(e, t);
              }),
              function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Class extends value " +
                      String(t) +
                      " is not a constructor or null"
                  );
                function r() {
                  this.constructor = e;
                }
                o(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((r.prototype = t.prototype), new r()));
              });
          !(function (e) {
            (e.Idle = "idle"),
              (e.Loading = "loading"),
              (e.Playing = "playing"),
              (e.Paused = "paused"),
              (e.Buffering = "buffering"),
              (e.Seeking = "seeking"),
              (e.Ended = "ended");
          })(s || (s = {})),
            (function (e) {
              (e.Loading = "loading"),
                (e.Loaded = "loaded"),
                (e.Play = "play"),
                (e.Resume = "resume"),
                (e.Pause = "pause"),
                (e.Seeking = "seeking"),
                (e.Seeked = "seeked"),
                (e.Buffering = "buffering"),
                (e.Buffered = "buffered"),
                (e.TimeUpdate = "timeupdate"),
                (e.Ended = "ended"),
                (e.Error = "error");
            })(c || (c = {})),
            ((u = l || (l = {}))[(u.NETWORK_EMPTY = 0)] = "NETWORK_EMPTY"),
            (u[(u.NETWORK_IDLE = 1)] = "NETWORK_IDLE"),
            (u[(u.NETWORK_LOADING = 2)] = "NETWORK_LOADING"),
            (u[(u.NETWORK_NO_SOURCE = 3)] = "NETWORK_NO_SOURCE"),
            ((h = d || (d = {}))[(h.HAVE_NOTHING = 0)] = "HAVE_NOTHING"),
            (h[(h.HAVE_METADATA = 1)] = "HAVE_METADATA"),
            (h[(h.HAVE_CURRENT_DATA = 2)] = "HAVE_CURRENT_DATA"),
            (h[(h.HAVE_FUTURE_DATA = 3)] = "HAVE_FUTURE_DATA"),
            (h[(h.HAVE_ENOUGH_DATA = 4)] = "HAVE_ENOUGH_DATA");
          var v = (function (e) {
            function t(t) {
              var r = e.call(this) || this;
              return (
                (r.listeners = []),
                (r.videoElement = t),
                "string" == typeof t &&
                  (r.videoElement = document.querySelector(t)),
                (r.state = (function (e) {
                  return e.readyState === d.HAVE_NOTHING &&
                    e.networkState === l.NETWORK_EMPTY
                    ? s.Idle
                    : e.networkState === l.NETWORK_LOADING
                    ? s.Loading
                    : e.ended
                    ? s.Ended
                    : e.paused
                    ? s.Paused
                    : s.Playing;
                })(t)),
                r.setupEventListeners(),
                r
              );
            }
            return (
              f(t, e),
              (t.prototype.setupEventListeners = function () {
                this.addListener("loadstart", this.onLoading),
                  this.addListener("loadeddata", this.onLoaded),
                  this.addListener("playing", this.onPlaying),
                  this.addListener("pause", this.onPause),
                  this.addListener("seeking", this.onSeeking),
                  this.addListener("seeked", this.onSeeked),
                  this.addListener("waiting", this.onBuffering),
                  this.addListener("timeupdate", this.onTimeUpdate),
                  this.addListener("error", this.onError),
                  this.addListener("ended", this.onEnded);
              }),
              (t.prototype.addListener = function (e, t) {
                var r = t.bind(this);
                this.videoElement.addEventListener(e, r),
                  this.listeners.push({ type: e, handler: r });
              }),
              (t.prototype.onLoading = function () {
                this.state !== s.Loading &&
                  (this.setState(s.Loading), this.emit(c.Loading));
              }),
              (t.prototype.onLoaded = function () {
                this.state === s.Loading && this.emit(c.Loaded);
              }),
              (t.prototype.onPlaying = function () {
                this.state === s.Ended && this.setState(s.Loading),
                  [s.Loading, s.Paused].includes(this.state) &&
                    (this.state === s.Loading && this.emit(c.Play),
                    this.state === s.Paused &&
                      ((this.lastState = s.Paused), this.emit(c.Resume)),
                    this.setState(s.Playing, !0)),
                  this.state === s.Buffering && this.onBuffered();
              }),
              (t.prototype.onPause = function () {
                var e = this;
                this.state === s.Playing &&
                  (clearTimeout(this.pauseDebounce),
                  (this.pauseDebounce = window.setTimeout(function () {
                    e.emit(c.Pause), e.setState(s.Paused, !0);
                  }, 200)));
              }),
              (t.prototype.onSeeking = function () {
                [s.Loading, s.Seeking, s.Ended].includes(this.state) ||
                  (clearTimeout(this.pauseDebounce),
                  this.setState(s.Seeking, !0),
                  this.emit(c.Seeking));
              }),
              (t.prototype.onSeeked = function () {
                this.state === s.Seeking &&
                  (this.setState(this.lastState, !0), this.emit(c.Seeked));
              }),
              (t.prototype.onBuffering = function () {
                [s.Loading, s.Buffering, s.Seeking, s.Ended].includes(
                  this.state
                ) || (this.setState(s.Buffering, !0), this.emit(c.Buffering));
              }),
              (t.prototype.onBuffered = function () {
                this.state === s.Buffering &&
                  (this.setState(this.lastState, !0), this.emit(c.Buffered));
              }),
              (t.prototype.onTimeUpdate = function () {
                this.videoElement.seeking ||
                  [
                    s.Loading,
                    s.Paused,
                    s.Seeking,
                    s.Buffering,
                    s.Ended,
                  ].includes(this.state) ||
                  this.emit(c.TimeUpdate);
              }),
              (t.prototype.onEnded = function () {
                clearTimeout(this.pauseDebounce),
                  this.state !== s.Ended &&
                    (this.setState(s.Ended), this.emit(c.Ended));
              }),
              (t.prototype.onError = function () {
                this.state !== s.Ended &&
                  (this.emit(c.Error, this.videoElement.error), this.onEnded());
              }),
              (t.prototype.getState = function () {
                return this.state;
              }),
              (t.prototype.setState = function (e, t) {
                t && this.updateLastState(this.state), (this.state = e);
              }),
              (t.prototype.updateLastState = function (e) {
                this.lastState = e || this.state;
              }),
              (t.prototype.destroy = function () {
                var t = this;
                this.listeners.forEach(function (e) {
                  var r = e.type,
                    i = e.handler;
                  t.videoElement.removeEventListener(r, i);
                }),
                  e.prototype.destroy.call(this);
              }),
              t
            );
          })(p);
        },
        734: (e, t, r) => {
          "use strict";
          function i(e) {
            return {
              all: (e = e || new Map()),
              on: function (t, r) {
                var i = e.get(t);
                (i && i.push(r)) || e.set(t, [r]);
              },
              off: function (t, r) {
                var i = e.get(t);
                i && i.splice(i.indexOf(r) >>> 0, 1);
              },
              emit: function (t, r) {
                (e.get(t) || []).slice().map(function (e) {
                  e(r);
                }),
                  (e.get("*") || []).slice().map(function (e) {
                    e(t, r);
                  });
              },
            };
          }
          r.r(t), r.d(t, { default: () => i });
        },
        357: (e, t, r) => {
          var i = r(187),
            n = r(270),
            a = r(291);
          function o(e, t, r, i) {
            Object.defineProperty(e, t, {
              get: r,
              set: i,
              enumerable: !0,
              configurable: !0,
            });
          }
          o(e.exports, "WebRTCPlayer", () => m),
            o(e.exports, "ListAvailableAdapters", () => p);
          class s {
            client = void 0;
            localPeer = void 0;
            debug = !1;
            constructor(e, t, r) {
              (this.channelUrl = t), this.resetPeer(e);
            }
            enableDebug() {
              this.debug = !0;
            }
            resetPeer(e) {
              this.localPeer = e;
            }
            getPeer() {
              return this.localPeer;
            }
            async connect(e) {
              this.localPeer &&
                ((this.client = new (0, a.WHPPClient)(
                  this.localPeer,
                  this.channelUrl,
                  { debug: this.debug }
                )),
                await this.client.connect());
            }
            async disconnect() {}
            log(...e) {
              this.debug && console.log("WebRTC-player", ...e);
            }
            error(...e) {
              console.error("WebRTC-player", ...e);
            }
          }
          class c {
            waitingForCandidates = !1;
            resourceUrl = void 0;
            constructor(e, t, r) {
              (this.channelUrl = t), (this.debug = !0), this.resetPeer(e);
            }
            enableDebug() {
              this.debug = !0;
            }
            resetPeer(e) {
              (this.localPeer = e),
                (this.localPeer.onicegatheringstatechange =
                  this.onIceGatheringStateChange.bind(this)),
                (this.localPeer.oniceconnectionstatechange =
                  this.onIceConnectionStateChange.bind(this)),
                (this.localPeer.onicecandidateerror =
                  this.onIceCandidateError.bind(this)),
                (this.localPeer.onicecandidate =
                  this.onIceCandidate.bind(this));
            }
            getPeer() {
              return this.localPeer;
            }
            async connect(e) {
              if (!this.localPeer)
                return void this.log("Local RTC peer not initialized");
              this.localPeer.addTransceiver("video", { direction: "recvonly" }),
                this.localPeer.addTransceiver("audio", {
                  direction: "recvonly",
                });
              const t = await this.localPeer.createOffer({
                offerToReceiveAudio: !0,
                offerToReceiveVideo: !0,
              });
              this.localPeer.setLocalDescription(t),
                (this.waitingForCandidates = !0),
                (this.iceGatheringTimeout = setTimeout(
                  this.onIceGatheringTimeout.bind(this),
                  (e && e.timeout) || 2e3
                ));
            }
            async disconnect() {}
            log(...e) {
              this.debug && console.log("WebRTC-player", ...e);
            }
            error(...e) {
              console.error("WebRTC-player", ...e);
            }
            onIceGatheringStateChange(e) {
              this.localPeer
                ? (this.log(
                    "IceGatheringState",
                    this.localPeer.iceGatheringState
                  ),
                  "complete" === this.localPeer.iceGatheringState &&
                    this.waitingForCandidates &&
                    this.onDoneWaitingForCandidates())
                : this.log("Local RTC peer not initialized");
            }
            onIceConnectionStateChange() {
              this.localPeer
                ? (this.log(
                    "IceConnectionState",
                    this.localPeer.iceConnectionState
                  ),
                  "failed" === this.localPeer.iceConnectionState &&
                    this.localPeer.close())
                : this.log("Local RTC peer not initialized");
            }
            async onIceCandidate(e) {
              if ("icecandidate" !== e.type) return;
              const t = e.candidate;
              t && this.log("IceCandidate", t.candidate);
            }
            onIceCandidateError(e) {
              this.log("IceCandidateError", e);
            }
            onIceGatheringTimeout() {
              this.log("IceGatheringTimeout"),
                this.waitingForCandidates && this.onDoneWaitingForCandidates();
            }
            async onDoneWaitingForCandidates() {
              if (!this.localPeer)
                return void this.log("Local RTC peer not initialized");
              (this.waitingForCandidates = !1),
                clearTimeout(this.iceGatheringTimeout);
              const e = await fetch(this.channelUrl.toString(), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  sdp: this.localPeer.localDescription?.sdp,
                }),
              });
              if (e.ok) {
                const { sdp: t } = await e.json();
                this.localPeer.setRemoteDescription({ type: "answer", sdp: t });
              }
            }
          }
          let l;
          var u;
          ((u = l || (l = {}))[(u.Client = 0)] = "Client"),
            (u[(u.Server = 1)] = "Server");
          class d {
            debug = !1;
            waitingForCandidates = !1;
            resource = null;
            constructor(e, t, r) {
              if (((this.channelUrl = t), "string" == typeof this.channelUrl))
                throw new Error(
                  "channelUrl parameter expected to be an URL not a string"
                );
              (this.whepType = l.Client),
                (this.onErrorHandler = r),
                (this.audio = !0),
                this.resetPeer(e);
            }
            enableDebug() {
              this.debug = !0;
            }
            resetPeer(e) {
              (this.localPeer = e),
                (this.localPeer.onicegatheringstatechange =
                  this.onIceGatheringStateChange.bind(this)),
                (this.localPeer.onicecandidate =
                  this.onIceCandidate.bind(this));
            }
            getPeer() {
              return this.localPeer;
            }
            async connect(e) {
              try {
                await this.initSdpExchange();
              } catch (e) {
                console.error(e.toString());
              }
            }
            async disconnect() {
              this.resource &&
                (this.log(
                  `Disconnecting by removing resource ${this.resource}`
                ),
                (await fetch(this.resource, { method: "DELETE" })).ok &&
                  this.log("Successfully removed resource"));
            }
            async initSdpExchange() {
              if (
                (clearTimeout(this.iceGatheringTimeout),
                this.localPeer && this.whepType === l.Client)
              ) {
                this.localPeer.addTransceiver("video", {
                  direction: "recvonly",
                }),
                  this.audio &&
                    this.localPeer.addTransceiver("audio", {
                      direction: "recvonly",
                    });
                const e = await this.localPeer.createOffer();
                await this.localPeer.setLocalDescription(e),
                  (this.waitingForCandidates = !0),
                  (this.iceGatheringTimeout = setTimeout(
                    this.onIceGatheringTimeout.bind(this),
                    2e3
                  ));
              } else if (this.localPeer) {
                const e = await this.requestOffer();
                await this.localPeer.setRemoteDescription({
                  type: "offer",
                  sdp: e,
                });
                const t = await this.localPeer.createAnswer();
                try {
                  await this.localPeer.setLocalDescription(t),
                    (this.waitingForCandidates = !0),
                    (this.iceGatheringTimeout = setTimeout(
                      this.onIceGatheringTimeout.bind(this),
                      2e3
                    ));
                } catch (e) {
                  throw (this.log(t.sdp), e);
                }
              }
            }
            async onIceCandidate(e) {
              if ("icecandidate" !== e.type) return;
              const t = e.candidate;
              t && this.log(t.candidate);
            }
            onIceGatheringStateChange(e) {
              if (this.localPeer) {
                if (
                  (this.log(
                    "IceGatheringState",
                    this.localPeer.iceGatheringState
                  ),
                  "complete" !== this.localPeer.iceGatheringState ||
                    !this.waitingForCandidates)
                )
                  return;
                this.onDoneWaitingForCandidates();
              }
            }
            onIceGatheringTimeout() {
              this.log("IceGatheringTimeout"),
                this.waitingForCandidates && this.onDoneWaitingForCandidates();
            }
            async onDoneWaitingForCandidates() {
              (this.waitingForCandidates = !1),
                clearTimeout(this.iceGatheringTimeout),
                this.whepType === l.Client
                  ? await this.sendOffer()
                  : await this.sendAnswer();
            }
            getResouceUrlFromHeaders(e) {
              return e.get("Location") && e.get("Location")?.match(/^\//)
                ? new URL(e.get("Location"), this.channelUrl.origin).toString()
                : e.get("Location");
            }
            async requestOffer() {
              if (this.whepType === l.Server) {
                this.log(`Requesting offer from: ${this.channelUrl}`);
                const e = await fetch(this.channelUrl.toString(), {
                  method: "POST",
                  headers: { "Content-Type": "application/sdp" },
                  body: "",
                });
                if (e.ok) {
                  (this.resource = this.getResouceUrlFromHeaders(e.headers)),
                    this.log("WHEP Resource", this.resource);
                  const t = await e.text();
                  return this.log("Received offer", t), t;
                }
                {
                  const t = await e.text();
                  throw new Error(t);
                }
              }
            }
            async sendAnswer() {
              if (this.localPeer) {
                if (this.whepType === l.Server && this.resource) {
                  const e = this.localPeer.localDescription;
                  if (e) {
                    const t = await fetch(this.resource, {
                      method: "PATCH",
                      headers: { "Content-Type": "application/sdp" },
                      body: e.sdp,
                    });
                    t.ok || this.error(`sendAnswer response: ${t.status}`);
                  }
                }
              } else this.log("Local RTC peer not initialized");
            }
            async sendOffer() {
              if (!this.localPeer)
                return void this.log("Local RTC peer not initialized");
              const e = this.localPeer.localDescription;
              if (this.whepType === l.Client && e) {
                this.log(`Sending offer to ${this.channelUrl}`);
                const t = await fetch(this.channelUrl.toString(), {
                  method: "POST",
                  headers: { "Content-Type": "application/sdp" },
                  body: e.sdp,
                });
                if (t.ok) {
                  (this.resource = this.getResouceUrlFromHeaders(t.headers)),
                    this.log("WHEP Resource", this.resource);
                  const e = await t.text();
                  await this.localPeer.setRemoteDescription({
                    type: "answer",
                    sdp: e,
                  });
                } else
                  400 === t.status
                    ? (this.log(
                        "server does not support client-offer, need to reconnect"
                      ),
                      (this.whepType = l.Server),
                      this.onErrorHandler("reconnectneeded"))
                    : 406 === t.status && this.audio
                    ? (this.log(
                        "maybe server does not support audio. Let's retry without audio"
                      ),
                      (this.audio = !1),
                      this.onErrorHandler("reconnectneeded"))
                    : (this.error(`sendAnswer response: ${t.status}`),
                      this.onErrorHandler("connectionfailed"));
              }
            }
            log(...e) {
              this.debug && console.log("WebRTC-player", ...e);
            }
            error(...e) {
              console.error("WebRTC-player", ...e);
            }
          }
          const h = {
            "se.eyevinn.whpp": (e, t, r) => new s(e, t, r),
            "se.eyevinn.webrtc": (e, t, r) => new c(e, t, r),
            whep: (e, t, r) => new d(e, t, r),
          };
          function p() {
            return Object.keys(h);
          }
          let f;
          var v;
          ((v = f || (f = {})).NO_MEDIA = "no-media"),
            (v.MEDIA_RECOVERED = "media-recovered"),
            (v.PEER_CONNECTION_FAILED = "peer-connection-failed"),
            (v.INITIAL_CONNECTION_FAILED = "initial-connection-failed");
          class m extends i.EventEmitter {
            peer = {};
            adapterFactory = void 0;
            channelUrl = {};
            reconnectAttemptsLeft = 2;
            adapter = {};
            statsTypeFilter = void 0;
            msStatsInterval = 5e3;
            mediaTimeoutOccured = !1;
            mediaTimeoutThreshold = 3e4;
            timeoutThresholdCounter = 0;
            bytesReceived = 0;
            constructor(e) {
              super(),
                (this.videoElement = e.video),
                (this.adapterType = e.type),
                (this.adapterFactory = e.adapterFactory),
                (this.statsTypeFilter = e.statsTypeFilter),
                (this.mediaTimeoutThreshold =
                  e.timeoutThreshold ?? this.mediaTimeoutThreshold),
                (this.iceServers = [{ urls: "stun:stun.l.google.com:19302" }]),
                e.iceServers && (this.iceServers = e.iceServers),
                (this.debug = !!e.debug),
                e.vmapUrl &&
                  ((this.csaiManager = new (0, n.CSAIManager)({
                    contentVideoElement: this.videoElement,
                    vmapUrl: e.vmapUrl,
                    isLive: !0,
                    autoplay: !0,
                  })),
                  this.videoElement.addEventListener("ended", () => {
                    this.csaiManager && this.csaiManager.destroy();
                  }));
            }
            async load(e) {
              (this.channelUrl = e), this.connect();
            }
            log(...e) {
              this.debug && console.log("WebRTC-player", ...e);
            }
            error(...e) {
              console.error("WebRTC-player", ...e);
            }
            async onConnectionStateChange() {
              if ("failed" === this.peer.connectionState) {
                if (
                  (this.emit(f.PEER_CONNECTION_FAILED),
                  this.peer && this.peer.close(),
                  this.reconnectAttemptsLeft <= 0)
                )
                  return void this.error(
                    "Connection failed, reconnecting failed"
                  );
                this.log(
                  `Connection failed, recreating peer connection, attempts left ${this.reconnectAttemptsLeft}`
                ),
                  await this.connect(),
                  this.reconnectAttemptsLeft--;
              } else
                "connected" === this.peer.connectionState &&
                  (this.log("Connected"), (this.reconnectAttemptsLeft = 2));
            }
            onErrorHandler(e) {
              switch ((this.log(`onError=${e}`), e)) {
                case "reconnectneeded":
                  this.peer && this.peer.close(),
                    (this.videoElement.srcObject = null),
                    this.setupPeer(),
                    this.adapter.resetPeer(this.peer),
                    this.adapter.connect();
                  break;
                case "connectionfailed":
                  this.peer && this.peer.close(),
                    (this.videoElement.srcObject = null),
                    this.emit(f.INITIAL_CONNECTION_FAILED);
              }
            }
            async onConnectionStats() {
              if (this.peer && this.statsTypeFilter) {
                let e = 0;
                (await this.peer.getStats(null)).forEach((t) => {
                  t.type.match(this.statsTypeFilter) &&
                    this.emit(`stats:${t.type}`, t),
                    t.type.match("inbound-rtp") && (e += t.bytesReceived);
                }),
                  e <= this.bytesReceived
                    ? ((this.timeoutThresholdCounter += this.msStatsInterval),
                      !1 === this.mediaTimeoutOccured &&
                        this.timeoutThresholdCounter >=
                          this.mediaTimeoutThreshold &&
                        (this.emit(f.NO_MEDIA),
                        (this.mediaTimeoutOccured = !0)))
                    : ((this.bytesReceived = e),
                      (this.timeoutThresholdCounter = 0),
                      1 == this.mediaTimeoutOccured &&
                        (this.emit(f.MEDIA_RECOVERED),
                        (this.mediaTimeoutOccured = !1)));
              }
            }
            setupPeer() {
              (this.peer = new RTCPeerConnection({
                iceServers: this.iceServers,
              })),
                (this.peer.onconnectionstatechange =
                  this.onConnectionStateChange.bind(this)),
                (this.peer.ontrack = this.onTrack.bind(this));
            }
            onTrack(e) {
              for (const t of e.streams)
                "feedbackvideomslabel" === t.id ||
                  this.videoElement.srcObject ||
                  (console.log(
                    "Set video element remote stream to " + t.id,
                    " audio " +
                      t.getAudioTracks().length +
                      " video " +
                      t.getVideoTracks().length
                  ),
                  (this.videoElement.srcObject = t));
            }
            async connect() {
              var e, t, r, i;
              if (
                (this.setupPeer(),
                "custom" !== this.adapterType
                  ? (this.adapter =
                      ((e = this.adapterType),
                      (t = this.peer),
                      (r = this.channelUrl),
                      (i = this.onErrorHandler.bind(this)),
                      h[e](t, r, i)))
                  : this.adapterFactory &&
                    (this.adapter = this.adapterFactory(
                      this.peer,
                      this.channelUrl,
                      this.onErrorHandler.bind(this)
                    )),
                !this.adapter)
              )
                throw new Error(
                  `Failed to create adapter (${this.adapterType})`
                );
              this.debug && this.adapter.enableDebug(),
                (this.statsInterval = setInterval(
                  this.onConnectionStats.bind(this),
                  this.msStatsInterval
                ));
              try {
                await this.adapter.connect();
              } catch (e) {
                console.error(e), this.stop();
              }
            }
            mute() {
              this.videoElement.muted = !0;
            }
            unmute() {
              this.videoElement.muted = !1;
            }
            async unload() {
              await this.adapter.disconnect(), this.stop();
            }
            stop() {
              clearInterval(this.statsInterval),
                this.peer.close(),
                (this.videoElement.srcObject = null),
                this.videoElement.load();
            }
            destroy() {
              this.stop(), this.removeAllListeners();
            }
          }
        },
        291: (e, t, r) => {
          "use strict";
          r.r(t), r.d(t, { WHPPClient: () => i });
          var i = (function () {
            function e(e, t, r) {
              (this.localPeer = void 0),
                (this.whppUrl = void 0),
                (this.iceGatheringTimeout = void 0),
                (this.waitingForCandidates = !1),
                (this.resourceUrl = void 0),
                (this.opts = void 0),
                (this.localPeer = e),
                (this.whppUrl = t),
                (this.opts = r),
                (this.localPeer.onicegatheringstatechange =
                  this.onIceGatheringStateChange.bind(this)),
                (this.localPeer.oniceconnectionstatechange =
                  this.onIceConnectionStateChange.bind(this)),
                (this.localPeer.onicecandidateerror =
                  this.onIceCandidateError.bind(this)),
                (this.localPeer.onicecandidate =
                  this.onIceCandidate.bind(this));
            }
            var t = e.prototype;
            return (
              (t.getPeer = function () {
                return this.localPeer;
              }),
              (t.connect = function () {
                try {
                  var e,
                    t = this;
                  return Promise.resolve(
                    fetch(t.whppUrl.href, {
                      method: "POST",
                      headers: {
                        "Content-Type":
                          null != (e = t.opts) && e.useLegacyContentType
                            ? "application/json"
                            : "application/whpp+json",
                      },
                      body: "{}",
                    })
                  ).then(function (e) {
                    var r;
                    function i(i) {
                      return r
                        ? i
                        : Promise.resolve(e.json()).then(function (r) {
                            var i = e.headers.get("location");
                            return (
                              (t.resourceUrl = new URL(i)),
                              t.log(r.offer),
                              Promise.resolve(
                                (function (e) {
                                  try {
                                    return Promise.resolve(
                                      fetch(e.href, { method: "OPTIONS" })
                                    ).then(function (e) {
                                      return !(
                                        !e.ok ||
                                        !e.headers.get("Allow") ||
                                        !e.headers
                                          .get("Allow")
                                          .split(",")
                                          .find(function (e) {
                                            return "PATCH" === e.trimStart();
                                          })
                                      );
                                    });
                                  } catch (e) {
                                    return Promise.reject(e);
                                  }
                                })(t.resourceUrl)
                              ).then(function (e) {
                                return (
                                  t.log(
                                    "ICE trickle supported by endpoint: " + e
                                  ),
                                  t.opts || (t.opts = {}),
                                  (t.opts.noIceTrickle = !e),
                                  t.supportsTrickleIce() ||
                                    (t.waitingForCandidates = !0),
                                  Promise.resolve(
                                    t.localPeer.setRemoteDescription({
                                      type: "offer",
                                      sdp: r.offer,
                                    })
                                  ).then(function () {
                                    return Promise.resolve(
                                      t.localPeer.createAnswer()
                                    ).then(function (e) {
                                      return Promise.resolve(
                                        t.localPeer.setLocalDescription(e)
                                      ).then(function () {
                                        var e = (function () {
                                          if (t.supportsTrickleIce())
                                            return (
                                              t.log(
                                                "ICE trickle supported, sending answer"
                                              ),
                                              Promise.resolve(
                                                t.sendAnswer()
                                              ).then(function () {})
                                            );
                                          var e;
                                          t.iceGatheringTimeout = setTimeout(
                                            t.onIceGatheringTimeout.bind(t),
                                            (null == (e = t.opts)
                                              ? void 0
                                              : e.timeout) || 2e3
                                          );
                                        })();
                                        if (e && e.then)
                                          return e.then(function () {});
                                      });
                                    });
                                  })
                                );
                              })
                            );
                          });
                    }
                    var n = (function () {
                      if (!e.ok)
                        return (function () {
                          if (415 === e.status)
                            return (
                              (t.opts.useLegacyContentType = !0),
                              Promise.resolve(
                                fetch(t.whppUrl.href, {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: "{}",
                                })
                              ).then(function (t) {
                                e = t;
                              })
                            );
                          r = 1;
                        })();
                    })();
                    return n && n.then ? n.then(i) : i(n);
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (t.log = function () {
                var e, t;
                null != (e = this.opts) &&
                  e.debug &&
                  (t = console).log.apply(
                    t,
                    ["whpp-client"].concat([].slice.call(arguments))
                  );
              }),
              (t.error = function () {
                var e;
                (e = console).error.apply(
                  e,
                  ["whpp-client"].concat([].slice.call(arguments))
                );
              }),
              (t.onIceGatheringStateChange = function (e) {
                this.log("IceGatheringState", this.localPeer.iceGatheringState),
                  "complete" === this.localPeer.iceGatheringState &&
                    !this.supportsTrickleIce() &&
                    this.waitingForCandidates &&
                    this.onDoneWaitingForCandidates();
              }),
              (t.onIceConnectionStateChange = function (e) {
                this.log(
                  "IceConnectionState",
                  this.localPeer.iceConnectionState
                ),
                  "failed" === this.localPeer.iceConnectionState &&
                    this.localPeer.close();
              }),
              (t.onIceCandidate = function (e) {
                try {
                  var t = this;
                  if ("icecandidate" !== e.type) return Promise.resolve();
                  var r = e.candidate;
                  return r
                    ? (t.log("IceCandidate", r.candidate),
                      t.supportsTrickleIce()
                        ? (t.sendCandidate(r), Promise.resolve())
                        : Promise.resolve())
                    : Promise.resolve();
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (t.onIceCandidateError = function (e) {
                this.log("IceCandidateError", e);
              }),
              (t.onIceGatheringTimeout = function () {
                this.log("IceGatheringTimeout"),
                  !this.supportsTrickleIce() &&
                    this.waitingForCandidates &&
                    this.onDoneWaitingForCandidates();
              }),
              (t.supportsTrickleIce = function () {
                return this.opts && !this.opts.noIceTrickle;
              }),
              (t.onDoneWaitingForCandidates = function () {
                try {
                  var e = this;
                  return (
                    (e.waitingForCandidates = !1),
                    clearTimeout(e.iceGatheringTimeout),
                    Promise.resolve(e.sendAnswer()).then(function () {})
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (t.sendCandidate = function (e) {
                try {
                  var t,
                    r = this;
                  return Promise.resolve(
                    fetch(r.resourceUrl.href, {
                      method: "PATCH",
                      headers: {
                        "Content-Type":
                          null != (t = r.opts) && t.useLegacyContentType
                            ? "application/json"
                            : "application/whpp+json",
                      },
                      body: JSON.stringify({ candidate: e.candidate }),
                    })
                  ).then(function (e) {
                    e.ok ||
                      (r.error("sendCandidate response: " + e.status),
                      405 === e.status &&
                        r.log("ICE trickle not supported by endpoint"));
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (t.sendAnswer = function () {
                try {
                  var e,
                    t = this,
                    r = { answer: t.localPeer.localDescription.sdp };
                  return (
                    t.log(r.answer),
                    Promise.resolve(
                      fetch(t.resourceUrl.href, {
                        method: "PUT",
                        headers: {
                          "Content-Type":
                            null != (e = t.opts) && e.useLegacyContentType
                              ? "application/json"
                              : "application/whpp+json",
                        },
                        body: JSON.stringify(r),
                      })
                    ).then(function (e) {
                      e.ok || t.error("sendAnswer response: " + e.status);
                    })
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              e
            );
          })();
        },
        187: (e) => {
          "use strict";
          var t,
            r = "object" == typeof Reflect ? Reflect : null,
            i =
              r && "function" == typeof r.apply
                ? r.apply
                : function (e, t, r) {
                    return Function.prototype.apply.call(e, t, r);
                  };
          t =
            r && "function" == typeof r.ownKeys
              ? r.ownKeys
              : Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e)
                  );
                }
              : function (e) {
                  return Object.getOwnPropertyNames(e);
                };
          var n =
            Number.isNaN ||
            function (e) {
              return e != e;
            };
          function a() {
            a.init.call(this);
          }
          (e.exports = a),
            (e.exports.once = function (e, t) {
              return new Promise(function (r, i) {
                function n(r) {
                  e.removeListener(t, a), i(r);
                }
                function a() {
                  "function" == typeof e.removeListener &&
                    e.removeListener("error", n),
                    r([].slice.call(arguments));
                }
                v(e, t, a, { once: !0 }),
                  "error" !== t &&
                    (function (e, t, r) {
                      "function" == typeof e.on &&
                        v(e, "error", t, { once: !0 });
                    })(e, n);
              });
            }),
            (a.EventEmitter = a),
            (a.prototype._events = void 0),
            (a.prototype._eventsCount = 0),
            (a.prototype._maxListeners = void 0);
          var o = 10;
          function s(e) {
            if ("function" != typeof e)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof e
              );
          }
          function c(e) {
            return void 0 === e._maxListeners
              ? a.defaultMaxListeners
              : e._maxListeners;
          }
          function l(e, t, r, i) {
            var n, a, o, l;
            if (
              (s(r),
              void 0 === (a = e._events)
                ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
                : (void 0 !== a.newListener &&
                    (e.emit("newListener", t, r.listener ? r.listener : r),
                    (a = e._events)),
                  (o = a[t])),
              void 0 === o)
            )
              (o = a[t] = r), ++e._eventsCount;
            else if (
              ("function" == typeof o
                ? (o = a[t] = i ? [r, o] : [o, r])
                : i
                ? o.unshift(r)
                : o.push(r),
              (n = c(e)) > 0 && o.length > n && !o.warned)
            ) {
              o.warned = !0;
              var u = new Error(
                "Possible EventEmitter memory leak detected. " +
                  o.length +
                  " " +
                  String(t) +
                  " listeners added. Use emitter.setMaxListeners() to increase limit"
              );
              (u.name = "MaxListenersExceededWarning"),
                (u.emitter = e),
                (u.type = t),
                (u.count = o.length),
                (l = u),
                console && console.warn && console.warn(l);
            }
            return e;
          }
          function u() {
            if (!this.fired)
              return (
                this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                0 === arguments.length
                  ? this.listener.call(this.target)
                  : this.listener.apply(this.target, arguments)
              );
          }
          function d(e, t, r) {
            var i = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r,
              },
              n = u.bind(i);
            return (n.listener = r), (i.wrapFn = n), n;
          }
          function h(e, t, r) {
            var i = e._events;
            if (void 0 === i) return [];
            var n = i[t];
            return void 0 === n
              ? []
              : "function" == typeof n
              ? r
                ? [n.listener || n]
                : [n]
              : r
              ? (function (e) {
                  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                  return t;
                })(n)
              : f(n, n.length);
          }
          function p(e) {
            var t = this._events;
            if (void 0 !== t) {
              var r = t[e];
              if ("function" == typeof r) return 1;
              if (void 0 !== r) return r.length;
            }
            return 0;
          }
          function f(e, t) {
            for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
            return r;
          }
          function v(e, t, r, i) {
            if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
            else {
              if ("function" != typeof e.addEventListener)
                throw new TypeError(
                  'The "emitter" argument must be of type EventEmitter. Received type ' +
                    typeof e
                );
              e.addEventListener(t, function n(a) {
                i.once && e.removeEventListener(t, n), r(a);
              });
            }
          }
          Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
              return o;
            },
            set: function (e) {
              if ("number" != typeof e || e < 0 || n(e))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    e +
                    "."
                );
              o = e;
            },
          }),
            (a.init = function () {
              (void 0 !== this._events &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (a.prototype.setMaxListeners = function (e) {
              if ("number" != typeof e || e < 0 || n(e))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    e +
                    "."
                );
              return (this._maxListeners = e), this;
            }),
            (a.prototype.getMaxListeners = function () {
              return c(this);
            }),
            (a.prototype.emit = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                t.push(arguments[r]);
              var n = "error" === e,
                a = this._events;
              if (void 0 !== a) n = n && void 0 === a.error;
              else if (!n) return !1;
              if (n) {
                var o;
                if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
                var s = new Error(
                  "Unhandled error." + (o ? " (" + o.message + ")" : "")
                );
                throw ((s.context = o), s);
              }
              var c = a[e];
              if (void 0 === c) return !1;
              if ("function" == typeof c) i(c, this, t);
              else {
                var l = c.length,
                  u = f(c, l);
                for (r = 0; r < l; ++r) i(u[r], this, t);
              }
              return !0;
            }),
            (a.prototype.addListener = function (e, t) {
              return l(this, e, t, !1);
            }),
            (a.prototype.on = a.prototype.addListener),
            (a.prototype.prependListener = function (e, t) {
              return l(this, e, t, !0);
            }),
            (a.prototype.once = function (e, t) {
              return s(t), this.on(e, d(this, e, t)), this;
            }),
            (a.prototype.prependOnceListener = function (e, t) {
              return s(t), this.prependListener(e, d(this, e, t)), this;
            }),
            (a.prototype.removeListener = function (e, t) {
              var r, i, n, a, o;
              if ((s(t), void 0 === (i = this._events))) return this;
              if (void 0 === (r = i[e])) return this;
              if (r === t || r.listener === t)
                0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : (delete i[e],
                    i.removeListener &&
                      this.emit("removeListener", e, r.listener || t));
              else if ("function" != typeof r) {
                for (n = -1, a = r.length - 1; a >= 0; a--)
                  if (r[a] === t || r[a].listener === t) {
                    (o = r[a].listener), (n = a);
                    break;
                  }
                if (n < 0) return this;
                0 === n
                  ? r.shift()
                  : (function (e, t) {
                      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                      e.pop();
                    })(r, n),
                  1 === r.length && (i[e] = r[0]),
                  void 0 !== i.removeListener &&
                    this.emit("removeListener", e, o || t);
              }
              return this;
            }),
            (a.prototype.off = a.prototype.removeListener),
            (a.prototype.removeAllListeners = function (e) {
              var t, r, i;
              if (void 0 === (r = this._events)) return this;
              if (void 0 === r.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = Object.create(null)),
                      (this._eventsCount = 0))
                    : void 0 !== r[e] &&
                      (0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : delete r[e]),
                  this
                );
              if (0 === arguments.length) {
                var n,
                  a = Object.keys(r);
                for (i = 0; i < a.length; ++i)
                  "removeListener" !== (n = a[i]) && this.removeAllListeners(n);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (t = r[e])) this.removeListener(e, t);
              else if (void 0 !== t)
                for (i = t.length - 1; i >= 0; i--)
                  this.removeListener(e, t[i]);
              return this;
            }),
            (a.prototype.listeners = function (e) {
              return h(this, e, !0);
            }),
            (a.prototype.rawListeners = function (e) {
              return h(this, e, !1);
            }),
            (a.listenerCount = function (e, t) {
              return "function" == typeof e.listenerCount
                ? e.listenerCount(t)
                : p.call(e, t);
            }),
            (a.prototype.listenerCount = p),
            (a.prototype.eventNames = function () {
              return this._eventsCount > 0 ? t(this._events) : [];
            });
        },
        855: (e) => {
          e.exports = function (e) {
            return {
              all: (e = e || new Map()),
              on: function (t, r) {
                var i = e.get(t);
                i ? i.push(r) : e.set(t, [r]);
              },
              off: function (t, r) {
                var i = e.get(t);
                i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : e.set(t, []));
              },
              emit: function (t, r) {
                var i = e.get(t);
                i &&
                  i.slice().map(function (e) {
                    e(r);
                  }),
                  (i = e.get("*")) &&
                    i.slice().map(function (e) {
                      e(t, r);
                    });
              },
            };
          };
        },
      },
      t = {};
    function r(i) {
      var n = t[i];
      if (void 0 !== n) return n.exports;
      var a = (t[i] = { exports: {} });
      return e[i].call(a.exports, a, a.exports, r), a.exports;
    }
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
      (r.d = (e, t) => {
        for (var i in t)
          r.o(t, i) &&
            !r.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var i = {};
    return (
      (() => {
        "use strict";
        r.d(i, { default: () => a });
        var e = r(357);
        const t = { SOURCE: "src", AUTOPLAY: "autoplay", MUTED: "muted" },
          n = (e) => "" === e || !!e;
        class a extends HTMLElement {
          static get observedAttributes() {
            return Object.values(t);
          }
          constructor() {
            super();
            const e = this.setupDOM();
            this.setupPlayer(e);
          }
          setupDOM() {
            this.attachShadow({ mode: "open" });
            const { shadowRoot: e } = this;
            let t = document.createElement("style");
            (t.innerHTML = "video { width: inherit; } div { width: inherit }"),
              e.appendChild(t);
            const r = document.createElement("div");
            return (
              e.appendChild(r),
              (this.video = document.createElement("video")),
              r.appendChild(this.video),
              r
            );
          }
          setupPlayer(t) {
            this.player = new e.WebRTCPlayer({
              video: this.video,
              type: "whep",
            });
          }
          async attributeChangedCallback(e) {
            const r = this.getAttribute(t.SOURCE),
              i = this.getAttribute(t.AUTOPLAY),
              a = this.getAttribute(t.MUTED);
            e === t.SOURCE &&
              (n(r)
                ? (await this.player.load(new URL(r)),
                  n(i) &&
                    ((this.video.muted = n(a)), (this.video.autoplay = !0)))
                : console.error(
                    "Missing src attribute in <whep-video> element"
                  )),
              e === t.MUTED && (this.video.muted = n(a));
          }
          disconnectedCallback() {
            this.player.destroy();
          }
        }
        customElements.define("whep-video", a);
      })(),
      i.default
    );
  })()
);
//# sourceMappingURL=whep-video.component.js.map

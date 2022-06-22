/*! grapesjs-preset-webpage - 0.1.54 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("grapesjs")) : "function" == typeof define && define.amd ? define(["grapesjs"], t) : "object" == typeof exports ? exports["grapesjs-preset-webpage"] = t(require("grapesjs")) : e["grapesjs-preset-webpage"] = t(e.grapesjs)
}("undefined" != typeof self ? self : this, function (e) {
    return function (e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var a = n[o] = {i: o, l: !1, exports: {}};
            return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 2)
    }([function (t, n) {
        t.exports = e
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.cmdImport = "gjs-open-import-webpage", t.cmdDeviceDesktop = "set-device-desktop", t.cmdDeviceTablet = "set-device-tablet", t.cmdDeviceMobile = "set-device-mobile", t.cmdClear = "canvas-clear"
    }, function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(0), r = o(a), i = n(3), s = o(i), l = n(4), c = o(l), d = n(5), u = o(d), p = n(6), f = o(p),
            m = n(7), v = o(m), b = n(10), g = o(b), h = n(11), y = o(h), w = n(12), C = o(w), x = n(13), P = o(x);
        t.default = r.default.plugins.add("gjs-preset-webpage", function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t, o = {
                countdownClsPfx: "countdown",
                sourceEdit: 1,
                sourceEditBtnLabel: "Save Edit",
                sourceEditModalTitle: "Edit code",
                blocks: ["column1", "column2", "column3", "column4-8", "link-block", "button-link-block", "icon-block", "custom-code", "quote", "text-basic", "image", "video"],
                modalImportTitle: "Import",
                modalImportButton: "Import",
                modalImportLabel: "",
                modalImportContent: "",
                importViewerOptions: {},
                textCleanCanvas: "Are you sure to clean the canvas?",
                showStylesOnChange: 1,
                textBackground: "Background",
                textBorderAndShadow: "Border & Shadow",
                textGeneral: "General",
                textLayout: "Layout",
                textTypography: "Typography",
                textDecorations: "Decorations",
                textExtra: "Extra",
                customStyleManager: [],
                countdownOpts: {},
                formsOpts: {},
                SwiperSlider: {slideEls: '\n         <div class="swiper-slide"><img src="https://i.ibb.co/x3bdd4y/1.png" alt="banner-1" border="0"></div>\n         <div class="swiper-slide"><img src="https://i.ibb.co/0mNNdd9/2.png" alt="banner-2" border="0"></div>\n         <div class="swiper-slide"><img src="https://i.ibb.co/PwtHQrH/3.png" alt="banner-3" border="0"></div>\n         <div class="swiper-slide"><img src="https://i.ibb.co/sCCgF9s/4.png" alt="banner-4" border="0"></div>\n         <div class="swiper-slide"><img src="https://i.ibb.co/2gBjgbh/5.png" alt="banner-5" border="0"></div>\n         <div class="swiper-slide"><img src="https://i.ibb.co/MCYKL52/6.png" alt="banner-6" border="0"></div>\n        '},
                customCodeOpts: {}
            };
            for (var a in o) a in n || (n[a] = o[a]);
            var r = n.formsOpts, i = n.customCodeOpts, l = n.SwiperSlider;
            r && (0, s.default)(e, r), (0, u.default)(e, i), (0, c.default)(e, l), (0, f.default)(e, {}), (0, g.default)(e, n), (0, v.default)(e, n), (0, y.default)(e, n), (0, C.default)(e, n), (0, P.default)(e, n)
        })
    }, function (e, t, n) {/*! grapesjs-plugin-forms - 2.0.1 */
        !function (t, n) {
            e.exports = n()
        }(window, function () {
            return function (e) {
                function t(o) {
                    if (n[o]) return n[o].exports;
                    var a = n[o] = {i: o, l: !1, exports: {}};
                    return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.d = function (e, n, o) {
                    t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: o})
                }, t.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
                }, t.t = function (e, n) {
                    if (1 & n && (e = t(e)), 8 & n) return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                    var o = Object.create(null);
                    if (t.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & n && "string" != typeof e) for (var a in e) t.d(o, a, function (t) {
                        return e[t]
                    }.bind(null, a));
                    return o
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 1)
            }([function (e, t) {
                e.exports = function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            }, function (e, t, n) {
                "use strict";

                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, o)
                    }
                    return n
                }

                function a(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach(function (t) {
                            l()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), n.push.apply(n, o)
                    }
                    return n
                }

                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach(function (t) {
                            l()(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                n.r(t);
                var s = n(0), l = n.n(s), c = "form", d = "input", u = "textarea", p = "select", f = "checkbox",
                    m = "radio", v = "button", b = "label", g = "option", h = function (e) {
                        var t = e.DomComponents, n = {name: "id"}, o = {name: "for"}, a = {name: "name"},
                            r = {name: "placeholder"}, i = {name: "value"}, s = {type: "checkbox", name: "required"},
                            l = {type: "checkbox", name: "checked"};
                        t.addType(c, {
                            isComponent: function (e) {
                                return "FORM" == e.tagName
                            },
                            model: {
                                defaults: {
                                    tagName: "form",
                                    droppable: ":not(form)",
                                    draggable: ":not(form)",
                                    attributes: {method: "get"},
                                    traits: [{
                                        type: "select",
                                        name: "method",
                                        options: [{value: "get", name: "GET"}, {value: "post", name: "POST"}]
                                    }, {name: "action"}]
                                }
                            },
                            view: {
                                events: {
                                    submit: function (e) {
                                        return e.preventDefault()
                                    }
                                }
                            }
                        }), t.addType(d, {
                            isComponent: function (e) {
                                return "INPUT" == e.tagName
                            },
                            model: {
                                defaults: {
                                    tagName: "input",
                                    draggable: "form, form *",
                                    droppable: !1,
                                    highlightable: !1,
                                    attributes: {type: "text"},
                                    traits: [a, r, {
                                        type: "select",
                                        name: "type",
                                        options: [{value: "text"}, {value: "email"}, {value: "password"}, {value: "number"}]
                                    }, s]
                                }
                            },
                            extendFnView: ["updateAttributes"],
                            view: {
                                updateAttributes: function () {
                                    this.el.setAttribute("autocomplete", "off")
                                }
                            }
                        }), t.addType(u, {
                            extend: d, isComponent: function (e) {
                                return "TEXTAREA" == e.tagName
                            }, model: {defaults: {tagName: "textarea", attributes: {}, traits: [a, r, s]}}
                        }), t.addType(g, {
                            isComponent: function (e) {
                                return "OPTION" == e.tagName
                            },
                            model: {
                                defaults: {
                                    tagName: "option",
                                    layerable: !1,
                                    droppable: !1,
                                    draggable: !1,
                                    highlightable: !1
                                }
                            }
                        });
                        var h = function (e, t) {
                            return {type: g, components: t, attributes: {value: e}}
                        };
                        t.addType(p, {
                            extend: d,
                            isComponent: function (e) {
                                return "SELECT" == e.tagName
                            },
                            model: {
                                defaults: {
                                    tagName: "select",
                                    components: [h("opt1", "Option 1"), h("opt2", "Option 2")],
                                    traits: [a, {name: "options", type: "select-options"}, s]
                                }
                            },
                            view: {
                                events: {
                                    mousedown: function (e) {
                                        return e.preventDefault()
                                    }
                                }
                            }
                        }), t.addType(f, {
                            extend: d,
                            isComponent: function (e) {
                                return "INPUT" == e.tagName && "checkbox" == e.type
                            },
                            model: {defaults: {copyable: !1, attributes: {type: "checkbox"}, traits: [n, a, i, s, l]}},
                            view: {
                                events: {
                                    click: function (e) {
                                        return e.preventDefault()
                                    }
                                }, init: function () {
                                    this.listenTo(this.model, "change:attributes:checked", this.handleChecked)
                                }, handleChecked: function () {
                                    this.el.checked = !!this.model.get("attributes").checked
                                }
                            }
                        }), t.addType(m, {
                            extend: f, isComponent: function (e) {
                                return "INPUT" == e.tagName && "radio" == e.type
                            }, model: {defaults: {attributes: {type: "radio"}}}
                        }), t.addType(v, {
                            extend: d,
                            isComponent: function (e) {
                                return "BUTTON" == e.tagName
                            },
                            model: {
                                defaults: {
                                    tagName: "button",
                                    attributes: {type: "button"},
                                    text: "Send",
                                    traits: [{name: "text", changeProp: !0}, {
                                        type: "select",
                                        name: "type",
                                        options: [{value: "button"}, {value: "submit"}, {value: "reset"}]
                                    }]
                                }, init: function () {
                                    var e = this.components(), t = 1 === e.length && e.models[0],
                                        n = t && t.is("textnode") && t.get("content") || "", o = n || this.get("text");
                                    this.set({text: o}), this.on("change:text", this.__onTextChange), o !== n && this.__onTextChange()
                                }, __onTextChange: function () {
                                    this.components(this.get("text"))
                                }
                            },
                            view: {
                                events: {
                                    click: function (e) {
                                        return e.preventDefault()
                                    }
                                }
                            }
                        }), t.addType(b, {
                            extend: "text", isComponent: function (e) {
                                return "LABEL" == e.tagName
                            }, model: {defaults: {tagName: "label", components: "Label", traits: [o]}}
                        })
                    }, y = function (e) {
                        e.TraitManager.addType("select-options", {
                            events: {keyup: "onChange"}, onValueChange: function () {
                                for (var e = this.model, t = this.target, n = e.get("value").trim().split("\n"), o = [], a = 0; a < n.length; a++) {
                                    var r = n[a].split("::");
                                    o.push({type: g, components: r[1] || r[0], attributes: {value: r[0]}})
                                }
                                t.components().reset(o), t.view.render()
                            }, getInputEl: function () {
                                if (!this.$input) {
                                    for (var e = [], t = this.target.components(), n = 0; n < t.length; n++) {
                                        var o = t.models[n], a = o.get("attributes").value || "",
                                            r = o.components().models[0], i = r && r.get("content") || "";
                                        e.push("".concat(a, "::").concat(i))
                                    }
                                    this.$input = document.createElement("textarea"), this.$input.value = e.join("\n")
                                }
                                return this.$input
                            }
                        })
                    }, w = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t,
                            o = e.BlockManager, r = function (e, t) {
                                n.blocks.indexOf(e) >= 0 && o.add(e, a(a({}, t), {}, {category: {id: "forms", label: "Forms"}}))
                            };
                        r(c, {
                            label: "Form",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>',
                            content: {
                                type: c,
                                components: [{
                                    components: [{
                                        type: b,
                                        components: "Name"
                                    }, {type: d}]
                                }, {
                                    components: [{type: b, components: "Email"}, {
                                        type: d,
                                        attributes: {type: "email"}
                                    }]
                                }, {
                                    components: [{type: b, components: "Gender"}, {
                                        type: f,
                                        attributes: {value: "M"}
                                    }, {type: b, components: "M"}, {type: f, attributes: {value: "F"}}, {
                                        type: b,
                                        components: "F"
                                    }]
                                }, {components: [{type: b, components: "Message"}, {type: u}]}, {components: [{type: v}]}]
                            }
                        }), r(d, {
                            label: "Input",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
                            content: {type: d}
                        }), r(u, {
                            label: "Textarea",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"/><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"/></svg>',
                            content: {type: u}
                        }), r(p, {
                            label: "Select",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"/></svg>',
                            content: {type: p}
                        }), r(v, {
                            label: "Button",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 11.5h16v1H4z"/></svg>',
                            content: {type: v}
                        }), r(b, {
                            label: "Label",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.9c0-.6-.5-.9-1.3-.9H3.4c-.8 0-1.3.3-1.3.9V17c0 .5.5.9 1.3.9h17.4c.8 0 1.3-.4 1.3-.9V12zM21 17H3v-5h18v5z"/><rect width="14" height="5" x="2" y="5" rx=".5"/><path d="M4 13h1v3H4z"/></svg>',
                            content: {type: b}
                        }), r(f, {
                            label: "Checkbox",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"></path></svg>',
                            content: {type: f}
                        }), r(m, {
                            label: "Radio",
                            media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>',
                            content: {type: m}
                        })
                    };
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = i({blocks: ["form", "input", "textarea", "select", "button", "label", "checkbox", "radio"]}, t);
                    h(e), y(e), w(e, n)
                }
            }])
        })
    }, function (e, t, n) {
        !function (t, o) {
            e.exports = o(n(0))
        }("undefined" != typeof self && self, function (e) {
            return function (e) {
                function t(o) {
                    if (n[o]) return n[o].exports;
                    var a = n[o] = {i: o, l: !1, exports: {}};
                    return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.d = function (e, n, o) {
                    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 2)
            }([function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                t.default = {
                    containerName: "swiper-container",
                    wrapperName: "swiper-wrapper",
                    slideName: "swiper-slide",
                    prevName: "swiper-prev",
                    nextName: "swiper-next",
                    paginationName: "swiper-pagination",
                    scrollbarName: "swiper-scrollbar",
                    containerSelector: "[data-swiper-container]",
                    wrapperSelector: "[data-swiper-wrapper]",
                    slideSelector: "[data-swiper-slide]",
                    prevSelector: "[data-swiper-prev]",
                    nextSelector: "[data-swiper-next]",
                    paginationSelector: "[data-swiper-pagination]",
                    scrollbarSelector: "[data-swiper-scrollbar]",
                    containerId: "data-swiper-container",
                    wrapperId: "data-swiper-wrapper",
                    slideId: "data-swiper-slide",
                    prevId: "data-swiper-prev",
                    nextId: "data-swiper-next",
                    paginationId: "data-swiper-pagination",
                    scrollbarId: "data-swiper-scrollbar"
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = function (e, t) {
                    var n = e.className;
                    if ((n = n && n.toString()) && n.split(" ").indexOf(t) >= 0) return 1
                };
                t.elHasClass = o
            }, function (e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(3), i = o(r), s = n(4), l = o(s), c = n(12);
                o(c);
                t.default = i.default.plugins.add("grapesjs-swiper-slider", function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a({
                        sliderBlock: {},
                        swiperProps: {},
                        containerProps: {},
                        wrapperProps: {},
                        slideProps: {},
                        prevProps: {},
                        nextProps: {},
                        paginationProps: {},
                        scrollbarProps: {},
                        slideEls: '\n              <div class="swiper-slide"><img src="https://i.ibb.co/CKHMyR6/BANNER-1-1600-X700.png" alt="BANNER-1-1600-X700"></div>\n              <div class="swiper-slide"><img src="https://i.ibb.co/CKHMyR6/BANNER-1-1600-X700.png" alt="BANNER-1-1600-X700"></div>\n              <div class="swiper-slide"><img src="https://i.ibb.co/CKHMyR6/BANNER-1-1600-X700.png" alt="BANNER-1-1600-X700"></div>\n              <div class="swiper-slide"><img src="https://i.ibb.co/CKHMyR6/BANNER-1-1600-X700.png" alt="BANNER-1-1600-X700"></div>\n              <div class="swiper-slide"><img src="https://i.ibb.co/CKHMyR6/BANNER-1-1600-X700.png" alt="BANNER-1-1600-X700"></div>\n            ',
                        prevEl: '<div class="swiper-button-prev"></div>',
                        nextEl: '<div class="swiper-button-next"></div>',
                        paginationEl: '<div class="swiper-pagination"></div>',
                        scrollbarEl: '<div class="swiper-scrollbar"></div>',
                        classContainer: "swiper-container",
                        classWrapper: "swiper-wrapper",
                        classSlide: "swiper-slide",
                        classPrev: "swiper-button-prev",
                        classNext: "swiper-button-next",
                        classPagination: "swiper-pagination",
                        classScrollbar: "swiper-scrollbar",
                        script: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js",
                        style: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"
                    }, t);
                    (0, l.default)(e, n)
                })
            }, function (t, n) {
                t.exports = e
            }, function (e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = n(5), r = o(a), i = n(6), s = o(i), l = n(7), c = o(l), d = n(8), u = o(d), p = n(9), f = o(p),
                    m = n(10), v = o(m), b = n(11);
                o(b);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.DomComponents;
                    (0, r.default)(n, t), (0, s.default)(n, t), (0, c.default)(n, t), (0, u.default)(n, t), (0, f.default)(n, t), (0, v.default)(n, t)
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, a = n(0), r = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(a), i = n(1);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.getType("default"), a = n.model, s = n.view, l = r.default.containerName,
                        c = r.default.wrapperName, d = r.default.prevName, u = r.default.nextName,
                        p = r.default.paginationName, f = r.default.scrollbarName, m = r.default.wrapperSelector,
                        v = r.default.prevSelector, b = r.default.nextSelector, g = r.default.paginationSelector,
                        h = r.default.scrollbarSelector, y = r.default.containerId;
                    e.addType(l, {
                        model: a.extend({
                            defaults: o({}, a.prototype.defaults, {
                                name: "Swiper Slider",
                                autoplay: !1,
                                autoplayDelay: 3e3,
                                direction: "horizontal",
                                effect: "slide",
                                loop: !0,
                                pagination: "bullets",
                                navigation: !0,
                                scrollbar: !1,
                                largeSlidesPerView: 1,
                                largeSpaceBetween: "0",
                                largeSlidesPerGroup: 1,
                                traits: [{
                                    type: "checkbox",
                                    label: "Autoplay",
                                    name: "autoplay",
                                    changeProp: 1
                                }, {
                                    type: "number",
                                    label: "Autoplay Delay",
                                    name: "autoplayDelay",
                                    changeProp: 1
                                }, {type: "checkbox", label: "Loop", name: "loop", changeProp: 1}, {
                                    type: "checkbox",
                                    label: "Navigation",
                                    name: "navigation",
                                    changeProp: 1
                                }, {
                                    type: "number",
                                    label: "Slides Per View",
                                    name: "largeSlidesPerView",
                                    changeProp: 1
                                }, {
                                    type: "number",
                                    label: "Space Between",
                                    name: "largeSpaceBetween",
                                    changeProp: 1
                                }, {
                                    type: "select",
                                    label: "Effect",
                                    name: "effect",
                                    changeProp: 1,
                                    options: ["slide", "fade", "cube", "coverflow", "flip"]
                                }, {
                                    type: "select",
                                    label: "Pagination",
                                    name: "pagination",
                                    changeProp: 1,
                                    options: ["none", "bullets", "fraction", "progressbar"]
                                }],
                                droppable: m + ", " + v + ", " + b + ", " + h + ", " + g + "}",
                                draggable: !0,
                                style: {height: "400px;", "padding-bottom": "20px", position: "relative;"},
                                "script-deps": t.script,
                                "style-deps": t.style,
                                "class-container": t.classContainer,
                                "class-wrapper": t.classWrapper,
                                "class-prev": t.classPrev,
                                "class-next": t.classNext,
                                "class-pagination": t.classPagination,
                                "class-scrollbar": t.classScrollbar,
                                script: function () {
                                    var e = this, t = ["0", "false", "none"], n = ["1", "true"],
                                        o = e.getAttribute("id"), a = {
                                            mousewheel: !0,
                                            keyboard: !0,
                                            effect: "{[ effect ]}",
                                            loop: isNaN("{[ loop ]}"),
                                            breakpointsInverse: !0,
                                            breakpoints: {
                                                576: {slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1},
                                                768: {slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1},
                                                992: {
                                                    slidesPerView: parseInt("{[ largeSlidesPerView ]}", 10),
                                                    spaceBetween: parseInt("{[ largeSpaceBetween ]}", 10),
                                                    slidesPerGroup: parseInt("{[ largeSlidesPerGroup ]}", 10)
                                                }
                                            }
                                        };
                                    n.includes("{[ navigation ]}") ? a.navigation = {
                                        nextEl: "#" + o + " .swiper-button-next",
                                        prevEl: "#" + o + " .swiper-button-prev"
                                    } : (document.querySelectorAll("#" + o + " > .swiper-button-next").forEach(function (e) {
                                        return e.remove()
                                    }), document.querySelectorAll("#" + o + " > .swiper-button-prev").forEach(function (e) {
                                        return e.remove()
                                    })), t.includes("{[ pagination ]}") || (a.pagination = {
                                        el: "#" + o + " .swiper-pagination",
                                        type: "{[ pagination ]}",
                                        clickable: !0
                                    }), n.includes("{[ autoplay ]}") && (a.autoplay = {delay: "{[ autoplayDelay ]}"});
                                    var r = function () {
                                        window.sliderSwiper = new Swiper(e, a)
                                    };
                                    if ("undefined" == typeof Swiper) {
                                        var i = document.createElement("link");
                                        i.rel = "stylesheet", i.href = "{[ style-deps ]}", document.head.appendChild(i);
                                        var s = document.createElement("script");
                                        s.src = "{[ script-deps ]}", s.onload = r, document.head.appendChild(s)
                                    } else r()
                                }
                            }, t.sliderProps), init: function () {
                                var e = t.classContainer;
                                this.get("classes").pluck("name").indexOf(e) < 0 && this.addClass(e)
                            }
                        }, {
                            isComponent: function (e) {
                                return e.hasAttribute && e.hasAttribute(y) ? {type: l} : (0, i.elHasClass)(e, t.classContainer) ? {type: l} : void 0
                            }
                        }), view: s.extend({
                            init: function () {
                                var e = ["effect", "loop", "pagination", "navigation", "autoplay", "autoplayDelay", "largeSlidesPerView", "largeSpaceBetween", "largeSlidesPerGroup"],
                                    n = e.map(function (e) {
                                        return "change:" + e
                                    }).join(" ");
                                this.listenTo(this.model, n, this.render);
                                var o = this.model.components();
                                o.length || o.add('\n                            <div data-gjs-type="' + c + '">' + t.slideEls + '</div>\n                            <div data-gjs-type="' + d + '"></div>\n                            <div data-gjs-type="' + u + '"></div>\n                            <div data-gjs-type="' + p + '"></div>\n                            <div data-gjs-type="' + f + '"></div>\n                          ')
                            }
                        })
                    })
                }
            }, function (e, t, n) {
                "use strict";

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(0), i = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(r), s = n(1);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.getType("default"), r = n.model, l = i.default.wrapperName, c = i.default.slideSelector,
                        d = i.default.containerSelector;
                    e.addType(l, {
                        model: r.extend({
                            defaults: a({}, r.prototype.defaults, o({
                                name: "Wrapper",
                                copyable: !1,
                                resizable: !1,
                                draggable: !1,
                                selectable: !1,
                                hoverable: !1,
                                highlightable: !1,
                                droppable: c
                            }, "draggable", d), t.wrapperProps), init: function () {
                                var e = t.classWrapper;
                                this.get("classes").pluck("name").indexOf(e) < 0 && this.addClass(e)
                            }
                        }, {
                            isComponent: function (e) {
                                if ((0, s.elHasClass)(e, t.classWrapper)) return {type: l}
                            }
                        }), view: n.view.extend({
                            init: function () {
                                this.listenTo(this.model.components(), "add remove", this.renderSlider)
                            }, renderSlider: function () {
                                var e = this.model.parent().parent();
                                e && e.view.render()
                            }
                        })
                    })
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, a = n(0), r = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(a), i = n(1);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.getType("default"), a = n.model, s = n.view, l = r.default.slideName,
                        c = r.default.wrapperSelector;
                    e.addType(l, {
                        model: a.extend({
                            defaults: o({}, a.prototype.defaults, {
                                name: "Slide",
                                draggable: c
                            }, t.slideProps)
                        }, {
                            isComponent: function (e) {
                                if ((0, i.elHasClass)(e, t.classSlide)) return {type: l}
                            }
                        }), view: s
                    })
                }
            }, function (e, t, n) {
                "use strict";

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(0), i = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(r), s = n(1);
                t.default = function (e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = e.getType("default"), l = r.model, c = i.default.prevName, d = i.default.containerSelector,
                        u = n.classPrev, p = c;
                    e.addType(p, {
                        model: l.extend({
                            defaults: a({}, l.prototype.defaults, (t = {
                                name: "Nav Previous",
                                copyable: 0
                            }, o(t, "copyable", !1), o(t, "resizable", !1), o(t, "draggable", !1), o(t, "selectable", !1), o(t, "hoverable", !1), o(t, "highlightable", !1), o(t, "draggable", d), t), n.prevProps),
                            init: function () {
                                this.get("classes").pluck("name").indexOf(u) < 0 && this.addClass(u)
                            }
                        }, {
                            isComponent: function (e) {
                                if ((0, s.elHasClass)(e, u)) return {type: p}
                            }
                        }), view: r.view
                    })
                }
            }, function (e, t, n) {
                "use strict";

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(0), i = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(r), s = n(1);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.getType("default"), r = n.model, l = i.default.nextName, c = i.default.containerSelector,
                        d = t.classNext, u = l;
                    e.addType(u, {
                        model: r.extend({
                            defaults: a({}, r.prototype.defaults, o({
                                name: "Nav Next",
                                copyable: !1,
                                resizable: !1,
                                draggable: !1,
                                selectable: !1,
                                hoverable: !1,
                                highlightable: !1
                            }, "draggable", c), t.nextProps), init: function () {
                                this.get("classes").pluck("name").indexOf(d) < 0 && this.addClass(d)
                            }
                        }, {
                            isComponent: function (e) {
                                if ((0, s.elHasClass)(e, d)) return {type: u}
                            }
                        }), view: n.view
                    })
                }
            }, function (e, t, n) {
                "use strict";

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(0), i = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(r), s = n(1);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.getType("default"), r = n.model, l = i.default.paginationName,
                        c = i.default.containerSelector, d = t.classPagination, u = l;
                    e.addType(u, {
                        model: r.extend({
                            defaults: a({}, r.prototype.defaults, o({
                                name: "Pagination",
                                copyable: !1,
                                resizable: !1,
                                draggable: !1,
                                selectable: !1,
                                hoverable: !1,
                                highlightable: !1
                            }, "draggable", c), t.paginationProps), init: function () {
                                this.get("classes").pluck("name").indexOf(d) < 0 && this.addClass(d)
                            }
                        }, {
                            isComponent: function (e) {
                                if ((0, s.elHasClass)(e, d)) return {type: u}
                            }
                        }), view: n.view
                    })
                }
            }, function (e, t, n) {
                "use strict";

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(0), i = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(r), s = n(1);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.getType("default"), r = n.model, l = i.default.scrollbarName,
                        c = i.default.containerSelector, d = t.classScrollbar, u = l;
                    e.addType(u, {
                        model: r.extend({
                            defaults: a({}, r.prototype.defaults, o({
                                name: "Scrollbar",
                                copyable: !1,
                                resizable: !1,
                                draggable: !1,
                                selectable: !1,
                                hoverable: !1,
                                highlightable: !1
                            }, "draggable", c), t.scrollbarProps), init: function () {
                                this.get("classes").pluck("name").indexOf(d) < 0 && this.addClass(d)
                            }
                        }, {
                            isComponent: function (e) {
                                if ((0, s.elHasClass)(e, d)) return {type: u}
                            }
                        }), view: n.view
                    })
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, a = n(0), r = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(a);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.BlockManager,
                        a = t.sliderBlock, i = r.default.containerName;
                    a && n.add(i, o({
                        label: '\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>\n      </svg>\n      <div class="gjs-block-label">Swiper Slider</div>\n    ',
                        content: {type: i}
                    }, a))
                }
            }])
        })
    }, function (e, t, n) {/*! grapesjs-custom-code - 0.1.9 */
        !function (t, n) {
            e.exports = n()
        }("undefined" != typeof self && self, function () {
            return function (e) {
                function t(o) {
                    if (n[o]) return n[o].exports;
                    var a = n[o] = {i: o, l: !1, exports: {}};
                    return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.d = function (e, n, o) {
                    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 1)
            }([function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.keyCustomCode = "custom-code-plugin__code", t.typeCustomCode = "custom-code", t.commandNameCustomCode = "custom-code:open-modal"
            }, function (e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, r = n(2), i = o(r), s = n(3), l = o(s);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a({
                        blockLabel: "Custom Code",
                        blockCustomCode: {},
                        propsCustomCode: {},
                        placeholderContent: "<span>Insert here your custom code</span>",
                        toolbarBtnCustomCode: {},
                        placeholderScript: '<div style="pointer-events: none; padding: 10px;">\n      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">\n        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>\n        </svg>\n      Custom code with <i>&lt;script&gt;</i> can\'t be rendered on the canvas\n    </div>',
                        modalTitle: "Insert your code",
                        codeViewOptions: {},
                        buttonLabel: "Save",
                        commandCustomCode: {}
                    }, t);
                    (0, i.default)(e, n), (0, l.default)(e, n)
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, a = n(0);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.DomComponents,
                        r = n.getType("default"), i = r.model, s = t.toolbarBtnCustomCode, l = void 0;
                    n.addType("script", {
                        view: {
                            onRender: function () {
                                this.model.closestType(a.typeCustomCode) && (this.el.innerHTML = "")
                            }
                        }
                    }), n.addType(a.typeCustomCode, {
                        model: i.extend({
                            defaults: o({}, i.prototype.defaults, {
                                name: "Custom Code",
                                editable: !0
                            }, t.propsCustomCode), init: function () {
                                this.listenTo(this, "change:" + a.keyCustomCode, this.onCustomCodeChange);
                                var e = this.get(a.keyCustomCode) || t.placeholderContent;
                                !this.components().length && this.components(e);
                                var n = this.get("toolbar"), r = "custom-code";
                                s && !n.filter(function (e) {
                                    return e.id === r
                                }).length && n.unshift(o({
                                    id: r,
                                    command: a.commandNameCustomCode,
                                    label: '<i class="fas fa-code"></i>'
                                }, s))
                            }, onCustomCodeChange: function () {
                                this.components(this.get(a.keyCustomCode))
                            }
                        }, {
                            isComponent: function () {
                                return !1
                            }
                        }), view: r.view.extend({
                            events: {dblclick: "onActive"}, init: function () {
                                this.listenTo(this.model.components(), "add remove reset", this.onComponentsChange), this.onComponentsChange()
                            }, onComponentsChange: function () {
                                var e = this;
                                l && clearInterval(l), l = setTimeout(function () {
                                    var n = e.model, o = n.get(a.keyCustomCode) || "", r = 1;
                                    o.indexOf("<script") >= 0 && (e.el.innerHTML = t.placeholderScript, r = 0), n.set({droppable: r})
                                }, 0)
                            }, onActive: function () {
                                var e = this.model;
                                this.em.get("Commands").run(a.commandNameCustomCode, {target: e})
                            }
                        })
                    })
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, a = n(0);
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.Commands,
                        r = t.modalTitle, i = t.codeViewOptions, s = t.commandCustomCode, l = function (e, t) {
                            t instanceof HTMLElement ? e.appendChild(t) : t && e.insertAdjacentHTML("beforeend", t)
                        };
                    n.add(a.commandNameCustomCode, o({
                        keyCustomCode: a.keyCustomCode, run: function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.editor = e, this.options = n, this.target = n.target || e.getSelected();
                            var o = this.target;
                            o && o.get("editable") && this.showCustomCode(o)
                        }, stop: function (e) {
                            e.Modal.close()
                        }, showCustomCode: function (e) {
                            var t = this, n = this.editor, o = this.options, i = o.title || r, s = this.getContent(),
                                l = e.get(a.keyCustomCode) || "";
                            n.Modal.open({title: i, content: s}).getModel().once("change:open", function () {
                                return n.stopCommand(t.id)
                            }), this.getCodeViewer().setContent(l)
                        }, getPreContent: function () {
                        }, getPostContent: function () {
                        }, getContent: function () {
                            var e = this.editor, t = document.createElement("div"), n = this.getCodeViewer(),
                                o = e.getConfig("stylePrefix");
                            return t.className = o + "custom-code", l(t, this.getPreContent()), t.appendChild(n.getElement()), l(t, this.getPostContent()), l(t, this.getContentActions()), n.refresh(), setTimeout(function () {
                                return n.focus()
                            }, 0), t
                        }, getContentActions: function () {
                            var e = this, n = this.editor, o = document.createElement("button"),
                                a = n.getConfig("stylePrefix");
                            return o.innerHTML = t.buttonLabel, o.className = a + "btn-prim " + a + "btn-import__custom-code", o.onclick = function () {
                                return e.handleSave()
                            }, o
                        }, handleSave: function () {
                            var e = this.editor, t = this.target, n = this.getCodeViewer().getContent();
                            t.set(a.keyCustomCode, n), e.Modal.close()
                        }, getCodeViewer: function () {
                            var e = this.editor;
                            return this.codeViewer || (this.codeViewer = e.CodeManager.createViewer(o({
                                codeName: "htmlmixed",
                                theme: "hopscotch",
                                readOnly: 0
                            }, i))), this.codeViewer
                        }
                    }, s))
                }
            }])
        })
    }, function (e, t, n) {/*! grapesjs-component-countdown - 0.1.7 */
        !function (t, o) {
            e.exports = o(n(0))
        }("undefined" != typeof self && self, function (e) {
            return function (e) {
                function t(o) {
                    if (n[o]) return n[o].exports;
                    var a = n[o] = {i: o, l: !1, exports: {}};
                    return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.d = function (e, n, o) {
                    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 1)
            }([function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.countdownRef = "countdown"
            }, function (e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                Object.defineProperty(t, "__esModule", {value: !0});
                var a = n(2), r = o(a), i = n(3), s = o(i), l = n(5), c = (o(l), n(0));
                t.default = r.default.plugins.add("gjs-component-countdown", function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t, o = {
                        blocks: [c.countdownRef],
                        defaultStyle: !1,
                        startTime: "",
                        endText: "EXPIRED",
                        dateInputType: "date",
                        countdownClsPfx: "countdown",
                        labelCountdown: "Countdown",
                        labelCountdownCategory: "Extra",
                        labelDays: "days",
                        labelHours: "hours",
                        labelMinutes: "minutes",
                        labelSeconds: "seconds"
                    };
                    for (var a in o) a in n || (n[a] = o[a]);
                    (0, s.default)(e, n)
                })
            }, function (t, n) {
                t.exports = e
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                };
                t.default = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t,
                        r = e.DomComponents, i = r.getType("default"), s = r.getType("text"), l = i.model, c = i.view,
                        d = (s.model, s.view, n.countdownClsPfx);
                    r.addType("countdown", {
                        model: l.extend({
                            defaults: o({}, l.prototype.defaults, {
                                startfrom: n.startTime,
                                endText: n.endText,
                                droppable: !1,
                                traits: [{
                                    label: "Start",
                                    name: "startfrom",
                                    changeProp: 1,
                                    type: n.dateInputType
                                }, {label: "End text", name: "endText", changeProp: 1}],
                                script: function () {
                                    var e = new Date("{[ startfrom ]}").getTime(),
                                        t = this.querySelector("[data-js=countdown]"),
                                        n = this.querySelector("[data-js=countdown-endtext]"),
                                        o = this.querySelector("[data-js=countdown-day]"),
                                        a = this.querySelector("[data-js=countdown-hour]"),
                                        r = this.querySelector("[data-js=countdown-minute]"),
                                        i = this.querySelector("[data-js=countdown-second]"),
                                        s = this.gjs_countdown_interval;
                                    s && s && clearInterval(s), console.log("{[ startfrom ]}");
                                    var l = function (e, t, n, s) {
                                        o.innerHTML = e < 10 ? "0" + e : e, a.innerHTML = t < 10 ? "0" + t : t, r.innerHTML = n < 10 ? "0" + n : n, i.innerHTML = s < 10 ? "0" + s : s
                                    }, c = function () {
                                        var o = (new Date).getTime(), a = e - o, r = Math.floor(a / 864e5),
                                            i = Math.floor(a % 864e5 / 36e5), s = Math.floor(a % 36e5 / 6e4),
                                            c = Math.floor(a % 6e4 / 1e3);
                                        l(r, i, s, c), a < 0 && (clearInterval(d), n.innerHTML = "{[ endText ]}", t.style.display = "none", n.style.display = "")
                                    };
                                    if (e) {
                                        var d = setInterval(c, 1e3);
                                        this.gjs_countdown_interval = d, n.style.display = "none", t.style.display = "", c()
                                    } else l(0, 0, 0, 0)
                                }
                            })
                        }, {
                            isComponent: function (e) {
                                return e.getAttribute && "countdown" == e.getAttribute("data-gjs-type") ? {type: "countdown"} : (0, a.elHasClass)(e, d) ? {type: "countdown"} : void 0
                            }
                        }), view: c.extend({
                            init: function () {
                                this.listenTo(this.model, "change:startfrom change:endText", this.updateScript);
                                var e = this.model.get("components");
                                e.length || (e.reset(), e.add('\n            <span data-js="countdown" class="' + d + '-cont">\n              <div class="' + d + '-block">\n                <div data-js="countdown-day" class="' + d + '-digit"></div>\n                <div class="' + d + '-label">' + n.labelDays + '</div>\n              </div>\n              <div class="' + d + '-block">\n                <div data-js="countdown-hour" class="' + d + '-digit"></div>\n                <div class="' + d + '-label">' + n.labelHours + '</div>\n              </div>\n              <div class="' + d + '-block">\n                <div data-js="countdown-minute" class="' + d + '-digit"></div>\n                <div class="' + d + '-label">' + n.labelMinutes + '</div>\n              </div>\n              <div class="' + d + '-block">\n                <div data-js="countdown-second" class="' + d + '-digit"></div>\n                <div class="' + d + '-label">' + n.labelSeconds + '</div>\n              </div>\n            </span>\n            <span data-js="countdown-endtext" class="' + d + '-endtext"></span>\n          '))
                            }
                        })
                    })
                };
                var a = n(4)
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var o = function (e, t) {
                    var n = e.className;
                    if ((n = n && n.toString()) && n.split(" ").indexOf(t) >= 0) return 1
                };
                t.elHasClass = o
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e.BlockManager
                }, n(0)
            }])
        })
    }, function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(8), r = o(a), i = n(9), s = o(i), l = n(1);
        t.default = function (e, t) {
            var n = void 0;
            console.log(n);
            var o = e.Commands, a = t.textCleanCanvas, i = e.Modal;
            o.add(l.cmdImport, (0, r.default)(e, t)), o.add(l.cmdDeviceDesktop, function (e) {
                return e.setDevice("Desktop")
            }), o.add(l.cmdDeviceTablet, function (e) {
                return e.setDevice("Tablet")
            }), o.add(l.cmdDeviceMobile, function (e) {
                return e.setDevice("Mobile portrait")
            }), o.add(l.cmdClear, function (e) {
                return confirm(a) && e.runCommand("core:canvas-clear")
            }), window.config.all_icons && o.add("open-icons-modal", {
                run: function (t, n) {
                    var o = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = a.component || t.getSelected(), s = window.config.all_icons;
                    i.setTitle("Font awesome icons 5");
                    for (var l = '\n         <div class="div-search-modal-icon">\n            <input type="text" name="search" id="input-icon-search" class="form-control-builder" placeholder="Search name icon">\n        </div>\n        <div id="icons-modal-list" style=\'min-height:300px;\'>', c = 0, d = s.length; c < d; c++) l += '<i class="' + s[c] + '"></i>';
                    l += "</div>", i.setContent(l), document.querySelector("input#input-icon-search").addEventListener("change", function (e) {
                        var t = document.getElementById("input-icon-search").value, n = s.filter(function (e) {
                            return e.includes(t)
                        });
                        if (n.length > 0) {
                            for (var o = "", a = 0, l = n.length; a < l; a++) o += '<i class="' + n[a] + '"></i>';
                            document.getElementById("icons-modal-list").innerHTML = o
                        } else document.getElementById("icons-modal-list").innerHTML = "<h3>Not found any icons</h3>";
                        document.querySelectorAll("div#icons-modal-list > i").forEach(function (e) {
                            return e.addEventListener("click", function (e) {
                                r.set({attributes: {class: this.className}}), i.close()
                            })
                        })
                    }), document.querySelectorAll("div#icons-modal-list > i").forEach(function (e) {
                        return e.addEventListener("click", function (e) {
                            r.set({attributes: {class: this.className}}), i.close()
                        })
                    }), i.open().getModel().once("change:open", function () {
                        return e.stopCommand(o.id)
                    })
                }, stop: function (e, t) {
                    i.close()
                }
            }), o.add("code-edit", {
                run: function (e, o) {
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    n || (n = new s.default(e, t)), o && o.set("active", 0), n.showCodePopup()
                }, stop: function (e) {
                }
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
        t.default = function (e, t) {
            var n = e.getConfig("stylePrefix"), a = e.Modal, r = e.CodeManager.getViewer("CodeMirror").clone(),
                i = document.createElement("div"), s = t.modalImportLabel, l = t.modalImportContent, c = r.editor,
                d = document.createElement("button");
            return d.type = "button", d.innerHTML = t.modalImportButton, d.className = n + "btn-prim " + n + "btn-import", d.onclick = function (t) {
                e.setComponents(c.getValue().trim()), a.close()
            }, r.set(o({
                codeName: "htmlmixed",
                theme: "hopscotch",
                readOnly: 0
            }, t.importViewerOptions)), {
                run: function (e) {
                    var o = this;
                    if (!c) {
                        var u = document.createElement("textarea");
                        if (s) {
                            var p = document.createElement("div");
                            p.className = n + "import-label", p.innerHTML = s, i.appendChild(p)
                        }
                        i.appendChild(u), i.appendChild(d), r.init(u), c = r.editor
                    }
                    a.setTitle(t.modalImportTitle), a.setContent(i);
                    var f = "function" == typeof l ? l(e) : l;
                    r.setContent(f || ""), a.open().getModel().once("change:open", function () {
                        return e.stopCommand(o.id)
                    }), c.refresh()
                }, stop: function () {
                    a.close()
                }
            }
        }
    }, function (e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(), r = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, e), this.editor = t, this.opts = n, this.codeEditor = this.buildCodeEditor(), this.codePopup = this.buildCodePopup()
            }

            return a(e, [{
                key: "buildCodeEditor", value: function () {
                    var e = this.editor.CodeManager.getViewer("CodeMirror").clone();
                    return e.set({
                        codeName: "htmlmixed",
                        readOnly: !1,
                        theme: "hopscotch",
                        autoBeautify: !0,
                        autoCloseTags: !0,
                        autoCloseBrackets: !0,
                        lineWrapping: !0,
                        styleActiveLine: !0,
                        smartIndent: !0,
                        indentWithTabs: !0
                    }), e
                }
            }, {
                key: "buildCodePopup", value: function () {
                    var e = this.editor.getConfig(), t = document.createElement("div"),
                        n = document.createElement("button"),
                        o = (document.createElement("button"), document.createElement("textarea"));
                    return n.innerHTML = this.opts.sourceEditBtnLabel, n.className = e.stylePrefix + "btn-prim " + e.stylePrefix + "btn-code-edit", n.onclick = this.updateCode.bind(this), t.appendChild(o), t.appendChild(n), this.codeEditor.init(o), t
                }
            }, {
                key: "showCodePopup", value: function () {
                    this.updateEditorContents(), this.codeEditor.editor.refresh(), this.editor.Modal.setContent(""), this.editor.Modal.setContent(this.codePopup), this.editor.Modal.setTitle(this.opts.sourceEditModalTitle), this.editor.Modal.open()
                }
            }, {
                key: "updateCode", value: function () {
                    var e = this.codeEditor.editor.getValue(), t = this.getEditorContent();
                    try {
                        this.editor.DomComponents.getWrapper().set("content", ""), this.editor.setComponents(e.trim()), this.editor.Modal.close()
                    } catch (e) {
                        window.alert("Template error, you should fix your code before save! \n" + e.message), this.editor.DomComponents.getWrapper().set("content", ""), this.editor.setComponents(t.trim())
                    }
                }
            }, {
                key: "cancelCode", value: function () {
                    this.editor.Modal.close()
                }
            }, {
                key: "updateEditorContents", value: function () {
                    this.codeEditor.setContent(this.getEditorContent())
                }
            }, {
                key: "getEditorContent", value: function () {
                    var e = this.editor.getConfig();
                    return "grapesjsmjml" in e.pluginsOpts ? this.editor.getHtml() : this.editor.getHtml() + "<style>" + this.editor.getCss({avoidProtected: !0}) + "</style>"
                }
            }]), e
        }();
        t.default = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
            var n = e.BlockManager, o = function (e) {
                return t.blocks.indexOf(e) >= 0
            };
            if (n.remove("form"), n.remove("input"), n.remove("textarea"), n.remove("select"), n.remove("button"), n.remove("label"), n.remove("checkbox"), n.remove("radio"), o("column1") && n.add("column1", {
                category: "Basic",
                label: "1 Column",
                attributes: {class: "gjs-fonts gjs-f-b1"},
                content: '<div class="row lfg-block-row">\n                                <div class="col-md-12 lfg-block-col">\n                                    <h4>1 column</h4>\n                                </div>\n                              </div>'
            }), o("column2") && n.add("column2", {
                category: "Basic",
                label: "2 Columns",
                attributes: {class: "gjs-fonts gjs-f-b2"},
                content: '<div class="row lfg-block-row">\n                                <div class="col-md-6 lfg-block-col">\n                                    <h4>1 column</h4>\n                                </div>\n                                <div class="col-md-6 lfg-block-col">\n                                    <h4>2 column</h4>\n                                </div>\n                              </div>'
            }), o("column3") && n.add("column3", {
                category: "Basic",
                label: "3 Columns",
                attributes: {class: "gjs-fonts gjs-f-b3"},
                content: '<div class="row lfg-block-row">\n                                <div class="col-md-4 lfg-block-col">\n                                    <h4>1 column</h4>\n                                </div>\n                                <div class="col-md-4 lfg-block-col">\n                                    <h4>2 column</h4>\n                                </div>\n                                <div class="col-md-4 lfg-block-col">\n                                    <h4>3 column</h4>\n                                </div>\n                              </div>'
            }), o("column4-8") && n.add("column4-8", {
                category: "Basic",
                label: "2 Columns 4/8",
                attributes: {class: "gjs-fonts gjs-f-b37"},
                content: '<div class="row lfg-block-row">\n                                <div class="col-md-4 lfg-block-col">\n                                    <h4>4 column</h4>\n                                </div>\n                                <div class="col-md-8 lfg-block-col">\n                                    <h4>8 column</h4>\n                                </div>\n                              </div>'
            }), o("text-basic") && n.add("text-basic", {
                category: "Basic",
                label: "Text section",
                attributes: {class: "fas fa-align-justify"},
                content: "<section>\n      <h1>Insert title here</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n      </section>"
            }), o("image") && n.add("image", {
                category: "Basic",
                label: "Image",
                attributes: {class: "fas fa-image"},
                content: {style: {color: "black"}, type: "image", classes: ["img-fluid"]}
            }), window.config.enable_slider && n.add("swiper-slider", {
                category: "Basic",
                label: '\n              <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>\n              </svg>\n              <div class="gjs-block-label">Slider</div>\n            ',
                content: {type: "swiper-container"}
            }), o("video") && n.add("video", {
                category: "Basic",
                label: "Video",
                attributes: {class: "fas fa-video"},
                content: {type: "video", provider: "vi", src: "475378445", style: {height: "350px", width: "615px"}}
            }), window.config.enable_countdown) {
                var a = t.countdownClsPfx,
                    r = "\n        <style>\n            ." + a + " {\n              text-align: center;\n              font-family: Helvetica, serif;\n            }\n\n            ." + a + "-block {\n              display: inline-block;\n              margin: 0 10px;\n              padding: 10px;\n            }\n\n            ." + a + "-digit {\n              font-size: 5rem;\n            }\n\n            ." + a + "-endtext {\n              font-size: 5rem;\n            }\n\n            ." + a + "-cont,\n            ." + a + "-block {\n              display: inline-block;\n            }\n          </style>";
                n.add("countdown", {
                    label: "Countdown",
                    category: "Basic",
                    attributes: {class: "fas fa-clock"},
                    content: '\n              <div class="' + a + '" data-gjs-type="countdown"></div>\n              ' + r + "\n            "
                })
            }
            o("button-link-block") && n.add("button-link-block", {
                category: "Basic",
                label: "Button Link",
                attributes: {class: "fas fa-external-link-square-alt"},
                content: {type: "link", classes: ["btn", "btn-primary", "btn-lg"], content: "Button Link"}
            }), o("link-block") && n.add("link-block", {
                category: "Basic",
                label: "Link Block",
                attributes: {class: "fas fa-link"},
                content: {type: "link", content: "Insert your link here", style: {color: "#3B97E3"}}
            }), o("icon-block") && n.add("icon-block", {
                category: "Basic",
                label: "Icon",
                attributes: {class: "fas fa-icons"},
                content: '<div class="i-size-6x"> <i class="fas fa-coffee"></i></div>'
            }), n.add("block-paypalbtn", {
                category: "Basic",
                label: "PayPal",
                attributes: {class: "fab fa-paypal fa-lg"},
                content: {type: "paypal-button"}
            }), n.add("block-stripebtn", {
                category: "Basic",
                label: "Stripe",
                attributes: {class: "fab fa-stripe fa-lg"},
                content: {type: "stripe-button"}
            }), window.config.enable_custom_code_block && n.add("custom-code", {
                label: "Custom Code",
                category: "Basic",
                attributes: {class: "fas fa-code"},
                content: {type: "custom-code"}
            }), n.add("block-form-default", {
                category: "Basic",
                label: "Forms",
                attributes: {class: "fas fa-align-left"},
                content: '\n            <div class="block-form-default">\n              <h3>FILL OUT THE FORM</h3>\n              <form class="registration-form">\n                <div class="form-group">\n                  <label class="sr-only" for="name">First name</label>\n                  <input type="text" name="name" required="" placeholder="Enter Your Name..." class="form-control">\n                </div>\n                <div class="form-group">\n                  <label class="sr-only" for="email">Email</label>\n                  <input type="text" name="email" required="" placeholder="Enter Your Email..." class="form-control">\n                </div>\n                <div class="form-group">\n                  <label class="sr-only" for="phone">Service</label>\n                  <select class="form-control" name="service" required="">\n                    <option value="">Select service</option>\n                    <option value="service A">service A</option>\n                    <option value="service B">service B</option>\n                    <option value="service C">service C</option>\n                  </select>\n                </div>\n                <div class="form-group">\n                    <label class="sr-only" for="message">Message</label>\n                    <textarea class="form-control" name="message" placeholder="Enter Your Message..." required="" row="3"></textarea>\n                  </div>\n                <button type="submit" class="btn btn-danger btn-round  btn-lg">Get it Now</button>\n              </form>\n            </div>'
            }), o("quote") && n.add("quote", {
                label: "Quote",
                category: "Basic",
                attributes: {class: "fa fa-quote-right"},
                content: '<blockquote class="quote">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n      </blockquote>'
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], e.DomComponents),
                n = t.getType("default"), o = (n.model, n.view, t.getType("image").model);
            t.addType("image", {
                model: {
                    initToolbar: function () {
                        o.prototype.initToolbar.apply(this, arguments);
                        var e = this.get("toolbar");
                        e.some(function (e) {
                            return "open-assets" === e.command
                        }) || (e.unshift({
                            command: function (e) {
                                return e.runCommand("open-assets", {target: e.getSelected()})
                            }, label: '<i class="fas fa-images"></i>'
                        }), this.set("toolbar", e))
                    }
                }
            });
            var a = t.getType("default").model;
            t.addType("icon-component", {
                isComponent: function (e) {
                    var t = "";
                    return "I" == e.tagName && (t = {type: "icon-component"}), t
                }, model: {
                    initToolbar: function () {
                        a.prototype.initToolbar.apply(this, arguments);
                        var e = this.get("toolbar");
                        e.some(function (e) {
                            return "open-icons-modal" == e.attributes.name
                        }) || (e.unshift({
                            command: function (e) {
                                return e.runCommand("open-icons-modal")
                            }, attributes: {class: "fas fa-pen", name: "open-icons-modal"}
                        }), this.set("toolbar", e))
                    }
                }
            }), e.AssetManager.addType("image", {
                view: {
                    onRemove: function (e) {
                        e.stopPropagation();
                        var t = this.model;
                        confirm("Are you sure?") && t.collection.remove(t)
                    }
                }
            });
            var r = function () {
                var e = [{value: 1, name: "Product A"}, {value: 2, name: "Product B"}, {
                    value: 3,
                    name: "312312"
                }, {value: 4, name: "213"}];
                if (window.config.url_get_products) {
                    var t = window.config.url_get_products, n = new XMLHttpRequest;
                    n.open("GET", t, !1), n.send(null), 200 == n.status && (e = JSON.parse(n.response))
                }
                return e
            };
            e.Components.addType("paypal-button", {
                isComponent: function (e) {
                    var t = "";
                    return "BUTTON" == e.tagName && "builder-paypal-button" == e.className && (t = {type: "paypal-button"}), t
                },
                model: {
                    defaults: {
                        tagName: "button",
                        attributes: {class: "builder-paypal-button", type: "button"},
                        productid: "",
                        traits: [{
                            type: "select",
                            name: "productid",
                            label: "Select a Product",
                            changeProp: 0,
                            options: r()
                        }]
                    }
                }
            }), e.Components.addType("stripe-button", {
                isComponent: function (e) {
                    var t = "";
                    return "BUTTON" == e.tagName && "builder-stripe-button" == e.className && (t = {type: "stripe-button"}), t
                },
                model: {
                    defaults: {
                        tagName: "button",
                        attributes: {class: "builder-stripe-button", type: "button"},
                        productid: "",
                        traits: [{
                            type: "select",
                            name: "productid",
                            label: "Select a Product",
                            changeProp: 0,
                            options: r()
                        }]
                    }
                }
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(1);
        t.default = function (e, t) {
            var n = e.Panels, a = e.getConfig(), r = "sw-visibility", i = "open-sm", s = "open-layers",
                l = "open-blocks", c = "fullscreen", d = "preview";
            a.showDevices = 0;
            var u = [{id: r, command: r, context: r, className: "far fa-square"}, {
                id: d,
                context: d,
                command: function (e) {
                    return e.runCommand(d)
                },
                className: "fa fa-eye"
            }, {id: c, command: c, context: c, className: "fas fa-expand"}];
            window.config.enable_edit_code && u.push({
                id: "edit",
                className: "fas fa-code",
                command: "code-edit",
                attributes: {title: "Edit"}
            }), u.push({
                id: "undo", className: "fa fa-undo", command: function (e) {
                    return e.runCommand("core:undo")
                }
            }, {
                id: "redo", className: "fas fa-redo", command: function (e) {
                    return e.runCommand("core:redo")
                }
            }, {
                id: o.cmdClear, className: "fa fa-trash", command: function (e) {
                    return e.runCommand(o.cmdClear)
                }
            }, {
                id: "back-button",
                command: function (e) {
                },
                className: "fa fa-arrow-circle-left btn-builder-new",
                attributes: {title: "Back Home", id: "back-button"}
            }, {
                id: "save-button", command: function (e) {
                }, className: "fa fa-save btn-builder-new", attributes: {title: "Save", id: "save-builder"}
            }, {
                id: "publish-button", command: function (e) {
                }, className: "fa fa fa-rocket btn-builder-new", attributes: {title: "Publish", id: "publish-builder"}
            }), n.getPanels().reset([{id: "commands", buttons: [{}]}, {id: "options", buttons: u}, {
                id: "views",
                buttons: [{id: i, command: i, active: !0, className: "fas fa-cog"}, {
                    id: "open-tm",
                    command: "open-tm",
                    className: "fa fa-cog"
                }, {id: s, command: s, className: "fa fa-bars"}, {id: l, command: l, className: "fa fa-th-large"}]
            }]), n.addPanel({id: "devices-c"}).get("buttons").add([{
                id: o.cmdDeviceDesktop,
                command: o.cmdDeviceDesktop,
                className: "fa fa-desktop",
                active: 1
            }, {id: o.cmdDeviceTablet, command: o.cmdDeviceTablet, className: "fa fa-tablet"}, {
                id: o.cmdDeviceMobile,
                command: o.cmdDeviceMobile,
                className: "fa fa-mobile"
            }]);
            var p = n.getButton("views", l);
            e.on("load", function () {
                return p && p.set("active", 1)
            }), t.showStylesOnChange && e.on("component:selected", function () {
                var t = n.getButton("views", i), o = n.getButton("views", s);
                o && o.get("active") || !e.getSelected() || t && t.set("active", 1)
            })
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
            var n = e.StyleManager, o = t.customStyleManager;
            n.getSectors().reset(o && o.length ? o : [{
                name: t.textLayout,
                open: !1,
                buildProps: ["margin", "padding", "width", "height", "max-width", "min-height"]
            }, {
                name: t.textTypography,
                open: !1,
                buildProps: ["font-family", "color", "font-size", "font-weight", "letter-spacing", "line-height", "text-align", "text-shadow"],
                properties: [{
                    property: "text-align",
                    list: [{value: "left", className: "fa fa-align-left"}, {
                        value: "center",
                        className: "fa fa-align-center"
                    }, {value: "right", className: "fa fa-align-right"}, {
                        value: "justify",
                        className: "fa fa-align-justify"
                    }]
                }]
            }, {
                name: t.textBackground,
                open: !1,
                buildProps: ["background-color", "background"]
            }, {name: t.textBorderAndShadow, open: !1, buildProps: ["box-shadow", "border", "border-radius"]}])
        }
    }])
});

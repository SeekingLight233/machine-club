(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/donation/donation"], {
        "4ed1": function(n, t, e) {
            "use strict";
            e.r(t);
            var o = e("b23d"),
                u = e.n(o);
            for (var i in o) "default" !== i && function(n) { e.d(t, n, function() { return o[n] }) }(i);
            t["default"] = u.a
        },
        "5e13": function(n, t, e) {},
        b23d: function(n, t, e) {
            "use strict";
            (function(n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
                var e = { data: function() { return {} }, methods: { donation: function() { n.previewImage({ urls: "https://www.jixieclub.com:3002/images/donation.jpg" }), wx.previewImage({ current: "https://www.jixieclub.com:3002/images/donation.jpg", urls: ["https://www.jixieclub.com:3002/images/donation.jpg"] }) } } };
                t.default = e
            }).call(this, e("543d")["default"])
        },
        d594: function(n, t, e) {
            "use strict";
            var o = e("5e13"),
                u = e.n(o);
            u.a
        },
        e024: function(n, t, e) {
            "use strict";
            var o = function() {
                    var n = this,
                        t = n.$createElement;
                    n._self._c
                },
                u = [];
            e.d(t, "a", function() { return o }), e.d(t, "b", function() { return u })
        },
        e8cb: function(n, t, e) {
            "use strict";
            e.r(t);
            var o = e("e024"),
                u = e("4ed1");
            for (var i in u) "default" !== i && function(n) { e.d(t, n, function() { return u[n] }) }(i);
            e("d594");
            var a = e("2877"),
                r = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
            t["default"] = r.exports
        }
    },
    [
        ["a24f", "common/runtime", "common/vendor"]
    ]
]);
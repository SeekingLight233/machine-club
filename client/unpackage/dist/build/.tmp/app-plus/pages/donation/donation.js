(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/donation/donation"], {
        "4ed1": function(n, t, e) {
            "use strict";
            e.r(t);
            var u = e("b23d"),
                o = e.n(u);
            for (var a in u) "default" !== a && function(n) { e.d(t, n, function() { return u[n] }) }(a);
            t["default"] = o.a
        },
        "5e13": function(n, t, e) {},
        b23d: function(n, t, e) {
            "use strict";
            (function(n) {
                Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
                var e = { data: function() { return {} }, methods: { donation: function() { n.previewImage({ urls: "https://www.jixieclub.com:3002/images/donation.jpg" }) } } };
                t.default = e
            }).call(this, e("6e42")["default"])
        },
        d594: function(n, t, e) {
            "use strict";
            var u = e("5e13"),
                o = e.n(u);
            o.a
        },
        e024: function(n, t, e) {
            "use strict";
            var u = function() {
                    var n = this,
                        t = n.$createElement;
                    n._self._c
                },
                o = [];
            e.d(t, "a", function() { return u }), e.d(t, "b", function() { return o })
        },
        e8cb: function(n, t, e) {
            "use strict";
            e.r(t);
            var u = e("e024"),
                o = e("4ed1");
            for (var a in o) "default" !== a && function(n) { e.d(t, n, function() { return o[n] }) }(a);
            e("d594");
            var i = e("2877"),
                r = Object(i["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
            t["default"] = r.exports
        }
    },
    [
        ["a24f", "common/runtime", "common/vendor"]
    ]
]);
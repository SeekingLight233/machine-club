(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/news/news"], {
        "2c54": function(t, e, n) {
            "use strict";
            var i = n("6e6b"),
                s = n.n(i);
            s.a
        },
        "6e6b": function(t, e, n) {},
        "92fb": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c
                },
                s = [];
            n.d(e, "a", function() { return i }), n.d(e, "b", function() { return s })
        },
        ae7b: function(t, e, n) {
            "use strict";
            (function(t, i) {
                Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
                var s = function() { return n.e("components/zy-search/zy-search").then(n.bind(null, "3509")) },
                    a = function() { return n.e("components/news-card/news-card").then(n.bind(null, "26e6")) },
                    o = (n("b559"), {
                        data: function() { return { findtext: "", list: [], Pnum: 0, realImg: [], time: 10, start: 0, end: 0 } },
                        methods: {
                            find: function() {
                                var e = this.findtext;
                                this.$store.state.find_text = this.findtext;
                                for (var n = [], i = 0; i < 2; i++)
                                    for (var s = 0; s < this.list[i].length; s++) { var a = this.list[i][s][0]; - 1 != a.search(e) && n.push(this.list[i][s]) }
                                this.$store.state.search_list = n, t.navigateTo({ url: "../search-res-tool/search-res-tool" })
                            },
                            getNews: function(e) {
                                var n = this;
                                t.request({
                                    url: "https://www.jixieclub.com:3002/list",
                                    data: { Pnum: e },
                                    success: function(t) {
                                        console.log(i(t.data, " at pages\\news\\news.vue:113")), console.log(i(t.data.length, " at pages\\news\\news.vue:114"));
                                        for (var e = 0; e < t.data.length; e++) {
                                            var s = "";
                                            if (s = t.data[e].imgsrc, "https://mmbiz.qpic.cn" == s.substring(0, 21)) {
                                                for (var a = s.split(""), o = 0; o < a.length; o++) "&" == a[o] && (a[o] = "/u0026");
                                                t.data[e].imgsrc = a.join("")
                                            }
                                        }
                                        for (var r = 0; r < 15; r++) t.data[r].realImg = "https://www.jixieclub.com:3002/static/" + t.data[r]._id + ".png";
                                        n.list = t.data.reverse(), n.end = (new Date).getTime(), n.time = n.end - n.start, console.log(i(n.time, " at pages\\news\\news.vue:140"))
                                    }
                                })
                            },
                            next: function() { this.start = (new Date).getTime(), wx.showLoading({ title: "加载中" }), setTimeout(function() { wx.hideLoading() }, this.time), this.Pnum++, this.getNews(this.Pnum), wx.pageScrollTo({ scrollTop: 0, duration: 300 }) },
                            pre: function() { this.start = (new Date).getTime(), wx.showLoading({ title: "加载中" }), setTimeout(function() { wx.hideLoading() }, this.time), this.Pnum--, this.getNews(this.Pnum), wx.pageScrollTo({ scrollTop: 0, duration: 300 }) },
                            toDetail: function(t) {}
                        },
                        computed: {},
                        created: function() { this.start = (new Date).getTime(), wx.showToast({ title: "数据加载中", icon: "loading", duration: this.time }), this.getNews(this.Pnum) },
                        beforeMount: function() {},
                        components: { zySearch: s, newsCard: a }
                    });
                e.default = o
            }).call(this, n("6e42")["default"], n("0de9")["default"])
        },
        af42: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("92fb"),
                s = n("d393");
            for (var a in s) "default" !== a && function(t) { n.d(e, t, function() { return s[t] }) }(a);
            n("2c54");
            var o = n("2877"),
                r = Object(o["a"])(s["default"], i["a"], i["b"], !1, null, "65e02c8a", null);
            e["default"] = r.exports
        },
        d393: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("ae7b"),
                s = n.n(i);
            for (var a in i) "default" !== a && function(t) { n.d(e, t, function() { return i[t] }) }(a);
            e["default"] = s.a
        }
    },
    [
        ["8200", "common/runtime", "common/vendor"]
    ]
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/news/news"], {
        "0846": function(t, e, n) {},
        "67d4": function(t, e, n) {
            "use strict";
            var i = n("0846"),
                a = n.n(i);
            a.a
        },
        ae7b: function(t, e, n) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
                var i = function() { return n.e("components/zy-search/zy-search").then(n.bind(null, "3509")) },
                    a = function() { return n.e("components/news-card/news-card").then(n.bind(null, "26e6")) },
                    s = (n("b559"), {
                        data: function() { return { findtext: "", list: [], Pnum: 0, realImg: [], time: 10, start: 0, end: 0 } },
                        methods: {
                            find: function() {
                                var e = this.findtext;
                                this.$store.state.find_text = this.findtext;
                                for (var n = [], i = 0; i < 2; i++)
                                    for (var a = 0; a < this.list[i].length; a++) { var s = this.list[i][a][0]; - 1 != s.search(e) && n.push(this.list[i][a]) }
                                this.$store.state.search_list = n, t.navigateTo({ url: "../search-res-tool/search-res-tool" })
                            },
                            getNews: function(e) {
                                var n = this;
                                t.request({
                                    url: "https://www.jixieclub.com:3002/list",
                                    data: { Pnum: e },
                                    success: function(t) {
                                        console.log(t.data), console.log(t.data.length);
                                        for (var e = 0; e < t.data.length; e++) {
                                            var i = "";
                                            if (i = t.data[e].imgsrc, "https://mmbiz.qpic.cn" == i.substring(0, 21)) {
                                                for (var a = i.split(""), s = 0; s < a.length; s++) "&" == a[s] && (a[s] = "/u0026");
                                                t.data[e].imgsrc = a.join("")
                                            }
                                        }
                                        for (var o = 0; o < 15; o++) t.data[o].realImg = "https://www.jixieclub.com:3002/static/" + t.data[o]._id + ".png";
                                        n.list = t.data.reverse(), n.end = (new Date).getTime(), n.time = n.end - n.start, console.log(n.time)
                                    }
                                }), wx.cloud.callFunction({
                                    name: "pullnews",
                                    data: { Pnum: e },
                                    success: function(t) {
                                        var e = JSON.parse(t.result);
                                        t.data = e.reverse(), console.log(t.data), console.log(t.data.length);
                                        for (var i = 0; i < t.data.length; i++) {
                                            var a = "";
                                            if (a = t.data[i].imgsrc, "https://mmbiz.qpic.cn" == a.substring(0, 21)) {
                                                for (var s = a.split(""), o = 0; o < s.length; o++) "&" == s[o] && (s[o] = "/u0026");
                                                t.data[i].imgsrc = s.join("")
                                            }
                                        }
                                        for (var r = 0; r < 15; r++) t.data[r].realImg = "https://www.jixieclub.com:3002/static/" + t.data[r]._id + ".png";
                                        n.list = t.data.reverse(), n.end = (new Date).getTime(), n.time = n.end - n.start, console.log(n.time)
                                    }
                                })
                            },
                            next: function() { this.start = (new Date).getTime(), wx.showLoading({ title: "加载中" }), setTimeout(function() { wx.hideLoading() }, this.time), this.Pnum++, this.getNews(this.Pnum), wx.pageScrollTo({ scrollTop: 0, duration: 300 }) },
                            pre: function() { this.start = (new Date).getTime(), wx.showLoading({ title: "加载中" }), setTimeout(function() { wx.hideLoading() }, this.time), this.Pnum--, this.getNews(this.Pnum), wx.pageScrollTo({ scrollTop: 0, duration: 300 }) },
                            toDetail: function(e) { this.$store.state.link = e, console.log(this.$store.state.link), t.navigateTo({ url: "../news-detail/news-detail" }) }
                        },
                        computed: {},
                        created: function() { this.start = (new Date).getTime(), wx.showToast({ title: "数据加载中", icon: "loading", duration: this.time }), this.getNews(this.Pnum) },
                        beforeMount: function() {},
                        components: { zySearch: i, newsCard: a }
                    });
                e.default = s
            }).call(this, n("543d")["default"])
        },
        af42: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("db12"),
                a = n("d393");
            for (var s in a) "default" !== s && function(t) { n.d(e, t, function() { return a[t] }) }(s);
            n("67d4");
            var o = n("2877"),
                r = Object(o["a"])(a["default"], i["a"], i["b"], !1, null, "1600cbbd", null);
            e["default"] = r.exports
        },
        d393: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("ae7b"),
                a = n.n(i);
            for (var s in i) "default" !== s && function(t) { n.d(e, t, function() { return i[t] }) }(s);
            e["default"] = a.a
        },
        db12: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c
                },
                a = [];
            n.d(e, "a", function() { return i }), n.d(e, "b", function() { return a })
        }
    },
    [
        ["8200", "common/runtime", "common/vendor"]
    ]
]);
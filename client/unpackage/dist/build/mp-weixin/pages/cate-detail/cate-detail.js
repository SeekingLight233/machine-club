(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/cate-detail/cate-detail"], {
        "0f32": function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a("6ee5"),
                i = a.n(n);
            for (var s in n) "default" !== s && function(t) { a.d(e, t, function() { return n[t] }) }(s);
            e["default"] = i.a
        },
        "3fe1": function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a("c36e"),
                i = a("0f32");
            for (var s in i) "default" !== s && function(t) { a.d(e, t, function() { return i[t] }) }(s);
            a("8a85");
            var o = a("2877"),
                c = Object(o["a"])(i["default"], n["a"], n["b"], !1, null, "1605a3ec", null);
            e["default"] = c.exports
        },
        "6ee5": function(t, e, a) {
            "use strict";
            (function(t) {
                Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
                var n = function() { return a.e("components/news-card/news-card").then(a.bind(null, "26e6")) },
                    i = {
                        data: function() { return { catetitle: "", list: [], Pnum: 1, realImg: [], time: 10, start: 0, end: 0 } },
                        methods: {
                            getNews: function(e) {
                                var a = this;
                                t.request({
                                    url: "https://www.jixieclub.com:3002/cate",
                                    data: { Pnum: e, cate: this.$store.state.cate },
                                    success: function(t) {
                                        console.log(t.data), t.data.length < 15 && (a.list = t.data);
                                        for (var e = 0; e < t.data.length; e++) {
                                            var n = "";
                                            if (n = t.data[e].imgsrc, "https://mmbiz.qpic.cn" == n.substring(0, 21)) {
                                                for (var i = n.split(""), s = 0; s < i.length; s++) "&" == i[s] && (i[s] = "/u0026");
                                                t.data[e].imgsrc = i.join("")
                                            }
                                        }
                                        for (var o = 0; o < 15; o++) t.data[o].realImg = "https://www.jixieclub.com:3002/static/" + t.data[o]._id + ".png";
                                        a.list = t.data, a.end = (new Date).getTime(), a.time = a.end - a.start
                                    }
                                }), wx.cloud.callFunction({
                                    name: "pullcate",
                                    data: { Pnum: e, cate: this.$store.state.cate },
                                    success: function(t) {
                                        console.log(t.result), t.data = JSON.parse(t.result), console.log(t.data), t.data.length < 15 && (a.list = t.data);
                                        for (var e = 0; e < t.data.length; e++) {
                                            var n = "";
                                            if (n = t.data[e].imgsrc, "https://mmbiz.qpic.cn" == n.substring(0, 21)) {
                                                for (var i = n.split(""), s = 0; s < i.length; s++) "&" == i[s] && (i[s] = "/u0026");
                                                t.data[e].imgsrc = i.join("")
                                            }
                                        }
                                        for (var o = 0; o < 15; o++) t.data[o].realImg = "https://www.jixieclub.com:3002/static/" + t.data[o]._id + ".png";
                                        a.list = t.data, a.end = (new Date).getTime(), a.time = a.end - a.start
                                    }
                                })
                            },
                            next: function() { this.start = (new Date).getTime(), wx.showLoading({ title: "加载中" }), setTimeout(function() { wx.hideLoading() }, this.time), this.Pnum++, this.getNews(this.Pnum), wx.pageScrollTo({ scrollTop: 0, duration: 300 }) },
                            pre: function() { this.start = (new Date).getTime(), wx.showLoading({ title: "加载中" }), setTimeout(function() { wx.hideLoading() }, this.time), this.Pnum--, this.getNews(this.Pnum), wx.pageScrollTo({ scrollTop: 0, duration: 300 }) },
                            toDetail: function(e) { this.$store.state.link = e, console.log(this.$store.state.link), t.navigateTo({ url: "../news-detail/news-detail" }) }
                        },
                        components: { newsCard: n },
                        created: function() { this.catetitle = this.$store.state.catetitle, this.start = (new Date).getTime(), wx.showToast({ title: "数据加载中", icon: "loading", duration: this.time }), this.getNews(this.Pnum) }
                    };
                e.default = i
            }).call(this, a("543d")["default"])
        },
        "8a85": function(t, e, a) {
            "use strict";
            var n = a("b7c6"),
                i = a.n(n);
            i.a
        },
        b7c6: function(t, e, a) {},
        c36e: function(t, e, a) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c
                },
                i = [];
            a.d(e, "a", function() { return n }), a.d(e, "b", function() { return i })
        }
    },
    [
        ["5d26", "common/runtime", "common/vendor"]
    ]
]);
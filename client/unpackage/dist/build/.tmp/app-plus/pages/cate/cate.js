(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["pages/cate/cate"], {
        "0f73": function(t, e, i) {
            "use strict";
            (function(t, c) {
                Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
                var n = function() { return i.e("components/uni-grid/uni-grid").then(i.bind(null, "c663")) },
                    a = function() { return i.e("components/uni-grid-item/uni-grid-item").then(i.bind(null, "7021")) },
                    u = {
                        data: function() { return { list: [{ url: "https://www.jixieclub.com:3002/images/jxyl.png", text: "机械原理", cate: "jxyl" }, { url: "https://www.jixieclub.com:3002/images/jxsj.png", text: "机械设计", cate: "jxsj" }, { url: "https://www.jixieclub.com:3002/images/jxzz.png", text: "机械制造", cate: "jxzz" }, { url: "https://www.jixieclub.com:3002/images/cad.png", text: "CAD/CAM", cate: "cad" }, { url: "https://www.jixieclub.com:3002/images/gjjs.png", text: "工匠精神", cate: "gjjs" }, { url: "https://www.jixieclub.com:3002/images/kyzq.png", text: "考研专区", cate: "kyzq" }, { url: "https://www.jixieclub.com:3002/images/bysj.png", text: "毕业设计", cate: "bysj" }, { url: "https://www.jixieclub.com:3002/images/diy.png", text: "diy专区", cate: "diy" }, { url: "https://www.jixieclub.com:3002/images/gyzdh.png", text: "工业自动化", cate: "gyzdh" }, { url: "https://www.jixieclub.com:3002/images/clgc.png", text: "材料工程", cate: "clgc" }, { url: "https://www.jixieclub.com:3002/images/qykj.png", text: "前沿科技", cate: "qykj" }, { url: "https://www.jixieclub.com:3002/images/zyxz.png", text: "资源下载", cate: "zyxz" }] } },
                        methods: {
                            change: function(e) {
                                var i = e.detail.index;
                                this.$store.state.cateindex = i, console.log(t(this.list[i].text, " at pages\\cate\\cate.vue:91")), this.$store.state.catetitle = this.list[i].text;
                                var n = this.list[i].text;
                                this.$store.state.cate = this.list[i].cate, c.navigateTo({ url: "../cate-detail/cate-detail?title=" + n })
                            }
                        },
                        components: { uniGrid: n, uniGridItem: a }
                    };
                e.default = u
            }).call(this, i("0de9")["default"], i("6e42")["default"])
        },
        "146e": function(t, e, i) {
            "use strict";
            var c = i("30d8"),
                n = i.n(c);
            n.a
        },
        "30d8": function(t, e, i) {},
        "6df6": function(t, e, i) {
            "use strict";
            i.r(e);
            var c = i("ac83"),
                n = i("c9d8");
            for (var a in n) "default" !== a && function(t) { i.d(e, t, function() { return n[t] }) }(a);
            i("146e");
            var u = i("2877"),
                l = Object(u["a"])(n["default"], c["a"], c["b"], !1, null, "195233c8", null);
            e["default"] = l.exports
        },
        ac83: function(t, e, i) {
            "use strict";
            var c = function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c
                },
                n = [];
            i.d(e, "a", function() { return c }), i.d(e, "b", function() { return n })
        },
        c9d8: function(t, e, i) {
            "use strict";
            i.r(e);
            var c = i("0f73"),
                n = i.n(c);
            for (var a in c) "default" !== a && function(t) { i.d(e, t, function() { return c[t] }) }(a);
            e["default"] = n.a
        }
    },
    [
        ["835d", "common/runtime", "common/vendor"]
    ]
]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/navTab"],{"60d8":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var i=this;t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/i.tabTitle.length,i.isLongWidth=t.windowWidth/5}}),this.toView="id0"},methods:{navClick:function(t){this.$emit("changeTab",t),this.tabClick=t,this.isLeft=t*this.isWidth},longClick:function(t){var i=t-2;i=i<=0?0:i,this.toView="id".concat(i),this.tabClick=t,this.isLeft=t*this.isLongWidth,this.$emit("changeTab",t)}}};i.default=n}).call(this,n("6e42")["default"])},"6c72":function(t,i,n){},"7ec9":function(t,i,n){"use strict";n.r(i);var e=n("60d8"),a=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);i["default"]=a.a},bf86:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},ca29:function(t,i,n){"use strict";var e=n("6c72"),a=n.n(e);a.a},db92:function(t,i,n){"use strict";n.r(i);var e=n("bf86"),a=n("7ec9");for(var c in a)"default"!==c&&function(t){n.d(i,t,function(){return a[t]})}(c);n("ca29");var s=n("2877"),u=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,null,null);i["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/navTab-create-component',
    {
        'components/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("db92"))
        })
    },
    [['components/navTab-create-component']]
]);                

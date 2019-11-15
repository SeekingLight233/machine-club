import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/jxsj/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jxsj/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/About.vue')
        },
        {
            path: '/jxsj/cjzh',
            name: 'cjzh',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/cjzh.vue')
        },
        {
            path: '/jxsj/qzc',
            name: 'qzc',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qzc.vue')
        },
        {
            path: '/jxsj/gzzc',
            name: 'gzzc',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gzzc.vue')
        },
        {
            path: '/jxsj/vxc',
            name: 'vxc',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/vxc.vue')
        },
        {
            path: '/jxsj/sxgj1',
            name: 'sxgj1',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/sxgj1.vue')
        },
        {
            path: '/jxsj/sxgj2',
            name: 'sxgj2',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/sxgj2.vue')
        },
        {
            path: '/jxsj/gxmj',
            name: 'gxmj',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gxmj.vue')
        },
        {
            path: '/jxsj/zjc',
            name: 'zjc',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/zjc.vue')
        },
        {
            path: '/jxsj/kjc',
            name: 'kjc',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/kjc.vue')
        },
        {
            path: '/jxsj/gcsd',
            name: 'gcsd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gcsd.vue')
        },
        {
            path: '/jxsj/nwryj',
            name: 'nwryj',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/nwryj.vue')
        },
        {
            path: '/jxsj/cxb',
            name: 'cxb',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/cxb.vue')
        },
        {
            path: '/jxsj/msl',
            name: 'msl',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/msl.vue')
        },
        {
            path: '/jxsj/cdlx',
            name: 'cdlx',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/cdlx.vue')
        },
        {
            path: '/jxsj/ksa',
            name: 'ksa',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/ksa.vue')
        },
        {
            path: '/jxsj/txml',
            name: 'txml',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/txml.vue')
        },
        {
            path: '/jxsj/gdf',
            name: 'gdf',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gdf.vue')
        },
        {
            path: '/jxsj/zxyb',
            name: 'zxyb',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/zxyb.vue')
        },
        {
            path: '/jxsj/xyyl',
            name: 'xyyl',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/xyyl.vue')
        },
        {
            path: '/jxsj/wqyl',
            name: 'wqyl',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/wqyl.vue')
        },
        {
            path: '/jxsj/gzl',
            name: 'gzl',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gzl.vue')
        },
        {
            path: '/jxsj/cdlxcd',
            name: 'cdlxcd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/cdlxcd.vue')
        },
        {
            path: '/jxsj/cdyzj',
            name: 'cdyzj',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/cdyzj.vue')
        },
        {
            path: '/jxsj/ll_zj',
            name: 'll_zj',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/ll_zj.vue')
        },
        //author SXY 
        {
            path: '/jxsj/yyg_xz',
            name: 'yyg_xz',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yyg_xz.vue')
        },
        {
            path: '/jxsj/yyg_eh',
            name: 'yyg_eh',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yyg_eh.vue')
        },
        {
            path: '/jxsj/gz_nj',
            name: 'gz_nj',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gz_nj.vue')
        },
        {
            path: '/jxsj/gz_bh',
            name: 'gz_bh',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gz_bh.vue')
        },
        {
            path: '/jxsj/gkq',
            name: 'gkq',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gkq.vue')
        },
        {
            path: '/jxsj/szq',
            name: 'szq',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/szq.vue')
        },
        {
            path: '/jxsj/qgtbhd',
            name: 'qgtbhd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qgtbhd.vue')
        },
        {
            path: '/jxsj/qghsg',
            name: 'qghsg',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qghsg.vue')
        },
        {
            path: '/jxsj/qgjpk',
            name: 'qgjpk',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qgjpk.vue')
        },
        {
            path: '/jxsj/qlxt_2',
            name: 'qlxt_2',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qlxt_2.vue')
        },
        {
            path: '/jxsj/qlxt_1',
            name: 'qlxt_1',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qlxt_1.vue')
        },
        {
            path: '/jxsj/qycd',
            name: 'qycd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/qycd.vue')
        },
        {
            path: '/jxsj/nrj',
            name: 'nrj',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/nrj.vue')
        },
        {
            path: '/jxsj/ljgy',
            name: 'ljgy',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/ljgy.vue')
        },
        {
            path: '/jxsj/ll_cg',
            name: 'll_cg',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/ll_cg.vue')
        },
        {
            path: '/jxsj/ll_cdh',
            name: 'll_cdh',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/ll_cdh.vue')
        },
        {
            path: '/jxsj/pmjg',
            name: 'pmjg',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/pmjg.vue')
        },
        {
            path: '/jxsj/zcpjyq',
            name: 'zcpjyq',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/zcpjyq.vue')
        },
        {
            path: '/jxsj/zcpv',
            name: 'zcpv',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/zcpv.vue')
        },
        {
            path: '/jxsj/zchd',
            name: 'zchd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/zchd.vue')
        },
        {
            path: '/jxsj/gdzcdl',
            name: 'gdzcdl',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gdzcdl.vue')
        },
        {
            path: '/jxsj/dhs_sd',
            name: 'dhs_sd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/dhs_sd.vue')
        },
        {
            path: '/jxsj/dhs_tl',
            name: 'dhs_tl',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/dhs_tl.vue')
        },
        {
            path: '/jxsj/yymd',
            name: 'yymd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yymd.vue')
        },
        {
            path: '/jxsj/yymd_srll',
            name: 'yymd_srll',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yymd_srll.vue')
        },
        {
            path: '/jxsj/gdf_02',
            name: 'gdf_02',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gdf_02.vue')
        },
        {
            path: '/jxsj/yymd_scv-01',
            name: 'yymd_scv-01',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yymd_scv-01.vue')
        },
        {
            path: '/jxsj/yymd_scv-02',
            name: 'yymd_scv-02',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yymd_scv-02.vue')
        },
        {
            path: '/jxsj/yymd_scp-01',
            name: 'yymd_scp-01',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yymd_scp-01.vue')
        },
        {
            path: '/jxsj/yymd_scp-02',
            name: 'yymd_scp-02',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yymd_scp-02.vue')
        },
        {
            path: '/jxsj/yyg01',
            name: 'yyg01',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yyg01.vue')
        },
        {
            path: '/jxsj/yyg02',
            name: 'yyg02',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yyg02.vue')
        },
        {
            path: '/jxsj/yyghs',
            name: 'yyghs',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yyghs.vue')
        },
        {
            path: '/jxsj/yygbh02',
            name: 'yygbh02',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yygbh02.vue')
        },
        {
            path: '/jxsj/yygbh01',
            name: 'yygbh01',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/yygbh01.vue')
        },
        {
            path: '/jxsj/hsg',
            name: 'hsg',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/hsg.vue')
        },
        {
            path: '/jxsj/gtlw',
            name: 'gtlw',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxsj/gtlw.vue')
        },
        {
            path: '/jxcd/dgvd',
            name: 'dgvd',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/dgvd')
        },
        {
            path: '/jxcd/dcdzy',
            name: 'dcdzy',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/dcdzy')
        },
        {
            path: '/jxcd/wgfdy',
            name: 'wgfdy',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wgfdy')
        },
        {
            path: '/jxcd/wg04',
            name: 'wg04',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wg04')
        },
        {
            path: '/jxcd/ac05',
            name: 'ac05',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/ac05')
        },
        {
            path: '/jxcd/wg06',
            name: 'wg06',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wg06')
        },
        {
            path: '/jxcd/wg07',
            name: 'wg07',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wg07')
        },
        {
            path: '/jxcd/cd08',
            name: 'cd08',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cd08')
        },
        {
            path: '/jxcd/wg09',
            name: 'wg09',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wg09')
        },
        {
            path: '/jxcd/wg10',
            name: 'wg10',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wg10')
        },
        {
            path: '/jxcd/fd11',
            name: 'fd11',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/fd11')
        },
        {
            path: '/jxcd/cd12',
            name: 'cd12',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cd12')
        },
        {
            path: '/jxcd/cg13',
            name: 'cg13',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cg13')
        },
        {
            path: '/jxcd/fd14',
            name: 'fd14',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/fd14')
        },
        {
            path: '/jxcd/yz15',
            name: 'yz15',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/yz15')
        },
        {
            path: '/jxcd/zx16',
            name: 'zx16',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/zx16')
        },
        {
            path: '/jxcd/jx17',
            name: 'jx17',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/jx17')
        },
        {
            path: '/jxcd/fx18',
            name: 'fx18',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/fx18')
        },
        {
            path: '/jxcd/zg19',
            name: 'zg19',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/zg19')
        },
        {
            path: '/jxcd/yz20',
            name: 'yz20',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/yz20')
        },
        {
            path: '/jxcd/cd21',
            name: 'cd21',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cd21')
        },
        {
            path: '/jxcd/hd22',
            name: 'hd22',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/hd22')
        },
        {
            path: '/jxcd/hd23',
            name: 'hd23',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/hd23')
        },
        {
            path: '/jxcd/gd24',
            name: 'gd24',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/gd24')
        },
        {
            path: '/jxcd/lg25',
            name: 'lg25',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/lg25')
        },
        {
            path: '/jxcd/gz26',
            name: 'gz26',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/gz26')
        },
        {
            path: '/jxcd/qd27',
            name: 'qd27',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/qd27')
        },
        {
            path: '/jxcd/kj28',
            name: 'kj28',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/kj28')
        },
        {
            path: '/jxcd/kw29',
            name: 'kw29',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/kw29')
        },
        {
            path: '/jxcd/lj30',
            name: 'lj30',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/lj30')
        },
        {
            path: '/jxcd/lj31',
            name: 'lj31',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/lj31')
        },
        {
            path: '/jxcd/lj32',
            name: 'lj32',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/lj32')
        },
        {
            path: '/jxcd/tx33',
            name: 'tx33',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/tx33')
        },
        {
            path: '/jxcd/tx34',
            name: 'tx34',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/tx34')
        },
        {
            path: '/jxcd/zt35',
            name: 'zt35',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/zt35')
        },
        {
            path: '/jxcd/hd36',
            name: 'hd36',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/hd36')
        },
        {
            path: '/jxcd/hd37',
            name: 'hd37',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/hd37')
        },
        {
            path: '/jxcd/hd38',
            name: 'hd38',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/hd38')
        },
        {
            path: '/jxcd/wc39',
            name: 'wc39',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc39')
        },
        {
            path: '/jxcd/nc40',
            name: 'nc40',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc40')
        },
        {
            path: '/jxcd/wc41',
            name: 'wc41',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc41')
        },
        {
            path: '/jxcd/nc42',
            name: 'nc42',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc42')
        },

        //author by SXY
        {
            path: '/jxcd/wc43',
            name: 'wc43',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc43')
        },
        {
            path: '/jxcd/nc44',
            name: 'nc44',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc44')
        },
        {
            path: '/jxcd/zc45',
            name: 'zc45',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/zc45')
        },
        {
            path: '/jxcd/xc46',
            name: 'xc46',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/xc46')
        },
        {
            path: '/jxcd/rz47',
            name: 'rz47',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/rz47')
        },
        {
            path: '/jxcd/cg48',
            name: 'cg48',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cg48')
        },
        {
            path: '/jxcd/cg49',
            name: 'cg49',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cg49')
        },
        {
            path: '/jxcd/wc50',
            name: 'wc50',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc50')
        },
        {
            path: '/jxcd/nc51',
            name: 'nc51',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc51')
        },
        {
            path: '/jxcd/zd52',
            name: 'zd52',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/zd52')
        },
        {
            path: '/jxcd/cl53',
            name: 'cl53',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cl53')
        },
        {
            path: '/jxcd/cl54',
            name: 'cl54',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cl54')
        },
        {
            path: '/jxcd/qx55',
            name: 'qx55',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/qx55')
        },
        {
            path: '/jxcd/wc56',
            name: 'wc56',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc56')
        },
        {
            path: '/jxcd/xc57',
            name: 'xc57',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/xc57')
        },
        {
            path: '/jxcd/nc58',
            name: 'nc58',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc58')
        },
        {
            path: '/jxcd/xc59',
            name: 'xc59',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/xc59')
        },
        {
            path: '/jxcd/cm60',
            name: 'cm60',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cm60')
        },
        {
            path: '/jxcd/bz61',
            name: 'bz61',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/bz61')
        },
        {
            path: '/jxcd/wc62',
            name: 'wc62',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc62')
        },
        {
            path: '/jxcd/cg63',
            name: 'cg63',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cg63')
        },
        {
            path: '/jxcd/nc64',
            name: 'nc64',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc64')
        },
        {
            path: '/jxcd/nc65',
            name: 'nc65',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc65')
        },
        {
            path: '/jxcd/nc66',
            name: 'nc66',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc66')
        },
        {
            path: '/jxcd/bz67',
            name: 'bz67',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/bz67')
        },
        {
            path: '/jxcd/wc68',
            name: 'wc68',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc68')
        },
        {
            path: '/jxcd/wc69',
            name: 'wc69',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc69')
        },
        {
            path: '/jxcd/wc70',
            name: 'wc70',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc70')
        },
        {
            path: '/jxcd/wc71',
            name: 'wc71',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc71')
        },
        {
            path: '/jxcd/wc72',
            name: 'wc72',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc72')
        },
        {
            path: '/jxcd/nc73',
            name: 'nc73',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc73')
        },
        {
            path: '/jxcd/nc74',
            name: 'nc74',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc74')
        },
        {
            path: '/jxcd/nc75',
            name: 'nc75',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc75')
        },
        {
            path: '/jxcd/nc76',
            name: 'nc76',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc76')
        },
        {
            path: '/jxcd/nc77',
            name: 'nc77',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc77')
        },
        {
            path: '/jxcd/wc78',
            name: 'wc78',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc78')
        },
        {
            path: '/jxcd/nc79',
            name: 'nc79',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc79')
        },
        {
            path: '/jxcd/wc80',
            name: 'wc80',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/wc80')
        },
        {
            path: '/jxcd/nc81',
            name: 'nc81',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/nc81')
        },
        {
            path: '/jxcd/cl82',
            name: 'cl82',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cl82')
        },
        {
            path: '/jxcd/cd83',
            name: 'cd83',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/cd83')
        },
        {
            path: '/jxcd/dc84',
            name: 'dc84',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/dc84')
        },
        {
            path: '/jxcd/dc85',
            name: 'dc85',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/dc85')
        },
        {
            path: '/jxcd/dc86',
            name: 'dc86',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/jxcd/dc86')
        },
    ]
})
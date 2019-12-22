<template>
	<view>
		<view class="example-body cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
			<uni-grid :column="3" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in list" :key="index">
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>

	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default {
		data() {
			return {
				list: [{
						url: 'https://www.jixieclub.com:3002/images/jxyl.png',
						text: '机械原理',
						cate:'jxyl'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/jxsj.png',
						text: '机械设计',
						cate:'jxsj'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/jxzz.png',
						text: '机械制造',
						cate:'jxzz'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/cad.png',
						text: 'CAD/CAM',
						cate:'cad'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/gjjs.png',
						text: '工匠精神',
						cate:'gjjs'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/kyzq.png',
						text: '考研专区',
						cate:'kyzq'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/bysj.png',
						text: '毕业设计',
						cate:'bysj'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/diy.png',
						text: 'diy专区',
						cate:'diy'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/gyzdh.png',
						text: '工业自动化',
						cate:'gyzdh'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/clgc.png',
						text: '材料工程',
						cate:'clgc'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/qykj.png',
						text: '前沿科技',
						cate:'qykj'
					},
					{
						url: 'https://www.jixieclub.com:3002/images/zyxz.png',
						text: '资源下载',
						cate:'zyxz'
					}
				]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				// console.log(index)
				this.$store.state.cateindex = index;
				console.log(this.list[index].text);		
				this.$store.state.catetitle = this.list[index].text;
				var text = this.list[index].text;
				this.$store.state.cate = this.list[index].cate;
				uni.navigateTo({
					url:"../cate-detail/cate-detail?title="+text	
				})
			}
		},
		components: {
			uniGrid,
			uniGridItem
		}
	}
</script>

<style scoped>
	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.image {
		width: 50upx;
		height: 50upx;
	}

	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
</style>

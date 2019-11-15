<template>
	<view>
		<text>
			<web-view :src="link"></web-view>
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				link:"https://www.jixieclub.com/#/"
			}
		},
		methods: {
			
		},
		created() {
			this.link = this.link+this.$store.state.tool_link;
			console.log(this.link);
		}
	}
</script>

<style>

</style>

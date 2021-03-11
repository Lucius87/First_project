<template>
	<div class="box">
		<div class="icon">
			<img :src="icon" alt="item">
		</div>
		<h3 class="iconbox_title">
			{{ title }}
		</h3>
		<p class="iconbox_desc">
			{{ desc }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Box',
	props: {
		icon: {
			type: String,
			default: '/images/magic_wand.png'
		},
		title: {
			type: String,
			default: 'empty title'
		},
		desc: {
			type: String,
			default: 'empty description'
		}
	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.box
	width: 25%
	margin: 0 15px
	padding: 40px 20px
	background-color: #fff
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	.iconbox_title
		font-size: 13px
	.iconbox_desc
		font-size: 14px
		color: #777

</style>

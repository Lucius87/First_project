<template>
	<div class="item margin_top_0">
		<div class="hover_area">
			<div class="desc_area">
				<span class="text">{{ text }}</span>
			</div>
		</div>
		<img :src="image" alt="item">
	</div>
</template>

<script>
export default {
	name: 'GalleryBox',
	props: {
		text: {
			type: String,
			default: 'empty text'
		},
		image: {
			type: String,
			default: '/images/shark.jpg'
		}

	},
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.item
	width: 360px
	height: 225px
	margin-top: 40px
	position: relative
	img
		width: 360px
		height: 225px
	.hover_area
		position: absolute
		top: 0
		right: 0
		bottom: 0
		left: 0
		background: rgba(158,84,6,.4)
		padding: 30px
		opacity: 0
		transition: 0.5s ease
		.desc_area
			border: 1px solid #fff
			width: 100%
			height: 100%
			display: flex
			align-items: center
			justify-content: center
			padding: 0 20px
			box-sizing: border-box
			opacity: 0
			transition: 2s ease
			.text
				text-align: center
				font-size: 18px
				text-transform: uppercase
				color: #ffffff
	&:hover
		.hover_area
			opacity: 1
			cursor: pointer
			transition: 0.5s ease
			.desc_area
				opacity: 1
				transition: 0.5s ease
</style>

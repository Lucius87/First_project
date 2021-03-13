<template>
	<div class="next_slide_arrow" @click="nextSection">
		<i class="fa fa-angle-down" />
	</div>
</template>

<script>
export default {
	name: 'Arrow',
	data: () => ({}),
	methods: {
		nextSection() {
			this.$scrollTo('#services')
		}
	},
}
</script>

<style lang="sass" scoped>
$size: 50px
$color: #fff
.next_slide_arrow
	position: absolute
	bottom: 20px
	left: 50%
	transform: translateX(-50%)
	width: $size
	height: $size
	border: 1px solid $color
	border-radius: $size
	display: flex
	align-items: center
	justify-content: center
	&:hover
		cursor: pointer

	.fa
		color: $color
		font-size: 30px
</style>

<template>
	<div class="scroll_top">
		<span v-scroll-to="home_id" class="scroll_top">
			<i class="fa fa-angle-up" />
		</span>
	</div>
</template>

<script>
export default {
	name: 'Section10',
	data: () => ({
		home_id: '#home'
	}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.scroll_top
	color: white
	position: fixed
	right: 30px
	bottom: 30px
	width: 35px
	height: 35px
	border: 1px solid darkgrey
	border-radius: 3px
	background-color: darkgrey
	display: flex
	align-items: center
	justify-content: center
	text-decoration: none
	scroll-behavior: smooth
	&:hover
		background-color: #eee
		color: #e05454
		border: #eee


</style>

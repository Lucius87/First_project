<template>
	<div class="scroll_top">
		<i class="fa fa-angle-up" />
	</div>
</template>

<script>
export default {
	name: 'Section10',
	data: () => ({}),
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
	&:hover
		background-color: #eee
		color: #e05454
		border: #eee


</style>

<template>
	<section class="content_wrapper section_6">
		<div class="content">
			<h2 class="r_u_ready">
				are you ready to start?
			</h2>
			<h4 class="desk">
				I'm available for freelance projects
			</h4>
			<a href="#contact" class="button_h">
				Hire me
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Section6',
	data: () => ({}),
	methods: {},
}
</script>

<style lang="sass" scoped>

.section_6
	background-image: url("/images/item_3.jpg")
	background-size: cover
	background-repeat: no-repeat
	background-position: 0 0
	padding: 50px 0
	display: flex
	text-align: center
	justify-content: center
	.content
		width: 100%
		max-width: 1170px
		margin: 0 auto
		padding: 0 15px
		font-size: 20px
		color: #fff
		.r_u_ready
			font-weight: 700
			text-transform: uppercase
		.desk
			padding: 25px 0 30px
		.button_h
			margin: 5px 0
			padding: 10px 25px
			cursor: pointer
			background: white
			font-size: 13px
			font-weight: 400
			text-transform: uppercase
			text-decoration: none
			color: #000000
			border-radius: 3px
			display: inline-block

</style>

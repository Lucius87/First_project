<template>
	<section class="content_wrapper section_bar">
		<div class="navbar content">
			<h1 class="title">
				Stanislav Petruk
			</h1>
			<div class="nav_buttons">
				<div v-for="item in menu" :key="item.text" v-scroll-to="item.link" :class="['button',{active:item.active}]">
					<span class="sub_title">{{ item.text }}</span>
				</div>
			</div>
			<!--<div class="burger_area">

			</div>-->
		</div>
	</section>
</template>

<script>
export default {
	name: 'Section2',
	props: { menu:Array },
	data: () => ({}),
	methods: {
	},
}
</script>

<style lang="sass" scoped>
.section_bar
	background-color: white
	position: sticky
	top: 0
	z-index: 99
	.title
		display: flex

.navbar
	display: flex
	flex-direction: row
	align-items: center
	justify-content: space-between
	height: 51px

.nav_buttons
	display: flex
	flex-direction: row
	@media screen and (max-width: 1500px)
		display: none
	.button
		color: black
		.sub_title
			margin: 0 20px
			text-transform: uppercase
		&:hover,&.active
			color: red
			cursor: pointer

</style>

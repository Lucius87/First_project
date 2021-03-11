<template>
	<section class="content_wrapper section_bar">
		<div class="navbar content">
			<h1 class="title">
				Stanislav Petruk
			</h1>
			<div class="nav_buttons">
				<div v-for="item in menu" :key="item.text" class="button" @click="menuClick(item.link)">
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
	data: () => ({
		menu: [
			{
				text: 'home',
				link: '#1'
			},
			{
				text: 'services',
				link: '#2'
			},
			{
				text: 'works',
				link: '#3'
			},
			{
				text: 'skills',
				link: '#4'
			},
			{
				text: 'testimonials',
				link: '#5'
			},
			{
				text: 'contacts',
				link: '#6'
			}
		]
	}),
	methods: {
		menuClick(link){
			console.log(link)
		}
	},
}
</script>

<style lang="sass" scoped>
.section_bar
	background-color: white
	position: sticky
	top: 0
	z-index: 99
	+tablet
		background: green
	+tabletxl
		background: yellow
	+desktop
		background: blue
	+desktopxl
		background: red
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
	.sub_title
		margin: 0 20px
		text-transform: uppercase
		&:hover
			color: red
			cursor: pointer


</style>

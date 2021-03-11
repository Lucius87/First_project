<template>
	<section class="content_wrapper full_height section_1">
		<div class="center_content">
			<span class="sub_title"> Hello, my name is Stanislav Petruk and i am</span>
			<h1 class="title">
				Junior Web Developer
			</h1>
			<span class="sub_title"> creating modern and responsive Web Application</span>
			<arrow />
		</div>
	</section>
</template>

<script>
import Arrow from './arrow'
export default {
	name: 'Section1',
	components: { Arrow },
	data: () => ({}),
	methods: {}

}
</script>

<style lang="sass" scoped>
.section_1
	background-image: url("/images/pattern.png"), url("/images/cover.jpg")
	background-repeat: repeat, no-repeat
	background-size: 2px, cover
	position: relative
	.center_content
		flex-direction: column
		.sub_title
			font-size: 14px
			color: #fff
		.title
			font-size: 40px
			font-weight: bold
			line-height: 1.2
			margin: 0 10px
			text-transform: uppercase
			padding: 0 20px
			text-align: center
			color: #fff
</style>

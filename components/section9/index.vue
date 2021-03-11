<template>
	<section id="footer" class="footer">
		<div class="content">
			<div>
				<ul class="social_links">
					<li v-for="item in socialLinks" :key="item.icon" class="item">
						<a :href="item.link">
							<i :class="['fa icon', item.icon]" />
						</a>
					</li>
				</ul>
			</div>


			<p>
				Made with
				<span class="fa fa-heart heart" />
				in Moscow
			</p>
			<p>
				@ 2015 John Doe | Images:
				<a class="copyright" href="https://unsplash.com/">
					Unsplash
				</a>
				&
				<a class="copyright" href="http://zoomwalls.com/">
					Zoomwalls
				</a>
			</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Section9',
	data: () => ({
		socialLinks: [
			{
				icon: 'fa-facebook',
				link: '#1'
			},
			{
				icon: 'fa-twitter',
				link: '#1'
			},
			{
				icon: 'fa-google-plus',
				link: '#1'
			},
			{
				icon: 'fa-pinterest',
				link: '#1'
			},
			{
				icon: 'fa-envelope',
				link: '#1'
			}
		]
	}),
	methods: {},
}
</script>

<style lang="sass" scoped>
.footer
	background: #222
	text-align: center
	padding: 40px 0
	color: #FFF
	.social_links
		list-style: none
		margin: auto
		padding: 0
		.item
			display: inline-block
			width: 36px
			height: 36px
			line-height: 35px
			text-align: center
			border: 1px solid #777777
			border-radius: 3px
			color: #777777
			margin: 5px
			.icon
				color: #777777
	.heart
		color: #ff5252
	.copyright
		border-bottom: 1px dotted #fff
		color: #ff5252
		text-decoration: none
</style>

<template>
	<div>
		<intersect :threshold="0.5" @enter="vision(0)">
			<section1 id="home" />
		</intersect>
		<section2 :menu="menu" />
		<intersect :threshold="0.5" @enter="vision(1)">
			<section3 id="services" />
		</intersect>
		<intersect :threshold="0.5" @enter="vision(2)">
			<section4 id="works" />
		</intersect>
		<intersect :threshold="0.5" @enter="vision(3)">
			<section5 id="skills" />
		</intersect>
		<section6 />
		<intersect :threshold="0.5" @enter="vision(4)">
			<section7 id="testimonials" />
		</intersect>
		<intersect :threshold="0.5" @enter="vision(5)">
			<section8 id="contacts" />
		</intersect>
		<section9 />
		<section10 />
	</div>
</template>

<script>
import Section1 from '@/components/section1'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import Section4 from '@/components/section4'
import Section5 from '@/components/section5'
import Section6 from '@/components/section6'
import Section7 from '@/components/section7'
import Section8 from '@/components/section8'
import Section9 from '@/components/section9'
import Section10 from '@/components/section10'
import Intersect from 'vue-intersect'
export default {
	name: 'Index',
	components:{ Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Section10, Intersect },
	data: () => ({
		menu: [
			{
				text: 'home',
				link: '#home',
				active: false
			},
			{
				text: 'services',
				link: '#services',
				active: false
			},
			{
				text: 'works',
				link: '#works',
				active: false
			},
			{
				text: 'skills',
				link: '#skills',
				active: false
			},
			{
				text: 'testimonials',
				link: '#testimonials',
				active: false
			},
			{
				text: 'contacts',
				link: '#contacts',
				active: false
			}
		]
	}),
	computed: {},
	methods: {
		vision(index){
			this.menu.forEach(item => item.active = false)
			this.menu[index].active = true
		}
	},
}
</script>

<style lang="sass" scoped>

</style>

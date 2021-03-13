<template>
	<div>
		<section1 id="home" />
		<section2 :menu="menu"/>
		<section3 id="services" />
		<section4 id="works" />
		<section5 id="skills" />
		<section6 />
		<section7 id="testimonials" />
		<section8 id="contacts" />
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
export default {
	name: 'Index',
	components:{ Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Section10 },
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
				active: true
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
	methods: {},
}
</script>

<style lang="sass" scoped>

</style>

<template>
	<wrapper title="This is what i do" description="No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around." color="whitesmoke">
		<div class="row">
			<box v-for="item in skills" :key="item.text" :title="item.text" :desc="item.desc" :icon="item.icon" />
		</div>
	</wrapper>
</template>

<script>
import Wrapper from '../wrapper'
import Box from '../box'
export default {
	name: 'Section3',
	components: {
		Wrapper,
		Box
	},
	data: () => ({
		skills: [
			{
				text: 'HTML',
				desc: 'Верстка и наполнение',
				icon: '/images/magic_wand.png'
			},
			{
				text: 'CSS',
				desc: 'Красивости',
				icon: '/images/puzzle.png'
			},
			{
				text: 'Javascript',
				desc: 'Возможности',
				icon: '/images/badge.png'
			},
			{
				text: 'Vue.js & Nuxt.js',
				desc: 'Поддержка',
				icon: '/images/question.png'
			}
		],
	}),
	methods:{},
}
</script>

<style lang="sass" scoped>

</style>

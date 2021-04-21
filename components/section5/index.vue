<template>
	<wrapper title="My skills" description="No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around." color="whitesmoke">
		<div class="row">
			<graph-box v-for="item in skills" :key="item.text" :value="item.value" :text="item.text" />
		</div>
	</wrapper>
</template>

<script>
import Wrapper from '../wrapper'
import GraphBox from '../graphBox'
export default {
	name: 'Section5',
	components: {
		Wrapper,
		GraphBox
	},
	data: () => ({
		skills: [
			{
				text: 'HTML',
				value: 80
			},
			{
				text: 'CSS',
				value: 70
			},
			{
				text: 'Javascript',
				value: 70
			},
			{
				text: 'Vue.ls & Nuxt.js',
				value: 60
			}
		]
	}),
	methods: {},
}

</script>

<style lang="sass" scoped>

</style>

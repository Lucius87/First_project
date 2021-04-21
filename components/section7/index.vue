<template>
	<wrapper title="What my clients says" description="Отзывы клиентов и работодателей. Комментарии не проплачены. Но это не точно." color="whitesmoke">
		<slider />
	</wrapper>
</template>

<script>
import Wrapper from '../wrapper'
import Slider from './slider'
export default {
	name: 'Section7',
	components: {
		Wrapper,
		Slider
	},
	data: () => ({}),
	methods: {},
}

</script>

<style lang="sass" scoped>




</style>

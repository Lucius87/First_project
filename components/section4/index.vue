<template>
	<wrapper title="My work" description="Так как я только начал открывать для себя это направление, здесь пока пустовато. Но надеюсь в скором времени это исправить. Быть может однажды здесь будет и ваш сайт." color="#fff">
		<div class="gallery">
			<gallery-box v-for="item in work" :key="item.image" :image="item.image" :text="item.text" />
		</div>
	</wrapper>
</template>

<script>
import Wrapper from '../wrapper'
import GalleryBox from '../galleryBox'
export default {
	name: 'Section4',
	components: {
		GalleryBox,
		Wrapper
	},
	data: () => ({
		work: [
			{
				image: '/images/shark.jpg',
				text: 'Здесь могла бы быть ваша реклама'
			},
			{
				image: '/images/image_2.jpg',
				text: 'Здесь могла бы быть ваша реклама'
			},
			{
				image: '/images/item_3.jpg',
				text: 'Здесь могла бы быть ваша реклама'
			},
			{
				image: '/images/item_4.jpg',
				text: 'Здесь могла бы быть ваша реклама'
			},
			{
				image: '/images/item_5.jpg',
				text: 'Здесь могла бы быть ваша реклама'
			},
			{
				image: '/images/item_6.jpg',
				text: 'Здесь могла бы быть ваша реклама'
			}
		]
	}),
	methods:{},
}

</script>

<style lang="sass" scoped>
.gallery
	width: 100%
	display: flex
	flex-wrap: wrap
	justify-content: space-between
</style>

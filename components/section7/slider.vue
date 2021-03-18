<template>
	<div class="slider">
		<div :class="['red_line', {'progress': animate} ]" />
		<transition name="fade">
			<div v-if="animate" class="row">
				<div class="review">
					<p class="quote">
						{{ activeSlideData.text }}
					</p>
					<h4 class="sign">
						{{ activeSlideData.sign }}
					</h4>
				</div>
				<img class="avatar" height="140" alt="client_1" :src="activeSlideData.avatar">
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Slider',
	data: () => ({
		animate: false,
		activeSlide: 0,
		review: [
			{
				text: 'Стопроцентное качество и в минимальные сроки. Дорого и сердито. Отзыв не проплачен. Но это не точно.',
				sign: '- John Doe',
				avatar: 'images/client_1.jpg'
			},
			{
				text: 'kjfd;kjfdk;lj;lkjsikoih sdjsdkj sdjsjd pojsdpjsddssj',
				sign: '- John Doe',
				avatar: 'images/client_1.jpg'
			},
			{
				text: 'Стопроцентное качество и в минимальные сроки. Дорого и сердито. Отзыв не проплачен. Но это не точно.',
				sign: '- Jane Doe',
				avatar: 'images/client_2.jpg'
			}
		]
	}),
	computed:{
		activeSlideData(){
			return this.review[this.activeSlide]
		}
	},
	mounted() {
		this.timer()
		setTimeout(()=>{this.animate = true})
	},
	methods: {
		timer(){
			setInterval(()=>{
				this.animate = false
				if(this.activeSlide<this.review.length-1){
					this.activeSlide++
				}
				else{
					this.activeSlide = 0
				}
				setTimeout(()=>{
					this.animate = true
				},500)
			}, 5000)
		}
	},
}
</script>

<style lang="sass" scoped>
.slider
	overflow: hidden
	.red_line
		margin-top: 42px
		margin-bottom: 25px
		height: 1px
		width: 100%
		background: red
		transform: translateX(-99.9%)
		&.progress
			transform: translateX(0)
			transition: all 4.5s ease-out
	.row
		margin: 0
		justify-content: space-between
		.review
			display: flex
			flex-direction: column
			text-align: left
			justify-content: space-between
			.quote
				margin-top: 10px
				font-size: 16px
				color: #777
				width: 100%
			.sign
				margin-top: 24px
				font-weight: 300
				font-size: 13px
				color: #777
		.avatar
			float: right
			margin-left: 42px
.fade-enter-active,.fade-leave-active
	transition: all 1s
.fade-enter
	opacity: 0
	transform: translateX(100%)
.fade-enter-to
	opacity: 1
	transform: translateX(0)
.fade-leave
	opacity: 1
	transform: translateX(0)
.fade-leave-to
	opacity: 0
	transform: translateX(-100%)
</style>

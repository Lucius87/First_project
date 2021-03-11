<template>
	<wrapper title="What my clients says" description="No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around." color="whitesmoke">
		<div class="red_line" />
		<div class="row">
			<div class="review">
				<p class="quote">
					Стопроцентное качество и в минимальные сроки. Дорого и сердито. Отзыв не проплачен. Но это не точно.
				</p>
				<h4 class="sign">
					- Jane Doe
				</h4>
			</div>
			<img class="avatar" alt="" src="/images/client_2.jpg">
		</div>
	</wrapper>
</template>

<script>
import Wrapper from '../wrapper'

export default {
	name: 'Section7',
	components: {
		Wrapper
	},
	data: () => ({}),
	methods: {},
}

</script>

<style lang="sass" scoped>

.red_line
	margin-top: 42px
	height: 1px
	background: red
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



</style>

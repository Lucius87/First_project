<template>
	<wrapper title="Drop me a line" description="No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around." color="white">
		<form id="contact_form" class="contact_f" role="form">
			<label for="name" class="form_label">
				Name
			</label>
			<input id="name" type="text" class="form_control" placeholder="Name">
			<label for="email" class="form_label">
				E-mail
			</label>
			<input id="email" type="email" class="form_control" placeholder="E-mail">
			<label for="message" class="form_label">
				Message
			</label>
			<textarea id="message" class="form_group" name="message" rows="7" placeholder="Message" />
			<button type="submit" class="send_button">
				Send Message
			</button>
		</form>
	</wrapper>
</template>

<script>
import Wrapper from '../wrapper'
export default {
	name: 'Section8',
	components: {
		Wrapper
	},
	data: () => ({}),
	methods:{},
}

</script>

<style lang="sass" scoped>

.contact_f
	display: flex
	flex-direction: column
	margin-top: 60px
	padding: 0 25%
	.form_label
		position: absolute
		width: 1px
		height: 1px
		padding: 0
		margin: -1px
		overflow: hidden
		clip: rect(0,0,0,0)
		border: 0
	.form_control
		background: #ffffff
		border: 1px solid #d8e1e4
		height: 34px
		font-size: 12px
		padding: 0 15px
		margin-top: 15px
		border-radius: 3px
	.form_group
		background: #ffffff
		border: 1px solid #d8e1e4
		font-size: 12px
		line-height: 1.43
		padding: 15px
		margin-top: 15px
		border-radius: 3px
	.send_button
		margin-top: 15px
		padding: 10px 25px
		font-size: 13px
		color: white
		background: #171717
		text-transform: uppercase
		border-radius: 3px




</style>

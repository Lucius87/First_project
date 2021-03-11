<template>
	<div class="box">
		<div class="progress-circle">
			<svg class="circle-graph">
				<g>
					<circle cx="-40" cy="40" r="68" class="background-circle circle" transform="translate(50,50) rotate(-90)" />
				</g>
				<g>
					<circle cx="-40" cy="40" r="68" class="animated-circle circle" transform="translate(50,50) rotate(-90)" :style="{'stroke-dashoffset':calculate}" />
				</g>
				<g>
					<circle cx="40" cy="40" r="63" class="circle" transform="translate(50,50)" />
				</g>
			</svg>
			<div class="progress-circle-count">
				{{ value }}%
			</div>
		</div>
		<h3 class="title">
			{{ text }}
		</h3>
	</div>
</template>

<script>
export default {
	name: 'GraphBox',
	props:{
		value: {
			type: Number,
			default: 20
		},
		text: {
			type: String,
			default: 'empty text'
		}
	},
	data: () => ({}),
	computed: {
		calculate(){
			return 430 - 430 * this.value / 100
		}
	},
	methods: {},
}
</script>

<style lang="sass" scoped>
.box
	width: 25%
	margin: 0 15px
	padding: 40px 20px
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	.title
		font-size: 13px
		text-align: center
/* Circle Graph */
.progress-circle
	position: relative
	//top: 30px;
	width: 200px
	height: 200px
	.circle-graph
		position: absolute
		width: 200px
		height: 200px
		.circle
			fill: transparent
		.background-circle
			stroke-width: 10px
			stroke: #f1f2f1
			stroke-dasharray: 430
		.animated-circle
			fill: transparent
			stroke-width: 10px
			stroke: #e5554e
			stroke-dasharray: 430
			stroke-dashoffset: 430 - 20
	.progress-circle-count
		position: absolute
		top: 66px
		left: -10px
		width: 100%
		height: 100%
		text-align: center
		line-height: 50px
		color: #666
		font-size: 44px


</style>

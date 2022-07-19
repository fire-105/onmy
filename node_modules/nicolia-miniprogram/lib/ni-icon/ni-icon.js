Component({
	properties: {
		dot: Boolean,
		info: null,
		size: null,
		color: String,
		customStyle: String,
		classPrefix: {
			type: String,
			value: 'ni-icon',
		},
		name: String,
	},
	data: {},
	methods: {
		onClick: function () {
			this.triggerEvent('click');
		},
	},
});

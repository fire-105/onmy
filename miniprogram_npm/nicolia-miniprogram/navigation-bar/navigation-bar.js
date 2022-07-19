Component({
	properties: {
		height: {
			type: Number,
			value: 56,
		},
		possibleReturn: {
			type: Boolean,
			value: true,
		},
		title: {
			type: String,
			value: '',
		},
		color: {
			type: String,
			value: '#323233',
		},
		bgColor: {
			type: String,
			value: '#fff',
		},
	},
	data: {},
	methods: {
		goback() {
			wx.navigateBack({
				delta: 1,
			});
		},
	},
});

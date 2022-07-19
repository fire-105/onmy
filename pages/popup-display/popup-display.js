// pages/popup-display/popup-display.js
const OPTIONS = [
	{
		value: 'top',
		label: '顶部弹出',
	},
	{
		value: 'bottom',
		label: '底部弹出',
	},
	{
		value: 'left',
		label: '左侧弹出',
	},
	{
		value: 'right',
		label: '右侧弹出',
	},
];
Page({
	data: {
		show: false,
		direction: 'bottom',
		text: '',
		options: OPTIONS,
	},
	handlePress(e) {
		const { value } = e.currentTarget.dataset;

		this.setData({
			direction: value,
			text: value,
		});

		setTimeout(() => {
			this.setData({
				show: true,
			});
		}, 300);
	},
	handleClose() {
		this.setData({
			show: false,
		});
	},
});

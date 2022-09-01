const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: 'src/ads.txt' },
			],
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

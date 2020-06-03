const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// stats: 'errors-only',
	stats: {
		colors: true,
		hash: false,
		version: false,
		timings: true,
		assets: true,
		chunks: false,
		modules: false,
		reasons: true,
		children: false,
		source: false,
		errors: true,
		errorDetails: true,
		warnings: true,
		publicPath: true,
	},
	// JavaScript
	// entry: {
	// 	index: './src/index.js',
	// },

	// Typescript
	entry: './src/main.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	//
	plugins: [
		// new CleanWebpackPlugin(),
		// new HtmlWebpackPlugin({
		// 	title: 'My 1st Webpack Application',
		// }),
	],
	// output: {
	// 	filename: '[name].bundle.js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },
};

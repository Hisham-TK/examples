const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	// mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		// Watch
		watchContentBase: true,

		// Watch path
		contentBase: './src',

		// Fast reload
		hot: true,

		// Server port
		port: 1234,

		// Open in browser
		// open: true,

		// Use new http version 2
		// http2: true,

		// Use ssl
		// https: true,
	},
});

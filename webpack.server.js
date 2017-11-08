const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	// Inform webpack that we are building a bundle for node
	target: 'node',

	// Tell webpack the root file of our server application
	entry: './src/index.js',

	// Tell webpack where to output the build
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { isAbsoluteURL } = require('webpack-dev-server')

const webpackConfig = {
	mode: 'production',
	entry: {
		main: path.resolve(__dirname, './src/index.js')
	},

	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, './dist')
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			title: 'webpack template',
			template: path.resolve(__dirname, './src/template.html'),
			minify: true,
			filename: 'template.html'
		}),

		new HtmlWebpackPlugin({
			title: 'webpack index',
			template: path.resolve(__dirname, './src/pages/index.html'),
			minify: true,
			filename: 'index.html'
		}),

		new HtmlWebpackPlugin({
			title: 'webpack about',
			template: path.resolve(__dirname, './src/pages/about.html'),
			minify: true,
			filename: 'about.html'
		})
	]
}

module.exports = webpackConfig

// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { isAbsoluteURL } = require('webpack-dev-server')
const CopyPlugin = require('copy-webpack-plugin')

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

		new CopyPlugin({
			patterns: [
				{
					from: '**/*.jpg',
					to: 'images'
				}
			]
		}),

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
			title: 'webpack news',
			template: path.resolve(__dirname, './src/pages/news.html'),
			minify: true,
			filename: 'news.html'
		}),

		new HtmlWebpackPlugin({
			title: 'webpack photo',
			template: path.resolve(__dirname, './src/pages/photo.html'),
			minify: true,
			filename: 'photo.html'
		}),

		new HtmlWebpackPlugin({
			title: 'webpack rozklad',
			template: path.resolve(__dirname, './src/pages/rozklad.html'),
			minify: true,
			filename: 'rozklad.html'
		})
	]
}

module.exports = webpackConfig

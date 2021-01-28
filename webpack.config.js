const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: './app.bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [

			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								fiber: require("fibers"),
							},
						},
					},
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		]
	},

	plugins: [
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'MUSINSA UI TEST',
			template: './src/html/main.html',
			filename: './main.html',
		}),
		new HtmlWebpackPlugin({
			title: 'MUSINSA UI TEST',
			template: './src/html/index.html',
			filename: './index.html',
		})
	]
};


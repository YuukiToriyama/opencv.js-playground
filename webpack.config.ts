import path from 'path';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

interface Configuration extends WebpackConfiguration {
	devServer: WebpackDevServerConfiguration;
}

const config: Configuration = {
	context: path.join(__dirname, 'src'),
	entry: {
		styled: ['styled-components'],
		app: './index.tsx'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		],
	},
	mode: "development",
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [
		new webpack.optimize.SplitChunksPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: '../public/index.html'
		}),
		new MonacoWebpackPlugin()
	],
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		open: true,
		port: 3000,
	},
};

export default config;
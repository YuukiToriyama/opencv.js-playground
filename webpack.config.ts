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
		app: './index.tsx',
		'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
		'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
		'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
		'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
		'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]-[fullhash].js',
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
				type: 'asset/resource'
			},
			{
				test: /\.(png|jpg)$/,
				type: 'asset/resource'
			},
			{
				test: /\.md$/,
				type: 'asset/source'
			}
		],
	},
	mode: "development",
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [
		new webpack.optimize.SplitChunksPlugin({
			name: 'styled',
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: '../public/index.html'
		}),
		new MonacoWebpackPlugin({
			languages: ["javascript", "typescript"]
		})
	],
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		open: true,
		port: 3000,
	},
};

export default config;
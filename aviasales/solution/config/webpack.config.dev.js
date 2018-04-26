const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const srcPath = path.join(__dirname, '..', 'src');


module.exports = {
	mode: 'development',
	context: srcPath,
	entry: [
    'webpack-hot-middleware/client',
		'./index.js'
	],
	output: {
		path: srcPath,
		filename: 'bundle.js',
		publicPath: '/static'
	},
	resolve: {
        modules: ['node_modules', 'src'],
        alias: {
            '~': srcPath
        },
        plugins: [
            new DirectoryNamedWebpackPlugin(true)
        ]
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          }
        ]
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]',
          publicPath: '/static'
        }
      }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	target: 'web',
  devtool: 'source-map'
};

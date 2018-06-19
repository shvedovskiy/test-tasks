// @flow
import path from 'path';
import webpack from 'webpack';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import autoprefixer from 'autoprefixer';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import dotenv from 'dotenv';


dotenv.config();

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const common = {
  context: srcPath,
  entry: [
    '@babel/polyfill',
    './client',
  ],
  output: {
    path: distPath,
  },
  resolve: {
    modules: [
      'node_modules',
      'src/client',
    ],
    alias: {
      '~': path.resolve(srcPath, 'client'),
    },
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.json',
    ],
    plugins: [
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(svg|gif|jpe?g|png|ico)(\?[a-z00-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]',
          publicPath: process.env.STATIC_PATH,
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.join('..', 'public', 'index.html'),
      inject: false,
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};

const development = {
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    publicPath: `http://localhost:${process.env.WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer('> 1%'),
              ],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    port: process.env.WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};

const production = {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  output: {
    filename: 'bundle.[chunkhash].js',
    publicPath: process.env.STATIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer('> 1%'),
                ],
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    occurrenceOrder: true,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true,
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(jsx?|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
    new WebpackMd5Hash(),
  ],
};

if (process.env.NODE_ANALYZE) {
  production.plugins.push(new BundleAnalyzerPlugin());
}

export default (process.env.NODE_ENV === 'production'
  ? merge(common, production)
  : merge(common, development)
);

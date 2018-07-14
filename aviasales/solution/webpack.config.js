// @flow
const path = require('path');
const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');


dotenv.config();

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const common = {
  output: {
    path: distPath,
  },
  resolve: {
    modules: [
      'node_modules',
      './src',
    ],
    alias: {
      src: path.resolve(srcPath, 'client'),
    },
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.json',
    ],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    noEmitOnErrors: true,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
    }),
    new HtmlWebpackPlugin({
      template: path.join('public', 'index.html'),
      inject: false,
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};

const development = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    '@babel/polyfill',
    './src/client',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: `http://localhost:${process.env.WDS_PORT || 7000}/dist/`,
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
              ident: 'postcss',
              plugins: () => [
                autoprefixer(),
                postcssPresetEnv({ stage: 0 }),
              ],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|gif|jpe?g|png|ico)(\?[a-z00-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]',
          publicPath: `http://localhost:${process.env.WDS_PORT || 7000}/dist/`,
        },
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
  entry: {
    main: './src/client',
    vendor: ['@babel/polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'moment', 'lodash', 'reselect', 'seamless-immutable'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
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
                ident: 'postcss',
                plugins: () => [
                  autoprefixer(),
                  postcssPresetEnv({ stage: 0 }),
                ],
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(svg|gif|jpe?g|png|ico)(\?[a-z00-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'media/',
          publicPath: `${process.env.STATIC_PATH || '/static/'}media`,
        },
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
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: false,
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

module.exports = (process.env.NODE_ENV === 'production'
  ? merge(common, production)
  : merge(common, development)
);

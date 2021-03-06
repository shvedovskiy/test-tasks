const path = require('path');
const webpack = require('webpack');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
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
      shared: path.resolve(srcPath, 'shared'),
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        STATIC_PATH: JSON.stringify(process.env.STATIC_PATH),
        SERVER_HOSTNAME: JSON.stringify(process.env.SERVER_HOSTNAME),
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
        DEV_SERVER_PORT: JSON.stringify(process.env.DEV_SERVER_PORT),
        HTTPS: JSON.stringify(process.env.HTTPS),
        FIXER_API_KEY: JSON.stringify(process.env.FIXER_API_KEY),
        NOW: JSON.stringify(process.env.NOW),
        NOW_URL: JSON.stringify(process.env.NOW_URL),
      },
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
          publicPath: `http://localhost:${process.env.WDS_PORT}/dist/`,
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
    vendor: ['@babel/polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'dayjs', 'reselect', 'seamless-immutable'],
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
                  cssnano({ preset: 'default' }),
                ],
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(svg|gif|jpe?g|png|ico)(\?[a-z00-9]+)?$/,
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          limit: '10000',
          name: '[name].[hash].[ext]',
          outputPath: 'media/',
          publicPath: `${process.env.STATIC_PATH}media`,
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

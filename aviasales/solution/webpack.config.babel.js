// @flow
import path from 'path';
import webpack from 'webpack';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import autoprefixer from 'autoprefixer';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import merge from 'webpack-merge';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CompressionWebpackPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


const {
  NODE_ENV,
  SERVER_HOSTNAME,
  SERVER_PORT,
  HTTPS,
  WDS_PORT,
} = process.env;
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');


const common = {
  context: srcPath,
  entry: [
    './client',
  ],
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  resolve: {
    modules: [
      'node_modules',
      'src/client',
    ],
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
          publicPath: '/static/',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        HTTPS: JSON.stringify(HTTPS),
        SERVER_HOSTNAME: JSON.stringify(SERVER_HOSTNAME),
        SERVER_PORT: JSON.stringify(SERVER_PORT),
      },
    }),
  ],
};

const development = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
  ],
  output: {
    publicPath: `http://localhost:${WDS_PORT}/dist/`,
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
    port: WDS_PORT,
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
    path: /static/,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(['dist'], { root: __dirname }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(jsx?|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

if (process.env.NODE_ANALYZE) {
  production.plugins.push(new BundleAnalyzerPlugin());
}

export default (NODE_ENV === 'development'
  ? merge(common, development)
  : merge(common, production)
);

import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import rimraf from 'rimraf';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';


const srcPath = path.join(__dirname, '..', 'src');
const outputPath = path.join(__dirname, '..', 'dist');

export default {
  mode: 'production',
  context: srcPath,
  entry: [
    './index.js',
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    alias: {
      '~': srcPath,
    },
    plugins: [
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
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
              plugins: [autoprefixer()],
            },
          },
        ],
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'media/[name].[ext]',
          publicPath: '/static/',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_HOSTNAME: JSON.stringify(process.env.SERVER_HOSTNAME),
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
      },
    }),
    () => {
      /* eslint-disable no-console */
      console.info('Clearing /dist directory');
      /* eslint-disable-next-line global-require */
      rimraf.sync(outputPath, require('fs'), (err) => {
        if (err) {
          console.error('Clearing of /dist directory failed', err);
        }
      });
      /* eslint-enable no-console */
    },
  ],
  target: 'web',
};

import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';


const srcPath = path.join(__dirname, '..', 'src');

export default {
  mode: 'development',
  context: srcPath,
  entry: [
    'webpack-hot-middleware/client',
    './index.js',
  ],
  output: {
    path: srcPath,
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_HOSTNAME: JSON.stringify(process.env.SERVER_HOSTNAME),
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
      },
    }),
  ],
  target: 'web',
  devtool: 'source-map',
};
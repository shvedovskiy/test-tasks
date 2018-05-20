const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const rimraf = require('rimraf');

const srcPath = path.join(__dirname, '..', 'src');
const outputPath = path.join(__dirname, '..', 'dist');


module.exports = {
    mode: 'production',
    context: srcPath,
    entry: './index.js',
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        alias: {
            '~': path.join(srcPath)
        },
        plugins: [
            new DirectoryNamedWebpackPlugin(true)
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
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
                    publicPath: '/static/'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        () => {
            console.info('Clearing /dist directory');
            rimraf.sync(outputPath, require('fs'), err => {
                if (err) console.error('Clearing of /dist directory failed', err);
            });
        }
    ],
    target: 'web'
};
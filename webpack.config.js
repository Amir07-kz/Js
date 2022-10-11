const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const EncodingPlugin = require('webpack-encoding-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (env, options) => {
    const developmentMode = options.mode !== 'production';

    return {
        entry: {
            'vue-core': './vue/index.js',
        },
        output: {
            path: path.resolve(__dirname, './vue/build/'),
            filename: '[name].js',
            publicPath: 'build',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: path.resolve(__dirname, './node_modules/'),
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpe?g$|\.gif$/,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new EncodingPlugin({ encoding: 'utf-8' }),
            new MomentLocalesPlugin({ localesToKeep: [ 'ru' ] }),
        ],
        devtool: developmentMode ? 'eval-source-map' : 'cheap-source-map',
    };
};

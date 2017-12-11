const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.(less|css)$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
              configFile: path.resolve(__dirname, '.eslintrc'),
            },
            loader: 'eslint-loader'
          }]
    },
    plugins: [
        new webpack.DefinePlugin({
            MOCK: false
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        progress: true,
        port: 3000,
        proxy: {
            '/operation-platform/*': {
                target: 'http://121.40.68.47:8212/',
                changeOrigin: true,
                secure: false
            }
        }

    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);
const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    performance: {
        hints: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Welcome',
        }),
    ],
    entry: glob.sync('./src/**/*.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    }
};
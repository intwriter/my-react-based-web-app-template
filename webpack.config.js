const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

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
    resolve: {
        alias: {
            app_components_path: path.resolve(__dirname, 'src/components/')
        },
    },
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
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            })
        ]
    },
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    }
};
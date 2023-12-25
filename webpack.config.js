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
            app_components_path: path.resolve(__dirname, 'src/components/'),
            app_themes_path: path.resolve(__dirname, 'src/assets/styles/themes/')
        },
    },
    entry: {
        index: './src/index.js'
    },
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
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    },
    devServer: {
        open: true,
    }
};
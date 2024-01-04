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
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            app_components_path: path.resolve(__dirname, 'src/components/'),
            app_themes_path: path.resolve(__dirname, 'src/assets/styles/themes/'),
            app_hooks_path: path.resolve(__dirname, 'src/hooks/')
        },
    },
    entry: {
        index: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },
    output: {
        clean: true,
        filename: 'assets/[contenthash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        open: true,
    }
};
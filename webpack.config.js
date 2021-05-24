const path = require('path');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const DotenvPlugin = new Dotenv();

console.log(__dirname)
module.exports = {
    entry: __dirname + '/src/index.tsx',
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/dist',
        publicPath: '/' //reload page when refresh browser (react-router /ex/ex)
    },
    devServer: {
        contentBase: './dist',
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        HTMLWebpackPluginConfig,
        DotenvPlugin
    ],
    mode: 'development'
}

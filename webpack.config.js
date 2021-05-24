const path = require('path');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const DotenvPlugin = new Dotenv();
const CheckerPluginConfig = new CheckerPlugin();


console.log(__dirname)
module.exports = {
    entry: __dirname + '/src/index.tsx',
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
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
        DotenvPlugin,
        CheckerPluginConfig
    ],
    mode: 'development'
}

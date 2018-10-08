const webpack = require( 'webpack' )
const path = require( 'path' )
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const production = process.env.NODE_ENV === 'production' ? '.min' : ''

const alias = {}

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        main: './src/main/index.js'
    },
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: '[name].bundle' + production + '.js',
    },
    resolve: {
        alias
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
    ]
}
